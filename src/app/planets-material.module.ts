import {NgModule} from '@angular/core';
import {MatButtonModule, MatCardModule, MatInputModule, MatSnackBarModule} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatSnackBarModule
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatSnackBarModule
  ]
})
export class PlanetsMaterialModule {
}
