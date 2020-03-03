

    
  import { Category} from   "src/app/stock/category/category";
  
export class Product {
  
  _id: string;
  name: string;
  description: string;
  category: Category;
  unit_price: number;
  status: boolean;
get display(){
    return  "product_display"; // Remplacer avec la chaine que vous souhaitez afficher
  }
}
