import { Routes } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
export const CUSTOMER_ROUTES: Routes = [
  {
    path: 'partners/customers',
    component: CustomerListComponent
  },
  {
    path: 'partners/customers/:id',
    component: CustomerEditComponent
  }
];
