import { Component } from '@angular/core';
import { Router } from '@angular/router';
//  import { AngularFireAuth} from '@angular/fire/auth';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
// npm install @ionic-native/splash-screen @ionic-native/status-bar
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private afAuth: AngularFireAuth,
    private router: Router
  ) {}

  initializeApp() {
    this.platform.ready().then(() => {
      this.afAuth.user.subscribe(
        (user) => {
          if (user) {
            this.router.navigate(['/home']);
          } else {
            this.router.navigate(['/login']);
          }
        },
        (err) => {
          this.router.navigate(['/login']);
        },
        () => {
          this.splashScreen.hide();
        }
      );
      this.statusBar.styleDefault();
    });
  }
}
