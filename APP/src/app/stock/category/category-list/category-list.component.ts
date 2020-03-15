import { ViewChild,Component, OnInit } from '@angular/core';
import { CategoryFilter } from '../category-filter';
import { CategoryService } from '../category.service';
import { Category } from '../category';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-category',
  styleUrls:['./category-list.scss'],
  templateUrl: 'category-list.component.html'
})
export class CategoryListComponent implements OnInit {
filter = new CategoryFilter(null);
selectedCategory: Category;
@ViewChild(MatPaginator,null) paginator: MatPaginator;
@ViewChild(MatSort,null) sort: MatSort;
dataSource: MatTableDataSource<Category>;
 feedback: any = {};
 displayedColumns: string[] = ['_id','name','description','actions'];
 server_processing:boolean=false;

  nameFilter:GsFilter;

  descriptionFilter:GsFilter;

  statusFilter:GsFilter;

  filteredValues: any;
initFilters(){

        this.nameFilter=new GsFilter();

        this.nameFilter.controls.val=new FormControl();


        this.descriptionFilter=new GsFilter();

        this.descriptionFilter.controls.val=new FormControl();


        this.statusFilter=new GsFilter();

        this.statusFilter.controls.val=new FormControl();


    this.filteredValues={  name:this.nameFilter.values,      description:this.descriptionFilter.values,      status:this.statusFilter.values,      }
  }
public applyFilter(){
    this.dataSource.filter = JSON.stringify(this.filteredValues);
  }
public  enableFiltering() {


        this.nameFilter.controls.val.valueChanges.subscribe((value) => {this.nameFilter.values.val = value;this.applyFilter();});




        this.descriptionFilter.controls.val.valueChanges.subscribe((value) => {this.descriptionFilter.values.val = value;this.applyFilter();});




        this.statusFilter.controls.val.valueChanges.subscribe((value) => {this.statusFilter.values.val = value;this.applyFilter();});




    this.dataSource.filterPredicate =
      (category: Category, filters: string) => {
        const parsedFilters = JSON.parse(filters);

        let nameCheck =true

        let descriptionCheck =true

        let statusCheck =true









              if (parsedFilters.name.val) {
                nameCheck =!category.name?false: category.name.toLowerCase().includes(parsedFilters.name.val.toLowerCase());
              }








              if (parsedFilters.description.val) {
                descriptionCheck =!category.name?false: category.description.toLowerCase().includes(parsedFilters.description.val.toLowerCase());
              }




              if (parsedFilters.status.val) {
                statusCheck =!category.status?false:category.status==parsedFilters.status.val;
              }

      return   nameCheck&&descriptionCheck&&statusCheck&&true;
    }
}


  get categoryList(): Category[] {
    return this.categoryService.categoryList;
  }
constructor(private categoryService: CategoryService) {
}
ngOnInit() {
this.initFilters();
}
ngAfterViewInit() {
    this.search();
  }
search(): void {
    this.categoryService.load(this.filter).then((data)=>{
setTimeout( ()=>{

          this.dataSource=new MatTableDataSource<Category>(this.categoryService.categoryList);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
          this.enableFiltering();
},
        200)
})
}
select(selected: Category): void {
    this.selectedCategory = selected;
  }
delete(category: Category): void {
    if (confirm('Etes-vous sûr?')) {
      this.categoryService.delete(category).subscribe(() => {
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
