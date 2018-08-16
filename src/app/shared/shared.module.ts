import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LargeNumberPipe} from './pipes/large-number.pipe';
import {PlanetsMaterialModule} from '../planets-material.module';

@NgModule({
  imports: [
    CommonModule,
    PlanetsMaterialModule
  ],
  declarations: [
    LargeNumberPipe,
  ],
  exports: [
    LargeNumberPipe,
  ],
  providers: [
  ]
})
export class SharedModule {
}
