import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, authState, sendPasswordResetEmail } from '@angular/fire/auth';
import { getAuth } from '@firebase/auth';

@Injectable({
  providedIn: 'root'
})


export class AuthService {



  authState$ = authState(this.auth);

  

  
  constructor(
    private auth: Auth
  ) { }

    
  currentUser() {
    return this.auth.currentUser;
  }
  
 

  async resetPassword(email: any): Promise<void> {
    try {
      return sendPasswordResetEmail(this.auth, email);
    } 
    catch (error) {
      
    }
  }


  async register(email: any, password: any) {
    const user = await createUserWithEmailAndPassword(this.auth, email, password);
    return await signInWithEmailAndPassword(this.auth, email, password); 
  }

  login(email: any, password: any) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  logout() {
    return signOut(this.auth);
  }

}