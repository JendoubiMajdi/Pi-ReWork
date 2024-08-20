import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CongeService {

  private apiUrl = 'http://localhost:3000/conge';

  constructor(private http: HttpClient) {}

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

}
