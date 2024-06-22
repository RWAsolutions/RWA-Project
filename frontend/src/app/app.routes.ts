import { Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { HomeComponent } from './home/home.component';
import { OcjeneComponent } from './ocjene/ocjene.component';
import { ProfilComponent } from './profil/profil.component';
import { SettingsComponent } from './settings/settings.component';

export const routes: Routes = [
    { path: 'login', component: FormComponent },
    { path: '', component: FormComponent },
    { path: 'home', component: HomeComponent},
    { path: 'ocjene', component: OcjeneComponent },
    { path: 'profil', component: ProfilComponent },
    { path: 'settings', component: SettingsComponent },
    // Ovdje @jkis implementira rerouting sa header componente prema testovima
    // { path: 'myTests', component:  },

    // ovdje @khasnek implementira rerouting sa forgot-my-password prema password-reset
    // { path: 'password-reset', component: PasswordResetComponent}
    { path: 'user', component: UserInfoComponent },
    { path: '**', component: NotFoundComponent }, // this needs to be the last route
];
