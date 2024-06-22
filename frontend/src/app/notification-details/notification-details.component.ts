import { Component, OnInit } from '@angular/core';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-notification-details',
  standalone: true,
  imports: [],
  templateUrl: './notification-details.component.html',
  styleUrl: './notification-details.component.scss',
})
export class NotificationDetailsComponent implements OnInit {

  notificationTitle: string = '';

  constructor(private testService: TestService) { }

  ngOnInit(): void {
    this.notificationTitle = this.testService.getData();
  }

}
