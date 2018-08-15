import {Component, OnInit} from '@angular/core';
import {PlanetsService} from './planets.service';
import {MessageService} from '../message.service';
import {Planet} from '../domain/models';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {

  planets: Planet[] = [];

  constructor(private planetsService: PlanetsService,
              private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.planetsService.getByPage(1).subscribe(response => {
      this.planets = response.results;
    })
  }


}
