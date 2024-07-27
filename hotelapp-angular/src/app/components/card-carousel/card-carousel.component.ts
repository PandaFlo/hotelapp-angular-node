import { Component, Input, HostListener, OnInit, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { WindowService } from '../../services/window.service';
import { DisplayCard } from '../../model/displaycard';

@Component({
  selector: 'app-card-carousel',
  templateUrl: './card-carousel.component.html',
  styleUrls: ['./card-carousel.component.css']
})
export class CardCarouselComponent implements OnInit {

  @Input() cards: DisplayCard[] = [];
  @Input() maxCards: number = 0; // Default to 0, which means no maximum limit
  @Input() parity: 'odd' | 'even' | '' = ''; // Default to '', meaning no parity restriction

  visibleCards: DisplayCard[] = [];
  cardCount: number = 3;
  isBrowser: boolean;
  cardWidth: number = 400; // Default card width
  cardMargin: number = 16; // Margin on one side of the card
  dots: number[] = [];
  visibleDots: number[] = [];
  activeIndex: number = 0;

  constructor(
    private windowService: WindowService,
    @Inject(PLATFORM_ID) private platformId: object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.updateCardCount();
      this.updateVisibleCards();
      this.updateDots();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    if (this.isBrowser) {
      this.updateCardCount();
      this.updateVisibleCards();
      this.updateDots();
    }
  }

  updateCardCount() {
    const width = this.isBrowser ? this.windowService.nativeWindow.innerWidth : 0;
    const totalCardWidth = this.cardWidth + 2 * this.cardMargin;
    let cardCount = Math.floor(width / totalCardWidth);

    if (this.maxCards > 0) {
      cardCount = Math.min(cardCount, this.maxCards);
    }

    if (this.parity === 'odd') {
      if (cardCount % 2 === 0) {
        cardCount = Math.max(cardCount - 1, 1);
      }
    } else if (this.parity === 'even') {
      if (cardCount % 2 !== 0) {
        cardCount = Math.max(cardCount - 1, 2);
      }
    }

    this.cardCount = Math.max(cardCount, 1); // Ensure at least one card is displayed
    this.updateDots();

    // If only one page is needed, reset to the first page
    if (this.dots.length <= 1) {
      this.activeIndex = 0;
      this.updateVisibleCards();
    }
  }

  updateVisibleCards() {
    const start = this.activeIndex * this.cardCount;
    this.visibleCards = this.cards.slice(start, start + this.cardCount);
  }

  updateDots() {
    const numberOfDots = Math.ceil(this.cards.length / this.cardCount);
    this.dots = Array(numberOfDots).fill(0).map((x, i) => i);
    this.updateVisibleDots();
  }

  updateVisibleDots() {
    if (this.dots.length <= 5) {
      this.visibleDots = this.dots;
    } else {
      if (this.activeIndex < 3) {
        this.visibleDots = this.dots.slice(0, 5);
      } else if (this.activeIndex > this.dots.length - 3) {
        this.visibleDots = this.dots.slice(this.dots.length - 5, this.dots.length);
      } else {
        this.visibleDots = this.dots.slice(this.activeIndex - 2, this.activeIndex + 3);
      }
    }
  }

  nextSlide() {
    this.activeIndex = (this.activeIndex + 1) % this.dots.length;
    this.updateVisibleCards();
    this.updateVisibleDots();
  }

  prevSlide() {
    this.activeIndex = (this.activeIndex - 1 + this.dots.length) % this.dots.length;
    this.updateVisibleCards();
    this.updateVisibleDots();
  }

  goToSlide(index: number) {
    this.activeIndex = index;
    this.updateVisibleCards();
    this.updateVisibleDots();
  }
}
