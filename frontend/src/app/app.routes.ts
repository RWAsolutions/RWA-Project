import { Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserInfoComponent } from './user-info/user-info.component';
import {MyStudyComponent} from "./my-study/my-study.component";
import {ProfessorComponent} from "./my-study/professors/professor.component";
import {StudiesComponent} from "./my-study/studies/studies.component";
import {StudomatComponent} from "./studomat/studomat.component";
import { NotificationDetailsComponent } from './notification-details/notification-details.component';
import { NotificationFormComponent } from './notification-form/notification-form.component';
import { CoursesCatalogComponent } from './courses/course-catalog.component'
import { HomeComponent } from './home/home.component';
import { ProfilComponent } from './profil/profil.component';
import { SettingsComponent } from './settings/settings.component';

export const routes: Routes = [
  { path: 'login', component: FormComponent },
  { path: '', component: FormComponent },
  { path: 'home', component: CoursesCatalogComponent },
  // { path: 'home', component: HomeComponent},
  { path: 'profile', component: ProfilComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'studomat', component: StudomatComponent },
  { path: 'my-study', component: MyStudyComponent},
  { path: 'profesors', component: ProfessorComponent},
  { path: 'students', component: ProfessorComponent},
  { path: 'studies', component: StudiesComponent },
  // { path: 'password-reset', component: PasswordResetComponent}
  { path: 'user', component: UserInfoComponent },
  { path: 'notification', component: NotificationDetailsComponent },
  { path: 'add-notification', component: NotificationFormComponent },
  { path: '**', component: NotFoundComponent }, // this needs to be the last route

];
