import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
<<<<<<< HEAD
import { Router, RouterOutlet } from '@angular/router';
import { NotificationsComponent } from './notifications/notifications.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NotificationsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'merlin-frontend';

  constructor(public router: Router) { }

  validNotificationRoute(): boolean {
    let validUrls: string[] = ['/user'];
    return validUrls.includes(this.router.url);
  }
}
=======
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [ RouterOutlet, HeaderComponent ],
})
export class AppComponent {
  title = 'merlin-frontend';
}
>>>>>>> khasnek
