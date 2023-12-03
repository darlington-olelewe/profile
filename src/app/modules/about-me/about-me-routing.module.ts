import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from "./pages/main-page/main-page.component";
import {BioPageComponent} from "./pages/bio-page/bio-page.component";

const routes: Routes = [
  {
    path: "",
    component : MainPageComponent,
    children : [
      {
        path : "",
        redirectTo : "about-me/personal-info",
        pathMatch : 'full'
      },
      {
        path : "personal-info",
        component : BioPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutMeRoutingModule { }
