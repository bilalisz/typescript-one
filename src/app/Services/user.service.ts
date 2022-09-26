import { EventEmitter } from "@angular/core"


interface User{
    name:string,
    job:string,
    gender:string,
    country:string,
    age:number,
    avatar:string
  
  }
export class UserService{

  private  users=[
        {name:"Bilal",job:"Developer",gender:"male",country:"pakistan",age:27,avatar:"assets/avatar/dev.jpg"},
        {name:"Haidar",job:"Developer",gender:"male",country:"pakistan",age:27,avatar:"assets/avatar/dev.jpg"},
        {name:"Luqman",job:"Developer",gender:"male",country:"pakistan",age:27,avatar:"assets/avatar/dev.jpg"},
        {name:"Usman",job:"Developer",gender:"male",country:"pakistan",age:27,avatar:"assets/avatar/dev.jpg"},
    ]
    onShowDetailClicked= new EventEmitter<User>()
    

    getAllUsers(){
       return this.users
    }

    showUserDetail(user:User){
       this.onShowDetailClicked.emit(user)
    }
}