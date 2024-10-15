import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectTopMovies } from '../../store/movies-tv.selectors';
import { loadTopMovies } from '../../store/movies-tv.actions';
import { RoundPipe } from '../../pipes/round.pipe';
import { RouterModule, Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
  imports: [CommonModule, MatCardModule, RoundPipe, RouterModule]
})
export class MoviesListComponent implements OnInit {
  movies$!: Observable<any[]>;
  private currentPage = 1;

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    if (this.isMoviesRoute()) {
      this.movies$ = this.store.select(selectTopMovies);
      this.loadMoreMovies();
    }
  }

  loadMoreMovies(): void {
    this.store.dispatch(loadTopMovies({ page: this.currentPage }));
    this.currentPage++;
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollPosition = window.innerHeight + window.scrollY;
    const threshold = document.documentElement.scrollHeight;

    if (this.isMoviesRoute() && scrollPosition >= threshold) {
      this.loadMoreMovies();
    }
  }

  private isMoviesRoute(): boolean {
    return this.router.url.includes('/movies');
  }
}
