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
  selector: 'app-register',
  templateUrl: './registerpage.page.html',
  styleUrls: ['./registerpage.page.scss'],
})
export class RegisterPage implements OnInit {
  validationsForm: FormGroup;
  errorMessage = ''; // Remove the type annotation
  successMessage = '';
  validationmessages = {
    email: [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Enter a valid email.' },
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
  tryRegister(value) {
    this.authService.doRegister(value).then(
      (res) => {
        console.log(res);
        this.errorMessage = '';
        this.successMessage = 'Your account has been created. Please login.';
      },
      (err) => {
        console.log(err);
        this.errorMessage = err.message;
        this.successMessage = '';
      }
    );
  }
  goLoginPage() {
    this.router.navigate(['/login']);
  }
}
