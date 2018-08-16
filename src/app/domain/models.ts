export class NotificationMessage {
  type: NotificationMessageType;
  summary: string;
  detail: string;
}

export enum NotificationMessageType {
  SUCCESS, INFO, WARN, ERROR
}

export class Planet {
  name: string;
  diameter: string;
  rotation_period: string;
  orbital_period: string;
  gravity: string;
  population: string;
  climate: string;
  terrain: string;
  surface_water: string;
  url: string;
  created: string;
  edited: string;
}

export class PageResponse<T> {
  count: number;
  next: string;
  previous: string;
  results: T[];
}

export class AppNotification {
  action: AppNotificationAction;
  data: any;

}

export enum AppNotificationAction {
  SEARCH
}
