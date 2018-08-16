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
import {FormsModule} from '@angular/forms';
import {SharedModule} from './shared/shared.module';
import {NotificationService} from './notification.service';


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
    HttpClientModule,
    FormsModule,
    SharedModule
  ],
  providers: [
    MessageService,
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    NotificationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
