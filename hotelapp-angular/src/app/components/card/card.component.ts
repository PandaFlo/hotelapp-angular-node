import { Component, Input, OnInit } from '@angular/core';
import { DisplayCard } from '../../model/DisplayCard';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() card?: DisplayCard;

  @Input() imageUrl: string = '';
  @Input() lineOne: string = '';
  @Input() lineTwo: string = '';
  @Input() lineThree: string = '';
  @Input() link: string = '#';
  @Input() cardSize: 'short' | 'tall' | 'custom' = 'short';
  @Input() width: string = '400px';
  @Input() height: string = '250px';
  @Input() showArrow: boolean = true;

  ngOnInit() {
    const defaultCard: DisplayCard = {
      imageUrl: this.imageUrl,
      lineOne: this.lineOne,
      lineTwo: this.lineTwo,
      lineThree: this.lineThree,
      link: this.link,
      cardSize: this.cardSize,
      width: this.width,
      height: this.height,
      showArrow: this.showArrow
    };

    this.card = { ...defaultCard, ...this.card };

    // Ensure showArrow has a default value if not set
    if (this.card.showArrow === undefined) {
      this.card.showArrow = true;
    }
  }

  getCardClass() {
    switch (this.card!.cardSize) {
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
    return this.card!.cardSize === 'custom' ? {
      '--card-width': this.card!.width,
      '--card-height': this.card!.height
    } : {};
  }
}
