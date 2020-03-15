


  import { Product} from   "src/app/stock/product/product";
  import {SaleUnit} from "../../stock_operations/sale/sale_unit/sale-unit";

export class ClassProduct {

  _id: string;
  product: Product;
  label: string;
  unit_price: number;
  date_intrance: Date;
  quantity: number;



  initialQuantity:number;
  expectedBenef:number;
  initialExpectedBenef;


  saleUnits:SaleUnit[];//Listes des ventes réalisées


  status: boolean;
    get display(){
        return  "class_product_display"; // Remplacer avec la chaine que vous souhaitez afficher
      }
}
