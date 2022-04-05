import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userSelected : User = {
    _id: '',
    name: '',
    phone: '',
    address: '',
    email: '',
    birth_date: ''
  };
  userList: User[] = [];

  constructor(
    private http: HttpClient
  ) { }

  getUsers(){
    return this.userList;    
  }
  
  createUser (user:any) {
    this.userList.push(user)
  }

  editUser (user:any){

  }

  deleteEmpleado(_id:String){
    this.userList.pop()
  
  }



 

}
