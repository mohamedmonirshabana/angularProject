
import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses', //   <div class="courses"> ".courses" / <courses> "courses" / <div id="courses"> "#Courses"
    template: `
            <div (click)="onDiveClicked()">         
            <button (click)="onSave()">Save</button>
            </div>
        `
    //search for dom style object properties
})
export class CoursesComponent{
    onDiveClicked() {
        console.log("Dive wase click");
    }
    onSave() {
        
        console.log("button wase click");
    }
}