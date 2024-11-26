import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePage } from './home.page';
import { IonicModule } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { environment } from '../../environments/environment';
import { PedometerService } from '../services/podometro.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';

//DECLARACION DE MOCKS

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
    params: { id: '123' },
  },
};

const mockAngularFirestore = {
  collection: (name: string) => ({
    doc: (id: string) => ({
      valueChanges: jasmine.createSpy('valueChanges').and.returnValue(of({ nombre: 'Test User' }))
    })
  })
};

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [
        IonicModule.forRoot(),
        HttpClientTestingModule,
        AngularFireModule.initializeApp(environment.FIREBASE_CONFIG),
      ],
      providers: [
        //MOCKS
        { provide: AngularFireAuth, useValue: mockAngularFireAuth }, 
        { provide: AngularFirestore, useValue: mockAngularFirestore }, 
        { provide: PedometerService, useValue: mockPedometerService },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
      ],
    }).compileComponents();
  
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  

  //PRUEBAS

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deberia traer nombre de Firestore y actualizar usuario', async () => {
    await component.ngOnInit();
    expect(component.nombreUsuario).toBe('Test User');
  });

  it('deberia llamar startTracking de PedometerService cuando inicializa', async () => {
    await component.ngOnInit();
    expect(mockPedometerService.startTracking).toHaveBeenCalled();
  });
  
  
});
