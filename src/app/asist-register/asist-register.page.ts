import { Component, OnInit } from '@angular/core';
import { Asignatura } from '../models/asignatura.model';
import { Router } from '@angular/router';
import { AsignaturasService } from '../services/asignaturas.service';

@Component({
  selector: 'app-asist-register',
  templateUrl: './asist-register.page.html',
  styleUrls: ['./asist-register.page.scss'],
})
export class AsistRegisterPage implements OnInit {

  asistencias: any;
  xasignatura:string = "";
   xdocente:string = "";
   xfecha:string = "";
   xhora:string = "";
   xleccion:string = "";
   xsala:string = "";
   xseccion:string = "";



 


  constructor(
    private router: Router,
    private asignaturas: AsignaturasService
  ) { }

  ngOnInit() {
    this.cargarAsignatura();
  }

  
  volverM(){
    this.router.navigateByUrl("bienvenido")
   }
  
 
  
  async cargarAsignatura(){
    console.log("ASISTENCIA GUARDADA",await this.asignaturas.obtenerAsignatura());
    this.asistencias = (await this.asignaturas.obtenerAsignatura());
    this.xasignatura =  this.asistencias[0].asignatura;
    this.xdocente =  this.asistencias[0].docente;
    this.xfecha =  this.asistencias[0].fecha;
    this.xhora =  this.asistencias[0].hora;
    this.xleccion =  this.asistencias[0].leccion;
    this.xsala =  this.asistencias[0].sala;
    this.xseccion =  this.asistencias[0].seccion;
    
  }

}
