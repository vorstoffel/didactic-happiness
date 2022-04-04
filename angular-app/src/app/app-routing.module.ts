import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';

const routes: Routes = [
  {
    path: "",
    component: CoursesComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "courses",
    component: CoursesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
