import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData: any;
  constructor(private authService: AuthService ) {
  }
  ngOnInit() {
    this.loginData = {
      email: '',
      password: ''
    };
  }
  login() {
    this.authService.login(this.loginData);
    console.log(this.loginData);
  }
}
