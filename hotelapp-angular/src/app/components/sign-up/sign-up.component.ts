import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  rememberMe: boolean = false;

  constructor() { }

  onSubmit(): void {
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    console.log('Form Submitted', {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
      rememberMe: this.rememberMe
    });

    this.resetForm();
  }

  onCancel(): void {
    this.resetForm();
    console.log('Form Cancelled');
  }

  resetForm(): void {
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.password = '';
    this.confirmPassword = '';
    this.rememberMe = false;
  }
}
