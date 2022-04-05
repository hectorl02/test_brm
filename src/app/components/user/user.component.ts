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
    this.userService.createUser(form.value)
    this.getUsers();
    form.reset();

  }

  editUser (user:any){

  }

  deleteUser(id:String, form:NgForm){

  }



}
