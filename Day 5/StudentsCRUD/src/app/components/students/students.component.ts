import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  Students:any;
  constructor(public myService:DataService){

  }
  ngOnInit(): void {
    this.myService.GetAllUsers().subscribe(
      {
        next:(data)=>{
          //console.log(data)
          this.Students = data;
        },
        error:(err)=>{console.log(err)}
      }
    )
  }
}
