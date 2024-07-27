// card.component.ts
import { Component, Input } from '@angular/core';
import { DisplayCard } from '../../model/displaycard';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'] 
})
export class CardComponent {
  @Input() card: DisplayCard = {
    imageUrl: '',
    lineOne: '',
    lineTwo: '',
    lineThree: '',
    link: '',
    cardSize: 'short',
    width: '400px',
    height: '250px'
  };

  getCardClass() {
    switch (this.card.cardSize) {
      case 'tall':
        return 'card-tall';
      case 'short':
        return 'card-short';
      case 'custom':
        return 'card-custom';
      default:
        return 'card-short';
    }
  }

  getCustomStyles() {
    return this.card.cardSize === 'custom' ? {
      '--card-width': this.card.width,
      '--card-height': this.card.height
    } : {};
  }
}
