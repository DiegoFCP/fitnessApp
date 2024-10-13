import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'; // Importa el componente 404
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { defineCustomElements as jeepsqlite } from 'jeep-sqlite/loader';
import { HttpClient } from '@angular/common/http';

import { HttpClientModule } from '@angular/common/http';

jeepsqlite(window)

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent  // Añade el componente 404 aquí
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    MatProgressSpinnerModule,
    HttpClient,
    HttpClientModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, provideAnimationsAsync()],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],  // Añade CUSTOM_ELEMENTS_SCHEMA para evitar errores con los elementos de Ionic
  bootstrap: [AppComponent],
})
export class AppModule {}
