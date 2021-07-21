import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses = [
    { id: 1, name: 'javascript' },
    { id: 2, name: 'Typescript' },
    { id: 3, name: 'angularjs' },
    
  ];

  onAdd() {
    this.courses.push({ id: 4, name: 'C#' });
    console.log(this.courses);
  }
}
