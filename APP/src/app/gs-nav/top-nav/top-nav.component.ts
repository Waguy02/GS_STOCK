import { Component, OnInit } from '@angular/core';
import {environment} from "../../../environments/environment";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {ParamComponent} from "../param/param.component";
import {AuthService} from "../../params/manager/auth/auth.service";

@Component({
  selector: 'top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
  private sidebarVisible = false;

  constructor(public matDialog:MatDialog,public authService:AuthService) {
  }
   app_name:string=environment['app_name'];

  ngOnInit(): void {
  }

  sidebarToggle() {
    let body = document.getElementsByTagName('body')[0];

    if (this.sidebarVisible == false) {
      body.classList.add('nav-open');
      this.sidebarVisible = true;
    } else {
      this.sidebarVisible = false;
      body.classList.remove('nav-open');
    }
  }



  public openParam(){

      const dialogConfig = new MatDialogConfig();
      // The user can't close the dialog by clicking outside its body

      dialogConfig.id = "modal-component";
      dialogConfig.height = "350px";
      dialogConfig.width = "600px";
      // https://material.angular.io/components/dialog/overview
      const modalDialog = this.matDialog.open(ParamComponent, dialogConfig);


  }
    public disconnect(){

        if(confirm("Voulez-vous vraiment vous déconnecter? Toutes les opérations non achevées seront annulées.")){this.authService.logout();}

    }
}
