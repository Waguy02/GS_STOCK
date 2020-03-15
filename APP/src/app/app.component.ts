import { Component } from '@angular/core';
import {environment} from "../environments/environment";
import {AuthService} from "./params/manager/auth/auth.service";
import {ConfigurationService} from "./configuration/configuration.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = environment['app_name'];
  constructor(private authService:AuthService,private configurationService :ConfigurationService) {
      this.authService.loadDefaultManager();

  }
}
