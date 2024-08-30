import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './AuthService';

@Injectable({
  providedIn: 'root'
})
export class CongeService {

  private apiUrl = 'http://localhost:3000/conge';

  constructor(private http: HttpClient) {}

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token'); // Assuming the JWT token is stored in localStorage
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  addConge(Conge: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, Conge);
  }

  updateConge(idConge: number, Conge: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${idConge}`, Conge);
  }

  findAll(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  findById(idConge: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${idConge}`);
  }

  delete(idConge: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${idConge}`);
  }

  getAllLeaves(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  updateLeaveStatus(id: string, statut: string): Observable<any> {
    const formattedId = id.toString();
    return this.http.put(`${this.apiUrl}/${id}/statut`, { statut });
  }

  findByUserId(userId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/user/${userId}`);
  }

  getUserConges(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/user/conges`, { headers: this.getAuthHeaders() });
  }

}
