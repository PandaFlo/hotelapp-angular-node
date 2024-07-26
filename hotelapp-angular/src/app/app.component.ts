import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hotelapp-angular';

  clickCounter: number = 6;
  incrementCounter(): void {
    this.clickCounter++;
  }


}
