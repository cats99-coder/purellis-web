import { Routes } from '@angular/router';
import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    loadChildren: () =>
      import('./layouts/app-layout/app-layout.routes').then((m) => m.routes),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
