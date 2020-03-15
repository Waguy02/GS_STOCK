import {Provider} from 'src/app/partners/provider/provider';


import {Manager} from 'src/app/params/manager/manager';
import {ProductCommandUnit} from './product_command_unit/product-command-unit';
import {MatTableDataSource} from '@angular/material/table';
import {Payment} from "../payment/payment";
import {ProductCommandService} from "./product-command.service";


export class ProductCommand {

  _id: string;
  provider: Provider;
  manager: Manager;
  date_finalizing: Date;
  date_initiating: Date;
  command_units;
  command_units_datasource: MatTableDataSource<ProductCommandUnit> = new MatTableDataSource(new Array<ProductCommandUnit>());
  command_payments: MatTableDataSource<Payment> = new MatTableDataSource<Payment>(new Array<Payment>());
  amount: number = 0;
  amount_payment: number = 0;
  payment_status: boolean = false;
  status: boolean;

  get display() {
    return 'product_command_display'; // Remplacer avec la chaine que vous souhaitez afficher
  }


  public add(product_command_unit: ProductCommandUnit) {

    this.command_units_datasource.data.push(product_command_unit);
    this.command_units_datasource._updateChangeSubscription();
    this.amount += product_command_unit.unit_price * product_command_unit.quantity;

    console.log(this.command_units_datasource.data);

  }


  public remove(product_command_unit: ProductCommandUnit) {
    const index = this.command_units_datasource.data.indexOf(product_command_unit);
    this.command_units_datasource.data.splice(index, 1);
    this.command_units_datasource._updateChangeSubscription();
    this.amount -= product_command_unit.unit_price * product_command_unit.quantity;
  }

  public static calculateAmounts(product_command) {


    product_command.amount = 0;
    for (var pcu of product_command.command_units_datasource.data) {
      product_command.amount += pcu.quantity * pcu.unit_price;
    }


  }

  public static calculateAmountsPayement(product_command) {


    product_command.amount_payment = 0;
    for (var py of product_command.command_payments.data) {
      product_command.amount_payment += py.amount;
    }


  }

  public static addPayment(payment: Payment, command: ProductCommand) {
    try {
      command.command_payments.data.push(payment);

      ProductCommand.calculateAmountsPayement(command);

    } catch (err) {
      throw(err);
    }
  }

  public static updatePaymentStatus(product_command: ProductCommand, productCommandService: ProductCommandService) {

    if (product_command.payment_status == true) return;
    if (product_command.amount_payment == product_command.amount) {
      product_command.payment_status = true;
      productCommandService.close_payments(product_command).subscribe(
        data => {
          product_command.payment_status = true;
        },
        err => {
          console.log(err);
          throw(err);
          product_command.payment_status = false
        })


    }
  }
}
