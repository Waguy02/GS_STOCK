import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { map, switchMap, debounceTime, tap, finalize } from 'rxjs/operators';
import { of } from 'rxjs';
const caster=require('angular-crud/gs-cast');
import { ProductCommandService } from '../product-command.service';
import { ProductCommand } from '../product-command';

import { ProviderService } from "src/app/partners/provider/provider.service";
import { Provider} from "src/app/partners/provider/provider";
import { ProviderFilter} from "src/app/partners/provider/provider-filter";
import {ProductCommandUnit} from "../product_command_unit/product-command-unit";
import {MatTableDataSource} from "@angular/material/table";
import {ProductCommandUnitService} from "../product_command_unit/product-command-unit.service";
import {ProductCommandUnitFilter} from "../product_command_unit/product-command-unit-filter";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {ProductCommandPrintComponent} from "../product-command-print/product-command-print.component";
import {ProductCommandListComponent} from "../product-command-list/product-command-list.component";
import {PaymentService} from "../../payment/payment.service";
import {PaymentFilter} from "../../payment/payment-filter";
import {Payment} from "../../payment/payment";
import {AuthService} from "../../../params/manager/auth/auth.service";



@Component({
  selector: 'app-product-command-edit',
  styleUrls:['./product-command-edit.scss'],
  templateUrl: './product-command-edit.component.html'
})
export class ProductCommandEditComponent implements OnInit {
  id: string;
  product_command: ProductCommand=new ProductCommand();

  feedback: any = {};
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private product_commandService: ProductCommandService,
    private providerService: ProviderService,
    private pcu_service:ProductCommandUnitService,
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
      command:this.product_command
    }


    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(ProductCommandPrintComponent, dialogConfig);
  }







  ngOnInit() {

    this
      .route
      .params
      .pipe(
        map(p => p.id),
        switchMap(id => {
          if (id === 'new') { return of(new ProductCommand()); }
          return this.product_commandService.findById(id);
        })
      )
      .subscribe(product_command => {
          this.product_command=product_command;


          if(!product_command._id) {
            this.product_command.command_units_datasource=new MatTableDataSource<ProductCommandUnit>(new Array<ProductCommandUnit>());


          }

          else {



           var filter=new ProductCommandUnitFilter();
           filter.command=this.product_command._id

            this.pcu_service.find(filter).subscribe(data=>{
              this.product_command.command_units_datasource=new MatTableDataSource<ProductCommandUnit>(data);
              ProductCommand.calculateAmounts(this.product_command);
              this.providerInput.setValue(this.product_command.provider);








            },error=>this.feedback = {type: 'warning', message: 'Erreur lors du chargement des produits de la commande'})


            var filter2=new PaymentFilter();
            filter2.command=this.product_command._id;

            this.paymentService.find(filter2).subscribe(data=>{
                this.product_command.command_payments=new MatTableDataSource<Payment>(data);

                ProductCommand.calculateAmountsPayement(this.product_command);

                }

              ,error=>this.feedback = {type: 'warning', message: 'Erreur lors de la liste des paiements'})





          this.feedback = {};
        }},
        err => {
          this.feedback = {type: 'warning', message: 'Erreur lors du chargement'};
        }
      );

    this.configureProviderInput()

  }
  save() {
    if(this.product_command._id)return;
    this.product_commandService.save(this.product_command).subscribe(
      product_command => {
        this.product_command._id=product_command._id;
        this.product_command.command_payments=new MatTableDataSource<Payment>(new Array<Payment>());
        this.feedback = {type: 'success', message: 'Commmande enregistrée avec succès; La livraison est prévue pour le :'+product_command.date_finalizing};

        if(confirm("Voulez-vous régler le paiement de cette commande maintenant?")){
          var payment=new Payment();
          payment.manager=this.authService.active_user;
          payment.amount=this.product_command.amount;
          payment.product_command=this.product_command;
          payment.date=new Date();

          this.paymentService.save(payment).subscribe(
            data=>{
              ProductCommand.addPayment(payment,this.product_command);
              ProductCommand.updatePaymentStatus(this.product_command,this.product_commandService);
              this.product_command.payment_status=true;
              this.feedback = {type: 'succes', message: "Paiement effectué avec succès : "};
            }
            ,error=>{
              alert("Erre")

              this.feedback = {type: 'warning', message: "Erreur lors de l'enregistrement du paiement : "};
            }


          );

          setTimeout(() => {
    this.feedback={}
          }, 2000);





        return
        }



        setTimeout(() => {
          this.router.navigate(['/stock_operations/productCommands']);
        }, 1000);
      },
      err => {
        this.feedback = {type: 'warning', message: "Erreur lors de l'enregistrement : "+err};
      }
    );
  }
  cancel() {
    this.router.navigate(['/stock_operations/productCommands']);
  }

  filteredProviderList:Provider[]=new Array<Provider>();
  providerInput:FormControl;
  selectedProvider:Provider;
  isLoadingProvider=false;
  providerClick(event: any) {
    this.selectedProvider= event.option.value;
  }
  checkProvider() {
        if(this.product_command._id)return;
    if (!this.selectedProvider|| this.selectedProvider!== this.providerInput.value) {
      this.providerInput.setValue(null);
      this.selectedProvider= null;
      return;
    }
    this.product_command.provider=this.selectedProvider;
  }
  displayProvider(provider:Provider) {
    if (provider) return provider.name;
  }
  configureProviderInput(){
    this.providerInput=new FormControl();
    this.providerInput.valueChanges
      .pipe(
        debounceTime(500),
        tap(() => {this.isLoadingProvider= true;}),
        switchMap(value => this.providerService.find(new ProviderFilter(value))
          .pipe(
            finalize(() => this.isLoadingProvider= false),
          )
        )
      )
      .subscribe((resultList =>{
        caster.arrayCast(resultList,Provider);
        this.filteredProviderList=resultList;}))
  }



  public makeNow(){
    if(!confirm("Voulez vous vraiment effectuer la livraison de cette commande maintenant? "))return;
    this.product_commandService.save(this.product_command).subscribe(
      product_command => {
        this.product_command = product_command;
        this.feedback = {type: 'success', message: 'Livraison effectuée avec succès '+this.product_command.date_finalizing};
        setTimeout(() => {
          this.router.navigate(['/stock_operations/productCommands']);
        }, 1000);
      },
      err => {
        this.product_command.status=false;
        this.feedback = {type: 'warning', message: "Erreur lors de l'enregistrement : "+err};
      }
    );

  }

}
