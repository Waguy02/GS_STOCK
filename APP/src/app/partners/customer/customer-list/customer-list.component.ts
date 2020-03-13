import { ViewChild, Component, OnInit } from '@angular/core';
import { CustomerFilter } from '../customer-filter';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-customer',
  styleUrls: ['./customer-list.scss'],
  templateUrl: 'customer-list.component.html'
})
export class CustomerListComponent implements OnInit {
filter = new CustomerFilter(null);
selectedCustomer: Customer;
@ViewChild(MatPaginator, null) paginator: MatPaginator;
@ViewChild(MatSort, null) sort: MatSort;
dataSource: MatTableDataSource<Customer>;
 feedback: any = {};
 displayedColumns: string[] = ['_id', 'name', 'actions'];
 server_processing = false;

  nameFilter: GsFilter;

  statusFilter: GsFilter;

  filteredValues: any;
initFilters() {

        this.nameFilter = new GsFilter();

        this.nameFilter.controls.val = new FormControl();


        this.statusFilter = new GsFilter();

        this.statusFilter.controls.val = new FormControl();


        this.filteredValues = {  name: this.nameFilter.values,      status: this.statusFilter.values,      };
  }
public applyFilter() {
    this.dataSource.filter = JSON.stringify(this.filteredValues);
  }
public  enableFiltering() {


        this.nameFilter.controls.val.valueChanges.subscribe((value) => {this.nameFilter.values.val = value; this.applyFilter(); });




        this.statusFilter.controls.val.valueChanges.subscribe((value) => {this.statusFilter.values.val = value; this.applyFilter(); });




        this.dataSource.filterPredicate =
      (customer: Customer, filters: string) => {
        const parsedFilters = JSON.parse(filters);

        let nameCheck = true;

        let statusCheck = true;









        if (parsedFilters.name.val) {
                nameCheck = !customer.name ? false : customer.name.toLowerCase().includes(parsedFilters.name.val.toLowerCase());
              }






        if (parsedFilters.status.val != undefined && parsedFilters.status.val != null) {
              statusCheck = (customer.status == null || customer.status == undefined) ? false : customer.status == parsedFilters.status.val;
            }

        return   nameCheck && statusCheck && true;
    };
}


  get customerList(): Customer[] {
    return this.customerService.customerList;
  }
constructor(private customerService: CustomerService) {
}
ngOnInit() {
this.initFilters();
}
ngAfterViewInit() {
    this.search();
  }
search(): void {
    this.customerService.load(this.filter).then((data) => {
setTimeout( () => {
          this.dataSource = new MatTableDataSource<Customer>(this.customerService.customerList);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
          this.enableFiltering();
},
        200);
});
}
select(selected: Customer): void {
    this.selectedCustomer = selected;
  }
delete(customer: Customer): void {
    if (confirm('Etes-vous sûr?')) {
      this.customerService.delete(customer).subscribe(() => {
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
  if (this.controls.min) {this.controls.min.setValue(undefined); }
  if (this.controls.max) {this.controls.max.setValue(undefined); }
  if (this.controls.val) {this.controls.val.setValue(undefined); }
}


}
