import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { Router, NavigationExtras } from '@angular/router';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  user: User = { nombre: '', email: '', password: '' };  // Modificado para incluir los campos

  constructor(
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private navCtrl: NavController,
    private router: Router,
  ) {}

  ngOnInit() {}

  async register() {
    if (this.formValidation()) {
      let loader = await this.loadingCtrl.create({ message: "Espere por favor" });
      await loader.present();

      try {
        const userCredential = await this.afAuth.createUserWithEmailAndPassword(this.user.email, this.user.password);
        
        // Guardar en Firestore
        await this.firestore.collection('users').doc(userCredential.user?.uid).set({
          uid: userCredential.user?.uid,
          nombre: this.user.nombre,
          email: this.user.email
        });

        this.showToast("Usuario registrado exitosamente");
        this.navCtrl.navigateRoot("login");

      } catch (error: any) {
        this.showToast("Error al registrarse: " + error.message);
      } finally {
        await loader.dismiss();
      }
    }
  }

  formValidation() {
    if (!this.user.nombre) {
      this.showToast("Ingrese el nombre de usuario");
      return false;
    }
    if (!this.user.email) {
      this.showToast("Ingrese el email");
      return false;
    }
    if (!this.user.password) {
      this.showToast("Ingrese una contraseña");
      return false;
    }
    return true;
  }

  async showToast(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 4000,
      position: 'top',
      color: 'warning'
    });
    toast.present();
  }
  
  iralogin() {
    this.router.navigate(['/login']);
  }
}
