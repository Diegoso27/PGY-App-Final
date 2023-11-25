import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertController, AnimationController, IonCard } from '@ionic/angular';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';
import { signInWithEmailAndPassword } from '@angular/fire/auth';
import { AuthService } from '../services/auth.service';
import { filter } from 'rxjs';
import type { Animation } from '@ionic/angular';
import { Network, ConnectionStatus } from '@capacitor/network';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild(IonCard, { read: ElementRef })
  card!: ElementRef<HTMLIonCardElement>;

  user$ = this.auth.authState$.pipe(
    filter(state => state ? true : false)
  );

  networkListener:any='';
  

 
    
  private animation!: Animation;

  ngOnInit() {

  }

  


  constructor(
    public formBuilder: FormBuilder,
    public alertController: AlertController,
    private router:Router,
    private helper:HelperService,
    private auth: AuthService,
    private animationCtrl: AnimationController,
  
    ) {}

    ngAfterViewInit() {
      this.animation = this.animationCtrl
        .create()
        .addElement(this.card.nativeElement)
        .duration(1500)
        .iterations(Infinity)
        .direction('alternate')
        .fromTo('background', 'blue', 'var(--background)');
        this.animation.play();
    }

  
    

  form = this.formBuilder.group({
    email: ['',[Validators.email, Validators.required]],
    password: ['',[Validators.required]]
  });





  navegarRegistro() {
    this.router.navigate(['/registro']);
  }
  
  login() {
    console.log("hola");
    if(this.form.valid) {
      console.log("hola 2");
      const { email, password } = this.form.getRawValue();
      this.auth.login(email, password)
      .then(() => {
        this.router.navigate(['/bienvenido']);
      const asd = this.helper.showToast("hola");
      })
      .catch(error => {
        if(error.code == 'auth/invalid-login-credentials') {
          const msj = this.helper.showAlert('Correo y/o contraseña no validas','Credenciales no validas');
        }
        
      });     
    } else {
      this.form.markAllAsTouched();
    }    
  }
} 