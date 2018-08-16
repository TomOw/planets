import { Injectable } from '@angular/core';
import {Subject} from '../../../node_modules/rxjs';
import {AppNotification, AppNotificationAction} from '../domain/models';

@Injectable()
export class NotificationService {

  appNotifications = new Subject<AppNotification>();

  appNotifications$ = this.appNotifications.asObservable();

  emitNotification(action: AppNotificationAction, data: any) {
    let notification: AppNotification = new AppNotification();
    notification.action = action;
    notification.data = data;
    this.appNotifications.next(notification);
  }
}
