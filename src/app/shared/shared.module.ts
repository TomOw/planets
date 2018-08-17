import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LargeNumberPipe} from './pipes/large-number.pipe';
import {PlanetsMaterialModule} from '../planets-material.module';
import {ImageService} from './images-service/image.service';

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
    ImageService
  ]
})
export class SharedModule {
}
