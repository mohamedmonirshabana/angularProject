
import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses', //   <div class="courses"> ".courses" / <courses> "courses" / <div id="courses"> "#Courses"
    template: `
            <input #email (keyup.enter)="onKeyUp(email.value)" />
        `
    //search for dom style object properties
})
export class CoursesComponent{
    onKeyUp(email:any) {
        console.log(email);
    }
}