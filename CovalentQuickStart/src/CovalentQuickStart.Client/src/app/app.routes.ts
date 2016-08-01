import { provideRouter, RouterConfig, Route } from '@angular/router';
import { MainComponent } from './main/';
import { HomeComponent } from './home/';
import { DashboardComponent } from './dashboard/';
import { DetailComponent } from './detail/';
import { LoginComponent } from './login/';
import { UsersComponent } from './users/';

export const routes: RouterConfig = [
  {
    path: '', component: MainComponent, children: [
      {
        component: HomeComponent,
        path: ''
      }
    ]
  },
  {
    component: LoginComponent,
    path: 'login'
  },
  {
    component: UsersComponent,
    path: 'users'
  },
  {
    component: DashboardComponent,
    path: 'dashboard'
  },
  {
    component: DetailComponent,
    path: 'item/:id'
  }
];

export const APP_ROUTER_PROVIDERS: Route[] = [
  provideRouter(routes),
];
