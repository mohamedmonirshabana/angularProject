
import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses', //   <div class="courses"> ".courses" / <courses> "courses" / <div id="courses"> "#Courses"
    template: `
            <input (keyup)="onKeyUp($event)" />

            <button (click)="onSave($event)">save</button>
        `
    //search for dom style object properties
})
export class CoursesComponent{
    onKeyUp(event:any) {
        if (event.keyCode === 13) console.log("ENTER was Pressed");
    }

    onSave(event: any) {
        event.p
        console.log("button was Enter",event);
    }
}