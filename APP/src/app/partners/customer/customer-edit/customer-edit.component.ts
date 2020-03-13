import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { map, switchMap, debounceTime, tap, finalize } from 'rxjs/operators';
import { of } from 'rxjs';
const caster=require('angular-crud/gs-cast');
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-customer-edit',
  styleUrls:['./customer-edit.scss'],
  templateUrl: './customer-edit.component.html'
})
export class CustomerEditComponent implements OnInit {
id: string;
  customer: Customer;
  feedback: any = {};
constructor(
    private route: ActivatedRoute,
    private router: Router,
    private customerService: CustomerService,
    
    )
    {
  }
ngOnInit() {
    this
      .route
      .params
      .pipe(
        map(p => p.id),
        switchMap(id => {
          if (id === 'new') { return of(new Customer()); }
          return this.customerService.findById(id);
        })
      )
      .subscribe(customer => {
          this.customer = customer;
          this.feedback = {};
        },
        err => {
          this.feedback = {type: 'warning', message: 'Erreur lors du chargement'};
        }
      );

}
save() {
    this.customerService.save(this.customer).subscribe(
      customer => {
        this.customer = customer;
        this.feedback = {type: 'success', message: 'Enregistrement effectué avec succès'};
        setTimeout(() => {
          this.router.navigate(['/partners/customers']);
        }, 1000);
      },
      err => {
        this.feedback = {type: 'warning', message: "Erreur lors de l'enregistrement"};
      }
    );
  }
cancel() {
    this.router.navigate(['/partners/customers']);
  }

}
