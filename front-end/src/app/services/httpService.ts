import {Http} from '@angular/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from '../api.config';

@Injectable()
export class HttpService  {
  constructor(private http: Http) {


      console.log(v);
  }
  async getSchema() {
    return this.http.get(`${BASE_URL}/api/schema`).toPromise();
  }
}
