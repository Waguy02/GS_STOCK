import {Component, Inject, Input, OnInit} from '@angular/core';

import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ProductCommand} from "../product-command";
@Component({
  selector: 'app-product-command-print',
  templateUrl: './product-command-print.component.html',
  styleUrls: ['./product-command-print.component.scss']
})
export class ProductCommandPrintComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ProductCommandPrintComponent>,
              @Inject(MAT_DIALOG_DATA) public data:any
              ) {
      console.log(data);

    this.command=data.command;
  }


  command:ProductCommand;




  close() {

    this.dialogRef.close();
  }

  ngOnInit() {


  }

}
