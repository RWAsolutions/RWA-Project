import { Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: 'login', component: FormComponent },
    { path: '', component: FormComponent },
    { path: 'home', component: AppComponent}
    // { path: 'password-reset', component: PasswordResetComponent}
];
