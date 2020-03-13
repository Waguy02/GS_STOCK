export class ProductFilter {
    name = '';
    description = '';
    unit_price = '';
    status = '';

    constructor(value) {
      if(!value)return;
      this.name=value;
      this.description=value;
    }
}
