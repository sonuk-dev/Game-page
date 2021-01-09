import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment";

export interface User {
  _id:string;
  nickname: string;
  email: string;
  password: string;
  rate: number;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getTopUsers(skip, limit) {
    return this.http.get(environment.apiUrl +'/users/topScores?skip='+skip+'&limit='+limit);
  }
}
