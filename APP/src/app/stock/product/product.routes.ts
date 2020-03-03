import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
export const PRODUCT_ROUTES: Routes = [
  {
    path: 'stock/products',
    component: ProductListComponent
  },
  {
    path: 'stock/products/:id',
    component: ProductEditComponent
  }
];
