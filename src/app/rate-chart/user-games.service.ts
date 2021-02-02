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
export class UserGamesService {

  constructor(private http: HttpClient) { }
  getUserGames(id) {
    return this.http.get(environment.apiUrl + '/games/getUserGames/' + id, httpOptions)
  }
  getUserRates(userGames) {
    let score = [],
        date = [];
    for (let i = 0; i < userGames.length; i++) {
      score[i] = userGames[i].score;
      date[i] = '';
    }
    return { score, date }
  }
}
