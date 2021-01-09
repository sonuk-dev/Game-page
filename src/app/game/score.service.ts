import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  constructor() { }
  currentScore = 0;
  game_over = false;
  gameStarted = false;
}
