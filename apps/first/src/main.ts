// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { AppModule } from './app/app.module';

// platformBrowserDynamic()
//   .bootstrapModule(AppModule)
//   .catch((err) => console.error(err));

// import { bootstrapApplication } from '@angular/platform-browser';
// import { AppComponent } from './app/app.component';
// import { appRoutes } from './app/app.routes';
// import { RouterModule } from '@angular/router';
// import { importProvidersFrom } from '@angular/core';

// bootstrapApplication(AppComponent, {
//   providers: [importProvidersFrom(RouterModule.forRoot(appRoutes))],
// }).catch((err) => console.log(err));


import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withEnabledBlockingInitialNavigation } from '@angular/router';
import { AppComponent } from './app/app.component';
import { appRoutes } from './app/app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
    importProvidersFrom([BrowserAnimationsModule])
  ],
}).catch((err) => console.error(err));
