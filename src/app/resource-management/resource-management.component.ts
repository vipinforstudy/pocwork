import { Component, OnInit } from '@angular/core';
import { UserResource } from '../resource/userResource';

@Component({
  selector: 'app-resource-management',
  templateUrl: './resource-management.component.html',
  styleUrls: ['./resource-management.component.css']
})
export class ResourceManagementComponent implements OnInit {
  userId : String = ""
  name : String = ""
  address : String = ""
  email : String = ""

  user!: UserResource; 

  
  constructor() { }

  ngOnInit(): void {
  }

  create() {
    this.user.id = this.userId

    console.log("Im here ...")
  }

}
