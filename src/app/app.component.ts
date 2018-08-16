import {Component, OnInit} from '@angular/core';
import {MessageService} from './message.service';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material';
import {NotificationMessageType} from './domain/models';
import {NotificationService} from './shared/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(public snackBar: MatSnackBar,
              public messageService: MessageService,
              private notificationService: NotificationService) {

    messageService.messageSource$.subscribe(
      message => {
        this.openSnackBar(message.detail, message.summary, message.type);
      });
  }

  ngOnInit(): void {
  }


  openSnackBar(message: string, summary: string, type: NotificationMessageType) {
    let config: MatSnackBarConfig = new MatSnackBarConfig();
    config.duration = 5000;
    switch (type) {
      case NotificationMessageType.WARN: {
        config.panelClass = 'snack-bar--warn';
      }
        break;
      case NotificationMessageType.ERROR: {
        config.panelClass = 'snack-bar--error';
      }
        break;
    }
    this.snackBar.open((summary + ' ' + message), '', config);
  }
}
