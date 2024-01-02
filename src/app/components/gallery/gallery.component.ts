import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  gallery = [
    { id: 1, src: './assets/images/gallery-images/gallery-image-1.jpg',timer:'0.1s'},
    { id: 2, src: './assets/images/gallery-images/gallery-image-2.jpg',timer:'0.3s'},
    { id: 3, src: './assets/images/gallery-images/gallery-image-3.jpg',timer:'0.5s'},
    { id: 4, src: './assets/images/gallery-images/gallery-image-4.jpg',timer:'1.1s'},
    { id: 5, src: './assets/images/gallery-images/gallery-image-5.jpg',timer:'0.9s'},
    { id: 6, src: './assets/images/gallery-images/gallery-image-6.jpg',timer:'0.7s'},

  ]
}
