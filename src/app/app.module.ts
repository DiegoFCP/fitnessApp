import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';

// Importaciones para HttpClient con la nueva configuración
import { provideHttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

import { Pedometer } from '@ionic-native/pedometer/ngx';
import { PedometerService } from './services/podometro.service';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    MatProgressSpinnerModule,
    AngularFireModule.initializeApp(environment.FIREBASE_CONFIG),
    AngularFireAuthModule,
    HttpClientModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideAnimationsAsync(),
    provideHttpClient(), // Proveedor de HttpClient con nueva configuración
    Pedometer,
    PedometerService,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
