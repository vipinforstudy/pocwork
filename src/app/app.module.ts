import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HeaderComponent } from './header/header.component';
import { AddResourceComponent } from './CubeAppPages/add-resource/add-resource.component';
import { UpdateResourceComponent } from './CubeAppPages/update-resource/update-resource.component';
import { DeleteResourceComponent } from './CubeAppPages/delete-resource/delete-resource.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { SearchResourceComponent } from './search-resource/search-resource.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule,} from '@angular/material/datepicker';
import {MatNativeDateModule,} from '@angular/material/core';
import { ResourceManagementComponent } from './resource-management/resource-management.component';
import {MatRadioModule} from '@angular/material/radio';


 @NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddResourceComponent,
    UpdateResourceComponent,
    DeleteResourceComponent,
    LoginComponent,
    HomeComponent,
    ServicesComponent,
    SearchResourceComponent,
    ResourceManagementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
