import { OperationsComponent } from './operations/operations.component';
import { Route } from '@angular/router';
import { airamsRoutes } from './air-ams/air-ams-routes';
import { airexportRoutes } from './air-export/air-export-routes';
import { airimportRoutes } from './air-import/air-import-routes';
import { customsbrokerageRoutes } from './customs-brokerage/customs-brokerage-routes';
import { oceanexportRoutes } from './ocean-export/ocean-export-routes';
import { oceanimportRoutes } from './ocean-import/ocean-import-routes';
import { seaamsRoutes } from './sea-ams/sea-ams-routes';
import { truckamsRoutes } from './truck-ams/truck-ams-routes';

export const operationsRoutes: Route[] = [
  { path: '', component: OperationsComponent },
  { path: 'air-ams', children: airamsRoutes },
  { path: 'air-export', children: airexportRoutes },
  { path: 'air-import', children: airimportRoutes },
  { path: 'customs-brokerage', children: customsbrokerageRoutes },
  { path: 'ocean-export', children: oceanexportRoutes },
  { path: 'ocean-import', children: oceanimportRoutes },
  { path: 'sea-ams', children: seaamsRoutes },
  { path: 'truck-ams', children: truckamsRoutes },
];
