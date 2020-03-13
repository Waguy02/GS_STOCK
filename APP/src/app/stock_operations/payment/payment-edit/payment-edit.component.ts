import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {FormControl, Validators} from '@angular/forms';
import { map, switchMap, debounceTime, tap, finalize } from 'rxjs/operators';
import { of } from 'rxjs';
const caster=require('angular-crud/gs-cast');
import { PaymentService } from '../payment.service';
import { Payment } from '../payment';

  import { ManagerService } from "src/app/params/manager/manager.service";
import { Manager} from "src/app/params/manager/manager";
import { ManagerFilter} from "src/app/params/manager/manager-filter";

  import { ProductCommandService } from "src/app/stock_operations/product_command/product-command.service";
import { ProductCommand} from "src/app/stock_operations/product_command/product-command";
import { ProductCommandFilter} from "src/app/stock_operations/product_command/product-command-filter";
import {AuthService} from "../../../params/manager/auth/auth.service";
import {Sale} from "../../sale/sale";
import {SaleService} from "../../sale/sale.service";

@Component({
  selector: 'app-payment-edit',
  styleUrls:['./payment-edit.scss'],
  templateUrl: './payment-edit.component.html'
})
export class PaymentEditComponent implements OnInit {
id: string;
amountInput:FormControl=new FormControl();
dateInput:FormControl=new FormControl();
@Input()
product_command:ProductCommand;

@Input()
sale:Sale;

payment: Payment;
  feedback: any = {};
constructor(
    private route: ActivatedRoute,
    private router: Router,
    private paymentService: PaymentService,
     private managerService:ManagerService,
     private authService: AuthService,  private product_commandService: ProductCommandService,
    private saleService:SaleService
    )
    {
  }
ngOnInit() {

  this.payment=new Payment()   ;
  this.configureAmountInput();
    this.configureDateInput();
}



configureAmountInput(){

  let minAmount=1;

let maxAmount=0;
     if(this.product_command)maxAmount=this.product_command.amount-this.product_command.amount_payment;
      if(this.sale)maxAmount=this.sale.amount-this.sale.amount_payment;
  this.payment.amount=maxAmount;
  this.amountInput.setValidators( [Validators.max(maxAmount), Validators.min(minAmount)])


}


configureDateInput(){

  this.payment.date=new Date();
}

save() {
  if (this.product_command) {
    this.payment.product_command = this.product_command;
    this.payment.manager = this.authService.active_user;
    this.paymentService.save(this.payment).subscribe(
      payment => {
        this.payment = payment;
        this.feedback = {type: 'success', message: 'Payment effectué avec succès'};
        this.ngOnInit();
        setTimeout(() => {
          this.feedback = {};
          ProductCommand.addPayment(payment, this.product_command);
          ProductCommand.updatePaymentStatus(this.product_command, this.product_commandService);
        }, 1000);
      },
      err => {
        this.feedback = {type: 'warning', message: "Erreur lors de l'enregistrement du paiement : " + err.message};
      }
    );}
  if(this.sale){
    this.payment.sale = this.sale
    this.payment.manager = this.authService.active_user;
    this.paymentService.save(this.payment).subscribe(
      payment => {
        this.payment = payment;
        this.feedback = {type: 'success', message: 'Payment effectué avec succès'};
        this.ngOnInit();
        setTimeout(() => {
          this.feedback = {};
          Sale.addPayment(payment, this.sale);
          Sale.updatePaymentStatus(this.sale, this.saleService);
        }, 1000);
      },
      err => {
        this.feedback = {type: 'warning', message: "Erreur lors de l'enregistrement du paiement : " + err.message};
      }
    );

  }
  }
  cancel()
  {
    this.router.navigate(['/stock_operations/payments']);
  }


}
