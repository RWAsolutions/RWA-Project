import { Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { CoursesCatalogComponent } from './courses/course-catalog.component';

export const routes: Routes = [
    { path: 'login', component: FormComponent },
    { path: 'courses', component: CoursesCatalogComponent },
    { path: '', component: FormComponent },
    { path: 'user', component: UserInfoComponent },

    

    { path: '**', component: NotFoundComponent }, // this needs to be the last route
];
