import { Component } from '@angular/core';
import {Arrows} from "../../../utils/Arrows";
import {GameServiceService} from "../game-service.service";

@Component({
  selector: 'app-game-controls',
  templateUrl: './game-controls.component.html',
  styleUrls: ['./game-controls.component.css']
})
export class GameControlsComponent {
  arrows = Arrows;


  constructor(private gameService:GameServiceService) {
  }

  handleKeyDown(event: KeyboardEvent):void{
    this.gameService.handleKeyDown(event);
  }

  handleCustom(string:"up"|"left"|"right"|"down"):void{
    this.gameService.handleKeyCustomKeys(string);
  }
}
