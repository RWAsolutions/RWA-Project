import { Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { NotificationDetailsComponent } from './notification-details/notification-details.component';

export const routes: Routes = [
  { path: 'login', component: FormComponent },
  { path: '', component: FormComponent },
  // { path: 'password-reset', component: PasswordResetComponent}
  { path: 'user', component: UserInfoComponent },
  { path: 'notification', component: NotificationDetailsComponent },
  { path: '**', component: NotFoundComponent }, // this needs to be the last route
];
