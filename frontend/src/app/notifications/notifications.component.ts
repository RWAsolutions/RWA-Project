import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { decodeJWT } from '../helpers/decode-jwt';

interface Notification {
  title: string;
  content: string;
}

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss'
})
export class NotificationsComponent implements OnInit {

  constructor(private http: HttpClient, private cookieService: CookieService) { }

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

}
// updateDisplayedNotifications() {
//   if (this.paginator) {
//     const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
//     const endIndex = startIndex + this.paginator.pageSize;
//     this.displayedNotifications = this.notifications.slice(startIndex, endIndex);
//   }

