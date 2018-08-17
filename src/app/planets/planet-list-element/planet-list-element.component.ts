import {Component, Input, OnInit} from '@angular/core';
import {Planet} from '../../domain/models';
import {ImageService} from '../../shared/images-service/image.service';

@Component({
  selector: 'planet-list-element',
  templateUrl: './planet-list-element.component.html',
  styleUrls: ['./planet-list-element.component.scss']
})
export class PlanetListElementComponent implements OnInit {

  @Input()
  planet: Planet;

  constructor(public imageService: ImageService) { }

  ngOnInit() {
  }

}
