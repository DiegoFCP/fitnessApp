import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  nombre: string = ''; 
  estatura: number | null = null; 
  peso: number | null = null; 
  userProfileImage: string | null = null; 

  
  progressValue: number = 50; 

  constructor(private router: Router) {}

  ngOnInit() {
 
  }

  guardarPerfil() {

    console.log('Nombre:', this.nombre);
    console.log('Estatura:', this.estatura);
    console.log('Peso:', this.peso);

    
    this.progressValue = 100; 
    alert('Perfil guardado con éxito!');
  }

  iralHome() {
    this.router.navigate(['/home']);
  }

  loadUserProfileImage() {
    // Logic to load profile image
  }
}
