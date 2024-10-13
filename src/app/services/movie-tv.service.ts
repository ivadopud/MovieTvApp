import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MovieTvService {
  private apiKey = environment.apiKey;
  private baseUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}

  getTopMovies(): Observable<any> {
    console.log('Calling getTopMovies');
    return this.http.get(`${this.baseUrl}/movie/top_rated?api_key=${this.apiKey}&language=en-US&page=1`);
  }
  
  getTopTvShows(): Observable<any> {
    console.log('Calling getTopTvShows');
    return this.http.get(`${this.baseUrl}/tv/top_rated?api_key=${this.apiKey}&language=en-US&page=1`);
  }
}
