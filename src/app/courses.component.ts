
import { Component } from '@angular/core';

@Component({
    selector: 'courses', //   <div class="courses"> ".courses" / <courses> "courses" / <div id="courses"> "#Courses"
    template: `
        <h2>{{ title }}</h2>
            <ul>
                <li *ngFor="let course of courses">
                    {{ course }}
                </li>
            </ul>
        `
})
export class CoursesComponent{
    title = "List of Courses";
    courses = ["angular", "Reactjs", "nodejs"];
    
}