import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular'; 
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { HttpClient } from '@angular/common/http';
import { PedometerService } from '../services/podometro.service';
import { Subscription } from 'rxjs';
import { IPedometerData } from '@ionic-native/pedometer';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  stepCount: number = 0;
  nombreUsuario: string = 'Usuario';  
  healthTip: string = '';
  apiUrl: string = 'https://frasesapi.vercel.app/v1/frases/aleatoria/?categoria=salud';
  stepSubscription?: Subscription;

  constructor(
    private router: Router, 
    private route: ActivatedRoute,  
    private alertController: AlertController, 
    private menu: MenuController,
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private http: HttpClient,
    private pedometerService: PedometerService
  ) {}

  async ngOnInit() {
    this.menu.close();

    const user = await this.afAuth.currentUser;
    if (user) {
      this.firestore.collection('users').doc(user.uid).valueChanges().subscribe((data: any) => {
        this.nombreUsuario = data?.nombre || 'Usuario';
      });
    }

    this.http.get(this.apiUrl).subscribe(
      (response: any) => {
        this.healthTip = response.frase.frase || 'Mantén una vida saludable.';
      },
      (error) => {
        console.error('Error al obtener el tip de salud:', error);
      }
    );

    await this.startStepTracking();
  }

  async startStepTracking() {
    this.stepSubscription = this.pedometerService.stepData$.subscribe(
      (data: IPedometerData) => {
        this.stepCount = data.numberOfSteps;
      },
      (error: any) => {
        console.error('Error al recibir datos del podómetro:', error);
      }
    );

    this.pedometerService.startTracking();
  }

  stopStepTracking() {
    this.pedometerService.stopTracking();
    this.stepSubscription?.unsubscribe();
  }

  ionViewWillEnter() {
    this.menu.close();
  }

  logout() {
    this.afAuth.signOut().then(() => {
      this.router.navigate(['/login']);
    }).catch((error) => {
      console.error('Error al cerrar sesión:', error);
    });
  }

  ngOnDestroy() {
    this.stepSubscription?.unsubscribe();
  }

  iraperfil() {
    this.router.navigate(['/perfil']);
  }

  iralogin() {
    this.router.navigate(['/login']);
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
