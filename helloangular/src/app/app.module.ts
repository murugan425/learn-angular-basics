import { AuthorsService } from './authors/authors.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from './course/courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './course/courses.service';
import { AuthorsComponent } from './authors/authors.component';
import { DisplayComponent } from './display/display.component';
import { PropertybindComponent } from './display/propertybind/propertybind.component';
import { AttributebindComponent } from './display/attributebind/attributebind.component';
import { ClassbindComponent } from './display/classbind/classbind.component';
import { StylebindComponent } from './display/stylebind/stylebind.component';
import { EventbindComponent } from './event/src/app/event/eventbind/eventbind.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorsComponent,
    DisplayComponent,
    PropertybindComponent,
    AttributebindComponent,
    ClassbindComponent,
    StylebindComponent,
    EventbindComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CoursesService,
    AuthorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
