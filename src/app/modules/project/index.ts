import {ProjectComponent} from "./project/project.component";
import { ProjectSideNavComponent } from './components/project-side-nav/project-side-nav.component';
import {ProjectSwitchComponent} from "./components/project-switch/project-switch.component";


export const components:any[]=[
  ProjectComponent,
  ProjectSideNavComponent,
  ProjectSwitchComponent
]

export * from "./project/project.component";
export * from './components/project-side-nav/project-side-nav.component';
export * from "./components/project-switch/project-switch.component";
