import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { LoginEmailComponent } from './login/login-email/login-email.component';
import { LoginPasswordComponent } from './login/login-password/login-password.component';
import { LoginButtonComponent } from './login/login-button/login-button.component';


@NgModule({
  declarations: [LoginComponent, LoginEmailComponent, LoginPasswordComponent, LoginButtonComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthenticationModule { }
