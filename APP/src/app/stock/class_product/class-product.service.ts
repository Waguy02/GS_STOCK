import { ClassProduct } from './class-product';
import { ClassProductFilter } from './class-product-filter';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const headers = new HttpHeaders().set('Accept', 'application/json');


import {ConfigurationService} from "../../configuration/configuration.service";
@Injectable()
export class ClassProductService {
  class_productList: ClassProduct[] = [];
  api ='';
constructor(private http: HttpClient,private configurationService:ConfigurationService) {
  this.api=configurationService.environment.main_api+'/stock/product_class';
  console.log(this.configurationService.environment)
  }
findById(id: string): Observable<ClassProduct> {
    const url = `${this.api}/${id}`;
    const params = { _id: id };
    return this.http.get<ClassProduct>(url, {params, headers});
  }
load(filter: ClassProductFilter): any {
var p=this;
    return new Promise(function (resolve, reject) {
p.find(filter).subscribe(result => {
          p.class_productList = result;
          resolve(true);
        },
        err => {
reject(err)
          console.error('error loading', err);
        }
      );
    });
  }
find(filter: ClassProductFilter): Observable<ClassProduct[]> {
    const params = {
      'product': filter.product,
      'label': filter.label,
      'status':filter.status,
    };

return this.http.get<ClassProduct[]>(this.api, {params, headers});
  }
save(entity: ClassProduct): Observable<ClassProduct> {
    let params = new HttpParams();
    let url = '';
    if (entity._id) {
      url = `${this.api}/${entity._id.toString()}`;
      params = new HttpParams().set('ID', entity._id.toString());
      return this.http.put<ClassProduct>(url, entity, {headers, params});
    } else {
      url = `${this.api}`;
      return this.http.post<ClassProduct>(url, entity, {headers, params});
    }
  }
delete(entity: ClassProduct): Observable<ClassProduct> {
    let params = new HttpParams();
    let url = '';
    if (entity._id) {
      url = `${this.api}/${entity._id.toString()}`;
      params = new HttpParams().set('ID', entity._id.toString());
      return this.http.delete<ClassProduct>(url, {headers, params});
    }
    return null;
  }



  count():Observable<number>{
  let     url = `${this.api}/stats/count`;

  return this.http.get<number>(url,{headers});

  }
}
