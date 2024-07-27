import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-large-card1',
  templateUrl: './large-card1.component.html',
  styleUrl: './large-card1.component.css'
})
export class LargeCard1Component {

  @Input() rightContent: { type: 'image' | 'text', data: string } = { type: 'image', data: '../../assets/images/beachpics/beachpic4.png' }; // Default to an image URL
  @Input() leftContent: { type: 'image' | 'text', data: string } = { type: 'text', data: '<h2><b>Join the Island </b></h2><h2><b>Jazz and Ignite</b></h2>' }; // Default to HTML text
}

