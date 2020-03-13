import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import { ProductCommandUnitListComponent } from './product-command-unit-list/product-command-unit-list.component';
import { ProductCommandUnitEditComponent } from './product-command-unit-edit/product-command-unit-edit.component';
import { ProductCommandUnitService } from './product-command-unit.service';
import { PRODUCT_COMMAND_UNIT_ROUTES } from './product-command-unit.routes';
import {MatIconModule} from '@angular/material/icon';
import { MatAutocompleteModule, MatSpinner, MatProgressSpinnerModule, MatInputModule,
  MatCardModule, MatFormFieldModule, MatTableModule, MatPaginatorModule, MatSortModule, MatCheckboxModule, MatRadioModule , MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatButtonModule, MatExpansionModule} from '@angular/material';
import Module = WebAssembly.Module;
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
    MatTableModule, MatPaginatorModule, MatSortModule,
    MatFormFieldModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    ReactiveFormsModule ,
    FormsModule,
    RouterModule.forChild(PRODUCT_COMMAND_UNIT_ROUTES)
  ],
  declarations: [
    ProductCommandUnitListComponent,
    ProductCommandUnitEditComponent
  ],
  providers: [ProductCommandUnitService],
  exports: [ProductCommandUnitEditComponent, ProductCommandUnitListComponent]
})
export class ProductCommandUnitModule { }
