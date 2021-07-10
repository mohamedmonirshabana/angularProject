
import { Component } from '@angular/core';

@Component({
    selector: 'courses', //   <div class="courses"> ".courses" / <courses> "courses" / <div id="courses"> "#Courses"
    template: '<h2>{{ "Title:" + title }}</h2>'
})
export class CoursesComponent{
    title = "List of Courses";

    getTitle() {
        return this.title;
    }
}