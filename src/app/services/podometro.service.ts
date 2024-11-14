// src/app/services/pedometer.service.ts
import { Injectable } from '@angular/core';
import { Pedometer, IPedometerData } from '@ionic-native/pedometer/ngx';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PedometerService {
  private stepCountSubject = new BehaviorSubject<number>(0);
  stepCount$: Observable<number> = this.stepCountSubject.asObservable();
  stepData$: any;

  constructor(private pedometer: Pedometer) {}

  // Método para verificar si el podómetro está disponible en el dispositivo
  async isPedometerAvailable(): Promise<boolean> {
    try {
      const available = await this.pedometer.isStepCountingAvailable();
      return available;
    } catch (error) {
      console.error('Error verificando disponibilidad del podómetro:', error);
      return false;
    }
  }

  // Método para iniciar el conteo de pasos
  async startTracking() {
    try {
      const isAvailable = await this.isPedometerAvailable();
      if (isAvailable) {
        this.pedometer.startPedometerUpdates().subscribe(
          (data: IPedometerData) => {
            this.stepCountSubject.next(data.numberOfSteps); // Emite el conteo de pasos
            console.log('Conteo de pasos: ', data.numberOfSteps);
          },
          (error) => {
            console.error('Error al iniciar el seguimiento de pasos:', error);
          }
        );
      } else {
        console.warn('El podómetro no está disponible en este dispositivo.');
      }
    } catch (error) {
      console.error('Error al iniciar el podómetro:', error);
    }
  }

  // Método para detener el conteo de pasos
  stopTracking() {
    try {
      this.pedometer.stopPedometerUpdates();
      console.log('Podómetro detenido.');
      this.stepCountSubject.next(0); // Reinicia el conteo de pasos cuando se detiene
    } catch (error) {
      console.error('Error al detener el podómetro:', error);
    }
  }
}
