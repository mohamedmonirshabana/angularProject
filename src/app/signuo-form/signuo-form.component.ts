import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { usernameValidators } from './username.validators';

@Component({
  selector: 'signuo-form',
  templateUrl: './signuo-form.component.html',
  styleUrls: ['./signuo-form.component.css']
})
export class SignuoFormComponent {
  form = new FormGroup({
    account: new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        usernameValidators.cannotContainSpace
      ],usernameValidators.shouldBeUnique),
      password: new FormControl('',Validators.required)
    }),
  });

  get username() {
    return this.form.get('account.username');
  }

  login() {
    this.form.setErrors({
      invalidLogin:true
    });
  }
}
