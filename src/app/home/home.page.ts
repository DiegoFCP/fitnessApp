import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}
  

  iralogin() {
    this.router.navigate(['/login']); // Navega a la página de perfil
  }

  iraperfil() {
    this.router.navigate(['/perfil']); // Navega a la página de perfil
  }

}
