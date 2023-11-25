import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavParams } from '@ionic/angular';
import { AsignaturasService } from 'src/app/services/asignaturas.service';
import { HelperService } from 'src/app/services/helper.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-qr-result',
  templateUrl: './qr-result.page.html',
  styleUrls: ['./qr-result.page.scss'],
})
export class QrResultPage implements OnInit {
  @Input() asistencias:any;
  
  infoQr: any;
  
  dataAsistencia:any;

  nombre:string = '';
  asignatura:string = "";
  docente:string = "";
  fecha:string = "";
  hora:string = "";
  leccion:string = "";
  sala:string = "";
  seccion:string = "";


  constructor(private modalController:ModalController,
              private storageService:StorageService,
              private asignaturaService: AsignaturasService,
  
              private helper:HelperService,
              private router:Router,
              private navParams: NavParams,
    
     ) { this.infoQr = this.navParams.get('dataQr');
        console.log('Info QR:', this.infoQr)}

  ngOnInit() {
    this.vistaAsignatura();
 
  }
  
  close(){
    this.modalController.dismiss();
  }
  async vistaAsignatura(){
    console.log("ASIGNATURA STORAGE",await this.asignaturaService.obtenerAsignatura());
  }


  async guardarAsignatura(){

    this.modalController.dismiss({
      infoQr: this.infoQr
    });

    this.asignaturaService.guardarAsignatura(this.infoQr);
    await this.helper.showAlert("Debe revisar su asistencia","Información");
    

  }

}
