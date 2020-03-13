import { Routes } from '@angular/router';
import { ClassProductListComponent } from './class-product-list/class-product-list.component';
import { ClassProductEditComponent } from './class-product-edit/class-product-edit.component';
export const CLASS_PRODUCT_ROUTES: Routes = [
  {
    path: 'stock/classProducts',
    component: ClassProductListComponent
  },
  {
    path: 'stock/classProducts/:id',
    component: ClassProductEditComponent
  }
];
