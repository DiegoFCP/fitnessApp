import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular'; 
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from '../models/user.model';

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
    private menu: MenuController,
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore
  ) {}

  async ngOnInit() {
    this.menu.close();

    // Recupera el nombre de usuario desde Firestore
    const user = await this.afAuth.currentUser;
    console.log("Usuario autenticado:", user); // Verificar usuario autenticado
    if (user) {
      this.firestore.collection('users').doc(user.uid).valueChanges().subscribe((data: any) => {
        console.log("Datos de Firestore del usuario:", data); // Verificar datos del usuario
        this.nombreUsuario = data?.nombre || 'Usuario';
      });
    }
  }

  ionViewWillEnter() {
    this.menu.close();
  }

  iralogin() {
    this.router.navigate(['/login']);
  }

  iraperfil() {
    this.router.navigate(['/perfil']);
  }

  async iniciarEntrenamiento() {
    const alert = await this.alertController.create({
      header: 'Entrenamiento',
      message: 'Iniciando entrenamiento...',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async registrarComida() {
    const alert = await this.alertController.create({
      header: 'Registrar Comida',
      message: 'Registrando comida...',
      buttons: ['OK'],
    });

    await alert.present();
  }
}
