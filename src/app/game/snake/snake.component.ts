import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ScoreService } from "../score.service";

@Component({
  selector: 'app-snake',
  templateUrl: './snake.component.html',
  styleUrls: ['./snake.component.css', '../start/start.component.scss']
})
export class SnakeComponent implements OnInit {

  constructor(private router: Router, private scoreService: ScoreService) { }

  board_border = 'black';
  board_background = "white";
  snake_col = 'lightblue';
  snake_border = 'darkblue';
  // Snake and Food size
  elementSize = 20;

  snake = [
    { x: 200, y: 200 },
    { x: 190, y: 200 },
    { x: 180, y: 200 },
    { x: 170, y: 200 },
    { x: 160, y: 200 }
  ]
  get snakeSpeed() {
    return this.currentScore > 160 ? 100 : 270 - this.currentScore;
  }
  get game_over() {
    return this.scoreService.game_over;
  }

  set game_over(value) {
    this.scoreService.game_over = value;
  }

  get currentScore() {
    return this.scoreService.currentScore;
  }

  set currentScore(value) {
    this.scoreService.currentScore = value;
  }
  // True if changing direction
  directionChanged = false;
  // Horizontal velocity
  food_x;
  food_y;
  dx = this.elementSize;
  // Vertical velocity
  dy = 0;
  snakeboard = document.createElement('canvas');
  // Return a two dimensional drawing context
  snakeboard_ctx = this.snakeboard.getContext("2d");

  ngOnInit(): void {
    this.snakeboard.width = 500;
    this.snakeboard.height = 500;
    document.querySelector('#snakeboard').appendChild(this.snakeboard)
    document.addEventListener("keydown", (event) => {
      this.change_direction(event)
    });

    // Start game
    // main function called repeatedly to keep the game running
    this.main();

    this.gen_food();
  }

  main() {
    this.has_game_ended()
    if (this.game_over) return;

    this.directionChanged = false;
    setTimeout(() => {
      this.clear_board();
      this.drawFood();
      this.move_snake();
      this.drawSnake();
      // Repeat
      this.main();
    }, this.snakeSpeed)
  }

  // draw a border around the canvas
  clear_board() {
    //  Select the colour to fill the drawing
    this.snakeboard_ctx.fillStyle = this.board_background;
    //  Select the colour for the border of the canvas
    this.snakeboard_ctx.strokeStyle = this.board_border;
    // Draw a "filled" rectangle to cover the entire canvas
    this.snakeboard_ctx.fillRect(0, 0, this.snakeboard.width, this.snakeboard.height);
    // Draw a "border" around the entire canvas
    this.snakeboard_ctx.strokeRect(0, 0, this.snakeboard.width, this.snakeboard.height);
  }

  // Draw the snake on the canvas
  drawSnake() {
    // Draw each part
    this.snake.forEach((snakePart) => {
      this.drawSnakePart(snakePart)
    });

  }

  drawFood() {
    this.snakeboard_ctx.fillStyle = 'lightgreen';
    this.snakeboard_ctx.strokeStyle = 'darkgreen';
    this.snakeboard_ctx.fillRect(this.food_x, this.food_y, this.elementSize, this.elementSize);
    this.snakeboard_ctx.strokeRect(this.food_x, this.food_y, this.elementSize, this.elementSize);
  }

  // Draw one snake part
  drawSnakePart(snakePart) {
    // Set the colour of the snake part
    this.snakeboard_ctx.fillStyle = this.snake_col;
    // Set the border colour of the snake part
    this.snakeboard_ctx.strokeStyle = this.snake_border;
    // Draw a "filled" rectangle to represent the snake part at the coordinates
    // the part is located
    this.snakeboard_ctx.fillRect(snakePart.x, snakePart.y, this.elementSize, this.elementSize);
    // Draw a border around the snake part
    this.snakeboard_ctx.strokeRect(snakePart.x, snakePart.y, this.elementSize, this.elementSize);
  }

  has_game_ended() {
    for (let i = 4; i < this.snake.length; i++) {
      if (this.snake[i].x == this.snake[0].x && this.snake[i].y == this.snake[0].y) return true
    }
    const hitLeftWall = this.snake[0].x < 0;
    const hitRightWall = this.snake[0].x > this.snakeboard.width - this.elementSize;
    const hitToptWall = this.snake[0].y < 0;
    const hitBottomWall = this.snake[0].y > this.snakeboard.height - this.elementSize;
    if (hitLeftWall || hitRightWall || hitToptWall || hitBottomWall) {
      this.game_over = true;
      this.scoreService.addGame(this.currentScore);
      let user = JSON.parse(localStorage.getItem('currentUser'));
      if (this.currentScore > user.bestScore) {
        this.scoreService.changeBestScore(this.currentScore).subscribe(
          (res: any) => {
            localStorage.setItem('currentUser', JSON.stringify(res.user));
            localStorage.setItem('token', res.token);
            this.router.navigate(['/game/game-over'])
          }
        );
      } else
        this.router.navigate(['/game/game-over'])
    }
  }

  random_food(min, max) {
    return Math.round((Math.random() * (max - min) + min) / this.elementSize) * this.elementSize;
  }

  gen_food() {
    // Generate a random number the food x-coordinate
    this.food_x = this.random_food(0, this.snakeboard.width - this.elementSize);
    // Generate a random number for the food y-coordinate
    this.food_y = this.random_food(0, this.snakeboard.height - this.elementSize);
    // if the new food location is where the snake currently is, generate a new food location
    this.snake.forEach((part) => {
      const has_eaten = part.x == this.food_x && part.y == this.food_y;
      if (has_eaten) this.gen_food();
    });
  }

  change_direction(event) {

    const LEFT_KEY = 37;
    const RIGHT_KEY = 39;
    const UP_KEY = 38;
    const DOWN_KEY = 40;

    // Prevent the snake from reversing
    if (this.directionChanged) return;
    this.directionChanged = true;
    const keyPressed = event.keyCode;
    const goingUp = this.dy == -this.elementSize;
    const goingDown = this.dy == this.elementSize;
    const goingRight = this.dx == this.elementSize;
    const goingLeft = this.dx == -this.elementSize;

    switch (true) {
      case keyPressed == LEFT_KEY && !goingRight:
        this.dx = -this.elementSize;
        this.dy = 0;
        break;
      case keyPressed == UP_KEY && !goingDown:
        this.dx = 0;
        this.dy = -this.elementSize;
        break;
      case keyPressed == RIGHT_KEY && !goingLeft:
        this.dx = this.elementSize;
        this.dy = 0;
        break;
      case keyPressed == DOWN_KEY && !goingUp:
        this.dx = 0;
        this.dy = this.elementSize;
        break;
    }

  }

  move_snake() {
    // Create the new Snake's head
    const head = { x: this.snake[0].x + this.dx, y: this.snake[0].y + this.dy };
    // Add the new head to the beginning of snake body
    this.snake.unshift(head);
    const has_eaten_food = this.snake[0].x == this.food_x && this.snake[0].y == this.food_y;
    if (has_eaten_food) {
      // Increase score
      this.currentScore += 10;
      // Display score on screen
      document.getElementById('score').innerHTML = String(this.currentScore);
      // Generate new food location
      this.gen_food();
    } else {
      // Remove the last part of snake body
      this.snake.pop();
    }
  }
}



