import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { User } from '../domain/user'
import { UserRole } from '../domain/user-role';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public wantRegister = false;
  private user: User;
  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    this.logout();
  }

  get isLoggedIn(): boolean {
    return this.user.role !== UserRole.Guest;
  }
  get token() {
    if(!this.wantRegister){
      return 'Basic '+btoa(`${this.user.username}:${this.user.password}`);''
    }else{
      return '';//'Basic '+btoa(`${this.user.username}:${this.user.password}`);''
    }
    
  }
  get role(): UserRole {
    return this.user.role;
  }
  get userRole(){
    return this.user.role;
  }  

  get getAuth(): string{
    return "'Authorization', `Basic ${this.auth.token}`"
  }

  hasRole(roles: UserRole[]): boolean {
    return roles.some(
      role => role === this.role);
  }

  async login(user: User) {
    const oldUser = this.user;
    this.user = { 
      nickname: null,
      role: null,
      email: null,
      username: user.username,
      password: user.password,
    };
    try {
      const user = await (this.http.get('home').toPromise() as Promise<User>);
      this.user.nickname = user.nickname;
      this.user.role = user.role;
      this.router.navigate(['/tables']);
    } catch (e) {
      this.user = oldUser;
    }
  }

  logout() {
    this.user = {
      nickname: 'Guest',
      email: null,
      username: null,
      password: null,
      role: UserRole.Guest,
    };
     this.router.navigate(['/home']);
  }


  async registration(user: User) : Promise<any>{
    this.wantRegister = true;
    this.user = user;
      await (this.http.post('registration', this.user).toPromise() as Promise<User>);
      this.wantRegister = false;
      this.router.navigate(['/home']);
  }

  private createUserModel(user: any): User {
    return {
      ...user,
    } as User;
  }
}
