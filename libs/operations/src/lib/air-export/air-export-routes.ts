import { AirExportDashboardComponent } from './air-export-dashboard/air-export-dashboard.component';
import { AirExportDetailComponent } from './air-export-detail/air-export-detail.component';
import { AirExportGridComponent } from './air-export-grid/air-export-grid.component';
import { AirExportHomeComponent } from './air-export-home/air-export-home.component';
import { Route } from '@angular/router';

export const airexportRoutes: Route[] = [
  { path: '', component: AirExportHomeComponent },
  { path: 'dashboard', component: AirExportDashboardComponent },
  { path: 'detail', component: AirExportDetailComponent },
  { path: 'grid', component: AirExportGridComponent },
];
