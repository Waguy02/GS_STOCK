


  import { Product} from   'src/app/stock/product/product';


  import { ProductCommand} from   'src/app/stock_operations/product_command/product-command';
  import {ClassProduct} from "../../../stock/class_product/class-product";

  export class ProductCommandUnit {

  _id: string;

  product_class: ClassProduct=new ClassProduct();
  quantity: number;
  unit_price: number;
  date_delivrance: Date;
  status: boolean;
get display() {
    return  'product_command_unit_display'; // Remplacer avec la chaine que vous souhaitez afficher
  }
}
