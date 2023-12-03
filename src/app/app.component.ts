import { Component } from '@angular/core';
import {GameServiceService} from "./modules/hello/game-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio-software-engineer';

  constructor(private gameService:GameServiceService) {
  }

  handleEnter(str:"up"):void{
    this.gameService.handleKeyCustomKeys(str);
  }
}
