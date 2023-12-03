import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private _picks:string[] = [];
  constructor() {
  }

  public get picks():string[]{
    return this._picks;
  }

  public setPicks(arr:string[]):void{
    this._picks = arr;
  }

}
