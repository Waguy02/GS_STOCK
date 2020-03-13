import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import { ProductCommandListComponent } from './product-command-list/product-command-list.component';
import { ProductCommandEditComponent } from './product-command-edit/product-command-edit.component';
import { ProductCommandService } from './product-command.service';
import { PRODUCT_COMMAND_ROUTES } from './product-command.routes';
import {MatIconModule} from '@angular/material/icon';
import { MatAutocompleteModule, MatSpinner, MatProgressSpinnerModule, MatInputModule,
  MatCardModule,MatFormFieldModule,MatTableModule,MatPaginatorModule,MatSortModule, MatCheckboxModule, MatRadioModule ,MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatButtonModule, MatExpansionModule} from '@angular/material';
import Module = WebAssembly.Module;
import {ProductCommandUnitModule} from "./product_command_unit/product-command-unit.module";
import { ProductCommandPrintComponent } from './product-command-print/product-command-print.component';
import {MatDialogModule} from "@angular/material/dialog";
import {PaymentModule} from "../payment/payment.module";
@NgModule({
  imports: [
    CommonModule,
    ProductCommandUnitModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,
    FlexLayoutModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    MatTableModule,MatPaginatorModule,MatSortModule,
    MatFormFieldModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatDialogModule,
    ReactiveFormsModule ,
  PaymentModule,
    FormsModule,
    RouterModule.forChild(PRODUCT_COMMAND_ROUTES)
  ],
  declarations: [
    ProductCommandListComponent,
    ProductCommandEditComponent,
    ProductCommandPrintComponent
  ],
  entryComponents:[ProductCommandPrintComponent],
  providers: [ProductCommandService],
  exports: []
})
export class ProductCommandModule { }
