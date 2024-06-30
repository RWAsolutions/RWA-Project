import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { decodeJWT } from '../helpers/decode-jwt';
import { MatDividerModule } from '@angular/material/divider';
import { MatRippleModule } from '@angular/material/core';
import { Router } from '@angular/router';
import { Notification } from '../entites/notification.entity';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NotificationService } from '../services/cache/notification.service';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [MatDividerModule, MatRippleModule, MatButtonModule, MatIconModule],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss',
})
export class NotificationsComponent implements OnInit {

  constructor(private http: HttpClient, private cookieService: CookieService, private router: Router,
    private notificationService: NotificationService) { }

  notifications: Notification[] = [];

  jwtPayload: any;

  ngOnInit() {
    const jwt = this.cookieService.get('jwt');
    const jwtPayload = decodeJWT(jwt);
    this.jwtPayload = jwtPayload;

    if (jwtPayload.studentID) {
      this.http.get<Notification[]>(`http://localhost:3000/students/${jwtPayload.studentID}/notifications`).subscribe(notifications => {
        this.notifications = notifications;
        //console.log(notifications);
      });
    }
    if (jwtPayload.profesorID) {
      console.log('getting notification as a profesor')
      this.http.get<Notification[]>(`http://localhost:3000/profesors/${jwtPayload.profesorID}/notifications`).subscribe(notifications => {
        this.notifications = notifications;
      });
    }
  }

  event(notification: Notification) {

    console.log('notification clicked', notification);

    if (notification.isRead === 0) {
      let updateNotificationDto = { isRead: 1, notificationID: notification.notificationID, userID: this.jwtPayload.userID };
      this.http.patch(`http://localhost:3000/notifications`, updateNotificationDto).subscribe();
      notification.isRead = 1;
    }
    this.notificationService.setData(notification);
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/notification']);
    });
  }

  markAllAsReadClicked() {
    this.notifications.forEach((notification) => {
      if (notification.isRead === 0) {
        let updateNotificationDto = { isRead: 1, notificationID: notification.notificationID, userID: this.jwtPayload.userID };
        this.http.patch(`http://localhost:3000/notifications`, updateNotificationDto).subscribe();
        notification.isRead = 1;
      }
    });
  }

  addNewNotificationClicked() {
    console.log('add new notification clicked');
    this.router.navigate(['/add-notification']);
  }

  profesorLogged(): boolean {
    return this.jwtPayload.profesorID !== undefined && this.jwtPayload.profesorID !== null;
  }

}



