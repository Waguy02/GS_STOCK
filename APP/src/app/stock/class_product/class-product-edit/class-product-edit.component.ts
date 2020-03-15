import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { map, switchMap, debounceTime, tap, finalize } from 'rxjs/operators';
import { of } from 'rxjs';
const caster=require('angular-crud/gs-cast');
import { ClassProductService } from '../class-product.service';
import { ClassProduct } from '../class-product';

  import { ProductService } from "src/app/stock/product/product.service";
import { Product} from "src/app/stock/product/product";
import { ProductFilter} from "src/app/stock/product/product-filter";
import {Sale} from "../../../stock_operations/sale/sale";
import {SaleUnitService} from "../../../stock_operations/sale/sale_unit/sale-unit.service";
import {MatTableDataSource} from "@angular/material/table";
import {SaleUnit} from "../../../stock_operations/sale/sale_unit/sale-unit";
import {ProductCommandUnitService} from "../../../stock_operations/product_command/product_command_unit/product-command-unit.service";
import {ProductCommand} from "../../../stock_operations/product_command/product-command";
import {ProductCommandUnit} from "../../../stock_operations/product_command/product_command_unit/product-command-unit";

@Component({
  selector: 'app-class-product-edit',
  styleUrls:['./class-product-edit.scss'],
  templateUrl: './class-product-edit.component.html'
})
export class ClassProductEditComponent implements OnInit {

  class_product: ClassProduct;
  feedback: any = {};
  sale:Sale;
  command_unit:ProductCommandUnit;
constructor(
    private route: ActivatedRoute,
    private router: Router,
    private class_productService: ClassProductService,
     private productService: ProductService,
    private saleUnitService:SaleUnitService,
    private commandUnitService:ProductCommandUnitService,

    )
    {
  }
ngOnInit() {
    this
      .route
      .params
      .pipe(
        map(p => p.id),
        switchMap(id => {
          if (id === 'new') { return of(new ClassProduct()); }
         //else


          return this.class_productService.findById(id);
        })
      )
      .subscribe(class_product => {
          this.class_product = class_product;
          if(this.class_product._id){
            this.loadSaleUnits();
            this.loadCommand();
          }
          if(this.class_product._id)this.productInput.setValue(this.class_product.product);
          this.feedback = {};
        },
        err => {
          this.feedback = {type: 'warning', message: 'Erreur lors du chargement'};
        }
      );

        this.configureProductInput()!

}
save() {
    this.class_productService.save(this.class_product).subscribe(
      class_product => {
        this.class_product = class_product;
        this.feedback = {type: 'success', message: 'Enregistrement effectué avec succès'};
        setTimeout(() => {
          this.ngOnInit();
          //this.router.navigate(['/stock/classProducts']);
        }, 1000);
      },
      err => {
        this.feedback = {type: 'warning', message: "Erreur lors de l'enregistrement"};
      }
    );
  }
cancel() {
    this.router.navigate(['/stock/classProducts']);
  }

filteredProductList:Product[]=new Array<Product>();
  productInput:FormControl;
  selectedProduct:Product;
  isLoadingProduct=false;
productClick(event: any) {
    this.selectedProduct= event.option.value;
  }
checkProduct() {
    if (!this.selectedProduct|| this.selectedProduct!== this.productInput.value) {
      this.productInput.setValue(null);
      this.selectedProduct= null;
      return;
    }
    this.class_product.product=this.selectedProduct;
  }

loadSaleUnits(){

  this.saleUnitService.findByProductClass(this.class_product._id).subscribe(saleUnits=>{
    if(saleUnits.length<1){
      this.sale=undefined;
    }
    this.sale=saleUnits[0].sale;

    this.sale.sale_units_datasource=new MatTableDataSource<SaleUnit>(saleUnits);

    Sale.calculateAmounts(this.sale);




  },err => {
      this.feedback = {type: 'warning', message: "Erreur lors du Chargement des informations de vente:"+ err.message};
    }




  )

}

loadCommand(){

  this.commandUnitService.findByProductClass(this.class_product._id).subscribe(
    data=>{this.command_unit=data;console.log(this.command_unit)},
    err=>{
      this.feedback = {type: 'warning', message: 'Erreur lors du chargement des informations sur la commande :'+err.message};
    }


  )}


displayProduct(product:Product) {
if (product) return product.name;
}
  configureProductInput(){
    this.productInput=new FormControl();
this.productInput.valueChanges
    .pipe(
      debounceTime(500),
      tap(() => {this.isLoadingProduct= true;}),
      switchMap(value => this.productService.find(new ProductFilter(value))
      .pipe(
        finalize(() => this.isLoadingProduct= false),
        )
        )
      )
    .subscribe((resultList =>{
      caster.arrayCast(resultList,Product);
      this.filteredProductList=resultList;}))
}

}
