import { Component } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ResourceManagementComponent } from './resource-management/resource-management.component';
import { SearchResourceComponent } from './search-resource/search-resource.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CubeApp';

  constructor(private dialog: MatDialog) {
}

openDialog(componentname:String) {
  if (componentname == "searchresult" )
  {
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




//   this.dialog.open(ResourceManagementComponent, {
//    width:'30%'
//   });

// // openDialog() {
//     this.dialog.open(ResourceManagementComponent, {
//      width:'20%'
//   });
  
}
}