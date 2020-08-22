import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-password',
  templateUrl: './login-password.component.html',
  styleUrls: ['./login-password.component.scss']
})
export class LoginPasswordComponent implements OnInit {
  @Input() public form: FormGroup;
  @Input() public error: any;
  validationMessages:any;
  constructor() { }

  ngOnInit() {
    this.validationMsg();
  }
  validationMsg() {
    this.validationMessages = {
      'password': [
        { type: 'required', message: '*Password is required' }
      ]
    };
  }
}
