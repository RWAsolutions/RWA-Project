import { Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserInfoComponent } from './user-info/user-info.component';
import {MyStudyComponent} from "./my-study/my-study.component";
import {ProfessorComponent} from "./my-study/professors/professor.component";
import {StudiesComponent} from "./my-study/studies/studies.component";

export const routes: Routes = [
    { path: 'login', component: FormComponent },
    { path: '', component: FormComponent },
    { path: 'home', component: AppComponent},
    // { path: 'password-reset', component: PasswordResetComponent}
  { path: 'my_study', component: MyStudyComponent},
  { path: 'professors', component: ProfessorComponent},
  { path: 'studies', component: StudiesComponent },
  //
  { path: 'user', component: UserInfoComponent },
  { path: '**', component: NotFoundComponent }, // this needs to be the last route
];
