import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular'; 
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { HttpClient } from '@angular/common/http'; // Importa HttpClient para hacer la solicitud a la API

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  nombreUsuario: string = 'Usuario';  
  healthTip: string = ''; // Variable para almacenar el tip de salud
  apiUrl: string = 'https://frasesapi.vercel.app/v1/frases/aleatoria/?categoria=salud'; // URL de la API

  constructor(
    private router: Router, 
    private route: ActivatedRoute,  
    private alertController: AlertController, 
    private menu: MenuController,
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private http: HttpClient // Inyecta HttpClient
  ) {}

  async ngOnInit() {
    this.menu.close();

    // NOMBRE USUARIO DESDE FIRESTORE
    const user = await this.afAuth.currentUser;
    console.log("Usuario autenticado:", user); 
    if (user) {
      this.firestore.collection('users').doc(user.uid).valueChanges().subscribe((data: any) => {
        console.log("Datos de Firestore del usuario:", data); 
        this.nombreUsuario = data?.nombre || 'Usuario';
      });
    }

    // OBTENER EL TIP DE SALUD DESDE EL SERVICIO (API Frases)
    this.http.get(this.apiUrl).subscribe(
      (response: any) => {
        this.healthTip = response.frase.frase || 'Mantén una vida saludable.';
        console.log('Frase de salud:', this.healthTip);
      },
      (error) => {
        console.error('Error al obtener el tip de salud:', error);
      }
    );
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

  // Método para cerrar sesión
  logout() {
    this.afAuth.signOut().then(() => {
      console.log('Sesión cerrada');
      this.router.navigate(['/login']);  // Redirige al login después de cerrar sesión
    }).catch((error) => {
      console.error('Error al cerrar sesión:', error);
    });
  }
}
