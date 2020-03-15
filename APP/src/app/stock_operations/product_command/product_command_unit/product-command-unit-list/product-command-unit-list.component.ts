import {ViewChild, Component, OnInit, Input} from '@angular/core';
import { ProductCommandUnitFilter } from '../product-command-unit-filter';
import { ProductCommandUnitService } from '../product-command-unit.service';
import { ProductCommandUnit } from '../product-command-unit';

import { ProductService } from 'src/app/stock/product/product.service';
import { Product} from 'src/app/stock/product/product';
import { ProductFilter} from 'src/app/stock/product/product-filter';

import { ProductCommandService } from 'src/app/stock_operations/product_command/product-command.service';
import { ProductCommand} from 'src/app/stock_operations/product_command/product-command';
import { ProductCommandFilter} from 'src/app/stock_operations/product_command/product-command-filter';

import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { FormControl } from '@angular/forms';
const caster = require('angular-crud/gs-cast');
import {debounceTime, finalize, switchMap, tap} from 'rxjs/operators';
@Component({
  selector: 'app-product-command-unit',
  styleUrls: ['./product-command-unit-list.scss'],
  templateUrl: 'product-command-unit-list.component.html'
})
export class ProductCommandUnitListComponent implements OnInit {
filter = new ProductCommandUnitFilter();
selectedProductCommandUnit: ProductCommandUnit;
@ViewChild(MatPaginator, null) paginator: MatPaginator;
@ViewChild(MatSort, null) sort: MatSort;


print_mode:boolean=false;


  dataSource: MatTableDataSource<ProductCommandUnit>;
 feedback: any = {};
 displayedColumns: string[] = [ 'product',  'quantity', 'unit_price', 'total','actions'];
 server_processing = false;

  filteredValues: any;

  @Input()
  command:ProductCommand;

  initFilters() {



    this.filteredValues = {  };

  }
public applyFilter() {
    this.dataSource.filter = JSON.stringify(this.filteredValues);
  }
public  enableFiltering() {


    this.dataSource.filterPredicate =
      (product_command_unit: ProductCommandUnit, filters: string) => {
        const parsedFilters = JSON.parse(filters);



        return   true;
     };
}

get product_command_unitList(): ProductCommandUnit[] {
    return this.product_command_unitService.product_command_unitList;
  }
constructor(private product_command_unitService: ProductCommandUnitService,

) {



}
ngOnInit(){

  this.initData();
this.initFilters()

}
ngAfterViewInit() {
  }

initData() : void {


          this.dataSource = this.command.command_units_datasource;
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
          this.enableFiltering()


};
select(selected: ProductCommandUnit) : void {
    this.selectedProductCommandUnit = selected;
  };
remove(product_command_unit : ProductCommandUnit ): void {
  if(! confirm("Voulez-vous vraiment supprimer?"))return;
this.command.remove(product_command_unit);


};


}
export class GsFilter {
values: {
    min: any;
    max: any;
    val: any;
  } = {
  min: undefined,
  max: undefined,
  val: undefined,
};
controls: {
    min: FormControl;
    max: FormControl;
    val: FormControl;
  } = {
    min: null,
    max: null,
    val: null,
};
reset() {
  if (this.controls.min) {this.controls.min.setValue(undefined) }
  if (this.controls.max) {this.controls.max.setValue(undefined) }
  if (this.controls.val) {this.controls.val.setValue(undefined) }
}
}
