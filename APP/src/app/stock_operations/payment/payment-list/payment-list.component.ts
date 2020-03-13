import {ViewChild, Component, OnInit, Input} from '@angular/core';
import { PaymentFilter } from '../payment-filter';
import { PaymentService } from '../payment.service';
import { Payment } from '../payment';

  import { ManagerService } from "src/app/params/manager/manager.service";
  import { Manager} from "src/app/params/manager/manager";
  import { ManagerFilter} from "src/app/params/manager/manager-filter";

  import { ProductCommandService } from "src/app/stock_operations/product_command/product-command.service";
  import { ProductCommand} from "src/app/stock_operations/product_command/product-command";
  import { ProductCommandFilter} from "src/app/stock_operations/product_command/product-command-filter";

import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { FormControl } from '@angular/forms';
const caster=require('angular-crud/gs-cast');
import {debounceTime, finalize, switchMap, tap} from "rxjs/operators";
import {Sale} from "../../sale/sale";
@Component({
  selector: 'app-payment',
  styleUrls:['./payment-list.scss'],
  templateUrl: 'payment-list.component.html'
})
export class PaymentListComponent implements OnInit {
filter = new PaymentFilter();
selectedPayment: Payment;
@ViewChild(MatPaginator,null) paginator: MatPaginator;
@ViewChild(MatSort,null) sort: MatSort;
dataSource: MatTableDataSource<Payment>;
  @Input()
  command:ProductCommand;

  @Input()
  sale:Sale;
 feedback: any = {};
 displayedColumns: string[] = ['amount','date','manager'];
 server_processing:boolean=false;

  filteredValues: any
  ;



  initFilters(){



    this.filteredValues={  }

  }



  initData() : void {


     if(this.sale)this.dataSource = this.sale.sale_payments;
     else if(this.command)this.dataSource=this.command.command_payments;
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.enableFiltering()


  };









public applyFilter(){
    this.dataSource.filter = JSON.stringify(this.filteredValues);
  }
public  enableFiltering() {


    this.dataSource.filterPredicate =
      (payment: Payment, filters: string) => {
        const parsedFilters = JSON.parse(filters);



return   true;
     }
}

get paymentList(): Payment[] {
    return this.paymentService.paymentList;
  }
constructor(private paymentService: PaymentService,

) {
}
ngOnInit() {



  this.initData();
  this.initFilters();


}
ngAfterViewInit() {

  }
search(): void {
          this.enableFiltering();
          this.initData();
}

select(selected: Payment): void {
    this.selectedPayment = selected;
  }
delete(payment: Payment): void {
    if (confirm('Etes-vous sûr?')) {
      this.paymentService.delete(payment).subscribe(() => {
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
