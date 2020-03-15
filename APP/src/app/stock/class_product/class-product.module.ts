import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import { ClassProductListComponent } from './class-product-list/class-product-list.component';
import { ClassProductEditComponent } from './class-product-edit/class-product-edit.component';
import { ClassProductService } from './class-product.service';
import { CLASS_PRODUCT_ROUTES } from './class-product.routes';
import {MatIconModule} from '@angular/material/icon';
import { MatAutocompleteModule, MatSpinner, MatProgressSpinnerModule, MatInputModule,
  MatCardModule,MatFormFieldModule,MatTableModule,MatPaginatorModule,MatSortModule, MatCheckboxModule, MatRadioModule ,MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatButtonModule, MatExpansionModule} from '@angular/material';
import Module = WebAssembly.Module;
import {SaleUnitModule} from "../../stock_operations/sale/sale_unit/sale-unit.module";
@NgModule({
  imports: [
    CommonModule,
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
    ReactiveFormsModule ,
    FormsModule,
    SaleUnitModule,
    RouterModule.forChild(CLASS_PRODUCT_ROUTES)
  ],
  declarations: [
    ClassProductListComponent,
    ClassProductEditComponent
  ],
  providers: [ClassProductService],
  exports: []
})
export class ClassProductModule { }
