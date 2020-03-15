import {SaleUnit} from './sale-unit';
import {SaleUnitFilter} from './sale-unit-filter';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from 'src/environments/environment';


const headers = new HttpHeaders().set('Accept', 'application/json');
import {ConfigurationService} from "../../../configuration/configuration.service"; @Injectable()
export class SaleUnitService {
  sale_unitList: SaleUnit[] = [];
  api;
  constructor(private http: HttpClient,private configurationService:ConfigurationService) {
    this.api = this.configurationService.environment.main_api + '/stock_operations/sale_unit';
  console.log(this.configurationService.environment)

  }
  findById(id: string): Observable<SaleUnit> {
    const url = `${this.api}/${id}`;
    const params = {_id: id};
    return this.http.get<SaleUnit>(url, {params, headers});
  }




  findByProductClass(id:string){


    const url = `${this.api}/product_class/${id}`;
    const params = {id: id};
    return this.http.get<SaleUnit[]>(url, {params, headers});

  }





  load(filter: SaleUnitFilter): any {
    var p = this;
    return new Promise(function (resolve, reject) {
      p.find(filter).subscribe(result => {
          p.sale_unitList = result;
          resolve(true);
        },
        err => {
          reject(err)
          console.error('error loading', err);
        }
      );
    });
  }
  find(filter: SaleUnitFilter): Observable<SaleUnit[]> {
    const url = `${this.api}/${filter.sale}`;
    const params = new HttpParams().set("sale", filter.sale);
    return this.http.get<SaleUnit[]>(url, {params, headers})
      ;
  }
  save(su: SaleUnit): Observable<SaleUnit> {
    var entity=new SaleUnit();
    Object.assign(entity,su);
    su.sale=null;
    let params = new HttpParams();
    let url = '';
    if (entity._id) {

      url = `${this.api}/${entity._id.toString()}`;
      params = new HttpParams().set('ID', entity._id.toString());
      return this.http.put<SaleUnit>(url, entity, {headers, params});
    } else {
      url = `${this.api}`;
      return this.http.post<SaleUnit>(url, entity, {headers, params});
    }
  }
  delete(entity: SaleUnit): Observable<SaleUnit> {
    let params = new HttpParams();
    let url = '';
    if (entity._id) {
      url = `${this.api}/${entity._id.toString()}`;
      params = new HttpParams().set('ID', entity._id.toString());
      return this.http.delete<SaleUnit>(url, {headers, params});
    }
    return null;
  }
}
