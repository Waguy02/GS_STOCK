


  import { Manager} from   "src/app/params/manager/manager";


  import { ProductCommand} from   "src/app/stock_operations/product_command/product-command";
  import {Sale} from "../sale/sale";


export class Payment {

  _id: string;
  date: Date;
  manager: Manager;
  amount:number;

  product_command: ProductCommand;
  sale:Sale;
  status: boolean;
get display(){
    return  "payment_display"; // Remplacer avec la chaine que vous souhaitez afficher
  }
}
