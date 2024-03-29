import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { StartComponent } from './start/start.component';
import { SnakeComponent } from './snake/snake.component';
import { GameOverComponent } from './game-over/game-over.component';

@NgModule({
  declarations: [StartComponent, SnakeComponent, GameOverComponent],
  imports: [
    CommonModule,
    GameRoutingModule
  ]
})
export class GameModule { }
