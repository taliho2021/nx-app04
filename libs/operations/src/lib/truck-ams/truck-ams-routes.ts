import { Route } from '@angular/router';
import { TruckAmsDashboardComponent } from './truck-ams-dashboard/truck-ams-dashboard.component';
import { TruckAmsDetailComponent } from './truck-ams-detail/truck-ams-detail.component';
import { TruckAmsGridComponent } from './truck-ams-grid/truck-ams-grid.component';
import { TruckAmsHomeComponent } from './truck-ams-home/truck-ams-home.component';

export const truckamsRoutes: Route[] = [
  { path: '', component: TruckAmsHomeComponent },
  { path: 'dashboard', component: TruckAmsDashboardComponent },
  { path: 'detail', component: TruckAmsDetailComponent },
  { path: 'grid', component: TruckAmsGridComponent },
];
