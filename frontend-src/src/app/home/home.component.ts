import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

import { User } from '../domain/user';
import { UserRole } from '../domain/user-role';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  hidePassword = true;

  user: User = {
    nickname: null,
    email: null,
    username: '',
    password: '',
    role: UserRole.Guest,
  };

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  onSubmit(form: FormGroup) {
    const user = form.value as User;
    this.authService.login(user);
  }
  registration(){
    this.router.navigate(['/', 'create-account']);
  }

}
