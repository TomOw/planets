import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LargeNumberPipe} from './pipes/large-number.pipe';
import {PlanetsMaterialModule} from '../planets-material.module';
import {NotificationService} from './notification.service';

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
    NotificationService
  ]
})
export class SharedModule {
}
