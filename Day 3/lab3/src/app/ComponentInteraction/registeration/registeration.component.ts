import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent {
  username = "";
  age = "";
  Student ={
    name: '',
    age: ''
  }
  @Output() myEvent = new EventEmitter();
  sendData() {
    const newStudent = {
      name: this.username,
      age: this.age
    };
    if (+newStudent.age > 20 && +newStudent.age < 40) {
      if (newStudent.name.length >= 3) {
        this.myEvent.emit(newStudent);
      }
    }


  }
}
