import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  // Método para navegar a la página de login
  iralogin() {
    this.router.navigate(['/login']);
  }

  // Método para navegar a la página de perfil
  iraperfil() {
    this.router.navigate(['/perfil']);
  }

  // Método para iniciar un entrenamiento
  iniciarEntrenamiento() {
    console.log('Iniciando entrenamiento...');
    // Aquí podrías agregar lógica para iniciar un entrenamiento o navegar a una página de entrenamiento
    // this.router.navigate(['/entrenamiento']);
  }

  // Método para registrar comida
  registrarComida() {
    console.log('Registrando comida...');
    // Aquí podrías agregar lógica para registrar comida o navegar a una página de registro de comida
    // this.router.navigate(['/registro-comida']);
  }
}
