import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  nombreUsuario: string = 'Usuario';  

  constructor(
    private router: Router, 
    private route: ActivatedRoute,  
    private alertController: AlertController, 
    private menu: MenuController
  ) {}

  ngOnInit() {
    this.menu.close();

    // INTERPOLACION??
    this.route.queryParams.subscribe(params => {
      if (params['nombreUsuario']) {
        this.nombreUsuario = params['nombreUsuario'];  // ASIGNA NONMBRE RECIBIDO
      }
    });
  }

  ionViewWillEnter() {
    this.menu.close();
  }

  // Función para ir a la página de login
  iralogin() {
    this.router.navigate(['/login']);
  }

  // Función para ir a la página de perfil
  iraperfil() {
    this.router.navigate(['/perfil']);
  }

  // Alerta para iniciar entrenamiento
  async iniciarEntrenamiento() {
    const alert = await this.alertController.create({
      header: 'Entrenamiento',
      message: 'Iniciando entrenamiento...',
      buttons: ['OK'],
    });

    await alert.present();
  }

  // Alerta para registrar comida
  async registrarComida() {
    const alert = await this.alertController.create({
      header: 'Registrar Comida',
      message: 'Registrando comida...',
      buttons: ['OK'],
    });

    await alert.present();
  }
}
