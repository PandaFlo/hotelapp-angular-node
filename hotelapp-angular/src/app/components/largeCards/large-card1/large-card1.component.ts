import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-large-card1',
  templateUrl: './large-card1.component.html',
  styleUrls: ['./large-card1.component.css']
})
export class LargeCard1Component implements OnInit {

  @Input() rightContent: { type: 'image' | 'text', data: string } = { type: 'image', data: '../../assets/images/beachpics/beachpic4.png' };
  @Input() leftContent: { type: 'image' | 'text', data: string } = { type: 'text', data: '<h2><b>Join the Island </b></h2><h2><b>Jazz and Ignite</b></h2>' };
  @Input() cardWidth: number = 850;
  @Input() cardHeight: number = 450;

  readonly aspectRatio: number = 450 / 850; // Based on the initial default size

  ngOnInit() {
    if (this.cardWidth && !this.cardHeight) {
      // If only width is given, calculate height to maintain aspect ratio
      this.cardHeight = this.cardWidth * this.aspectRatio;
    } else if (this.cardHeight && !this.cardWidth) {
      // If only height is given, calculate width to maintain aspect ratio
      this.cardWidth = this.cardHeight / this.aspectRatio;
    }
  }
}
