import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private readonly SESSION_KEY = 'userData';

  setUserData(user: string, data: any): void {
    const userData = { user, data };
    localStorage.setItem(this.SESSION_KEY, JSON.stringify(userData));
  }

  getUserData(): any {
    const userDataString = localStorage.getItem(this.SESSION_KEY);
    return userDataString ? JSON.parse(userDataString) : null;
  }

  clearUserData(): void {
    localStorage.removeItem(this.SESSION_KEY);
  }

  isLoggedIn(): boolean {
    return !!this.getUserData();
  }
}
