import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'signuo-form',
  templateUrl: './signuo-form.component.html',
  styleUrls: ['./signuo-form.component.css']
})
export class SignuoFormComponent {
  form = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });
}
