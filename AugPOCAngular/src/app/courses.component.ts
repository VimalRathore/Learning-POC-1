import { CoursesService } from './couses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'courses',
  template: `
                 <h2>{{title}}</h2>
                 <ul>
                     <li *ngFor="let course of courses">
                     {{course}}
                     </li>
                 </ul>
                 
                 `,
  
})
export class CoursesComponent {

  title = "List of courses";
  courses;
  constructor(service:CoursesService)
  {
    //let service = new CoursesService();
    this.courses = service.getCourses();
  }

}
