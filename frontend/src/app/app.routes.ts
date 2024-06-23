import { Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { NotificationDetailsComponent } from './notification-details/notification-details.component';
import { NotificationFormComponent } from './notification-form/notification-form.component';
import { CoursesCatalogComponent } from './courses/course-catalog.component'

export const routes: Routes = [
  { path: 'login', component: FormComponent },
  { path: '', component: FormComponent },
  { path: 'courses', component: CoursesCatalogComponent },
  // { path: 'password-reset', component: PasswordResetComponent}
  { path: 'user', component: UserInfoComponent },
  { path: 'notification', component: NotificationDetailsComponent },
  { path: 'add-notification', component: NotificationFormComponent },
  { path: '**', component: NotFoundComponent }, // this needs to be the last route

];
