import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../services/cache/notification.service';
import { ReplyDto } from './reply.dto';
import { HttpClient } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-notification-details',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './notification-details.component.html',
  styleUrl: './notification-details.component.scss',
})
export class NotificationDetailsComponent implements OnInit {

  notification: any = {
    notificationID: -1,
    title: 'Notification Title',
    content: 'Notification Content',
    isRead: 0,
    profesorName: 'Profesor Name',
    profesorSurname: 'Profesor Surname',
  }

  replies: ReplyDto[] | any = [];

  constructor(private notificationService: NotificationService, private http: HttpClient) { }

  ngOnInit(): void {

    this.notification = this.notificationService.getData();

    this.http.get(`http://localhost:3000/notifications/${this.notification.notificationID}/replies`).subscribe(replies => {
      this.replies = replies;
      this.replies.sort((a: any, b: any) => {
        const dateA = new Date(a.dateAdded);
        const dateB = new Date(b.dateAdded);
        return dateB.getTime() - dateA.getTime();
      });
      console.log('replies in frontend', replies);
    });
  }

}
