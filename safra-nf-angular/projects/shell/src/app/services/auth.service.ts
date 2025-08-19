import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInStatus = false;

  login(username: string, password: string): boolean {
    // Aqui pode colocar lógica real com backend
    if (username === 'admin' && password === 'admin') {
      this.isLoggedInStatus = true;
      return true;
    }
    return false;
  }

  logout() {
    this.isLoggedInStatus = false;
  }

  isLoggedIn(): boolean {
    return this.isLoggedInStatus;
  }
}