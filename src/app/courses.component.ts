
import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses', //   <div class="courses"> ".courses" / <courses> "courses" / <div id="courses"> "#Courses"
    template: `
            <input  [value]="email" (keyup.enter)="email = $event.target.value; onKeyUp()" />
        `
    
})//search for dom style object properties
export class CoursesComponent{
    email = "me@example.com";

    onKeyUp() {
        console.log(this.email);
    }
}