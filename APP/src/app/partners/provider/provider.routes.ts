import { Routes } from '@angular/router';
import { ProviderListComponent } from './provider-list/provider-list.component';
import { ProviderEditComponent } from './provider-edit/provider-edit.component';
export const PROVIDER_ROUTES: Routes = [
  {
    path: 'partners/providers',
    component: ProviderListComponent
  },
  {
    path: 'partners/providers/:id',
    component: ProviderEditComponent
  }
];
