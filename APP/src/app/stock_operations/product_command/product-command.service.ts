import {ProductCommand} from './product-command';
import {ProductCommandFilter} from './product-command-filter';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import {ProductCommandUnitService} from "./product_command_unit/product-command-unit.service";
import {ClassProductService} from "../../stock/class_product/class-product.service";
import {AuthService} from "../../params/manager/auth/auth.service";



const headers = new HttpHeaders().set('Accept', 'application/json');
import {ConfigurationService} from "../../configuration/configuration.service"; @Injectable()
export class ProductCommandService{
  product_commandList: ProductCommand[] = [];
  api;
  constructor( private http: HttpClient,private configurationService:ConfigurationService, private pcu_service:ProductCommandUnitService, private stock_service:ClassProductService,private authService:AuthService) {
    this.api = this.configurationService.environment.main_api + '/stock_operations/product_command';
    console.log(this.configurationService.environment)


  }
  findById(id: string): Observable<ProductCommand> {
    const url = `${this.api}/${id}`;
    const params = {_id: id};
    return this.http.get<ProductCommand>(url, {params, headers});
  }
  load(filter: ProductCommandFilter): any {
    var p = this;
    return new Promise(function (resolve, reject) {
      p.find(filter).subscribe(result => {
          p.product_commandList = result;
          resolve(true);
        },
        err => {
          reject(err)
          console.error('error loading', err);
        }
      );
    });
  }
  find(filter: ProductCommandFilter): Observable<ProductCommand[]> {
    const params = {
      'provider': filter.provider,
      'date_finalizing': filter.date_finalizing,
      'status': filter.status,
    };
    return this.http.get<ProductCommand[]>(this.api, {params, headers});
  }
  save(command: ProductCommand): Observable<ProductCommand> {
    var entity = new ProductCommand();
    Object.assign(entity, command);
    entity.command_units_datasource = null;
    entity.manager = this.authService.active_user;
    entity.command_units = command.command_units_datasource.data;
    entity.date_initiating = new Date();
    entity.command_payments = null;
    ;
    let params = new HttpParams();
    let url = '';
    if (entity._id) {
      entity.status = true;
      url = `${this.api}/${entity._id.toString()}`;
      params = new HttpParams().set('ID', entity._id.toString());
      return this.http.put<ProductCommand>(url, entity, {headers, params});
    } else {
      url = `${this.api}`;
      return this.http.post<ProductCommand>(url, entity, {headers, params})
    }
  }
  close_payments(command: ProductCommand): Observable<ProductCommand> {
    var entity = new ProductCommand();
    console.log(command);
    Object.assign(entity, command);
    entity.command_units_datasource = null;
    entity.manager = this.authService.active_user;
    entity.date_initiating = new Date();
    entity.command_payments = null;
    entity.payment_status = true;
    ;
    let params = new HttpParams();
    let url = '';
    entity.status = true;
    url = `${this.api}/closepmts/${entity._id.toString()}`;
    params = new HttpParams().set('ID', entity._id.toString());
    return this.http.put<ProductCommand>(url, entity, {headers, params});
  }
  delete(entity: ProductCommand): Observable<ProductCommand> {
    let params = new HttpParams();
    let url = '';
    if (entity._id) {
      url = `${this.api}/${entity._id.toString()}`;
      params = new HttpParams().set('ID', entity._id.toString());
      return this.http.delete<ProductCommand>(url, {headers, params});
    }
    return null;
  }



  load_on_comming(){
    var url = `${this.api}/stats/count_oncomming`;
    return this.http.get(url, {headers});
  }


  load_last():Observable<ProductCommand>{
    var url = `${this.api}/stats/last`;
    return this.http.get<ProductCommand>(url, {headers});
  }
}
