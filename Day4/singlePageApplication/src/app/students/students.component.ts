import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  Students: { name: string, age: number }[] = [{
    name: 'radwa',
    age: 35
  },
    {
      name: 'rima',
      age: 30
  },
  {
    name: 'jayda',
    age: 32
    }
    ,
    {
      name: 'miriam',
      age: 35
  }];


}
