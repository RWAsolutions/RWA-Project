import { Injectable } from "@angular/core";
import { Notification } from "../entites/notification.entity";

@Injectable({
  providedIn: 'root',
})
export class NotificationDetailsService {

  notification: Notification = {
    title: "",
    content: "",
    isRead: 0,
  };

  getNotification(): Notification {
    return this.notification;
  }

  setNotification(notification: Notification): void {
    this.notification = notification;
  }

}
