import { Component } from '@angular/core';
import { ImageGalleryComponent } from '../../components/image-gallery/image-gallery.component';
import { ProgressTrackerComponent } from '../../components/progress-tracker/progress-tracker.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movies01',
  imports: [ImageGalleryComponent, ProgressTrackerComponent, CommonModule],
  templateUrl: './movies01.component.html',
  styleUrl: './movies01.component.scss'
})
export class Movies01Component {
  imagesList: Array<{ src: string; link: string; param: string }> = [];
    constructor(){
      this.imagesList = [
        { src: 'img1.png', link: '/movies02', param: 'the-gray-man' },
        { src: 'img2.png', link: '/movies02', param: 'minions' },
        { src: 'img3.png', link: '/movies02', param: 'blonde' }
      ]
    }
}
