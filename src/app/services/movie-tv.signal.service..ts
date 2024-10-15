import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieTvSignalService {
  private apiKey = environment.apiKey;
  private baseUrl = environment.apiUrl;

  movies = signal<any[]>([]);
  tvShows = signal<any[]>([]);
  private loadedMoviesPages = 1;
  private loadedTvShowsPages = 1;

  constructor(private http: HttpClient) {}

  getTopMovies(page: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/movie/top_rated?page=${page}&api_key=${this.apiKey}`);
  }

  getTopTvShows(page: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/tv/top_rated?page=${page}&api_key=${this.apiKey}`);
  }

  getMovieById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`);
  }

  getTvShowById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/tv/${id}?api_key=${this.apiKey}`);
  }

  loadMovies(page: number): void {
    if (page <= this.loadedMoviesPages) return;
    this.getTopMovies(page).subscribe({
      next: (response) => {
        const sortedMovies = [
          ...this.movies(),
          ...response.results.map((movie: any) => ({
            ...movie,
            vote_average: Math.ceil(movie.vote_average * 10) / 10
          }))
        ].sort((a, b) => b.vote_average - a.vote_average);
        
        this.movies.set(sortedMovies);
        this.loadedMoviesPages = page;
      },
      error: (error) => {
        console.error('Error loading movies:', error);
      }
    });
  }

  loadTvShows(page: number): void {
    if (page <= this.loadedTvShowsPages) return;
    this.getTopTvShows(page).subscribe({
      next: (response) => {
        const sortedTvShows = [
          ...this.tvShows(),
          ...response.results.map((show: any) => ({
            ...show,
            vote_average: Math.ceil(show.vote_average * 10) / 10
          }))
        ].sort((a, b) => b.vote_average - a.vote_average);
        
        this.tvShows.set(sortedTvShows);
        this.loadedTvShowsPages = page;
      },
      error: (error) => {
        console.error('Error loading TV shows:', error);
      }
    });
  }
}
