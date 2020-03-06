





import { TestModule } from './test/test.module';
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



@NgModule({

  declarations: [
    AppComponent, NavComponent,
  ],
  imports: [


    BrowserModule,
    CategoryModule,
    ProductModule,

    CustomerModule,
    ProviderModule,
    ClassProductModule,


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
    TestModule,




  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: (configService: ConfigurationService) => () => configService.loadConfigurations(),
    deps: [ConfigurationService],
    multi: true
  }],

  bootstrap: [AppComponent]
})
export class AppModule { }
