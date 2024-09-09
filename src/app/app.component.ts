import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(private router: Router) {}

  ionViewWillEnter() {
    // Redirigir a la página de Login al cargar la app
    this.router.navigate(['/login']);
  }
}
