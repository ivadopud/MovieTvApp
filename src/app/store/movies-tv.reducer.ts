import { createReducer, on } from '@ngrx/store';
import * as MovieTvActions from './movies-tv.actions';

export interface MovieTvState {
  movies: any[];
  tvShows: any[];
  selectedMovie: any | null;
  selectedTvShow: any | null;
}

const initialState: MovieTvState = {
  movies: [],
  tvShows: [],
  selectedMovie: null,
  selectedTvShow: null
};

export const movieTvReducer = createReducer(
  initialState,
  on(MovieTvActions.loadTopMoviesSuccess, (state, { movies }) => ({
    ...state,
    movies: [
      ...state.movies.filter((existingMovie) => !movies.some((newMovie) => newMovie.id === existingMovie.id)),
      ...movies
    ]
  })),

  on(MovieTvActions.loadMovieSuccess, (state, { movie }) => ({
    ...state,
    selectedMovie: movie
  })),

  on(MovieTvActions.loadTopTvShowsSuccess, (state, { tvShows }) => ({
    ...state,
    tvShows: [
      ...state.tvShows.filter((existingShow) => !tvShows.some((newShow) => newShow.id === existingShow.id)),
      ...tvShows
    ]
  })),

  on(MovieTvActions.loadTvShowSuccess, (state, { tvShow }) => ({
    ...state,
    selectedTvShow: tvShow
  }))
);
