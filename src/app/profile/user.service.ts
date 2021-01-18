import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  getCurrentUser() {
    return JSON.parse(localStorage.getItem('currentUser'));
  }
  updateUser(user) {
    console.log(user)
    return this.http.put(environment.apiUrl + '/user/update', user)
  }
}
