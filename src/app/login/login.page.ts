// src/app/login/login.page.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  // Variables para gestionar los errores
  errorUsername: string = '';
  errorPassword: string = '';

  constructor(private router: Router) {}

  // Método de login con validaciones
  onLogin() {
    // Reiniciar mensajes de error antes de validar
    this.errorUsername = '';
    this.errorPassword = '';

    // Validación de campos vacíos
    if (!this.username) {
      this.errorUsername = 'El campo Usuario es obligatorio';
    }

    if (!this.password) {
      this.errorPassword = 'El campo Contraseña es obligatorio';
    }

    // Validación de longitud mínima y máxima del nombre de usuario
    if (this.username && (this.username.length < 4 || this.username.length > 12)) {
      this.errorUsername = 'El nombre de usuario debe tener entre 4 y 12 caracteres';
    }

    // Validación de longitud mínima y máxima de la contraseña
    if (this.password && (this.password.length < 6 || this.password.length > 12)) {
      this.errorPassword = 'La contraseña debe tener entre 6 y 12 caracteres';
    }

    // Si no hay errores, proceder con la redirección
    if (!this.errorUsername && !this.errorPassword) {
      // Supongamos que la autenticación es exitosa
      console.log('Usuario:', this.username);
      console.log('Contraseña:', this.password);
      this.router.navigate(['/home']);
    }
  }

  // Método para redirigir a la página de restablecimiento de contraseña
  iraregistro() {
    this.router.navigate(['/restablecer']);
  }
}
