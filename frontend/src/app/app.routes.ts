import { Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { CoursesComponent } from './courses/courses.component';

export const routes: Routes = [
    { path: 'login', component: FormComponent },
    {path: 'courses', component: CoursesComponent},
    {path: '', redirectTo: 'courses', pathMatch: 'full'},
    // { path: '', component: FormComponent },
    // { path: 'home', component: AppComponent},
    { path: 'user', component: UserInfoComponent },

    

    // { path: '**', component: NotFoundComponent }, // this needs to be the last route
];
