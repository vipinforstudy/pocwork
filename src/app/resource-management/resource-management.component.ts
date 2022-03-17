import { Component, OnInit } from '@angular/core';
import { UserResource } from '../resource/userResource';

@Component({
  selector: 'app-resource-management',
  templateUrl: './resource-management.component.html',
  styleUrls: ['./resource-management.component.css']
})
export class ResourceManagementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  create(user : String) {
    console.log("Im here ...")
  }

}
