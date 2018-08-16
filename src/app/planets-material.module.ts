import {NgModule} from '@angular/core';
import {MatButtonModule, MatCardModule, MatIconModule, MatInputModule, MatPaginatorModule, MatSnackBarModule} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatSnackBarModule,
    MatIconModule,
    MatPaginatorModule
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatSnackBarModule,
    MatIconModule,
    MatPaginatorModule

  ]
})
export class PlanetsMaterialModule {
}
