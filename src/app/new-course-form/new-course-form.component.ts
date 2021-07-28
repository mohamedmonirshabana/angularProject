import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent  {
  form = new FormGroup({
    topics: new FormArray([])
  });
  addTopic(topic: HTMLInputElement) {
    (this.form.get('topics') as FormArray).push(new FormControl(topic.value));
    topic.value = '';
  }
}
