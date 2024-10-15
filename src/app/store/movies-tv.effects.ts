import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { MovieTvSignalService } from '../services/movie-tv.signal.service.';
import { Store } from '@ngrx/store';
import * as MovieTvActions from './movies-tv.actions';

@Injectable()
export class MovieTvEffects {
  constructor(
    private actions$: Actions,
    private movieTvService: MovieTvSignalService,
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

    this.actions$.subscribe(action => {
      if (action.type === MovieTvActions.loadMovie.type) {
        const loadMovieAction = action as ReturnType<typeof MovieTvActions.loadMovie>;
        this.loadMovieById(loadMovieAction.id);
      }
    });

    this.actions$.subscribe(action => {
      if (action.type === MovieTvActions.loadTvShow.type) {
        const loadTvShowAction = action as ReturnType<typeof MovieTvActions.loadTvShow>;
        this.loadTvShowById(loadTvShowAction.id);
      }
    });
  }

  private loadMovies(page: number): void {
    this.movieTvService.getTopMovies(page).subscribe({
      next: (response) => {
        this.store.dispatch(MovieTvActions.loadTopMoviesSuccess({ movies: response.results }));
      },
      error: (error) => {
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
        this.store.dispatch(MovieTvActions.loadTopTvShowsFailure({ error }));
      }
    });
  }

  private loadMovieById(id: string): void {
    this.movieTvService.getMovieById(id).subscribe({
      next: (movie) => {
        this.store.dispatch(MovieTvActions.loadMovieSuccess({ movie }));
      },
      error: (error) => {
        this.store.dispatch(MovieTvActions.loadMovieFailure({ error }));
      }
    });
  }

  private loadTvShowById(id: string): void {
    this.movieTvService.getTvShowById(id).subscribe({
      next: (tvShow) => {
        this.store.dispatch(MovieTvActions.loadTvShowSuccess({ tvShow }));
      },
      error: (error) => {
        this.store.dispatch(MovieTvActions.loadTvShowFailure({ error }));
      }
    });
  }
}
