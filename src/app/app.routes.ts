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
  {
    path: 'flavour-empty/:name',
    loadComponent: () =>
      import('./views/flavour-empty-page/flavour-empty-page.page')
        .then(m => m.FlavourEmptyPage),
  }

];
