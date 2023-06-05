import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import { FireserviceService } from '../fireservice/fireservice.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class FireauthService {
  constructor(
    private firebaseService: FireserviceService,
    public afAuth: AngularFireAuth
  ) {}
  doRegister(value: any) {
    return new Promise<any>((resolve, reject) => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(value.email, value.password)
        .then(
          (res) => resolve(res),
          (err) => reject(err)
        );
    });
  }
  doLogin(value: any) {
    return new Promise<any>((resolve, reject) => {
      firebase
        .auth()
        .signInWithEmailAndPassword(value.email, value.password)
        .then(
          (res) => resolve(res),
          (err) => reject(err)
        );
    });
  }
  doLogout(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.afAuth
        .signOut()
        .then(() => {
          this.firebaseService.unsubscribeOnLogOut();
          resolve();
        })
        .catch((error) => {
          console.log(error);
          reject();
        });
    });
  }
}
