import { Route } from '@angular/router';
import { CarriersComponent } from './carriers/carriers.component';
import { ClientsComponent } from './clients/clients.component';
import { ForwardersComponent } from './forwarders/forwarders.component';
import { ManufacturersComponent } from './manufacturers/manufacturers.component';
import { PartiesComponent } from './parties/parties.component';

export const partiesRoutes: Route[] = [
  { path: '', component: PartiesComponent },
  { path: 'carriers', component: CarriersComponent},
  { path: 'clients', component: ClientsComponent},
  { path: 'forwarders', component: ForwardersComponent},
  { path: 'manufacturers', component: ManufacturersComponent}
];
