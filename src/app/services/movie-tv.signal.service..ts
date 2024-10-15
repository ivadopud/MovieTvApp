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
    this.getTopMovies(page).subscribe({
      next: (response) => {
        this.movies.set([...this.movies(), ...response.results]);
      },
      error: (error) => {
        console.error('Error loading movies:', error);
      }
    });
  }

  loadTvShows(page: number): void {
    this.getTopTvShows(page).subscribe({
      next: (response) => {
        this.tvShows.set([...this.tvShows(), ...response.results]);
      },
      error: (error) => {
        console.error('Error loading TV shows:', error);
      }
    });
  }
}
