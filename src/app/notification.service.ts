import { Injectable } from '@angular/core';
import {AppNotification, AppNotificationAction} from './domain/models';
import {Subject} from '../../node_modules/rxjs';

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
