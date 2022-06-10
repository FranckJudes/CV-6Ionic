import { firebaseConfig } from './../../environments/environment';
import { Injectable } from '@angular/core';
import 'firebase/auth'; 
import {AngularFireAuth} from '@angular/fire/compat/auth';

export  interface UserPro{
  username: string;
  uid: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(public auth : AngularFireAuth) {}

  LoginFireauth(value){
    return new Promise<any>((resolve, reject) => {
      this.auth.signInWithEmailAndPassword(value.email,value.password).then(
        res => resolve(res),
        err => reject(err)
      )
    })
  }
  userRegistration(value){
      return new Promise<any>((resolve, reject) => {
        this.auth.createUserWithEmailAndPassword(value.email,value.password).then(
          res => resolve(res),
         err => reject(err)
        )
      })
  }


}