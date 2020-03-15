import { Component, OnInit } from '@angular/core';
import {ClassProductService} from "../stock/class_product/class-product.service";
import {ProductCommandService} from "../stock_operations/product_command/product-command.service";
import {SaleService} from "../stock_operations/sale/sale.service";
import {ProductCommand} from "../stock_operations/product_command/product-command";
import {Sale} from "../stock_operations/sale/sale";
import {CustomerService} from "../partners/customer/customer.service";
import {ProviderService} from "../partners/provider/provider.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private productClassService:ClassProductService,private commandService:ProductCommandService,
              private saleService:SaleService,
              private customerService:CustomerService,
              private providerService:ProviderService

              ) { }

  ngOnInit() {
    this.initProductBox();
    this.initCommandBox();
    this.initSaleBox();
    this.initPartenarBox();
  }

  feedback:any;
  product_class_count:number;
  public initProductBox(){
    this.productClassService.count().subscribe(
      count=>this.product_class_count=count,

    err=>{
        this.feedback = {type: 'warning', message: "Erreur lors du chargement du dashboard : "+err.message};
      }
    )

}





oncomming_commands:any;
last_command:ProductCommand;

public initCommandBox(){
  this.commandService.load_on_comming().subscribe(data=>this.oncomming_commands=data,err=>{
    this.feedback = {type: 'warning', message: "Erreur lors du chargement du dashboard : "+err.message};
  });


  this.commandService.load_last().subscribe(data=>this.last_command=data,err=>{
    this.feedback = {type: 'warning', message: "Erreur lors du chargement du dashboard : "+err.message};
  });







}



  oncomming_sales:any;
  last_sale:Sale;

  public initSaleBox() {
    this.saleService.load_on_comming().subscribe(data => this.oncomming_sales = data, err => {
      this.feedback = {type: 'warning', message: "Erreur lors du chargement du dashboard : " + err.message};
    });


    this.saleService.load_last().subscribe(data => this.last_sale = data, err => {
      this.feedback = {type: 'warning', message: "Erreur lors du chargement du dashboard : " + err.message};
    });


  }


  customer_count:number;
  provider_count:number;

public initPartenarBox(){
  this.customerService.count().subscribe(data=>this.customer_count=data,err=> {
    this.feedback = {type: 'warning', message: "Erreur lors du chargement du dashboard : " + err.message};
  });
  this.providerService.count().subscribe(data=>this.provider_count=data,err=> {
    this.feedback = {type: 'warning', message: "Erreur lors du chargement du dashboard : " + err.message};
  });



}









}


