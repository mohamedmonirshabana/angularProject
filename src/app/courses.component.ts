
import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses', //   <div class="courses"> ".courses" / <courses> "courses" / <div id="courses"> "#Courses"
    template: `     
            <button class="btn btn-primary">Save</button>
        `
})
export class CoursesComponent{
    imageUrl = "";
    colSpan = 2;
}