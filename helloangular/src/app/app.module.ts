import { AuthorsService } from './authors/authors.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
import { EventComponent } from './event/event.component';
import { EventbindComponent } from './event/eventbind/eventbind.component';
import { EventfilterComponent } from './event/eventfilter/eventfilter.component';
import { VariablebindComponent } from './event/variablebind/variablebind.component';
import { PipesComponent } from './pipes/pipes.component';

import { SummaryPipe } from './pipes/summary.pipe';
import { FavoriteComponent } from './display/favorite/favorite.component';
import { TitlecaseComponent } from './pipes/titlecase/titlecase.component';
import { IobindComponent } from './iobind/iobind.component';
import { FavoriteStarComponent } from './iobind/favoritestar/favoritestar.component';
import { PanelComponent } from './iobind/panel/panel.component';
import { LikeComponent } from './iobind/like/like.component';
import { DirectiveComponent } from './directive/directive.component';
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
    EventbindComponent,
    EventComponent,
    EventfilterComponent,
    VariablebindComponent,
    PipesComponent,
    SummaryPipe,
    FavoriteComponent,
    TitlecaseComponent,
    IobindComponent,
    FavoriteStarComponent,
    PanelComponent,
    LikeComponent,
    DirectiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    CoursesService,
    AuthorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
