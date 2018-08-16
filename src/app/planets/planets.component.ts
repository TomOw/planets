import {Component, OnInit} from '@angular/core';
import {PlanetsService} from './planets.service';
import {MessageService} from '../message.service';
import {PageResponse, Planet} from '../domain/models';
import {PageEvent} from '@angular/material';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {

  planetsResponse: PageResponse<Planet>;

  numberOfSkeletons = 3;
  skeletonsArray;

  constructor(private planetsService: PlanetsService,
              private messageService: MessageService) {
  }

  ngOnInit(): void {

    this.skeletonsArray = Array.from(Array(this.numberOfSkeletons).keys());

    this.planetsService.getByPage(1).subscribe(response => {
      this.planetsResponse = response;
    })
  }

  onPageChange(event: PageEvent) {
    console.log(event);
    this.planetsResponse.results = [];
    this.planetsService.getByPage(event.pageIndex + 1).subscribe(response => {
      this.planetsResponse = response;
    })
  }


}
