import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginDto } from 'src/Auth/dto/login.dto';
import { SignUpDto } from 'src/Auth/dto/signup.dto';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:3000/auth';

  constructor(private http:HttpClient){}

  signUp(signUpDto: SignUpDto): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(`${this.apiUrl}/signup`, signUpDto);
  }

  login(loginDto: LoginDto): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(`${this.apiUrl}/login`, loginDto);
  }
}


