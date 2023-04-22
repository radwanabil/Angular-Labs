import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './components/students/students.component';
import { ErrorComponent } from './components/error/error.component';
import { StudentsDetailsComponent } from './components/students-details/students-details.component';
import { AddNewStudentComponent } from './components/add-new-student/add-new-student.component';

const routes: Routes = [
  {'path':'', component: StudentsComponent },
  {'path':'students', component: StudentsComponent},
  { 'path': 'students/:id', component: StudentsDetailsComponent },
  {'path':'create', component: AddNewStudentComponent},
  {'path':'**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


