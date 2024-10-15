import { createSelector, createFeatureSelector } from '@ngrx/store';
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

export const selectMovieById = (id: string) =>
  createSelector(selectMovieTvState, (state: MovieTvState) =>
    state.movies.find(movie => movie.id === +id)
  );

export const selectTvShowById = (id: string) =>
  createSelector(selectMovieTvState, (state: MovieTvState) =>
    state.tvShows.find(show => show.id === +id)
  );
