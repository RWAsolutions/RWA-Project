import { Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {MyStudyComponent} from "./my-study/my-study.component";
import {ProfessorComponent} from "./my-study/professors/professor.component";
import {StudiesComponent} from "./my-study/studies/studies.component";
import {StudomatComponent} from "./studomat/studomat.component";
import { NotificationDetailsComponent } from './notification-details/notification-details.component';
import { NotificationFormComponent } from './notification-form/notification-form.component';
import { CoursesCatalogComponent } from './courses/course-catalog.component'
import { ProfilComponent } from './profil/profil.component';
import { SettingsComponent } from './settings/settings.component';
import { CourseInfoComponent } from './course-info/course-info.component';


export const routes: Routes = [
  { path: 'login', component: FormComponent },
  { path: '', component: FormComponent },
  { path: 'course-info', component: CourseInfoComponent },
  { path: 'home', component: CoursesCatalogComponent}, 
  { path: 'profile', component: ProfilComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'studomat', component: StudomatComponent },
  { path: 'my-study', component: MyStudyComponent},
  { path: 'profesors', component: ProfessorComponent},
  { path: 'students', component: ProfessorComponent},
  { path: 'studies', component: StudiesComponent },
  { path: 'notification', component: NotificationDetailsComponent },
  { path: 'add-notification', component: NotificationFormComponent },
  { path: '**', component: NotFoundComponent }, // this needs to be the last route

];
