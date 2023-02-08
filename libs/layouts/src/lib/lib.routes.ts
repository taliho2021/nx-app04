import { Route } from '@angular/router';
import { operationsRoutes } from '@nx-app04/operations';
import { partiesRoutes } from '@nx-app04/parties';
import { LayoutsComponent } from './layouts/layouts.component';

export const layoutsRoutes: Route[] = [
  { path: '', component: LayoutsComponent },
  { path: 'parties', children: partiesRoutes},
  { path: 'operations', children: operationsRoutes}
];
