import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MovieTvState } from './movies-tv.reducer';

export const selectMovieTvState = createFeatureSelector<MovieTvState>('movieTv');

export const selectTopMovies = createSelector(
  selectMovieTvState,
  (state: MovieTvState) => state.movies
);

export const selectTopTvShows = createSelector(
  selectMovieTvState,
  (state: MovieTvState) => state.tvShows
);
