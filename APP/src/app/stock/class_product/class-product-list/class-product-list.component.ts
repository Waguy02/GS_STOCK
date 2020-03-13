import { ViewChild,Component, OnInit } from '@angular/core';
import { ClassProductFilter } from '../class-product-filter';
import { ClassProductService } from '../class-product.service';
import { ClassProduct } from '../class-product';

  import { ProductService } from "src/app/stock/product/product.service";
  import { Product} from "src/app/stock/product/product";
  import { ProductFilter} from "src/app/stock/product/product-filter";

import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { FormControl } from '@angular/forms';
const caster=require('angular-crud/gs-cast');
import {debounceTime, finalize, switchMap, tap} from "rxjs/operators";
@Component({
  selector: 'app-class-product',
  styleUrls:['./class-product-list.scss'],
  templateUrl: 'class-product-list.component.html'
})
export class ClassProductListComponent implements OnInit {
filter = new ClassProductFilter(null);
selectedClassProduct: ClassProduct;
@ViewChild(MatPaginator,null) paginator: MatPaginator;
@ViewChild(MatSort,null) sort: MatSort;
dataSource: MatTableDataSource<ClassProduct>;
 feedback: any = {};
 displayedColumns: string[] = ['product','label','unit_price','quantity','status','date_intrance','actions'];
 server_processing:boolean=false;

  productFilter:GsFilter;

  labelFilter:GsFilter;

  filteredValues: any
  ;



      filteredProductList:Product[]=new Array<Product>();
      productInput:FormControl;
      selectedProduct:Product;
      isLoadingProduct=false;
      productClick(event: any) {
        this.selectedProduct= event.option.value;
        this.applyFilter();
      }
      checkProduct() {
        if (!this.selectedProduct|| this.selectedProduct!== this.productInput.value) {
          this.productInput.setValue(null);
          this.selectedProduct= null;
          return;
        }

      }
      resetProductFilter(){
        this.selectedProduct=null ;
        this.productInput.setValue(this.selectedProduct);
        this.applyFilter();
      }
      displayProduct(product:Product) {
        if (product) return product
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




  initFilters(){

this.labelFilter=new GsFilter();
        this.labelFilter.controls.val=new FormControl();
    this.filteredValues={   product: this.selectedProduct,
      label:this.labelFilter.values,      }

  }
public applyFilter(){
    this.dataSource.filter = JSON.stringify(this.filteredValues);
  }
public  enableFiltering() {




        this.labelFilter.controls.val.valueChanges.subscribe((value) => {this.labelFilter.values.val = value;this.applyFilter();});



    this.dataSource.filterPredicate =
      (class_product: ClassProduct, filters: string) => {
        const parsedFilters = JSON.parse(filters);

        let productCheck =true

        let labelCheck =true

        let statutCheck=class_product.status;






          productCheck =(this.selectedProduct)?(this.selectedProduct._id==class_product.product._id):true;




              if (parsedFilters.label.val) {
                labelCheck =!class_product.label?false: class_product.label.toLowerCase().includes(parsedFilters.label.val.toLowerCase());
              }



return   productCheck&&labelCheck&&statutCheck&&true;
     }
}

get class_productList(): ClassProduct[] {
    return this.class_productService.class_productList;
  }
constructor(private class_productService: ClassProductService,
   private productService: ProductService,
) {
}
ngOnInit() {
this.initFilters();

      this.configureProductInput();


}
ngAfterViewInit() {
    this.search();
  }
search(): void {
    this.class_productService.load(this.filter).then((data)=>{
setTimeout( ()=>{
          this.dataSource=new MatTableDataSource<ClassProduct>(this.class_productService.class_productList);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
          this.enableFiltering();
          this.applyFilter()  },
        200)
})
}
select(selected: ClassProduct): void {
    this.selectedClassProduct = selected;
  }
delete(class_product: ClassProduct): void {
    if (confirm('Etes-vous sûr?')) {
      this.class_productService.delete(class_product).subscribe(() => {
          this.feedback = {type: 'success', message: 'Suppression effectuée avec succès!'};
          setTimeout(() => {
            this.search();
          }, 1000);
        },
        err => {
          this.feedback = {type: 'warning', message: 'Erreur lors de la suppression.'};
        }
      );
    }
  }
}
export class GsFilter{
values: {
    min: any;
    max: any;
    val: any;
  }={
  min:undefined,
  max:undefined,
  val:undefined,
};
controls: {
    min: FormControl;
    max: FormControl;
    val: FormControl;
  }={
    min:null,
    max:null,
    val:null,
}
reset(){
  if (this.controls.min)this.controls.min.setValue(undefined);
  if(this.controls.max)this.controls.max.setValue(undefined);
  if(this.controls.val)this.controls.val.setValue(undefined);
}
}
