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

  constructor(private router: Router) {}

  onLogin() {
    // Aquí agregarías la lógica de autenticación
    console.log('Usuario:', this.username);
    console.log('Contraseña:', this.password);

    // Supongamos que la autenticación es exitosa, redirige a la página de inicio
    this.router.navigate(['/home']);
  }

  iraregistro() {
    // Redirige a la página de registro
    this.router.navigate(['/home']);
  }
}
