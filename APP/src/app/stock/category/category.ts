

export class Category {
  
  _id: string;
  name: string;
  description: string;
  status: boolean;
get display(){
    return  "category_display"; // Remplacer avec la chaine que vous souhaitez afficher
  }
}
