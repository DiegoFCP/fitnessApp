import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController  } from '@angular/common/http/testing';
import { TipsService } from './tips.service';


describe('TipsService', () => {
  let service: TipsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Importa el módulo de pruebas de HttpClient
      providers: [TipsService],
    });
    service = TestBed.inject(TipsService); // Inyecta el servicio
    httpMock = TestBed.inject(HttpTestingController); // Inyecta HttpTestingController
  });

  afterEach(() => {
    httpMock.verify(); // Verifica que no haya solicitudes pendientes
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
