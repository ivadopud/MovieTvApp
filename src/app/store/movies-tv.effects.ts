import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { MovieTvService } from '../services/movie-tv.service';
import { Store } from '@ngrx/store';
import * as MovieTvActions from './movies-tv.actions';

@Injectable()
export class MovieTvEffects {
  constructor(
    private actions$: Actions,
    private movieTvService: MovieTvService,
    private store: Store
  ) {
    this.actions$.subscribe(action => {
      if (action.type === MovieTvActions.loadTopMovies.type) {
        const loadMoviesAction = action as ReturnType<typeof MovieTvActions.loadTopMovies>;
        this.loadMovies(loadMoviesAction.page);
      }
    });

    this.actions$.subscribe(action => {
      if (action.type === MovieTvActions.loadTopTvShows.type) {
        const loadTvShowsAction = action as ReturnType<typeof MovieTvActions.loadTopTvShows>;
        this.loadTvShows(loadTvShowsAction.page);
      }
    });
  }

  private loadMovies(page: number): void {
    this.movieTvService.getTopMovies(page).subscribe({
      next: (response) => {
        this.store.dispatch(MovieTvActions.loadTopMoviesSuccess({ movies: response.results }));
      },
      error: (error) => {
        console.error('Error loading movies:', error);
        this.store.dispatch(MovieTvActions.loadTopMoviesFailure({ error }));
      }
    });
  }

  private loadTvShows(page: number): void {
    this.movieTvService.getTopTvShows(page).subscribe({
      next: (response) => {
        this.store.dispatch(MovieTvActions.loadTopTvShowsSuccess({ tvShows: response.results }));
      },
      error: (error) => {
        console.error('Error loading TV shows:', error);
        this.store.dispatch(MovieTvActions.loadTopTvShowsFailure({ error }));
      }
    });
  }
}
