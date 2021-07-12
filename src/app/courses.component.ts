
import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses', //   <div class="courses"> ".courses" / <courses> "courses" / <div id="courses"> "#Courses"
    template: `
            {{ course.title | uppercase | lowercase}} <br/>
            {{ course.student | number }} <br/>
            {{ course.rating | number:'1.2-2' }} <br/>
            {{ course.price | currency: 'AUD':true:'3.2-2' }} <br/>
            {{ course.releaseDate | date:'shortDate'}} <br/>
        `
    
})//search for dom style object properties
export class CoursesComponent{
    course = {
        title: "The Complete Angular Course",
        student: 30123,
        rating: 4.9745,
        price: 190.95,
        releaseDate: new Date(2016, 3, 1)
    }
}