import {Component, OnInit} from '@angular/core';
import {ProjectMiniType} from "../../../Models/ProjectMiniType";
import {LanguageEnum} from "../../../Models/LanguageEnum";
import {Icons} from "../../../../utils/Icons";
import {ProjectService} from "../../../../services/project.service";

@Component({
  selector: 'app-project-side-nav',
  templateUrl: './project-side-nav.component.html',
  styleUrls: ['./project-side-nav.component.css']
})
export class ProjectSideNavComponent implements OnInit{
  show : boolean = true;
  checks !:ProjectMiniType[];

  constructor(private projectService:ProjectService) {
    this.checks = [
      {index:0,type:LanguageEnum.JAVA, checked: false, icon: Icons["java"], name: "Java"},
      {index:1,type:LanguageEnum.JAVASCRIPT, checked: false, icon: Icons["javascript"], name: "Javascript"},
      {index:2,type:LanguageEnum.REACT, checked: false, icon: Icons["react"], name: "React"},
      {index:3,type:LanguageEnum.HTML, checked: true, icon: Icons["html"], name: "HTML"},
      {index:4,type:LanguageEnum.CSS, checked: false, icon: Icons["css"], name: "CSS"},
      {index:5,type:LanguageEnum.VUE, checked: false, icon: Icons["vue"], name: "Vue"},
      {index:6,type:LanguageEnum.ANGULAR, checked: false, icon: Icons["angular"], name: "Angular"},
      {index:7,type:LanguageEnum.GATSBY, checked: false, icon: Icons["gatsby"], name: "Gatsby"},
      {index:8,type:LanguageEnum.FLUTTER, checked: false, icon: Icons["flutter"], name: "Flutter"},
    ]
  }

  unselectAtIndex(index: number):void{
    for(let i = 0; i < this.checks.length; i++){
      if(this.checks[i].index == index){
        this.checks[i].checked = !this.checks[i].checked;
      }
    }

    this.getAllStringChecked()
  }

  toggleShow():void{
    this.show = !this.show
  }

  ngOnInit(): void {
  }


  getAllStringChecked():void{
    let allChecked = this.checks.filter(each => each.checked).map(e => e.name)



    this.projectService.setPicks(allChecked);
  }
}
