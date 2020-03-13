import { Customer } from './customer';
import { CustomerFilter } from './customer-filter';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
const headers = new HttpHeaders().set('Accept', 'application/json');
@Injectable()
export class CustomerService {
  customerList: Customer[] = [];
  api = environment.main_api+'/partners/customer';
constructor(private http: HttpClient) {
  }
findById(id: string): Observable<Customer> {
    const url = `${this.api}/${id}`;
    const params = { _id: id };
    return this.http.get<Customer>(url, {params, headers});
  }
load(filter: CustomerFilter): any {
var p=this;
    return new Promise(function (resolve, reject) {
p.find(filter).subscribe(result => {
          p.customerList = result;
          resolve(true);
        },
        err => {
reject(err)
          console.error('error loading', err);
        }
      );
    });
  }
find(filter: CustomerFilter): Observable<Customer[]> {
    const params = {
      'name': filter.name,
      'status': filter.status,
    };
return this.http.get<Customer[]>(this.api, {params, headers});
  }
save(entity: Customer): Observable<Customer> {
    let params = new HttpParams();
    let url = '';
    if (entity._id) {
      url = `${this.api}/${entity._id.toString()}`;
      params = new HttpParams().set('ID', entity._id.toString());
      return this.http.put<Customer>(url, entity, {headers, params});
    } else {
      url = `${this.api}`;
      return this.http.post<Customer>(url, entity, {headers, params});
    }
  }
delete(entity: Customer): Observable<Customer> {
    let params = new HttpParams();
    let url = '';
    if (entity._id) {
      url = `${this.api}/${entity._id.toString()}`;
      params = new HttpParams().set('ID', entity._id.toString());
      return this.http.delete<Customer>(url, {headers, params});
    }
    return null;
  }
}
