import { Component } from '@angular/core';
import { ImageGalleryComponent } from '../../components/image-gallery/image-gallery.component';
import { ProgressTrackerComponent } from '../../components/progress-tracker/progress-tracker.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies02',
  imports: [ImageGalleryComponent, ProgressTrackerComponent, CommonModule],
  templateUrl: './movies02.component.html',
  styleUrl: './movies02.component.scss'
})
export class Movies02Component {
  movie: string = "";
  imagesList: Array<{ src: string; link: string; param: string }> = [];
  option1: Array<{ src: string; link: string; param: string }>;
  option2: Array<{ src: string; link: string; param: string }>;
  option3: Array<{ src: string; link: string; param: string }>;
  
  constructor(private route : ActivatedRoute){
    this.option1 = [
      { src: 'img4.png', link: '/movies03', param: 'top-gun' },
      { src: 'img5.png', link: '/movies03', param: 'bullet-train' },
      { src: 'img6.png', link: '/movies03', param: 'thor' }
    ]
    this.option2 = [
      { src: 'img7.png', link: '/movies03', param: 'batman' },
      { src: 'img9.png', link: '/movies03', param: 'flash' },
      { src: 'img8.png', link: '/movies03', param: 'spider-man' }
    ]
    this.option3 = [
      { src: 'img5.png', link: '/movies03', param: 'bullet-train' },
      { src: 'img4.png', link: '/movies03', param: 'top-gun' },
      { src: 'img9.png', link: '/movies03', param: 'flash' }
    ]
  }


  ngOnInit(){
    const movieId = this.route.snapshot.paramMap.get('id');
    if (movieId !== null) {
      this.movie = movieId;
    }
    this.redirectToMoviePage(this.movie);
  }

  redirectToMoviePage(param: string) {
    switch (param.toLocaleLowerCase()) {
      case 'the-gray-man':
        this.imagesList = this.option1;
        break;
      case 'minions':
        this.imagesList = this.option2;
        break;
      case 'blonde':
        this.imagesList = this.option3;
        break;
      default:
        console.error('Unknown movie param:', param);
    }
  }

}
