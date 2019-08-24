import { Component, OnInit } from '@angular/core';
import { UserModel } from './user.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public users: UserModel[];
  constructor() { }

  ngOnInit() {
    this.users = [
      {
        id: 7,
        email: 'michael.lawson@reqres.in',
        first_name: 'Michael',
        last_name: 'Lawson',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg'
      }
    ];
  }

}
