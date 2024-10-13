import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model'
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  username: string = ''; // Añade esta línea
  user = {} as User;
  email: string = '';
  password: string = '';

  constructor(
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private afAuth: AngularFireAuth,
    private navCtrl: NavController,
  ) {}

  ngOnInit() {}

  async register(user:User){
    if (this.formValidation()) {
      let loader = await this.loadingCtrl.create({
        message: "Espere por favor"
    })
    await loader.present();

    try {
      await this.afAuth.createUserWithEmailAndPassword(user.email, user.password).then(data =>{
        console.log(data);
        
        this.navCtrl.navigateRoot("home")
        })
    } catch (error:any) {
      error.message = "Error al registrarse";
      let errormessage = error.message || error.getLocalizedMessage();

      this.showToast(errormessage)
   }
   
   await loader.dismiss();

    }
  }

  formValidation() {
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
  

  showToast(message: string){
    this.toastCtrl.create({
      message: message,
      duration: 4000
    }).then(toastData => toastData.present());
  }





}