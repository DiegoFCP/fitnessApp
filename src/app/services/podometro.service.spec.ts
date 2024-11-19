import { TestBed } from '@angular/core/testing';
import { PedometerService } from './podometro.service';
import { Pedometer } from '@ionic-native/pedometer/ngx';

describe('PedometerService', () => {
  let service: PedometerService;

  const mockPedometer = {
    isStepCountingAvailable: jasmine.createSpy('isStepCountingAvailable').and.resolveTo(true),
    startPedometerUpdates: jasmine.createSpy('startPedometerUpdates').and.returnValue({
      subscribe: jasmine.createSpy('subscribe'),
    }),
    stopPedometerUpdates: jasmine.createSpy('stopPedometerUpdates').and.callFake(() => Promise.resolve()),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PedometerService,
        { provide: Pedometer, useValue: mockPedometer }, // Proveedor del mock de Pedometer
      ],
    });
    service = TestBed.inject(PedometerService); // Inyecta el servicio
  });

  it('should be created', () => {
    expect(service).toBeTruthy(); // Verifica que el servicio se crea correctamente
  });
});