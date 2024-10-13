import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectTopTvShows } from '../../store/movies-tv.selectors';
import { loadTopTvShows } from '../../store/movies-tv.actions';
import { RoundPipe } from '../../pipes/round.pipe';

@Component({
  standalone: true,
  selector: 'app-tv-shows-list',
  templateUrl: './tv-shows-list.component.html',
  styleUrls: ['./tv-shows-list.component.scss'],
  imports: [CommonModule, MatCardModule, RoundPipe]
})
export class TvShowsListComponent implements OnInit {
  tvShows$!: Observable<any[]>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.tvShows$ = this.store.select(selectTopTvShows);
    this.store.dispatch(loadTopTvShows());
  }
}
