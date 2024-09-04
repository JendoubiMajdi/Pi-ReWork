import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}



  // Example method to check if user is authenticated
  isAuthenticated(): boolean {
    // Check for a valid authentication token or session
    const token = localStorage.getItem('token');
    return !!token; // Simple check if token exists
  }

  logout(): void {
    localStorage.removeItem('token'); // Remove token from localStorage
    // Additional cleanup if needed
  }

  getUserId(): string | null {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decodedToken: any = jwtDecode(token);
        return decodedToken.userId; // Make sure this matches your token structure
      } catch (error) {
        console.error('Failed to decode token', error);
      }
    }
    return null;
  }
}
