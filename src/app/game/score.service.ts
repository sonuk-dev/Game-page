import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment";
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    Authorization: `Bearer ${localStorage.getItem('token')}`
  })
};
@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  constructor(private http: HttpClient) { }
  currentScore = 0;
  game_over = false;
  gameStarted = false;
  changeBestScore(bestScore) {
    return this.http.put(environment.apiUrl + '/user/changeBestScore', {
      _id: JSON.parse(localStorage.getItem('currentUser'))._id,
      bestScore
    }, httpOptions);
  }
  addGame(currentScore) {
    this.http.post(environment.apiUrl + '/games/addGame', {
      userId: JSON.parse(localStorage.getItem('currentUser'))._id,
      date: Date.now(),
      score: currentScore
    }, httpOptions).subscribe(
      (res) => console.log(res)
    );
  }
}
