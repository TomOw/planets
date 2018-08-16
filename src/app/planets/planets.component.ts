import {Component, OnInit} from '@angular/core';
import {PlanetsService} from './planets.service';
import {MessageService} from '../message.service';
import {PageResponse, Planet} from '../domain/models';
import {PageEvent} from '@angular/material';
import {NotificationService} from '../shared/notification.service';

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
              private messageService: MessageService,
              private notificationService: NotificationService) {
  }

  ngOnInit(): void {

    this.notificationService.appNotifications$.subscribe(notification => {
      console.log(notification);
    })

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
