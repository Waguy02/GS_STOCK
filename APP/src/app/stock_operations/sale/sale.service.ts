import { Sale } from './sale';
import { SaleFilter } from './sale-filter';
import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {SaleUnitService} from "./sale_unit/sale-unit.service";
import {ClassProductService} from "../../stock/class_product/class-product.service";
import {ManagerService} from "../../params/manager/manager.service";
import {AuthService} from "../../params/manager/auth/auth.service";
const headers = new HttpHeaders().set('Accept', 'application/json');
@Injectable()
export class SaleService {
  saleList: Sale[] = [];
  api = environment.main_api+'/stock_operations/sale';
  constructor(private http: HttpClient,private pcu_service:SaleUnitService,stock_service:ClassProductService,private authService:AuthService) {
  }
  findById(id: string): Observable<Sale> {
    const url = `${this.api}/${id}`;
    const params = { _id: id };
    return this.http.get<Sale>(url, {params, headers});
  }
  load(filter: SaleFilter): any {
    var p=this;
    return new Promise(function (resolve, reject) {
      p.find(filter).subscribe(result => {
          p.saleList = result;
          resolve(true);
        },
        err => {
          reject(err)
          console.error('error loading', err);
        }
      );
    });
  }
  find(filter: SaleFilter): Observable<Sale[]> {
    const params = {
      'customer': filter.customer,
      'date_finalizing': filter.date_finalizing,
      'status': filter.status,
    };
    return this.http.get<Sale[]>(this.api, {params, headers});
  }
  save(sale: Sale): Observable<Sale> {
    var entity=new Sale();
    Object.assign(entity,sale);
    entity.sale_units_datasource=null;
    entity.manager=this.authService.active_user;
    entity.sale_units=sale.sale_units_datasource.data;
    entity.date_initiating=new Date();
    entity.sale_payments=null;

    console.log(entity);

    let params = new HttpParams();
    let url = '';
    if (entity._id) {
      entity.status=true;
      url = `${this.api}/${entity._id.toString()}`;
      params = new HttpParams().set('ID', entity._id.toString());
      return this.http.put<Sale>(url, entity, {headers, params});
    } else {
      url = `${this.api}`;

      return this.http.post<Sale>(url, entity, {headers, params})
    }
  }


  close_payments(sale:Sale):Observable<Sale>{
    var entity=new Sale();
    console.log(sale);
    Object.assign(entity,sale);
    entity.sale_units_datasource=null;
    entity.manager=this.authService.active_user;
    entity.date_initiating=new Date();
    entity.sale_payments=null;
    entity.payment_status=true;
    console.log(entity);

    let params = new HttpParams();
    let url = '';

    entity.status=true;
    url = `${this.api}/closepmts/${entity._id.toString()}`;
    params = new HttpParams().set('ID', entity._id.toString());
    return this.http.put<Sale>(url, entity, {headers, params});



  }


  delete(entity: Sale): Observable<Sale> {
    let params = new HttpParams();
    let url = '';
    if (entity._id) {
      url = `${this.api}/${entity._id.toString()}`;
      params = new HttpParams().set('ID', entity._id.toString());
      return this.http.delete<Sale>(url, {headers, params});
    }
    return null;
  }
}
