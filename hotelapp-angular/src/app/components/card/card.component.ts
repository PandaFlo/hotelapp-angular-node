import { Component, Input, HostListener, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
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
  @Input() textAlign: 'left' | 'right' | 'center' = 'right'; // New input for text alignment

  dynamicWidth: string = '';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

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

    if (isPlatformBrowser(this.platformId)) {
      this.adjustCardWidth();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (isPlatformBrowser(this.platformId)) {
      this.adjustCardWidth();
    }
  }

  adjustCardWidth() {
    if (isPlatformBrowser(this.platformId)) {
      const cardWidth = parseInt(this.card!.width || '400');
      const viewportWidth = window.innerWidth;

      if (viewportWidth < cardWidth) {
        this.dynamicWidth = '80vw';
      } else {
        this.dynamicWidth = `${cardWidth}px`;
      }
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
      '--card-width': this.dynamicWidth,
      '--card-height': this.card!.height || '250px'
    } : {};
  }

  getTextAlignClass() {
    switch (this.textAlign) {
      case 'left':
        return 'text-align-left';
      case 'center':
        return 'text-align-center';
      case 'right':
      default:
        return 'text-align-right';
    }
  }
}
