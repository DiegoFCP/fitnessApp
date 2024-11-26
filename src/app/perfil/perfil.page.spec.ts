import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilPage } from './perfil.page';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('PerfilPage', () => {
  let component: PerfilPage;
  let fixture: ComponentFixture<PerfilPage>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PerfilPage],
      imports: [RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PerfilPage);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deberia actualziar la barra de progreso y guardar valores cuando se llama a guardarPerfil', () => {
    spyOn(console, 'log');
    component.nombre = 'Test User';
    component.estatura = 170;
    component.peso = 65;

    component.guardarPerfil();

    expect(console.log).toHaveBeenCalledWith('Nombre:', 'Test User');
    expect(console.log).toHaveBeenCalledWith('Estatura:', 170);
    expect(console.log).toHaveBeenCalledWith('Peso:', 65);
    expect(component.progressValue).toBe(100);
  });

  it('deberia navegar a Home cuando se llama a iralHome', () => {
    spyOn(router, 'navigate');

    component.iralHome();

    expect(router.navigate).toHaveBeenCalledWith(['/home']);
  });
});
