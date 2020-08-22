import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-email',
  templateUrl: './login-email.component.html',
  styleUrls: ['./login-email.component.scss']
})
export class LoginEmailComponent implements OnInit {
  @Input() public form: FormGroup;
  @Input() public error: any;
  validationMessages:any;
  constructor() { }

  ngOnInit() {
    this.validationMsg();
  }
  validationMsg() {
    this.validationMessages = {
      'username': [
        { type: 'required', message: '*Username is required' }
      ]
    };
  }

}
