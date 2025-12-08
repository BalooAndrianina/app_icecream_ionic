import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

import { StockRepository } from './app/repository/stock-repository';
import { StockRepositoryDummyImpl } from './app/repository/stock-repository-dummy-impl';

bootstrapApplication(AppComponent, {
  providers: [
    {provide: StockRepository, useClass: StockRepositoryDummyImpl},
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
  ],
});
