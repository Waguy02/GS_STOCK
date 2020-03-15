import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import {ConfigurationService} from "../configuration/configuration.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  app_name:string;
  constructor(private confService:ConfigurationService) {



    this.app_name=this.confService.environment['app_name'];
  }
  ngOnInit() {

  }

}
