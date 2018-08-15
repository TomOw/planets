import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PlanetsComponent} from './planets.component';
import {PlanetsRoutingModule} from './planets.routes';
import {PlanetsMaterialModule} from '../planets-material.module';
import {PlanetComponent} from './planet/planet.component';
import {PlanetsService} from './planets.service';

@NgModule({
  imports: [
    PlanetsRoutingModule,
    CommonModule,
    PlanetsMaterialModule,
  ],
  declarations: [
    PlanetsComponent,
    PlanetComponent,
  ],
  providers: [PlanetsService],
  entryComponents: []

})
export class PlanetsModule {
}
