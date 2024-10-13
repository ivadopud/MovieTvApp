import { createReducer, on } from '@ngrx/store';
import * as MovieTvActions from './movies-tv.actions';

export interface MovieTvState {
  movies: any[];
  tvShows: any[];
}

const initialState: MovieTvState = {
  movies: [],
  tvShows: []
};

export const movieTvReducer = createReducer(
  initialState,
  on(MovieTvActions.loadTopMoviesSuccess, (state, { movies }) => ({
    ...state,
    movies: [...state.movies, ...movies]
  })),
  
  on(MovieTvActions.loadTopTvShowsSuccess, (state, { tvShows }) => ({
    ...state,
    tvShows: [...state.tvShows, ...tvShows]
  }))
);
