
import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses', //   <div class="courses"> ".courses" / <courses> "courses" / <div id="courses"> "#Courses"
    template: `
            <input (keyup.enter)="onKeyUp($event)" />
        `
    //search for dom style object properties
})
export class CoursesComponent{
    onKeyUp(event:any) {
        console.log(event.target.value);
    }
}