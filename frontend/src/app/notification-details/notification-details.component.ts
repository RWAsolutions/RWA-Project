import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../services/cache/notification.service';
import { ReplyDto } from './reply.dto';
import { HttpClient } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { decodeJWT } from '../helpers/decode-jwt';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notification-details',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule, CommonModule, FormsModule],
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

  isButtonVisible: boolean = true;

  replyContent: string = '';

  constructor(
    private notificationService: NotificationService,
    private http: HttpClient,
    private cookieService: CookieService,
    private router: Router
  ) { }

  ngOnInit(): void {

    console.log('notification', this.notification);

    this.notification = this.notificationService.getData();

    this.http.get(`http://localhost:3000/notifications/${this.notification.notificationID}/replies`).subscribe(replies => {
      this.replies = replies;
      this.replies.sort((a: any, b: any) => {
        const dateA = new Date(a.dateAdded);
        const dateB = new Date(b.dateAdded);
        return dateB.getTime() - dateA.getTime();
      });
      console.log('replies in frontend', replies);
      this.replies.forEach((reply: any) => {
        reply.dateAdded = this.formatDateString(reply.dateAdded);
      });
    });
  }

  formatDateString(dateString: string): string {
    const [datePart, timePart] = dateString.split(' ');
    const [year, month, day] = datePart.split('-').map(part => parseInt(part));
    const [hours, minutes] = timePart.split(':');
    const paddedDay = day < 10 ? `0${day}` : `${day}`;
    const paddedMonth = month < 10 ? `0${month}` : `${month}`;
    return `${hours}:${minutes} ${paddedDay}-${paddedMonth}-${year}`;
  }

  addReply() {
    console.log('add reply');
    this.isButtonVisible = false;
  }

  buttonVisible(): boolean {
    return this.isButtonVisible;
  }

  addReplyForReal() {

    let dateCurrent: string = this.getCurrentDate()

    console.log('add reply for real', this.replyContent);
    let token = this.cookieService.get('jwt');
    let payload = decodeJWT(token);
    this.http.post(`http://localhost:3000/replies`,
      {
        content: this.replyContent, userID: payload.userID,
        notificationID: this.notification.notificationID, dateAdded: dateCurrent
      }
    ).subscribe((reply: any) => {
      console.log('reply added to base', reply);
      this.isButtonVisible = true;
      this.replyContent = '';
      this.replies.push({
        content: this.replyContent, userID: payload.userID,
        notificationID: this.notification.notificationID, dateAdded: dateCurrent
      });
      // TODO: sort here
      this.replies.sort((a: any, b: any) => {
        const dateA = new Date(a.dateAdded);
        const dateB = new Date(b.dateAdded);
        return dateB.getTime() - dateA.getTime();
      });
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/notification']);
      });
      this.http.patch(`http://localhost:3000/notifications/${this.notification.notificationID}/read-status`, {})
        .subscribe((notification: any) => {
          console.log('notification read status updated', notification);
        });
    });
  }

  getCurrentDate() {
    let date = new Date();
    let year = date.getFullYear();
    let month = (date.getMonth() + 1).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');
    let hours = date.getHours().toString().padStart(2, '0');
    let minutes = date.getMinutes().toString().padStart(2, '0');
    let seconds = date.getSeconds().toString().padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }
}
