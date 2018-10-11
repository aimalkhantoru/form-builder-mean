import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BASE_URL } from '../api.config';

@Injectable()
export class AuthService {

  constructor(private http: Http) {

  }

  login(loginData) {
    this.http.post(BASE_URL + '/auth/login', loginData).subscribe(res => {
        console.log(res);
        if(res.status === 200) {
          this.authenticate(res);
        }
    });
  }

  logout() {
    localStorage.removeItem('token');
  }
  authenticate(res) {
    const token = res.json();
    if (!token) {
      return;
    }
    localStorage.setItem('token', token)
  }

}
