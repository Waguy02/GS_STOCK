






import { GsNavModule } from './gs-nav/gs-nav.module';

import {APP_INITIALIZER, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule, MatSelectModule, MatCardModule, MatInputModule, MatAutocompleteModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, MatListModule, MatProgressSpinnerModule, MatIconModule, MatButtonModule, MatSidenavModule, MatTabsModule } from '@angular/material';



import {ConfigurationService} from './configuration/configuration.service';


import {MatDialogModule} from '@angular/material/dialog';
import {CategoryModule} from './stock/category/category.module';
import {ProductModule} from './stock/product/product.module';
import {CustomerModule} from "./partners/customer/customer.module";
import {ProviderModule} from "./partners/provider/provider.module";
import {ClassProductModule} from "./stock/class_product/class-product.module";
import {ManagerModule} from "./params/manager/manager.module";
import {ProductCommandModule} from "./stock_operations/product_command/product-command.module";
import {ManagerService} from "./params/manager/manager.service";
import { AuthComponent } from './params/manager/auth/auth.component';
import {environment} from "../environments/environment";
import {SaleModule} from "./stock_operations/sale/sale.module";

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatGridListModule} from "@angular/material/grid-list";
registerLocaleData(localeFr, 'fr');

;



@NgModule({

  declarations: [
    AppComponent, NavComponent, DashboardComponent,
  ],
  imports: [


    BrowserModule,
    ProductCommandModule,
    SaleModule,
    CategoryModule,
    ProductModule,

    MatGridListModule,
    MatListModule,

    CustomerModule,
    ProviderModule,
    ClassProductModule,

ManagerModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatListModule,
    MatDialogModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    GsNavModule,






  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory:configFactory,
    deps: [ConfigurationService],
    multi: true
  }],

  bootstrap: [AppComponent]
})
export class AppModule { }

export function configFactory(config: ConfigurationService) {
  return  () => config.loadConfigurations();
}
