import { AirAmsHomeComponent } from './air-ams-home/air-ams-home.component';
import { AirAmsDashboardComponent } from './air-ams-dashboard/air-ams-dashboard.component';
import { AirAmsDetailComponent } from './air-ams-detail/air-ams-detail.component';
import { AirAmsGridComponent } from './air-ams-grid/air-ams-grid.component';
import { Route } from '@angular/router';

export const airamsRoutes: Route[] = [
  { path: '', component: AirAmsHomeComponent },
  { path: 'dashboard', component: AirAmsDashboardComponent },
  { path: 'detail', component: AirAmsDetailComponent },
  { path: 'grid', component: AirAmsGridComponent },
];
