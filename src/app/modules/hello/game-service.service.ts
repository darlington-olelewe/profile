import { Injectable } from '@angular/core';
import { Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GameServiceService {
  directionSubject = new Subject<string>()
  directionChange$ = this.directionSubject.asObservable();


  handleKeyDown(event: KeyboardEvent):void{
    switch (event.key) {
      case 'ArrowUp':
        this.directionSubject.next('up');
        break;
      case 'ArrowDown':
        this.directionSubject.next('down');
        break;
      case 'ArrowLeft':
        this.directionSubject.next('left');
        break;
      case 'ArrowRight':
        this.directionSubject.next('right');
        break;
    }
  }

  handleKeyCustomKeys(key:"up"|"down"|"left"|"right"):void{
    switch (key) {
      case 'up':
        this.directionSubject.next('up');
        break;
      case 'down':
        this.directionSubject.next('down');
        break;
      case 'left':
        this.directionSubject.next('left');
        break;
      case 'right':
        this.directionSubject.next('right');
        break;
    }
  }

}
