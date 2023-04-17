import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterationComponent } from './registeration/registeration.component';
import { StudentsComponent } from './students/students.component';
import { StudentsDetailsComponent } from './students-details/students-details.component';
import { ErrorComponent } from './error/error.component';


const routes: Routes = [
  {'path':'', component: RegisterationComponent },
  {'path':'students', component: StudentsComponent},
  {'path':'students/:id', component: StudentsDetailsComponent},
  {'path':'**', component: ErrorComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
