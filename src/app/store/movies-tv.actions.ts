import { createAction, props } from '@ngrx/store';

export const loadTopMovies = createAction('[Movies] Load Top Movies', props<{ page: number }>());
export const loadTopMoviesSuccess = createAction('[Movies] Load Top Movies Success', props<{ movies: any[] }>());
export const loadTopMoviesFailure = createAction('[Movies] Load Top Movies Failure', props<{ error: any }>());

export const loadTopTvShows = createAction('[TV Shows] Load Top TV Shows', props<{ page: number }>());
export const loadTopTvShowsSuccess = createAction('[TV Shows] Load Top TV Shows Success', props<{ tvShows: any[] }>());
export const loadTopTvShowsFailure = createAction('[TV Shows] Load Top TV Shows Failure', props<{ error: any }>());


