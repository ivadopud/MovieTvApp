import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/tv-shows', pathMatch: 'full' },
  { path: 'tv-shows', loadComponent: () => import('./components/tv-shows-list/tv-shows-list.component').then(m => m.TvShowsListComponent) },
  { path: 'movies', loadComponent: () => import('./components/movies-list/movies-list.component').then(m => m.MoviesListComponent) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
