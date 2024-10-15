import { createAction, props } from '@ngrx/store';

export const loadTopMovies = createAction('[Movies] Load Top Movies', props<{ page: number }>());
export const loadTopMoviesSuccess = createAction('[Movies] Load Top Movies Success', props<{ movies: any[] }>());
export const loadTopMoviesFailure = createAction('[Movies] Load Top Movies Failure', props<{ error: any }>());

export const loadTopTvShows = createAction('[TV Shows] Load Top TV Shows', props<{ page: number }>());
export const loadTopTvShowsSuccess = createAction('[TV Shows] Load Top TV Shows Success', props<{ tvShows: any[] }>());
export const loadTopTvShowsFailure = createAction('[TV Shows] Load Top TV Shows Failure', props<{ error: any }>());

export const loadMovie = createAction('[Movies] Load Movie', props<{ id: string }>());
export const loadMovieSuccess = createAction('[Movies] Load Movie Success', props<{ movie: any }>());
export const loadMovieFailure = createAction('[Movies] Load Movie Failure', props<{ error: any }>());

export const loadTvShow = createAction('[TV Shows] Load TV Show', props<{ id: string }>());
export const loadTvShowSuccess = createAction('[TV Shows] Load TV Show Success', props<{ tvShow: any }>());
export const loadTvShowFailure = createAction('[TV Shows] Load TV Show Failure', props<{ error: any }>());

export const resetSelectedMovie = createAction('[Movies] Reset Selected Movie');
export const resetSelectedTvShow = createAction('[TV Shows] Reset Selected TV Show');

