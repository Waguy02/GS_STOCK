import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { map, switchMap, debounceTime, tap, finalize } from 'rxjs/operators';
import { of } from 'rxjs';
const caster=require('angular-crud/gs-cast');
import { SaleService } from '../sale.service';
import { Sale } from '../sale';

import { CustomerService } from "src/app/partners/customer/customer.service";
import { Customer} from "src/app/partners/customer/customer";
import { CustomerFilter} from "src/app/partners/customer/customer-filter";
import {SaleUnit} from "../sale_unit/sale-unit";
import {MatTableDataSource} from "@angular/material/table";
import {SaleUnitService} from "../sale_unit/sale-unit.service";
import {SaleUnitFilter} from "../sale_unit/sale-unit-filter";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {SalePrintComponent} from "../sale-print/sale-print.component";
import {SaleListComponent} from "../sale-list/sale-list.component";
import {PaymentService} from "../../payment/payment.service";
import {PaymentFilter} from "../../payment/payment-filter";
import {Payment} from "../../payment/payment";
import {AuthService} from "../../../params/manager/auth/auth.service";



@Component({
  selector: 'app-sale-edit',
  styleUrls:['./sale-edit.scss'],
  templateUrl: './sale-edit.component.html'
})
export class SaleEditComponent implements OnInit {
  id: string;
  sale: Sale=new Sale();

  feedback: any = {};
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private saleService: SaleService,
    private customerService: CustomerService,
    private pcu_service:SaleUnitService,
    private paymentService:PaymentService,
    private authService:AuthService,
    private matDialog:MatDialog,

  )
  {}





  visualize() {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its bo
    dialogConfig.disableClose = false;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "90vh";
    dialogConfig.width = "60vh";
    dialogConfig.data= {
      sale:this.sale
    }


    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(SalePrintComponent, dialogConfig);
  }







  ngOnInit() {

    this
      .route
      .params
      .pipe(
        map(p => p.id),
        switchMap(id => {
          if (id === 'new') {var sale=new Sale;sale.date_finalizing=new Date(); return of(new Sale()); }
          return this.saleService.findById(id);
        })
      )
      .subscribe(sale => {
          this.sale=sale;


          if(!sale._id) {
            this.sale.sale_units_datasource=new MatTableDataSource<SaleUnit>(new Array<SaleUnit>());

            this.sale.date_finalizing=new Date();
          }

          else {



            var filter=new SaleUnitFilter();
            filter.sale=this.sale._id

            this.customerInput.setValue(this.sale.customer);
            this.pcu_service.find(filter).subscribe(data=>{
              this.sale.sale_units_datasource=new MatTableDataSource<SaleUnit>(data);
              Sale.calculateAmounts(this.sale);









            },error=>this.feedback = {type: 'warning', message: 'Erreur lors du chargement des produits de la vente'})


            var filter2=new PaymentFilter();
            filter2.sale=this.sale._id;

            this.paymentService.find(filter2).subscribe(data=>{
                this.sale.sale_payments=new MatTableDataSource<Payment>(data);

                Sale.calculateAmountsPayement(this.sale);

              }

              ,error=>this.feedback = {type: 'warning', message: 'Erreur lors de la liste des paiements'})





            this.feedback = {};
          }},
        err => {
          this.feedback = {type: 'warning', message: 'Erreur lors du chargement'};
        }
      );

    this.configureCustomerInput()

  }
  save() {


    this.saleService.save(this.sale).subscribe(
      sale => {
        this.sale._id=sale._id;
        this.sale.sale_payments=new MatTableDataSource<Payment>(new Array<Payment>());
        this.feedback = {type: 'success', message: 'Commmande enregistrée avec succès; La livraison est prévue pour le :'+sale.date_finalizing};
        if(confirm("Voulez-vous régler le paiement de cette vente maintenant?")){
          var payment=new Payment();
          payment.manager=this.authService.active_user;
          payment.amount=this.sale.amount;
          payment.sale=this.sale;
          payment.date=new Date();

          this.paymentService.save(payment).subscribe(
            data=>{
              Sale.addPayment(payment,this.sale);
              Sale.updatePaymentStatus(this.sale,this.saleService);

              this.feedback = {type: 'succes', message: "Paiement effectué avec succès : "};
            }
            ,error=>{

              this.feedback = {type: 'warning', message: "Erreur lors de l'enregistrement du paiement : "};
            }


          );

          setTimeout(() => {
            this.router.navigate(['/stock_operations/sales/',sale._id]);
            this.feedback={}
          }, 500);





          return
        }



        setTimeout(() => {
      //    this.router.navigate(['/stock_operations/sales']);
        }, 1000);
      },
      err => {
        this.feedback = {type: 'warning', message: "Erreur lors de l'enregistrement : "+err};
      }
    );
  }
  cancel() {
    this.router.navigate(['/stock_operations/sales']);
  }

  filteredCustomerList:Customer[]=new Array<Customer>();
  customerInput:FormControl;
  selectedCustomer:Customer;
  isLoadingCustomer=false;
  customerClick(event: any) {
    this.selectedCustomer= event.option.value;
  }
  checkCustomer() {
    if(this.sale._id)return;
    if (!this.selectedCustomer|| this.selectedCustomer!== this.customerInput.value) {
      this.customerInput.setValue(null);
      this.selectedCustomer= null;
      return;
    }
    this.sale.customer=this.selectedCustomer;
  }
  displayCustomer(customer:Customer) {
    if (customer) return customer.name;
  }
  configureCustomerInput(){
    this.customerInput=new FormControl();
    this.customerInput.valueChanges
      .pipe(
        debounceTime(500),
        tap(() => {this.isLoadingCustomer= true; }),
        switchMap(value => this.customerService.find(new CustomerFilter(value))
          .pipe(
            finalize(() => this.isLoadingCustomer= false),
          )
        )
      )
      .subscribe((resultList =>{
        caster.arrayCast(resultList,Customer);
        this.filteredCustomerList=resultList;}))
  }



  public makeNow(){
    if(!confirm("Voulez vous vraiment effectuer la livraison de cette vente maintenant? "))return;
    this.saleService.save(this.sale).subscribe(
      sale => {
        //this.sale = sale;
        this.feedback = {type: 'success', message: 'Livraison effectuée avec succès '+this.sale.date_finalizing};
        setTimeout(() => {
          this.router.navigate(['/stock_operations/sales/',sale._id]);
        }, 1000);
      },
      err => {
        this.sale.status=false;
        this.feedback = {type: 'warning', message: "Erreur lors de l'enregistrement : "+err};
      }
    );

  }

}
0
