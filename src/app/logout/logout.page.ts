import { Component, OnInit } from '@angular/core';
import { FireauthService } from '../fireauthservice/fireauthservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {
  constructor(private authService: FireauthService, private router: Router) {}

  ngOnInit() {}
  logout() {
    this.authService.doLogout().then(
      (res) => {
        this.router.navigate(['/login']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
