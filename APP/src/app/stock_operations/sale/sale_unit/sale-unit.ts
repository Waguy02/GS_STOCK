


import { Product} from   'src/app/stock/product/product';


import { Sale} from   'src/app/stock_operations/sale/sale';
import {ClassProduct} from "../../../stock/class_product/class-product";


export class SaleUnit {

  _id: string;

  product_class: ClassProduct=new ClassProduct();
  quantity: number;
  unit_price: number;
  date_delivrance: Date;
  status: boolean;
  sale:Sale;
  get display() {
    return  'sale_unit_display'; // Remplacer avec la chaine que vous souhaitez afficher
  }
}


