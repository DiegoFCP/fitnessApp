import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

export const authGuard: CanActivateFn = (route, state) => {
  const afAuth = inject(AngularFireAuth);  // Inyectamos AngularFireAuth
  const router = inject(Router);  // Inyectamos el Router

  return afAuth.authState.pipe(
    map(user => {
      if (user) {
        return true;  // Si está autenticado, permite acceso
      } else {
        router.navigate(['/login']);  // Redirige al login si no está autenticado
        return false;  // No permite el acceso
      }
    })
  );
};
