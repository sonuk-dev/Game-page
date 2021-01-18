import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment";
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
    'Accept': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  })
};
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  getAllUsers() {
    return this.http.get(environment.apiUrl + `/users`, httpOptions)
  }
  getTopUsersPerPage(skip, limit) {
    return this.http.get(environment.apiUrl + `/users/topScores?skip=${skip}&limit=${limit}`, httpOptions);
  }
}
