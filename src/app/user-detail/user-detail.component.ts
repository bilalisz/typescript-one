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
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor(private userService:UserService) { }
  user=<User>{}
  showDetail:boolean=false

  ngOnInit(): void {
    this.userService.onShowDetailClicked.subscribe((data:User)=>{
      if(data){
        this.user=data
        this.showDetail=true
      }

    })
  }

}
