import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePage } from './home.page';
import { IonicModule } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs'; // Para simular observables
import { environment } from '../../environments/environment';
import { PedometerService } from '../services/podometro.service';


const mockAngularFireAuth = {
  currentUser: Promise.resolve({ uid: 'test-uid' }),
};

const mockPedometerService = {
  startTracking: jasmine.createSpy('startTracking'),
  stopTracking: jasmine.createSpy('stopTracking'),
  stepData$: jasmine.createSpyObj('stepData$', ['subscribe']),
};

const mockActivatedRoute = {
  snapshot: {
    params: { id: '123' }, // Simulación de parámetros de ruta
  },
};

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [
        IonicModule.forRoot(),
        HttpClientTestingModule, // Mock para HttpClient
        AngularFireModule.initializeApp(environment.FIREBASE_CONFIG), // Configuración de Firebase
      ],
      providers: [
        { provide: AngularFireAuth, useValue: mockAngularFireAuth }, // Mock de AngularFireAuth
        { provide: PedometerService, useValue: mockPedometerService }, // Mock del podómetro
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
