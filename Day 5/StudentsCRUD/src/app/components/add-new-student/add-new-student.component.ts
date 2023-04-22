import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-add-new-student',
  templateUrl: './add-new-student.component.html',
  styleUrls: ['./add-new-student.component.css']
})
export class AddNewStudentComponent {
  constructor(private myService:DataService){  }
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

  Add(name:any,age:any, email:any, phone:any){

    if(this.validationForm.valid){
      alert("Data submitted successfully!!");
      let newUser = {name, age, email, phone};
      this.myService.AddNewUser(newUser).subscribe();
    }
    else {
      alert("Please Correct your data!!");
    }
  }
}



