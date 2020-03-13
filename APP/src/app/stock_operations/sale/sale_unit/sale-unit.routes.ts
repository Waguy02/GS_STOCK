import { Routes } from '@angular/router';
import { SaleUnitListComponent } from './sale-unit-list/sale-unit-list.component';
import { SaleUnitEditComponent } from './sale-unit-edit/sale-unit-edit.component';
export const SALE_UNIT_ROUTES: Routes = [
  {
    path: 'stock_operations/sale/saleUnits',
    component: SaleUnitListComponent
  },
  {
    path: 'stock_operations/sale/saleUnits/:id',
    component: SaleUnitEditComponent
  }
];
