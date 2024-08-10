import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  isVisible: boolean = false;

  toggleVisibility(): void {
    this.isVisible = !this.isVisible;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    const clickedInside = (event.target as HTMLElement).closest('.sign-in-form') || (event.target as HTMLElement).closest('.sign-in-toggle');
    if (!clickedInside) {
      this.isVisible = false;
    }
  }
}
