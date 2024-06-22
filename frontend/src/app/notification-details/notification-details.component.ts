import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-notification-details',
  standalone: true,
  imports: [],
  templateUrl: './notification-details.component.html',
  styleUrl: './notification-details.component.scss',
})
export class NotificationDetailsComponent implements OnInit {

  notificationTitle: string = '';

  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.notificationTitle = this.notificationService.getData();
  }

}
