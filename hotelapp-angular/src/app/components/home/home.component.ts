import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  sideAContent: string = '<img src="../../assets/images/beachpics/beachpic1.png" alt="Image Description">';
  sideBContent: string = '<div><h2>HTML Content</h2><p>This is some HTML content for side B.</p></div>';


  count: number = 0;

  incrementCount() {
    this.count++;
  }
}
