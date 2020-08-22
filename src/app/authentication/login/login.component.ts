import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import * as data from '../../_helper/credentials.json';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  showError:any;
  loginForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  });

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.initForm('', '');
  }

  initForm(username, password) {
    this.loginForm = this.fb.group({
      username: [username, Validators.required],
      password: [password, Validators.required]
    });
  }

  login() {
    if(this.loginForm.valid && this.loginForm.value.username === data.username && this.loginForm.value.password === data.password){
      this.router.navigate(['/home']);
    } else{
      this.showError =true;
      window.alert('Please enter valid username and password');
    }
  }

}
