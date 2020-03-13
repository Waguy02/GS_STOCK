import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import { ProviderListComponent } from './provider-list/provider-list.component';
import { ProviderEditComponent } from './provider-edit/provider-edit.component';
import { ProviderService } from './provider.service';
import { PROVIDER_ROUTES } from './provider.routes';
import {MatIconModule} from '@angular/material/icon';
import { MatAutocompleteModule, MatSpinner, MatProgressSpinnerModule, MatInputModule,
  MatCardModule,MatFormFieldModule,MatTableModule,MatPaginatorModule,MatSortModule, MatCheckboxModule, MatRadioModule ,MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatButtonModule, MatExpansionModule} from '@angular/material';
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
    MatTableModule,MatPaginatorModule,MatSortModule,
    MatFormFieldModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    ReactiveFormsModule ,
    FormsModule,
    RouterModule.forChild(PROVIDER_ROUTES)
  ],
  declarations: [
    ProviderListComponent,
    ProviderEditComponent
  ],
  providers: [ProviderService],
  exports: []
})
export class ProviderModule { }
