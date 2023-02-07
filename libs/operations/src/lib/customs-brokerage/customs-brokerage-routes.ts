import { Route } from '@angular/router';
import { CustomsBrokerageDashboardComponent } from './customs-brokerage-dashboard/customs-brokerage-dashboard.component';
import { CustomsBrokerageDetailComponent } from './customs-brokerage-detail/customs-brokerage-detail.component';
import { CustomsBrokerageGridComponent } from './customs-brokerage-grid/customs-brokerage-grid.component';
import { CustomsBrokerageHomeComponent } from './customs-brokerage-home/customs-brokerage-home.component';

export const customsbrokerageRoutes: Route[] = [
  { path: '', component: CustomsBrokerageHomeComponent },
  { path: 'dashboard', component: CustomsBrokerageDashboardComponent },
  { path: 'detail', component: CustomsBrokerageDetailComponent },
  { path: 'grid', component: CustomsBrokerageGridComponent },
];
