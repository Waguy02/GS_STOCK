import { ViewChild,Component, OnInit } from '@angular/core';
import { ManagerFilter } from '../manager-filter';
import { ManagerService } from '../manager.service';
import { Manager } from '../manager';

import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { FormControl } from '@angular/forms';
const caster=require('angular-crud/gs-cast');
import {debounceTime, finalize, switchMap, tap} from "rxjs/operators";
@Component({
  selector: 'app-manager',
  styleUrls:['./manager-list.scss'],
  templateUrl: 'manager-list.component.html'
})
export class ManagerListComponent implements OnInit {
filter = new ManagerFilter();
selectedManager: Manager;
@ViewChild(MatPaginator,null) paginator: MatPaginator;
@ViewChild(MatSort,null) sort: MatSort;
dataSource: MatTableDataSource<Manager>;
 feedback: any = {};
 displayedColumns: string[] = ['_id','name','status','actions'];
 server_processing:boolean=false;

  nameFilter:GsFilter;

  statusFilter:GsFilter;

  filteredValues: any
  ;







  initFilters(){





this.nameFilter=new GsFilter();

        this.nameFilter.controls.val=new FormControl();




this.statusFilter=new GsFilter();

        this.statusFilter.controls.val=new FormControl();


    this.filteredValues={
      name:this.nameFilter.values,
      status:this.statusFilter.values,      }

  }
public applyFilter(){
    this.dataSource.filter = JSON.stringify(this.filteredValues);
  }
public  enableFiltering() {



        this.nameFilter.controls.val.valueChanges.subscribe((value) => {this.nameFilter.values.val = value;this.applyFilter();});




        this.statusFilter.controls.val.valueChanges.subscribe((value) => {this.statusFilter.values.val = value;this.applyFilter();});



    this.dataSource.filterPredicate =
      (manager: Manager, filters: string) => {
        const parsedFilters = JSON.parse(filters);

        let nameCheck =true

        let statusCheck =true





              if (parsedFilters.name.val) {
                nameCheck =!manager.name?false: manager.name.toLowerCase().includes(parsedFilters.name.val.toLowerCase());
              }





            if (parsedFilters.status.val!=undefined&&parsedFilters.status.val!=null) {
              statusCheck =(manager.status==null||manager.status==undefined)?false: manager.status==parsedFilters.status.val;
            }


return   nameCheck&&statusCheck&&true;
     }
}

get managerList(): Manager[] {
    return this.managerService.managerList;
  }
constructor(private managerService: ManagerService,

) {
}
ngOnInit() {
this.initFilters();

}
ngAfterViewInit() {
    this.search();
  }
search(): void {
    this.managerService.load(this.filter).then((data)=>{
setTimeout( ()=>{
          this.dataSource=new MatTableDataSource<Manager>(this.managerService.managerList);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
          this.enableFiltering();
},
        200)
})
}
select(selected: Manager): void {
    this.selectedManager = selected;
  }
delete(manager: Manager): void {
    if (confirm('Etes-vous sûr?')) {
      this.managerService.delete(manager).subscribe(() => {
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
