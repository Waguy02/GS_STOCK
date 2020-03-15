import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductCommandListComponent} from "./stock_operations/product_command/product-command-list/product-command-list.component";
import {DashboardComponent} from "./dashboard/dashboard.component";


const routes: Routes = [


  {
    path: '',
    redirectTo: 'home',
    pathMatch:'full'
  },



  {
    path: 'home',
    component: DashboardComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
