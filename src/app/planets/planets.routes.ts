import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PlanetsComponent} from './planets.component';
import {PlanetComponent} from './planet/planet.component';

export const routes: Routes = [
  {path: '', component: PlanetsComponent},
  {path: 'planet/:id', component: PlanetComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class PlanetsRoutingModule {
}
