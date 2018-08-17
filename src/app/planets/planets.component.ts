import {Component, OnDestroy, OnInit} from '@angular/core';
import {PlanetsService} from './planets.service';
import {MessageService} from '../message.service';
import {AppNotificationAction, PageResponse, Planet} from '../domain/models';
import {PageEvent} from '@angular/material';
import {NotificationService} from '../notification.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit, OnDestroy {

  planetsResponse: PageResponse<Planet>;

  numberOfSkeletons = 3;
  skeletonsArray;

  notificationsSubscription;
  searchRequestSubscription;

  searchQuery: string;

  constructor(private planetsService: PlanetsService,
              private messageService: MessageService,
              private notificationService: NotificationService) {
    this.notificationService.emitNotification(AppNotificationAction.SHOW_SEARCH, null);
  }

  ngOnInit(): void {

    this.notificationsSubscription = this.notificationService.appNotifications$.subscribe(notification => {
      this.searchQuery = notification.data;

      this.planetsResponse.results = [];

      if (this.searchRequestSubscription && !this.searchRequestSubscription.closed) {
        this.searchRequestSubscription.unsubscribe();
      }

      this.searchRequestSubscription = this.planetsService.search(notification.data).subscribe(response => {
        this.planetsResponse = response;
      });
    });

    this.skeletonsArray = Array.from(Array(this.numberOfSkeletons).keys());

    this.planetsService.getByPage(1).subscribe(response => {
      this.planetsResponse = response;
    });
  }

  ngOnDestroy(): void {
    this.notificationsSubscription.unsubscribe();
  }

  onPageChange(event: PageEvent) {
    window.scrollTo(0, 0);
    this.planetsResponse.results = [];
    if (!this.searchQuery) {
      this.planetsService.getByPage(event.pageIndex + 1).subscribe(response => {
        this.planetsResponse = response;
      });
    } else {
      this.planetsService.getByPageAndSearchQuery(event.pageIndex + 1, this.searchQuery).subscribe(response => {
        this.planetsResponse = response;
      });
    }
  }

}
