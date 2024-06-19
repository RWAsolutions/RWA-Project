import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

interface Notification {
  title: string;
  content: string;
}

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [CommonModule, MatPaginatorModule, MatDividerModule],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss'
})
export class NotificationsComponent implements OnInit, AfterViewInit {

  notifications: Notification[] = [];
  displayedNotifications: Notification[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchNotifications();
  }

  fetchNotifications() {
    this.http.get<Notification[]>('http://localhost:3000/notifications').subscribe(
      notifications => {
        this.notifications = notifications;
        this.updateDisplayedNotifications();
      }
    );
  }

  ngAfterViewInit() {
    this.paginator.page.subscribe(() => this.updateDisplayedNotifications());
  }

  updateDisplayedNotifications() {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      const endIndex = startIndex + this.paginator.pageSize;
      this.displayedNotifications = this.notifications.slice(startIndex, endIndex);
    }
  }
}
