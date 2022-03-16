import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddResourceComponent } from './CubeAppPages/add-resource/add-resource.component';
import { DeleteResourceComponent } from './CubeAppPages/delete-resource/delete-resource.component';
import { UpdateResourceComponent } from './CubeAppPages/update-resource/update-resource.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SearchResourceComponent } from './search-resource/search-resource.component';
import { ServicesComponent } from './services/services.component';


const routes: Routes = [

{path:'home',component:HomeComponent},
{path:'services',component:ServicesComponent},
{path:'Addresourcemanagement',component:AddResourceComponent},
{path:'Deleteresourcemanagement',component:DeleteResourceComponent},
{path:'Updateresourcemanagement',component:UpdateResourceComponent},
{path:'searchresource',component:SearchResourceComponent},
{path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
