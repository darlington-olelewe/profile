import {Component, OnDestroy, OnInit} from '@angular/core';
import {GameEnums} from "../../Models/GameEnums";
import {GameServiceService} from "../game-service.service";
import {DirectionEnum} from "../../Models/DirectionEnum";

@Component({
  selector: 'app-game-dashboard',
  templateUrl: './game-dashboard.component.html',
  styleUrls: ['./game-dashboard.component.css']
})
export class GameDashboardComponent implements OnInit, OnDestroy{
  gameMode:GameEnums = GameEnums.START;
  direction:DirectionEnum = DirectionEnum.UP;

  gridSize = 20;
  cellSize = 20;
  snake: { x: number; y: number }[] = [];
  food: { x: number; y: number } = { x: 10, y: 10 };

  constructor(private gameService:GameServiceService) {
    this.gameService.directionChange$.subscribe(direction=>{
      this.direction = this.getDirEnum(direction);
    })
    this.resetGame()
  }
  resetGame(): void {
    this.snake = [{ x: 5, y: 5 }];
    this.spawnFood();
  }

  spawnFood(): void {
    this.food = {
      x: Math.floor(Math.random() * this.gridSize),
      y: Math.floor(Math.random() * this.gridSize),
    };
  }

  ngOnDestroy(): void {

  }

  intervalId: any;

  ngOnInit(): void {
    // Set up an interval to update the counter every second
    this.intervalId = setInterval(() => {
      this.move()
    }, 500);
  }

  getDirEnum(str: "up"|"down"|"left"|"right"|any):DirectionEnum{
    switch (str) {
      case "up":
        return DirectionEnum.UP;
      case "down":
        return DirectionEnum.DOWN;
      case "left":
        return DirectionEnum.LEFT;
      case "right":
        return DirectionEnum.RIGHT;
      default:
        return DirectionEnum.UP;
    }
  }

  move(): void {
    const head = { ...this.snake[0] };

    switch (this.direction) {
      case DirectionEnum.UP:
        head.y = (head.y - 1 + this.gridSize) % this.gridSize;
        break;
      case DirectionEnum.DOWN:
        head.y = (head.y + 1) % this.gridSize;
        break;
      case DirectionEnum.LEFT:
        head.x = (head.x - 1 + this.gridSize) % this.gridSize;
        break;
      case DirectionEnum.RIGHT:
        head.x = (head.x + 1) % this.gridSize;
        break;
    }

    this.snake.unshift(head);

    if (head.x === this.food.x && head.y === this.food.y) {
      // Snake ate the food
      this.spawnFood();
    } else {
      // Remove the last segment if the snake didn't eat
      this.snake.pop();
    }
  }


}

