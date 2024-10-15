import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectTopTvShows } from '../../store/movies-tv.selectors';
import { loadTopTvShows } from '../../store/movies-tv.actions';
import { RoundPipe } from '../../pipes/round.pipe';
import { RouterModule, Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-tv-shows-list',
  templateUrl: './tv-shows-list.component.html',
  styleUrls: ['./tv-shows-list.component.scss'],
  imports: [CommonModule, MatCardModule, RoundPipe, RouterModule]
})
export class TvShowsListComponent implements OnInit {
  tvShows$!: Observable<any[]>;
  private currentPage = 1;
  private itemsPerPage = 10; // Add limit (items per page)

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    if (this.isTvShowsRoute()) {
      this.tvShows$ = this.store.select(selectTopTvShows);
      this.loadMoreTvShows();
    }
  }

  loadMoreTvShows(): void {
    this.store.dispatch(loadTopTvShows({ page: this.currentPage }));
    this.currentPage++;
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollPosition = window.innerHeight + window.scrollY;
    const threshold = document.documentElement.scrollHeight;

    if (this.isTvShowsRoute() && scrollPosition >= threshold) {
      this.loadMoreTvShows();
    }
  }

  private isTvShowsRoute(): boolean {
    return this.router.url.includes('/tv-shows');
  }

  goToDetail(show: any): void {
    this.router.navigate(['/tv-shows', show.id]);
  }
}