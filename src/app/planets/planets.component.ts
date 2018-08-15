import {Component, OnInit} from '@angular/core';
import {PlanetsService} from './planets.service';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {


  constructor(private planetsService: PlanetsService,
              private messageService: MessageService) {
  }

  ngOnInit(): void {

  }


}
