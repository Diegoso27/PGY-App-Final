import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.page.html',
  styleUrls: ['./delete-account.page.scss'],
})
export class DeleteAccountPage implements OnInit {

  nombre: string = 'Diego';
  nombreUser: any;

  
  async probandoStorage(){
    this.storage.setItem('nombre', this.nombre);    
  }

  async recuperarData() {
    this.nombreUser = await this.storage.getItem('nombre');
    console.log(this.nombreUser);
    return this.nombreUser;
  }

  constructor(
    private storage: StorageService
  ) { }

  ngOnInit() {
    
  }

}
