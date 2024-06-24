import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NotificationsComponent } from './notifications/notifications.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NotificationsComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'merlin-frontend';

  constructor(public router: Router) { }

  validNotificationRoute(): boolean {
    let validUrls: string[] = ['/user', '/courses', '/profil', '/home'];
    return validUrls.includes(this.router.url);
  }
}
