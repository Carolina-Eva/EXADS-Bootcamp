import { provideRouter, Routes } from '@angular/router';
import { Movies01Component } from './web-pages/movies01/movies01.component';
import { Movies02Component } from './web-pages/movies02/movies02.component';
import { Movies03Component } from './web-pages/movies03/movies03.component';
import { MoviesEndComponent } from './web-pages/movies-end/movies-end.component';

export const routes: Routes = [
    { path: 'movies01', component: Movies01Component },
    { path: 'movies02/:id', component: Movies02Component },
    { path: 'movies03/:id', component: Movies03Component },
    { path: 'movies-end/:id', component: MoviesEndComponent },
    { path: '', redirectTo: '/movies01', pathMatch: 'full' },
    { path: '**', redirectTo: '/movies01' },
  ];
