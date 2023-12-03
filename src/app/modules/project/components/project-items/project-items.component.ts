import {Component, OnInit} from '@angular/core';
import {ProjectService} from "../../../../services/project.service";
import {Data} from "../../../../services/Data";
import {ProjectFullType} from "../../../Models/ProjectFullType";

@Component({
  selector: 'app-project-items',
  templateUrl: './project-items.component.html',
  styleUrls: ['./project-items.component.css']
})
export class ProjectItemsComponent implements OnInit{
  myPicks !: string[]
  projects :ProjectFullType[] = Data;
  constructor(private projectService:ProjectService) {
  }

  ngOnInit(): void {
    this.myPicks = this.projectService.picks
  }

  getPicks(){
    return this.projectService.picks;
  }
}
