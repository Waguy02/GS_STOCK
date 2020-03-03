import { Routes } from '@angular/router';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';
export const CATEGORY_ROUTES: Routes = [
  {
    path: 'stock/categories',
    component: CategoryListComponent
  },
  {
    path: 'stock/categories/:id',
    component: CategoryEditComponent
  }
];
