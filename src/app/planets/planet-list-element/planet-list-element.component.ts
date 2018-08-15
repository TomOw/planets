import {Component, Input, OnInit} from '@angular/core';
import {Planet} from '../../domain/models';

@Component({
  selector: 'planet-list-element',
  templateUrl: './planet-list-element.component.html',
  styleUrls: ['./planet-list-element.component.scss']
})
export class PlanetListElementComponent implements OnInit {

  @Input()
  planet: Planet;

  constructor() { }

  ngOnInit() {
  }

}
