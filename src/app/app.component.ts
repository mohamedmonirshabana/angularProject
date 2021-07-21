import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  courses:any;

  loadCourses() {
    this.courses = [
    { id: 1, name: 'javascript' },
    { id: 2, name: 'Typescript' },
    { id: 3, name: 'angularjs' },
    
  ];  
  }
  trackCourse(index:any, course:any) {
    return course ? course.id : undefined;
  }
}
