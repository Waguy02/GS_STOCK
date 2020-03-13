


import { Customer} from   'src/app/partners/customer/customer';


import { Manager} from   'src/app/params/manager/manager';
import {SaleUnit} from './sale_unit/sale-unit';
import {MatTableDataSource} from '@angular/material/table';
import {Payment} from "../payment/payment";
import {SaleService} from "./sale.service";



export class Sale {

  _id: string;
  customer: Customer;
  manager: Manager;
  date_finalizing: Date;
  date_initiating:Date;
  sale_units;
  sale_units_datasource: MatTableDataSource<SaleUnit>=new MatTableDataSource(new Array<SaleUnit>());
  sale_payments:MatTableDataSource<Payment>=new MatTableDataSource<Payment>(new Array<Payment>());

  amount:number=0;
  payment_status:boolean=false;
  status: boolean;
  get display() {
    return  'sale_display'; // Remplacer avec la chaine que vous souhaitez afficher
  }




  public add(sale_unit:SaleUnit){

    this.sale_units_datasource.data.push(sale_unit);
    this.sale_units_datasource._updateChangeSubscription();
    this.amount+=sale_unit.unit_price*sale_unit.quantity;

    console.log(this.sale_units_datasource.data);

  }


  public remove(sale_unit:SaleUnit){
    const index=this.sale_units_datasource.data.indexOf(sale_unit);
    this.sale_units_datasource.data.splice(index,1);
    this.sale_units_datasource._updateChangeSubscription();

    this.amount-=sale_unit.unit_price*sale_unit.quantity;

  }

  public static calculateAmount(sale) {


    sale.amount = 0;
    for (var pcu of sale.sale_units_datasource.data) {
      sale.amount += pcu.quantity * pcu.unit_price;
    }


  }

  public amount_payment:number=0;

  public static calculateAmountPayement(sale) {


    sale.amount_payment = 0;
    for (var py of sale.sale_payments.data) {
      sale.amount_payment += py.amount;
    }


  }

  public static addPayment(payment:Payment,sale:Sale) {
    try {
      sale.sale_payments.data.push(payment);

      Sale.calculateAmountPayement(sale);

    }
    catch(err){
      throw(err);
    }
  }

  public static updatePaymentStatus(sale:Sale,saleService:SaleService){

    if(sale.payment_status==true)return;
    if(sale.amount_payment==sale.amount) sale.payment_status=true;
    saleService.close_payments(sale).subscribe(
      data=>{sale.payment_status=true;},
      err=>{console.log(err);throw(err);sale.payment_status=false})



  }
}
