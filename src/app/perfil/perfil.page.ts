// src/app/perfil/perfil.page.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  userProfileImage: string | null = null; // Propiedad para almacenar la imagen de perfil del usuario

  constructor(private router: Router) {}

  ngOnInit() {
    // Inicialización de la página o lógica para cargar datos
    // Aquí podrías cargar una imagen de perfil guardada, si existe
    // Por ejemplo: this.loadUserProfileImage();
  }

  iralHome() {
    // Navega a la página de inicio
    this.router.navigate(['/home']);
  }

  // Método para cargar la imagen de perfil del usuario (puede ser de una API o almacenamiento local)
  loadUserProfileImage() {
    // Aquí podrías implementar lógica para cargar la imagen de perfil del usuario
    // Por ejemplo, esta podría ser una llamada a una API o cargar desde el almacenamiento local
    // this.userProfileImage = 'ruta/a/la/imagen/del/usuario.png';
  }
}
