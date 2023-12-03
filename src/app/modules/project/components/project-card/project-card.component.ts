import {Component, Input} from '@angular/core';
import {ProjectFullType} from "../../../Models/ProjectFullType";

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
    @Input("index") index !:number;
    @Input("card") card !:ProjectFullType;
}
