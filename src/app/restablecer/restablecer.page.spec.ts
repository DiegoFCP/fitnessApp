import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RestablecerPage } from './restablecer.page';
import { FormsModule } from '@angular/forms';
import { IonicModule,  } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('RestablecerPage', () => {
  let component: RestablecerPage;
  let fixture: ComponentFixture<RestablecerPage>;
  let mockRouter: any;

  beforeEach(async () => {
    mockRouter = {
      navigate: jasmine.createSpy('navigate'),
    };

    await TestBed.configureTestingModule({
      declarations: [RestablecerPage],
      imports: [IonicModule.forRoot(), FormsModule, RouterTestingModule],
      providers: [{ provide: Router, useValue: mockRouter }],
    }).compileComponents();

    fixture = TestBed.createComponent(RestablecerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deberia mostrar error si el campo de usuario se encuentra vacio', () => {
    component.username = '';
    component.onRecuperar();
    expect(component.errorMessage).toBe('El campo Usuario no puede estar vacío o contener solo espacios.');
  });

  it('deberia limpiar el mensaje de error y navegar a login si el usuario es valido', () => {
    component.username = 'validUser';
    component.onRecuperar();
    expect(component.errorMessage).toBe('');
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/login']);
  });

  it('deberia mostrar error si el campo de usuario se llena con espacios', () => {
    component.username = '   ';
    component.onRecuperar();
    expect(component.errorMessage).toBe('El campo Usuario no puede estar vacío o contener solo espacios.');
    expect(mockRouter.navigate).not.toHaveBeenCalled();
  });
});
