import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment";
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  })
};
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  getCurrentUser() {
    return JSON.parse(localStorage.getItem('currentUser'));
  }
  updateUser(user) {
    return this.http.put(environment.apiUrl + '/user/update', user, httpOptions)
  }
}
