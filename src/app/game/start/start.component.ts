import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScoreService } from "../score.service";

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
  constructor(private router: Router, private scoreService: ScoreService) { }
  get gameStarted() {
    return this.scoreService.gameStarted;
  }
  set gameStarted(value) {
    this.scoreService.gameStarted = value;
  }
  ngOnInit(): void { }

  startGame(): void {
    this.gameStarted = true;
    this.router.navigate(['/game/snakegame']);
  }
}
