import { Product } from './product';
import { ProductFilter } from './product-filter';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
const headers = new HttpHeaders().set('Accept', 'application/json');
@Injectable()
export class ProductService {
  productList: Product[] = [];
  api = environment.main_api+'/stock/product';
constructor(private http: HttpClient) {
  }
findById(id: string): Observable<Product> {
    const url = `${this.api}/${id}`;
    const params = { _id: id };
    return this.http.get<Product>(url, {params, headers});
  }
load(filter: ProductFilter): any {
var p=this;
    return new Promise(function (resolve, reject) {
p.find(filter).subscribe(result => {
          p.productList = result;
          resolve(true);
        },
        err => {
reject(err)
          console.error('error loading', err);
        }
      );
    });
  }
find(filter: ProductFilter): Observable<Product[]> {
    const params = {
      'name': filter.name,
      'description': filter.description,
      'unit_price': filter.unit_price,
      'status': filter.status,
    };
return this.http.get<Product[]>(this.api, {params, headers});
  }
save(entity: Product): Observable<Product> {
    let params = new HttpParams();
    let url = '';
    if (entity._id) {
      url = `${this.api}/${entity._id.toString()}`;
      params = new HttpParams().set('ID', entity._id.toString());
      return this.http.put<Product>(url, entity, {headers, params});
    } else {
      url = `${this.api}`;
      return this.http.post<Product>(url, entity, {headers, params});
    }
  }
delete(entity: Product): Observable<Product> {
    let params = new HttpParams();
    let url = '';
    if (entity._id) {
      url = `${this.api}/${entity._id.toString()}`;
      params = new HttpParams().set('ID', entity._id.toString());
      return this.http.delete<Product>(url, {headers, params});
    }
    return null;
  }
}
