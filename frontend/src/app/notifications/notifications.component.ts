import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { decodeJWT } from '../helpers/decode-jwt';
import { MatDividerModule } from '@angular/material/divider';
import { MatRippleModule } from '@angular/material/core';
import { Router } from '@angular/router';
import { NotificationDetailsService } from '../notification-details/notification-details.service';
import { Notification } from '../entites/notification.entity';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [MatDividerModule, MatRippleModule],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss',
  providers: [NotificationDetailsService],
})
export class NotificationsComponent implements OnInit {

  constructor(private http: HttpClient, private cookieService: CookieService, private router: Router, private notificationService: NotificationDetailsService) { }

  notifications: Notification[] = [];

  ngOnInit() {
    const jwt = this.cookieService.get('jwt');
    const jwtPayload = decodeJWT(jwt);

    if (jwtPayload.studentID) {
      this.http.get<Notification[]>(`http://localhost:3000/students/${jwtPayload.studentID}/notifications`).subscribe(notifications => {
        this.notifications = notifications;
        console.log(notifications);
      });
    }
    if (jwtPayload.profesorID) {
      this.http.get<Notification[]>(`http://localhost:3000/profesors/${jwtPayload.profesorID}/notifications`).subscribe(notifications => {
        this.notifications = notifications;
        console.log(notifications);
      });
    }
  }
  event(notification: Notification) {
    this.router.navigate(['/notification']);
    this.notificationService.setNotification(notification);
  }
}

