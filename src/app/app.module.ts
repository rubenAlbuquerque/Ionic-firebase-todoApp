import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule, SETTINGS } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

export const firebaseConfig = {
  apiKey: "AIzaSyCU1jN_0X47RdrQdnm2CJo3Xc7UHuiIhCg",
  authDomain: "lab6ami50185.firebaseapp.com",
  projectId: "lab6ami50185",
  storageBucket: "lab6ami50185.appspot.com",
  messagingSenderId: "835078585914",
  appId: "1:835078585914:web:81af25725051d43a02ff03",
  measurementId: "G-CCLP0GTS1T"
};


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, 
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule,],
    providers: [
      { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
      { provide: SETTINGS, useValue: {} },
      SplashScreen,
      StatusBar,

    ],
  bootstrap: [AppComponent],
})
export class AppModule {}
