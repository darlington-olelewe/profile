import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProjectRoutingModule} from "./project-routing.module";
import {components} from "./index";
import { ProjectItemsComponent } from './components/project-items/project-items.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { ViewProjectComponent } from './components/view-project/view-project.component';



@NgModule({
  declarations: [
    ...components,
    ProjectItemsComponent,
    ProjectCardComponent,
    ViewProjectComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule
  ]
})
export class ProjectModule { }
