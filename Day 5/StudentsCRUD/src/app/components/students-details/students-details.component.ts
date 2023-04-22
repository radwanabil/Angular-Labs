import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-students-details',
  templateUrl: './students-details.component.html',
  styleUrls: ['./students-details.component.css']
})
export class StudentsDetailsComponent implements OnInit {
  ID:any;
  Student:any;
  constructor(myRoute:ActivatedRoute,public myService: DataService){
    this.ID = myRoute.snapshot.params["id"];
  }
  ngOnInit(): void {
    this.myService.GetUserByID(this.ID).subscribe(
      {
        next:(data)=>{
          this.Student = data;
        },
        error:(err)=>{console.log(err)}
      }
    );
  }

}
