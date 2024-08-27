import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/Services/auth.service';
import { SignUpDto } from '../dto/signup.dto';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm: FormGroup;

  constructor(
    private router: Router,
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {
    this.signupForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      tel: ['', Validators.required],
      mail: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  signup() {
    if (this.signupForm.valid) {
      const signupData: SignUpDto = this.signupForm.value;

      this.userService.signUp(signupData).subscribe(
        response => {
          console.log('Signup response', response);
          this.router.navigate(['/login']);
        },
        error => {
          console.error('Signup error', error);
        }
      );
    } else {
      console.error('Form is invalid');
    }
  }
}
