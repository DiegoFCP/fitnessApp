import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  // Variables de error para los campos
  errorUsername: string = '';
  errorPassword: string = '';

  // Variables para mostrar/ocultar la contraseña
  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';  // Icono inicial para ocultar contraseña

  constructor(private router: Router) {}

  // Método para alternar la visibilidad de la contraseña
  togglePasswordVisibility() {
    this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }

  // Método de login con validaciones
  onLogin() {
    this.errorUsername = '';
    this.errorPassword = '';

    // Validaciones de campos
    if (!this.username) {
      this.errorUsername = 'El campo Usuario es obligatorio';
    }

    if (!this.password) {
      this.errorPassword = 'El campo Contraseña es obligatorio';
    }

    // Validación de longitud del nombre de usuario
    if (this.username && (this.username.length < 4 || this.username.length > 12)) {
      this.errorUsername = 'El nombre de usuario debe tener entre 4 y 12 caracteres';
    }

    // Validación de longitud de la contraseña
    if (this.password && (this.password.length < 6 || this.password.length > 12)) {
      this.errorPassword = 'La contraseña debe tener entre 6 y 12 caracteres';
    }

    // Si no hay errores, redirigir a Home y pasar el nombre de usuario
    if (!this.errorUsername && !this.errorPassword) {
      this.router.navigate(['/home'], {
        queryParams: { nombreUsuario: this.username }  // Pasar el nombre del usuario
      });
    }
  }

  // Método para redirigir a la página de restablecimiento de contraseña
  irarestablecer() {
    this.router.navigate(['/restablecer']);
  }
}
