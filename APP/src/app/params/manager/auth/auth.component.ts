import { Component, OnInit } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  feedback: any = {};
  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit() {
  }


  nameInput:FormControl=new FormControl();
  passwordInput:FormControl=new FormControl();



authForm:FormGroup=new FormGroup(
      {
    "name":this.nameInput,
    "password":this.passwordInput




  }


);
public submit(){

    this.authService.login(this.nameInput.value,this.passwordInput.value).subscribe(
      data=>{

        if(data.length>0) {

          this.feedback = {type: 'success', message: 'Connexion réussie'};
          setTimeout(() => {this.authService.active_user = data[0];this.router.navigateByUrl("/");






          }, 500)
        }
        else{
          this.feedback = {type: 'warning', message: 'Paramètres invalides'};

        }



      },
      error => {
        this.feedback = {type: 'warning', message: "Echec de connexion : "+error.message};
      }







    )
  }



}
