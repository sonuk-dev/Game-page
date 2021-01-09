import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators'
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  err = false;

  isLoggedIn() {
    if (localStorage.getItem('currentUser'))
      return true;

    return false;
  }

  login(email, password) {
    console.log('service', email, password)

    return this.http.post(environment.apiUrl + '/users/login', {
      email: email,
      password: password
    });
  }
  
  logout() {
    localStorage.removeItem('currentUser');
  }

  addUser(user) {
    console.log(user)
    return this.http.post(environment.apiUrl + '/registration', user)
  }

  getUser() {
    return this.http.get(environment.apiUrl + '/users/userslist')
  }
}
