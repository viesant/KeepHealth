import { Routes } from '@angular/router';
import { DietComponent } from './diet/diet.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ActivitiesComponent } from './activities/activities.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'register',
    pathMatch: 'full',
  },
  {
    path: 'diet',
    component: DietComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'activities',
    component: ActivitiesComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
];
