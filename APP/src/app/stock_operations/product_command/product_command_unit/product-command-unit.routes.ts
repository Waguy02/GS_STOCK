import { Routes } from '@angular/router';
import { ProductCommandUnitListComponent } from './product-command-unit-list/product-command-unit-list.component';
import { ProductCommandUnitEditComponent } from './product-command-unit-edit/product-command-unit-edit.component';
export const PRODUCT_COMMAND_UNIT_ROUTES: Routes = [
  {
    path: 'stock_operations/product_command/productCommandUnits',
    component: ProductCommandUnitListComponent
  },
  {
    path: 'stock_operations/product_command/productCommandUnits/:id',
    component: ProductCommandUnitEditComponent
  }
];
