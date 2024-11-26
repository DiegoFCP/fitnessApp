import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PageNotFoundComponent } from './page-not-found.component';
import { By } from '@angular/platform-browser';


describe('PageNotFoundComponent', () => {
  let component: PageNotFoundComponent;
  let fixture: ComponentFixture<PageNotFoundComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNotFoundComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Validacion de mensaje de error correcto.
  it('mostrar display con mensaje de error correcto', () => {
    const errorMessage = fixture.debugElement.query(By.css('.error-message')).nativeElement;
    expect(errorMessage.textContent).toContain('Lo sentimos, la página que buscas no existe.');
  });
  
  // Validacion que exista título en DOM.
  it('deberia tener titulo', () => {
    const title = fixture.debugElement.query(By.css('h1')).nativeElement;
    expect(title).toBeTruthy();
    expect(title.textContent).toContain('Error 404'); // Ajustar según el texto real
  });
});
