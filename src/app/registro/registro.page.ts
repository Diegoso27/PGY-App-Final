import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';
import { Usuario } from '../models/usuario';
import { HelperService } from '../services/helper.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})

export class RegistroPage implements OnInit {

  
    

  constructor(
    public formBuilder: FormBuilder,
    public alertController: AlertController,
    private router:Router,
    private auth: AuthService,
    private storage: StorageService,
    private helper: HelperService
    ) { } 

    userName: string = '';
    email2: string = '';
  

  form = this.formBuilder.group({
    email: ['',[Validators.email, Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    userName: ['',[Validators.required]]  
  })  

  ngOnInit() {}

  async register() {
    if(this.form.valid) {
      const loader = await this.helper.showLoader("Cargando");
      const { email, password } = this.form.getRawValue();
      this.auth.register(email, password)
      .then(async () => {
      var usuario = [{           
        name: this.userName,
        email: this.email2           
      }]
      this.storage.guardarUsuario(usuario);
      console.log(usuario);


        this.router.navigate(['/login']);  
        loader.dismiss();
      })
      .catch(e => {
        if(e.code == 'auth/email-already-in-use') {
          const msj = this.helper.showAlert('El correo ingresado ya está registrado','Correo ya registrado');
          loader.dismiss();

        }
      });  
    } if (this.form.get('email')?.errors?.['required']) {
      const msj = this.helper.showAlert('Debes ingresar un correo','Campo Vacio');
    } if (this.form.get('userName')?.errors?.['required']){
      const msj = this.helper.showAlert('Debes ingresar un nombre','Campo Vacio');
    } if (this.form.get('password')?.errors?.['required']) {
      const msj = this.helper.showAlert('Debes ingresar una contraseña','Campo Vacio');
    } if (this.form.get('email')?.errors?.['email']) {
      const msj = this.helper.showAlert('El correo ingresado no es valido','Correo no valido');
    } if (this.form.get('password')?.errors?.['minLength(6)']) {
      const msj = this.helper.showAlert('Debes ingresar una contraseña de al menos 6 caracteres','Contraseña no valida');
         



    }
  }

}
