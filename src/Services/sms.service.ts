import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SmsService {
  private apiUrl = 'http://localhost:3000/sms'; // Update with your backend URL

  constructor(private http: HttpClient) {}

  sendSms(to: string, message: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/send`, { to, message });
  }
}
