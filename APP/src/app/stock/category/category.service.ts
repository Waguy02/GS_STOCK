import { Category } from './category';
import { CategoryFilter } from './category-filter';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
const headers = new HttpHeaders().set('Accept', 'application/json');
import {ConfigurationService} from "../../configuration/configuration.service"; @Injectable()
export class CategoryService {
  categoryList: Category[] = [];

  api='';
constructor(private http: HttpClient,private configurationService:ConfigurationService) {
  this.api = this.configurationService.environment.main_api+'/stock/category';
  console.log(this.configurationService.environment)


}
findById(id: string): Observable<Category> {
    const url = `${this.api}/${id}`;
    const params = { _id: id };
    return this.http.get<Category>(url, {params, headers});
  }
load(filter: CategoryFilter): any {

var p=this;
    return new Promise(function (resolve, reject) {
p.find(filter).subscribe(result => {
          p.categoryList = result;
          resolve(true);
        },
        err => {
reject(err)
          console.error('error loading', err);
        }
      );
    });
  }
find(filter: CategoryFilter): Observable<Category[]> {

    const params = {
      'name': filter.name,
      'description': filter.description,
      'status': filter.status,
    };
return this.http.get<Category[]>(this.api, {params, headers});
  }
save(entity: Category): Observable<Category> {
    let params = new HttpParams();
    let url = '';
    if (entity._id) {
      url = `${this.api}/${entity._id.toString()}`;
      params = new HttpParams().set('ID', entity._id.toString());
      return this.http.put<Category>(url, entity, {headers, params});
    } else {
      url = `${this.api}`;
      return this.http.post<Category>(url, entity, {headers, params});
    }
  }
delete(entity: Category): Observable<Category> {
    let params = new HttpParams();
    let url = '';
    if (entity._id) {
      url = `${this.api}/${entity._id.toString()}`;
      params = new HttpParams().set('ID', entity._id.toString());
      return this.http.delete<Category>(url, {headers, params});
    }
    return null;
  }
}
