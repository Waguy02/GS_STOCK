

    
  import { Product} from   "src/app/stock/product/product";
  
export class ClassProduct {
  
  _id: string;
  product: Product;
  label: string;
  unit_price: number;
  date_intrance: Date;
  quantity: number;
  status: boolean;
get display(){
    return  "class_product_display"; // Remplacer avec la chaine que vous souhaitez afficher
  }
}
