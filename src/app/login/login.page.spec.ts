import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginPage } from './login.page';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule, ToastController, LoadingController } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

// Mock de AngularFireAuth
const mockAngularFireAuth = {
  signInWithEmailAndPassword: jasmine.createSpy('signInWithEmailAndPassword'),
};

// Mock de ToastController
const mockToastController = {
  create: jasmine.createSpy('create').and.returnValue(Promise.resolve({
    present: jasmine.createSpy('present'),
  })),
};

// Mock de LoadingController
const mockLoadingController = {
  create: jasmine.createSpy('create').and.returnValue(Promise.resolve({
    present: jasmine.createSpy('present'),
    dismiss: jasmine.createSpy('dismiss'),
  })),
};

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginPage],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      providers: [
        { provide: AngularFireAuth, useValue: mockAngularFireAuth },
        { provide: ToastController, useValue: mockToastController },
        { provide: LoadingController, useValue: mockLoadingController },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA], // Ignorar componentes personalizados no reconocidos
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call signInWithEmailAndPassword when login is triggered', async () => {
    // Simular inputs de usuario
    component.user.email = 'test@example.com';
    component.user.password = 'password123';

    await component.login();

    expect(mockAngularFireAuth.signInWithEmailAndPassword).toHaveBeenCalledWith(
      'test@example.com',
      'password123'
    );
  });

  it('should show a toast on login failure', async () => {
    // Mockear un error en la autenticación
    mockAngularFireAuth.signInWithEmailAndPassword.and.throwError('Auth error');

    await component.login();

    expect(mockToastController.create).toHaveBeenCalled();
    const toast = await mockToastController.create.calls.mostRecent().returnValue;
    expect(toast.present).toHaveBeenCalled();
  });
});
