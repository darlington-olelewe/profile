import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelloRoutingModule } from './hello-routing.module';
import {components} from "./index";
import { GameFoodsComponent } from './game-foods/game-foods.component';
import { GameControlsComponent } from './game-controls/game-controls.component';
import { GameDashboardComponent } from './game-dashboard/game-dashboard.component';
import { GameArrowComponent } from './game-arrow/game-arrow.component';


@NgModule({
  declarations: [
    ...components,
    GameFoodsComponent,
    GameControlsComponent,
    GameDashboardComponent,
    GameArrowComponent
  ],
  imports: [
    CommonModule,
    HelloRoutingModule
  ]
})
export class HelloModule { }
