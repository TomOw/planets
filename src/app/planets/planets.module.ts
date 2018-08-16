import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PlanetsComponent} from './planets.component';
import {PlanetsRoutingModule} from './planets.routes';
import {PlanetsMaterialModule} from '../planets-material.module';
import {PlanetComponent} from './planet/planet.component';
import {PlanetListElementComponent} from './planet-list-element/planet-list-element.component';
import {PlanetsService} from './planets.service';
import {SharedModule} from '../shared/shared.module';
import { PlanetListElementSkeletonComponent } from './planet-list-element-skeleton/planet-list-element-skeleton.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    PlanetsRoutingModule,
    CommonModule,
    PlanetsMaterialModule,
    SharedModule,
    RouterModule
  ],
  declarations: [
    PlanetsComponent,
    PlanetComponent,
    PlanetListElementComponent,
    PlanetListElementSkeletonComponent,
  ],
  providers: [PlanetsService],
  entryComponents: []

})
export class PlanetsModule {
}
