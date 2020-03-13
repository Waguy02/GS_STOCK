import { Routes } from '@angular/router';
import { ManagerListComponent } from './manager-list/manager-list.component';
import { ManagerEditComponent } from './manager-edit/manager-edit.component';
export const MANAGER_ROUTES: Routes = [
  {
    path: 'params/managers',
    component: ManagerListComponent
  },
  {
    path: 'params/managers/:id',
    component: ManagerEditComponent
  }
];
