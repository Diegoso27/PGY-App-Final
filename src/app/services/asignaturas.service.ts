import { Injectable } from '@angular/core';
import { Asignatura } from '../models/asignatura.model';
import { Preferences } from '@capacitor/preferences';


const storageAsignatura = 'asignaturaData';


@Injectable({
  providedIn: 'root'
})
export class AsignaturasService {
    private storageKey = 'asignaturas'; 


  constructor() { }

  guardarAsignatura(asignatura:any): void {
    
    const asignaturasGuardadas = this.obtenerAsignatura();

   
    asignaturasGuardadas.push(asignatura);

   
    localStorage.setItem(this.storageKey, JSON.stringify(asignaturasGuardadas ));
  }

  obtenerAsignatura(): any [] {
    
    const asignaturasGuardadas  = localStorage.getItem(this.storageKey);

    
    return asignaturasGuardadas  ? JSON.parse(asignaturasGuardadas ) : [];
  }

}
