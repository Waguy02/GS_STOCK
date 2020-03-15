export class ClassProductFilter {
    product = '';
    label = '';
    constructor(value){
      if(!value)return;
      this.product=value;
      this.label=value;
    }
    status=undefined;
}
