import { provideRouter, RouterConfig, Route } from '@angular/router';
import { MainComponent } from './main/';
import { HomeComponent } from './home/';

export const routes: RouterConfig = [
  { path: '', component: MainComponent, children: [
    {
      component: HomeComponent,
      path: ''
    }
  ] }
];

export const APP_ROUTER_PROVIDERS: Route[] = [
  provideRouter(routes),
];
