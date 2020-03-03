import { MatToolbarModule, MatSidenavModule, MatListModule, MatIconModule, MatExpansionModule } from '@angular/material';

import { GsNavRoutingModule } from './gs-nav.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './base/base.component';
import { NavItemComponent } from './nav-item/nav-item.component';

import { NgxNavbarModule } from 'ngx-bootstrap-navbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {TopNavComponent} from './top-nav/top-nav.component';
import {ParamComponent} from "./param/param.component";
import {MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [BaseComponent, NavItemComponent , TopNavComponent, ParamComponent],
  imports: [
    CommonModule,
    NgxNavbarModule,
    BrowserAnimationsModule,
    GsNavRoutingModule,

    MatExpansionModule,
    MatCardModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule

  ],
  exports: [
    BaseComponent, NavItemComponent, TopNavComponent
  ],
  entryComponents: [
    ParamComponent
  ]
})
export class GsNavModule { }
