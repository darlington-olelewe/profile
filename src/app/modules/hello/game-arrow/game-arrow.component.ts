import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-game-arrow',
  templateUrl: './game-arrow.component.html',
  styleUrls: ['./game-arrow.component.css']
})
export class GameArrowComponent {
  @Input("arrow") arrow !:string;

}
