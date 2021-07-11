
import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses', //   <div class="courses"> ".courses" / <courses> "courses" / <div id="courses"> "#Courses"
    template: `         
            <button [style.backgroundColor="isActive ? 'blue': 'white'"]>Save</button>
        `
    //search for dom style object properties
})
export class CoursesComponent{
    isActive = true;  //true or false
}