import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import { SaleListComponent } from './sale-list/sale-list.component';
import { SaleEditComponent } from './sale-edit/sale-edit.component';
import { SaleService } from './sale.service';
import { SALE_ROUTES } from './sale.routes';
import {MatIconModule} from '@angular/material/icon';
import { MatAutocompleteModule, MatSpinner, MatProgressSpinnerModule, MatInputModule,
  MatCardModule,MatFormFieldModule,MatTableModule,MatPaginatorModule,MatSortModule, MatCheckboxModule, MatRadioModule ,MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatButtonModule, MatExpansionModule} from '@angular/material';
import Module = WebAssembly.Module;
import {SaleUnitModule} from "./sale_unit/sale-unit.module";
import { SalePrintComponent } from './sale-print/sale-print.component';
import {MatDialogModule} from "@angular/material/dialog";
import {PaymentModule} from "../payment/payment.module";
@NgModule({
  imports: [
    CommonModule,
    SaleUnitModule,
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
    RouterModule.forChild(SALE_ROUTES)
  ],
  declarations: [
    SaleListComponent,
    SaleEditComponent,
    SalePrintComponent
  ],
  entryComponents:[SalePrintComponent],
  providers : [SaleService],
  exports: []
})
export class SaleModule { }
