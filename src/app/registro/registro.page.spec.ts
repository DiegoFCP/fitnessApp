import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RegistroPage } from './registro.page';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { provideRouter } from '@angular/router';

describe('RegistroPage', () => {
  let component: RegistroPage;
  let fixture: ComponentFixture<RegistroPage>;

  const mockAngularFireAuth = {
    createUserWithEmailAndPassword: jasmine.createSpy('createUserWithEmailAndPassword').and.returnValue(Promise.resolve({ user: { uid: '12345' } })),
  };

  const mockAngularFirestore = {
    collection: jasmine.createSpy('collection').and.returnValue({
      doc: jasmine.createSpy('doc').and.returnValue({
        set: jasmine.createSpy('set').and.returnValue(Promise.resolve()),
      }),
    }),
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroPage],
      imports: [IonicModule.forRoot()],
      providers: [
        provideRouter([]), 
        { provide: AngularFireAuth, useValue: mockAngularFireAuth },
        { provide: AngularFirestore, useValue: mockAngularFirestore },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deberia llamar createUserWithEmailAndPassword con la solicitud de registro', async () => {
    component.user = { nombre: 'Test', email: 'test@example.com', password: '123456' };

    await component.register();

    expect(mockAngularFireAuth.createUserWithEmailAndPassword).toHaveBeenCalledWith('test@example.com', '123456');
  });

  it('deberia mostrar un mensaje al registro exitoso', async () => {
    spyOn(component, 'showToast');

    component.user = { nombre: 'Test', email: 'test@example.com', password: '123456' };
    await component.register();

    expect(component.showToast).toHaveBeenCalledWith('Usuario registrado exitosamente');
  });

});