import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StudentsComponent } from './students/students.component';
import { ErrorComponent } from './error/error.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { FooterComponent } from './footer/footer.component';
import { StudentsDetailsComponent } from './students-details/students-details.component';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StudentsComponent,
    ErrorComponent,
    RegisterationComponent,
    FooterComponent,
    StudentsDetailsComponent,



  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
