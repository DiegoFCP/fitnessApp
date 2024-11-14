import { TestBed } from '@angular/core/testing';

import { PedometerService } from './podometro.service';

describe('PodometroService', () => {
  let service: PedometerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PedometerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
