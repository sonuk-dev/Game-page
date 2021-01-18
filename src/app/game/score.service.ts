import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  constructor(private http: HttpClient) { }
  currentScore = 0;
  game_over = false;
  gameStarted = false;
  changeBestScore(id, bestScore) {
    return this.http.put(environment.apiUrl + '/user/changeBestScore', {
      _id: id,
      bestScore: bestScore
    });
  }
}
