import { Injectable } from '@angular/core';

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
}
