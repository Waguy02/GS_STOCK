import { Manager } from './manager';
import { ManagerFilter } from './manager-filter';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import * as CryptoJS from 'crypto-js';

const headers = new HttpHeaders().set('Accept', 'application/json');
@Injectable({
  providedIn: 'root',
})
export class ManagerService {
  managerList: Manager[] = [];
  api = environment.main_api+'/management/manager';
constructor(private http: HttpClient) {
  }



  findByCredentials(name,password): Observable<Manager[]> {
    let params = new HttpParams();
    const url = `${this.api}/auth`;
  const body = { name:name, password:CryptoJS.AES.encrypt(password,environment.encrypt_key).toString(),key:environment.encrypt_key};

  return this.http.post<Manager[]>(url, body,{params,headers});
}






findById(id: string): Observable<Manager> {
    const url = `${this.api}/${id}`;
    const params = { _id: id };
    return this.http.get<Manager>(url, {params, headers});
  }
load(filter: ManagerFilter): any {
var p=this;
    return new Promise(function (resolve, reject) {
p.find(filter).subscribe(result => {
          p.managerList = result;
          resolve(true);
        },
        err => {
reject(err)
          console.error('error loading', err);
        }
      );
    });
  }
find(filter: ManagerFilter): Observable<Manager[]> {
    const params = {
      'name': filter.name,
      'status': filter.status,
    };
return this.http.get<Manager[]>(this.api, {params, headers});
  }
save(entity: Manager): Observable<Manager> {
    let params = new HttpParams();
    let url = '';

    //Cryptage de mot de passe

  entity.password=CryptoJS.AES.encrypt(entity.password,environment.encrypt_key).toString();

    if (entity._id) {
      url = `${this.api}/${entity._id.toString()}`;
      params = new HttpParams().set('ID', entity._id.toString());
      return this.http.put<Manager>(url, entity, {headers, params});
    } else {
      url = `${this.api}`;

      return this.http.post<Manager>(url, entity, {headers, params});
    }
  }









delete(entity: Manager): Observable<Manager> {
    let params = new HttpParams();
    let url = '';
    if (entity._id) {
      url = `${this.api}/${entity._id.toString()}`;
      params = new HttpParams().set('ID', entity._id.toString());
      return this.http.delete<Manager>(url, {headers, params});
    }
    return null;
  }
}
