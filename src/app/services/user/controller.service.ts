import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserResource } from '../../resource/userResource'
import { HttpHeaders } from '@angular/common/http';

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

  getUserByName(name : String): Observable<UserResource[]> {
    return this.httpClient.get<UserResource[]>(this.userUrl + '/users/' + name)
  }

  update(name : String, user : UserResource) {
    this.httpClient.put(this.userUrl + '/users/' + name, user)
  }

  post(user : UserResource) : Observable<any> {
    const headers = new HttpHeaders()
      .set('content-type', 'application/vnd.spring-template.user.v1+json')
      .set('accept', 'application/vnd.spring-template.user.v1+json')
      .set('Access-Control-Allow-Origin', '*');

    return this.httpClient.post(this.userUrl + '/users', user, {headers})
  }

  delete(name : String) {
    this.httpClient.delete(this.userUrl + '/users' + name) 
  }
}