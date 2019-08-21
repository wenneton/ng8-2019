import { LoginModel } from './login.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  public login(data: LoginModel) {
    return this.http.post(`https://reqres.in/api/login`, data);
  }
}
