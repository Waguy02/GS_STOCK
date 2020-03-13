import { ViewChild,Component, OnInit } from '@angular/core';
import { ProviderFilter } from '../provider-filter';
import { ProviderService } from '../provider.service';
import { Provider } from '../provider';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-provider',
  styleUrls:['./provider-list.scss'],
  templateUrl: 'provider-list.component.html'
})
export class ProviderListComponent implements OnInit {
filter = new ProviderFilter(null);
selectedProvider: Provider;
@ViewChild(MatPaginator,null) paginator: MatPaginator;
@ViewChild(MatSort,null) sort: MatSort;
dataSource: MatTableDataSource<Provider>;
 feedback: any = {};
 displayedColumns: string[] = ['_id','name','actions'];
 server_processing:boolean=false;

  nameFilter:GsFilter;

  statusFilter:GsFilter;

  filteredValues: any;
initFilters(){

        this.nameFilter=new GsFilter();

        this.nameFilter.controls.val=new FormControl();


        this.statusFilter=new GsFilter();

        this.statusFilter.controls.val=new FormControl();


    this.filteredValues={  name:this.nameFilter.values,      status:this.statusFilter.values,      }
  }
public applyFilter(){
    this.dataSource.filter = JSON.stringify(this.filteredValues);
  }
public  enableFiltering() {


        this.nameFilter.controls.val.valueChanges.subscribe((value) => {this.nameFilter.values.val = value;this.applyFilter();});




        this.statusFilter.controls.val.valueChanges.subscribe((value) => {this.statusFilter.values.val = value;this.applyFilter();});




    this.dataSource.filterPredicate =
      (provider: Provider, filters: string) => {
        const parsedFilters = JSON.parse(filters);

        let nameCheck =true

        let statusCheck =true









              if (parsedFilters.name.val) {
                nameCheck =!provider.name?false: provider.name.toLowerCase().includes(parsedFilters.name.val.toLowerCase());
              }






            if (parsedFilters.status.val!=undefined&&parsedFilters.status.val!=null) {
              statusCheck =(provider.status==null||provider.status==undefined)?false: provider.status==parsedFilters.status.val;
            }

      return   nameCheck&&statusCheck&&true;
    }
}


  get providerList(): Provider[] {
    return this.providerService.providerList;
  }
constructor(private providerService: ProviderService) {
}
ngOnInit() {
this.initFilters();
}
ngAfterViewInit() {
    this.search();
  }
search(): void {
    this.providerService.load(this.filter).then((data)=>{
setTimeout( ()=>{
          this.dataSource=new MatTableDataSource<Provider>(this.providerService.providerList);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
          this.enableFiltering();
},
        200)
})
}
select(selected: Provider): void {
    this.selectedProvider = selected;
  }
delete(provider: Provider): void {
    if (confirm('Etes-vous sûr?')) {
      this.providerService.delete(provider).subscribe(() => {
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
