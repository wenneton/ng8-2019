import { LoginModel } from './../login.model';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public data: LoginModel;

  constructor(private loginService: AuthService) { }

  ngOnInit() {
    this.data = new LoginModel();
    // this.data.username = 'eder.franco';
  }

  public send() {
    // this.loginService.login()
    console.log(this.data);
  }

  public isValid() {
    return this.data.username && this.data.password;
  }

}
