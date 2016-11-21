import { Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { StatusPageComponent } from './pages/status-page/status-page.component';

export const appRoutes: Routes = [
  {
        path: '',
        redirectTo: '/status',
        pathMatch: 'full'
    },
    {
        path: 'status',
        component: StatusPageComponent
    },
];
