import { Routes } from '@angular/router';
import { FormComponent } from './form/form.component';

export const routes: Routes = [
    { path: 'login', component: FormComponent },
    { path: '', component: FormComponent },
];
