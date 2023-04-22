import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private readonly myClient:HttpClient) { }
  //URL     http://localhost:3000/users
  // private readonly Base_URL = "https://jsonplaceholder.typicode.com/users";
  private readonly Base_URL = "http://localhost:3000/students";
  //Methods [All Requests]
  GetAllUsers(){
    //method[Get-Delete-Put-Patch]
    return this.myClient.get(this.Base_URL);
  }
  GetUserByID(id:any){
    return this.myClient.get(this.Base_URL+"/"+id);
  }
  AddNewUser(newUser:any){
    return this.myClient.post(this.Base_URL, newUser);
  }
}
