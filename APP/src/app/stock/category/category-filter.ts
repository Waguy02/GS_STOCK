export class CategoryFilter {
    name = '';
    description = '';
    status = '';
    constructor(value){
      if(!value)return;
      this.name=value;
      this.description=value;
    }


}
