import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-large-card2',
  templateUrl: './large-card2.component.html',
  styleUrls: ['./large-card2.component.css']
})
export class LargeCard2Component {

  @Input() leftContent: { type: 'image' | 'text', data: string } = { type: 'text', data: '<h2><b>Join the Island </b></h2><h2><b>Jazz and Ignite</b></h2>' };
  @Input() rightContent: { type: 'image' | 'text', data: string } = { type: 'image', data: '../../assets/images/beachpics/beachpic4.png' };
  @Input() leftButtonText1: string = 'Button 1';
  @Input() leftButtonLink1: string = '/link1';
  @Input() leftButtonText2: string = 'Button 2';
  @Input() leftButtonLink2: string = '/link2';
  @Input() flip: boolean = true; // Default to flipping
  @Input() textAlign: 'left' | 'center' | 'right' = 'center'; // Default text alignment to center

  constructor(private router: Router) {}

  navigateTo(link: string) {
    this.router.navigate([link]);
  }
}
