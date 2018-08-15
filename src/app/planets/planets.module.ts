import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PlanetsComponent} from './planets.component';
import {PlanetsRoutingModule} from './planets.routes';
import {PlanetsMaterialModule} from '../planets-material.module';
import {PlanetComponent} from './planet/planet.component';
import {PlanetListElementComponent} from './planet-list-element/planet-list-element.component';
import {PlanetsService} from './planets.service';
import {LargeNumberPipe} from './pipes/large-number.pipe';

@NgModule({
  imports: [
    PlanetsRoutingModule,
    CommonModule,
    PlanetsMaterialModule,
  ],
  declarations: [
    PlanetsComponent,
    PlanetComponent,
    PlanetListElementComponent,
    LargeNumberPipe
  ],
  providers: [PlanetsService],
  entryComponents: []

})
export class PlanetsModule {
}
