import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import { SaleUnitListComponent } from './sale-unit-list/sale-unit-list.component';
import { SaleUnitEditComponent } from './sale-unit-edit/sale-unit-edit.component';
import { SaleUnitService } from './sale-unit.service';
import { SALE_UNIT_ROUTES } from './sale-unit.routes';
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
    RouterModule.forChild(SALE_UNIT_ROUTES)
  ],
  declarations: [
    SaleUnitListComponent,
    SaleUnitEditComponent
  ],
  providers : [SaleUnitService],
  exports: [SaleUnitEditComponent, SaleUnitListComponent]
})
export class SaleUnitModule { }
