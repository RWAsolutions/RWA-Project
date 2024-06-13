import { Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserInfoComponent } from './user-info/user-info.component';

export const routes: Routes = [
  { path: 'login', component: FormComponent },
  { path: '', component: FormComponent },
  { path: 'login2', component: LoginComponent },
  { path: 'user', component: UserInfoComponent },
  { path: '**', component: NotFoundComponent }, // this needs to be the last route
];
