import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AngularFireModule } from '@angular/fire/compat';
import {
  AngularFirestoreModule,
  SETTINGS,
} from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';

// export const firebaseConfig = {
//   apiKey: '', //"AIzaSyDdaOvudIsUmsaBHZMkKNU6Nw4xSItZElE", AIzaSyCUFI4siMfrtklxZjD4_zKz-Jm9A-fOU3I
//   authDomain: 'lab-work-6.firebaseapp.com',
//   projectId: 'lab-work-6',
//   storageBucket: 'lab-work-6.appspot.com',
//   messagingSenderId: '803969664739',
//   appId: '1:803969664739:web:5e07ffa4080078ec04a7d6',
// };

const firebaseConfig = {
  apiKey: 'AIzaSyCfmSptn_sjGugATstdnSgo8WZOWHCjtck',
  authDomain: 'ionic-database-eceb1.firebaseapp.com',
  projectId: 'ionic-database-eceb1',
  storageBucket: 'ionic-database-eceb1.appspot.com',
  messagingSenderId: '490916163747',
  appId: '1:490916163747:web:9372eee3bb5e20a54ccf16',
  measurementId: 'G-ZEXJFN8X7X',
};

// const firebaseConfig = {
//   apiKey: 'YOUR_API_KEY',
//   authDomain: 'YOUR_AUTH_DOMAIN',
//   databaseURL: 'YOUR_DATABASE_URL',
//   projectId: 'YOUR_PROJECT_ID',
//   storageBucket: 'YOUR_STORAGE_BUCKET',
//   messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
//   appId: 'YOUR_APP_ID',
//   measurementId: 'YOUR_MEASUREMENT_ID',
// };
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: SETTINGS, useValue: {} },
    StatusBar,
    SplashScreen,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}