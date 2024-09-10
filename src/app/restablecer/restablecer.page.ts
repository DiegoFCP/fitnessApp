import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restablecer',
  templateUrl: './restablecer.page.html',
  styleUrls: ['./restablecer.page.scss'],
})
export class RestablecerPage implements OnInit {
  username: string = ''; // Binding the username input
  errorMessage: string = ''; // Error message placeholder

  constructor(private router: Router) {}

  ngOnInit() {}

  // Function to handle the form submission
  onRecuperar() {
    // Trim the username to remove leading/trailing spaces
    const trimmedUsername = this.username.trim();

    // Check if the username is empty or just spaces
    if (!trimmedUsername) {
      this.errorMessage = 'El campo Usuario no puede estar vacío o contener solo espacios.';
    } else {
      this.errorMessage = ''; // Clear the error message if input is valid
      this.iralogin(); // Call the method to navigate to the login page
    }
  }

  iralogin() {
    this.router.navigate(['/login']);
  }
}
