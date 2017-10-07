import { Component, OnInit } from '@angular/core';
import { CoursesService } from "../course/courses.service";

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {
  courses;

  constructor(coursesService: CoursesService) {
     this.courses = coursesService.getCourses();
   }

  ngOnInit() {
  }

}
