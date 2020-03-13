import {ViewChild, Component, OnInit, Input} from '@angular/core';
import { SaleUnitFilter } from '../sale-unit-filter';
import { SaleUnitService } from '../sale-unit.service';
import { SaleUnit } from '../sale-unit';

import { ProductService } from 'src/app/stock/product/product.service';
import { Product} from 'src/app/stock/product/product';
import { ProductFilter} from 'src/app/stock/product/product-filter';

import { SaleService } from 'src/app/stock_operations/sale/sale.service';
import { Sale} from 'src/app/stock_operations/sale/sale';
import { SaleFilter} from 'src/app/stock_operations/sale/sale-filter';

import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { FormControl } from '@angular/forms';
const caster = require('angular-crud/gs-cast');
import {debounceTime, finalize, switchMap, tap} from 'rxjs/operators';
@Component({
  selector: 'app-sale-unit',
  styleUrls: ['./sale-unit-list.scss'],
  templateUrl: 'sale-unit-list.component.html'
})
export class SaleUnitListComponent implements OnInit {
  filter = new SaleUnitFilter();
  selectedSaleUnit: SaleUnit;
  @ViewChild(MatPaginator, null) paginator: MatPaginator;
  @ViewChild(MatSort, null) sort: MatSort;


  print_mode:boolean=false;


  dataSource: MatTableDataSource<SaleUnit>;
  feedback: any = {};
  displayedColumns: string[] = [ 'product',  'quantity', 'unit_price', 'total','actions'];
  server_processing = false;

  filteredValues: any;

  @Input()
  sale:Sale;

  initFilters() {



    this.filteredValues = {  };

  }
  public applyFilter() {
    this.dataSource.filter = JSON.stringify(this.filteredValues);
  }
  public  enableFiltering() {


    this.dataSource.filterPredicate =
      (sale_unit: SaleUnit, filters: string) => {
        const parsedFilters = JSON.parse(filters);



        return   true;
      };
  }

  get sale_unitList(): SaleUnit[] {
    return this.sale_unitService.sale_unitList;
  }
  constructor(private sale_unitService: SaleUnitService,

  ) {



  }
  ngOnInit(){

    this.initData();
    this.initFilters()

  }
  ngAfterViewInit() {
  }

  initData() : void {


    this.dataSource = this.sale.sale_units_datasource;
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.enableFiltering()


  };
  select(selected: SaleUnit) : void {
    this.selectedSaleUnit = selected;
  };
  remove(sale_unit : SaleUnit ): void {
    if(! confirm("Voulez-vous vraiment supprimer?"))return;
    this.sale.remove(sale_unit);


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
