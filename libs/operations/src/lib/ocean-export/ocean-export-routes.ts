import { Route } from '@angular/router';
import { OceanExportDashboardComponent } from './ocean-export-dashboard/ocean-export-dashboard.component';
import { OceanExportDetailComponent } from './ocean-export-detail/ocean-export-detail.component';
import { OceanExportGridComponent } from './ocean-export-grid/ocean-export-grid.component';
import { OceanExportHomeComponent } from './ocean-export-home/ocean-export-home.component';

export const oceanexportRoutes: Route[] = [
  { path: '', component: OceanExportHomeComponent },
  { path: 'dashboard', component: OceanExportDashboardComponent },
  { path: 'detail', component: OceanExportDetailComponent },
  { path: 'grid', component: OceanExportGridComponent },
];
