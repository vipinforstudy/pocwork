import { Component, OnInit } from '@angular/core';
import { UserResource } from '../resource/userResource';
import { ControllerService } from '../services/user/controller.service';

@Component({
  selector: 'app-resource-management',
  templateUrl: './resource-management.component.html',
  styleUrls: ['./resource-management.component.css']
})
export class ResourceManagementComponent implements OnInit {
  userId : string = ""
  userName : string = ""
  userAddress : string = ""
  userEmail : string = ""
  users: UserResource[] = []
  user : UserResource = {id :  "", name : "", address : "", email : ""}; 
  selectedUser?: UserResource
  
  constructor(private service : ControllerService) { }

  ngOnInit(): void {
  }

  onSelect(user: UserResource): void {
    this.selectedUser = user;
  }


  create() {
    this.user.id = this.userId
    this.user.name = this.userName
    this.user.address = this.userAddress
    this.user.email = this.userEmail

    this.service.post(this.user).subscribe({
      next:  (response) => console.log(response),
      error: (err) => console.log('error', err)
    })
  }

  update() {
    this.user.id = this.userId
    this.user.name = this.userName
    this.user.address = this.userAddress
    this.user.email = this.userEmail

    this.service.update(this.user.name, this.user)
  }

  search() {
    if (this.userName == "") {
      this.service.getAllUsers().subscribe({
        next:  (allUsers) => this.users = allUsers,
        error: (err) => console.log('error', err)
      })
    } else {
      this.service.getUserByName(this.userName).subscribe({
        next:  (allUsers) => this.users = allUsers,
        error: (err) => console.log('error', err)
      })
    }
  }
}
