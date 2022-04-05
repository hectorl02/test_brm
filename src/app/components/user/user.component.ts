import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';


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
  }

  addUser(form: NgForm) {
    if (form.value._id) {
      let ind = parseInt(form.value._id) - 1
      this.userService.deleteUser(ind.toString())
      this.userService.createUser(form.value)
      this.getUsers();
      form.reset();
      Swal.fire({ title: "El registro ha sido actualizado.", showConfirmButton: false, icon: 'success', timer: 1500 });

    } else {
      this.userService.createUser(form.value)
      this.getUsers();
      form.reset();
      Swal.fire({ title: "El registro ha sido creado.", showConfirmButton: false, icon: 'success', timer: 1500 });

    }
  }

  editUser(user: any) {
    this.userService.userSelected = user;
  }

  deleteUser(id: string, form: NgForm) {
    Swal.fire({
      title: 'Estas seguro?', text: "No podrás revertir esto!", icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, borralo!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({ title: 'El registro ha sido eliminado.', showConfirmButton: false, icon: 'success', timer: 1500 })
        this.userService.deleteUser(id)
      }
    })

  }

}
