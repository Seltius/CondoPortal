import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenKey = 'tokenKey';

  login(username: string, password: string): Promise<string> {
    // todo implement login
    const token = 'token';
    this.storeToken(token);
    return Promise.resolve('token');
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
  }

  storeToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  isAuthenticated(): boolean {
    debugger;
    const token = this.getToken();
    // todo validate token
    return token !== null;
  }
}
