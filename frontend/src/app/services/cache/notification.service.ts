import { Injectable } from "@angular/core";
import { Notification } from "../../entites/notification.entity";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  notification: Notification | any = {
    title: 'Notification Title',
    content: 'Notification Content',
    isRead: 0,
  }

  constructor() { }

  getData(): string {
    return this.notification;
  }

  setData(notification: any): void {
    this.notification = notification;
  }

}
