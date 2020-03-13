import { Routes } from '@angular/router';
import { ProductCommandListComponent } from './product-command-list/product-command-list.component';
import { ProductCommandEditComponent } from './product-command-edit/product-command-edit.component';
export const PRODUCT_COMMAND_ROUTES: Routes = [
  {
    path: 'stock_operations/productCommands',
    component: ProductCommandListComponent
  },
  {
    path: 'stock_operations/productCommands/:id',
    component: ProductCommandEditComponent
  }
];
