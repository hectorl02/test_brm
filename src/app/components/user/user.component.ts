import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  filterData = '';

  userList: User[] = [];
  constructor(
    public userService: UserService,
  ) {

  }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers() {
    this.userList = this.userService.getUsers()
    console.log(this.userList)
  }

  addUser(form: NgForm) {
    if(form.value._id ){
      let ind = parseInt(form.value._id) - 1
      this.userService.deleteUser(ind.toString())
      this.userService.createUser(form.value)
      this.getUsers();
      form.reset();
    } else {
      this.userService.createUser(form.value)
      this.getUsers();
      form.reset();
    }      
  }

  editUser (user:any){
    console.log(user)
    this.userService.userSelected = user;
  }

  deleteUser(id:string, form:NgForm){
    console.log(id)
    this.userService.deleteUser(id)
  }

}
