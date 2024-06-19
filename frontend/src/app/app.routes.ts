import { Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: 'login', component: FormComponent },
    { path: '', component: FormComponent },
    { path: 'home', component: HomeComponent},
    // { path: 'home', component: HeaderComponent},
    // { path: 'password-reset', component: PasswordResetComponent}
    { path: 'user', component: UserInfoComponent },
    { path: '**', component: NotFoundComponent }, // this needs to be the last route
];
