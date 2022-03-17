import { Component } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ResourceManagementComponent } from './resource-management/resource-management.component';
import { UserResource } from './resource/userResource';
import { SearchResourceComponent } from './search-resource/search-resource.component';
import { ControllerService } from './services/user/controller.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CubeApp';
  users: UserResource[] = []

  constructor(private dialog: MatDialog, private controllerService : ControllerService) {}

  openDialog(componentname:String) {
    if (componentname == "searchresult" ) {
      this.controllerService.getAllUsers().subscribe({
        next:  (allUsers) => this.users = allUsers,
        error: (err) => console.log('error', err)
      })

      this.dialog.open(SearchResourceComponent, {
        width:'40%'
      });
    }

    else if (componentname== "resourcemanagement")
    {
      this.dialog.open(ResourceManagementComponent,{
        width:'50%'
      })
    }
  }
}