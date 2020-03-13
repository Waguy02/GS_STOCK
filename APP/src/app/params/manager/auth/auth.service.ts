import { Injectable } from '@angular/core';
import {Manager} from "../manager";
import {CanActivate, Router} from "@angular/router";
import {Observable} from "rxjs";
import {ManagerService} from "../manager.service";


@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate{
    canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
        if(this.active_user){
          return true;
        }

        else{
          this.router.navigateByUrl("/auth")
        }
    }

  constructor(private router:Router,private managerService:ManagerService) { }

  active_user:Manager;




  public loadDefaultManager() {
    var adminId="5e66220a1a223c30a84866e8";

    this.active_user=new Manager();
    this.active_user._id=adminId;
    this.active_user.name="admin";


  }



  public login(name:String,password:String){
    return this.managerService.findByCredentials(name, password);
  }

  public logout(){

    this.active_user=null;
  }












}
