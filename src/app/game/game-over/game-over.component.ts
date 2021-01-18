import { Component, OnInit } from '@angular/core';
import { ScoreService } from "../score.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-game-over',
  templateUrl: './game-over.component.html',
  styleUrls: ['./game-over.component.css', '../start/start.component.scss']
})
export class GameOverComponent implements OnInit {
  user: any
  userBestScore: any;
  constructor(private scoreService: ScoreService, private router: Router) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('currentUser')); //////--------------service
    this.userBestScore = this.user.bestScore;
  }
  get currentScore() {
    return this.scoreService.currentScore;
  }
  set currentScore(value) {
    this.scoreService.currentScore = value;
  }
  set game_over(value) {
    this.scoreService.game_over = value;
  }
  playAgain() {
    this.game_over = false;
    this.currentScore = 0;
    this.router.navigate(['/game/snakegame'])
  }
}
