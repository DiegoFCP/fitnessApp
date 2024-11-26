import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restablecer',
  templateUrl: './restablecer.page.html',
  styleUrls: ['./restablecer.page.scss'],
})
export class RestablecerPage implements OnInit {
  username: string = ''; 
  errorMessage: string = ''; 

  constructor(private router: Router) {}

  ngOnInit() {}


  onRecuperar() {
    
    const trimmedUsername = this.username.trim();

    
    if (!trimmedUsername) {
      this.errorMessage = 'El campo Usuario no puede estar vacío o contener solo espacios.';
    } else {
      this.errorMessage = ''; 
      this.iralogin(); 
    }
  }

  iralogin() {
    this.router.navigate(['/login']);
  }
}
