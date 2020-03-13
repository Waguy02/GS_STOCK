export class ProviderFilter {
    name = '';
    status = '';
    constructor(value){
      if(!value)return;
      this.name=value;
    }
}
