import { Provider } from './provider';
import { ProviderFilter } from './provider-filter';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
const headers = new HttpHeaders().set('Accept', 'application/json');
import {ConfigurationService} from "../../configuration/configuration.service"; @Injectable()
export class ProviderService {
  providerList: Provider[] = [];

  api='';
constructor(private http: HttpClient,private configurationService:ConfigurationService) {

  this.api = this.configurationService.environment.main_api+'/partners/provider';
  console.log(this.configurationService.environment)

}
findById(id: string): Observable<Provider> {
    const url = `${this.api}/${id}`;
    const params = { _id: id };
    return this.http.get<Provider>(url, {params, headers});
  }
load(filter: ProviderFilter): any {
var p=this;
    return new Promise(function (resolve, reject) {
p.find(filter).subscribe(result => {
          p.providerList = result;
          resolve(true);
        },
        err => {
reject(err)
          console.error('error loading', err);
        }
      );
    });
  }
find(filter: ProviderFilter): Observable<Provider[]> {
    const params = {
      'name': filter.name,
      'status': filter.status,
    };
return this.http.get<Provider[]>(this.api, {params, headers});
  }
save(entity: Provider): Observable<Provider> {
    let params = new HttpParams();
    let url = '';
    if (entity._id) {
      url = `${this.api}/${entity._id.toString()}`;
      params = new HttpParams().set('ID', entity._id.toString());
      return this.http.put<Provider>(url, entity, {headers, params});
    } else {
      url = `${this.api}`;
      return this.http.post<Provider>(url, entity, {headers, params});
    }
  }
delete(entity: Provider): Observable<Provider> {
    let params = new HttpParams();
    let url = '';
    if (entity._id) {
      url = `${this.api}/${entity._id.toString()}`;
      params = new HttpParams().set('ID', entity._id.toString());
      return this.http.delete<Provider>(url, {headers, params});
    }
    return null;

}

  count():Observable<number>{
    let url=`${this.api}/stats/count`;
    return this.http.get<number>(url,{headers})

  }
}
