import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';  // Importamos NavigationExtras

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  errorUsername: string = '';
  errorPassword: string = '';

  constructor(private router: Router) {}

  onLogin() {
    this.errorUsername = '';
    this.errorPassword = '';
  
    // Validaciones
    if (!this.username) {
      this.errorUsername = 'El campo Usuario es obligatorio';
    }
  
    if (!this.password) {
      this.errorPassword = 'El campo Contraseña es obligatorio';
    }
  
    if (this.username && (this.username.length < 4 || this.username.length > 12)) {
      this.errorUsername = 'El nombre de usuario debe tener entre 4 y 12 caracteres';
    }
  
    if (this.password && (this.password.length < 6 || this.password.length > 12)) {
      this.errorPassword = 'La contraseña debe tener entre 6 y 12 caracteres';
    }
  
    if (!this.errorUsername && !this.errorPassword) {
      // Navegar a la página home con queryParams
      this.router.navigate(['/home'], {
        queryParams: { nombreUsuario: this.username }
      });
    }
  }

  irarestablecer() {
    this.router.navigate(['/restablecer']);
  }
}
