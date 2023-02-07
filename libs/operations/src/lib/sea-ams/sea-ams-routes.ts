import { Route } from '@angular/router';
import { SeaAmsDashboardComponent } from './sea-ams-dashboard/sea-ams-dashboard.component';
import { SeaAmsDetailComponent } from './sea-ams-detail/sea-ams-detail.component';
import { SeaAmsGridComponent } from './sea-ams-grid/sea-ams-grid.component';
import { SeaAmsHomeComponent } from './sea-ams-home/sea-ams-home.component';

export const seaamsRoutes: Route[] = [
  { path: '', component: SeaAmsHomeComponent },
  { path: 'dashboard', component: SeaAmsDashboardComponent },
  { path: 'detail', component: SeaAmsDetailComponent },
  { path: 'grid', component: SeaAmsGridComponent },
];
