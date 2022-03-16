import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserResource } from '../../resource/userResource'

@Injectable({
  providedIn: 'root'
})
export class ControllerService {
  private userUrl = 'http://localhost:8080/api'

  // constructor() { }
  constructor(private httpClient: HttpClient) { }
  
  getAllUsers(): Observable<UserResource[]> {
    return this.httpClient.get<UserResource[]>(this.userUrl + '/users')
  }
}