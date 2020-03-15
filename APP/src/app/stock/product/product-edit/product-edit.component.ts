import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { map, switchMap, debounceTime, tap, finalize } from 'rxjs/operators';
import { of } from 'rxjs';
const caster=require('angular-crud/gs-cast');
import { ProductService } from '../product.service';
import { Product } from '../product';

  import { CategoryService } from "src/app/stock/category/category.service";
import { Category} from "src/app/stock/category/category";
import { CategoryFilter} from "src/app/stock/category/category-filter";

@Component({
  selector: 'app-product-edit',
  styleUrls:['./product-edit.scss'],
  templateUrl: './product-edit.component.html'
})
export class ProductEditComponent implements OnInit {
id: string;
  product: Product;
  feedback: any = {};
constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
     private categoryService: CategoryService,
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
          if (id === 'new') { return of(new Product()); }
          return this.productService.findById(id);
        })
      )
      .subscribe(product => {
          this.product = product;
          this.feedback = {};
        },
        err => {
          this.feedback = {type: 'warning', message: 'Erreur lors du chargement'};
        }
      );

        this.configureCategoryInput()

}
save() {
    this.productService.save(this.product).subscribe(
      product => {
        this.product = product;
        this.feedback = {type: 'success', message: 'Enregistrement effectué avec succès'};
        setTimeout(() => {
          this.router.navigate(['/stock/products']);
        }, 1000);
      },
      err => {
        this.feedback = {type: 'warning', message: "Erreur lors de l'enregistrement"};
      }
    );
  }
cancel() {
    this.router.navigate(['/stock/products']);
  }

filteredCategoryList:Category[]=new Array<Category>();
  categoryInput:FormControl;
  selectedCategory:Category;
  isLoadingCategory=false;
categoryClick(event: any) {
    this.selectedCategory= event.option.value;
  }
checkCategory() {
    if (!this.selectedCategory|| this.selectedCategory!== this.categoryInput.value) {
      this.categoryInput.setValue(null);
      this.selectedCategory= null;
      return;
    }
    this.product.category=this.selectedCategory;
  }
displayCategory(category:Category) {
if (category) return category.name
}
  configureCategoryInput(){
    this.categoryInput=new FormControl();
this.categoryInput.valueChanges
    .pipe(
      debounceTime(500),
      tap(() => {this.isLoadingCategory= true;}),
      switchMap(value => this.categoryService.find(new CategoryFilter(value))
      .pipe(
        finalize(() => this.isLoadingCategory= false),
        )
        )
      )
    .subscribe((resultList =>{
      caster.arrayCast(resultList,Category);
      this.filteredCategoryList=resultList;}))
}

}
