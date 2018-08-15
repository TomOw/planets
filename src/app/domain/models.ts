export class NotificationMessage {
  type: NotificationMessageType;
  summary: string;
  detail: string;
}

export enum NotificationMessageType {
  SUCCESS, INFO, WARN, ERROR
}
