import {Component, Input} from "@angular/core";
import {ProjectMiniType} from "../../../Models/ProjectMiniType";

@Component({
  selector: "app-project-switch",
  templateUrl: "./project-switch.component.html",
  styleUrls:["./project-switch.component.css"]
})
export class ProjectSwitchComponent{
  @Input("check") check !: ProjectMiniType;
}
