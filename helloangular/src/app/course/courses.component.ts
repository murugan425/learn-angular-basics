import { Component } from '@angular/core';
import { CoursesService } from './courses.service';
@Component({
    selector: 'app-courses',
    template: `
        <h2>{{ TITLE }}</h2>
        <ul>
            <li *ngFor='let course of courses'>
                <h3>{{course}}</h3>
            </li>
        </ul>
        `
})
export class CoursesComponent {
    title = 'List of Courses';
    courses;

    getTitle() {
        return this.title;
    }

    get TITLE() {
        return this.title;
    }

    constructor(coursesService: CoursesService) {
        // let angular create a new instance instead of manually doing that
        // this will help in doing unit tests easily by creating a mock courseservice
        // instead of doing a http request which is dependent on the server

        // const coursesService = new CoursesService();
        this.courses = coursesService.getCourses();
    }
}
