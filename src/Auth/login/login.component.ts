import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from 'src/Services/auth.service';
import { LoginDto } from '../dto/login.dto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router, private Userservice: UserService){}


  redirectToSignUp(): void {
    this.router.navigate(['/signup']);
  }

  login() {
    const loginData: LoginDto = {
      mail: 'majdi.jendoubi@esprit.tn',
      password: 'Majdi123'
    };

    this.Userservice.login(loginData).subscribe(response=>{
      console.log('Login response', response);
    });
  }

}
