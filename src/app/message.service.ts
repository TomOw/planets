import { Injectable } from '@angular/core';
import {Subject} from '../../node_modules/rxjs';
import {NotificationMessage, NotificationMessageType} from './domain/models';

@Injectable()
export class MessageService {

  private messageSource = new Subject<NotificationMessage>();

  messageSource$ = this.messageSource.asObservable();

  success(summary : string, detail : string) {
    this.messageSource.next({type: NotificationMessageType.SUCCESS, summary: summary, detail: detail});
    console.log("INFO: " + summary + " DETAIL: " + detail);
  }

  info(summary : string, detail : string) {
    this.messageSource.next({type: NotificationMessageType.INFO, summary: summary, detail: detail});
    console.log("INFO: " + summary + " DETAIL: " + detail);
  }

  warning(summary : string, detail : string) {
    this.messageSource.next({type: NotificationMessageType.WARN, summary: summary, detail: detail});
    console.log("WARNING: " + summary + " DETAIL: " + detail);
  }

  error(summary : string, detail : string) {
    this.messageSource.next({type: NotificationMessageType.ERROR, summary: summary, detail: detail});
    console.log("ERROR: " + summary + " DETAIL: " + detail);
  }
}
