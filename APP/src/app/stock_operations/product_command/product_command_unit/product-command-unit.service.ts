import { ProductCommandUnit } from './product-command-unit';
import { ProductCommandUnitFilter } from './product-command-unit-filter';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const headers = new HttpHeaders().set('Accept', 'application/json');
import {ConfigurationService} from "../../../configuration/configuration.service"; @Injectable()
export class ProductCommandUnitService {
  product_command_unitList: ProductCommandUnit[] = [];
  api;
constructor(private http: HttpClient,private configurationService:ConfigurationService) {
  this.api = this.configurationService.environment.main_api+'/stock_operations/product_command_unit';
  console.log(this.configurationService.environment)

  }
findById(id: string): Observable<ProductCommandUnit> {
    const url = `${this.api}/${id}`;
    const params = { _id: id };
    return this.http.get<ProductCommandUnit>(url, {params, headers});
  }

  findByProductClass(id: string): Observable<ProductCommandUnit> {
    const url = `${this.api}/product_class/${id}`;
    const params = { _id: id };
    return this.http.get<ProductCommandUnit>(url, {params, headers});
  }

load(filter: ProductCommandUnitFilter): any {
var p=this;
    return new Promise(function (resolve, reject) {
p.find(filter).subscribe(result => {
          p.product_command_unitList = result;
          resolve(true);
        },
        err => {
reject(err)
          console.error('error loading', err);
        }
      );
    });
  }
find(filter: ProductCommandUnitFilter): Observable<ProductCommandUnit[]> {





         const url= `${this.api}/${filter.command}`;
  const params =new HttpParams().set("command",filter.command);
return this.http.get<ProductCommandUnit[]>(url, {params, headers})


  ;
  }
save(entity: ProductCommandUnit): Observable<ProductCommandUnit> {
    let params = new HttpParams();
    let url = '';
    if (entity._id) {
      url = `${this.api}/${entity._id.toString()}`;
      params = new HttpParams().set('ID', entity._id.toString());
      return this.http.put<ProductCommandUnit>(url, entity, {headers, params});
    } else {
      url = `${this.api}`;
      return this.http.post<ProductCommandUnit>(url, entity, {headers, params});
    }
  }
delete(entity: ProductCommandUnit): Observable<ProductCommandUnit> {
    let params = new HttpParams();
    let url = '';
    if (entity._id) {
      url = `${this.api}/${entity._id.toString()}`;
      params = new HttpParams().set('ID', entity._id.toString());
      return this.http.delete<ProductCommandUnit>(url, {headers, params});
    }
    return null;
  }
}
