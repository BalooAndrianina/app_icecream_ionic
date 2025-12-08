import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'make-ice-cream',
    pathMatch: 'full',
  },
  {
    path: 'make-ice-cream',
    loadComponent: () => import('./views/make-ice-cream/make-ice-cream.page').then( m => m.MakeIceCreamPage)
  },
];
