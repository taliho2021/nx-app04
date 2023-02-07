import { Route } from '@angular/router';
import { AirImportDashboardComponent } from './air-import-dashboard/air-import-dashboard.component';
import { AirImportDetailComponent } from './air-import-detail/air-import-detail.component';
import { AirImportGridComponent } from './air-import-grid/air-import-grid.component';
import { AirImportHomeComponent } from './air-import-home/air-import-home.component';

export const airimportRoutes: Route[] = [
  { path: '', component: AirImportHomeComponent },
  { path: 'dashboard', component: AirImportDashboardComponent },
  { path: 'detail', component: AirImportDetailComponent },
  { path: 'grid', component: AirImportGridComponent },
];
