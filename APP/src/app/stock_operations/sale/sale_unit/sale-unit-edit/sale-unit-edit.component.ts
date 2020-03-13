import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {FormControl, Validators} from '@angular/forms';
import { map, switchMap, debounceTime, tap, finalize } from 'rxjs/operators';
import { of } from 'rxjs';
const caster=require('angular-crud/gs-cast');
import { SaleUnitService } from '../sale-unit.service';
import { SaleUnit } from '../sale-unit';

import { ProductService } from "src/app/stock/product/product.service";
import { Product} from "src/app/stock/product/product";
import { ProductFilter} from "src/app/stock/product/product-filter";

import { SaleService } from "src/app/stock_operations/sale/sale.service";
import { Sale} from "src/app/stock_operations/sale/sale";
import { SaleFilter} from "src/app/stock_operations/sale/sale-filter";
import {ClassProductService} from "../../../../stock/class_product/class-product.service";
import {ClassProduct} from "../../../../stock/class_product/class-product";
import {ClassProductFilter} from "../../../../stock/class_product/class-product-filter";

@Component({
  selector: 'app-sale-unit-edit',
  styleUrls:['./sale-unit-edit.scss'],
  templateUrl: './sale-unit-edit.component.html'
})
export class SaleUnitEditComponent implements OnInit {
  id: string;
  sale_unit: SaleUnit;

  @Input()
  sale:Sale;
  feedback: any = {};
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sale_unitService: SaleUnitService,
    private productService: ClassProductService,  private saleService: SaleService,
  )
  {
  }
  ngOnInit() {

    this.sale_unit=new SaleUnit();
    this.configureProductInput()

    this.configureSaleInput();

  }
  add() {
    this.sale.add(this.sale_unit);
    this.ngOnInit();
  }
  cancel() {
    this.router.navigate(['/stock_operations/sale/saleUnits']);
  }

  filteredClassProductList:ClassProduct[]=new Array<ClassProduct>();
  productInput:FormControl;
  quantityInput:FormControl=new FormControl();
  selectedProduct:ClassProduct;
  isLoadingProduct=false;
  productClick(event: any) {
    this.selectedProduct= event.option.value;
    this.sale_unit.unit_price=this.selectedProduct.unit_price
    this.sale_unit.quantity=1;
    this.quantityInput.setValidators([Validators.max(this.selectedProduct.quantity),Validators.min(1)]);
  }
  checkProduct() {
    if (!this.selectedProduct|| this.selectedProduct!== this.productInput.value) {
      this.productInput.setValue(null);
      this.selectedProduct= null;
      return;
    }
    this.sale_unit.product_class=this.selectedProduct;
  }
  displayProduct(product:ClassProduct) {
    if (product) return product.product.name;
  }
  configureProductInput(){
    this.productInput=new FormControl();
    this.productInput.valueChanges
      .pipe(
        debounceTime(500),
        tap(() => {this.isLoadingProduct= true;}),
        switchMap(value => {
          let filter=new ClassProductFilter(value);
          if(value) {
            filter.product = value.toString();
            filter.label = value.toString();
          }
          return this.productService.find(filter)
          .pipe(
            finalize(() => this.isLoadingProduct= false),
          )}
        )
      )
      .subscribe((resultList =>{
        caster.arrayCast(resultList,Product);
        this.filteredClassProductList=resultList;}))
  }

  filteredSaleList:Sale[]=new Array<Sale>();
  saleInput:FormControl;
  selectedSale:Sale;
  isLoadingSale=false;
  saleClick(event: any) {
    this.selectedSale= event.option.value;
  }
  checkSale() {
    if (!this.selectedSale|| this.selectedSale!== this.saleInput.value) {
      this.saleInput.setValue(null);
      this.selectedSale= null;
      return;
    }

  }
  displaySale(sale:Sale) {
    if (sale) return sale
  }
  configureSaleInput(){
    this.saleInput=new FormControl();
    this.saleInput.valueChanges
      .pipe(
        debounceTime(500),
        tap(() => {this.isLoadingSale= true;}),
        switchMap(value => this.saleService.find(new SaleFilter())
          .pipe(
            finalize(() => this.isLoadingSale= false),
          )
        )
      )
      .subscribe((resultList =>{
        caster.arrayCast(resultList,Sale);
        this.filteredSaleList=resultList;}))
  }

}
