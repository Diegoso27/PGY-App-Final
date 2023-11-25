import { TestBed } from '@angular/core/testing';

import { StorageService } from './storage.service';

fdescribe('StorageService', () => {
  let service: StorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be created', () => {

    let usuariosLocalStorage :any;
    if(localStorage.getItem('CapacitorStorage.usuarioData')) {
      usuariosLocalStorage = localStorage.getItem('CapacitorStorage.usuarioData')
    } else {
      usuariosLocalStorage = '';
    }
    let resultado = JSON.parse(usuariosLocalStorage);
    

    const usuario = {
      name: "PedroCajas",
      email:"peterbox@gmail.com"
    }
    const usuarios = [usuario];
    service.guardarUsuario(usuarios)
    expect(resultado[0].name).toEqual('PedroCajas');
    expect(resultado[0].email).toEqual('peterbox@gmail.com');
  });

});
