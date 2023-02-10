import { AddressComponent } from './parties/address/address.component';
import { CarriersComponent } from './parties/carriers/carriers.component';
import { ClientsComponent } from './parties/clients/clients.component';
import { ForwardersComponent } from './parties/forwarders/forwarders.component';
import { ManufacturersComponent } from './parties/manufacturers/manufacturers.component';
import { PartiesComponent } from './parties/parties.component';
import { Route } from '@angular/router';

export const partiesRoutes: Route[] = [
  { path: '', component: PartiesComponent },
  { path: 'carriers', component: CarriersComponent},
  { path: 'clients', component: ClientsComponent},
  { path: 'forwarders', component: ForwardersComponent},
  { path: 'manufacturers', component: ManufacturersComponent},
  { path: 'address', component: AddressComponent}
];
