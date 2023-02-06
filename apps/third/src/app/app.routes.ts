import { Route } from '@angular/router';
import { LayoutsComponent } from '@nx-app04/layouts';
import { partiesRoutes } from '@nx-app04/parties';
export const appRoutes: Route[] = [
   {path: '', component: LayoutsComponent},
  {path: 'parties', children: partiesRoutes}
];
