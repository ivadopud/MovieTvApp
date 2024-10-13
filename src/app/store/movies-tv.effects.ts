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
    console.log('MovieTvEffects constructor');

    this.actions$.subscribe(action => {
      if (action.type === MovieTvActions.loadTopMovies.type) {
        this.loadMovies();
      }
    });

    this.actions$.subscribe(action => {
      if (action.type === MovieTvActions.loadTopTvShows.type) {
        this.loadTvShows();
      }
    });
  }

  private loadMovies(): void {
    this.movieTvService.getTopMovies().subscribe({
      next: (response) => {
        this.store.dispatch(MovieTvActions.loadTopMoviesSuccess({ movies: response.results.slice(0, 10) }));
      },
      error: (error) => {
        console.error('Error loading movies:', error);
        this.store.dispatch({ type: '[Movies API] Movies Loaded Error' });
      }
    });
  }

  private loadTvShows(): void {
    this.movieTvService.getTopTvShows().subscribe({
      next: (response) => {
        this.store.dispatch(MovieTvActions.loadTopTvShowsSuccess({ tvShows: response.results.slice(0, 10) }));
      },
      error: (error) => {
        console.error('Error loading TV shows:', error);
        this.store.dispatch({ type: '[TV Shows API] TV Shows Loaded Error' });
      }
    });
  }
}
