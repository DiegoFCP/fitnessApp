import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router, private alertController: AlertController) {}

  // Método para navegar a la página de login
  iralogin() {
    this.router.navigate(['/login']);
  }

  // Método para navegar a la página de perfil
  iraperfil() {
    this.router.navigate(['/perfil']);
  }

  // Método para iniciar un entrenamiento
  async iniciarEntrenamiento() {
    const alert = await this.alertController.create({
      header: 'Entrenamiento',
      message: 'Iniciando entrenamiento...',
      buttons: ['OK']
    });

    await alert.present();
  }

  // Método para registrar comida
  async registrarComida() {
    const alert = await this.alertController.create({
      header: 'Registrar Comida',
      message: 'Registrando comida...',
      buttons: ['OK']
    });

    await alert.present();
  }
}
