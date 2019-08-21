import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: AuthService) { }

  ngOnInit() {
  }

  public send() {
    // this.loginService.login()
    alert('Oi');
  }

}
