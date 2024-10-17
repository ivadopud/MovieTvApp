import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieTvSignalService } from '../../services/movie-tv.signal.service.';
import { MatIconModule } from '@angular/material/icon';
import { RoundPipe } from '../../pipes/round.pipe';

@Component({
  standalone: true,
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss'],
  imports: [CommonModule, MatIconModule, RoundPipe]
})
export class ItemDetailComponent implements OnInit {
  itemId!: string;
  item$ = signal<any | null>(null);
  isTvShow!: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movieTvService: MovieTvSignalService 
  ) {}

  ngOnInit(): void {
    this.itemId = this.route.snapshot.paramMap.get('id') || '';
    this.isTvShow = this.route.snapshot.url[0].path === 'tv-shows';

    if (this.isTvShow) {
      this.loadTvShow();
    } else {
      this.loadMovie();
    }
  }

  private loadTvShow(): void {
    const tvShow = this.movieTvService.tvShows().find(show => show.id === +this.itemId);
    if (tvShow) {
      this.item$.set(tvShow);
    } else {
      this.movieTvService.getTvShowById(this.itemId).subscribe(tvShow => this.item$.set(tvShow));
    }
  }

  private loadMovie(): void {
    const movie = this.movieTvService.movies().find(movie => movie.id === +this.itemId);
    if (movie) {
      this.item$.set(movie);
    } else {
      this.movieTvService.getMovieById(this.itemId).subscribe(movie => this.item$.set(movie));
    }
  }

  goBack(): void {
    this.router.navigate([this.isTvShow ? '/tv-shows' : '/movies']);
  }
}
