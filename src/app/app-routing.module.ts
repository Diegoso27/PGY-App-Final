import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard'


const redirectToLogin = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'bienvenido',
    canActivate:[AuthGuard],
    data:{ authGuardPipe : redirectToLogin },
    loadChildren: () => import('./bienvenido/bienvenido.module').then( m => m.BienvenidoPageModule)
  },

  {
    path: 'asist-register',
    canActivate:[AuthGuard],
    data:{ authGuardPipe : redirectToLogin },
    loadChildren: () => import('./asist-register/asist-register.module').then( m => m.AsistRegisterPageModule)
  },
  {
    path: 'perfil',
    canActivate:[AuthGuard],
    data:{ authGuardPipe : redirectToLogin },
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'register-assit',
    canActivate:[AuthGuard],
    data:{ authGuardPipe : redirectToLogin },
    loadChildren: () => import('./register-assit/register-assit.module').then( m => m.RegisterAssitPageModule)
  },
  {
    path: 'recup-contra',
    canActivate:[AuthGuard],
    data:{ authGuardPipe : redirectToLogin },
    loadChildren: () => import('./recup-contra/recup-contra.module').then( m => m.RecupContraPageModule)
  },
  {
    path: 'delete-account',
    canActivate:[AuthGuard],
    data:{ authGuardPipe : redirectToLogin },
    loadChildren: () => import('./delete-account/delete-account.module').then( m => m.DeleteAccountPageModule)
  },
 
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'qr-result',
    canActivate:[AuthGuard],
    data:{ authGuardPipe : redirectToLogin },
    loadChildren: () => import('./modals/qr-result/qr-result.module').then( m => m.QrResultPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
