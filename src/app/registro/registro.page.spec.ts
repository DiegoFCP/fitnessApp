import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroPage } from './registro.page';
import { IonicModule } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../../environments/environment';

const mockAngularFireAuth = {
  createUserWithEmailAndPassword: jasmine.createSpy('createUserWithEmailAndPassword')
};
describe('RegistroPage', () => {
  let component: RegistroPage;
  let fixture: ComponentFixture<RegistroPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistroPage],
      imports: [
        IonicModule.forRoot(),
        AngularFireModule.initializeApp(environment.FIREBASE_CONFIG), // Mock de configuración
      ],
      providers: [
        { provide: AngularFireAuth, useValue: mockAngularFireAuth },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});