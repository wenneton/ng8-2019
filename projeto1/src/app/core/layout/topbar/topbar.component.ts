import { ToastrService } from 'ngx-toastr';
import { AuthService } from './../../../modules/access-control/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/access-control/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService,
    private toastr: ToastrService
  ) { }

  ngOnInit() { }

  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
    this.toastr.success('Logout efetuado com sucesso!');
  }

  public logout() {
    this.service.logout();
    this.toastr.info('Você saiu do sistema');
    this.router.navigate(['login']);
  }

}
