import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
const rotes: Routes = [
  {
    path:"hello",
    loadChildren:()=>
      import("./modules/hello/hello.module").then((m)=>m.HelloModule)
  },
  {
    path:"",
    redirectTo: "hello",
    pathMatch: "full"
  },
  {
    path:"about-me",
    loadChildren:() => import("./modules/about-me/about-me.module").then((m)=>m.AboutMeModule)
  },
  {
    path:"project",
    loadChildren:() => import("./modules/project/project.module").then((m)=>m.ProjectModule)
  }
]
@NgModule({
  imports:[
  RouterModule.forRoot(rotes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule{}
