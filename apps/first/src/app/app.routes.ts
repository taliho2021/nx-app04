import { Route } from '@angular/router';
import { LayoutsComponent } from '@nx-app04/layouts';
import { partiesRoutes } from '@nx-app04/parties';
import { operationsRoutes } from '@nx-app04/operations';

export const appRoutes: Route[] = [
  { path: '', component: LayoutsComponent },
  { path: 'parties', children: partiesRoutes },
  { path: 'operations', children: operationsRoutes },
];
