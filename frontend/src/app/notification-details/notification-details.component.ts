import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../services/cache/notification.service';

@Component({
  selector: 'app-notification-details',
  standalone: true,
  imports: [],
  templateUrl: './notification-details.component.html',
  styleUrl: './notification-details.component.scss',
})
export class NotificationDetailsComponent implements OnInit {

  notification: any = {
    title: 'Notification Title',
    content: 'Notification Content',
    isRead: 0,
    profesorName: 'Profesor Name',
    profesorSurname: 'Profesor Surname',
  }

  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.notification = this.notificationService.getData();
  }

}
