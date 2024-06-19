import { Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserInfoComponent } from './user-info/user-info.component';
import {MyStudyComponent} from "./my-study/my-study.component";

export const routes: Routes = [
    { path: 'login', component: FormComponent },
    { path: '', component: FormComponent },
    { path: 'home', component: AppComponent},
    // { path: 'password-reset', component: PasswordResetComponent}
  { path: 'my_study', component: MyStudyComponent},
  { path: 'user', component: UserInfoComponent },
  { path: '**', component: NotFoundComponent }, // this needs to be the last route
];
