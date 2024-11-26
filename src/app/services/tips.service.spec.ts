import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TipsService } from './tips.service';

describe('TipsService', () => {
  let service: TipsService;
  let httpMock: HttpTestingController;
  const mockUrl = 'https://cors-anywhere.herokuapp.com/https://frasesapi.vercel.app/v1/frases/aleatoria/?categoria=salud';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TipsService],
    });

    service = TestBed.inject(TipsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Verifica que no haya solicitudes pendientes
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('deberia manejar errores al hacer consultas a la api', () => {
    const mockError = { status: 404, statusText: 'Not Found' };

    service.getHealthTip().subscribe(
      () => fail('Expected an error, but received a response'),
      (error) => {
        expect(error.status).toBe(404);
        expect(error.statusText).toBe('Not Found');
      }
    );

    const req = httpMock.expectOne(mockUrl);
    expect(req.request.method).toBe('GET');
    req.flush(null, mockError); // Simula una respuesta de error
  });
});
