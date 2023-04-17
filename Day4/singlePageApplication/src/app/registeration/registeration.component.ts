import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent {
  // username = "";
  // age = "";
  // Student ={
  //   name: '',
  //   age: ''
  // }
  // @Output() myEvent = new EventEmitter();
  // sendData() {
  //   const newStudent = {
  //     name: this.username,
  //     age: this.age
  //   };
  //   if (+newStudent.age > 20 && +newStudent.age < 40) {
  //     if (newStudent.name.length >= 3) {
  //       this.myEvent.emit(newStudent);
  //     }
  //   }


  // }
  validationForm = new FormGroup({
    name:new FormControl(null,Validators.minLength(3)),
    age: new FormControl(null, [Validators.min(20), Validators.max(40)]),
    email: new FormControl(null,Validators.email)
  })

  get AgeValid(){
    return this.validationForm.controls["age"].valid;
  }
  get NameValid(){
    return this.validationForm.controls["name"].valid ;
  }
  get EmailValid(){
    return this.validationForm.controls["email"].valid;
  }
  hasNameValue() {
    return this.validationForm.controls["name"].value;
  }

  Add(){

    if(this.validationForm.valid){
      alert("Data submitted successfully!!");
    }
    else {
      alert("Please Correct your data!!");
    }
  }
}
