// src/app/perfil/perfil.page.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  nombre: string = ''; // Propiedad para almacenar el nombre del usuario
  estatura: number | null = null; // Propiedad para almacenar la estatura del usuario
  peso: number | null = null; // Propiedad para almacenar el peso del usuario
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

  guardarPerfil() {
    // Aquí puedes implementar la lógica para guardar el perfil del usuario
    // Puede ser una llamada a un servicio que guarda los datos en una base de datos o almacenamiento local

    console.log('Guardando perfil del usuario...');
    console.log('Nombre:', this.nombre);
    console.log('Estatura:', this.estatura);
    console.log('Peso:', this.peso);

    // Simulación de guardado de datos (aquí iría la lógica real de guardado)
    // Puedes implementar una llamada a un servicio de API para guardar estos datos

    // Mostrar una notificación al usuario sobre el guardado exitoso
    alert('Perfil guardado con éxito!');
  }

  // Método para cargar la imagen de perfil del usuario (puede ser de una API o almacenamiento local)
  loadUserProfileImage() {
    // Aquí podrías implementar lógica para cargar la imagen de perfil del usuario
    // Por ejemplo, esta podría ser una llamada a una API o cargar desde el almacenamiento local
    // this.userProfileImage = 'ruta/a/la/imagen/del/usuario.png';
  }
}
