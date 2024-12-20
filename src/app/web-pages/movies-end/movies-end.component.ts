import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies-end',
  imports: [],
  templateUrl: './movies-end.component.html',
  styleUrl: './movies-end.component.scss'
})
export class MoviesEndComponent {
  movie: string = "";
  url: string = "https://google.com";
  
  constructor(private route : ActivatedRoute){}

  ngOnInit(){
    const movieId = this.route.snapshot.paramMap.get('id');
    if (movieId !== null) {
      this.movie = movieId;
    }
    this.getIMDbUrl(this.movie)
  }

  getIMDbUrl(movie: string) {
    switch (movie.toLowerCase()) {
      case 'top-gun':
        this.url = 'https://www.imdb.com/title/tt1745960/';
        break;
      case 'bullet-train':
        this.url =  'https://www.imdb.com/title/tt12593682/'; 
        break;
      case 'thor':
        this.url =  'https://www.imdb.com/title/tt10648342/';
        break;
      case 'batman':
        this.url = 'https://www.imdb.com/title/tt1877830/';
        break;
      case 'flash':
        this.url = 'https://www.imdb.com/title/tt0439572/';
        break;
      case 'spider-man':
        this.url = 'https://www.imdb.com/title/tt10872600/';
        break;
      default:
        console.error(`Unknown movie: ${movie}`);
        this.url =  '';
    }
  }
  
}
