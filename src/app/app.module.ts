import { HttpClientModule } from '@angular/common/http'
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { SummaryPipe } from './summary.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';
import { MtestComponent } from './mtest/mtest.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignuoFormComponent } from './signuo-form/signuo-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
// import { PostsComponent } from './posts/posts.component';
// import { PostService } from './services/post.service';
import { AppErrorHandler } from './common/app-error-handler';
// import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    FavoriteComponent,
    CourseComponent,
    CoursesComponent,
    SummaryPipe,
    PanelComponent,
    MtestComponent,
    InputFormatDirective,
    ContactFormComponent,
    SignuoFormComponent,
    NewCourseFormComponent,
    // PostsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    CoursesService,
    // PostService,
    // DataService,
    {provide: ErrorHandler, useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
