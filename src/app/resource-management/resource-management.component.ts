import { Component, OnInit } from '@angular/core';
import { UserResource } from '../resource/userResource';
import { ControllerService } from '../services/user/controller.service';

@Component({
  selector: 'app-resource-management',
  templateUrl: './resource-management.component.html',
  styleUrls: ['./resource-management.component.css']
})
export class ResourceManagementComponent implements OnInit {
  userId : String = ""
  userName : String = ""
  userAddress : String = ""
  userEmail : String = ""

  user : UserResource = {id : "", name : "", address : "", email : ""}; 
  
  constructor(private service : ControllerService) { }

  ngOnInit(): void {
  }

  create() {
    this.user.id = this.userId
    this.user.name = this.userName
    this.user.address = this.userAddress
    this.user.email = this.userEmail

    this.service.post(this.user)
  }

}
