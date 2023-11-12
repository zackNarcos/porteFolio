import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {RouterModule} from "@angular/router";
import {DevServiceComponent} from "./components/dev-service/dev-service.component";
import {FormationServiceComponent} from "./components/formation-service/formation-service.component";
import {MentorServiceComponent} from "./components/mentor-service/mentor-service.component";

const homeRoutes = [
  {
    path: '',
    component: HomeComponent,
  }
];

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes),
    DevServiceComponent,
    FormationServiceComponent,
    MentorServiceComponent
  ]
})
export class HomeModule { }
