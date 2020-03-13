import { Component } from '@angular/core';
import {environment} from "../environments/environment";
import {AuthService} from "./params/manager/auth/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = environment['app_name'];
  constructor(private authService:AuthService) {
this.authService.loadDefaultManager();
  }
}
