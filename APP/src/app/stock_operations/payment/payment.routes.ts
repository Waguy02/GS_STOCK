import { Routes } from '@angular/router';
import { PaymentListComponent } from './payment-list/payment-list.component';
import { PaymentEditComponent } from './payment-edit/payment-edit.component';
export const PAYMENT_ROUTES: Routes = [
  {
    path: 'stock_operations/payments',
    component: PaymentListComponent
  },
  {
    path: 'stock_operations/payments/:id',
    component: PaymentEditComponent
  }
];
