import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-display',
  templateUrl: './home-display.component.html',
  styleUrls: ['./home-display.component.css']
})
export class HomeDisplayComponent implements OnInit {
  currentImageIndex: number = 0;
  images: string[] = [];
  clickCounter: number = 6;
  totalImages: number = 5; // You can change this to the actual number of images

  constructor() { }

  ngOnInit(): void {
    this.initializeImages();
  }

  initializeImages(): void {
    for (let i = 1; i <= this.totalImages; i++) {
      this.images.push(` ../../assets/images/beachpics/beachpic${i}.png`);
    }
  }

  cycleImage(): void {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  }

  incrementCounter(): void {
    this.clickCounter++;
  }
}
