import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MovieTvState } from './movies-tv.reducer';

export const selectMovieTvState = createFeatureSelector<MovieTvState>('movieTv');

// Select movies from the store
export const selectTopMovies = createSelector(
  selectMovieTvState,
  (state: MovieTvState) => state.movies
);

// Select TV shows from the store
export const selectTopTvShows = createSelector(
  selectMovieTvState,
  (state: MovieTvState) => state.tvShows
);
