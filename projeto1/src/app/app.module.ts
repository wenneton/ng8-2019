import { MainModule } from './modules/main/main.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccessControlModule } from './modules/access-control/access-control.module';
import { ToastrModule } from 'ngx-toastr';
import { ngxToastrConstants } from './core/constants/ngx-toastr.constants';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(ngxToastrConstants),
    LoadingBarHttpClientModule,
    AppRoutingModule,
    AccessControlModule,
    MainModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
