import { Injectable } from '@angular/core';
const d3=require('d3-array');
@Injectable()
export class StatisticalService {

  constructor() { }
  datas:Array<any>;
  numeric_datas:Array<number>=new Array<number>();
  values:Map<string,number>=new Map();



  public setDatas(newDatas:Array<any>){
      this.datas=newDatas;


  }


  public computeSum(property){

    this.numeric_datas=this.datas.map(function(value){ ;return value[property]})
    this.values.set('sum',d3.sum(this.numeric_datas));

  }


  public computeProductSum(first_property,second_property){
    this.numeric_datas=this.datas.map(function(value){  ;return value[first_property]*value[second_property]})
    this.values.set('sum_product',d3.sum(this.numeric_datas));



  }
}
