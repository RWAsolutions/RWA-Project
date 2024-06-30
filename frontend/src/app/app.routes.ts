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
import { OcjeneComponent } from './ocjene/ocjene.component';
import { ProfilComponent } from './profil/profil.component';
import { SettingsComponent } from './settings/settings.component';
import { CourseInfoComponent } from './course-info/course-info.component';

export const routes: Routes = [
  { path: 'login', component: FormComponent },
  { path: '', component: FormComponent },
  { path: 'courses', component: CoursesCatalogComponent },
  { path: 'course-info', component: CourseInfoComponent },
  { path: 'home', component: HomeComponent}, 
  { path: 'ocjene', component: OcjeneComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'studomat', component: StudomatComponent },
  { path: 'my_study', component: MyStudyComponent},
  { path: 'professors', component: ProfessorComponent},
  { path: 'studies', component: StudiesComponent },
  // { path: 'password-reset', component: PasswordResetComponent}
  { path: 'user', component: UserInfoComponent },
  { path: 'notification', component: NotificationDetailsComponent },
  { path: 'add-notification', component: NotificationFormComponent },
  { path: '**', component: NotFoundComponent }, // this needs to be the last route

];
