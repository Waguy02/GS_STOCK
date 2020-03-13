import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl} from '@angular/forms';
import {debounceTime, finalize, switchMap, tap} from 'rxjs/operators';
import {ProductCommandUnitService} from '../product-command-unit.service';
import {ProductCommandUnit} from '../product-command-unit';

import {ProductService} from "src/app/stock/product/product.service";
import {Product} from "src/app/stock/product/product";
import {ProductFilter} from "src/app/stock/product/product-filter";
import {ProductCommand} from "src/app/stock_operations/product_command/product-command";
import {ProductCommandFilter} from "src/app/stock_operations/product_command/product-command-filter";
import {ProductCommandService} from "../../product-command.service";


const caster=require('angular-crud/gs-cast');

@Component({
  selector: 'app-product-command-unit-edit',
  styleUrls:['./product-command-unit-edit.scss'],
  templateUrl: './product-command-unit-edit.component.html'
})
export class ProductCommandUnitEditComponent implements OnInit {
id: string;
  product_command_unit: ProductCommandUnit;

  @Input()
  product_command:ProductCommand;
  feedback: any = {};
constructor(
    private route: ActivatedRoute,
    private router: Router,
    private product_command_unitService: ProductCommandUnitService,
     private productService: ProductService,  private product_commandService: ProductCommandService,
    )
    {
  }
ngOnInit() {

      this.product_command_unit=new ProductCommandUnit();
        this.configureProductInput()

        this.configureProductCommandInput();

}
add() {
    this.product_command.add(this.product_command_unit);
   this.ngOnInit();
}
cancel() {
    this.router.navigate(['/stock_operations/product_command/productCommandUnits']);
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
    this.product_command_unit.product_class.product=this.selectedProduct;
  }
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

filteredProductCommandList:ProductCommand[]=new Array<ProductCommand>();
  product_commandInput:FormControl;
  selectedProductCommand:ProductCommand;
  isLoadingProductCommand=false;
product_commandClick(event: any) {
    this.selectedProductCommand= event.option.value;
  }
checkProductCommand() {
    if (!this.selectedProductCommand|| this.selectedProductCommand!== this.product_commandInput.value) {
      this.product_commandInput.setValue(null);
      this.selectedProductCommand= null;
      return;
    }

  }
displayProductCommand(product_command:ProductCommand) {
if (product_command) return product_command
}
  configureProductCommandInput(){
    this.product_commandInput=new FormControl();
this.product_commandInput.valueChanges
    .pipe(
      debounceTime(500),
      tap(() => {this.isLoadingProductCommand= true;}),
      switchMap(value => this.product_commandService.find(new ProductCommandFilter())
      .pipe(
        finalize(() => this.isLoadingProductCommand= false),
        )
        )
      )
    .subscribe((resultList =>{
      caster.arrayCast(resultList,ProductCommand);
      this.filteredProductCommandList=resultList;}))
}

}
