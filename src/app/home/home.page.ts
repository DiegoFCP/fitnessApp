import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';  // Importamos MenuController

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  nombreUsuario: string = 'Usuario'; // Valor por defecto

  constructor(private router: Router, private alertController: AlertController, private menu: MenuController) {}  // Inyectamos MenuController
  ngOnInit() {
    // Método ngOnInit requerido por la interfaz OnInit, pero vacío ya que no es necesario por ahora
    this.menu.close();
  }
  // Este método se ejecuta cuando la vista va a ser cargada
  ionViewWillEnter() {
    // Cerramos el menú lateral para asegurar que no esté abierto al entrar a la página
    this.menu.close();

    // Recuperar el nombre de usuario desde el estado de la navegación
    const state = window.history.state;
    if (state && state.username) {
      this.nombreUsuario = state.username;  // Actualizamos el nombre del usuario
    }
  }

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
      buttons: ['OK'],
    });

    await alert.present();
  }

  // Método para registrar comida
  async registrarComida() {
    const alert = await this.alertController.create({
      header: 'Registrar Comida',
      message: 'Registrando comida...',
      buttons: ['OK'],
    });

    await alert.present();
  }
}
