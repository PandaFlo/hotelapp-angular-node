import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  @Input() imageUrl: string = '';
  @Input() line1Text: string = '';
  @Input() line2Text: string = '';
  @Input() textAlign: 'left' | 'center' | 'right' = 'left';
  @Input() textColor: string = 'white';
  @Input() line1Size: number = 25;
  @Input() line2Size: number = 15;
  @Input() verticalLength: number = 500;
  @Input() linkUrl?: string;  // Optional link URL

  constructor() { }

  ngOnInit(): void {
  }
}
