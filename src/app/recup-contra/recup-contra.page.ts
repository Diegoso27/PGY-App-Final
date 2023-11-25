import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { 
  FormBuilder,
  Validators,
  FormGroup, 
  FormControl} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HelperService } from '../services/helper.service';


@Component({
  selector: 'app-recup-contra',
  templateUrl: './recup-contra.page.html',
  styleUrls: ['./recup-contra.page.scss'],
  providers: [AuthService]  
})
export class RecupContraPage implements OnInit {

  constructor(
    private auth: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private fb: FormBuilder,
    private helper: HelperService

  ) { }

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]]
  })

  ngOnInit() {
  }

  async resetPassword() {
    if(this.form.valid) {  
      const loader = await this.helper.showLoader("Cargando"); 
      const {email} = this.form.getRawValue();
      try {
        await this.auth.resetPassword(email);
        this.router.navigate(['/login']);
        loader.dismiss();
      } catch (error) {
        console.log(error);
      }
    } if (this.form.get('email')?.errors?.['required']) {
      const msj = this.helper.showAlert('Debes ingresar un correo','Campo Vacio');
    } if (this.form.get('email')?.errors?.['email']) {
      const msj = this.helper.showAlert('El correo ingresado no es valido','Correo no valido');
    }

  }
}
