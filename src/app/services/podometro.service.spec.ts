import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { PedometerService } from './podometro.service';
import { IPedometerData } from '@ionic-native/pedometer/ngx';

describe('PedometerService', () => {
  let service: PedometerService;

  const mockStepData: IPedometerData = {
    numberOfSteps: 100,
    distance: 200,
    floorsAscended: 5,
    floorsDescended: 3,
  };

  const mockPedometerService = {
    stepData$: of(mockStepData),
    startTracking: jasmine.createSpy('startTracking'),
    stopTracking: jasmine.createSpy('stopTracking'),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: PedometerService, useValue: mockPedometerService },
      ],
    });

    service = TestBed.inject(PedometerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deberia subscribirse a stepData$ y recibir la info de los Pasos', (done) => {
    service.stepData$.subscribe((data: any) => {
      expect(data).toEqual(mockStepData);
      done(); // Llamamos a done para finalizar la prueba asincrónica
    });
  });

  it('deberia llamar a startTracking', () => {
    service.startTracking();
    expect(mockPedometerService.startTracking).toHaveBeenCalled();
  });

  it('deberia llamar a stopTracking', () => {
    service.stopTracking();
    expect(mockPedometerService.stopTracking).toHaveBeenCalled();
  });
});
