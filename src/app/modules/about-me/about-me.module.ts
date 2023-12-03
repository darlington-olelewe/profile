import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import { AboutMeRoutingModule } from './about-me-routing.module';
import {components} from "./index";


@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    AboutMeRoutingModule,
    NgOptimizedImage
  ]
})
export class AboutMeModule { }
