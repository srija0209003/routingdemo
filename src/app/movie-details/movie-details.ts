import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  standalone: false,
  templateUrl: './movie-details.html',
  styleUrl: './movie-details.css',
})
export class MovieDetails {
  movieId!:string|null;
  constructor(private route:ActivatedRoute){}
 
  ngOnInit():void
  {
    this.movieId=this.route.snapshot.paramMap.get('id');
  }
 
}
