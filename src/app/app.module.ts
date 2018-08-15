import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PlanetsMaterialModule} from './planets-material.module';
import {PlanetsModule} from './planets/planets.module';
import {AppRoutingModule} from './app.routes';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {MessageService} from './message.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    PlanetsMaterialModule,
    PlanetsModule,
    HttpClientModule
  ],
  providers: [
    MessageService,
    {provide: LocationStrategy, useClass: HashLocationStrategy},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
