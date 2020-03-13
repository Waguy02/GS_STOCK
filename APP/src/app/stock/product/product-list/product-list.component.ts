import { ViewChild,Component, OnInit } from '@angular/core';
import { ProductFilter } from '../product-filter';
import { ProductService } from '../product.service';
import { Product } from '../product';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-product',
  styleUrls:['./product-list.scss'],
  templateUrl: 'product-list.component.html'
})
export class ProductListComponent implements OnInit {
filter = new ProductFilter(null);
selectedProduct: Product;
@ViewChild(MatPaginator,null) paginator: MatPaginator;
@ViewChild(MatSort,null) sort: MatSort;
dataSource: MatTableDataSource<Product>;
 feedback: any = {};
 displayedColumns: string[] = ['_id','name','description','category','unit_price','status','actions'];
 server_processing:boolean=false;

  nameFilter:GsFilter;

  descriptionFilter:GsFilter;

  unit_priceFilter:GsFilter;

  statusFilter:GsFilter;

  filteredValues: any;
initFilters(){

        this.nameFilter=new GsFilter();

        this.nameFilter.controls.val=new FormControl();


        this.descriptionFilter=new GsFilter();

        this.descriptionFilter.controls.val=new FormControl();


        this.unit_priceFilter=new GsFilter();

this.unit_priceFilter.controls.min=new FormControl();
this.unit_priceFilter.controls.max=new FormControl();
this.unit_priceFilter.controls.val=new FormControl();


        this.statusFilter=new GsFilter();

        this.statusFilter.controls.val=new FormControl();


    this.filteredValues={  name:this.nameFilter.values,      description:this.descriptionFilter.values,      unit_price:this.unit_priceFilter.values,      status:this.statusFilter.values,      }
  }
public applyFilter(){
    this.dataSource.filter = JSON.stringify(this.filteredValues);
  }
public  enableFiltering() {


        this.nameFilter.controls.val.valueChanges.subscribe((value) => {this.nameFilter.values.val = value;this.applyFilter();});




        this.descriptionFilter.controls.val.valueChanges.subscribe((value) => {this.descriptionFilter.values.val = value;this.applyFilter();});




        this.unit_priceFilter.controls.val.valueChanges.subscribe((value)=>{this.unit_priceFilter.values.val=value;this.applyFilter();})
        this.unit_priceFilter.controls.min.valueChanges.subscribe((value)=>{this.unit_priceFilter.values.min=value;this.applyFilter();})
        this.unit_priceFilter.controls.max.valueChanges.subscribe((value)=>{this.unit_priceFilter.values.max=value;this.applyFilter();})


        this.statusFilter.controls.val.valueChanges.subscribe((value) => {this.statusFilter.values.val = value;this.applyFilter();});




    this.dataSource.filterPredicate =
      (product: Product, filters: string) => {
        const parsedFilters = JSON.parse(filters);

        let nameCheck =true

        let descriptionCheck =true

        let unit_priceCheck =true

        let statusCheck =true









              if (parsedFilters.name.val) {
                nameCheck =!product.name?false: product.name.toLowerCase().includes(parsedFilters.name.val.toLowerCase());
              }








              if (parsedFilters.description.val) {
                descriptionCheck =!product.name?false: product.description.toLowerCase().includes(parsedFilters.description.val.toLowerCase());
              }


          if (parsedFilters.unit_price.val) {
            unit_priceCheck =!product.unit_price?false:product.unit_price==parsedFilters.unit_price.val;
          } else {
            if (parsedFilters.unit_price.min) {
              unit_priceCheck = unit_priceCheck && (parsedFilters.unit_price.min<= product.unit_price);
            }
            if (parsedFilters.unit_price.max) {
              unit_priceCheck = unit_priceCheck && (parsedFilters.unit_price.max >= product.unit_price);
            }
          }






            if (parsedFilters.status.val!=undefined&&parsedFilters.status.val!=null) {
              statusCheck =(product.status==null||product.status==undefined)?false: product.status==parsedFilters.status.val;
            }

      return   nameCheck&&descriptionCheck&&unit_priceCheck&&statusCheck&&true;
    }
}


  get productList(): Product[] {
    return this.productService.productList;
  }
constructor(private productService: ProductService) {
}
ngOnInit() {
this.initFilters();
}
ngAfterViewInit() {
    this.search();
  }
search(): void {
    this.productService.load(this.filter).then((data)=>{
setTimeout( ()=>{
          this.dataSource=new MatTableDataSource<Product>(this.productService.productList);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
          this.enableFiltering();
},
        200)
})
}
select(selected: Product): void {
    this.selectedProduct = selected;
  }
delete(product: Product): void {
    if (confirm('Etes-vous sûr?')) {
      this.productService.delete(product).subscribe(() => {
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
