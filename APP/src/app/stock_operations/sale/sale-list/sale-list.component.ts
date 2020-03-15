import { ViewChild,Component, OnInit } from '@angular/core';
import { SaleFilter } from '../sale-filter';
import { SaleService } from '../sale.service';
import { Sale } from '../sale';

import { CustomerService } from "src/app/partners/customer/customer.service";
import { Customer} from "src/app/partners/customer/customer";
import { CustomerFilter} from "src/app/partners/customer/customer-filter";

import { ManagerService } from "src/app/params/manager/manager.service";
import { Manager} from "src/app/params/manager/manager";
import { ManagerFilter} from "src/app/params/manager/manager-filter";

import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { FormControl } from '@angular/forms';
const caster=require('angular-crud/gs-cast');
import {debounceTime, finalize, switchMap, tap} from "rxjs/operators";
import {StatisticalService} from "../../../tools/statistical.service";




@Component({
  selector: 'app-sale',
  styleUrls:['./sale-list.scss'],
  templateUrl: 'sale-list.component.html',
  providers:[StatisticalService],
})
export class SaleListComponent implements OnInit {
  filter = new SaleFilter();
  selectedSale: Sale;
  @ViewChild(MatPaginator,null) paginator: MatPaginator;
  @ViewChild(MatSort,null) sort: MatSort;
  dataSource: MatTableDataSource<Sale>;
  feedback: any = {};
  displayedColumns: string[] = ['customer','amount','date_initiating','date_finalizing','manager','status','payment_status','actions'];
  server_processing:boolean=false;

  customerFilter:GsFilter;

  date_finalizingFilter:GsFilter;
  date_initiatingFilter:GsFilter;

  statusFilter:GsFilter;
  pstatusFilter:GsFilter;

  filteredValues: any
  ;



  filteredCustomerList:Customer[]=new Array<Customer>();
  customerInput:FormControl;
  selectedCustomer:Customer;
  isLoadingCustomer=false;
  customerClick(event: any) {
    this.selectedCustomer= event.option.value;
    this.applyFilter();
  }
  checkCustomer() {
    if (!this.selectedCustomer|| this.selectedCustomer!== this.customerInput.value) {
      this.customerInput.setValue(null);
      this.selectedCustomer= null;
      return;
    }

  }
  resetCustomerFilter(){
    this.selectedCustomer=null ;
    this.customerInput.setValue(this.selectedCustomer);
    this.applyFilter();
  }
  displayCustomer(customer:Customer) {
    if (customer) return customer.name;
  }
  configureCustomerInput(){
    this.customerInput=new FormControl();
    this.customerInput.valueChanges
      .pipe(
        debounceTime(500),
        tap(() => {this.isLoadingCustomer= true;}),
        switchMap(value => this.customerService.find(new CustomerFilter(value))
          .pipe(
            finalize(() => this.isLoadingCustomer= false),
          )
        )
      )
      .subscribe((resultList =>{
        caster.arrayCast(resultList,Customer);
        this.filteredCustomerList=resultList;}))
  }






  initFilters(){

    this.date_initiatingFilter=new GsFilter();
    this.date_initiatingFilter.controls.min=new FormControl();
    this.date_initiatingFilter.controls.max=new FormControl();
    this.date_initiatingFilter.controls.val=new FormControl();






    this.date_finalizingFilter=new GsFilter();

    this.date_finalizingFilter.controls.min=new FormControl();
    this.date_finalizingFilter.controls.max=new FormControl();
    this.date_finalizingFilter.controls.val=new FormControl();





    this.statusFilter=new GsFilter();
    this.statusFilter.controls.val=new FormControl();


    this.pstatusFilter=new GsFilter();
    this.pstatusFilter.controls.val=new FormControl();

    this.filteredValues={   customer: this.selectedCustomer,
      date_finalizing:this.date_finalizingFilter.values,
      date_initiating:this.date_initiatingFilter.values,
      status:this.statusFilter.values,
      pstatus:this.pstatusFilter.values,

    }

  }
  public applyFilter(){
    this.dataSource.filter = JSON.stringify(this.filteredValues);
    this.actualizeStat();
  }
  public  enableFiltering() {




    this.date_finalizingFilter.controls.val.valueChanges.subscribe((value)=>{this.date_finalizingFilter.values.val=value;this.applyFilter();})
    this.date_finalizingFilter.controls.min.valueChanges.subscribe((value)=>{this.date_finalizingFilter.values.min=value;this.applyFilter();})
    this.date_finalizingFilter.controls.max.valueChanges.subscribe((value)=>{this.date_finalizingFilter.values.max=value;this.applyFilter();})



    this.statusFilter.controls.val.valueChanges.subscribe((value) => {this.statusFilter.values.val = value;this.applyFilter();});
    this.pstatusFilter.controls.val.valueChanges.subscribe((value) => {this.pstatusFilter.values.val = value;this.applyFilter();});


    this.dataSource.filterPredicate =
      (sale: Sale, filters: string) => {
        const parsedFilters = JSON.parse(filters);

        let customerCheck =true

        let date_finalizingCheck =true

        let date_initiatingCheck=true

        let statusCheck =true

        let pstatusCheck=true;




        customerCheck =(this.selectedCustomer)?(this.selectedCustomer._id==sale.customer._id):true;


        if (parsedFilters.date_finalizing.val) {
          var date0=new Date(parsedFilters.date_finalizing.val),date1=new Date(sale.date_finalizing);

          date_finalizingCheck =!sale.date_finalizing?false:date0.getFullYear()==date1.getFullYear()&&
            date0.getMonth()==date1.getMonth()
            &&date0.getDate()==date1.getDate();
        } else {
          if (parsedFilters.date_finalizing.min) {
            date_finalizingCheck = date_finalizingCheck && (parsedFilters.date_finalizing.min<= sale.date_finalizing);
          }
          if (parsedFilters.date_finalizing.max) {
            date_finalizingCheck = date_finalizingCheck && (parsedFilters.date_finalizing.max >= sale.date_finalizing);
          }
        }
        if (parsedFilters.date_initiating.val) {
          var date0=new Date(parsedFilters.date_initiating.val),date1=new Date(sale.date_initiating);

          date_initiatingCheck =!sale.date_initiating?false:date0.getFullYear()==date1.getFullYear()&&
            date0.getMonth()==date1.getMonth()
            &&date0.getDate()==date1.getDate();
        } else {
          if (parsedFilters.date_initiating.min) {
            date_initiatingCheck = date_initiatingCheck && (parsedFilters.date_initiating.min<= sale.date_initiating);
          }
          if (parsedFilters.date_initiating.max) {
            date_initiatingCheck = date_initiatingCheck && (parsedFilters.date_initiating.max >= sale.date_initiating);
          }
        }





        if (parsedFilters.pstatus.val!=undefined&&parsedFilters.pstatus.val!=null) {
          pstatusCheck =(sale.payment_status==null||sale.payment_status==undefined)?false: sale.payment_status==parsedFilters.pstatus.val;
        }




        if (parsedFilters.status.val!=undefined&&parsedFilters.status.val!=null) {
          statusCheck =(sale.status==null||sale.status==undefined)?false: sale.status==parsedFilters.status.val;
        }


        return   customerCheck&&date_finalizingCheck&&statusCheck&&pstatusCheck&&true;
      }
  }

  get saleList(): Sale[] {
    return this.saleService.saleList;
  }
  constructor(private saleService: SaleService,
              private customerService: CustomerService,
              private statService:StatisticalService
  ) {


  }

  public actualizeStat(){
    this.statService.setDatas(this.dataSource.filteredData);
    this.statService.computeSum('amount');
  }



  ngOnInit() {
    this.initFilters();

    this.configureCustomerInput()


  }
  ngAfterViewInit() {
    this.search();
  }
  search(): void {
    this.saleService.load(this.filter).then((data)=>{
      setTimeout( ()=>{
          this.dataSource=new MatTableDataSource<Sale>(this.saleService.saleList);
          this.actualizeStat();
          this.dataSource.sort = this.sort;

          this.dataSource.paginator = this.paginator;
          this.enableFiltering();
        },
        200)
    })
  }
  select(selected: Sale): void {
    this.selectedSale = selected;
  }
  delete(sale: Sale): void {
    if (confirm('Etes-vous sûr?')) {
      this.saleService.delete(sale).subscribe(() => {
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
