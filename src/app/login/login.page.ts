import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { User } from '../models/user.model';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  user = { email: '', password: '' };
  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';
  errorUsername: string = '';
  errorPassword: string = '';
  mantenerConectado: boolean = false;
  loading: any; // Referencia al loader

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController
  ) {}

  togglePasswordVisibility() {
    this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({
      message: 'Espere por favor...',
    });
    await this.loading.present();
  }

  async dismissLoading() {
    if (this.loading) {
      await this.loading.dismiss();
    }
  }

  async login() {
    // Mostrar el loader
    await this.presentLoading();

    // Validar si los campos están vacíos
    if (!this.user.email || !this.user.password) {
      this.dismissLoading(); // Detener el loader si los campos están vacíos
      this.showToast('Por favor, ingresa tu correo y contraseña');
      return;
    }

    try {
      const res = await this.afAuth.signInWithEmailAndPassword(this.user.email, this.user.password);
      const user = res.user;

      if (user) {
        if (this.mantenerConectado) {
          localStorage.setItem('mantenerConectado', 'true');
          localStorage.setItem('nombreUsuario', user.email || 'Usuario');
        } else {
          localStorage.removeItem('mantenerConectado');
        }
        console.log('Usuario autenticado:', res);
        this.router.navigate(['/home']);
      }
    } catch (error: any) {
      this.showToast('Error al iniciar sesión: ' + error.message);
    } finally {
      // Asegurarse de detener la animación de carga en cualquier caso
      await this.dismissLoading();
    }
  }

  async showToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 3000,
      position: 'top',
      color: 'danger'
    });
    toast.present();
  }

  irarestablecer() {
    this.router.navigate(['/restablecer']);
  }

  iraregistro() {
    this.router.navigate(['/registro']);
  }
}
