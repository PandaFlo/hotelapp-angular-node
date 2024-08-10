import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // Corrected from 'styleUrl' to 'styleUrls'
})
export class AppComponent implements OnInit {
  title = 'hotelapp-angular';

  clickCounter: number = 6;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.navigate(['/home']);  // Automatically navigate to 'home' on component initialization
  }

  incrementCounter(): void {
    this.clickCounter++;
  }
}
