import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';

interface User{
  name:string,
  job:string,
  gender:string,
  country:string,
  age:number,
  avatar:string

}


@Component({
  selector: 'app-alluser',
  templateUrl: './alluser.component.html',
  styleUrls: ['./alluser.component.css']
})


export class AlluserComponent implements OnInit {
  

  constructor(private userService:UserService) { }
  users:User[]=[]

  ngOnInit(): void {
    this.users=this.userService.getAllUsers()
  }
  showDetail(user:User){
    this.userService.showUserDetail(user)
  }

}
