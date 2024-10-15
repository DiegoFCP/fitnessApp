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

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private toastCtrl: ToastController
  ) {}

  togglePasswordVisibility() {
    this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }

  async login() {
    if (this.user.email && this.user.password) {
      try {
        const res = await this.afAuth.signInWithEmailAndPassword(this.user.email, this.user.password);
        console.log('Usuario autenticado:', res);
        this.router.navigate(['/home']);
      } catch (error: any) {
        this.showToast('Error al iniciar sesión: ' + error.message);
      }
    } else {
      this.showToast('Por favor, ingresa tu correo y contraseña');
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
