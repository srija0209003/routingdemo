import { Component } from '@angular/core';

@Component({
  selector: 'app-movies',
  standalone: false,
  templateUrl: './movies.html',
  styleUrl: './movies.css',
})
export class Movies {
  movies: Array<{ id: number; title: string}> = [
    { id: 1, title: 'Inception' },
    { id: 2, title: 'The Godfather'},
    { id: 3, title: 'Pulp Fiction'},
    { id: 4, title: 'The Dark Knight' },
  ];
}
