import { Component, OnInit } from '@angular/core';
import { NotificationDetailsService } from './notification-details.service';
import { Notification } from '../entites/notification.entity';

@Component({
  selector: 'app-notification-details',
  standalone: true,
  imports: [],
  templateUrl: './notification-details.component.html',
  styleUrl: './notification-details.component.scss',
  providers: [NotificationDetailsService],
})
export class NotificationDetailsComponent implements OnInit {

  notification: Notification = this.notificationService.getNotification();

  constructor(private notificationService: NotificationDetailsService) { }

  ngOnInit(): void {
    this.notification = this.notificationService.getNotification();
  }

}
