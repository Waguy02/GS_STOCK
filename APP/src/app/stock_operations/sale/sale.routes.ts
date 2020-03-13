import { Routes } from '@angular/router';
import { SaleListComponent } from './sale-list/sale-list.component';
import { SaleEditComponent } from './sale-edit/sale-edit.component';
export const SALE_ROUTES: Routes = [
  {
    path: 'stock_operations/sales',
    component: SaleListComponent
  },
  {
    path: 'stock_operations/sales/:id',
    component: SaleEditComponent
  }
];
