import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-home-display',
  templateUrl: './home-display.component.html',
  styleUrls: ['./home-display.component.css']
})
export class HomeDisplayComponent implements OnInit, OnDestroy {
  currentImageIndex: number = 0;
  images: string[] = [];
  totalImages: number = 5;
  autoScrollInterval: any;
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: any, private cdr: ChangeDetectorRef) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    this.initializeImages();
    if (this.isBrowser && this.images.length > 0) {
      this.startAutoScroll();
    }
  }

  ngOnDestroy(): void {
    if (this.isBrowser) {
      this.clearAutoScroll();
    }
  }

  initializeImages(): void {
    for (let i = 1; i <= this.totalImages; i++) {
      const imagePath = `../../assets/images/beachpics/beachpic${i}.png`;
      this.images.push(imagePath);
    }

  }

  cycleImage(): void {
    if (this.images.length > 0) {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length; // Ensure Angular's change detection is triggered
    }
  }

  startAutoScroll(): void {
    if (this.isBrowser) { // Check if platform is a browser
      this.autoScrollInterval = setInterval(() => {
        this.cycleImage();
      }, 15000); // 5 seconds
    }
  }

  clearAutoScroll(): void {
    if (this.autoScrollInterval) {
      clearInterval(this.autoScrollInterval);
    }
  }
}
