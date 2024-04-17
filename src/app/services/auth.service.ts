import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {
    this.getStatus();
    console.log('entrou em service!');
  }

  getStatus(): string {
    const auth = localStorage.getItem('auth');
    if (!auth) {
      this.logout();
      return 'none';
    } else {
      return auth;
    }
  }

  login(email: string, password: string): string {
    const userListString = localStorage.getItem('userList');
    const userList = !!userListString ? JSON.parse(userListString) : [];
    const user = userList.find(
      (u: { email: string; password: string }) =>
        u.email === email && u.password === password
    );

    if (user) {
      localStorage.setItem('auth', user.email);
      return 'success';
    } else {
      this.logout();
      return 'invalid_credentials';
    }
  }

  logout() {
    localStorage.setItem('auth', 'none');
  }
}
