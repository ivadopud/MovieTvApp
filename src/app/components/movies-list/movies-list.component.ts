import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectTopMovies } from '../../store/movies-tv.selectors';
import { loadTopMovies } from '../../store/movies-tv.actions';
import { RoundPipe } from '../../pipes/round.pipe';

@Component({
  standalone: true,
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
  imports: [CommonModule, MatCardModule, RoundPipe]
})
export class MoviesListComponent implements OnInit {
  movies$!: Observable<any[]>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.movies$ = this.store.select(selectTopMovies);
    this.store.dispatch(loadTopMovies());
  }
}
