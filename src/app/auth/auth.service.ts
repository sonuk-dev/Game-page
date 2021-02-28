import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

    return this.http.post(environment.apiUrl + '/auth/login', {
      email: email,
      password: password
    });
  }
  
  logout() {
    localStorage.clear();
  }

  addUser(user) {
    console.log(user)
    return this.http.post(environment.apiUrl + '/auth/registration', user)
  }

}
