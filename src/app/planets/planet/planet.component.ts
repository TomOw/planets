import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PlanetsService} from '../planets.service';
import {AppNotificationAction, Planet} from '../../domain/models';
import {ImageService} from '../../shared/images-service/image.service';
import {NotificationService} from '../../notification.service';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss']
})
export class PlanetComponent implements OnInit {

  planetId: string;

  planet: Planet;

  constructor(private route: ActivatedRoute,
              private planetsService: PlanetsService,
              public imageService: ImageService,
              private notificationService: NotificationService) {

    this.notificationService.emitNotification(AppNotificationAction.HIDE_SEARCH, null);

  }

  ngOnInit() {
    this.route.url.subscribe(url => {
      this.planetId = url[1].path;
      this.planetsService.getById(this.planetId).subscribe(planet => {
        this.planet = planet;
      })
    })
  }

}
