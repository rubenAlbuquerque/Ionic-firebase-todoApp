import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormBuilder,
  FormGroup,
  FormControl,
} from '@angular/forms';
// import { FireauthService } from '../service/fireauth.service';
import { FireauthService } from '../fireauthservice/fireauthservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  validationsForm: FormGroup;
  errorMessage = ''; // Remove the type annotation
  validationmessages = {
    email: [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Please enter a valid email.' },
    ],
    password: [
      { type: 'required', message: 'Password is required.' },
      {
        type: 'minlength',
        message: 'Password must be at least 5 characterslong.',
      },
    ],
  };
  constructor(
    private authService: FireauthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}
  ngOnInit() {
    this.validationsForm = this.formBuilder.group({
      email: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
        ])
      ),
      password: new FormControl(
        '',
        Validators.compose([Validators.minLength(5), Validators.required])
      ),
    });
  }
  tryLogin(value) {
    this.authService.doLogin(value).then(
      (res) => {
        this.router.navigate(['/home']);
      },
      (err) => {
        this.errorMessage = err.message;
        console.log(err);
      }
    );
  }
  goRegisterPage() {
    this.router.navigate(['/register']);
  }
}
