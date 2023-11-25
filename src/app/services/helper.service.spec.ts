import { TestBed } from '@angular/core/testing';

import { HelperService } from './helper.service';

describe('HelperService', () => {
  let service: HelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Probando el metodo de suma del Helper', () => {
    
    const numUno = 75;
    const numDos = 25;

    const resultado = service.sumar(numUno,numDos);

    expect(resultado).toBe(100);

  });
});
