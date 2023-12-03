import {Component, OnInit} from '@angular/core';
import {Foods} from "../../../utils/Foods";

@Component({
  selector: 'app-game-foods',
  templateUrl: './game-foods.component.html',
  styleUrls: ['./game-foods.component.css']
})
export class GameFoodsComponent implements OnInit{

  foods :string[] = [];

  constructor() {
  }



  generateFoods(){
    for(let i = 0; i < 10; i++){
      this.foods.push(Foods.food)
    }

  }

  reduceByOne(){
    this.foods.shift()
    this.foods.push(Foods.no_food)
  }

  ngOnInit(): void {
    this.generateFoods()
  }

}
