import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SnakeComponent } from "./snake/snake.component";
import { StartComponent } from "./start/start.component"
import { GameOverComponent } from "./game-over/game-over.component";
import { GameGuard } from "./game.guard";
import { StartGuard } from './start.guard';
const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'snakegame', component: SnakeComponent,  canActivate: [StartGuard] },
  { path: 'game-over', component: GameOverComponent, canActivate: [GameGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
