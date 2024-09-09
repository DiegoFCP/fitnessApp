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

  // Adding progress value (starts at 50%)
  progressValue: number = 50; // This line is important

  constructor(private router: Router) {}

  ngOnInit() {
    // Logic to load saved user profile
    // this.loadUserProfileImage();
  }

  guardarPerfil() {
    // Simulated saving logic
    console.log('Nombre:', this.nombre);
    console.log('Estatura:', this.estatura);
    console.log('Peso:', this.peso);

    // Increase progress value to indicate progress (mock logic)
    this.progressValue = 100; // Could calculate based on profile completeness
    alert('Perfil guardado con éxito!');
  }

  iralHome() {
    this.router.navigate(['/home']);
  }

  loadUserProfileImage() {
    // Logic to load profile image
  }
}
