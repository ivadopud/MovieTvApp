import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MovieTvService {
  private apiKey = environment.apiKey;
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getTopMovies(page: number = 1): Observable<any> {
    return this.http.get(`${this.baseUrl}/movie/top_rated?api_key=${this.apiKey}&language=en-US&page=${page}`);
  }

  getTopTvShows(page: number = 1): Observable<any> {
    return this.http.get(`${this.baseUrl}/tv/top_rated?api_key=${this.apiKey}&language=en-US&page=${page}`);
  }
}

