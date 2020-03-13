import { Payment } from './payment';
import { PaymentFilter } from './payment-filter';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
const headers = new HttpHeaders().set('Accept', 'application/json');
@Injectable()
export class PaymentService {
  paymentList: Payment[] = [];
  api = environment.main_api+'/payment/payment';
constructor(private http: HttpClient) {
  }
findById(id: string): Observable<Payment> {
    const url = `${this.api}/${id}`;
    const params = { _id: id };
    return this.http.get<Payment>(url, {params, headers});
  }









load(filter: PaymentFilter): any {
var p=this;
    return new Promise(function (resolve, reject) {
p.find(filter).subscribe(result => {
          p.paymentList = result;
          resolve(true);
        },
        err => {
reject(err)
          console.error('error loading', err);
        }
      );
    });
  }
find(filter: PaymentFilter): Observable<Payment[]> {
  var url="";
  const params=new HttpParams();
  if(filter.command) {
    url = `${this.api}/command/${filter.command}`;
    params.set("command",filter.command);
  }
  else{
    url = `${this.api}/sale/${filter.sale}`;
    params.set("sale",filter.sale);
  }


return this.http.get<Payment[]>(url, {params, headers});
  }
save(entity: Payment): Observable<Payment> {
  console.log(entity);
    let params = new HttpParams();
    let url = '';
    if (entity._id) {
      url = `${this.api}/${entity._id.toString()}`;
      params = new HttpParams().set('ID', entity._id.toString());
      return this.http.put<Payment>(url, entity, {headers, params});
    } else {
      url = `${this.api}`;

      var pmt:any=new Object();
      Object.assign(pmt,entity);

      if(pmt.product_command) pmt.product_command=pmt.product_command._id;
      if(pmt.sale) pmt.sale=pmt.sale._id;
      return this.http.post<Payment>(url, pmt, {headers, params});
    }
  }
delete(entity: Payment): Observable<Payment> {
    let params = new HttpParams();
    let url = '';
    if (entity._id) {
      url = `${this.api}/${entity._id.toString()}`;
      params = new HttpParams().set('ID', entity._id.toString());
      return this.http.delete<Payment>(url, {headers, params});
    }
    return null;
  }
}
