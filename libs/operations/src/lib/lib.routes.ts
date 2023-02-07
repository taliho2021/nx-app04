import { Route } from '@angular/router';
import { airamsRoutes } from './air-ams/air-ams-routes';
import { airimportRoutes } from './air-import/air-import-routes';
import { customsbrokerageRoutes } from './customs-brokerage/customs-brokerage-routes';
import { OperationsComponent } from './operations/operations.component';

export const operationsRoutes: Route[] = [
  { path: '', component: OperationsComponent },
  { path: 'air-ams', children: airamsRoutes },
  { path: 'air-import', children: airimportRoutes },
  { path: 'customs-brokerage', children: customsbrokerageRoutes },
];
