// import * as firebase from 'firebase/app';

import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
// import { FireserviceService } from '../services/fireservice.service';
import { FireserviceService } from '../fireservice/fireservice.service';
// import { AngularFireAuth } from '@angular/fire/auth';
// import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class FireauthService {
  constructor(
    private firebaseService: FireserviceService,
    public afAuth: AngularFireAuth
  ) {}
  doRegister(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth()
      // this.afAuth
        .createUserWithEmailAndPassword(value.email, value.password)
        .then(
          (res) => resolve(res),
          (err) => reject(err)
        );
    });
  }
  doLogin(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth()
      // this.afAuth
      .signInWithEmailAndPassword(value.email, value.password).then(
        (res) => resolve(res),
        (err) => reject(err)
      );
    });
  }
  doLogout() {
    return new Promise<void>((resolve, reject) => {
      firebase.auth();
      // this.afAuth
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
