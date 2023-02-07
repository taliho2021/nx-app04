import { Route } from '@angular/router';
import { OceanImportDashboardComponent } from './ocean-import-dashboard/ocean-import-dashboard.component';
import { OceanImportDetailComponent } from './ocean-import-detail/ocean-import-detail.component';
import { OceanImportGridComponent } from './ocean-import-grid/ocean-import-grid.component';
import { OceanImportHomeComponent } from './ocean-import-home/ocean-import-home.component';


export const oceanimportRoutes: Route[] = [
  { path: '', component: OceanImportHomeComponent },
  { path: 'dashboard', component: OceanImportDashboardComponent },
  { path: 'detail', component: OceanImportDetailComponent },
  { path: 'grid', component: OceanImportGridComponent },
];
