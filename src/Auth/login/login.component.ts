import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/Services/auth.service';
import { LoginDto } from '../dto/login.dto';
import { User } from 'src/Types/UserTypes';
import { jwtDecode } from 'jwt-decode';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  loginData: LoginDto = {
    mail: '',
    password: ''
  };

  constructor(
    private router: Router,
    private Userservice: UserService,
    private formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({
      mail: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }



  redirectToSignUp(): void {
    this.router.navigate(['/signup']);
  }

  login() {
    if (this.loginForm.valid) {
      const loginData: LoginDto = this.loginForm.value;

      this.Userservice.login(loginData).subscribe(
        response => {
          this.router.navigate(['/listconge'])
          console.log('Login response', response);
          const token = response.token;

          const decodedToken: any = jwtDecode(token);
          console.log('Decoded token', decodedToken);

          localStorage.setItem('token', token);

          if (decodedToken.role === 'admin') {
            this.router.navigate(['/listconge']);
          } else {
            this.router.navigate(['/addconge']);
          }
        },
        error => {
          console.error('Login error', error);
        }
      );
    } else {
      console.error('Form is invalid');
    }
  }
}
