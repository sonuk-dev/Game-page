import { Component, OnInit } from '@angular/core';
import { ScoreService } from "../score.service";

@Component({
  selector: 'app-game-over',
  templateUrl: './game-over.component.html',
  styleUrls: ['./game-over.component.css', '../start/start.component.scss']
})
export class GameOverComponent implements OnInit {

  constructor(private scoreService: ScoreService) { }

  ngOnInit(): void {
  }

  get currentScore() {
    return this.scoreService.currentScore;
  }

}
