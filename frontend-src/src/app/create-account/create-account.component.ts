import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from '../domain/user';
import { UserRole } from '../domain/user-role';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  hidePassword = true;

  user: User = {
    
    username: '',
    password: '',
    nickname: '',
    email: '',
    role: UserRole.Guest,    
  } 

  constructor(
  ) { }

  ngOnInit(): void {
  }

  async onSubmit(form: FormGroup) {
    
  }
}
