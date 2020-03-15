import {Component, OnInit, ViewChild} from '@angular/core';
import {ProductCommandFilter} from '../product-command-filter';
import {ProductCommand} from '../product-command';

import {ProviderService} from "src/app/partners/provider/provider.service";
import {Provider} from "src/app/partners/provider/provider";
import {ProviderFilter} from "src/app/partners/provider/provider-filter";

import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {FormControl} from '@angular/forms';
import {debounceTime, finalize, switchMap, tap} from "rxjs/operators";
import {ProductCommandService} from "../product-command.service";
import {StatisticalService} from "../../../tools/statistical.service";


const caster=require('angular-crud/gs-cast');

@Component({
  selector: 'app-product-command',
  styleUrls:['./product-command-list.scss'],
  templateUrl: 'product-command-list.component.html',
  providers:[StatisticalService]
})
export class ProductCommandListComponent implements OnInit {
filter = new ProductCommandFilter();
selectedProductCommand: ProductCommand;
@ViewChild(MatPaginator,null) paginator: MatPaginator;
@ViewChild(MatSort,null) sort: MatSort;
dataSource: MatTableDataSource<ProductCommand>;
 feedback: any = {};
 displayedColumns: string[] = ['provider','amount','date_initiating','date_finalizing','manager','status','payment_status','actions'];
 server_processing:boolean=false;

  providerFilter:GsFilter;

  date_finalizingFilter:GsFilter;
  date_initiatingFilter:GsFilter;
  statusFilter:GsFilter;
  pstatusFilter:GsFilter;

  filteredValues: any
  ;



      filteredProviderList:Provider[]=new Array<Provider>();
      providerInput:FormControl;
      selectedProvider:Provider;
      isLoadingProvider=false;
      providerClick(event: any) {
        this.selectedProvider= event.option.value;
        this.applyFilter();
      }
      checkProvider() {
        if (!this.selectedProvider|| this.selectedProvider!== this.providerInput.value) {
          this.providerInput.setValue(null);
          this.selectedProvider= null;
          return;
        }

      }
      resetProviderFilter(){
        this.selectedProvider=null ;
        this.providerInput.setValue(this.selectedProvider);
        this.applyFilter();
      }
      displayProvider(provider:Provider) {
        if (provider) return provider.name;
      }
      configureProviderInput(){
        this.providerInput=new FormControl();
        this.providerInput.valueChanges
          .pipe(
            debounceTime(500),
            tap(() => {this.isLoadingProvider= true;}),
            switchMap(value => this.providerService.find(new ProviderFilter(value))
              .pipe(
                finalize(() => this.isLoadingProvider= false),
              )
            )
          )
          .subscribe((resultList =>{
            caster.arrayCast(resultList,Provider);
            this.filteredProviderList=resultList;}))
      }






  initFilters(){






this.date_finalizingFilter=new GsFilter();
this.date_finalizingFilter.controls.min=new FormControl();
this.date_finalizingFilter.controls.max=new FormControl();
this.date_finalizingFilter.controls.val=new FormControl();


this.date_initiatingFilter=new GsFilter();
this.date_initiatingFilter.controls.min=new FormControl();
this.date_initiatingFilter.controls.max=new FormControl();
this.date_initiatingFilter.controls.val=new FormControl();




this.statusFilter=new GsFilter();
this.statusFilter.controls.val=new FormControl();


this.pstatusFilter=new GsFilter();
this.pstatusFilter.controls.val=new FormControl();

    this.filteredValues={   provider: this.selectedProvider,
      date_finalizing:this.date_finalizingFilter.values,
      date_initiating:this.date_initiatingFilter.values,
      status:this.statusFilter.values,
      pstatus:this.pstatusFilter.values,

    }

  }
public applyFilter(){
    this.dataSource.filter = JSON.stringify(this.filteredValues);
    this.actualizeStats();
  }
public  enableFiltering() {





  this.date_initiatingFilter.controls.val.valueChanges.subscribe((value)=>{this.date_initiatingFilter.values.val=value;this.applyFilter();})
  this.date_initiatingFilter.controls.min.valueChanges.subscribe((value)=>{this.date_initiatingFilter.values.min=value;this.applyFilter();})
  this.date_initiatingFilter.controls.max.valueChanges.subscribe((value)=>{this.date_initiatingFilter.values.max=value;this.applyFilter();})


  this.date_finalizingFilter.controls.val.valueChanges.subscribe((value)=>{this.date_finalizingFilter.values.val=value;this.applyFilter();})
        this.date_finalizingFilter.controls.min.valueChanges.subscribe((value)=>{this.date_finalizingFilter.values.min=value;this.applyFilter();})
        this.date_finalizingFilter.controls.max.valueChanges.subscribe((value)=>{this.date_finalizingFilter.values.max=value;this.applyFilter();})



        this.statusFilter.controls.val.valueChanges.subscribe((value) => {this.statusFilter.values.val = value;this.applyFilter();});
    this.pstatusFilter.controls.val.valueChanges.subscribe((value) => {this.pstatusFilter.values.val = value;this.applyFilter();});


    this.dataSource.filterPredicate =
      (product_command: ProductCommand, filters: string) => {
        const parsedFilters = JSON.parse(filters);

        let providerCheck =true

        let date_finalizingCheck =true

        let date_initiatingCheck=true
        let statusCheck =true

        let pstatusCheck=true;




          providerCheck =(this.selectedProvider)?(this.selectedProvider._id==product_command.provider._id):true;


          if (parsedFilters.date_finalizing.val) {
              var date0=new Date(parsedFilters.date_finalizing.val),date1=new Date(product_command.date_finalizing);
            date_finalizingCheck =!product_command.date_finalizing?false:date0.getFullYear()==date1.getFullYear()&&
            date0.getMonth()==date1.getMonth()
            &&date0.getDate()==date1.getDate();
          } else {
            if (parsedFilters.date_finalizing.min) {
              date_finalizingCheck = date_finalizingCheck && (parsedFilters.date_finalizing.min<= product_command.date_finalizing);
            }
            if (parsedFilters.date_finalizing.max) {
              date_finalizingCheck = date_finalizingCheck && (parsedFilters.date_finalizing.max >= product_command.date_finalizing);
            }
          }
        if (parsedFilters.date_initiating.val) {
          var date0=new Date(parsedFilters.date_initiating.val),date1=new Date(product_command.date_initiating);

          date_initiatingCheck =!product_command.date_initiating?false:date0.getFullYear()==date1.getFullYear()&&
            date0.getMonth()==date1.getMonth()
            &&date0.getDate()==date1.getDate();
        } else {
          if (parsedFilters.date_initiating.min) {
            date_initiatingCheck = date_initiatingCheck && (parsedFilters.date_initiating.min<= product_command.date_initiating);
          }
          if (parsedFilters.date_initiating.max) {
            date_initiatingCheck = date_initiatingCheck && (parsedFilters.date_initiating.max >= product_command.date_initiating);
          }
        }



          if (parsedFilters.pstatus.val!=undefined&&parsedFilters.pstatus.val!=null) {
              pstatusCheck =(product_command.payment_status==null||product_command.payment_status==undefined)?false: product_command.payment_status==parsedFilters.pstatus.val;
          }




          if (parsedFilters.status.val!=undefined&&parsedFilters.status.val!=null) {
              statusCheck =(product_command.status==null||product_command.status==undefined)?false: product_command.status==parsedFilters.status.val;
            }


return   providerCheck&&date_finalizingCheck&&date_initiatingCheck&&statusCheck&&pstatusCheck&&true;
     }
}

get product_commandList(): ProductCommand[] {
    return this.product_commandService.product_commandList;
  }
constructor(private product_commandService: ProductCommandService,
   private providerService: ProviderService,
    private statService:StatisticalService
) {
        this.configureAmountStatService();
}



ngOnInit() {
this.initFilters();

      this.configureProviderInput()


}
ngAfterViewInit() {
    this.search();
  }


  public configureAmountStatService(){



  }


public actualizeStats (){

          this.statService.setDatas(this.dataSource.filteredData);

          this.statService.computeSum('amount');
}



search(): void {
    this.product_commandService.load(this.filter).then((data)=>{
setTimeout( ()=>{
          this.dataSource=new MatTableDataSource<ProductCommand>(this.product_commandService.product_commandList);
          this.actualizeStats();
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
          this.enableFiltering();
},
        200)
})
}
select(selected: ProductCommand): void {
    this.selectedProductCommand = selected;
  }
delete(product_command: ProductCommand): void {
    if (confirm('Etes-vous sûr?')) {
      this.product_commandService.delete(product_command).subscribe(() => {
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

  livrate(product_command:ProductCommand):void{
    if(!confirm("Voulez vous vraiment effectuer la livraison de cette commande maintenant? "))return;
    this.product_commandService.save(product_command).subscribe(
      pc => {
        product_command=pc;
        this.actualizeStats();
        alert("Livraison effectuée avec succès");

      },
      err => {
        product_command.status=false;
        alert("Erreur lors de livraison de la commande")

      }
    );
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
