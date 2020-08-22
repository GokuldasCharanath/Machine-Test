import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationRoutingModule } from './authentication/authentication-routing.module';
import { HomeRoutingModule } from './home/home-routing.module';


const routes: Routes = [];

@NgModule({
  imports: [
    HomeRoutingModule,
    AuthenticationRoutingModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
