(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div  *ngIf=\"!authService.active_user;else content\" class=\"wrapper auth\" style=\"padding-left: 10px;padding-right: 10px;background:  linear-gradient(white,lightblue)\"\r\n fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n\r\n<app-auth></app-auth>\r\n</div>\r\n\r\n<ng-template #content>\r\n<div class=\"wrapper\">\r\n\r\n    <div class=\"sidebar\" data-background-color=\"white\" data-active-color=\"danger\">\r\n      <app-nav></app-nav>\r\n    </div>\r\n    <div class=\"main-panel card\">\r\n      <top-nav></top-nav>\r\n      <div class=\"content\">\r\n\r\n\r\n        <router-outlet></router-outlet>\r\n        <router-outlet name=\"aux\"></router-outlet>\r\n\r\n\r\n      </div>\r\n    </div>\r\n\r\n\r\n  </div>\r\n</ng-template>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<mat-card style=\"height:100%;width: 100%\">\n\n  <mat-card-title class=\"h1 lead\"  >\n    Tableau de bord\n  </mat-card-title>\n  <div *ngIf=\"feedback\" class=\"alert alert-{{feedback.type}}\">{{ feedback.message }}</div>\n<mat-grid-list cols=\"2\" rowHeight=\"2:1\"   >\n  <mat-grid-tile fxLayout=\"column\" style=\"padding:0px\" fxLayoutAlign=\"space-between\">\n\n\n\n    <mat-card  fxLayout=\"column\" style=\"height: 90%\" fxFlex=\"90\">\n\n        <mat-card-header class=\"h4 bg-secondary\">\n          Stock de produits\n        </mat-card-header>\n\n      <mat-label class=\"h5 lead\">Nombre de Stock de produits</mat-label>\n\n\n\n      <span class=\"h3 rounded-circle text-center\"  style=\"border-style:inset;border-radius: 3.14em;\">{{product_class_count}}\n\n      </span>\n\n\n\n\n\n\n\n\n\n      <a  routerLink=\"/stock/classProducts\" class=\"btn btn-fill \">Consulter les stocks</a>\n      </mat-card>\n\n\n\n  </mat-grid-tile>\n\n\n  <mat-grid-tile fxLayout=\"column\" style=\"padding:0px\" fxLayoutAlign=\"space-between\">\n\n\n\n    <mat-card  fxLayout=\"column\" style=\"height: 90%\" fxFlex=\"90\">\n\n      <mat-card-header class=\"h4\" style=\"padding:3px\" fxLayoutAlign=\"space-between\">\n        <span>Commandes</span>\n        <a routerLink=\"/stock_operations/productCommands\" class=\"btn btn-secondary bold\">Consulter les commandes</a>\n      </mat-card-header>\n      <div fxLayout=\"row\" fxLayoutAlign=\"space-between\" class=\"alert-danger\" *ngIf=\"oncomming_commands\">\n        <mat-label class=\"h6 bold lead\">En attente</mat-label>\n        <span fxFlex=\"20\" class=\"h6 rounded-circle text-center\"  style=\"border-style:inset;border-radius: 3.14em;\">{{oncomming_commands.count}}\n\n      </span>\n\n\n        <span fxFlex=\"50\" class=\"h6 rounded-circle text-center\"  style=\"border-style:inset;border-radius: 3.14em;\">\n        {{oncomming_commands.amount|currency:'FCFA':'symbol':'1.0-0':'fr'}}\n\n      </span>\n\n      </div>\n\n\n\n\n\n\n\n\n      <mat-card fxLayout=\"column\"  fxFlex=\"50\" fxLayoutAlign=\"space-between\">\n\n        <mat-label class=\"p-6 bold text-center\"  fxFlex=\"20\" style=\"font-size: 15px\">Dernière commande</mat-label>\n\n        <mat-card-content class=\"white-transparent\" fxFlex=\"75\"  fxLayout=\"row\" fxLayoutAlign=\"space-between\" *ngIf=\"last_command\" >\n\n        <mat-form-field fxFlex=\"20\">\n          <mat-label>\n            Date\n          </mat-label>\n\n\n      <div class=\"bold h6 \">\n        <input matInput readonly  [value]=\"last_command.date_finalizing|date\">\n        </div>\n        </mat-form-field>\n\n\n\n       <a  fxFlex=\"50\" [routerLink]=\"['/stock_operations/productCommands', last_command._id ]\" class=\"btn btn-fill h6\">Consulter</a>\n\n\n\n        <mat-form-field fxFlex=\"20\">\n          <mat-label>\n          Montant\n          </mat-label>\n\n\n          <div class=\"bold h6\" >\n        <input matInput readonly  [value]=\"last_command.amount|currency:'FCFA':'symbol':'1.0-0':'fr'\">\n          </div>\n        </mat-form-field>\n\n        </mat-card-content>\n      </mat-card>\n\n\n\n      </mat-card>\n\n\n\n\n  </mat-grid-tile>\n\n\n\n  <mat-grid-tile>\n\n\n\n    <mat-card  fxLayout=\"column\" style=\"height: 90%\" fxFlex=\"90\">\n\n      <mat-card-header class=\"h4\" style=\"padding:3px\" fxLayoutAlign=\"space-between\">\n        <span>Ventes</span>\n        <a routerLink=\"/stock_operations/sales\" class=\"btn btn-secondary bold\">Consulter les ventes</a>\n      </mat-card-header>\n      <div fxLayout=\"row\" fxLayoutAlign=\"space-between\" class=\"alert-danger\" *ngIf=\"oncomming_sales\">\n        <mat-label class=\"h6 bold lead\">En attente</mat-label>\n        <span fxFlex=\"20\" class=\"h6 rounded-circle text-center\"  style=\"border-style:inset;border-radius: 3.14em;\">{{oncomming_sales.count}}\n\n      </span>\n\n\n        <span fxFlex=\"50\" class=\"h6 rounded-circle text-center\"  style=\"border-style:inset;border-radius: 3.14em;\">\n        {{oncomming_sales.amount|currency:'FCFA':'symbol':'1.0-0':'fr'}}\n\n      </span>\n\n      </div>\n\n\n\n\n\n\n\n\n      <mat-card fxLayout=\"column\"  fxFlex=\"50\" fxLayoutAlign=\"space-between\">\n\n        <mat-label class=\"p-6 bold text-center\"  fxFlex=\"20\" style=\"font-size: 15px\">Dernière vente</mat-label>\n\n        <mat-card-content class=\"white-transparent\" fxFlex=\"75\"  fxLayout=\"row\" fxLayoutAlign=\"space-between\" *ngIf=\"last_sale\" >\n\n          <mat-form-field fxFlex=\"20\">\n            <mat-label>\n              Date\n            </mat-label>\n\n\n            <div class=\"bold h6 \">\n              <input matInput readonly  [value]=\"last_command.date_finalizing|date\">\n            </div>\n          </mat-form-field>\n\n\n\n          <a  fxFlex=\"50\" [routerLink]=\"['/stock_operations/sales', last_sale._id ]\" class=\"btn btn-fill h6\">Consulter</a>\n\n\n\n          <mat-form-field fxFlex=\"20\">\n            <mat-label>\n              Montant\n            </mat-label>\n\n\n            <div class=\"bold h6\" >\n              <input matInput readonly  [value]=\"last_sale.amount|currency:'FCFA':'symbol':'1.0-0':'fr'\">\n            </div>\n          </mat-form-field>\n\n        </mat-card-content>\n      </mat-card>\n\n\n\n    </mat-card>\n  </mat-grid-tile>\n\n  <mat-grid-tile>\n    <mat-card  fxLayout=\"column\" style=\"height:90%\" fxFlex=\"95\" fxLayoutAlign=\"space-between\" >\n    <mat-card-header class=\"h4\">\n\n      Partenaires\n    </mat-card-header>\n\n    <mat-card fxLayout=\"row\" style=\"padding:5px\"  fxFlex=\"40\" *ngIf=\"customer_count\" fxLayoutAlign=\"space-around\">\n      <div fxLayout=\"column\" fxLayoutAlign=\"flex-start\">\n      <mat-label class=\"bold p-6\">Nombre de Clients</mat-label>\n\n\n\n      <span class=\"h5 rounded-circle text-center\"  style=\"border-style:inset;border-radius: 3.14em;\">{{customer_count}}\n\n      </span>\n      </div>\n      <a routerLink=\"/partners/customers\" class=\"btn btn-fill text-center\"  style=\"height: 50%\">Consulter les clients</a>\n\n    </mat-card>\n\n\n\n\n      <mat-card fxLayout=\"row\"  style=\"padding:5px\" fxFlex=\"45\" *ngIf=\"provider_count\" fxLayoutAlign=\"space-around\">\n\n        <div fxLayout=\"column\">\n             <mat-label class=\"bold p-6\">Nombre de fournisseurs</mat-label>\n\n\n\n      <span class=\"h5 rounded-circle text-center\"  style=\"border-style:inset;border-radius: 3.14em;\">{{provider_count}}\n\n\n\n\n\n      </span>\n\n        </div>\n\n        <a routerLink=\"/partners/providers\" class=\"btn btn-fill text-center\" style=\"height: 50%\">Consulter les fournisseurs</a>\n\n\n    </mat-card>\n    </mat-card>\n\n  </mat-grid-tile>\n</mat-grid-list>\n</mat-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/gs-nav/base/base.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gs-nav/base/base.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"sidebar-wrapper  base\">\n\n  <ul class=\"nav\">\n\n    <ng-content></ng-content>\n\n\n  </ul>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/gs-nav/nav-item/nav-item.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gs-nav/nav-item/nav-item.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a mat-card [routerLink]=\"target\" router fxLayout=\"row\" class=\"nav-item card\" fxLayoutAlign=\"center\"\n  routerLinkActive=\"active-nav-item\" fxFlex=\"100\">\n  <li *ngIf=\"childrenItems.length==1;else dropdown\"  (click)=\"sidenav_close()\"  fxLayout=\"row\" fxFlex=\"80\" fxLayoutAlign=\"flex-center\">\n\n\n    <i fxLayoutAlign=\"center\" fxLayout=\"column\" class={{icon}}></i>\n    <p fxLayoutAlign=\"center\" fxLayout=\"column\"><span> {{label}}</span> </p>\n\n  </li>\n</a>\n\n\n\n\n<ng-template #dropdown>\n\n  <mat-accordion style=\"width: 100%\" >\n    <mat-expansion-panel >\n\n      <mat-expansion-panel-header class=\"nav-item \" fxLayout=\"row\" fxLayoutAlign=\"flex-center\">\n\n\n\n        <li fxLayout=\"row\" fxFlex=\"80\" fxLayoutAlign=\"flex-start\">\n\n\n          <i fxLayoutAlign=\"center\" fxLayout=\"column\" class={{icon}}></i>\n          <p fxLayoutAlign=\"center\" fxLayout=\"column\"><span> {{label}}</span> </p>\n\n        </li>\n\n\n      </mat-expansion-panel-header>\n      <div style=\"height: 10px;\"></div>\n\n      <ng-content></ng-content>\n    </mat-expansion-panel>\n\n  </mat-accordion>\n</ng-template>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/gs-nav/param/param.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gs-nav/param/param.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"bg-transparent\" fxLayout=\"column\" fxLayoutAlign=\"space-between\">\n\n  <mat-card-header fxFlex=\"10\">\n      <H3>Paramètres </H3>\n    <hr/>\n  </mat-card-header>\n\n  <mat-card-content fxFlex=\"80\" class=\"bg-primary\">\n\n\n  </mat-card-content>\n</mat-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/gs-nav/top-nav/top-nav.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gs-nav/top-nav/top-nav.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" (click)=\"sidebarToggle()\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar bar1\"></span>\n        <span class=\"icon-bar bar2\"></span>\n        <span class=\"icon-bar bar3\"></span>\n      </button>\n      <mat-card class=\"white-semi-transparent navbar-brand\" fxLayout=\"row\">\n         {{app_name}}\n\n        --- {{authService.active_user.name}}\n      </mat-card>\n    </div>\n    <div class=\"collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li>\n          <a href=\"#\">\n            <i class=\"ti-close\"></i>\n            <p  (click)=\"disconnect()\">Se déconnecter</p>\n          </a>\n        </li>\n      </ul>\n\n    </div>\n  </div>\n</nav>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav/nav.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav/nav.component.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n\n\n<gs-nav title={{app_name}} orientation=\"top\">\n\n  <div class=\"logo\">\n\n      <div class=\"logo-img \" style=\"width:100%\">\n\n        <h3>{{app_name}}</h3>\n\n      </div>\n\n\n  </div>\n\n  <hr>\n\n\n\n\n\n  <nav-item label=\" produits\" icon=\"ti-bag\"  >\n\n\n\n    <nav-item label=\"Categories de produit\" target=\"stock/categories\" icon=\"ti-clip\">\n\n    </nav-item>\n    <nav-item label=\"Produits\"  icon=\"ti-marker\" target=\"stock/products\">\n\n    </nav-item>\n    <nav-item label=\"Stocks de produit\" icon=\"ti-shopping-cart\" target=\"stock/classProducts\">\n\n    </nav-item>\n\n  </nav-item>\n\n  <nav-item label=\"Partenaires\" icon=\"ti-user\">\n    <nav-item label=\"Mes clients\" icon=\"ti-user\" target=\"partners/customers\">-\n\n    </nav-item>\n\n    <nav-item label=\"Mes fournisseurs\" icon=\"ti-user\" target=\"partners/providers\">\n\n    </nav-item>\n  </nav-item>\n\n\n\n  <nav-item label=\"Commandes de produit\" target=\"stock_operations/productCommands\" icon=\"ti-list\">\n\n\n  </nav-item>\n  <nav-item label=\"Ventes de produit\" icon=\"ti-arrow-right\" target=\"stock_operations/sales\"></nav-item>\n\n  <nav-item label=\"Paramètres\" icon=\"ti-settings\">\n    <nav-item label=\"Utilisateurs\" icon=\"ti-user\" target=\"params/managers\">  </nav-item>\n\n  </nav-item>\n\n\n\n</gs-nav>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/params/manager/auth/auth.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/params/manager/auth/auth.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div fxLayout=\"row\" fxLayoutAlign=\"center\">\n\n  <mat-card fxLayout=\"column\" fxFlex=\"50\" class=\"white-semi-transparent \">\n\n    <p class=\"h1 lead text-center\"> GESTION DE STOCK </p>\n    <mat-card-header fxFlex=\"20\">\n\n      <p class=\"lead h5\">\n        Connexion\n      </p>\n    </mat-card-header>\n\n    <mat-card-content fxFlex=\"70\" fxLayout=\"column\" fxLayoutAlign=\"space-between\">\n      <mat-form-field fxFlex=\"25\">\n        <mat-label>\n          Nom d'utilisateur\n        </mat-label>\n      <input class=\"form-control\" matInput [formControl]=\"nameInput\">\n      </mat-form-field>\n      <mat-form-field fxFlex=\"25\">\n        <mat-label>\n          Mot de passe\n        </mat-label>\n        <input class=\"form-control\" matInput [formControl]=\"passwordInput\" type=\"password\">\n      </mat-form-field>\n\n      <div *ngIf=\"feedback\" class=\"alert alert-{{feedback.type}}\">{{ feedback.message }}</div>\n\n      <mat-card class=\"white-transparent\" fxFlex=\"20\">\n      <button class=\"btn btn-primary\" (click)=\"submit()\">Se connecter </button>\n      </mat-card>\n\n\n\n    </mat-card-content>\n\n\n  </mat-card>\n\n\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/params/manager/manager-edit/manager-edit.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/params/manager/manager-edit/manager-edit.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ol class=\"breadcrumb float-right\" *ngIf=\"manager\">\r\n  <li class=\"breadcrumb-item\"><a routerLink=\"/\">Accueil</a></li>\r\n  <li class=\"breadcrumb-item active\" routerLink=\"/params/managers\">\r\n    Utilisateur\r\n  </li>\r\n  <li *ngIf=\"manager._id\"  class=\"breadcrumb-item active\">\r\n    {{manager._id}}\r\n  </li>\r\n<li *ngIf=\"!manager._id\"  class=\"breadcrumb-item active\">\r\n    Création d'un manager\r\n  </li>\r\n</ol>\r\n<mat-expansion-panel style=\"overflow: auto \" expanded=true class=\"card base-color-light\" *ngIf=\"manager\" fxLayout=\"column\">\r\n  <mat-expansion-panel-header fxFlex=\"5\" class=\"lead\" fxLayout=\"column\" fxLayout=\"center\">\r\n<mat-panel-title>\r\n      <p class=\"h4\">\r\n        <span *ngIf=\"!manager._id\">Création d'un Utilisateur</span>\r\n        <span *ngIf=\"manager._id\">Utilisateur</span>\r\n</p>\r\n    </mat-panel-title>\r\n<mat-panel-description>\r\n<p class=\"h4\">  </p>\r\n    </mat-panel-description>\r\n</mat-expansion-panel-header>\r\n  <div class=\"content\">\r\n    <div *ngIf=\"feedback\" class=\"alert alert-{{feedback.type}}\">{{ feedback.message }}</div>\r\n    <form  #editForm=\"ngForm\" (ngSubmit)=\"save()\">\r\n\r\n\r\n\r\n        <div class=\"form-group\">\r\n          <mat-form-field class=\"gs-mat-field\" fxFlex=\"100\">\r\n\r\n      <input matInput class=\"form-control\" placeholder=\"Id\" name=\"Id\"\r\n             type=\"text\"  [(ngModel)]=\"manager._id\"    readonly  >\r\n\r\n      </mat-form-field>\r\n  </div>\r\n\r\n\r\n\r\n        <div class=\"form-group\">\r\n          <mat-form-field class=\"gs-mat-field\" fxFlex=\"100\">\r\n\r\n      <input matInput class=\"form-control\" placeholder=\"nom\" name=\"Name\"\r\n             type=\"text\"  [(ngModel)]=\"manager.name\"    >\r\n\r\n      </mat-form-field>\r\n  </div>\r\n\r\n\r\n      <div class=\"form-group\" *ngIf=\"!manager._id\">\r\n        <mat-form-field class=\"gs-mat-field\" fxFlex=\"100\">\r\n\r\n          <input matInput class=\"form-control\" placeholder=\"Mot de passe\" name=\"password\"\r\n                 type=\"password\"  [(ngModel)]=\"manager.password\"    >\r\n\r\n        </mat-form-field>\r\n      </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n  <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!editForm.form.valid\">Enregistrer</button>\r\n  <button type=\"button\" class=\"btn btn-secondary\" (click)=\"cancel()\">Annuler</button>\r\n  </form>\r\n  </div>\r\n</mat-expansion-panel>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/params/manager/manager-list/manager-list.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/params/manager/manager-list/manager-list.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<ol class=\"breadcrumb float-right\">\r\n  <li class=\"breadcrumb-item\"><a routerLink=\"/\">Accueil</a></li>\r\n  <li class=\"breadcrumb-item active\">Utilisateur</li>\r\n</ol>\r\n<div class=\"card\">\r\n<div class=\"content\">\r\n<a [routerLink]=\"['../managers', 'new' ]\" class=\"btn btn-default\">Nouveau</a>\r\n    <hr>\r\n<mat-expansion-panel style=\"overflow: auto \"class=\"white-transparent filters_box\" style=\"padding :2px\" expanded=\"true\">\r\n        <mat-expansion-panel-header class=\"header\">\r\n<p class=\"lead strong\">\r\n        Filtres de recherches\r\n        </p>\r\n        <hr>\r\n</mat-expansion-panel-header>\r\n<mat-card-content class=\"bg-transparent \" fxLayout=\"row\" fxLayoutGap=\"18px\" fxLayoutAlign=\"flex-start\" fxLayout.xs=\"column\" fxLayoutAlign.xs=\"flex-start\"  fxLayout=\"row\">\r\n\r\n        <mat-card  class=\"white-transparent\">\r\n        <mat-card-header class=\"white-transparent\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n            <p fxFlex class=\"bold\">nom</p>\r\n<button style=\"border:none;background: transparent\"  (click)=\"nameFilter.reset()\"  fxFlex>\r\n          <i class=\"ti-reload\"></i>\r\n          </button>\r\n</mat-card-header>\r\n      <mat-card-content class=\"white-transparent\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n\r\n\r\n\r\n\r\n\r\n<mat-form-field>\r\n        <input matInput class=\"\" placeholder=\"val\" name=\"name.val\" [formControl]=\"nameFilter.controls.val\" >\r\n        </mat-form-field>\r\n\r\n      </mat-card-content></mat-card>\r\n\r\n        <mat-card  class=\"white-transparent\">\r\n        <mat-card-header class=\"white-transparent\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n            <p fxFlex class=\"bold\">Statut</p>\r\n<button style=\"border:none;background: transparent\"  (click)=\"statusFilter.reset()\"  fxFlex>\r\n          <i class=\"ti-reload\"></i>\r\n          </button>\r\n</mat-card-header>\r\n      <mat-card-content class=\"white-transparent\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n\r\n\r\n\r\n\r\n\r\n<mat-form-field class=\"gs-mat-field\" fxFlex=\"100\">\r\n          <mat-label>Statut</mat-label>\r\n          <mat-select  [formControl]=\"statusFilter.controls.val\">\r\n\r\n            <mat-option [value]=true> Actif</mat-option>\r\n\r\n            <mat-option [value]=false> Inactif</mat-option>\r\n\r\n          </mat-select>\r\n        </mat-form-field>\r\n\r\n\r\n\r\n\r\n      </mat-card-content></mat-card>\r\n\r\n      </mat-card-content>\r\n      </mat-expansion-panel>\r\n  </div>\r\n</div>\r\n<div  *ngIf=\"managerList.length > 0\"  class=\"example-container mat-elevation-z8\">\r\n\r\n<mat-table class=\"\"  [dataSource]=\"dataSource\" matSort >\r\n\r\n    <ng-container matColumnDef=\"_id\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header >Id</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let item\" class=\"mobile-hide\">\r\n         <span class=\"mobile-label\">Id : </span>\r\n{{item._id}}\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"name\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header >nom</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let item\" class=\"mobile-hide\">\r\n         <span class=\"mobile-label\">nom : </span>\r\n{{item.name}}\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"status\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header >Statut</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let item\" class=\"mobile-hide\">\r\n         <span class=\"mobile-label\">Statut : </span>\r\n{{item.status}}\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n<ng-container matColumnDef=\"actions\">\r\n    <mat-header-cell *matHeaderCellDef></mat-header-cell>\r\n    <mat-cell class=\"\"\r\n              *matCellDef=\"let item\">\r\n<div fxLayout=\"row\" fxLayout.md=\"column\" fxLayoutAlign=\"center\">\r\n      <a [routerLink]=\"['../managers', item._id ]\" class=\"btn btn-secondary\">Modifier</a>&nbsp;\r\n\r\n      </div>\r\n</mat-cell>\r\n  </ng-container>\r\n<mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n<mat-row *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\r\n</mat-table>\r\n<mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/partners/customer/customer-edit/customer-edit.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/partners/customer/customer-edit/customer-edit.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ol class=\"breadcrumb float-right\" *ngIf=\"customer\">\r\n  <li class=\"breadcrumb-item\"><a routerLink=\"/\">Accueil</a></li>\r\n  <li class=\"breadcrumb-item active\" routerLink=\"/partners/customers\">\r\n    Clients\r\n  </li>\r\n  <li *ngIf=\"customer._id\"  class=\"breadcrumb-item active\">\r\n    {{customer._id}}\r\n  </li>\r\n\r\n  <li *ngIf=\"!customer._id\"  class=\"breadcrumb-item active\">\r\n    Création d'un client\r\n  </li>\r\n</ol>\r\n<mat-expansion-panel style=\"overflow: auto \" expanded=true class=\"card base-color-light\" *ngIf=\"customer\" fxLayout=\"column\">\r\n  <mat-expansion-panel-header fxFlex=\"5\" class=\"lead\" fxLayout=\"column\" fxLayout=\"center\">\r\n\r\n\r\n      <mat-panel-title>\r\n        <p class=\"h4\">\r\n          <span *ngIf=\"!customer._id\">Création d'un client</span>\r\n          <span *ngIf=\"customer._id\">Client</span>\r\n\r\n\r\n        </p>\r\n      </mat-panel-title>\r\n\r\n      <mat-panel-description>\r\n\r\n\r\n      </mat-panel-description>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  </mat-expansion-panel-header>\r\n  <div class=\"content\">\r\n    <div *ngIf=\"feedback\" class=\"alert alert-{{feedback.type}}\">{{ feedback.message }}</div>\r\n    <form  #editForm=\"ngForm\" (ngSubmit)=\"save()\">\r\n\r\n\r\n\r\n      <div class=\"form-group\">\r\n        <mat-form-field class=\"gs-mat-field\" fxFlex=\"100\">\r\n\r\n          <input matInput class=\"form-control\" placeholder=\"Id\" name=\"Id\"\r\n                 type=\"text\"  [(ngModel)]=\"customer._id\"   readonly  >\r\n\r\n        </mat-form-field>\r\n      </div>\r\n\r\n\r\n\r\n      <div class=\"form-group\">\r\n        <mat-form-field class=\"gs-mat-field\" fxFlex=\"100\">\r\n\r\n          <input matInput class=\"form-control\" placeholder=\"nom\" name=\"Name\"\r\n                 type=\"text\"  [(ngModel)]=\"customer.name\"   >\r\n\r\n        </mat-form-field>\r\n      </div>\r\n\r\n\r\n\r\n\r\n      <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!editForm.form.valid\">Enregistrer</button>\r\n      <button type=\"button\" class=\"btn btn-secondary\" (click)=\"cancel()\">Annuler</button>\r\n    </form>\r\n  </div>\r\n</mat-expansion-panel>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/partners/customer/customer-list/customer-list.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/partners/customer/customer-list/customer-list.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<ol class=\"breadcrumb float-right\">\r\n  <li class=\"breadcrumb-item\"><a routerLink=\"/\">Accueil</a></li>\r\n  <li class=\"breadcrumb-item active\">Clients</li>\r\n</ol>\r\n<div class=\"card\">\r\n\r\n  <div class=\"content\">\r\n\r\n    <a [routerLink]=\"['../customers', 'new' ]\" class=\"btn btn-default\">Nouveau</a>\r\n    <hr>\r\n\r\n      <mat-expansion-panel style=\"overflow: auto \"class=\"white-transparent filters_box\" style=\"padding :2px\" expanded=\"true\">\r\n        <mat-expansion-panel-header class=\"header\">\r\n<p class=\"lead strong\">\r\n        Filtres de recherches\r\n        </p>\r\n        <hr>\r\n</mat-expansion-panel-header>\r\n<mat-card-content class=\"bg-transparent \" fxLayout=\"row\" fxLayoutGap=\"18px\" fxLayoutAlign=\"flex-start\" fxLayout.xs=\"column\" fxLayoutAlign.xs=\"flex-start\"  fxLayout=\"row\">\r\n\r\n        <mat-card  class=\"white-transparent\">\r\n        <mat-card-header class=\"white-transparent\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n            <p fxFlex class=\"bold\">nom</p>\r\n\r\n          <button style=\"border:none;background: transparent\"  (click)=\"nameFilter.reset()\" fxFlex>\r\n          <i class=\"ti-reload\"></i>\r\n          </button>\r\n\r\n        </mat-card-header>\r\n      <mat-card-content class=\"white-transparent\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n\r\n\r\n\r\n\r\n\r\n<mat-form-field>\r\n        <input matInput class=\"\" placeholder=\"val\" name=\"name.val\" [formControl]=\"nameFilter.controls.val\" >\r\n        </mat-form-field>\r\n\r\n      </mat-card-content></mat-card>\r\n\r\n        <mat-card  class=\"white-transparent\">\r\n        <mat-card-header class=\"white-transparent\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n            <p fxFlex class=\"bold\">Statut</p>\r\n\r\n          <button style=\"border:none;background: transparent\"  (click)=\"statusFilter.reset()\" fxFlex>\r\n          <i class=\"ti-reload\"></i>\r\n          </button>\r\n\r\n        </mat-card-header>\r\n      <mat-card-content class=\"white-transparent\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n\r\n\r\n\r\n\r\n\r\n<mat-form-field class=\"gs-mat-field\" fxFlex=\"100\">\r\n          <mat-label>Statut</mat-label>\r\n          <mat-select  [formControl]=\"statusFilter.controls.val\">\r\n\r\n            <mat-option [value]=true> Actif</mat-option>\r\n\r\n            <mat-option [value]=false> Inactif</mat-option>\r\n\r\n          </mat-select>\r\n        </mat-form-field>\r\n\r\n\r\n\r\n\r\n      </mat-card-content></mat-card>\r\n\r\n      </mat-card-content>\r\n      </mat-expansion-panel>\r\n  </div>\r\n</div>\r\n<div  *ngIf=\"customerList.length > 0\"  class=\"example-container mat-elevation-z8\">\r\n\r\n<mat-table class=\"\"  [dataSource]=\"dataSource\" matSort >\r\n\r\n    <ng-container matColumnDef=\"_id\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header >Id</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let item\" class=\"mobile-hide\">\r\n         <span class=\"mobile-label\">Id : </span>\r\n{{item._id}}\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"name\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header >nom</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let item\" class=\"mobile-hide\">\r\n         <span class=\"mobile-label\">nom : </span>\r\n{{item.name}}\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"status\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header >Statut</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let item\" class=\"mobile-hide\">\r\n         <span class=\"mobile-label\">Statut : </span>\r\n{{item.status}}\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n<ng-container matColumnDef=\"actions\">\r\n    <mat-header-cell *matHeaderCellDef></mat-header-cell>\r\n    <mat-cell class=\"\"\r\n              *matCellDef=\"let item\">\r\n<div fxLayout=\"row\" fxLayout.md=\"column\" fxLayoutAlign=\"center\">\r\n      <a [routerLink]=\"['../customers', item._id ]\" class=\"btn btn-secondary\">Détails</a>&nbsp;\r\n\r\n      </div>\r\n</mat-cell>\r\n  </ng-container>\r\n<mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n<mat-row *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\r\n</mat-table>\r\n<mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/partners/provider/provider-edit/provider-edit.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/partners/provider/provider-edit/provider-edit.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ol class=\"breadcrumb float-right\" *ngIf=\"provider\">\r\n  <li class=\"breadcrumb-item\"><a routerLink=\"/\">Accueil</a></li>\r\n  <li class=\"breadcrumb-item active\" routerLink=\"/partners/providers\">\r\n    Fournisseurs\r\n  </li>\r\n  <li *ngIf=\"provider._id\"  class=\"breadcrumb-item active\">\r\n    {{provider._id}}\r\n  </li>\r\n\r\n  <li *ngIf=\"!provider._id\"  class=\"breadcrumb-item active\">\r\n    Création d'un Fournisseur\r\n  </li>\r\n</ol>\r\n<mat-expansion-panel style=\"overflow: auto \" expanded=true class=\"card base-color-light\" *ngIf=\"provider\" fxLayout=\"column\">\r\n  <mat-expansion-panel-header fxFlex=\"5\" class=\"lead\" fxLayout=\"column\" fxLayout=\"center\">\r\n\r\n\r\n      <mat-panel-title>\r\n        <p class=\"h4\">\r\n          <span *ngIf=\"!provider._id\">Création d'un fournisseur</span>\r\n          <span *ngIf=\"provider._id\">Fournisseur</span>\r\n\r\n\r\n        </p>\r\n      </mat-panel-title>\r\n\r\n      <mat-panel-description>\r\n\r\n\r\n      </mat-panel-description>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  </mat-expansion-panel-header>\r\n  <div class=\"content\">\r\n    <div *ngIf=\"feedback\" class=\"alert alert-{{feedback.type}}\">{{ feedback.message }}</div>\r\n    <form  #editForm=\"ngForm\" (ngSubmit)=\"save()\">\r\n\r\n\r\n\r\n      <div class=\"form-group\">\r\n        <mat-form-field class=\"gs-mat-field\" fxFlex=\"100\">\r\n\r\n          <input matInput class=\"form-control\" placeholder=\"Id\" name=\"Id\"\r\n                 type=\"text\"  [(ngModel)]=\"provider._id\"   readonly  >\r\n\r\n        </mat-form-field>\r\n      </div>\r\n\r\n\r\n\r\n      <div class=\"form-group\">\r\n        <mat-form-field class=\"gs-mat-field\" fxFlex=\"100\">\r\n\r\n          <input matInput class=\"form-control\" placeholder=\"nom\" name=\"Name\"\r\n                 type=\"text\"  [(ngModel)]=\"provider.name\"   >\r\n\r\n        </mat-form-field>\r\n      </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n      <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!editForm.form.valid\">Enregistrer</button>\r\n      <button type=\"button\" class=\"btn btn-secondary\" (click)=\"cancel()\">Annuler</button>\r\n    </form>\r\n  </div>\r\n</mat-expansion-panel>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/partners/provider/provider-list/provider-list.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/partners/provider/provider-list/provider-list.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<ol class=\"breadcrumb float-right\">\r\n  <li class=\"breadcrumb-item\"><a routerLink=\"/\">Accueil</a></li>\r\n  <li class=\"breadcrumb-item active\">Fournisseurs</li>\r\n</ol>\r\n<div class=\"card\">\r\n\r\n  <div class=\"content\">\r\n\r\n    <a [routerLink]=\"['../providers', 'new' ]\" class=\"btn btn-default\">Nouveau</a>\r\n    <hr>\r\n\r\n      <mat-expansion-panel style=\"overflow: auto \"class=\"white-transparent filters_box\" style=\"padding :2px\" expanded=\"true\">\r\n        <mat-expansion-panel-header class=\"header\">\r\n<p class=\"lead strong\">\r\n        Filtres de recherches\r\n        </p>\r\n        <hr>\r\n</mat-expansion-panel-header>\r\n<mat-card-content class=\"bg-transparent \" fxLayout=\"row\" fxLayoutGap=\"18px\" fxLayoutAlign=\"flex-start\" fxLayout.xs=\"column\" fxLayoutAlign.xs=\"flex-start\"  fxLayout=\"row\">\r\n\r\n        <mat-card  class=\"white-transparent\">\r\n        <mat-card-header class=\"white-transparent\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n            <p fxFlex class=\"bold\">nom</p>\r\n\r\n          <button style=\"border:none;background: transparent\"  (click)=\"nameFilter.reset()\" fxFlex>\r\n          <i class=\"ti-reload\"></i>\r\n          </button>\r\n\r\n        </mat-card-header>\r\n      <mat-card-content class=\"white-transparent\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n\r\n\r\n\r\n\r\n\r\n<mat-form-field>\r\n        <input matInput class=\"\" placeholder=\"val\" name=\"name.val\" [formControl]=\"nameFilter.controls.val\" >\r\n        </mat-form-field>\r\n\r\n      </mat-card-content></mat-card>\r\n\r\n        <mat-card  class=\"white-transparent\">\r\n        <mat-card-header class=\"white-transparent\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n            <p fxFlex class=\"bold\">Statut</p>\r\n\r\n          <button style=\"border:none;background: transparent\"  (click)=\"statusFilter.reset()\" fxFlex>\r\n          <i class=\"ti-reload\"></i>\r\n          </button>\r\n\r\n        </mat-card-header>\r\n      <mat-card-content class=\"white-transparent\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n\r\n\r\n\r\n\r\n\r\n<mat-form-field class=\"gs-mat-field\" fxFlex=\"100\">\r\n          <mat-label>Statut</mat-label>\r\n          <mat-select  [formControl]=\"statusFilter.controls.val\">\r\n\r\n            <mat-option [value]=true> Actif</mat-option>\r\n\r\n            <mat-option [value]=false> Inactif</mat-option>\r\n\r\n          </mat-select>\r\n        </mat-form-field>\r\n\r\n\r\n\r\n\r\n      </mat-card-content></mat-card>\r\n\r\n      </mat-card-content>\r\n      </mat-expansion-panel>\r\n  </div>\r\n</div>\r\n<div  *ngIf=\"providerList.length > 0\"  class=\"example-container mat-elevation-z8\">\r\n\r\n<mat-table class=\"\"  [dataSource]=\"dataSource\" matSort >\r\n\r\n    <ng-container matColumnDef=\"_id\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header >Id</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let item\" class=\"mobile-hide\">\r\n         <span class=\"mobile-label\">Id : </span>\r\n{{item._id}}\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"name\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header >nom</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let item\" class=\"mobile-hide\">\r\n         <span class=\"mobile-label\">nom : </span>\r\n{{item.name}}\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"status\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header >Statut</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let item\" class=\"mobile-hide\">\r\n         <span class=\"mobile-label\">Statut : </span>\r\n{{item.status}}\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n<ng-container matColumnDef=\"actions\">\r\n    <mat-header-cell *matHeaderCellDef></mat-header-cell>\r\n    <mat-cell class=\"\"\r\n              *matCellDef=\"let item\">\r\n<div fxLayout=\"row\" fxLayout.md=\"column\" fxLayoutAlign=\"center\">\r\n      <a [routerLink]=\"['../providers', item._id ]\" class=\"btn btn-secondary\">Détails</a>&nbsp;\r\n\r\n      </div>\r\n</mat-cell>\r\n  </ng-container>\r\n<mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n<mat-row *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\r\n</mat-table>\r\n<mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/stock/category/category-edit/category-edit.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/stock/category/category-edit/category-edit.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ol class=\"breadcrumb float-right\" *ngIf=\"category\">\r\n  <li class=\"breadcrumb-item\"><a routerLink=\"/\">Accueil</a></li>\r\n  <li class=\"breadcrumb-item active\" routerLink=\"/stock/categories\">\r\n    Categories de produit\r\n  </li>\r\n  <li *ngIf=\"category._id\"  class=\"breadcrumb-item active\">\r\n    {{category._id}}\r\n  </li>\r\n\r\n  <li *ngIf=\"!category._id\"  class=\"breadcrumb-item active\">\r\n    Création d'un category\r\n  </li>\r\n</ol>\r\n<mat-expansion-panel style=\"overflow: auto \" expanded=true class=\"card base-color-light\" *ngIf=\"category\" fxLayout=\"column\">\r\n  <mat-expansion-panel-header fxFlex=\"5\" class=\"lead\" fxLayout=\"column\" fxLayout=\"center\">\r\n\r\n\r\n      <mat-panel-title>\r\n        <p class=\"h4\">\r\n          <span *ngIf=\"!category._id\">Création d'un category</span>\r\n          <span *ngIf=\"category._id\">category</span>\r\n\r\n\r\n        </p>\r\n      </mat-panel-title>\r\n\r\n      <mat-panel-description>\r\n\r\n        <p class=\"h4\"> Main Informations </p>\r\n      </mat-panel-description>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  </mat-expansion-panel-header>\r\n  <div class=\"content\">\r\n    <div *ngIf=\"feedback\" class=\"alert alert-{{feedback.type}}\">{{ feedback.message }}</div>\r\n    <form  #editForm=\"ngForm\" (ngSubmit)=\"save()\">\r\n\r\n\r\n\r\n      <div class=\"form-group\">\r\n        <mat-form-field class=\"gs-mat-field\" fxFlex=\"100\">\r\n\r\n          <input matInput class=\"form-control\" placeholder=\"Id\" name=\"Id\"\r\n                 type=\"text\"  [(ngModel)]=\"category._id\"   readonly  >\r\n\r\n        </mat-form-field>\r\n      </div>\r\n\r\n\r\n\r\n      <div class=\"form-group\">\r\n        <mat-form-field class=\"gs-mat-field\" fxFlex=\"100\">\r\n\r\n          <input matInput class=\"form-control\" placeholder=\"nom\" name=\"Name\"\r\n                 type=\"text\"  [(ngModel)]=\"category.name\"   >\r\n\r\n        </mat-form-field>\r\n      </div>\r\n\r\n\r\n\r\n      <div class=\"form-group\">\r\n        <mat-form-field class=\"gs-mat-field\" fxFlex=\"100\">\r\n\r\n          <input matInput class=\"form-control\" placeholder=\"Description\" name=\"Description\"\r\n                 type=\"text\"  [(ngModel)]=\"category.description\"   >\r\n\r\n        </mat-form-field>\r\n      </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n      <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!editForm.form.valid\">Enregistrer</button>\r\n      <button type=\"button\" class=\"btn btn-secondary\" (click)=\"cancel()\">Annuler</button>\r\n    </form>\r\n  </div>\r\n</mat-expansion-panel>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/stock/category/category-list/category-list.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/stock/category/category-list/category-list.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<ol class=\"breadcrumb float-right\">\r\n  <li class=\"breadcrumb-item\"><a routerLink=\"/\">Accueil</a></li>\r\n  <li class=\"breadcrumb-item active\">Categories de produit</li>\r\n</ol>\r\n<div class=\"card\">\r\n\r\n  <div class=\"content\">\r\n\r\n    <a [routerLink]=\"['../categories', 'new' ]\" class=\"btn btn-default\">Nouvelle catégorie</a>\r\n    <hr>\r\n\r\n      <mat-expansion-panel style=\"overflow: auto \"class=\"white-transparent filters_box\" style=\"padding :2px\" expanded=\"true\">\r\n        <mat-expansion-panel-header class=\"header\">\r\n<p class=\"lead strong\">\r\n        Filtres de recherches\r\n        </p>\r\n        <hr>\r\n</mat-expansion-panel-header>\r\n<mat-card-content class=\"bg-transparent \" fxLayout=\"row\" fxLayoutGap=\"18px\" fxLayoutAlign=\"flex-start\" fxLayout.xs=\"column\" fxLayoutAlign.xs=\"flex-start\"  fxLayout=\"row\">\r\n\r\n        <mat-card  class=\"white-transparent\">\r\n        <mat-card-header class=\"white-transparent\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n            <p fxFlex class=\"bold\">nom</p>\r\n\r\n          <button style=\"border:none;background: transparent\"  (click)=\"nameFilter.reset()\" fxFlex>\r\n          <i class=\"ti-reload\"></i>\r\n          </button>\r\n\r\n        </mat-card-header>\r\n      <mat-card-content class=\"white-transparent\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n\r\n\r\n\r\n\r\n\r\n<mat-form-field>\r\n        <input matInput class=\"\" placeholder=\"val\" name=\"name.val\" [formControl]=\"nameFilter.controls.val\" >\r\n        </mat-form-field>\r\n\r\n      </mat-card-content></mat-card>\r\n\r\n        <mat-card  class=\"white-transparent\">\r\n        <mat-card-header class=\"white-transparent\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n            <p fxFlex class=\"bold\">Description</p>\r\n\r\n          <button style=\"border:none;background: transparent\"  (click)=\"descriptionFilter.reset()\" fxFlex>\r\n          <i class=\"ti-reload\"></i>\r\n          </button>\r\n\r\n        </mat-card-header>\r\n      <mat-card-content class=\"white-transparent\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n\r\n\r\n\r\n\r\n\r\n<mat-form-field>\r\n        <input matInput class=\"\" placeholder=\"val\" name=\"description.val\" [formControl]=\"descriptionFilter.controls.val\" >\r\n        </mat-form-field>\r\n\r\n      </mat-card-content></mat-card>\r\n\r\n        <mat-card  class=\"white-transparent\">\r\n        <mat-card-header class=\"white-transparent\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n            <p fxFlex class=\"bold\">Statut</p>\r\n\r\n          <button style=\"border:none;background: transparent\"  (click)=\"statusFilter.reset()\" fxFlex>\r\n          <i class=\"ti-reload\"></i>\r\n          </button>\r\n\r\n        </mat-card-header>\r\n      <mat-card-content class=\"white-transparent\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n\r\n\r\n\r\n\r\n\r\n<mat-form-field class=\"gs-mat-field\" fxFlex=\"100\">\r\n          <mat-label>Statut</mat-label>\r\n          <mat-select  [formControl]=\"statusFilter.controls.val\">\r\n\r\n            <mat-option value=true> Active</mat-option>\r\n\r\n            <mat-option value=false> Inactive</mat-option>\r\n\r\n          </mat-select>\r\n        </mat-form-field>\r\n\r\n\r\n\r\n\r\n      </mat-card-content></mat-card>\r\n\r\n      </mat-card-content>\r\n      </mat-expansion-panel>\r\n  </div>\r\n</div>\r\n<div  *ngIf=\"categoryList.length > 0\"  class=\"example-container mat-elevation-z8\">\r\n\r\n<mat-table class=\"\"  [dataSource]=\"dataSource\" matSort >\r\n\r\n    <ng-container matColumnDef=\"_id\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header >Id</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let item\" class=\"mobile-hide\">\r\n         <span class=\"mobile-label\">Id : </span>\r\n{{item._id}}\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"name\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header >nom</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let item\" class=\"mobile-hide\">\r\n         <span class=\"mobile-label\">nom : </span>\r\n{{item.name}}\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"description\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header >Description</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let item\" class=\"mobile-hide\">\r\n         <span class=\"mobile-label\">Description : </span>\r\n{{item.description}}\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"status\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header >Statut</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let item\" class=\"mobile-hide\">\r\n         <span class=\"mobile-label\">Statut : </span>\r\n{{item.status}}\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n<ng-container matColumnDef=\"actions\">\r\n    <mat-header-cell *matHeaderCellDef></mat-header-cell>\r\n    <mat-cell class=\"\"\r\n              *matCellDef=\"let item\">\r\n<div fxLayout=\"row\" fxLayout.md=\"column\" fxLayoutAlign=\"center\">\r\n      <a [routerLink]=\"['../categories', item._id ]\" class=\"btn btn-secondary\">Détails</a>&nbsp;\r\n\r\n      </div>\r\n</mat-cell>\r\n  </ng-container>\r\n<mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n<mat-row *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\r\n</mat-table>\r\n<mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/stock/class_product/class-product-edit/class-product-edit.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/stock/class_product/class-product-edit/class-product-edit.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <ol class=\"breadcrumb float-right\" *ngIf=\"class_product\">\r\n    <li class=\"breadcrumb-item\"><a routerLink=\"/\">Accueil</a></li>\r\n    <li class=\"breadcrumb-item active\" routerLink=\"/stock/classProducts\">\r\n      Stock de produit\r\n    </li>\r\n    <li *ngIf=\"class_product._id\"  class=\"breadcrumb-item active\">\r\n      {{class_product._id}}\r\n    </li>\r\n\r\n    <li *ngIf=\"!class_product._id\"  class=\"breadcrumb-item active\">\r\n      Création d'un Stock de produit\r\n    </li>\r\n  </ol>\r\n\r\n\r\n\r\n  <mat-expansion-panel style=\"overflow: auto \" expanded=true class=\"card base-color-light\" *ngIf=\"class_product\" fxLayout=\"column\">\r\n\r\n    <mat-expansion-panel-header fxFlex=\"5\" class=\"lead\" fxLayout=\"column\" fxLayout=\"center\">\r\n\r\n\r\n        <mat-panel-title>\r\n          <p class=\"h4\">\r\n            <span *ngIf=\"!class_product._id\">Création d'un Stock de produit</span>\r\n            <span *ngIf=\"class_product._id\"> Stock de produit  <span class=\"alert-danger h6\" *ngIf=\"class_product.quantity==0\">[ Stock épuisé  ]</span></span>\r\n\r\n            <span class=\"white-transparent\" *ngIf=\"class_product._id&&!class_product.quantity==0\">\r\n            <a  [routerLink]=\"['/stock_operations/sales','new']\" [queryParams]=\"{init_product_id:class_product._id}\"  class=\"btn btn-primary\">Vendre</a>\r\n          </span>\r\n\r\n\r\n          </p>\r\n\r\n        </mat-panel-title>\r\n\r\n\r\n\r\n        <mat-panel-description>\r\n\r\n          <p class=\"h4\" *ngIf=\"class_product._id\">{{class_product.product.name}}  </p>\r\n        </mat-panel-description>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n    </mat-expansion-panel-header>\r\n    <div class=\"content\">\r\n      <div *ngIf=\"feedback\" class=\"alert alert-{{feedback.type}}\">{{ feedback.message }}</div>\r\n      <form  #editForm=\"ngForm\" (ngSubmit)=\"save()\">\r\n\r\n\r\n\r\n        <div class=\"form-group\">\r\n          <mat-form-field class=\"gs-mat-field\" fxFlex=\"100\">\r\n\r\n            <input matInput class=\"form-control\" placeholder=\"Id\" name=\"Id\"\r\n                   type=\"text\"  [(ngModel)]=\"class_product._id\"    readonly  >\r\n\r\n          </mat-form-field>\r\n        </div>\r\n\r\n\r\n        <div class=\"form-group\">\r\n          <mat-form-field  class=\"gs-mat-field h4\" fxFlex=\"100\">\r\n            <input matInput class=\"form-control\" placeholder=\"Produit\" name=\"Product\"\r\n                   [matAutocomplete]=\"autoProduct\" [formControl]=\"productInput\"  [readonly]=\"class_product._id\" (blur)=\"checkProduct()\">\r\n          </mat-form-field>\r\n          <mat-autocomplete #autoProduct=\"matAutocomplete\" [displayWith]=\"displayProduct\"\r\n          (optionSelected)=\"productClick($event)\">\r\n          <mat-option *ngIf=\"isLoadingProduct\" class=\"is-loading\">\r\n            <mat-spinner diameter=\"50\"></mat-spinner>\r\n          </mat-option>\r\n          <ng-container *ngIf=\"!isLoadingProduct\">\r\n            <mat-option *ngFor=\"let product of filteredProductList\" [value]=\"product\">\r\n                <span>{{\r\n                  product.name}}</span>\r\n            </mat-option>\r\n          </ng-container>\r\n          </mat-autocomplete>\r\n        </div>\r\n\r\n\r\n\r\n        <div class=\"form-group\">\r\n          <mat-form-field class=\"gs-mat-field\" fxFlex=\"100\">\r\n\r\n            <input matInput class=\"form-control\" placeholder=\"Nom de la classe \" name=\"Label\"\r\n                   type=\"text\"  [(ngModel)]=\"class_product.label\"    >\r\n\r\n          </mat-form-field>\r\n        </div>\r\n\r\n\r\n\r\n        <div class=\"form-group\">\r\n          <mat-form-field class=\"gs-mat-field\" fxFlex=\"100\">\r\n\r\n            <input matInput class=\"form-control\" placeholder=\"Prix unitaire de vente\" name=\"UnitPrice\"\r\n                   type=\"number\"  [(ngModel)]=\"class_product.unit_price\"    >\r\n\r\n          </mat-form-field>\r\n        </div>\r\n\r\n\r\n\r\n        <div class=\"form-group\">\r\n          <mat-form-field class=\"gs-mat-field\" fxFlex=\"100\">\r\n\r\n            <input matInput [matDatepicker]=\"datepicker\" placeholder=\"Date d'arrivée\" [(ngModel)]=\"class_product.date_intrance\" name=\"DateIntrance\"                                           required   >\r\n            <mat-datepicker-toggle matSuffix [for]=\"datepicker\"></mat-datepicker-toggle>\r\n            <mat-datepicker touchUi=\"true\" #datepicker></mat-datepicker>\r\n\r\n          </mat-form-field>\r\n        </div>\r\n\r\n\r\n\r\n        <div class=\"form-group\">\r\n          <mat-form-field class=\"gs-mat-field\" fxFlex=\"100\">\r\n\r\n            <input matInput class=\"form-control\" placeholder=\"quantité\" name=\"Quantity\"\r\n                   type=\"number\"  [(ngModel)]=\"class_product.quantity\"    readonly  >\r\n\r\n          </mat-form-field>\r\n        </div>\r\n\r\n\r\n\r\n\r\n\r\n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!editForm.form.valid\">Enregistrer</button>\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"cancel()\">Annuler</button>\r\n      </form>\r\n    </div>\r\n  </mat-expansion-panel>\r\n\r\n\r\n  <mat-expansion-panel style=\"overflow: auto \" expanded=true class=\"card base-color-light\" *ngIf=\"class_product&&class_product._id\" fxLayout=\"column\">\r\n    <mat-expansion-panel-header fxFlex=\"5\" class=\"lead\" fxLayout=\"column\" fxLayout=\"center\">\r\n\r\n\r\n      <mat-panel-title>\r\n        <p class=\"h4\">\r\n       <span>Statistiques de vente</span>\r\n\r\n        </p>\r\n      </mat-panel-title>\r\n\r\n      <mat-panel-description>\r\n\r\n        <p class=\"h4\"> Ventes réalisées et bénéfices </p>\r\n      </mat-panel-description>\r\n    </mat-expansion-panel-header>\r\n\r\n    <app-sale-unit *ngIf=\"sale\" [productMode]=true [saleMode]=false [sale]=\"sale\" class=\"stock_benef\"></app-sale-unit>\r\n\r\n  <mat-card *ngIf=\"command_unit\" class=\"stock_benef\">\r\n    <mat-card-header>\r\n\r\n      <p class=\"h4\">Commande et bénéfices <span class=\"alert-danger h6\" *ngIf=\"class_product.quantity==0\">[ Stock épuisé  ]</span> </p>\r\n\r\n\r\n    </mat-card-header>\r\n    <mat-card-content fxLayout=\"row\" fxLayoutAlign=\"space-between\" >\r\n\r\n      <mat-form-field>\r\n        <mat-label>\r\n          Date de la livraison\r\n        </mat-label>\r\n        <input readonly matInput [value]=\"command_unit.date_delivrance |date\">\r\n\r\n      </mat-form-field>\r\n\r\n\r\n\r\n\r\n\r\n\r\n      <mat-form-field>\r\n        <mat-label>\r\n         Quantité initiale\r\n        </mat-label>\r\n        <input matInput readonly [value]=\"command_unit.quantity\">\r\n      </mat-form-field>\r\n\r\n\r\n      <mat-form-field>\r\n        <mat-label>\r\n          Quantité restante\r\n        </mat-label>\r\n        <input matInput readonly [value]=\"class_product.quantity\">\r\n      </mat-form-field>\r\n\r\n\r\n\r\n      <mat-form-field>\r\n        <mat-label>\r\n          Prix unitaire d'achat\r\n        </mat-label>\r\n        <input matInput readonly [value]=\"command_unit.unit_price|currency:'FCFA':'symbol':'1.0-0':'fr'\">\r\n      </mat-form-field>\r\n\r\n\r\n      <mat-form-field>\r\n        <mat-label>\r\n          Montant total de l'achat\r\n        </mat-label>\r\n        <input matInput readonly [value]=\"command_unit.quantity*command_unit.unit_price|currency:'FCFA':'symbol':'1.0-0':'fr'\">\r\n\r\n      </mat-form-field>\r\n\r\n\r\n\r\n\r\n\r\n\r\n    </mat-card-content>\r\n\r\n    <hr size=\"20px\">\r\n    <div fxLayout  fxLayoutAlign=\"space-between\" >\r\n      <mat-form-field fxFlex=\"30\">\r\n        <mat-label>\r\n          Bénéfices actuels hors crédit\r\n        </mat-label>\r\n        <input matInput readonly  [value]=\"\r\n        (sale?( sale.paid_amount-(command_unit.quantity-class_product.quantity)*command_unit.unit_price):0)|currency:'FCFA':'symbol':'1.0-0':'fr'\">\r\n\r\n      </mat-form-field>\r\n\r\n\r\n\r\n\r\n      <mat-form-field fxFlex=\"30\">\r\n        <mat-label>\r\n          Bénéfices actuels -crédits compris\r\n        </mat-label>\r\n        <input matInput readonly  [value]=\"\r\n        (sale?( (sale.amount)-(command_unit.quantity-class_product.quantity)*command_unit.unit_price):0)|currency:'FCFA':'symbol':'1.0-0':'fr'\">\r\n\r\n      </mat-form-field>\r\n\r\n\r\n\r\n\r\n\r\n\r\n      <mat-form-field fxFlex=\"30\">\r\n        <mat-label>\r\n          Montant prévisionnel des ventes\r\n        </mat-label>\r\n        <input matInput readonly [value]=\"class_product.quantity*class_product.unit_price|currency:'FCFA':'symbol':'1.0-0':'fr'\" >\r\n\r\n      </mat-form-field>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n      <mat-form-field fxFlex=\"30\">\r\n        <mat-label>\r\n          Bénéfices prévisionnels Supplémentaires\r\n        </mat-label>\r\n        <input matInput readonly [value]=\"\r\n        ((class_product.quantity)*class_product.unit_price-(class_product.quantity)*command_unit.unit_price)|currency:'FCFA':'symbol':'1.0-0':'fr'\" >\r\n\r\n      </mat-form-field>\r\n\r\n    </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  </mat-card>\r\n\r\n\r\n\r\n\r\n  </mat-expansion-panel>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/stock/class_product/class-product-list/class-product-list.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/stock/class_product/class-product-list/class-product-list.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<ol class=\"breadcrumb float-right\">\r\n  <li class=\"breadcrumb-item\"><a routerLink=\"/\">Accueil</a></li>\r\n  <li class=\"breadcrumb-item active\">Stock de produit</li>\r\n</ol>\r\n<div class=\"card\">\r\n<div class=\"content\" fxLayoutGap=\"30px\" >\r\n  <a [routerLink]=\"['/stock_operations/productCommands', 'new' ]\" class=\"btn btn-default\">Nouvelle Commande de produits</a>\r\n\r\n  <a [routerLink]=\"['/stock_operations/sales', 'new' ]\" class=\"btn btn-default\">Nouvelle Vente de produits</a>\r\n    <hr>\r\n<mat-expansion-panel style=\"overflow: auto \"class=\"white-transparent filters_box\" style=\"padding :2px\" expanded=\"true\">\r\n        <mat-expansion-panel-header class=\"header\">\r\n<p class=\"lead strong\">\r\n        Filtres de recherches\r\n        </p>\r\n        <hr>\r\n</mat-expansion-panel-header>\r\n<mat-card-content class=\"bg-transparent \" fxLayout=\"row\" fxLayoutGap=\"18px\" fxLayoutAlign=\"flex-start\" fxLayout.xs=\"column\" fxLayoutAlign.xs=\"flex-start\"  fxLayout=\"row\">\r\n\r\n        <mat-card  class=\"white-transparent\">\r\n        <mat-card-header class=\"white-transparent\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n            <p fxFlex class=\"bold\">produit</p>\r\n<button style=\"border:none;background: transparent\"  (click)=\"resetProductFilter()\"  fxFlex>\r\n          <i class=\"ti-reload\"></i>\r\n          </button>\r\n</mat-card-header>\r\n      <mat-card-content class=\"white-transparent\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n\r\n\r\n\r\n\r\n\r\n\r\n    <mat-card-content class=\"white-transparent\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n<mat-form-field  class=\"gs-mat-field\" fxFlex=\"100\">\r\n        <input matInput class=\"form-control\" placeholder=\"Produit\" name=\"Product\"\r\n               [matAutocomplete]=\"autoProduct\" [formControl]=\"productInput\" (blur)=\"checkProduct()\">\r\n      </mat-form-field>\r\n      <mat-autocomplete #autoProduct=\"matAutocomplete\" [displayWith]=\"displayProduct\"\r\n                        (optionSelected)=\"productClick($event)\">\r\n        <mat-option *ngIf=\"isLoadingProduct\"  class=\"is-loading\">\r\n          <mat-spinner diameter=\"50\"></mat-spinner>\r\n        </mat-option>\r\n        <ng-container *ngIf=\"!isLoadingProduct\">\r\n          <mat-option *ngFor=\"let product of filteredProductList\" [value]=\"product\">\r\n            <span>{{product.name}}</span>\r\n          </mat-option>\r\n        </ng-container>\r\n      </mat-autocomplete>\r\n    </mat-card-content>\r\n\r\n\r\n\r\n      </mat-card-content></mat-card>\r\n\r\n        <mat-card  class=\"white-transparent\">\r\n        <mat-card-header class=\"white-transparent\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n            <p fxFlex class=\"bold\">Nom de la classe </p>\r\n<button style=\"border:none;background: transparent\"  (click)=\"labelFilter.reset()\"  fxFlex>\r\n          <i class=\"ti-reload\"></i>\r\n          </button>\r\n</mat-card-header>\r\n      <mat-card-content class=\"white-transparent\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n\r\n\r\n\r\n\r\n\r\n<mat-form-field>\r\n        <input matInput class=\"\" placeholder=\"val\" name=\"label.val\" [formControl]=\"labelFilter.controls.val\" >\r\n        </mat-form-field>\r\n\r\n      </mat-card-content></mat-card>\r\n\r\n\r\n\r\n  <mat-card  class=\"white-transparent\">\r\n    <mat-card-header class=\"white-transparent\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n      <p fxFlex class=\"bold\">Etat de stock</p>\r\n      <button style=\"border:none;background: transparent\"  (click)=\"statusFilter.reset()\"  fxFlex>\r\n        <i class=\"ti-reload\"></i>\r\n      </button>\r\n    </mat-card-header>\r\n\r\n    <mat-card-content class=\"white-transparent\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n\r\n      <mat-form-field class=\"gs-mat-field\" fxFlex=\"100\">\r\n        <mat-label>Etat</mat-label>\r\n        <mat-select  [formControl]=\"statusFilter.controls.val\">\r\n\r\n          <mat-option [value]=false> Epuisé</mat-option>\r\n\r\n          <mat-option [value]=true> Non épuisé</mat-option>\r\n\r\n        </mat-select>\r\n      </mat-form-field>\r\n\r\n    </mat-card-content></mat-card>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n</mat-card-content>\r\n\r\n\r\n</mat-expansion-panel>\r\n  </div>\r\n</div>\r\n<div  *ngIf=\"class_productList.length > 0\"  class=\"example-container mat-elevation-z8\">\r\n\r\n<mat-table class=\"\"  [dataSource]=\"dataSource\" matSort >\r\n\r\n    <ng-container matColumnDef=\"_id\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header >Id</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let item\" class=\"mobile-hide\">\r\n         <span class=\"mobile-label\">Id : </span>\r\n{{item._id}}\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"product\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header >produit</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let item\" class=\"mobile-hide\">\r\n         <span class=\"mobile-label\">produit : </span>\r\n{{item.product.name}}\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"label\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header >Nom de la classe </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let item\" class=\"mobile-hide\">\r\n         <span class=\"mobile-label\">Nom de la classe  : </span>\r\n{{item.label}}\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"unit_price\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header >Prix unitaire de vente</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let item\" class=\"mobile-hide\">\r\n         <span class=\"mobile-label\">Prix unitaire : </span>\r\n{{item.unit_price|currency:\"FCFA\":\"symbol\":'1.0-0':'fr'}}\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"date_intrance\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header >Date d'arrivée</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let item\" class=\"mobile-hide\">\r\n         <span class=\"mobile-label\">Date d'arrivée : </span>\r\n{{item.date_intrance|date:'medium'}}\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"quantity\"  >\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header >quantité</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let item\" class=\"mobile-hide\"  [ngClass]=\"{'font-red':item.quantity<=0}\">\r\n         <span class=\"mobile-label\"   >quantité : </span>\r\n{{item.quantity}}\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"total_price\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header >Prix total</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let item\" class=\"mobile-hide\">\r\n         <span class=\"mobile-label\">Prix total : </span>\r\n{{item.quantity*item.unit_price|currency:\"FCFA\":\"symbol\":'1.0-0':'fr'}}\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n<ng-container matColumnDef=\"actions\">\r\n    <mat-header-cell *matHeaderCellDef></mat-header-cell>\r\n    <mat-cell class=\"\"\r\n              *matCellDef=\"let item\">\r\n<div fxLayout=\"row\" fxLayout.md=\"column\" fxLayoutAlign=\"center\">\r\n      <a [routerLink]=\"['../classProducts', item._id ]\" class=\"btn btn-secondary\">Détails</a>&nbsp;\r\n      <a *ngIf=\"item.quantity>0\" [routerLink]=\"['/stock_operations/sales','new']\" [queryParams]=\"{init_product_id:item._id}\"  class=\"btn btn-primary\">Vendre</a>\r\n      </div>\r\n</mat-cell>\r\n  </ng-container>\r\n<mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n<mat-row *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\r\n</mat-table>\r\n<mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n\r\n  <mat-card  class=\"stats\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n    <div>\r\n      <span class=\"lead H5\">Nombre de Stocks de produit: </span>\r\n      <span class=\"H3 lead\">{{statService.numeric_datas.length}} </span>\r\n    </div>\r\n\r\n\r\n    <div>\r\n      <span class=\"lead H5\">Nombre total de produits: </span>\r\n      <span class=\"H3 lead\">{{sumService.values.get('sum')}} </span>\r\n    </div>\r\n\r\n\r\n\r\n    <div>\r\n      <span class=\"lead H5\">Montant total à vendre : </span>\r\n      <span class=\"H3 lead\">{{statService.values.get('sum_product')|currency:\"FCFA\":\"symbol\":'1.0-0':'fr'}} </span>\r\n    </div>\r\n  </mat-card>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/stock/product/product-edit/product-edit.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/stock/product/product-edit/product-edit.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ol class=\"breadcrumb float-right\" *ngIf=\"product\">\r\n  <li class=\"breadcrumb-item\"><a routerLink=\"/\">Accueil</a></li>\r\n  <li class=\"breadcrumb-item active\" routerLink=\"/stock/products\">\r\n    Produits disponibles\r\n\r\n  </li>\r\n  <li *ngIf=\"product._id\"  class=\"breadcrumb-item active\">\r\n    {{product._id}}\r\n  </li>\r\n\r\n  <li *ngIf=\"!product._id\"  class=\"breadcrumb-item active\">\r\n    Création d'un type de produit\r\n  </li>\r\n</ol>\r\n<mat-expansion-panel style=\"overflow: auto \" expanded=true class=\"card base-color-light\" *ngIf=\"product\" fxLayout=\"column\">\r\n  <mat-expansion-panel-header fxFlex=\"5\" class=\"lead\" fxLayout=\"column\" fxLayout=\"center\">\r\n\r\n\r\n      <mat-panel-title>\r\n        <p class=\"h4\">\r\n          <span *ngIf=\"!product._id\">Création d'un type de produit</span>\r\n          <span *ngIf=\"product._id\">product</span>\r\n\r\n\r\n        </p>\r\n      </mat-panel-title>\r\n\r\n      <mat-panel-description>\r\n\r\n        <p class=\"h4\"> </p>\r\n      </mat-panel-description>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  </mat-expansion-panel-header>\r\n  <div class=\"content\">\r\n    <div *ngIf=\"feedback\" class=\"alert alert-{{feedback.type}}\">{{ feedback.message }}</div>\r\n    <form  #editForm=\"ngForm\" (ngSubmit)=\"save()\">\r\n\r\n\r\n\r\n      <div class=\"form-group\">\r\n        <mat-form-field class=\"gs-mat-field\" fxFlex=\"100\">\r\n\r\n          <input matInput class=\"form-control\" placeholder=\"Id\" name=\"Id\"\r\n                 type=\"text\"  [(ngModel)]=\"product._id\"   readonly  >\r\n\r\n        </mat-form-field>\r\n      </div>\r\n\r\n\r\n\r\n      <div class=\"form-group\">\r\n        <mat-form-field class=\"gs-mat-field\" fxFlex=\"100\">\r\n\r\n          <input matInput class=\"form-control\" placeholder=\"nom\" name=\"Name\"\r\n                 type=\"text\"  [(ngModel)]=\"product.name\"   >\r\n\r\n        </mat-form-field>\r\n      </div>\r\n\r\n\r\n\r\n      <div class=\"form-group\">\r\n        <mat-form-field class=\"gs-mat-field\" fxFlex=\"100\">\r\n\r\n          <input matInput class=\"form-control\" placeholder=\"Description\" name=\"Description\"\r\n                 type=\"text\"  [(ngModel)]=\"product.description\"   >\r\n\r\n        </mat-form-field>\r\n      </div>\r\n\r\n\r\n      <div class=\"form-group\">\r\n        <mat-form-field  class=\"gs-mat-field\" fxFlex=\"100\">\r\n          <input matInput class=\"form-control\" placeholder=\"Categorie\" name=\"Category\"\r\n                 [matAutocomplete]=\"autoCategory\" [formControl]=\"categoryInput\" (blur)=\"checkCategory()\">\r\n\r\n        </mat-form-field>\r\n        <mat-autocomplete #autoCategory=\"matAutocomplete\" [displayWith]=\"displayCategory\"\r\n        (optionSelected)=\"categoryClick($event)\">\r\n        <mat-option *ngIf=\"isLoadingCategory\" class=\"is-loading\">\r\n          <mat-spinner diameter=\"50\"></mat-spinner>\r\n        </mat-option>\r\n        <ng-container *ngIf=\"!isLoadingCategory\">\r\n          <mat-option *ngFor=\"let category of filteredCategoryList\" [value]=\"category\">\r\n              <span>{{category.name}}</span>\r\n          </mat-option>\r\n        </ng-container>\r\n        </mat-autocomplete>\r\n      </div>\r\n\r\n\r\n\r\n      <div class=\"form-group\">\r\n        <mat-form-field class=\"gs-mat-field\" fxFlex=\"100\">\r\n\r\n          <input matInput class=\"form-control\" placeholder=\"Prix de base\" name=\"UnitPrice\"\r\n                 type=\"number\"  [(ngModel)]=\"product.unit_price\"   >\r\n\r\n        </mat-form-field>\r\n      </div>\r\n\r\n\r\n\r\n\r\n\r\n      <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!editForm.form.valid\">Enregistrer</button>\r\n      <button type=\"button\" class=\"btn btn-secondary\" (click)=\"cancel()\">Annuler</button>\r\n    </form>\r\n  </div>\r\n</mat-expansion-panel>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/stock/product/product-list/product-list.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/stock/product/product-list/product-list.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<ol class=\"breadcrumb float-right\">\r\n  <li class=\"breadcrumb-item\"><a routerLink=\"/\">Accueil</a></li>\r\n  <li class=\"breadcrumb-item active\">Produits disponibles</li>\r\n</ol>\r\n<div class=\"card\">\r\n\r\n  <div class=\"content\">\r\n\r\n    <a [routerLink]=\"['../products', 'new' ]\" class=\"btn btn-default\">Nouveau</a>\r\n    <hr>\r\n\r\n      <mat-expansion-panel style=\"overflow: auto \"class=\"white-transparent filters_box\" style=\"padding :2px\" expanded=\"true\">\r\n        <mat-expansion-panel-header class=\"header\">\r\n<p class=\"lead strong\">\r\n        Filtres de recherches\r\n        </p>\r\n        <hr>\r\n</mat-expansion-panel-header>\r\n<mat-card-content class=\"bg-transparent \" fxLayout=\"row\" fxLayoutGap=\"18px\" fxLayoutAlign=\"flex-start\" fxLayout.xs=\"column\" fxLayoutAlign.xs=\"flex-start\"  fxLayout=\"row\">\r\n\r\n        <mat-card  class=\"white-transparent\">\r\n        <mat-card-header class=\"white-transparent\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n            <p fxFlex class=\"bold\">nom</p>\r\n\r\n          <button style=\"border:none;background: transparent\"  (click)=\"nameFilter.reset()\" fxFlex>\r\n          <i class=\"ti-reload\"></i>\r\n          </button>\r\n\r\n        </mat-card-header>\r\n      <mat-card-content class=\"white-transparent\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n\r\n\r\n\r\n\r\n\r\n<mat-form-field>\r\n        <input matInput class=\"\" placeholder=\"val\" name=\"name.val\" [formControl]=\"nameFilter.controls.val\" >\r\n        </mat-form-field>\r\n\r\n      </mat-card-content></mat-card>\r\n\r\n        <mat-card  class=\"white-transparent\">\r\n        <mat-card-header class=\"white-transparent\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n            <p fxFlex class=\"bold\">Description</p>\r\n\r\n          <button style=\"border:none;background: transparent\"  (click)=\"descriptionFilter.reset()\" fxFlex>\r\n          <i class=\"ti-reload\"></i>\r\n          </button>\r\n\r\n        </mat-card-header>\r\n      <mat-card-content class=\"white-transparent\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n\r\n\r\n\r\n\r\n\r\n<mat-form-field>\r\n        <input matInput class=\"\" placeholder=\"val\" name=\"description.val\" [formControl]=\"descriptionFilter.controls.val\" >\r\n        </mat-form-field>\r\n\r\n      </mat-card-content></mat-card>\r\n\r\n        <mat-card  class=\"white-transparent\">\r\n        <mat-card-header class=\"white-transparent\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n            <p fxFlex class=\"bold\">Prix de base</p>\r\n\r\n          <button style=\"border:none;background: transparent\"  (click)=\"unit_priceFilter.reset()\" fxFlex>\r\n          <i class=\"ti-reload\"></i>\r\n          </button>\r\n\r\n        </mat-card-header>\r\n      <mat-card-content class=\"white-transparent\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n\r\n\r\n        <mat-form-field fxFlex=\"30\">\r\n          <input matInput class=\"\" placeholder=\"min\" name=\"unit_price.min\" [formControl]=\"unit_priceFilter.controls.min\" >\r\n        </mat-form-field >\r\n        <mat-form-field fxFlex=\"30\">\r\n        <input matInput class=\"\" placeholder=\"value\" name=\"unit_price.val\" [formControl]=\"unit_priceFilter.controls.val\" >\r\n        </mat-form-field>\r\n<mat-form-field fxFlex=\"30\">\r\n          <input matInput class=\"\" placeholder=\"max\" name=\"unit_price.max\" [formControl]=\"unit_priceFilter.controls.max\" >\r\n        </mat-form-field>\r\n\r\n\r\n\r\n\r\n      </mat-card-content></mat-card>\r\n\r\n        <mat-card  class=\"white-transparent\">\r\n        <mat-card-header class=\"white-transparent\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n            <p fxFlex class=\"bold\">Statut</p>\r\n\r\n          <button style=\"border:none;background: transparent\"  (click)=\"statusFilter.reset()\" fxFlex>\r\n          <i class=\"ti-reload\"></i>\r\n          </button>\r\n\r\n        </mat-card-header>\r\n      <mat-card-content class=\"white-transparent\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n\r\n\r\n\r\n\r\n\r\n<mat-form-field class=\"gs-mat-field\" fxFlex=\"100\">\r\n          <mat-label>Statut</mat-label>\r\n          <mat-select  [formControl]=\"statusFilter.controls.val\">\r\n\r\n            <mat-option [value]=true> Active</mat-option>\r\n\r\n            <mat-option [value]=false> Inactive</mat-option>\r\n\r\n          </mat-select>\r\n        </mat-form-field>\r\n\r\n\r\n\r\n\r\n      </mat-card-content></mat-card>\r\n\r\n      </mat-card-content>\r\n      </mat-expansion-panel>\r\n  </div>\r\n</div>\r\n<div  *ngIf=\"productList.length > 0\"  class=\"example-container mat-elevation-z8\">\r\n\r\n<mat-table class=\"\"  [dataSource]=\"dataSource\" matSort >\r\n\r\n    <ng-container matColumnDef=\"_id\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header >Id</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let item\" class=\"mobile-hide\">\r\n         <span class=\"mobile-label\">Id : </span>\r\n{{item._id}}\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"name\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header >nom</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let item\" class=\"mobile-hide\">\r\n         <span class=\"mobile-label\">nom : </span>\r\n{{item.name}}\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"description\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header >Description</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let item\" class=\"mobile-hide\">\r\n         <span class=\"mobile-label\">Description : </span>\r\n{{item.description}}\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"category\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header >Catégorie</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let item\" class=\"mobile-hide\">\r\n         <span class=\"mobile-label\">Catégorie : </span>\r\n{{item.category.name}}\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"unit_price\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header >Prix de base</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let item\" class=\"mobile-hide\">\r\n         <span class=\"mobile-label\">Prix de base : </span>\r\n{{item.unit_price}}\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"status\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header >Statut</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let item\" class=\"mobile-hide\">\r\n         <span class=\"mobile-label\">Statut : </span>\r\n{{item.status}}\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n<ng-container matColumnDef=\"actions\">\r\n    <mat-header-cell *matHeaderCellDef></mat-header-cell>\r\n    <mat-cell class=\"\"\r\n              *matCellDef=\"let item\">\r\n<div fxLayout=\"row\" fxLayout.md=\"column\" fxLayoutAlign=\"center\">\r\n      <a [routerLink]=\"['../products', item._id ]\" class=\"btn btn-secondary\">Détails</a>&nbsp;\r\n\r\n      </div>\r\n</mat-cell>\r\n  </ng-container>\r\n<mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n<mat-row *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\r\n</mat-table>\r\n<mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/stock_operations/payment/payment-edit/payment-edit.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/stock_operations/payment/payment-edit/payment-edit.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n  <mat-card style=\"overflow: auto \" expanded=true class=\"card\" *ngIf=\"payment\" fxLayout=\"column\">\r\n\r\n    <div class=\"content\">\r\n      <div *ngIf=\"feedback\" class=\"alert alert-{{feedback.type}}\">{{ feedback.message }}</div>\r\n      <form  #editForm=\"ngForm\" (ngSubmit)=\"save()\" fxLayout=\"row\" fxLayout.xs=\"column\"  fxLayoutAlign=\"space-between\">\r\n\r\n\r\n        <div class=\"form-group \" fxFlex=\"30\" >\r\n          <mat-form-field class=\"gs-mat-field\" fxFlex=\"100\">\r\n\r\n            <input matInput class=\"form-control\" placeholder=\"Montant du versement \" name=\"amount\"  [formControl]=\"amountInput\"  type=\"number\"  [(ngModel)]=\"payment.amount\"    required >\r\n\r\n          </mat-form-field>\r\n        </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n        <div class=\"form-group \" fxFlex=\"15\">\r\n          <mat-form-field class=\"gs-mat-field\" fxFlex=\"100\">\r\n\r\n            <input matInput class=\"form-control\" [matDatepicker]=\"datepicker\" placeholder=\"Date\"   [(ngModel)]=\"payment.date\" name=\"Date\"                                           required   >\r\n            <mat-datepicker-toggle matSuffix [for]=\"datepicker\"></mat-datepicker-toggle>\r\n            <mat-datepicker touchUi=\"true\" #datepicker></mat-datepicker>\r\n\r\n          </mat-form-field>\r\n        </div>\r\n\r\n\r\n\r\n\r\n        <button type=\"submit\" fxFlex=\"30\" style=\"height: 60%\" class=\"btn btn-primary\" [disabled]=\"!editForm.form.valid\">Enregistrer le versement</button>\r\n\r\n      </form>\r\n    </div>\r\n  </mat-card>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/stock_operations/payment/payment-list/payment-list.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/stock_operations/payment/payment-list/payment-list.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<div  *ngIf=\"(command&&command.command_payments&&command.command_payments.data.length > 0)||(sale&&sale.sale_payments&&sale.sale_payments.data.length > 0)\"  class=\"example-container mat-elevation-z8\">\r\n  <mat-table class=\"\"  [dataSource]=\"dataSource\" matSort >\r\n\r\n    <ng-container matColumnDef=\"_id\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header >Id</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let item\" class=\"mobile-hide\">\r\n         <span class=\"mobile-label\">Id : </span>\r\n{{item._id}}\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n\r\n\r\n\r\n\r\n  <ng-container matColumnDef=\"amount\">\r\n    <mat-header-cell *matHeaderCellDef mat-sort-header >Montant</mat-header-cell>\r\n    <mat-cell *matCellDef=\"let item\" class=\"mobile-hide\">\r\n      <span class=\"mobile-label\">Montant: </span>\r\n      {{item.amount|currency:\"FCFA\":\"symbol\":'1.0-0':'fr'}}\r\n    </mat-cell>\r\n  </ng-container>\r\n\r\n\r\n\r\n\r\n  <ng-container matColumnDef=\"date\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header >Date</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let item\" class=\"mobile-hide\">\r\n         <span class=\"mobile-label\">Date : </span>\r\n{{item.date|date}}\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"manager\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header >Utilisateur</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let item\" class=\"mobile-hide\">\r\n         <span class=\"mobile-label\">Utilisateur : </span>\r\n      {{item.manager.name}}\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n\r\n    <ng-container matColumnDef=\"status\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header >Etat</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let item\" class=\"mobile-hide\">\r\n         <span class=\"mobile-label\">Etat : </span>\r\n{{item.status}}\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n<ng-container matColumnDef=\"actions\">\r\n    <mat-header-cell *matHeaderCellDef></mat-header-cell>\r\n    <mat-cell class=\"\"\r\n              *matCellDef=\"let item\">\r\n<div fxLayout=\"row\" fxLayout.md=\"column\" fxLayoutAlign=\"center\">\r\n      <a [routerLink]=\"['../payments', item._id ]\" class=\"btn btn-secondary\">Détails</a>&nbsp;\r\n\r\n      </div>\r\n</mat-cell>\r\n  </ng-container>\r\n<mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n<mat-row *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\r\n</mat-table>\r\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n\r\n\r\n\r\n</div>\r\n  <mat-card fxLayout=\"row\" class=\"base-color\" fxLayoutAlign=\"space-between\" *ngIf=\"(command&&command.command_units_datasource.data.length>0)||(sale&&sale.sale_units_datasource.data.length>0)\">\r\n    <mat-form-field fxFlex=\"25\">\r\n      <mat-label>\r\n       Total des versements\r\n      </mat-label>\r\n      <input *ngIf=\"command\" class=\"bold\" matInput readonly [value]=\"command.amount_payment|currency:'FCFA':'symbol':'1.0-0':'fr'\">\r\n\r\n      <input class=\"bold\" *ngIf=\"sale\" matInput readonly [value]=\"sale.amount_payment|currency:'FCFA':'symbol':'1.0-0':'fr'\">\r\n    </mat-form-field>\r\n\r\n\r\n    <mat-form-field fxFlex=\"25\">\r\n      <mat-label>\r\n        Reste à payer\r\n      </mat-label>\r\n      <input matInput readonly *ngIf=\"command\" [value]=\"-command.amount_payment+command.amount|currency:'FCFA':'symbol':'1.0-0':'fr'\">\r\n      <input matInput readonly *ngIf=\"sale\" [value]=\"-sale.amount_payment+sale.amount|currency:'FCFA':'symbol':'1.0-0':'fr'\">\r\n    </mat-form-field>\r\n\r\n  </mat-card>\r\n\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/stock_operations/product_command/product-command-edit/product-command-edit.component.html":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/stock_operations/product_command/product-command-edit/product-command-edit.component.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ol class=\"breadcrumb float-right\" *ngIf=\"product_command\">\r\n  <li class=\"breadcrumb-item\"><a routerLink=\"/\">Accueil</a></li>\r\n  <li class=\"breadcrumb-item active\" routerLink=\"/stock_operations/productCommands\">\r\n    Commandes de produits\r\n  </li>\r\n  <li *ngIf=\"product_command._id\"  class=\"breadcrumb-item active\">\r\n    {{product_command._id}}\r\n  </li>\r\n  <li *ngIf=\"!product_command._id\"  class=\"breadcrumb-item active\">\r\n    Nouvelle Commande.\r\n  </li>\r\n</ol>\r\n\r\n<div fxLayout=\"column\" fxLayoutGap=\"40px\" fxLayoutAlign=\"flex-start\">\r\n\r\n\r\n\r\n\r\n\r\n\r\n  <mat-expansion-panel style=\"overflow: auto \" expanded=true class=\"card base-color-light\" *ngIf=\"product_command\" fxLayout=\"column\">\r\n    <mat-expansion-panel-header fxFlex=\"5\" class=\"lead\" fxLayout=\"column\" fxLayout=\"center\">\r\n      <mat-panel-title>\r\n        <p class=\"h4\">\r\n          <span *ngIf=\"!product_command._id\">Nouvelle commande</span>\r\n          <span *ngIf=\"product_command._id\">Commande de produit  </span>\r\n\r\n\r\n\r\n\r\n        </p>\r\n      </mat-panel-title>\r\n      <mat-panel-description>\r\n        <p class=\"h4\">  </p>\r\n      </mat-panel-description>\r\n    </mat-expansion-panel-header>\r\n\r\n    <form  #editForm=\"ngForm\" (ngSubmit)=\"save()\">\r\n\r\n\r\n      <div class=\"form-group\">\r\n        <mat-form-field class=\"gs-mat-field\" fxFlex=\"100\"  [ngClass]=\"{'alert-success': product_command.status==true, 'alert-danger':product_command.status==false }\">\r\n\r\n\r\n          <mat-label>Etat de la commande</mat-label>\r\n          <input matInput readonly [value]='product_command.status?\"Livrée\":\"Non livrée\"'>\r\n\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div class=\"form-group\" *ngIf=\"product_command.amount\">\r\n        <mat-form-field class=\"gs-mat-field \" fxFlex=\"100\"  >\r\n\r\n\r\n          <mat-label>Montant de la commande</mat-label>\r\n          <input matInput readonly class=\"alert-success\" [value]=\"product_command.amount|currency:'FCFA':'symbol':'1.0-0':'fr'\">\r\n\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n\r\n      <mat-form-field class=\"gs-mat-field\" fxFlex=\"100\"  [ngClass]=\"{'alert-success': product_command._id&&product_command.payment_status==true, 'alert-danger':product_command._id&&product_command.payment_status==false }\">\r\n\r\n\r\n        <mat-label>Etat de la facture</mat-label>\r\n        <input matInput readonly [value]='product_command.payment_status==true?\"Réglée\":\"Non réglée\"'>\r\n\r\n      </mat-form-field>\r\n      </div>\r\n\r\n\r\n\r\n\r\n\r\n      <div class=\"form-group\">\r\n        <mat-form-field  class=\"gs-mat-field\" fxFlex=\"100\">\r\n          <input matInput class=\"form-control\" placeholder=\"Fournisseur\" name=\"Provider\" required\r\n                 [matAutocomplete]=\"autoProvider\" [formControl]=\"providerInput\" (blur)=\"checkProvider()\" [readonly]=\"product_command._id\">\r\n        </mat-form-field>\r\n        <mat-autocomplete #autoProvider=\"matAutocomplete\" [displayWith]=\"displayProvider\"\r\n                          (optionSelected)=\"providerClick($event)\">\r\n          <mat-option *ngIf=\"isLoadingProvider\" class=\"is-loading\">\r\n            <mat-spinner diameter=\"50\"></mat-spinner>\r\n          </mat-option>\r\n          <ng-container *ngIf=\"!isLoadingProvider\">\r\n            <mat-option *ngFor=\"let provider of filteredProviderList\" [value]=\"provider\">\r\n              <span>{{provider.name}}</span>\r\n            </mat-option>\r\n          </ng-container>\r\n        </mat-autocomplete>\r\n      </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n      <div class=\"form-group\">\r\n        <mat-form-field class=\"gs-mat-field\" fxFlex=\"100\">\r\n\r\n          <input matInput [matDatepicker]=\"datepicker\" placeholder=\"Date de livraison\" [(ngModel)]=\"product_command.date_finalizing\" name=\"DateFinalizing\"    required  [readonly]=\"product_command._id\"  >\r\n          <mat-datepicker-toggle matSuffix [for]=\"datepicker\"  *ngIf=\"!product_command._id\" ></mat-datepicker-toggle>\r\n          <mat-datepicker touchUi=\"true\" #datepicker></mat-datepicker>\r\n\r\n        </mat-form-field>\r\n      </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n      <button type=\"submit\" class=\"btn btn-primary\"  *ngIf=\"!product_command._id\"  [disabled]=\"!editForm.form.valid||product_command.command_units_datasource.data.length<1\">Enregistrer la commande</button>\r\n\r\n      <button  class=\"btn btn-primary\"  *ngIf=\"product_command._id&&!product_command.status\" (click)=\"makeNow()\" >Effectuer la livraison maintenant</button>\r\n      <button type=\"button\" class=\"btn btn-secondary\" (click)=\"cancel()\">Retour</button>\r\n    </form>\r\n    <span *ngIf=\"false\"><button mat-button class=\"btn btn-secondary\" (click)=\"visualize()\"><mat-icon class=\"ti-printer\"> </mat-icon> Visualiser le bon de commande </button> </span>\r\n    <div class=\"content\">\r\n      <div *ngIf=\"feedback\" class=\"alert alert-{{feedback.type}}\">{{ feedback.message }}</div>\r\n      <div class=\"card\" fxLayoutGap=\"10px\" fxLayout=\"column\">\r\n\r\n\r\n        <mat-expansion-panel style=\"overflow: auto;padding:1px \" expanded=true class=\"card\" *ngIf=\"product_command\" fxLayout=\"column\">\r\n          <mat-expansion-panel-header fxFlex=\"5\" class=\"lead bg-primary\" fxLayout=\"column\" fxLayout=\"center\">\r\n            <mat-panel-title fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n              <p class=\"h6\">\r\n                Produits de la commande\r\n              </p>\r\n\r\n\r\n            </mat-panel-title>\r\n            <mat-panel-description>\r\n\r\n            </mat-panel-description>\r\n\r\n          </mat-expansion-panel-header>\r\n          <div class=\"content\"    *ngIf=\"product_command.command_units_datasource\" style=\"padding:1px\">\r\n\r\n            <app-product-command-unit-edit *ngIf=\"!product_command._id\"  [product_command]=\"product_command\" ></app-product-command-unit-edit>\r\n            <app-product-command-unit   [command]=\"product_command\" ></app-product-command-unit>\r\n\r\n          </div>\r\n        </mat-expansion-panel>\r\n\r\n        <mat-expansion-panel style=\"overflow: auto;padding:1px \" expanded=true class=\"card\" *ngIf=\"product_command\" fxLayout=\"column\">\r\n          <mat-expansion-panel-header fxFlex=\"5\" class=\"lead bg-primary\" fxLayout=\"column\" fxLayout=\"center\">\r\n            <mat-panel-title>\r\n              <p class=\"h6\">\r\n                Paiements\r\n              </p>\r\n            </mat-panel-title>\r\n            <mat-panel-description>\r\n\r\n            </mat-panel-description>\r\n\r\n          </mat-expansion-panel-header>\r\n          <div class=\"content\"    *ngIf=\"product_command.command_payments\" style=\"padding:1px\">\r\n\r\n            <app-payment-edit   [product_command]=\"product_command\"  *ngIf=\"product_command._id&&!product_command.payment_status\"></app-payment-edit>\r\n            <app-payment   [command]=\"product_command\" ></app-payment>\r\n\r\n          </div>\r\n        </mat-expansion-panel>\r\n\r\n\r\n\r\n\r\n\r\n\r\n      </div>\r\n\r\n\r\n    </div>\r\n  </mat-expansion-panel>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/stock_operations/product_command/product-command-list/product-command-list.component.html":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/stock_operations/product_command/product-command-list/product-command-list.component.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<ol class=\"breadcrumb float-right\">\r\n  <li class=\"breadcrumb-item\"><a routerLink=\"/\">Accueil</a></li>\r\n  <li class=\"breadcrumb-item active\">Commandes de produits</li>\r\n</ol>\r\n<div class=\"card\">\r\n<div class=\"content\">\r\n<a [routerLink]=\"['../productCommands', 'new' ]\" class=\"btn btn-default\">Nouvelle commande</a>\r\n    <hr>\r\n<mat-expansion-panel style=\"overflow: auto \"class=\"white-transparent filters_box\" style=\"padding :2px\" expanded=\"true\">\r\n        <mat-expansion-panel-header class=\"header\">\r\n<p class=\"lead strong\">\r\n        Filtres de recherches\r\n        </p>\r\n        <hr>\r\n</mat-expansion-panel-header>\r\n<mat-card-content class=\"bg-transparent\" fxLayout=\"row\" fxLayoutGap=\"18px\" fxLayoutAlign=\"flex-start\" fxLayout.xs=\"column\" fxLayoutAlign.xs=\"flex-start\"  fxLayout=\"row\" style=\"overflow:auto\">\r\n\r\n        <mat-card  class=\"white-transparent\">\r\n        <mat-card-header class=\"white-transparent\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n            <p fxFlex class=\"bold\">fournisseur</p>\r\n<button style=\"border:none;background: transparent\"  (click)=\"resetProviderFilter()\"  fxFlex>\r\n          <i class=\"ti-reload\"></i>\r\n          </button>\r\n</mat-card-header>\r\n      <mat-card-content class=\"white-transparent\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n\r\n\r\n\r\n\r\n\r\n    <mat-card-content class=\"white-transparent\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n<mat-form-field  class=\"gs-mat-field\" fxFlex=\"100\">\r\n        <input matInput  placeholder=\"Fournisseur\" name=\"Provider\"\r\n               [matAutocomplete]=\"autoProvider\" [formControl]=\"providerInput\" (blur)=\"checkProvider()\">\r\n      </mat-form-field>\r\n      <mat-autocomplete #autoProvider=\"matAutocomplete\" [displayWith]=\"displayProvider\"\r\n                        (optionSelected)=\"providerClick($event)\">\r\n        <mat-option *ngIf=\"isLoadingProvider\"  class=\"is-loading\">\r\n          <mat-spinner diameter=\"50\"></mat-spinner>\r\n        </mat-option>\r\n        <ng-container *ngIf=\"!isLoadingProvider\">\r\n          <mat-option *ngFor=\"let provider of filteredProviderList\" [value]=\"provider\">\r\n            <span>{{provider.name}}</span>\r\n          </mat-option>\r\n        </ng-container>\r\n      </mat-autocomplete>\r\n    </mat-card-content>\r\n\r\n\r\n\r\n\r\n      </mat-card-content></mat-card>\r\n\r\n  <mat-card  class=\"white-transparent\">\r\n    <mat-card-header class=\"white-transparent\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n      <p fxFlex class=\"bold\">Etat</p>\r\n      <button style=\"border:none;background: transparent\"  (click)=\"statusFilter.reset()\"  fxFlex>\r\n        <i class=\"ti-reload\"></i>\r\n      </button>\r\n    </mat-card-header>\r\n\r\n    <mat-card-content class=\"white-transparent\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n\r\n      <mat-form-field class=\"gs-mat-field\" fxFlex=\"100\">\r\n        <mat-label>Etat</mat-label>\r\n        <mat-select  [formControl]=\"statusFilter.controls.val\">\r\n\r\n          <mat-option [value]=true> Livrée</mat-option>\r\n\r\n          <mat-option [value]=false> Non livrée</mat-option>\r\n\r\n        </mat-select>\r\n      </mat-form-field>\r\n\r\n    </mat-card-content></mat-card>\r\n\r\n\r\n\r\n\r\n\r\n  <mat-card  class=\"white-transparent\">\r\n    <mat-card-header class=\"white-transparent\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n      <p fxFlex class=\"bold\">Facture</p>\r\n      <button style=\"border:none;background: transparent\"  (click)=\"pstatusFilter.reset()\"  fxFlex>\r\n        <i class=\"ti-reload\"></i>\r\n      </button>\r\n    </mat-card-header>\r\n\r\n    <mat-card-content class=\"white-transparent\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n\r\n      <mat-form-field class=\"gs-mat-field\" fxFlex=\"100\">\r\n        <mat-label>Etat de paiement</mat-label>\r\n        <mat-select  [formControl]=\"pstatusFilter.controls.val\">\r\n\r\n          <mat-option [value]=true> réglée</mat-option>\r\n\r\n          <mat-option [value]=false> Non réglée</mat-option>\r\n\r\n        </mat-select>\r\n      </mat-form-field>\r\n\r\n    </mat-card-content></mat-card>\r\n\r\n\r\n  <mat-card  class=\"white-transparent\" fxFlex=\"35\">\r\n    <mat-card-header class=\"white-transparent\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n      <p fxFlex=\"70\" class=\"bold\">Date de création</p>\r\n      <button style=\"border:none;background: transparent\"  (click)=\"date_initiatingFilter.reset()\"  fxFlex>\r\n        <i class=\"ti-reload\"></i>\r\n      </button>\r\n    </mat-card-header>\r\n    <mat-card-content class=\"white-transparent\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n\r\n      <mat-form-field fxFlex=\"30\">\r\n        <input matInput [matDatepicker]=\"dpdate_initiatingMin\" placeholder=\"Du\" [formControl]=\"date_initiatingFilter.controls.min\" name=\"DateFinalizing\" >\r\n        <mat-datepicker-toggle matSuffix [for]=\"dpdate_initiatingMin\"></mat-datepicker-toggle>\r\n        <mat-datepicker touchUi=\"true\" #dpdate_initiatingMin></mat-datepicker>\r\n      </mat-form-field>\r\n      <mat-form-field fxFlex=\"30\">\r\n        <input matInput [matDatepicker]=\"dpdate_initiatingVal\" placeholder=\"exacte\" [formControl]=\"date_initiatingFilter.controls.val\" name=\"DateFinalizing\" >\r\n        <mat-datepicker-toggle matSuffix [for]=\"dpdate_initiatingVal\"></mat-datepicker-toggle>\r\n        <mat-datepicker touchUi=\"true\" #dpdate_initiatingVal></mat-datepicker>\r\n      </mat-form-field>\r\n      <mat-form-field fxFlex=\"30\">\r\n        <input matInput [matDatepicker]=\"dpdate_initiatingMax\" placeholder=\"Au\" [formControl]=\"date_initiatingFilter.controls.max\" name=\"DateFinalizing\" >\r\n        <mat-datepicker-toggle matSuffix [for]=\"dpdate_initiatingMax\"></mat-datepicker-toggle>\r\n        <mat-datepicker touchUi=\"true\" #dpdate_initiatingMax></mat-datepicker>\r\n      </mat-form-field>\r\n\r\n\r\n\r\n\r\n\r\n    </mat-card-content></mat-card>\r\n\r\n\r\n\r\n\r\n  <mat-card  class=\"white-transparent\" fxFlex=\"30\">\r\n        <mat-card-header class=\"white-transparent\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n            <p fxFlex class=\"bold\" fxFlex=\"75\">Date de livraison</p>\r\n              <button style=\"border:none;background: transparent\"  (click)=\"date_finalizingFilter.reset()\"  fxFlex>\r\n          <i class=\"ti-reload\"></i>\r\n          </button>\r\n        </mat-card-header>\r\n      <mat-card-content class=\"white-transparent\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n\r\n        <mat-form-field fxFlex=\"30\">\r\n          <input matInput [matDatepicker]=\"dpdate_finalizingMin\" placeholder=\"Du\" [formControl]=\"date_finalizingFilter.controls.min\" name=\"DateFinalizing\" >\r\n          <mat-datepicker-toggle matSuffix [for]=\"dpdate_finalizingMin\"></mat-datepicker-toggle>\r\n          <mat-datepicker touchUi=\"true\" #dpdate_finalizingMin></mat-datepicker>\r\n        </mat-form-field>\r\n        <mat-form-field fxFlex=\"30\">\r\n          <input matInput [matDatepicker]=\"dpdate_finalizingVal\" placeholder=\"exacte\" [formControl]=\"date_finalizingFilter.controls.val\" name=\"DateFinalizing\" >\r\n<mat-datepicker-toggle matSuffix [for]=\"dpdate_finalizingVal\"></mat-datepicker-toggle>\r\n          <mat-datepicker touchUi=\"true\" #dpdate_finalizingVal></mat-datepicker>\r\n        </mat-form-field>\r\n<mat-form-field fxFlex=\"30\">\r\n          <input matInput [matDatepicker]=\"dpdate_finalizingMax\" placeholder=\"Au\" [formControl]=\"date_finalizingFilter.controls.max\" name=\"DateFinalizing\" >\r\n<mat-datepicker-toggle matSuffix [for]=\"dpdate_finalizingMax\"></mat-datepicker-toggle>\r\n          <mat-datepicker touchUi=\"true\" #dpdate_finalizingMax></mat-datepicker>\r\n</mat-form-field>\r\n\r\n\r\n\r\n\r\n\r\n      </mat-card-content></mat-card>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n      </mat-card-content>\r\n      </mat-expansion-panel>\r\n  </div>\r\n</div>\r\n<div  *ngIf=\"product_commandList.length > 0\"  class=\"example-container mat-elevation-z8\">\r\n\r\n<mat-table class=\"\"  [dataSource]=\"dataSource\" matSort >\r\n\r\n    <ng-container matColumnDef=\"_id\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header >Id</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let item\" class=\"mobile-hide\">\r\n         <span class=\"mobile-label\">Id : </span>\r\n{{item._id}}\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"provider\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header >fournisseur</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let item\" class=\"mobile-hide\">\r\n         <span class=\"mobile-label\">fournisseur : </span>\r\n{{item.provider.name}}\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"manager\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header >Utilisateur</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let item\" class=\"mobile-hide\">\r\n         <span class=\"mobile-label\">Utilisateur : </span>\r\n        {{item.manager.name}}\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n  <ng-container matColumnDef=\"amount\">\r\n    <mat-header-cell *matHeaderCellDef mat-sort-header >Montant de la commande</mat-header-cell>\r\n    <mat-cell *matCellDef=\"let item\" class=\"\">\r\n      <span class=\"mobile-label\">Montant </span>\r\n      {{item.amount|currency:\"FCFA\":\"symbol\":'1.0-0':'fr'}}\r\n    </mat-cell>\r\n  </ng-container>\r\n\r\n\r\n\r\n  <ng-container matColumnDef=\"date_finalizing\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header >Date de livraison</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let item\" class=\"\">\r\n         <span class=\"mobile-label\">Date de création : </span>\r\n{{item.date_initiating|date}}\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n\r\n  <ng-container matColumnDef=\"date_initiating\">\r\n    <mat-header-cell *matHeaderCellDef mat-sort-header >Date de création</mat-header-cell>\r\n    <mat-cell *matCellDef=\"let item\" class=\"mobile-hide\">\r\n      <span class=\"mobile-label\">Date de livraison : </span>\r\n      {{item.date_finalizing|date}}\r\n    </mat-cell>\r\n  </ng-container>\r\n\r\n\r\n  <ng-container matColumnDef=\"status\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header >Etat</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let item\" class=\"mobile-hide\">\r\n         <span class=\"mobile-label\">Etat : </span>\r\n{{item.status?\"Livrée\":\"Non livrée\"}}\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n\r\n\r\n  <ng-container matColumnDef=\"payment_status\">\r\n    <mat-header-cell *matHeaderCellDef mat-sort-header >Etat de la facture</mat-header-cell>\r\n    <mat-cell *matCellDef=\"let item\" class=\"mobile-hide\">\r\n      <span class=\"mobile-label\">Etat de la facture: </span>\r\n      {{item.payment_status?\"Réglée\":\"Non réglée\"}}\r\n    </mat-cell>\r\n  </ng-container>\r\n\r\n<ng-container matColumnDef=\"actions\">\r\n    <mat-header-cell *matHeaderCellDef></mat-header-cell>\r\n    <mat-cell class=\"\"\r\n              *matCellDef=\"let item\">\r\n<div fxLayout=\"row\" fxLayout.md=\"column\" fxLayoutAlign=\"center\">\r\n      <a [routerLink]=\"['../productCommands', item._id ]\" class=\"btn btn-secondary\">Détails</a>&nbsp;\r\n      <button (click)=\"delete(item)\" class=\"btn btn-danger\" *ngIf=\"!item.status&&!item.payment_status\" >Supprimer</button>\r\n\r\n\r\n      </div>\r\n</mat-cell>\r\n  </ng-container>\r\n<mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n<mat-row *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\r\n</mat-table>\r\n<mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n\r\n  <mat-card  class=\"stats\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n    <div>\r\n      <span class=\"lead H5\">Nombre de commandes: </span>\r\n      <span class=\"H3 lead\">{{statService.numeric_datas.length}} </span>\r\n    </div>\r\n\r\n    <div>\r\n    <span class=\"lead H5\">Montant total  : </span>\r\n    <span class=\"H3 lead\">{{statService.values.get('sum')|currency:\"FCFA\":\"symbol\":'1.0-0':'fr'}} </span>\r\n    </div>\r\n  </mat-card>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/stock_operations/product_command/product-command-print/product-command-print.component.html":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/stock_operations/product_command/product-command-print/product-command-print.component.html ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"bg-primary base-card\"  *ngIf=\"command\" fxLayout=\"column\" fxLayoutAlign=\"space-around\" style=\"width: 100%;height: 100%\">\n  <div class=\"white-transparent\" fxFlex=\"20\" fxLayout=\"column\" fxLayoutAlign=\"flex-start\">\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"center\">\n      <p class=\"h4\" lead>ODICAM </p>\n    </div>\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n    <p class=\"h5\">Commande {{command._id}} </p>\n\n     <p class=\"h6\">Date de Livraison: {{command.date_finalizing|date}} </p>\n    </div>\n  </div>\n  <mat-card class=\"white-transparent\" fxFlex=\"60\" fxLayout=\"column\" fxLayoutAlign=\"flex-start\" >\n\n    <app-product-command-unit [command]=\"command\" style=\"height: 100%\"></app-product-command-unit>\n  </mat-card>\n\n\n  <mat-card class=\"white-transparent\" fxFlex=\"10\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n\n    <button mat-button class=\"btn btn-primary\"><mat-icon class=\"ti-printer\"> </mat-icon> Imprimer </button>\n    <button  class=\"btn btn-danger\" (click)=\"close()\"><mat-icon class=\"ti-close\"> </mat-icon> Fermer </button>\n\n  </mat-card>\n\n\n\n</mat-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/stock_operations/product_command/product_command_unit/product-command-unit-edit/product-command-unit-edit.component.html":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/stock_operations/product_command/product_command_unit/product-command-unit-edit/product-command-unit-edit.component.html ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <div style=\"overflow: auto \" class=\"bg-transparent\" *ngIf=\"product_command_unit\" fxLayout=\"column\">\r\n\r\n      <div *ngIf=\"feedback\" class=\"alert alert-{{feedback.type}}\">{{ feedback.message }}</div>\r\n      <form  #editForm=\"ngForm\"  fxLayout=\"row\" fxLayoutAlign=\"space-between\" (ngSubmit)=\"add()\">\r\n\r\n\r\n\r\n\r\n\r\n        <div class=\"form-group\" fxFlex=\"30\">\r\n          <mat-form-field  class=\"gs-mat-field\" fxFlex=\"100\">\r\n            <input matInput class=\"form-control\" placeholder=\"Produit\" name=\"Product\"\r\n                   [matAutocomplete]=\"autoProduct\" [formControl]=\"productInput\" (blur)=\"checkProduct()\">\r\n          </mat-form-field>\r\n          <mat-autocomplete #autoProduct=\"matAutocomplete\" [displayWith]=\"displayProduct\"\r\n          (optionSelected)=\"productClick($event)\">\r\n          <mat-option *ngIf=\"isLoadingProduct\" class=\"is-loading\">\r\n            <mat-spinner diameter=\"50\"></mat-spinner>\r\n          </mat-option>\r\n          <ng-container *ngIf=\"!isLoadingProduct\">\r\n            <mat-option *ngFor=\"let product of filteredProductList\" [value]=\"product\" class=\"card-option\" style=\"height:auto\">\r\n              <mat-card fxLayout=\"column\" fxLayoutAlign=\"center\" >\r\n              <div fxFlex=\"30\" fxLayout=\"column\" fxLayoutAlign=\"space-between\">\r\n\r\n                    <span class=\"lead h5\">{{product.name}}</span>\r\n                <div>\r\n                  <mat-label class=\"\">\r\n                    Categorie :\r\n                  </mat-label>\r\n                  <input class=\"h6 lead\"  matInput readonly value=\"{{product.category.name}}\" required>\r\n                </div>\r\n\r\n              </div>\r\n                <mat-card-content fxFlex=\"70\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n\r\n\r\n\r\n                </mat-card-content>\r\n\r\n              </mat-card>\r\n\r\n-\r\n\r\n\r\n            </mat-option>\r\n          </ng-container>\r\n          </mat-autocomplete>\r\n        </div>\r\n\r\n\r\n\r\n\r\n        <div class=\"form-group\">\r\n          <mat-form-field class=\"gs-mat-field\" fxFlex=\"100\">\r\n\r\n            <input matInput class=\"form-control\" placeholder=\"Quantité\" name=\"Quantity\"\r\n                   type=\"number\"  [(ngModel)]=\"product_command_unit.quantity\"    required >\r\n\r\n          </mat-form-field>\r\n        </div>\r\n\r\n\r\n\r\n        <div class=\"form-group\">\r\n          <mat-form-field class=\"gs-mat-field\" fxFlex=\"100\">\r\n\r\n            <input matInput class=\"form-control\" placeholder=\"Prix d'achat unitaire\" name=\"UnitPrice\"\r\n                   type=\"number\"  [(ngModel)]=\"product_command_unit.unit_price\"   required >\r\n\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <mat-form-field class=\"gs-mat-field\" fxFlex=\"100\">\r\n\r\n            <input matInput class=\"form-control\" placeholder=\"Prix de vente unitaire\" name=\"UnitSalePrice\"\r\n                   type=\"number\"  [(ngModel)]=\"product_command_unit.unit_sale_price\"   required >\r\n\r\n          </mat-form-field>\r\n        </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n        <button type=\"submit\" fxFlex=\"10\" style=\"height: 60%\" class=\"btn btn-primary\" [disabled]=\"!editForm.form.valid\" >Ajouter</button>\r\n\r\n      </form>\r\n\r\n  </div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/stock_operations/product_command/product_command_unit/product-command-unit-list/product-command-unit-list.component.html":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/stock_operations/product_command/product_command_unit/product-command-unit-list/product-command-unit-list.component.html ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<div  *ngIf=\"dataSource.data.length > 0\"  class=\"example-container mat-elevation-z8\">\r\n\r\n<mat-table class=\"\"   [dataSource]=\"dataSource\" matSort >\r\n\r\n\r\n    <ng-container matColumnDef=\"product\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header >Produit</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let item\" class=\"mobile-hide\">\r\n         <span class=\"mobile-label\">Produit : </span>\r\n{{item.product_class.product.name}}\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"quantity\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header >Quantité</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let item\" class=\"mobile-hide\">\r\n         <span class=\"mobile-label\">Quantité : </span>\r\n{{item.quantity}}\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"unit_price\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header >Prix d'achat unitaire</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let item\" class=\"mobile-hide\">\r\n         <span class=\"mobile-label\">Prix d'achat unitaire : </span>\r\n{{item.unit_price|currency:\"FCFA\":\"symbol\":'1.0-0':'fr'}}\r\n\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n\r\n  <ng-container matColumnDef=\"total\">\r\n    <mat-header-cell *matHeaderCellDef mat-sort-header >Prix Total acheté</mat-header-cell>\r\n    <mat-cell *matCellDef=\"let item\" class=\"mobile-hide\">\r\n      <span class=\"mobile-label\">Prix total acheté : </span>\r\n      {{item.quantity*item.unit_price|currency:\"FCFA\":\"symbol\":'1.0-0':'fr'}}\r\n    </mat-cell>\r\n  </ng-container>\r\n\r\n\r\n<ng-container matColumnDef=\"actions\" >\r\n    <mat-header-cell *matHeaderCellDef></mat-header-cell>\r\n    <mat-cell class=\"\" *matCellDef=\"let item\">\r\n<div fxLayout=\"row\" fxLayout.md=\"column\" fxLayoutAlign=\"center\" *ngIf=\"!command._id\">\r\n  <button (click)=\"remove(item)\" class=\"btn btn-danger\">Retirer</button>\r\n\r\n\r\n</div>\r\n\r\n    </mat-cell>\r\n  </ng-container>\r\n<mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n<mat-row *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\r\n</mat-table>\r\n\r\n\r\n  <mat-card fxLayout=\"row\" fxLayoutAlign=\"space-between\" *ngIf=\"command.command_units_datasource.data.length>0\">\r\n    <mat-form-field fxFlex=\"25\">\r\n      <mat-label>\r\n        Montant Total\r\n      </mat-label>\r\n      <input matInput readonly [value]=\"command.amount|currency:'FCFA':'symbol':'1.0-0':'fr'\">\r\n    </mat-form-field>\r\n\r\n  </mat-card>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/stock_operations/sale/sale-edit/sale-edit.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/stock_operations/sale/sale-edit/sale-edit.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ol class=\"breadcrumb float-right\" *ngIf=\"sale\">\r\n  <li class=\"breadcrumb-item\"><a routerLink=\"/\">Accueil</a></li>\r\n  <li class=\"breadcrumb-item active\" routerLink=\"/stock_operations/sales\">\r\n    Ventes de produits\r\n  </li>\r\n  <li *ngIf=\"sale._id\"  class=\"breadcrumb-item active\">\r\n    {{sale._id}}\r\n  </li>\r\n  <li *ngIf=\"!sale._id\"  class=\"breadcrumb-item active\">\r\n    Nouvelle vente.\r\n  </li>\r\n</ol>\r\n\r\n<div fxLayout=\"column\" fxLayoutGap=\"40px\" fxLayoutAlign=\"flex-start\" >\r\n\r\n\r\n\r\n\r\n\r\n\r\n  <mat-expansion-panel style=\"overflow: auto \" expanded=true class=\"card base-color-light\" *ngIf=\"sale\" fxLayout=\"column\">\r\n    <mat-expansion-panel-header fxFlex=\"5\" class=\"lead\" fxLayout=\"column\" fxLayout=\"center\">\r\n      <mat-panel-title>\r\n        <p class=\"h4\">\r\n          <span *ngIf=\"!sale._id\">Nouvelle vente</span>\r\n          <span *ngIf=\"sale._id\">Vente de produit  </span>\r\n\r\n\r\n\r\n\r\n        </p>\r\n      </mat-panel-title>\r\n      <mat-panel-description>\r\n        <p class=\"h4\">  </p>\r\n      </mat-panel-description>\r\n    </mat-expansion-panel-header>\r\n\r\n    <span *ngIf=\"false\"><button mat-button class=\"btn btn-secondary\" (click)=\"visualize()\"><mat-icon class=\"ti-printer\"> </mat-icon> Visualiser le bon de vente </button> </span>\r\n    <div class=\"content\">\r\n      <div *ngIf=\"feedback\" class=\"alert alert-{{feedback.type}}\">{{ feedback.message }}</div>\r\n\r\n\r\n      <form  #editForm=\"ngForm\" (ngSubmit)=\"save()\">\r\n\r\n\r\n        <div class=\"form-group \" fxLayout=\"row\" fxLayout.lg=\"column\" fxLayoutAlign=\"space-between\">\r\n          <mat-form-field class=\"gs-mat-field\" fxFlex=\"100\"  [ngClass]=\"{'alert-success': sale.status==true, 'alert-danger':sale.status==false }\">\r\n\r\n\r\n            <mat-label>Etat de la vente</mat-label>\r\n            <input matInput readonly [value]='sale.status?\"Livrée\":\"Non livrée\"'>\r\n\r\n          </mat-form-field>\r\n\r\n\r\n<div class=\"form-group\" *ngIf=\"sale.amount\">\r\n          <mat-form-field class=\"gs-mat-field \" fxFlex=\"100\"  >\r\n\r\n\r\n            <mat-label>Montant de la vente</mat-label>\r\n            <input matInput readonly class=\"alert-success\" [value]=\"sale.amount|currency:'FCFA':'symbol':'1.0-0':'fr'\">\r\n\r\n          </mat-form-field>\r\n</div>\r\n\r\n\r\n          <mat-form-field class=\"gs-mat-field\" fxFlex=\"100\"   [ngClass]=\"{'alert-success': sale._id&&sale.payment_status==true, 'alert-danger':sale._id&&sale.payment_status==false }\">\r\n\r\n\r\n            <mat-label>Etat de la facture</mat-label>\r\n            <input matInput readonly [value]='sale.payment_status==true?\"Réglée\":\"Non réglée\"'>\r\n\r\n          </mat-form-field>\r\n        </div>\r\n\r\n\r\n        <div class=\"form-group\">\r\n          <mat-form-field  class=\"gs-mat-field\" fxFlex=\"100\">\r\n            <input matInput class=\"form-control\" placeholder=\"Client\" name=\"Customer\" required\r\n                   [matAutocomplete]=\"autoCustomer\" [formControl]=\"customerInput\" (blur)=\"checkCustomer()\" [readonly]=\"sale._id\">\r\n          </mat-form-field>\r\n          <mat-autocomplete #autoCustomer=\"matAutocomplete\" [displayWith]=\"displayCustomer\"\r\n                            (optionSelected)=\"customerClick($event)\">\r\n            <mat-option *ngIf=\"isLoadingCustomer\" class=\"is-loading\">\r\n              <mat-spinner diameter=\"50\"></mat-spinner>\r\n            </mat-option>\r\n            <ng-container *ngIf=\"!isLoadingCustomer\">\r\n              <mat-option *ngFor=\"let customer of filteredCustomerList\" [value]=\"customer\">\r\n                <span>{{customer.name}}</span>\r\n              </mat-option>\r\n            </ng-container>\r\n          </mat-autocomplete>\r\n        </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n        <div class=\"form-group\">\r\n          <mat-form-field class=\"gs-mat-field\" fxFlex=\"100\">\r\n\r\n            <input matInput [matDatepicker]=\"datepicker\" placeholder=\"Date de la livraison de la vente\" [(ngModel)]=\"sale.date_finalizing\" name=\"DateFinalizing\"    required  [readonly]=\"sale._id\"  >\r\n            <mat-datepicker-toggle matSuffix [for]=\"datepicker\"  *ngIf=\"!sale._id\" ></mat-datepicker-toggle>\r\n            <mat-datepicker touchUi=\"true\" #datepicker></mat-datepicker>\r\n\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <button type=\"submit\" class=\"btn btn-primary\"  *ngIf=\"!sale._id\"   [disabled]=\"!editForm.form.valid||!sale.customer||sale.sale_units_datasource.data.length<1\"         >Enregistrer la vente</button>\r\n\r\n\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"cancel()\">Retour</button>\r\n      </form>\r\n      <button  class=\"btn btn-primary\"  *ngIf=\"sale._id&&!sale.status\" (click)=\"makeNow()\" >Effectuer la livraison maintenant</button>\r\n    </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n      <div class=\"card\" fxLayoutGap=\"10px\" fxLayout=\"column\">\r\n        <mat-expansion-panel style=\"overflow: auto;padding:1px \" expanded=true class=\"card\" *ngIf=\"sale\" fxLayout=\"column\">\r\n          <mat-expansion-panel-header fxFlex=\"5\" class=\"lead bg-primary\"  fxLayout=\"column\" fxLayout=\"center\" >\r\n            <mat-panel-title fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n              <p class=\"h6\">\r\n                Produits de la vente\r\n              </p>\r\n\r\n\r\n            </mat-panel-title>\r\n            <mat-panel-description>\r\n            Ajouter des produits à la vente\r\n            </mat-panel-description>\r\n\r\n          </mat-expansion-panel-header>\r\n          <div class=\"content\"    *ngIf=\"sale.sale_units_datasource\" style=\"padding:1px\">\r\n\r\n            <app-sale-unit-edit *ngIf=\"!sale._id\"  [sale]=\"sale\" ></app-sale-unit-edit>\r\n            <app-sale-unit   [sale]=\"sale\" ></app-sale-unit>\r\n\r\n          </div>\r\n        </mat-expansion-panel>\r\n\r\n        <mat-expansion-panel style=\"overflow: auto;padding:1px \" expanded=true class=\"card\" *ngIf=\"sale\" fxLayout=\"column\">\r\n          <mat-expansion-panel-header fxFlex=\"5\" class=\"lead bg-primary\" fxLayout=\"column\" fxLayout=\"center\">\r\n            <mat-panel-title>\r\n              <p class=\"h6\">\r\n                Paiements\r\n              </p>\r\n            </mat-panel-title>\r\n            <mat-panel-description>\r\n\r\n            </mat-panel-description>\r\n\r\n          </mat-expansion-panel-header>\r\n          <div class=\"content\"    *ngIf=\"sale.sale_payments\" style=\"padding:1px\">\r\n\r\n            <app-payment-edit   [sale]=\"sale\"  *ngIf=\"sale._id&&!sale.payment_status\"></app-payment-edit>\r\n            <app-payment   [sale]=\"sale\" ></app-payment>\r\n\r\n          </div>\r\n        </mat-expansion-panel>\r\n\r\n\r\n\r\n\r\n\r\n\r\n      </div>\r\n\r\n  </mat-expansion-panel>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/stock_operations/sale/sale-list/sale-list.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/stock_operations/sale/sale-list/sale-list.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<ol class=\"breadcrumb float-right\">\r\n  <li class=\"breadcrumb-item\"><a routerLink=\"/\">Accueil</a></li>\r\n  <li class=\"breadcrumb-item active\">Ventes de produits</li>\r\n</ol>\r\n<div class=\"card\">\r\n  <div class=\"content\">\r\n    <a [routerLink]=\"['../sales', 'new' ]\" class=\"btn btn-default\">Nouvelle vente</a>\r\n    <hr>\r\n    <mat-expansion-panel style=\"overflow: auto \"class=\"white-transparent filters_box\" style=\"padding :2px\" expanded=\"true\">\r\n      <mat-expansion-panel-header class=\"header\">\r\n        <p class=\"lead strong\">\r\n          Filtres de recherches\r\n        </p>\r\n        <hr>\r\n</mat-expansion-panel-header>\r\n<mat-card-content class=\"bg-transparent \" fxLayout=\"row\" fxLayoutGap=\"18px\" fxLayoutAlign=\"flex-start\" fxLayout.xs=\"column\" fxLayoutAlign.xs=\"flex-start\"  fxLayout=\"row\" style=\"overflow:auto\">\r\n\r\n        <mat-card  class=\"white-transparent\">\r\n          <mat-card-header class=\"white-transparent\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n            <p fxFlex class=\"bold\">client</p>\r\n            <button style=\"border:none;background: transparent\"  (click)=\"resetCustomerFilter()\"  fxFlex>\r\n              <i class=\"ti-reload\"></i>\r\n            </button>\r\n          </mat-card-header>\r\n          <mat-card-content class=\"white-transparent\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n\r\n\r\n\r\n\r\n\r\n            <mat-card-content class=\"white-transparent\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n              <mat-form-field  class=\"gs-mat-field\" fxFlex=\"100\">\r\n                <input matInput class=\"form-control\" placeholder=\"Customer\" name=\"Customer\"\r\n                       [matAutocomplete]=\"autoCustomer\" [formControl]=\"customerInput\" (blur)=\"checkCustomer()\">\r\n              </mat-form-field>\r\n              <mat-autocomplete #autoCustomer=\"matAutocomplete\" [displayWith]=\"displayCustomer\"\r\n                                (optionSelected)=\"customerClick($event)\">\r\n                <mat-option *ngIf=\"isLoadingCustomer\"  class=\"is-loading\">\r\n                  <mat-spinner diameter=\"50\"></mat-spinner>\r\n                </mat-option>\r\n                <ng-container *ngIf=\"!isLoadingCustomer\">\r\n                  <mat-option *ngFor=\"let customer of filteredCustomerList\" [value]=\"customer\">\r\n                    <span>{{customer.name}}</span>\r\n                  </mat-option>\r\n                </ng-container>\r\n              </mat-autocomplete>\r\n            </mat-card-content>\r\n\r\n\r\n\r\n          </mat-card-content></mat-card>\r\n\r\n        <mat-card  class=\"white-transparent\" fxFlex=\"30\">\r\n          <mat-card-header class=\"white-transparent\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n            <p fxFlex class=\"bold\">Date de livraison</p>\r\n            <button style=\"border:none;background: transparent\"  (click)=\"date_finalizingFilter.reset()\"  fxFlex>\r\n              <i class=\"ti-reload\"></i>\r\n            </button>\r\n          </mat-card-header>\r\n          <mat-card-content class=\"white-transparent\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n\r\n            <mat-form-field fxFlex=\"30\">\r\n              <input matInput [matDatepicker]=\"dpdate_finalizingMin\" placeholder=\"Du\" [formControl]=\"date_finalizingFilter.controls.min\" name=\"DateFinalizing\" >\r\n              <mat-datepicker-toggle matSuffix [for]=\"dpdate_finalizingMin\"></mat-datepicker-toggle>\r\n              <mat-datepicker touchUi=\"true\" #dpdate_finalizingMin></mat-datepicker>\r\n            </mat-form-field>\r\n            <mat-form-field fxFlex=\"30\">\r\n              <input matInput [matDatepicker]=\"dpdate_finalizingVal\" placeholder=\"exacte\" [formControl]=\"date_finalizingFilter.controls.val\" name=\"DateFinalizing\" >\r\n              <mat-datepicker-toggle matSuffix [for]=\"dpdate_finalizingVal\"></mat-datepicker-toggle>\r\n              <mat-datepicker touchUi=\"true\" #dpdate_finalizingVal></mat-datepicker>\r\n            </mat-form-field>\r\n            <mat-form-field fxFlex=\"30\">\r\n              <input matInput [matDatepicker]=\"dpdate_finalizingMax\" placeholder=\"Au  \" [formControl]=\"date_finalizingFilter.controls.max\" name=\"DateFinalizing\" >\r\n              <mat-datepicker-toggle matSuffix [for]=\"dpdate_finalizingMax\"></mat-datepicker-toggle>\r\n              <mat-datepicker touchUi=\"true\" #dpdate_finalizingMax></mat-datepicker>\r\n            </mat-form-field>\r\n\r\n\r\n\r\n\r\n\r\n          </mat-card-content></mat-card>\r\n\r\n        <mat-card  class=\"white-transparent\">\r\n          <mat-card-header class=\"white-transparent\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n            <p fxFlex class=\"bold\">Etat</p>\r\n            <button style=\"border:none;background: transparent\"  (click)=\"statusFilter.reset()\"  fxFlex>\r\n              <i class=\"ti-reload\"></i>\r\n            </button>\r\n          </mat-card-header>\r\n\r\n          <mat-card-content class=\"white-transparent\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n\r\n            <mat-form-field class=\"gs-mat-field\" fxFlex=\"100\">\r\n              <mat-label>Etat</mat-label>\r\n              <mat-select  [formControl]=\"statusFilter.controls.val\">\r\n\r\n                <mat-option [value]=true> Livrée</mat-option>\r\n\r\n                <mat-option [value]=false> Non livrée</mat-option>\r\n\r\n              </mat-select>\r\n            </mat-form-field>\r\n\r\n          </mat-card-content></mat-card>\r\n\r\n\r\n\r\n\r\n\r\n        <mat-card  class=\"white-transparent\">\r\n          <mat-card-header class=\"white-transparent\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n            <p fxFlex class=\"bold\">Facture</p>\r\n            <button style=\"border:none;background: transparent\"  (click)=\"pstatusFilter.reset()\"  fxFlex>\r\n              <i class=\"ti-reload\"></i>\r\n            </button>\r\n          </mat-card-header>\r\n\r\n          <mat-card-content class=\"white-transparent\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n\r\n            <mat-form-field class=\"gs-mat-field\" fxFlex=\"100\">\r\n              <mat-label>Etat de paiement</mat-label>\r\n              <mat-select  [formControl]=\"pstatusFilter.controls.val\">\r\n\r\n                <mat-option [value]=true> réglée</mat-option>\r\n\r\n                <mat-option [value]=false> Non réglée</mat-option>\r\n\r\n              </mat-select>\r\n            </mat-form-field>\r\n\r\n          </mat-card-content></mat-card>\r\n\r\n\r\n\r\n\r\n        <mat-card  class=\"white-transparent\" fxFlex=\"30\">\r\n          <mat-card-header class=\"white-transparent\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n            <p fxFlex class=\"bold\">Date de création</p>\r\n            <button style=\"border:none;background: transparent\"  (click)=\"date_initiatingFilter.reset()\"  fxFlex>\r\n              <i class=\"ti-reload\"></i>\r\n            </button>\r\n          </mat-card-header>\r\n          <mat-card-content class=\"white-transparent\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n\r\n            <mat-form-field fxFlex=\"30\">\r\n              <input matInput [matDatepicker]=\"dpdate_initiatingMin\" placeholder=\"Du\" [formControl]=\"date_initiatingFilter.controls.min\" name=\"DateFinalizing\" >\r\n              <mat-datepicker-toggle matSuffix [for]=\"dpdate_initiatingMin\"></mat-datepicker-toggle>\r\n              <mat-datepicker touchUi=\"true\" #dpdate_initiatingMin></mat-datepicker>\r\n            </mat-form-field>\r\n            <mat-form-field fxFlex=\"30\">\r\n              <input matInput [matDatepicker]=\"dpdate_initiatingVal\" placeholder=\"exacte\" [formControl]=\"date_initiatingFilter.controls.val\" name=\"DateFinalizing\" >\r\n              <mat-datepicker-toggle matSuffix [for]=\"dpdate_initiatingVal\"></mat-datepicker-toggle>\r\n              <mat-datepicker touchUi=\"true\" #dpdate_initiatingVal></mat-datepicker>\r\n            </mat-form-field>\r\n            <mat-form-field fxFlex=\"30\">\r\n              <input matInput [matDatepicker]=\"dpdate_initiatingMax\" placeholder=\"Au\" [formControl]=\"date_initiatingFilter.controls.max\" name=\"DateFinalizing\" >\r\n              <mat-datepicker-toggle matSuffix [for]=\"dpdate_initiatingMax\"></mat-datepicker-toggle>\r\n              <mat-datepicker touchUi=\"true\" #dpdate_initiatingMax></mat-datepicker>\r\n            </mat-form-field>\r\n\r\n\r\n\r\n\r\n\r\n          </mat-card-content></mat-card>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n      </mat-card-content>\r\n    </mat-expansion-panel>\r\n  </div>\r\n</div>\r\n<div  *ngIf=\"saleList.length > 0\"  class=\"example-container mat-elevation-z8\">\r\n\r\n  <mat-table class=\"\"  [dataSource]=\"dataSource\" matSort >\r\n\r\n    <ng-container matColumnDef=\"_id\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header >Id</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let item\" class=\"mobile-hide\">\r\n        <span class=\"mobile-label\">Id : </span>\r\n        {{item._id}}\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"customer\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header >client</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let item\" class=\"mobile-hide\">\r\n        <span class=\"mobile-label\">client : </span>\r\n        {{item.customer.name}}\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"manager\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header >Utilisateur</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let item\" class=\"mobile-hide\">\r\n        <span class=\"mobile-label\">Utilisateur : </span>\r\n        {{item.manager?item.manager.name:''}}\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"amount\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header >Montant de la vente</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let item\" class=\"mobile-hide\">\r\n        <span class=\"mobile-label\">Montant </span>\r\n        {{item.amount|currency:\"FCFA\":\"symbol\":'1.0-0':'fr'}}\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n\r\n\r\n\r\n\r\n    <ng-container matColumnDef=\"date_finalizing\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header >Date de création</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let item\" class=\"mobile-hide\">\r\n        <span class=\"mobile-label\">Date de création : </span>\r\n        {{item.date_initiating|date}}\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"date_initiating\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header >Date de livraison</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let item\" class=\"mobile-hide\">\r\n        <span class=\"mobile-label\">Date de livraison : </span>\r\n        {{item.date_finalizing|date}}\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"status\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header >Etat</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let item\" class=\"mobile-hide\">\r\n        <span class=\"mobile-label\">Etat : </span>\r\n        {{item.status?\"Livrée\":\"Non livrée\"}}\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n\r\n\r\n    <ng-container matColumnDef=\"payment_status\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header >Etat de la facture</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let item\" class=\"mobile-hide\">\r\n        <span class=\"mobile-label\">Etat de la facture: </span>\r\n        {{item.payment_status?\"Réglée\":\"Non réglée\"}}\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"actions\">\r\n      <mat-header-cell *matHeaderCellDef></mat-header-cell>\r\n      <mat-cell class=\"\"\r\n                *matCellDef=\"let item\">\r\n        <div fxLayout=\"row\" fxLayout.md=\"column\" fxLayoutAlign=\"center\">\r\n          <a [routerLink]=\"['../sales', item._id ]\" class=\"btn btn-secondary\">Détails</a>&nbsp;\r\n\r\n        </div>\r\n      </mat-cell>\r\n    </ng-container>\r\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n    <mat-row *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\r\n  </mat-table>\r\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n  <mat-card  class=\"stats\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n    <div>\r\n      <span class=\"lead H5\">Nombre de ventes: </span>\r\n      <span class=\"H3 lead\">{{statService.numeric_datas.length}} </span>\r\n    </div>\r\n\r\n    <div>\r\n      <span class=\"lead H5\">Montant total  : </span>\r\n      <span class=\"H3 lead\">{{statService.values.get('sum')|currency:\"FCFA\":\"symbol\":'1.0-0':'fr'}} </span>\r\n    </div>\r\n  </mat-card>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/stock_operations/sale/sale-print/sale-print.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/stock_operations/sale/sale-print/sale-print.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>sale-print works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/stock_operations/sale/sale_unit/sale-unit-edit/sale-unit-edit.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/stock_operations/sale/sale_unit/sale-unit-edit/sale-unit-edit.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"overflow: auto \" class=\"bg-transparent\" *ngIf=\"sale_unit\" fxLayout=\"column\">\r\n\r\n  <div *ngIf=\"feedback\" class=\"alert alert-{{feedback.type}}\">{{ feedback.message }}</div>\r\n  <form  #editForm=\"ngForm\"  fxLayout=\"row\" fxLayoutAlign=\"space-between\" (ngSubmit)=\"add()\">\r\n\r\n\r\n\r\n\r\n\r\n    <div class=\"form-group\" fxFlex=\"40\">\r\n      <mat-form-field  class=\"gs-mat-field\" fxFlex=\"100\">\r\n        <input matInput class=\"form-control\" placeholder=\"Stock de Produit\" name=\"Product\"\r\n               [matAutocomplete]=\"autoProduct\" [formControl]=\"productInput\" (blur)=\"checkProduct()\">\r\n      </mat-form-field>\r\n      <mat-autocomplete #autoProduct=\"matAutocomplete\" [displayWith]=\"displayProduct\"\r\n                        (optionSelected)=\"productClick($event)\">\r\n        <mat-option *ngIf=\"isLoadingProduct\" class=\"is-loading\">\r\n          <mat-spinner diameter=\"50\"></mat-spinner>\r\n        </mat-option>\r\n         <ng-container *ngIf=\"!isLoadingProduct\">\r\n          <mat-option *ngFor=\"let class_product of filteredClassProductList;\" [value]=\"class_product\" class=\"card-option\" style=\"height:auto\">\r\n            <div fxLayout=\"column\"  fxLayoutAlign=\"center\" >\r\n              <mat-card-header  fxFlex=\"30\" fxLayout=\"column\" fxLayoutAlign=\"space-between\" >\r\n\r\n\r\n\r\n\r\n                <p class=\"lead h6\">{{class_product.product.name}}</p>\r\n\r\n\r\n                <div>\r\n                  <mat-label>Arrivé le : </mat-label>\r\n                  <span class=\"h6\">{{class_product.date_intrance|date}}</span>\r\n                </div>\r\n\r\n\r\n\r\n              </mat-card-header>\r\n              <mat-card-content fxFlex=\"70\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n\r\n\r\n\r\n                  <div>\r\n                    <mat-label>\r\n                      Quantité présente :\r\n                    </mat-label>\r\n                    <span> {{class_product.quantity}}\r\n                      </span>\r\n                  </div>\r\n                  <div>\r\n\r\n                    <span> {{class_product.unit_price |currency:\"FCFA\":\"symbol\":'1.0-0':'fr'}}</span>\r\n\r\n                  </div>\r\n\r\n\r\n\r\n\r\n\r\n              </mat-card-content>\r\n\r\n            </div>\r\n\r\n\r\n\r\n\r\n          </mat-option>\r\n        </ng-container>\r\n      </mat-autocomplete>\r\n    </div>\r\n\r\n\r\n\r\n\r\n    <div class=\"form-group\">\r\n      <mat-form-field class=\"gs-mat-field\" fxFlex=\"100\">\r\n\r\n        <input matInput class=\"form-control\" placeholder=\"Quantité\" name=\"Quantity\" [formControl]=\"quantityInput\"\r\n               type=\"number\" min=\"1\" [(ngModel)]=\"sale_unit.quantity \"    required >\r\n\r\n      </mat-form-field>\r\n    </div>\r\n\r\n\r\n\r\n    <div class=\"form-group\">\r\n      <mat-form-field class=\"gs-mat-field\" fxFlex=\"100\">\r\n\r\n        <input matInput class=\"form-control\" placeholder=\"Prix de vente\" name=\"UnitPrice\"\r\n               type=\"number\"  [(ngModel)]=\"sale_unit.unit_price\"   required >\r\n\r\n      </mat-form-field>\r\n    </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n    <button type=\"submit\" fxFlex=\"10\" style=\"height: 60%\" class=\"btn btn-primary\" [disabled]=\"!editForm.form.valid||!quantityInput.valid\" >Ajouter</button>\r\n\r\n  </form>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/stock_operations/sale/sale_unit/sale-unit-list/sale-unit-list.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/stock_operations/sale/sale_unit/sale-unit-list/sale-unit-list.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<div  *ngIf=\"dataSource.data.length > 0\"  class=\"example-container mat-elevation-z8\">\r\n\r\n  <mat-table class=\"\"   [dataSource]=\"dataSource\" matSort >\r\n\r\n\r\n    <ng-container matColumnDef=\"product\">\r\n      <div>\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header >Produit</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let item\" class=\"mobile-hide\">\r\n        <span class=\"mobile-label\">Produit : </span>\r\n        {{item.product_class.product.name}}\r\n\r\n      </mat-cell>\r\n\r\n      </div>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"quantity\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header >Quantité</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let item\" class=\"mobile-hide\">\r\n        <span class=\"mobile-label\">Quantité : </span>\r\n        {{item.quantity}}\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"unit_price\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header >Prix de vente unitaire</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let item\" class=\"mobile-hide\">\r\n        <span class=\"mobile-label\">Prix de vente unitaire : </span>\r\n        {{item.unit_price|currency:\"FCFA\":\"symbol\":'1.0-0':'fr'}}\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n\r\n    <ng-container matColumnDef=\"date\" >\r\n      <div>\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header >Date de la vente</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let item\" class=\"mobile-hide\">\r\n        <span class=\"mobile-label\">Date de la vente : </span>\r\n        {{item.sale.date_finalizing|date }}\r\n      </mat-cell>\r\n      </div>\r\n    </ng-container>\r\n\r\n\r\n    <ng-container matColumnDef=\"total\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header >Prix Total vendu</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let item\" class=\"mobile-hide\">\r\n        <span class=\"mobile-label\">Prix total vendu : </span>\r\n        {{item.quantity*item.unit_price|currency:\"FCFA\":\"symbol\":'1.0-0':'fr'}}\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"amount_payment\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header >Montant perçu</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let item\" class=\"mobile-hide\">\r\n        <span class=\"mobile-label\">Prix total vendu : </span>\r\n        {{(item.sale.payment_status?item.quantity*item.unit_price:(item.sale.amount==item.unit_price*item.quantity?item.sale.amount_payment:0))|currency:\"FCFA\":\"symbol\":'1.0-0':'fr'}}\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n\r\n\r\n    <ng-container matColumnDef=\"customer\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header >Client</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let item\" class=\"mobile-hide\">\r\n        <span class=\"mobile-label\">Client </span>\r\n        {{item.sale.customer.name}}\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n\r\n    <ng-container matColumnDef=\"payment_status\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header >Etat de paiement</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let item\" class=\"mobile-hide\">\r\n        <span class=\"mobile-label\">Etat de paiement : </span>\r\n        {{item.sale.payment_status?\"Réglée\":\"Non réglée\"}}\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n\r\n\r\n\r\n    <ng-container matColumnDef=\"actions\" >\r\n      <mat-header-cell *matHeaderCellDef></mat-header-cell>\r\n      <mat-cell class=\"\" *matCellDef=\"let item\">\r\n        <div fxLayout=\"row\" fxLayout.md=\"column\" fxLayoutAlign=\"center\" *ngIf=\"!sale._id\">\r\n          <button (click)=\"remove(item)\" class=\"btn btn-danger\">Retirer</button>\r\n        </div>\r\n\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n\r\n\r\n\r\n\r\n\r\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n    <mat-row *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\r\n  </mat-table>\r\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  <mat-card fxLayout=\"row\" fxLayoutAlign=\"space-between\" *ngIf=\"saleMode&& sale.sale_units_datasource.data.length>0\">\r\n    <mat-form-field fxFlex=\"25\">\r\n      <mat-label>\r\n        Montant Total\r\n      </mat-label>\r\n      <input matInput readonly [value]=\"sale.amount|currency:'FCFA':'symbol':'1.0-0':'fr'\">\r\n    </mat-form-field>\r\n\r\n  </mat-card>\r\n\r\n\r\n\r\n  <mat-card fxLayout=\"row\" fxLayoutAlign=\"space-between\" *ngIf=\"productMode&& sale.sale_units_datasource.data.length>0\">\r\n    <mat-form-field fxFlex=\"25\">\r\n      <mat-label>\r\n        Montant total des ventes\r\n      </mat-label>\r\n      <input matInput readonly [value]=\"sale.amount|currency:'FCFA':'symbol':'1.0-0':'fr'\">\r\n    </mat-form-field>\r\n\r\n\r\n\r\n    <mat-form-field fxFlex=\"25\">\r\n      <mat-label>\r\n        Montant total perçu\r\n      </mat-label>\r\n      <input matInput readonly [value]=\"sale.paid_amount|currency:'FCFA':'symbol':'1.0-0':'fr'\">\r\n    </mat-form-field>\r\n\r\n\r\n\r\n\r\n    <mat-form-field fxFlex=\"25\">\r\n      <mat-label>\r\n        Reste à percevoir(Crédits) :\r\n      </mat-label>\r\n      <input matInput readonly [value]=\"sale.amount-sale.paid_amount|currency:'FCFA':'symbol':'1.0-0':'fr'\">\r\n    </mat-form-field>\r\n\r\n\r\n\r\n\r\n\r\n  </mat-card>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _stock_class_product_class_product_list_class_product_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stock/class_product/class-product-list/class-product-list.component */ "./src/app/stock/class_product/class-product-list/class-product-list.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: _stock_class_product_class_product_list_class_product_list_component__WEBPACK_IMPORTED_MODULE_1__["ClassProductListComponent"]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".loading-indicator {\n  position: fixed;\n  left: 0px;\n  top: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: black;\n  opacity: 0.3;\n}\n\n.spinner {\n  width: 40px;\n  height: 40px;\n  position: relative;\n  margin: 100px auto;\n}\n\n.double-bounce1, .double-bounce2 {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  background-color: #FFF;\n  opacity: 0.6;\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-animation: sk-bounce 2s infinite ease-in-out;\n  animation: sk-bounce 2s infinite ease-in-out;\n}\n\n.double-bounce2 {\n  -webkit-animation-delay: -1s;\n  animation-delay: -1s;\n}\n\n@-webkit-keyframes sk-bounce {\n  0%, 100% {\n    -webkit-transform: scale(0);\n  }\n  50% {\n    -webkit-transform: scale(1);\n  }\n}\n\n@keyframes sk-bounce {\n  0%, 100% {\n    transform: scale(0);\n    -webkit-transform: scale(0);\n  }\n  50% {\n    transform: scale(1);\n    -webkit-transform: scale(1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQjpcXFByb2pldHNcXEdlc3Rpb24gZGUgQm91dGlxdWVcXGdzX3N0b2NrXFxBUFAvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBRUEsa0JBQUE7RUFDQSxrQkFBQTtBQ0FKOztBREdFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFFQSxvREFBQTtFQUNBLDRDQUFBO0FDREo7O0FESUU7RUFDRSw0QkFBQTtFQUNBLG9CQUFBO0FDREo7O0FESUU7RUFDRTtJQUNFLDJCQUFBO0VDREo7RURHRTtJQUNFLDJCQUFBO0VDREo7QUFDRjs7QURJRTtFQUNFO0lBQ0UsbUJBQUE7SUFDQSwyQkFBQTtFQ0ZKO0VESUU7SUFDRSxtQkFBQTtJQUNBLDJCQUFBO0VDRko7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkaW5nLWluZGljYXRvciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBvcGFjaXR5OiAwLjM7XHJcbiAgfVxyXG4gIFxyXG4gIC5zcGlubmVyIHtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gIFxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luOiAxMDBweCBhdXRvO1xyXG4gIH1cclxuICBcclxuICAuZG91YmxlLWJvdW5jZTEsIC5kb3VibGUtYm91bmNlMiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcbiAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gIFxyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IHNrLWJvdW5jZSAyLjBzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xyXG4gICAgYW5pbWF0aW9uOiBzay1ib3VuY2UgMi4wcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxuICB9XHJcbiAgXHJcbiAgLmRvdWJsZS1ib3VuY2UyIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMS4wcztcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLTEuMHM7XHJcbiAgfVxyXG4gIFxyXG4gIEAtd2Via2l0LWtleWZyYW1lcyBzay1ib3VuY2Uge1xyXG4gICAgMCUsIDEwMCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4wKVxyXG4gICAgfVxyXG4gICAgNTAlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMClcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBzay1ib3VuY2Uge1xyXG4gICAgMCUsIDEwMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMCk7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjApO1xyXG4gICAgfVxyXG4gICAgNTAlIHtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjApO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wKTtcclxuICAgIH1cclxuICB9XHJcbiAgIiwiLmxvYWRpbmctaW5kaWNhdG9yIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwcHg7XG4gIHRvcDogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgb3BhY2l0eTogMC4zO1xufVxuXG4uc3Bpbm5lciB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAxMDBweCBhdXRvO1xufVxuXG4uZG91YmxlLWJvdW5jZTEsIC5kb3VibGUtYm91bmNlMiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgb3BhY2l0eTogMC42O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgLXdlYmtpdC1hbmltYXRpb246IHNrLWJvdW5jZSAycyBpbmZpbml0ZSBlYXNlLWluLW91dDtcbiAgYW5pbWF0aW9uOiBzay1ib3VuY2UgMnMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XG59XG5cbi5kb3VibGUtYm91bmNlMiB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMXM7XG4gIGFuaW1hdGlvbi1kZWxheTogLTFzO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2stYm91bmNlIHtcbiAgMCUsIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxuICA1MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufVxuQGtleWZyYW1lcyBzay1ib3VuY2Uge1xuICAwJSwgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _params_manager_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./params/manager/auth/auth.service */ "./src/app/params/manager/auth/auth.service.ts");
/* harmony import */ var _configuration_configuration_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./configuration/configuration.service */ "./src/app/configuration/configuration.service.ts");





var AppComponent = /** @class */ (function () {
    function AppComponent(authService, configurationService) {
        //this.authService.loadDefaultManager();
        this.authService = authService;
        this.configurationService = configurationService;
        this.title = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"]['app_name'];
    }
    AppComponent.ctorParameters = function () { return [
        { type: _params_manager_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _configuration_configuration_service__WEBPACK_IMPORTED_MODULE_4__["ConfigurationService"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule, configFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configFactory", function() { return configFactory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _gs_nav_gs_nav_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gs-nav/gs-nav.module */ "./src/app/gs-nav/gs-nav.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _configuration_configuration_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./configuration/configuration.service */ "./src/app/configuration/configuration.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _stock_category_category_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./stock/category/category.module */ "./src/app/stock/category/category.module.ts");
/* harmony import */ var _stock_product_product_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./stock/product/product.module */ "./src/app/stock/product/product.module.ts");
/* harmony import */ var _partners_customer_customer_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./partners/customer/customer.module */ "./src/app/partners/customer/customer.module.ts");
/* harmony import */ var _partners_provider_provider_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./partners/provider/provider.module */ "./src/app/partners/provider/provider.module.ts");
/* harmony import */ var _stock_class_product_class_product_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./stock/class_product/class-product.module */ "./src/app/stock/class_product/class-product.module.ts");
/* harmony import */ var _params_manager_manager_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./params/manager/manager.module */ "./src/app/params/manager/manager.module.ts");
/* harmony import */ var _stock_operations_product_command_product_command_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./stock_operations/product_command/product-command.module */ "./src/app/stock_operations/product_command/product-command.module.ts");
/* harmony import */ var _stock_operations_sale_sale_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./stock_operations/sale/sale.module */ "./src/app/stock_operations/sale/sale.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common/locales/fr */ "./node_modules/@angular/common/locales/fr.js");
/* harmony import */ var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");


























Object(_angular_common__WEBPACK_IMPORTED_MODULE_22__["registerLocaleData"])(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_23___default.a, 'fr');
;
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_7__["NavComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_24__["DashboardComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
                _stock_operations_product_command_product_command_module__WEBPACK_IMPORTED_MODULE_20__["ProductCommandModule"],
                _stock_operations_sale_sale_module__WEBPACK_IMPORTED_MODULE_21__["SaleModule"],
                _stock_category_category_module__WEBPACK_IMPORTED_MODULE_14__["CategoryModule"],
                _stock_product_product_module__WEBPACK_IMPORTED_MODULE_15__["ProductModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_25__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
                _partners_customer_customer_module__WEBPACK_IMPORTED_MODULE_16__["CustomerModule"],
                _partners_provider_provider_module__WEBPACK_IMPORTED_MODULE_17__["ProviderModule"],
                _stock_class_product_class_product_module__WEBPACK_IMPORTED_MODULE_18__["ClassProductModule"],
                _params_manager_manager_module__WEBPACK_IMPORTED_MODULE_19__["ManagerModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _gs_nav_gs_nav_module__WEBPACK_IMPORTED_MODULE_1__["GsNavModule"],
            ],
            providers: [{
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["APP_INITIALIZER"],
                    useFactory: configFactory,
                    deps: [_configuration_configuration_service__WEBPACK_IMPORTED_MODULE_12__["ConfigurationService"]],
                    multi: true
                }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());

function configFactory(config) {
    return function () { return config.loadConfigurations(); };
}


/***/ }),

/***/ "./src/app/configuration/configuration.service.ts":
/*!********************************************************!*\
  !*** ./src/app/configuration/configuration.service.ts ***!
  \********************************************************/
/*! exports provided: ConfigurationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationService", function() { return ConfigurationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var ConfigurationService = /** @class */ (function () {
    function ConfigurationService(http) {
        this.http = http;
        this.CONFIG_URL = 'assets/config/config.json';
        this.environment = {};
    }
    ConfigurationService.prototype.loadConfigFiles = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (!this.configuration$) {
                    this.configuration$ = this.http.get(this.CONFIG_URL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])(1));
                }
                return [2 /*return*/, this.configuration$.toPromise()];
            });
        });
    };
    ConfigurationService.prototype.loadConfigurations = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var promise;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                promise = new Promise(function (resolve) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var data;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.loadConfigFiles()];
                            case 1:
                                data = _a.sent();
                                this.parseConfigurationApis(data);
                                this.parseConfigurationMain(data);
                                resolve(this.environment);
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/, promise];
            });
        });
    };
    ConfigurationService.prototype.parseConfigurationMain = function (data) {
        for (var key in data.main) {
            this.environment[key] = data.main[key];
        }
    };
    ConfigurationService.prototype.parseConfigurationApis = function (data) {
        for (var key in data.api_roots) {
            this.environment[key] = data.api_roots[key];
        }
    };
    ConfigurationService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ConfigurationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], ConfigurationService);
    return ConfigurationService;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-grid-tile {\n  background-color: rgba(173, 216, 230, 0.2);\n  border-style: inset;\n  border: 1px;\n  border-radius: 0.3em;\n}\n.mat-grid-tile .mat-card {\n  background-color: white;\n}\n.mat-grid-tile .mat-card .mat-card-header {\n  background-color: lightblue;\n}\n.mat-grid-tile .mat-grid-tile-header {\n  position: center;\n  font-weight: bold;\n}\n.mat-grid-tile .btn-fill {\n  background: rgba(173, 216, 230, 0.9);\n  border: none;\n}\n.mat-grid-tile .btn-fill:hover {\n  background: lightgray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL0I6XFxQcm9qZXRzXFxHZXN0aW9uIGRlIEJvdXRpcXVlXFxnc19zdG9ja1xcQVBQL3NyY1xcYXBwXFxkYXNoYm9hcmRcXGRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLDBDQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBRUEsb0JBQUE7QUNERjtBREdFO0VBQ0UsdUJBQUE7QUNESjtBREVJO0VBRUUsMkJBQUE7QUNETjtBREtFO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQ0hKO0FET0U7RUFDRSxvQ0FBQTtFQUNBLFlBQUE7QUNMSjtBRFFFO0VBRUkscUJBQUE7QUNQTiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLm1hdC1ncmlkLXRpbGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEobGlnaHRibHVlLCAwLjIpO1xyXG4gIGJvcmRlci1zdHlsZTogaW5zZXQ7XHJcbiAgYm9yZGVyOiAxcHg7XHJcblxyXG4gIGJvcmRlci1yYWRpdXM6IDAuM2VtO1xyXG5cclxuICAubWF0LWNhcmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuICAgIC5tYXQtY2FyZC1oZWFkZXJcclxuICAgIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xyXG4gICAgfVxyXG5cclxuICB9XHJcbiAgLm1hdC1ncmlkLXRpbGUtaGVhZGVyIHtcclxuICAgIHBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuXHJcblxyXG4gIH1cclxuICAuYnRuLWZpbGwge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYShsaWdodGJsdWUsMC45KTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICB9XHJcblxyXG4gIC5idG4tZmlsbDpob3ZlciB7XHJcblxyXG4gICAgICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XHJcblxyXG4gIH1cclxufVxyXG5cclxuXHJcbiIsIi5tYXQtZ3JpZC10aWxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNzMsIDIxNiwgMjMwLCAwLjIpO1xuICBib3JkZXItc3R5bGU6IGluc2V0O1xuICBib3JkZXI6IDFweDtcbiAgYm9yZGVyLXJhZGl1czogMC4zZW07XG59XG4ubWF0LWdyaWQtdGlsZSAubWF0LWNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5tYXQtZ3JpZC10aWxlIC5tYXQtY2FyZCAubWF0LWNhcmQtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xufVxuLm1hdC1ncmlkLXRpbGUgLm1hdC1ncmlkLXRpbGUtaGVhZGVyIHtcbiAgcG9zaXRpb246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubWF0LWdyaWQtdGlsZSAuYnRuLWZpbGwge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE3MywgMjE2LCAyMzAsIDAuOSk7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5tYXQtZ3JpZC10aWxlIC5idG4tZmlsbDpob3ZlciB7XG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _stock_class_product_class_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stock/class_product/class-product.service */ "./src/app/stock/class_product/class-product.service.ts");
/* harmony import */ var _stock_operations_product_command_product_command_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../stock_operations/product_command/product-command.service */ "./src/app/stock_operations/product_command/product-command.service.ts");
/* harmony import */ var _stock_operations_sale_sale_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../stock_operations/sale/sale.service */ "./src/app/stock_operations/sale/sale.service.ts");
/* harmony import */ var _partners_customer_customer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../partners/customer/customer.service */ "./src/app/partners/customer/customer.service.ts");
/* harmony import */ var _partners_provider_provider_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../partners/provider/provider.service */ "./src/app/partners/provider/provider.service.ts");







var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(productClassService, commandService, saleService, customerService, providerService) {
        this.productClassService = productClassService;
        this.commandService = commandService;
        this.saleService = saleService;
        this.customerService = customerService;
        this.providerService = providerService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.initProductBox();
        this.initCommandBox();
        this.initSaleBox();
        this.initPartenarBox();
    };
    DashboardComponent.prototype.initProductBox = function () {
        var _this = this;
        this.productClassService.count().subscribe(function (count) { return _this.product_class_count = count; }, function (err) {
            _this.feedback = { type: 'warning', message: "Erreur lors du chargement du dashboard : " + err.message };
        });
    };
    DashboardComponent.prototype.initCommandBox = function () {
        var _this = this;
        this.commandService.load_on_comming().subscribe(function (data) { return _this.oncomming_commands = data; }, function (err) {
            _this.feedback = { type: 'warning', message: "Erreur lors du chargement du dashboard : " + err.message };
        });
        this.commandService.load_last().subscribe(function (data) { return _this.last_command = data; }, function (err) {
            _this.feedback = { type: 'warning', message: "Erreur lors du chargement du dashboard : " + err.message };
        });
    };
    DashboardComponent.prototype.initSaleBox = function () {
        var _this = this;
        this.saleService.load_on_comming().subscribe(function (data) { return _this.oncomming_sales = data; }, function (err) {
            _this.feedback = { type: 'warning', message: "Erreur lors du chargement du dashboard : " + err.message };
        });
        this.saleService.load_last().subscribe(function (data) { return _this.last_sale = data; }, function (err) {
            _this.feedback = { type: 'warning', message: "Erreur lors du chargement du dashboard : " + err.message };
        });
    };
    DashboardComponent.prototype.initPartenarBox = function () {
        var _this = this;
        this.customerService.count().subscribe(function (data) { return _this.customer_count = data; }, function (err) {
            _this.feedback = { type: 'warning', message: "Erreur lors du chargement du dashboard : " + err.message };
        });
        this.providerService.count().subscribe(function (data) { return _this.provider_count = data; }, function (err) {
            _this.feedback = { type: 'warning', message: "Erreur lors du chargement du dashboard : " + err.message };
        });
    };
    DashboardComponent.ctorParameters = function () { return [
        { type: _stock_class_product_class_product_service__WEBPACK_IMPORTED_MODULE_2__["ClassProductService"] },
        { type: _stock_operations_product_command_product_command_service__WEBPACK_IMPORTED_MODULE_3__["ProductCommandService"] },
        { type: _stock_operations_sale_sale_service__WEBPACK_IMPORTED_MODULE_4__["SaleService"] },
        { type: _partners_customer_customer_service__WEBPACK_IMPORTED_MODULE_5__["CustomerService"] },
        { type: _partners_provider_provider_service__WEBPACK_IMPORTED_MODULE_6__["ProviderService"] }
    ]; };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")).default]
        })
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/gs-nav/base/base.component.scss":
/*!*************************************************!*\
  !*** ./src/app/gs-nav/base/base.component.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".nav {\n  padding: 10px;\n}\n\n.base {\n  background: -webkit-gradient(linear, left top, left bottom, from(white), to(lightblue));\n  background: linear-gradient(white, lightblue);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3MtbmF2L2Jhc2UvQjpcXFByb2pldHNcXEdlc3Rpb24gZGUgQm91dGlxdWVcXGdzX3N0b2NrXFxBUFAvc3JjXFxhcHBcXGdzLW5hdlxcYmFzZVxcYmFzZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZ3MtbmF2L2Jhc2UvYmFzZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZ3MtbmF2L2Jhc2UvQjpcXFByb2pldHNcXEdlc3Rpb24gZGUgQm91dGlxdWVcXGdzX3N0b2NrXFxBUFAvc3JjXFxhc3NldHNcXGNvbG9yLXRoZW1lc1xcZGVlcC1ibHVlXFxtYWluLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFFSSxhQUFBO0FDREo7O0FES0E7RUFFSSx1RkVUUTtFRlNSLDZDRVRRO0FETVoiLCJmaWxlIjoic3JjL2FwcC9ncy1uYXYvYmFzZS9iYXNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInNyYy9hc3NldHMvY29sb3ItdGhlbWVzL2RlZXAtYmx1ZS9tYWluXCI7XHJcbi5uYXYge1xyXG5cclxuICAgIHBhZGRpbmc6MTBweDtcclxufVxyXG5cclxuXHJcbi5iYXNlIHtcclxuXHJcbiAgICBiYWNrZ3JvdW5kOiRtYWluLWNvbG9yO1xyXG59XHJcbiIsIi5uYXYge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uYmFzZSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh3aGl0ZSwgbGlnaHRibHVlKTtcbn0iLCIkbWFpbi1jb2xvcjpsaW5lYXItZ3JhZGllbnQod2hpdGUsbGlnaHRibHVlKTtcclxuIl19 */");

/***/ }),

/***/ "./src/app/gs-nav/base/base.component.ts":
/*!***********************************************!*\
  !*** ./src/app/gs-nav/base/base.component.ts ***!
  \***********************************************/
/*! exports provided: BaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseComponent", function() { return BaseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _nav_item_nav_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../nav-item/nav-item.component */ "./src/app/gs-nav/nav-item/nav-item.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var NavPosition;
(function (NavPosition) {
    NavPosition[NavPosition["top"] = 0] = "top";
    NavPosition[NavPosition["left"] = 1] = "left";
})(NavPosition || (NavPosition = {}));
var BaseComponent = /** @class */ (function () {
    function BaseComponent() {
        this.orientation = NavPosition.top;
    }
    BaseComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
    ], BaseComponent.prototype, "orientation", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
    ], BaseComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"])(_nav_item_nav_item_component__WEBPACK_IMPORTED_MODULE_1__["NavItemComponent"])
    ], BaseComponent.prototype, "navItems", void 0);
    BaseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'gs-nav',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./base.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/gs-nav/base/base.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./base.component.scss */ "./src/app/gs-nav/base/base.component.scss")).default]
        })
    ], BaseComponent);
    return BaseComponent;
}());



/***/ }),

/***/ "./src/app/gs-nav/gs-nav.module.ts":
/*!*****************************************!*\
  !*** ./src/app/gs-nav/gs-nav.module.ts ***!
  \*****************************************/
/*! exports provided: GsNavModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GsNavModule", function() { return GsNavModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _gs_nav_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gs-nav.routing.module */ "./src/app/gs-nav/gs-nav.routing.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _base_base_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./base/base.component */ "./src/app/gs-nav/base/base.component.ts");
/* harmony import */ var _nav_item_nav_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav-item/nav-item.component */ "./src/app/gs-nav/nav-item/nav-item.component.ts");
/* harmony import */ var ngx_bootstrap_navbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap-navbar */ "./node_modules/ngx-bootstrap-navbar/fesm5/ngx-bootstrap-navbar.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./top-nav/top-nav.component */ "./src/app/gs-nav/top-nav/top-nav.component.ts");
/* harmony import */ var _param_param_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./param/param.component */ "./src/app/gs-nav/param/param.component.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");













var GsNavModule = /** @class */ (function () {
    function GsNavModule() {
    }
    GsNavModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [_base_base_component__WEBPACK_IMPORTED_MODULE_5__["BaseComponent"], _nav_item_nav_item_component__WEBPACK_IMPORTED_MODULE_6__["NavItemComponent"], _top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_10__["TopNavComponent"], _param_param_component__WEBPACK_IMPORTED_MODULE_11__["ParamComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                ngx_bootstrap_navbar__WEBPACK_IMPORTED_MODULE_7__["NgxNavbarModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _gs_nav_routing_module__WEBPACK_IMPORTED_MODULE_2__["GsNavRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"]
            ],
            exports: [
                _base_base_component__WEBPACK_IMPORTED_MODULE_5__["BaseComponent"], _nav_item_nav_item_component__WEBPACK_IMPORTED_MODULE_6__["NavItemComponent"], _top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_10__["TopNavComponent"]
            ],
            entryComponents: [
                _param_param_component__WEBPACK_IMPORTED_MODULE_11__["ParamComponent"]
            ]
        })
    ], GsNavModule);
    return GsNavModule;
}());



/***/ }),

/***/ "./src/app/gs-nav/gs-nav.routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/gs-nav/gs-nav.routing.module.ts ***!
  \*************************************************/
/*! exports provided: GsNavRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GsNavRoutingModule", function() { return GsNavRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var GsNavRoutingModule = /** @class */ (function () {
    function GsNavRoutingModule() {
    }
    GsNavRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], GsNavRoutingModule);
    return GsNavRoutingModule;
}());



/***/ }),

/***/ "./src/app/gs-nav/nav-item/nav-item.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/gs-nav/nav-item/nav-item.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".active-nav-item {\n  background-color: lightblue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3MtbmF2L25hdi1pdGVtL0I6XFxQcm9qZXRzXFxHZXN0aW9uIGRlIEJvdXRpcXVlXFxnc19zdG9ja1xcQVBQL3NyY1xcYXBwXFxncy1uYXZcXG5hdi1pdGVtXFxuYXYtaXRlbS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZ3MtbmF2L25hdi1pdGVtL25hdi1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2dzLW5hdi9uYXYtaXRlbS9uYXYtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3RpdmUtbmF2LWl0ZW0ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcclxufVxyXG4iLCIuYWN0aXZlLW5hdi1pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/gs-nav/nav-item/nav-item.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/gs-nav/nav-item/nav-item.component.ts ***!
  \*******************************************************/
/*! exports provided: NavItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavItemComponent", function() { return NavItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavItemComponent = /** @class */ (function () {
    function NavItemComponent() {
        this.target = null;
        this.icon = "ti-blackboard";
    }
    NavItemComponent_1 = NavItemComponent;
    NavItemComponent.prototype.ngOnInit = function () {
    };
    NavItemComponent.prototype.sidenav_close = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('nav-open');
    };
    NavItemComponent.prototype.ngAfterViewInit = function () {
    };
    var NavItemComponent_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NavItemComponent.prototype, "label", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NavItemComponent.prototype, "target", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NavItemComponent.prototype, "icon", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(NavItemComponent_1)
    ], NavItemComponent.prototype, "childrenItems", void 0);
    NavItemComponent = NavItemComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'nav-item',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/gs-nav/nav-item/nav-item.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav-item.component.scss */ "./src/app/gs-nav/nav-item/nav-item.component.scss")).default]
        })
    ], NavItemComponent);
    return NavItemComponent;
}());



/***/ }),

/***/ "./src/app/gs-nav/param/param.component.scss":
/*!***************************************************!*\
  !*** ./src/app/gs-nav/param/param.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dzLW5hdi9wYXJhbS9wYXJhbS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/gs-nav/param/param.component.ts":
/*!*************************************************!*\
  !*** ./src/app/gs-nav/param/param.component.ts ***!
  \*************************************************/
/*! exports provided: ParamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParamComponent", function() { return ParamComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ParamComponent = /** @class */ (function () {
    function ParamComponent() {
    }
    ParamComponent.prototype.ngOnInit = function () {
    };
    ParamComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-param',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./param.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/gs-nav/param/param.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./param.component.scss */ "./src/app/gs-nav/param/param.component.scss")).default]
        })
    ], ParamComponent);
    return ParamComponent;
}());



/***/ }),

/***/ "./src/app/gs-nav/top-nav/top-nav.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/gs-nav/top-nav/top-nav.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dzLW5hdi90b3AtbmF2L3RvcC1uYXYuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/gs-nav/top-nav/top-nav.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/gs-nav/top-nav/top-nav.component.ts ***!
  \*****************************************************/
/*! exports provided: TopNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopNavComponent", function() { return TopNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _param_param_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../param/param.component */ "./src/app/gs-nav/param/param.component.ts");
/* harmony import */ var _params_manager_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../params/manager/auth/auth.service */ "./src/app/params/manager/auth/auth.service.ts");
/* harmony import */ var _configuration_configuration_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../configuration/configuration.service */ "./src/app/configuration/configuration.service.ts");






var TopNavComponent = /** @class */ (function () {
    function TopNavComponent(matDialog, authService, confService) {
        this.matDialog = matDialog;
        this.authService = authService;
        this.confService = confService;
        this.sidebarVisible = false;
        this.app_name = this.confService.environment['app_name'];
    }
    TopNavComponent.prototype.ngOnInit = function () {
    };
    TopNavComponent.prototype.sidebarToggle = function () {
        var body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible == false) {
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        }
        else {
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    };
    TopNavComponent.prototype.openParam = function () {
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        // The user can't close the dialog by clicking outside its body
        dialogConfig.id = "modal-component";
        dialogConfig.height = "350px";
        dialogConfig.width = "600px";
        // https://material.angular.io/components/dialog/overview
        var modalDialog = this.matDialog.open(_param_param_component__WEBPACK_IMPORTED_MODULE_3__["ParamComponent"], dialogConfig);
    };
    TopNavComponent.prototype.disconnect = function () {
        if (!confirm("Voulez-vous vraiment vous déconnecter?"))
            return;
        alert("Déconnexion");
        this.authService.logout();
    };
    TopNavComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
        { type: _params_manager_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _configuration_configuration_service__WEBPACK_IMPORTED_MODULE_5__["ConfigurationService"] }
    ]; };
    TopNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'top-nav',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./top-nav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/gs-nav/top-nav/top-nav.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./top-nav.component.scss */ "./src/app/gs-nav/top-nav/top-nav.component.scss")).default]
        })
    ], TopNavComponent);
    return TopNavComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.scss":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.scss ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi9uYXYuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _configuration_configuration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configuration/configuration.service */ "./src/app/configuration/configuration.service.ts");



var NavComponent = /** @class */ (function () {
    function NavComponent(confService) {
        this.confService = confService;
        this.app_name = this.confService.environment['app_name'];
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent.ctorParameters = function () { return [
        { type: _configuration_configuration_service__WEBPACK_IMPORTED_MODULE_2__["ConfigurationService"] }
    ]; };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav/nav.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav.component.scss */ "./src/app/nav/nav.component.scss")).default]
        })
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/params/manager/auth/auth.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/params/manager/auth/auth.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcmFtcy9tYW5hZ2VyL2F1dGgvYXV0aC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/params/manager/auth/auth.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/params/manager/auth/auth.component.ts ***!
  \*******************************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/params/manager/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var AuthComponent = /** @class */ (function () {
    function AuthComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.feedback = {};
        this.nameInput = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.passwordInput = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.authForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            "name": this.nameInput,
            "password": this.passwordInput
        });
    }
    AuthComponent.prototype.ngOnInit = function () {
    };
    AuthComponent.prototype.submit = function () {
        var _this = this;
        this.authService.login(this.nameInput.value, this.passwordInput.value).subscribe(function (data) {
            if (data.length > 0) {
                _this.feedback = { type: 'success', message: 'Connexion réussie' };
                setTimeout(function () {
                    _this.authService.active_user = data[0];
                    _this.router.navigateByUrl("/");
                }, 500);
            }
            else {
                _this.feedback = { type: 'warning', message: 'Paramètres invalides' };
            }
        }, function (error) {
            _this.feedback = { type: 'warning', message: "Echec de connexion : " + error.message };
        });
    };
    AuthComponent.ctorParameters = function () { return [
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    AuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-auth',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./auth.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/params/manager/auth/auth.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./auth.component.scss */ "./src/app/params/manager/auth/auth.component.scss")).default]
        })
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/params/manager/auth/auth.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/params/manager/auth/auth.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../manager */ "./src/app/params/manager/manager.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _manager_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../manager.service */ "./src/app/params/manager/manager.service.ts");





var AuthService = /** @class */ (function () {
    function AuthService(router, managerService) {
        this.router = router;
        this.managerService = managerService;
    }
    AuthService.prototype.canActivate = function (route, state) {
        if (this.active_user) {
            return true;
        }
        else {
            this.router.navigateByUrl("/auth");
        }
    };
    AuthService.prototype.loadDefaultManager = function () {
        var adminId = "5e66220a1a223c30a84866e8";
        this.active_user = new _manager__WEBPACK_IMPORTED_MODULE_2__["Manager"]();
        this.active_user._id = adminId;
        this.active_user.name = "admin";
    };
    AuthService.prototype.login = function (name, password) {
        return this.managerService.findByCredentials(name, password);
    };
    AuthService.prototype.logout = function () {
        this.active_user = null;
    };
    AuthService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _manager_service__WEBPACK_IMPORTED_MODULE_4__["ManagerService"] }
    ]; };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/params/manager/manager-edit/manager-edit.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/params/manager/manager-edit/manager-edit.component.ts ***!
  \***********************************************************************/
/*! exports provided: ManagerEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerEditComponent", function() { return ManagerEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _manager_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../manager.service */ "./src/app/params/manager/manager.service.ts");
/* harmony import */ var _manager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../manager */ "./src/app/params/manager/manager.ts");






var caster = __webpack_require__(/*! angular-crud/gs-cast */ "./node_modules/angular-crud/gs-cast/index.js");


var ManagerEditComponent = /** @class */ (function () {
    function ManagerEditComponent(route, router, managerService) {
        this.route = route;
        this.router = router;
        this.managerService = managerService;
        this.feedback = {};
    }
    ManagerEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this
            .route
            .params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (p) { return p.id; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (id) {
            if (id === 'new') {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _manager__WEBPACK_IMPORTED_MODULE_6__["Manager"]());
            }
            return _this.managerService.findById(id);
        }))
            .subscribe(function (manager) {
            _this.manager = manager;
            _this.feedback = {};
        }, function (err) {
            _this.feedback = { type: 'warning', message: 'Erreur lors du chargement' };
        });
    };
    ManagerEditComponent.prototype.save = function () {
        var _this = this;
        this.managerService.save(this.manager).subscribe(function (manager) {
            _this.manager = manager;
            _this.feedback = { type: 'success', message: 'Enregistrement effectué avec succès' };
            setTimeout(function () {
                _this.router.navigate(['/params/managers']);
            }, 1000);
        }, function (err) {
            _this.feedback = { type: 'warning', message: "Erreur lors de l'enregistrement  :" + err };
        });
    };
    ManagerEditComponent.prototype.cancel = function () {
        this.router.navigate(['/params/managers']);
    };
    ManagerEditComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _manager_service__WEBPACK_IMPORTED_MODULE_5__["ManagerService"] }
    ]; };
    ManagerEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manager-edit',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./manager-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/params/manager/manager-edit/manager-edit.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./manager-edit.scss */ "./src/app/params/manager/manager-edit/manager-edit.scss")).default]
        })
    ], ManagerEditComponent);
    return ManagerEditComponent;
}());



/***/ }),

/***/ "./src/app/params/manager/manager-edit/manager-edit.scss":
/*!***************************************************************!*\
  !*** ./src/app/params/manager/manager-edit/manager-edit.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcmFtcy9tYW5hZ2VyL21hbmFnZXItZWRpdC9tYW5hZ2VyLWVkaXQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/params/manager/manager-filter.ts":
/*!**************************************************!*\
  !*** ./src/app/params/manager/manager-filter.ts ***!
  \**************************************************/
/*! exports provided: ManagerFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerFilter", function() { return ManagerFilter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var ManagerFilter = /** @class */ (function () {
    function ManagerFilter() {
        this.name = '';
        this.status = '';
    }
    return ManagerFilter;
}());



/***/ }),

/***/ "./src/app/params/manager/manager-list/manager-list.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/params/manager/manager-list/manager-list.component.ts ***!
  \***********************************************************************/
/*! exports provided: ManagerListComponent, GsFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerListComponent", function() { return ManagerListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GsFilter", function() { return GsFilter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _manager_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../manager-filter */ "./src/app/params/manager/manager-filter.ts");
/* harmony import */ var _manager_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../manager.service */ "./src/app/params/manager/manager.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var caster = __webpack_require__(/*! angular-crud/gs-cast */ "./node_modules/angular-crud/gs-cast/index.js");
var ManagerListComponent = /** @class */ (function () {
    function ManagerListComponent(managerService) {
        this.managerService = managerService;
        this.filter = new _manager_filter__WEBPACK_IMPORTED_MODULE_2__["ManagerFilter"]();
        this.feedback = {};
        this.displayedColumns = ['_id', 'name', 'actions'];
        this.server_processing = false;
    }
    ManagerListComponent.prototype.initFilters = function () {
        this.nameFilter = new GsFilter();
        this.nameFilter.controls.val = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        this.statusFilter = new GsFilter();
        this.statusFilter.controls.val = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        this.filteredValues = {
            name: this.nameFilter.values,
            status: this.statusFilter.values,
        };
    };
    ManagerListComponent.prototype.applyFilter = function () {
        this.dataSource.filter = JSON.stringify(this.filteredValues);
    };
    ManagerListComponent.prototype.enableFiltering = function () {
        var _this = this;
        this.nameFilter.controls.val.valueChanges.subscribe(function (value) { _this.nameFilter.values.val = value; _this.applyFilter(); });
        this.statusFilter.controls.val.valueChanges.subscribe(function (value) { _this.statusFilter.values.val = value; _this.applyFilter(); });
        this.dataSource.filterPredicate =
            function (manager, filters) {
                var parsedFilters = JSON.parse(filters);
                var nameCheck = true;
                var statusCheck = true;
                if (parsedFilters.name.val) {
                    nameCheck = !manager.name ? false : manager.name.toLowerCase().includes(parsedFilters.name.val.toLowerCase());
                }
                if (parsedFilters.status.val != undefined && parsedFilters.status.val != null) {
                    statusCheck = (manager.status == null || manager.status == undefined) ? false : manager.status == parsedFilters.status.val;
                }
                return nameCheck && statusCheck && true;
            };
    };
    Object.defineProperty(ManagerListComponent.prototype, "managerList", {
        get: function () {
            return this.managerService.managerList;
        },
        enumerable: true,
        configurable: true
    });
    ManagerListComponent.prototype.ngOnInit = function () {
        this.initFilters();
    };
    ManagerListComponent.prototype.ngAfterViewInit = function () {
        this.search();
    };
    ManagerListComponent.prototype.search = function () {
        var _this = this;
        this.managerService.load(this.filter).then(function (data) {
            setTimeout(function () {
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this.managerService.managerList);
                _this.dataSource.sort = _this.sort;
                _this.dataSource.paginator = _this.paginator;
                _this.enableFiltering();
            }, 200);
        });
    };
    ManagerListComponent.prototype.select = function (selected) {
        this.selectedManager = selected;
    };
    ManagerListComponent.prototype.delete = function (manager) {
        var _this = this;
        if (confirm('Etes-vous sûr?')) {
            this.managerService.delete(manager).subscribe(function () {
                _this.feedback = { type: 'success', message: 'Suppression effectuée avec succès!' };
                setTimeout(function () {
                    _this.search();
                }, 1000);
            }, function (err) {
                _this.feedback = { type: 'warning', message: 'Erreur lors de la suppression.' };
            });
        }
    };
    ManagerListComponent.ctorParameters = function () { return [
        { type: _manager_service__WEBPACK_IMPORTED_MODULE_3__["ManagerService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], null)
    ], ManagerListComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"], null)
    ], ManagerListComponent.prototype, "sort", void 0);
    ManagerListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manager',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./manager-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/params/manager/manager-list/manager-list.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./manager-list.scss */ "./src/app/params/manager/manager-list/manager-list.scss")).default]
        })
    ], ManagerListComponent);
    return ManagerListComponent;
}());

var GsFilter = /** @class */ (function () {
    function GsFilter() {
        this.values = {
            min: undefined,
            max: undefined,
            val: undefined,
        };
        this.controls = {
            min: null,
            max: null,
            val: null,
        };
    }
    GsFilter.prototype.reset = function () {
        if (this.controls.min)
            this.controls.min.setValue(undefined);
        if (this.controls.max)
            this.controls.max.setValue(undefined);
        if (this.controls.val)
            this.controls.val.setValue(undefined);
    };
    return GsFilter;
}());



/***/ }),

/***/ "./src/app/params/manager/manager-list/manager-list.scss":
/*!***************************************************************!*\
  !*** ./src/app/params/manager/manager-list/manager-list.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcmFtcy9tYW5hZ2VyL21hbmFnZXItbGlzdC9tYW5hZ2VyLWxpc3Quc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/params/manager/manager.module.ts":
/*!**************************************************!*\
  !*** ./src/app/params/manager/manager.module.ts ***!
  \**************************************************/
/*! exports provided: ManagerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerModule", function() { return ManagerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _manager_list_manager_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./manager-list/manager-list.component */ "./src/app/params/manager/manager-list/manager-list.component.ts");
/* harmony import */ var _manager_edit_manager_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./manager-edit/manager-edit.component */ "./src/app/params/manager/manager-edit/manager-edit.component.ts");
/* harmony import */ var _manager_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./manager.service */ "./src/app/params/manager/manager.service.ts");
/* harmony import */ var _manager_routes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./manager.routes */ "./src/app/params/manager/manager.routes.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/params/manager/auth/auth.component.ts");















var ManagerModule = /** @class */ (function () {
    function ManagerModule() {
    }
    ManagerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatRadioModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(_manager_routes__WEBPACK_IMPORTED_MODULE_11__["MANAGER_ROUTES"])
            ],
            declarations: [
                _manager_list_manager_list_component__WEBPACK_IMPORTED_MODULE_8__["ManagerListComponent"],
                _manager_edit_manager_edit_component__WEBPACK_IMPORTED_MODULE_9__["ManagerEditComponent"],
                _auth_auth_component__WEBPACK_IMPORTED_MODULE_14__["AuthComponent"]
            ],
            providers: [_manager_service__WEBPACK_IMPORTED_MODULE_10__["ManagerService"],],
            bootstrap: [_auth_auth_component__WEBPACK_IMPORTED_MODULE_14__["AuthComponent"]],
            exports: [_auth_auth_component__WEBPACK_IMPORTED_MODULE_14__["AuthComponent"]]
        })
    ], ManagerModule);
    return ManagerModule;
}());



/***/ }),

/***/ "./src/app/params/manager/manager.routes.ts":
/*!**************************************************!*\
  !*** ./src/app/params/manager/manager.routes.ts ***!
  \**************************************************/
/*! exports provided: MANAGER_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MANAGER_ROUTES", function() { return MANAGER_ROUTES; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _manager_list_manager_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manager-list/manager-list.component */ "./src/app/params/manager/manager-list/manager-list.component.ts");
/* harmony import */ var _manager_edit_manager_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manager-edit/manager-edit.component */ "./src/app/params/manager/manager-edit/manager-edit.component.ts");



var MANAGER_ROUTES = [
    {
        path: 'params/managers',
        component: _manager_list_manager_list_component__WEBPACK_IMPORTED_MODULE_1__["ManagerListComponent"]
    },
    {
        path: 'params/managers/:id',
        component: _manager_edit_manager_edit_component__WEBPACK_IMPORTED_MODULE_2__["ManagerEditComponent"]
    }
];


/***/ }),

/***/ "./src/app/params/manager/manager.service.ts":
/*!***************************************************!*\
  !*** ./src/app/params/manager/manager.service.ts ***!
  \***************************************************/
/*! exports provided: ManagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerService", function() { return ManagerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _configuration_configuration_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../configuration/configuration.service */ "./src/app/configuration/configuration.service.ts");





var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Accept', 'application/json');

var ManagerService = /** @class */ (function () {
    function ManagerService(http, configurationService) {
        this.http = http;
        this.configurationService = configurationService;
        this.managerList = [];
        this.api = '';
        this.api = this.configurationService.environment.main_api + '/management/manager';
        console.log(this.api);
    }
    ManagerService.prototype.findByCredentials = function (name, password) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var url = this.api + "/auth";
        var body = { name: name, password: crypto_js__WEBPACK_IMPORTED_MODULE_4__["AES"].encrypt(password, src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].encrypt_key).toString(), key: src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].encrypt_key };
        return this.http.post(url, body, { params: params, headers: headers });
    };
    ManagerService.prototype.findById = function (id) {
        var url = this.api + "/" + id;
        var params = { _id: id };
        return this.http.get(url, { params: params, headers: headers });
    };
    ManagerService.prototype.load = function (filter) {
        var p = this;
        return new Promise(function (resolve, reject) {
            p.find(filter).subscribe(function (result) {
                p.managerList = result;
                resolve(true);
            }, function (err) {
                reject(err);
                console.error('error loading', err);
            });
        });
    };
    ManagerService.prototype.find = function (filter) {
        var params = {
            'name': filter.name,
            'status': filter.status,
        };
        return this.http.get(this.api, { params: params, headers: headers });
    };
    ManagerService.prototype.save = function (entity) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var url = '';
        //Cryptage de mot de passe
        entity.password = crypto_js__WEBPACK_IMPORTED_MODULE_4__["AES"].encrypt(entity.password, src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].encrypt_key).toString();
        if (entity._id) {
            url = this.api + "/" + entity._id.toString();
            params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('ID', entity._id.toString());
            return this.http.put(url, entity, { headers: headers, params: params });
        }
        else {
            url = "" + this.api;
            return this.http.post(url, entity, { headers: headers, params: params });
        }
    };
    ManagerService.prototype.delete = function (entity) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var url = '';
        if (entity._id) {
            url = this.api + "/" + entity._id.toString();
            params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('ID', entity._id.toString());
            return this.http.delete(url, { headers: headers, params: params });
        }
        return null;
    };
    ManagerService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _configuration_configuration_service__WEBPACK_IMPORTED_MODULE_5__["ConfigurationService"] }
    ]; };
    ManagerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        })
    ], ManagerService);
    return ManagerService;
}());



/***/ }),

/***/ "./src/app/params/manager/manager.ts":
/*!*******************************************!*\
  !*** ./src/app/params/manager/manager.ts ***!
  \*******************************************/
/*! exports provided: Manager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Manager", function() { return Manager; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var Manager = /** @class */ (function () {
    function Manager() {
    }
    Object.defineProperty(Manager.prototype, "display", {
        get: function () {
            return "manager_display"; // Remplacer avec la chaine que vous souhaitez afficher
        },
        enumerable: true,
        configurable: true
    });
    return Manager;
}());



/***/ }),

/***/ "./src/app/partners/customer/customer-edit/customer-edit.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/partners/customer/customer-edit/customer-edit.component.ts ***!
  \****************************************************************************/
/*! exports provided: CustomerEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerEditComponent", function() { return CustomerEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _customer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../customer.service */ "./src/app/partners/customer/customer.service.ts");
/* harmony import */ var _customer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../customer */ "./src/app/partners/customer/customer.ts");






var caster = __webpack_require__(/*! angular-crud/gs-cast */ "./node_modules/angular-crud/gs-cast/index.js");


var CustomerEditComponent = /** @class */ (function () {
    function CustomerEditComponent(route, router, customerService) {
        this.route = route;
        this.router = router;
        this.customerService = customerService;
        this.feedback = {};
    }
    CustomerEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this
            .route
            .params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (p) { return p.id; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (id) {
            if (id === 'new') {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _customer__WEBPACK_IMPORTED_MODULE_6__["Customer"]());
            }
            return _this.customerService.findById(id);
        }))
            .subscribe(function (customer) {
            _this.customer = customer;
            _this.feedback = {};
        }, function (err) {
            _this.feedback = { type: 'warning', message: 'Erreur lors du chargement' };
        });
    };
    CustomerEditComponent.prototype.save = function () {
        var _this = this;
        this.customerService.save(this.customer).subscribe(function (customer) {
            _this.customer = customer;
            _this.feedback = { type: 'success', message: 'Enregistrement effectué avec succès' };
            setTimeout(function () {
                _this.router.navigate(['/partners/customers']);
            }, 1000);
        }, function (err) {
            _this.feedback = { type: 'warning', message: "Erreur lors de l'enregistrement" };
        });
    };
    CustomerEditComponent.prototype.cancel = function () {
        this.router.navigate(['/partners/customers']);
    };
    CustomerEditComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _customer_service__WEBPACK_IMPORTED_MODULE_5__["CustomerService"] }
    ]; };
    CustomerEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer-edit',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./customer-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/partners/customer/customer-edit/customer-edit.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./customer-edit.scss */ "./src/app/partners/customer/customer-edit/customer-edit.scss")).default]
        })
    ], CustomerEditComponent);
    return CustomerEditComponent;
}());



/***/ }),

/***/ "./src/app/partners/customer/customer-edit/customer-edit.scss":
/*!********************************************************************!*\
  !*** ./src/app/partners/customer/customer-edit/customer-edit.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcnRuZXJzL2N1c3RvbWVyL2N1c3RvbWVyLWVkaXQvY3VzdG9tZXItZWRpdC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/partners/customer/customer-filter.ts":
/*!******************************************************!*\
  !*** ./src/app/partners/customer/customer-filter.ts ***!
  \******************************************************/
/*! exports provided: CustomerFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerFilter", function() { return CustomerFilter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var CustomerFilter = /** @class */ (function () {
    function CustomerFilter(value) {
        this.name = '';
        this.status = '';
        if (value)
            this.name = value;
    }
    return CustomerFilter;
}());



/***/ }),

/***/ "./src/app/partners/customer/customer-list/customer-list.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/partners/customer/customer-list/customer-list.component.ts ***!
  \****************************************************************************/
/*! exports provided: CustomerListComponent, GsFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerListComponent", function() { return CustomerListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GsFilter", function() { return GsFilter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _customer_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../customer-filter */ "./src/app/partners/customer/customer-filter.ts");
/* harmony import */ var _customer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../customer.service */ "./src/app/partners/customer/customer.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var CustomerListComponent = /** @class */ (function () {
    function CustomerListComponent(customerService) {
        this.customerService = customerService;
        this.filter = new _customer_filter__WEBPACK_IMPORTED_MODULE_2__["CustomerFilter"](null);
        this.feedback = {};
        this.displayedColumns = ['_id', 'name', 'actions'];
        this.server_processing = false;
    }
    CustomerListComponent.prototype.initFilters = function () {
        this.nameFilter = new GsFilter();
        this.nameFilter.controls.val = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        this.statusFilter = new GsFilter();
        this.statusFilter.controls.val = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        this.filteredValues = { name: this.nameFilter.values, status: this.statusFilter.values, };
    };
    CustomerListComponent.prototype.applyFilter = function () {
        this.dataSource.filter = JSON.stringify(this.filteredValues);
    };
    CustomerListComponent.prototype.enableFiltering = function () {
        var _this = this;
        this.nameFilter.controls.val.valueChanges.subscribe(function (value) { _this.nameFilter.values.val = value; _this.applyFilter(); });
        this.statusFilter.controls.val.valueChanges.subscribe(function (value) { _this.statusFilter.values.val = value; _this.applyFilter(); });
        this.dataSource.filterPredicate =
            function (customer, filters) {
                var parsedFilters = JSON.parse(filters);
                var nameCheck = true;
                var statusCheck = true;
                if (parsedFilters.name.val) {
                    nameCheck = !customer.name ? false : customer.name.toLowerCase().includes(parsedFilters.name.val.toLowerCase());
                }
                if (parsedFilters.status.val != undefined && parsedFilters.status.val != null) {
                    statusCheck = (customer.status == null || customer.status == undefined) ? false : customer.status == parsedFilters.status.val;
                }
                return nameCheck && statusCheck && true;
            };
    };
    Object.defineProperty(CustomerListComponent.prototype, "customerList", {
        get: function () {
            return this.customerService.customerList;
        },
        enumerable: true,
        configurable: true
    });
    CustomerListComponent.prototype.ngOnInit = function () {
        this.initFilters();
    };
    CustomerListComponent.prototype.ngAfterViewInit = function () {
        this.search();
    };
    CustomerListComponent.prototype.search = function () {
        var _this = this;
        this.customerService.load(this.filter).then(function (data) {
            setTimeout(function () {
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this.customerService.customerList);
                _this.dataSource.sort = _this.sort;
                _this.dataSource.paginator = _this.paginator;
                _this.enableFiltering();
            }, 200);
        });
    };
    CustomerListComponent.prototype.select = function (selected) {
        this.selectedCustomer = selected;
    };
    CustomerListComponent.prototype.delete = function (customer) {
        var _this = this;
        if (confirm('Etes-vous sûr?')) {
            this.customerService.delete(customer).subscribe(function () {
                _this.feedback = { type: 'success', message: 'Suppression effectuée avec succès!' };
                setTimeout(function () {
                    _this.search();
                }, 1000);
            }, function (err) {
                _this.feedback = { type: 'warning', message: 'Erreur lors de la suppression.' };
            });
        }
    };
    CustomerListComponent.ctorParameters = function () { return [
        { type: _customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], null)
    ], CustomerListComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"], null)
    ], CustomerListComponent.prototype, "sort", void 0);
    CustomerListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./customer-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/partners/customer/customer-list/customer-list.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./customer-list.scss */ "./src/app/partners/customer/customer-list/customer-list.scss")).default]
        })
    ], CustomerListComponent);
    return CustomerListComponent;
}());

var GsFilter = /** @class */ (function () {
    function GsFilter() {
        this.values = {
            min: undefined,
            max: undefined,
            val: undefined,
        };
        this.controls = {
            min: null,
            max: null,
            val: null,
        };
    }
    GsFilter.prototype.reset = function () {
        if (this.controls.min) {
            this.controls.min.setValue(undefined);
        }
        if (this.controls.max) {
            this.controls.max.setValue(undefined);
        }
        if (this.controls.val) {
            this.controls.val.setValue(undefined);
        }
    };
    return GsFilter;
}());



/***/ }),

/***/ "./src/app/partners/customer/customer-list/customer-list.scss":
/*!********************************************************************!*\
  !*** ./src/app/partners/customer/customer-list/customer-list.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcnRuZXJzL2N1c3RvbWVyL2N1c3RvbWVyLWxpc3QvY3VzdG9tZXItbGlzdC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/partners/customer/customer.module.ts":
/*!******************************************************!*\
  !*** ./src/app/partners/customer/customer.module.ts ***!
  \******************************************************/
/*! exports provided: CustomerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerModule", function() { return CustomerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./customer-list/customer-list.component */ "./src/app/partners/customer/customer-list/customer-list.component.ts");
/* harmony import */ var _customer_edit_customer_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./customer-edit/customer-edit.component */ "./src/app/partners/customer/customer-edit/customer-edit.component.ts");
/* harmony import */ var _customer_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./customer.service */ "./src/app/partners/customer/customer.service.ts");
/* harmony import */ var _customer_routes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./customer.routes */ "./src/app/partners/customer/customer.routes.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");














var CustomerModule = /** @class */ (function () {
    function CustomerModule() {
    }
    CustomerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatRadioModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(_customer_routes__WEBPACK_IMPORTED_MODULE_11__["CUSTOMER_ROUTES"])
            ],
            declarations: [
                _customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_8__["CustomerListComponent"],
                _customer_edit_customer_edit_component__WEBPACK_IMPORTED_MODULE_9__["CustomerEditComponent"]
            ],
            providers: [_customer_service__WEBPACK_IMPORTED_MODULE_10__["CustomerService"]],
            exports: []
        })
    ], CustomerModule);
    return CustomerModule;
}());



/***/ }),

/***/ "./src/app/partners/customer/customer.routes.ts":
/*!******************************************************!*\
  !*** ./src/app/partners/customer/customer.routes.ts ***!
  \******************************************************/
/*! exports provided: CUSTOMER_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CUSTOMER_ROUTES", function() { return CUSTOMER_ROUTES; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer-list/customer-list.component */ "./src/app/partners/customer/customer-list/customer-list.component.ts");
/* harmony import */ var _customer_edit_customer_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer-edit/customer-edit.component */ "./src/app/partners/customer/customer-edit/customer-edit.component.ts");



var CUSTOMER_ROUTES = [
    {
        path: 'partners/customers',
        component: _customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_1__["CustomerListComponent"]
    },
    {
        path: 'partners/customers/:id',
        component: _customer_edit_customer_edit_component__WEBPACK_IMPORTED_MODULE_2__["CustomerEditComponent"]
    }
];


/***/ }),

/***/ "./src/app/partners/customer/customer.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/partners/customer/customer.service.ts ***!
  \*******************************************************/
/*! exports provided: CustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function() { return CustomerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _configuration_configuration_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../configuration/configuration.service */ "./src/app/configuration/configuration.service.ts");



var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Accept', 'application/json');

var CustomerService = /** @class */ (function () {
    function CustomerService(http, configurationService) {
        this.http = http;
        this.configurationService = configurationService;
        this.customerList = [];
        this.api = '';
        this.api = this.configurationService.environment.main_api + '/partners/customer';
        console.log(this.configurationService.environment);
    }
    CustomerService.prototype.findById = function (id) {
        var url = this.api + "/" + id;
        var params = { _id: id };
        return this.http.get(url, { params: params, headers: headers });
    };
    CustomerService.prototype.load = function (filter) {
        var p = this;
        return new Promise(function (resolve, reject) {
            p.find(filter).subscribe(function (result) {
                p.customerList = result;
                resolve(true);
            }, function (err) {
                reject(err);
                console.error('error loading', err);
            });
        });
    };
    CustomerService.prototype.find = function (filter) {
        var params = {
            'name': filter.name,
            'status': filter.status,
        };
        return this.http.get(this.api, { params: params, headers: headers });
    };
    CustomerService.prototype.save = function (entity) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var url = '';
        if (entity._id) {
            url = this.api + "/" + entity._id.toString();
            params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('ID', entity._id.toString());
            return this.http.put(url, entity, { headers: headers, params: params });
        }
        else {
            url = "" + this.api;
            return this.http.post(url, entity, { headers: headers, params: params });
        }
    };
    CustomerService.prototype.delete = function (entity) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var url = '';
        if (entity._id) {
            url = this.api + "/" + entity._id.toString();
            params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('ID', entity._id.toString());
            return this.http.delete(url, { headers: headers, params: params });
        }
        return null;
    };
    CustomerService.prototype.count = function () {
        var url = this.api + "/stats/count";
        return this.http.get(url, { headers: headers });
    };
    CustomerService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _configuration_configuration_service__WEBPACK_IMPORTED_MODULE_3__["ConfigurationService"] }
    ]; };
    CustomerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], CustomerService);
    return CustomerService;
}());



/***/ }),

/***/ "./src/app/partners/customer/customer.ts":
/*!***********************************************!*\
  !*** ./src/app/partners/customer/customer.ts ***!
  \***********************************************/
/*! exports provided: Customer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Customer", function() { return Customer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var Customer = /** @class */ (function () {
    function Customer() {
    }
    Object.defineProperty(Customer.prototype, "display", {
        get: function () {
            return "customer_display"; // Remplacer avec la chaine que vous souhaitez afficher
        },
        enumerable: true,
        configurable: true
    });
    return Customer;
}());



/***/ }),

/***/ "./src/app/partners/provider/provider-edit/provider-edit.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/partners/provider/provider-edit/provider-edit.component.ts ***!
  \****************************************************************************/
/*! exports provided: ProviderEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderEditComponent", function() { return ProviderEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _provider_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../provider.service */ "./src/app/partners/provider/provider.service.ts");
/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../provider */ "./src/app/partners/provider/provider.ts");






var caster = __webpack_require__(/*! angular-crud/gs-cast */ "./node_modules/angular-crud/gs-cast/index.js");


var ProviderEditComponent = /** @class */ (function () {
    function ProviderEditComponent(route, router, providerService) {
        this.route = route;
        this.router = router;
        this.providerService = providerService;
        this.feedback = {};
    }
    ProviderEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this
            .route
            .params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (p) { return p.id; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (id) {
            if (id === 'new') {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _provider__WEBPACK_IMPORTED_MODULE_6__["Provider"]());
            }
            return _this.providerService.findById(id);
        }))
            .subscribe(function (provider) {
            _this.provider = provider;
            _this.feedback = {};
        }, function (err) {
            _this.feedback = { type: 'warning', message: 'Erreur lors du chargement' };
        });
    };
    ProviderEditComponent.prototype.save = function () {
        var _this = this;
        this.providerService.save(this.provider).subscribe(function (provider) {
            _this.provider = provider;
            _this.feedback = { type: 'success', message: 'Enregistrement effectué avec succès' };
            setTimeout(function () {
                _this.router.navigate(['/partners/providers']);
            }, 1000);
        }, function (err) {
            _this.feedback = { type: 'warning', message: "Erreur lors de l'enregistrement" };
        });
    };
    ProviderEditComponent.prototype.cancel = function () {
        this.router.navigate(['/partners/providers']);
    };
    ProviderEditComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _provider_service__WEBPACK_IMPORTED_MODULE_5__["ProviderService"] }
    ]; };
    ProviderEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-provider-edit',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./provider-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/partners/provider/provider-edit/provider-edit.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./provider-edit.scss */ "./src/app/partners/provider/provider-edit/provider-edit.scss")).default]
        })
    ], ProviderEditComponent);
    return ProviderEditComponent;
}());



/***/ }),

/***/ "./src/app/partners/provider/provider-edit/provider-edit.scss":
/*!********************************************************************!*\
  !*** ./src/app/partners/provider/provider-edit/provider-edit.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcnRuZXJzL3Byb3ZpZGVyL3Byb3ZpZGVyLWVkaXQvcHJvdmlkZXItZWRpdC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/partners/provider/provider-filter.ts":
/*!******************************************************!*\
  !*** ./src/app/partners/provider/provider-filter.ts ***!
  \******************************************************/
/*! exports provided: ProviderFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderFilter", function() { return ProviderFilter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var ProviderFilter = /** @class */ (function () {
    function ProviderFilter(value) {
        this.name = '';
        this.status = '';
        if (!value)
            return;
        this.name = value;
    }
    return ProviderFilter;
}());



/***/ }),

/***/ "./src/app/partners/provider/provider-list/provider-list.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/partners/provider/provider-list/provider-list.component.ts ***!
  \****************************************************************************/
/*! exports provided: ProviderListComponent, GsFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderListComponent", function() { return ProviderListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GsFilter", function() { return GsFilter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _provider_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../provider-filter */ "./src/app/partners/provider/provider-filter.ts");
/* harmony import */ var _provider_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../provider.service */ "./src/app/partners/provider/provider.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var ProviderListComponent = /** @class */ (function () {
    function ProviderListComponent(providerService) {
        this.providerService = providerService;
        this.filter = new _provider_filter__WEBPACK_IMPORTED_MODULE_2__["ProviderFilter"](null);
        this.feedback = {};
        this.displayedColumns = ['_id', 'name', 'actions'];
        this.server_processing = false;
    }
    ProviderListComponent.prototype.initFilters = function () {
        this.nameFilter = new GsFilter();
        this.nameFilter.controls.val = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        this.statusFilter = new GsFilter();
        this.statusFilter.controls.val = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        this.filteredValues = { name: this.nameFilter.values, status: this.statusFilter.values, };
    };
    ProviderListComponent.prototype.applyFilter = function () {
        this.dataSource.filter = JSON.stringify(this.filteredValues);
    };
    ProviderListComponent.prototype.enableFiltering = function () {
        var _this = this;
        this.nameFilter.controls.val.valueChanges.subscribe(function (value) { _this.nameFilter.values.val = value; _this.applyFilter(); });
        this.statusFilter.controls.val.valueChanges.subscribe(function (value) { _this.statusFilter.values.val = value; _this.applyFilter(); });
        this.dataSource.filterPredicate =
            function (provider, filters) {
                var parsedFilters = JSON.parse(filters);
                var nameCheck = true;
                var statusCheck = true;
                if (parsedFilters.name.val) {
                    nameCheck = !provider.name ? false : provider.name.toLowerCase().includes(parsedFilters.name.val.toLowerCase());
                }
                if (parsedFilters.status.val != undefined && parsedFilters.status.val != null) {
                    statusCheck = (provider.status == null || provider.status == undefined) ? false : provider.status == parsedFilters.status.val;
                }
                return nameCheck && statusCheck && true;
            };
    };
    Object.defineProperty(ProviderListComponent.prototype, "providerList", {
        get: function () {
            return this.providerService.providerList;
        },
        enumerable: true,
        configurable: true
    });
    ProviderListComponent.prototype.ngOnInit = function () {
        this.initFilters();
    };
    ProviderListComponent.prototype.ngAfterViewInit = function () {
        this.search();
    };
    ProviderListComponent.prototype.search = function () {
        var _this = this;
        this.providerService.load(this.filter).then(function (data) {
            setTimeout(function () {
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this.providerService.providerList);
                _this.dataSource.sort = _this.sort;
                _this.dataSource.paginator = _this.paginator;
                _this.enableFiltering();
            }, 200);
        });
    };
    ProviderListComponent.prototype.select = function (selected) {
        this.selectedProvider = selected;
    };
    ProviderListComponent.prototype.delete = function (provider) {
        var _this = this;
        if (confirm('Etes-vous sûr?')) {
            this.providerService.delete(provider).subscribe(function () {
                _this.feedback = { type: 'success', message: 'Suppression effectuée avec succès!' };
                setTimeout(function () {
                    _this.search();
                }, 1000);
            }, function (err) {
                _this.feedback = { type: 'warning', message: 'Erreur lors de la suppression.' };
            });
        }
    };
    ProviderListComponent.ctorParameters = function () { return [
        { type: _provider_service__WEBPACK_IMPORTED_MODULE_3__["ProviderService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], null)
    ], ProviderListComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"], null)
    ], ProviderListComponent.prototype, "sort", void 0);
    ProviderListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-provider',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./provider-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/partners/provider/provider-list/provider-list.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./provider-list.scss */ "./src/app/partners/provider/provider-list/provider-list.scss")).default]
        })
    ], ProviderListComponent);
    return ProviderListComponent;
}());

var GsFilter = /** @class */ (function () {
    function GsFilter() {
        this.values = {
            min: undefined,
            max: undefined,
            val: undefined,
        };
        this.controls = {
            min: null,
            max: null,
            val: null,
        };
    }
    GsFilter.prototype.reset = function () {
        if (this.controls.min)
            this.controls.min.setValue(undefined);
        if (this.controls.max)
            this.controls.max.setValue(undefined);
        if (this.controls.val)
            this.controls.val.setValue(undefined);
    };
    return GsFilter;
}());



/***/ }),

/***/ "./src/app/partners/provider/provider-list/provider-list.scss":
/*!********************************************************************!*\
  !*** ./src/app/partners/provider/provider-list/provider-list.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcnRuZXJzL3Byb3ZpZGVyL3Byb3ZpZGVyLWxpc3QvcHJvdmlkZXItbGlzdC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/partners/provider/provider.module.ts":
/*!******************************************************!*\
  !*** ./src/app/partners/provider/provider.module.ts ***!
  \******************************************************/
/*! exports provided: ProviderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderModule", function() { return ProviderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _provider_list_provider_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./provider-list/provider-list.component */ "./src/app/partners/provider/provider-list/provider-list.component.ts");
/* harmony import */ var _provider_edit_provider_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./provider-edit/provider-edit.component */ "./src/app/partners/provider/provider-edit/provider-edit.component.ts");
/* harmony import */ var _provider_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./provider.service */ "./src/app/partners/provider/provider.service.ts");
/* harmony import */ var _provider_routes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./provider.routes */ "./src/app/partners/provider/provider.routes.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");














var ProviderModule = /** @class */ (function () {
    function ProviderModule() {
    }
    ProviderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatRadioModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(_provider_routes__WEBPACK_IMPORTED_MODULE_11__["PROVIDER_ROUTES"])
            ],
            declarations: [
                _provider_list_provider_list_component__WEBPACK_IMPORTED_MODULE_8__["ProviderListComponent"],
                _provider_edit_provider_edit_component__WEBPACK_IMPORTED_MODULE_9__["ProviderEditComponent"]
            ],
            providers: [_provider_service__WEBPACK_IMPORTED_MODULE_10__["ProviderService"]],
            exports: []
        })
    ], ProviderModule);
    return ProviderModule;
}());



/***/ }),

/***/ "./src/app/partners/provider/provider.routes.ts":
/*!******************************************************!*\
  !*** ./src/app/partners/provider/provider.routes.ts ***!
  \******************************************************/
/*! exports provided: PROVIDER_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROVIDER_ROUTES", function() { return PROVIDER_ROUTES; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _provider_list_provider_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./provider-list/provider-list.component */ "./src/app/partners/provider/provider-list/provider-list.component.ts");
/* harmony import */ var _provider_edit_provider_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./provider-edit/provider-edit.component */ "./src/app/partners/provider/provider-edit/provider-edit.component.ts");



var PROVIDER_ROUTES = [
    {
        path: 'partners/providers',
        component: _provider_list_provider_list_component__WEBPACK_IMPORTED_MODULE_1__["ProviderListComponent"]
    },
    {
        path: 'partners/providers/:id',
        component: _provider_edit_provider_edit_component__WEBPACK_IMPORTED_MODULE_2__["ProviderEditComponent"]
    }
];


/***/ }),

/***/ "./src/app/partners/provider/provider.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/partners/provider/provider.service.ts ***!
  \*******************************************************/
/*! exports provided: ProviderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderService", function() { return ProviderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _configuration_configuration_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../configuration/configuration.service */ "./src/app/configuration/configuration.service.ts");



var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Accept', 'application/json');

var ProviderService = /** @class */ (function () {
    function ProviderService(http, configurationService) {
        this.http = http;
        this.configurationService = configurationService;
        this.providerList = [];
        this.api = '';
        this.api = this.configurationService.environment.main_api + '/partners/provider';
        console.log(this.configurationService.environment);
    }
    ProviderService.prototype.findById = function (id) {
        var url = this.api + "/" + id;
        var params = { _id: id };
        return this.http.get(url, { params: params, headers: headers });
    };
    ProviderService.prototype.load = function (filter) {
        var p = this;
        return new Promise(function (resolve, reject) {
            p.find(filter).subscribe(function (result) {
                p.providerList = result;
                resolve(true);
            }, function (err) {
                reject(err);
                console.error('error loading', err);
            });
        });
    };
    ProviderService.prototype.find = function (filter) {
        var params = {
            'name': filter.name,
            'status': filter.status,
        };
        return this.http.get(this.api, { params: params, headers: headers });
    };
    ProviderService.prototype.save = function (entity) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var url = '';
        if (entity._id) {
            url = this.api + "/" + entity._id.toString();
            params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('ID', entity._id.toString());
            return this.http.put(url, entity, { headers: headers, params: params });
        }
        else {
            url = "" + this.api;
            return this.http.post(url, entity, { headers: headers, params: params });
        }
    };
    ProviderService.prototype.delete = function (entity) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var url = '';
        if (entity._id) {
            url = this.api + "/" + entity._id.toString();
            params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('ID', entity._id.toString());
            return this.http.delete(url, { headers: headers, params: params });
        }
        return null;
    };
    ProviderService.prototype.count = function () {
        var url = this.api + "/stats/count";
        return this.http.get(url, { headers: headers });
    };
    ProviderService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _configuration_configuration_service__WEBPACK_IMPORTED_MODULE_3__["ConfigurationService"] }
    ]; };
    ProviderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ProviderService);
    return ProviderService;
}());



/***/ }),

/***/ "./src/app/partners/provider/provider.ts":
/*!***********************************************!*\
  !*** ./src/app/partners/provider/provider.ts ***!
  \***********************************************/
/*! exports provided: Provider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return Provider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var Provider = /** @class */ (function () {
    function Provider() {
    }
    Object.defineProperty(Provider.prototype, "display", {
        get: function () {
            return "provider_display"; // Remplacer avec la chaine que vous souhaitez afficher
        },
        enumerable: true,
        configurable: true
    });
    return Provider;
}());



/***/ }),

/***/ "./src/app/stock/category/category-edit/category-edit.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/stock/category/category-edit/category-edit.component.ts ***!
  \*************************************************************************/
/*! exports provided: CategoryEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryEditComponent", function() { return CategoryEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _category_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../category.service */ "./src/app/stock/category/category.service.ts");
/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../category */ "./src/app/stock/category/category.ts");






var caster = __webpack_require__(/*! angular-crud/gs-cast */ "./node_modules/angular-crud/gs-cast/index.js");


var CategoryEditComponent = /** @class */ (function () {
    function CategoryEditComponent(route, router, categoryService) {
        this.route = route;
        this.router = router;
        this.categoryService = categoryService;
        this.feedback = {};
    }
    CategoryEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this
            .route
            .params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (p) { return p.id; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (id) {
            if (id === 'new') {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _category__WEBPACK_IMPORTED_MODULE_6__["Category"]());
            }
            return _this.categoryService.findById(id);
        }))
            .subscribe(function (category) {
            _this.category = category;
            _this.feedback = {};
        }, function (err) {
            _this.feedback = { type: 'warning', message: 'Erreur lors du chargement ' };
        });
    };
    CategoryEditComponent.prototype.save = function () {
        var _this = this;
        this.categoryService.save(this.category).subscribe(function (category) {
            _this.category = category;
            _this.feedback = { type: 'success', message: 'Enregistrement effectué avec succès' };
            setTimeout(function () {
                _this.router.navigate(['/stock/categories']);
            }, 1000);
        }, function (err) {
            _this.feedback = { type: 'warning', message: "Erreur lors de l'enregistrement : " + err.message };
        });
    };
    CategoryEditComponent.prototype.cancel = function () {
        this.router.navigate(['/stock/categories']);
    };
    CategoryEditComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _category_service__WEBPACK_IMPORTED_MODULE_5__["CategoryService"] }
    ]; };
    CategoryEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-category-edit',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./category-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/stock/category/category-edit/category-edit.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./category-edit.scss */ "./src/app/stock/category/category-edit/category-edit.scss")).default]
        })
    ], CategoryEditComponent);
    return CategoryEditComponent;
}());



/***/ }),

/***/ "./src/app/stock/category/category-edit/category-edit.scss":
/*!*****************************************************************!*\
  !*** ./src/app/stock/category/category-edit/category-edit.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0b2NrL2NhdGVnb3J5L2NhdGVnb3J5LWVkaXQvY2F0ZWdvcnktZWRpdC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/stock/category/category-filter.ts":
/*!***************************************************!*\
  !*** ./src/app/stock/category/category-filter.ts ***!
  \***************************************************/
/*! exports provided: CategoryFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryFilter", function() { return CategoryFilter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var CategoryFilter = /** @class */ (function () {
    function CategoryFilter(value) {
        this.name = '';
        this.description = '';
        this.status = '';
        if (!value)
            return;
        this.name = value;
        this.description = value;
    }
    return CategoryFilter;
}());



/***/ }),

/***/ "./src/app/stock/category/category-list/category-list.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/stock/category/category-list/category-list.component.ts ***!
  \*************************************************************************/
/*! exports provided: CategoryListComponent, GsFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryListComponent", function() { return CategoryListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GsFilter", function() { return GsFilter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _category_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../category-filter */ "./src/app/stock/category/category-filter.ts");
/* harmony import */ var _category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../category.service */ "./src/app/stock/category/category.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var CategoryListComponent = /** @class */ (function () {
    function CategoryListComponent(categoryService) {
        this.categoryService = categoryService;
        this.filter = new _category_filter__WEBPACK_IMPORTED_MODULE_2__["CategoryFilter"](null);
        this.feedback = {};
        this.displayedColumns = ['_id', 'name', 'description', 'actions'];
        this.server_processing = false;
    }
    CategoryListComponent.prototype.initFilters = function () {
        this.nameFilter = new GsFilter();
        this.nameFilter.controls.val = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        this.descriptionFilter = new GsFilter();
        this.descriptionFilter.controls.val = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        this.statusFilter = new GsFilter();
        this.statusFilter.controls.val = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        this.filteredValues = { name: this.nameFilter.values, description: this.descriptionFilter.values, status: this.statusFilter.values, };
    };
    CategoryListComponent.prototype.applyFilter = function () {
        this.dataSource.filter = JSON.stringify(this.filteredValues);
    };
    CategoryListComponent.prototype.enableFiltering = function () {
        var _this = this;
        this.nameFilter.controls.val.valueChanges.subscribe(function (value) { _this.nameFilter.values.val = value; _this.applyFilter(); });
        this.descriptionFilter.controls.val.valueChanges.subscribe(function (value) { _this.descriptionFilter.values.val = value; _this.applyFilter(); });
        this.statusFilter.controls.val.valueChanges.subscribe(function (value) { _this.statusFilter.values.val = value; _this.applyFilter(); });
        this.dataSource.filterPredicate =
            function (category, filters) {
                var parsedFilters = JSON.parse(filters);
                var nameCheck = true;
                var descriptionCheck = true;
                var statusCheck = true;
                if (parsedFilters.name.val) {
                    nameCheck = !category.name ? false : category.name.toLowerCase().includes(parsedFilters.name.val.toLowerCase());
                }
                if (parsedFilters.description.val) {
                    descriptionCheck = !category.name ? false : category.description.toLowerCase().includes(parsedFilters.description.val.toLowerCase());
                }
                if (parsedFilters.status.val) {
                    statusCheck = !category.status ? false : category.status == parsedFilters.status.val;
                }
                return nameCheck && descriptionCheck && statusCheck && true;
            };
    };
    Object.defineProperty(CategoryListComponent.prototype, "categoryList", {
        get: function () {
            return this.categoryService.categoryList;
        },
        enumerable: true,
        configurable: true
    });
    CategoryListComponent.prototype.ngOnInit = function () {
        this.initFilters();
    };
    CategoryListComponent.prototype.ngAfterViewInit = function () {
        this.search();
    };
    CategoryListComponent.prototype.search = function () {
        var _this = this;
        this.categoryService.load(this.filter).then(function (data) {
            setTimeout(function () {
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this.categoryService.categoryList);
                _this.dataSource.sort = _this.sort;
                _this.dataSource.paginator = _this.paginator;
                _this.enableFiltering();
            }, 200);
        });
    };
    CategoryListComponent.prototype.select = function (selected) {
        this.selectedCategory = selected;
    };
    CategoryListComponent.prototype.delete = function (category) {
        var _this = this;
        if (confirm('Etes-vous sûr?')) {
            this.categoryService.delete(category).subscribe(function () {
                _this.feedback = { type: 'success', message: 'Suppression effectuée avec succès!' };
                setTimeout(function () {
                    _this.search();
                }, 1000);
            }, function (err) {
                _this.feedback = { type: 'warning', message: 'Erreur lors de la suppression.' };
            });
        }
    };
    CategoryListComponent.ctorParameters = function () { return [
        { type: _category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], null)
    ], CategoryListComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"], null)
    ], CategoryListComponent.prototype, "sort", void 0);
    CategoryListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-category',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./category-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/stock/category/category-list/category-list.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./category-list.scss */ "./src/app/stock/category/category-list/category-list.scss")).default]
        })
    ], CategoryListComponent);
    return CategoryListComponent;
}());

var GsFilter = /** @class */ (function () {
    function GsFilter() {
        this.values = {
            min: undefined,
            max: undefined,
            val: undefined,
        };
        this.controls = {
            min: null,
            max: null,
            val: null,
        };
    }
    GsFilter.prototype.reset = function () {
        if (this.controls.min)
            this.controls.min.setValue(undefined);
        if (this.controls.max)
            this.controls.max.setValue(undefined);
        if (this.controls.val)
            this.controls.val.setValue(undefined);
    };
    return GsFilter;
}());



/***/ }),

/***/ "./src/app/stock/category/category-list/category-list.scss":
/*!*****************************************************************!*\
  !*** ./src/app/stock/category/category-list/category-list.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0b2NrL2NhdGVnb3J5L2NhdGVnb3J5LWxpc3QvY2F0ZWdvcnktbGlzdC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/stock/category/category.module.ts":
/*!***************************************************!*\
  !*** ./src/app/stock/category/category.module.ts ***!
  \***************************************************/
/*! exports provided: CategoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryModule", function() { return CategoryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _category_list_category_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./category-list/category-list.component */ "./src/app/stock/category/category-list/category-list.component.ts");
/* harmony import */ var _category_edit_category_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./category-edit/category-edit.component */ "./src/app/stock/category/category-edit/category-edit.component.ts");
/* harmony import */ var _category_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./category.service */ "./src/app/stock/category/category.service.ts");
/* harmony import */ var _category_routes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./category.routes */ "./src/app/stock/category/category.routes.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");














var CategoryModule = /** @class */ (function () {
    function CategoryModule() {
    }
    CategoryModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatRadioModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(_category_routes__WEBPACK_IMPORTED_MODULE_11__["CATEGORY_ROUTES"])
            ],
            declarations: [
                _category_list_category_list_component__WEBPACK_IMPORTED_MODULE_8__["CategoryListComponent"],
                _category_edit_category_edit_component__WEBPACK_IMPORTED_MODULE_9__["CategoryEditComponent"]
            ],
            providers: [_category_service__WEBPACK_IMPORTED_MODULE_10__["CategoryService"]],
            exports: []
        })
    ], CategoryModule);
    return CategoryModule;
}());



/***/ }),

/***/ "./src/app/stock/category/category.routes.ts":
/*!***************************************************!*\
  !*** ./src/app/stock/category/category.routes.ts ***!
  \***************************************************/
/*! exports provided: CATEGORY_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CATEGORY_ROUTES", function() { return CATEGORY_ROUTES; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _category_list_category_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category-list/category-list.component */ "./src/app/stock/category/category-list/category-list.component.ts");
/* harmony import */ var _category_edit_category_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category-edit/category-edit.component */ "./src/app/stock/category/category-edit/category-edit.component.ts");



var CATEGORY_ROUTES = [
    {
        path: 'stock/categories',
        component: _category_list_category_list_component__WEBPACK_IMPORTED_MODULE_1__["CategoryListComponent"]
    },
    {
        path: 'stock/categories/:id',
        component: _category_edit_category_edit_component__WEBPACK_IMPORTED_MODULE_2__["CategoryEditComponent"]
    }
];


/***/ }),

/***/ "./src/app/stock/category/category.service.ts":
/*!****************************************************!*\
  !*** ./src/app/stock/category/category.service.ts ***!
  \****************************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _configuration_configuration_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../configuration/configuration.service */ "./src/app/configuration/configuration.service.ts");



var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Accept', 'application/json');

var CategoryService = /** @class */ (function () {
    function CategoryService(http, configurationService) {
        this.http = http;
        this.configurationService = configurationService;
        this.categoryList = [];
        this.api = '';
        this.api = this.configurationService.environment.main_api + '/stock/category';
        console.log(this.configurationService.environment);
    }
    CategoryService.prototype.findById = function (id) {
        var url = this.api + "/" + id;
        var params = { _id: id };
        return this.http.get(url, { params: params, headers: headers });
    };
    CategoryService.prototype.load = function (filter) {
        var p = this;
        return new Promise(function (resolve, reject) {
            p.find(filter).subscribe(function (result) {
                p.categoryList = result;
                resolve(true);
            }, function (err) {
                reject(err);
                console.error('error loading', err);
            });
        });
    };
    CategoryService.prototype.find = function (filter) {
        var params = {
            'name': filter.name,
            'description': filter.description,
            'status': filter.status,
        };
        return this.http.get(this.api, { params: params, headers: headers });
    };
    CategoryService.prototype.save = function (entity) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var url = '';
        if (entity._id) {
            url = this.api + "/" + entity._id.toString();
            params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('ID', entity._id.toString());
            return this.http.put(url, entity, { headers: headers, params: params });
        }
        else {
            url = "" + this.api;
            return this.http.post(url, entity, { headers: headers, params: params });
        }
    };
    CategoryService.prototype.delete = function (entity) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var url = '';
        if (entity._id) {
            url = this.api + "/" + entity._id.toString();
            params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('ID', entity._id.toString());
            return this.http.delete(url, { headers: headers, params: params });
        }
        return null;
    };
    CategoryService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _configuration_configuration_service__WEBPACK_IMPORTED_MODULE_3__["ConfigurationService"] }
    ]; };
    CategoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], CategoryService);
    return CategoryService;
}());



/***/ }),

/***/ "./src/app/stock/category/category.ts":
/*!********************************************!*\
  !*** ./src/app/stock/category/category.ts ***!
  \********************************************/
/*! exports provided: Category */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return Category; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var Category = /** @class */ (function () {
    function Category() {
    }
    Object.defineProperty(Category.prototype, "display", {
        get: function () {
            return "category_display"; // Remplacer avec la chaine que vous souhaitez afficher
        },
        enumerable: true,
        configurable: true
    });
    return Category;
}());



/***/ }),

/***/ "./src/app/stock/class_product/class-product-edit/class-product-edit.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/stock/class_product/class-product-edit/class-product-edit.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ClassProductEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassProductEditComponent", function() { return ClassProductEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _class_product_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../class-product.service */ "./src/app/stock/class_product/class-product.service.ts");
/* harmony import */ var _class_product__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../class-product */ "./src/app/stock/class_product/class-product.ts");
/* harmony import */ var src_app_stock_product_product_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/stock/product/product.service */ "./src/app/stock/product/product.service.ts");
/* harmony import */ var src_app_stock_product_product__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/stock/product/product */ "./src/app/stock/product/product.ts");
/* harmony import */ var src_app_stock_product_product_filter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/stock/product/product-filter */ "./src/app/stock/product/product-filter.ts");
/* harmony import */ var _stock_operations_sale_sale__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../stock_operations/sale/sale */ "./src/app/stock_operations/sale/sale.ts");
/* harmony import */ var _stock_operations_sale_sale_unit_sale_unit_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../stock_operations/sale/sale_unit/sale-unit.service */ "./src/app/stock_operations/sale/sale_unit/sale-unit.service.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _stock_operations_product_command_product_command_unit_product_command_unit_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../stock_operations/product_command/product_command_unit/product-command-unit.service */ "./src/app/stock_operations/product_command/product_command_unit/product-command-unit.service.ts");







var caster = __webpack_require__(/*! angular-crud/gs-cast */ "./node_modules/angular-crud/gs-cast/index.js");









var ClassProductEditComponent = /** @class */ (function () {
    function ClassProductEditComponent(route, router, class_productService, productService, saleUnitService, commandUnitService) {
        this.route = route;
        this.router = router;
        this.class_productService = class_productService;
        this.productService = productService;
        this.saleUnitService = saleUnitService;
        this.commandUnitService = commandUnitService;
        this.feedback = {};
        this.filteredProductList = new Array();
        this.isLoadingProduct = false;
    }
    ClassProductEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this
            .route
            .params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (p) { return p.id; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (id) {
            if (id === 'new') {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _class_product__WEBPACK_IMPORTED_MODULE_7__["ClassProduct"]());
            }
            //else
            return _this.class_productService.findById(id);
        }))
            .subscribe(function (class_product) {
            _this.class_product = class_product;
            if (_this.class_product._id) {
                _this.loadSaleUnits();
                _this.loadCommand();
            }
            if (_this.class_product._id)
                _this.productInput.setValue(_this.class_product.product);
            _this.feedback = {};
        }, function (err) {
            _this.feedback = { type: 'warning', message: 'Erreur lors du chargement' };
        });
        this.configureProductInput();
    };
    ClassProductEditComponent.prototype.save = function () {
        var _this = this;
        this.class_productService.save(this.class_product).subscribe(function (class_product) {
            _this.class_product = class_product;
            _this.feedback = { type: 'success', message: 'Enregistrement effectué avec succès' };
            setTimeout(function () {
                _this.ngOnInit();
                //this.router.navigate(['/stock/classProducts']);
            }, 1000);
        }, function (err) {
            _this.feedback = { type: 'warning', message: "Erreur lors de l'enregistrement" };
        });
    };
    ClassProductEditComponent.prototype.cancel = function () {
        this.router.navigate(['/stock/classProducts']);
    };
    ClassProductEditComponent.prototype.productClick = function (event) {
        this.selectedProduct = event.option.value;
    };
    ClassProductEditComponent.prototype.checkProduct = function () {
        if (!this.selectedProduct || this.selectedProduct !== this.productInput.value) {
            this.productInput.setValue(null);
            this.selectedProduct = null;
            return;
        }
        this.class_product.product = this.selectedProduct;
    };
    ClassProductEditComponent.prototype.loadSaleUnits = function () {
        var _this = this;
        this.saleUnitService.findByProductClass(this.class_product._id).subscribe(function (saleUnits) {
            if (saleUnits.length < 1) {
                _this.sale = undefined;
            }
            _this.sale = saleUnits[0].sale;
            _this.sale.sale_units_datasource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableDataSource"](saleUnits);
            _stock_operations_sale_sale__WEBPACK_IMPORTED_MODULE_11__["Sale"].calculateAmounts(_this.sale);
        }, function (err) {
            _this.feedback = { type: 'warning', message: "Erreur lors du Chargement des informations de vente:" + err.message };
        });
    };
    ClassProductEditComponent.prototype.loadCommand = function () {
        var _this = this;
        this.commandUnitService.findByProductClass(this.class_product._id).subscribe(function (data) { _this.command_unit = data; console.log(_this.command_unit); }, function (err) {
            _this.feedback = { type: 'warning', message: 'Erreur lors du chargement des informations sur la commande :' + err.message };
        });
    };
    ClassProductEditComponent.prototype.displayProduct = function (product) {
        if (product)
            return product.name;
    };
    ClassProductEditComponent.prototype.configureProductInput = function () {
        var _this = this;
        this.productInput = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.productInput.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () { _this.isLoadingProduct = true; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (value) { return _this.productService.find(new src_app_stock_product_product_filter__WEBPACK_IMPORTED_MODULE_10__["ProductFilter"](value))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () { return _this.isLoadingProduct = false; })); }))
            .subscribe((function (resultList) {
            caster.arrayCast(resultList, src_app_stock_product_product__WEBPACK_IMPORTED_MODULE_9__["Product"]);
            _this.filteredProductList = resultList;
        }));
    };
    ClassProductEditComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _class_product_service__WEBPACK_IMPORTED_MODULE_6__["ClassProductService"] },
        { type: src_app_stock_product_product_service__WEBPACK_IMPORTED_MODULE_8__["ProductService"] },
        { type: _stock_operations_sale_sale_unit_sale_unit_service__WEBPACK_IMPORTED_MODULE_12__["SaleUnitService"] },
        { type: _stock_operations_product_command_product_command_unit_product_command_unit_service__WEBPACK_IMPORTED_MODULE_14__["ProductCommandUnitService"] }
    ]; };
    ClassProductEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-class-product-edit',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./class-product-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/stock/class_product/class-product-edit/class-product-edit.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./class-product-edit.scss */ "./src/app/stock/class_product/class-product-edit/class-product-edit.scss")).default]
        })
    ], ClassProductEditComponent);
    return ClassProductEditComponent;
}());



/***/ }),

/***/ "./src/app/stock/class_product/class-product-edit/class-product-edit.scss":
/*!********************************************************************************!*\
  !*** ./src/app/stock/class_product/class-product-edit/class-product-edit.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".stock_benef {\n  background: -webkit-gradient(linear, left top, left bottom, from(white), to(lightblue));\n  background: linear-gradient(white, lightblue);\n}\n.stock_benef input {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RvY2svY2xhc3NfcHJvZHVjdC9jbGFzcy1wcm9kdWN0LWVkaXQvQjpcXFByb2pldHNcXEdlc3Rpb24gZGUgQm91dGlxdWVcXGdzX3N0b2NrXFxBUFAvc3JjXFxhcHBcXHN0b2NrXFxjbGFzc19wcm9kdWN0XFxjbGFzcy1wcm9kdWN0LWVkaXRcXGNsYXNzLXByb2R1Y3QtZWRpdC5zY3NzIiwic3JjL2FwcC9zdG9jay9jbGFzc19wcm9kdWN0L2NsYXNzLXByb2R1Y3QtZWRpdC9jbGFzcy1wcm9kdWN0LWVkaXQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUVFLHVGQUFBO0VBQUEsNkNBQUE7QUNGRjtBREdFO0VBQ0UsaUJBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL3N0b2NrL2NsYXNzX3Byb2R1Y3QvY2xhc3MtcHJvZHVjdC1lZGl0L2NsYXNzLXByb2R1Y3QtZWRpdC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4uc3RvY2tfYmVuZWYge1xyXG5cclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQod2hpdGUsbGlnaHRibHVlKTtcclxuICBpbnB1dCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuXHJcbiAgfVxyXG59XHJcbiIsIi5zdG9ja19iZW5lZiB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh3aGl0ZSwgbGlnaHRibHVlKTtcbn1cbi5zdG9ja19iZW5lZiBpbnB1dCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/stock/class_product/class-product-filter.ts":
/*!*************************************************************!*\
  !*** ./src/app/stock/class_product/class-product-filter.ts ***!
  \*************************************************************/
/*! exports provided: ClassProductFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassProductFilter", function() { return ClassProductFilter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var ClassProductFilter = /** @class */ (function () {
    function ClassProductFilter(value) {
        this.product = '';
        this.label = '';
        this.status = undefined;
        if (!value)
            return;
        this.product = value;
        this.label = value;
    }
    return ClassProductFilter;
}());



/***/ }),

/***/ "./src/app/stock/class_product/class-product-list/class-product-list.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/stock/class_product/class-product-list/class-product-list.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ClassProductListComponent, GsFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassProductListComponent", function() { return ClassProductListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GsFilter", function() { return GsFilter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _class_product_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../class-product-filter */ "./src/app/stock/class_product/class-product-filter.ts");
/* harmony import */ var _class_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../class-product.service */ "./src/app/stock/class_product/class-product.service.ts");
/* harmony import */ var src_app_stock_product_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/stock/product/product.service */ "./src/app/stock/product/product.service.ts");
/* harmony import */ var src_app_stock_product_product__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/stock/product/product */ "./src/app/stock/product/product.ts");
/* harmony import */ var src_app_stock_product_product_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/stock/product/product-filter */ "./src/app/stock/product/product-filter.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _tools_statistical_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../tools/statistical.service */ "./src/app/tools/statistical.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");









var caster = __webpack_require__(/*! angular-crud/gs-cast */ "./node_modules/angular-crud/gs-cast/index.js");



var ClassProductListComponent = /** @class */ (function () {
    function ClassProductListComponent(class_productService, productService, statService, sumService, router) {
        this.class_productService = class_productService;
        this.productService = productService;
        this.statService = statService;
        this.sumService = sumService;
        this.router = router;
        this.filter = new _class_product_filter__WEBPACK_IMPORTED_MODULE_2__["ClassProductFilter"](null);
        this.feedback = {};
        this.displayedColumns = ['product', 'label', 'unit_price', 'quantity', 'total_price', 'date_intrance', 'actions'];
        this.server_processing = false;
        this.filteredProductList = new Array();
        this.isLoadingProduct = false;
    }
    ClassProductListComponent.prototype.productClick = function (event) {
        this.selectedProduct = event.option.value;
        this.applyFilter();
    };
    ClassProductListComponent.prototype.checkProduct = function () {
        if (!this.selectedProduct || this.selectedProduct !== this.productInput.value) {
            this.productInput.setValue(null);
            this.selectedProduct = null;
            return;
        }
    };
    ClassProductListComponent.prototype.resetProductFilter = function () {
        this.selectedProduct = null;
        this.productInput.setValue(this.selectedProduct);
        this.applyFilter();
    };
    ClassProductListComponent.prototype.displayProduct = function (product) {
        if (product)
            return product.name;
    };
    ClassProductListComponent.prototype.configureProductInput = function () {
        var _this = this;
        this.productInput = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]();
        this.productInput.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["tap"])(function () { _this.isLoadingProduct = true; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["switchMap"])(function (value) { return _this.productService.find(new src_app_stock_product_product_filter__WEBPACK_IMPORTED_MODULE_6__["ProductFilter"](value))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(function () { return _this.isLoadingProduct = false; })); }))
            .subscribe((function (resultList) {
            caster.arrayCast(resultList, src_app_stock_product_product__WEBPACK_IMPORTED_MODULE_5__["Product"]);
            _this.filteredProductList = resultList;
        }));
    };
    ClassProductListComponent.prototype.initFilters = function () {
        this.statusFilter = new GsFilter();
        this.statusFilter.controls.val = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]();
        this.labelFilter = new GsFilter();
        this.labelFilter.controls.val = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]();
        this.filteredValues = { product: this.selectedProduct,
            label: this.labelFilter.values,
            status: this.statusFilter.values, };
    };
    ClassProductListComponent.prototype.applyFilter = function () {
        this.dataSource.filter = JSON.stringify(this.filteredValues);
        this.actualizeStat();
    };
    ClassProductListComponent.prototype.enableFiltering = function () {
        var _this = this;
        this.statusFilter.controls.val.valueChanges.subscribe(function (value) { _this.statusFilter.values.val = value; _this.applyFilter(); });
        this.labelFilter.controls.val.valueChanges.subscribe(function (value) { _this.labelFilter.values.val = value; _this.applyFilter(); });
        this.dataSource.filterPredicate =
            function (class_product, filters) {
                var parsedFilters = JSON.parse(filters);
                var productCheck = true;
                var labelCheck = true;
                var statusCheck = true;
                productCheck = (_this.selectedProduct) ? (_this.selectedProduct._id == class_product.product._id) : true;
                if (parsedFilters.status.val != undefined && parsedFilters.status.val != null) {
                    statusCheck = (class_product.status == null || class_product.status == undefined) ? false : class_product.status == parsedFilters.status.val;
                }
                if (parsedFilters.label.val) {
                    labelCheck = !class_product.label ? false : class_product.label.toLowerCase().includes(parsedFilters.label.val.toLowerCase());
                }
                return productCheck && labelCheck && statusCheck && true;
            };
    };
    Object.defineProperty(ClassProductListComponent.prototype, "class_productList", {
        get: function () {
            return this.class_productService.class_productList;
        },
        enumerable: true,
        configurable: true
    });
    ClassProductListComponent.prototype.actualizeStat = function () {
        this.statService.setDatas(this.dataSource.filteredData);
        this.statService.computeProductSum('unit_price', 'quantity');
        this.sumService.setDatas(this.dataSource.filteredData);
        this.sumService.computeSum('quantity');
    };
    ClassProductListComponent.prototype.ngOnInit = function () {
        this.initFilters();
        this.configureProductInput();
    };
    ClassProductListComponent.prototype.ngAfterViewInit = function () {
        this.search();
    };
    ClassProductListComponent.prototype.search = function () {
        var _this = this;
        this.class_productService.load(this.filter).then(function (data) {
            setTimeout(function () {
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](_this.class_productService.class_productList);
                _this.dataSource.sort = _this.sort;
                _this.dataSource.paginator = _this.paginator;
                _this.enableFiltering();
                _this.applyFilter();
            }, 200);
        });
    };
    ClassProductListComponent.prototype.select = function (selected) {
        this.selectedClassProduct = selected;
    };
    ClassProductListComponent.prototype.delete = function (class_product) {
        var _this = this;
        if (confirm('Etes-vous sûr?')) {
            this.class_productService.delete(class_product).subscribe(function () {
                _this.feedback = { type: 'success', message: 'Suppression effectuée avec succès!' };
                setTimeout(function () {
                    _this.search();
                }, 1000);
            }, function (err) {
                _this.feedback = { type: 'warning', message: 'Erreur lors de la suppression.' };
            });
        }
    };
    ClassProductListComponent.ctorParameters = function () { return [
        { type: _class_product_service__WEBPACK_IMPORTED_MODULE_3__["ClassProductService"] },
        { type: src_app_stock_product_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] },
        { type: _tools_statistical_service__WEBPACK_IMPORTED_MODULE_10__["StatisticalService"] },
        { type: _tools_statistical_service__WEBPACK_IMPORTED_MODULE_10__["StatisticalService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"], null)
    ], ClassProductListComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSort"], null)
    ], ClassProductListComponent.prototype, "sort", void 0);
    ClassProductListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-class-product',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./class-product-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/stock/class_product/class-product-list/class-product-list.component.html")).default,
            providers: [_tools_statistical_service__WEBPACK_IMPORTED_MODULE_10__["StatisticalService"]],
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./class-product-list.scss */ "./src/app/stock/class_product/class-product-list/class-product-list.scss")).default]
        })
    ], ClassProductListComponent);
    return ClassProductListComponent;
}());

var GsFilter = /** @class */ (function () {
    function GsFilter() {
        this.values = {
            min: undefined,
            max: undefined,
            val: undefined,
        };
        this.controls = {
            min: null,
            max: null,
            val: null,
        };
    }
    GsFilter.prototype.reset = function () {
        if (this.controls.min)
            this.controls.min.setValue(undefined);
        if (this.controls.max)
            this.controls.max.setValue(undefined);
        if (this.controls.val)
            this.controls.val.setValue(undefined);
    };
    return GsFilter;
}());



/***/ }),

/***/ "./src/app/stock/class_product/class-product-list/class-product-list.scss":
/*!********************************************************************************!*\
  !*** ./src/app/stock/class_product/class-product-list/class-product-list.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0b2NrL2NsYXNzX3Byb2R1Y3QvY2xhc3MtcHJvZHVjdC1saXN0L2NsYXNzLXByb2R1Y3QtbGlzdC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/stock/class_product/class-product.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/stock/class_product/class-product.module.ts ***!
  \*************************************************************/
/*! exports provided: ClassProductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassProductModule", function() { return ClassProductModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _class_product_list_class_product_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./class-product-list/class-product-list.component */ "./src/app/stock/class_product/class-product-list/class-product-list.component.ts");
/* harmony import */ var _class_product_edit_class_product_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./class-product-edit/class-product-edit.component */ "./src/app/stock/class_product/class-product-edit/class-product-edit.component.ts");
/* harmony import */ var _class_product_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./class-product.service */ "./src/app/stock/class_product/class-product.service.ts");
/* harmony import */ var _class_product_routes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./class-product.routes */ "./src/app/stock/class_product/class-product.routes.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _stock_operations_sale_sale_unit_sale_unit_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../stock_operations/sale/sale_unit/sale-unit.module */ "./src/app/stock_operations/sale/sale_unit/sale-unit.module.ts");















var ClassProductModule = /** @class */ (function () {
    function ClassProductModule() {
    }
    ClassProductModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatRadioModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _stock_operations_sale_sale_unit_sale_unit_module__WEBPACK_IMPORTED_MODULE_14__["SaleUnitModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(_class_product_routes__WEBPACK_IMPORTED_MODULE_11__["CLASS_PRODUCT_ROUTES"])
            ],
            declarations: [
                _class_product_list_class_product_list_component__WEBPACK_IMPORTED_MODULE_8__["ClassProductListComponent"],
                _class_product_edit_class_product_edit_component__WEBPACK_IMPORTED_MODULE_9__["ClassProductEditComponent"]
            ],
            providers: [_class_product_service__WEBPACK_IMPORTED_MODULE_10__["ClassProductService"]],
            exports: []
        })
    ], ClassProductModule);
    return ClassProductModule;
}());



/***/ }),

/***/ "./src/app/stock/class_product/class-product.routes.ts":
/*!*************************************************************!*\
  !*** ./src/app/stock/class_product/class-product.routes.ts ***!
  \*************************************************************/
/*! exports provided: CLASS_PRODUCT_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLASS_PRODUCT_ROUTES", function() { return CLASS_PRODUCT_ROUTES; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _class_product_list_class_product_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./class-product-list/class-product-list.component */ "./src/app/stock/class_product/class-product-list/class-product-list.component.ts");
/* harmony import */ var _class_product_edit_class_product_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./class-product-edit/class-product-edit.component */ "./src/app/stock/class_product/class-product-edit/class-product-edit.component.ts");



var CLASS_PRODUCT_ROUTES = [
    {
        path: 'stock/classProducts',
        component: _class_product_list_class_product_list_component__WEBPACK_IMPORTED_MODULE_1__["ClassProductListComponent"]
    },
    {
        path: 'stock/classProducts/:id',
        component: _class_product_edit_class_product_edit_component__WEBPACK_IMPORTED_MODULE_2__["ClassProductEditComponent"]
    }
];


/***/ }),

/***/ "./src/app/stock/class_product/class-product.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/stock/class_product/class-product.service.ts ***!
  \**************************************************************/
/*! exports provided: ClassProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassProductService", function() { return ClassProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _configuration_configuration_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../configuration/configuration.service */ "./src/app/configuration/configuration.service.ts");



var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Accept', 'application/json');

var ClassProductService = /** @class */ (function () {
    function ClassProductService(http, configurationService) {
        this.http = http;
        this.configurationService = configurationService;
        this.class_productList = [];
        this.api = '';
        this.api = configurationService.environment.main_api + '/stock/product_class';
        console.log(this.configurationService.environment);
    }
    ClassProductService.prototype.findById = function (id) {
        var url = this.api + "/" + id;
        var params = { _id: id };
        return this.http.get(url, { params: params, headers: headers });
    };
    ClassProductService.prototype.load = function (filter) {
        var p = this;
        return new Promise(function (resolve, reject) {
            p.find(filter).subscribe(function (result) {
                p.class_productList = result;
                resolve(true);
            }, function (err) {
                reject(err);
                console.error('error loading', err);
            });
        });
    };
    ClassProductService.prototype.find = function (filter) {
        var params = {
            'product': filter.product,
            'label': filter.label,
            'status': filter.status,
        };
        return this.http.get(this.api, { params: params, headers: headers });
    };
    ClassProductService.prototype.save = function (entity) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var url = '';
        if (entity._id) {
            url = this.api + "/" + entity._id.toString();
            params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('ID', entity._id.toString());
            return this.http.put(url, entity, { headers: headers, params: params });
        }
        else {
            url = "" + this.api;
            return this.http.post(url, entity, { headers: headers, params: params });
        }
    };
    ClassProductService.prototype.delete = function (entity) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var url = '';
        if (entity._id) {
            url = this.api + "/" + entity._id.toString();
            params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('ID', entity._id.toString());
            return this.http.delete(url, { headers: headers, params: params });
        }
        return null;
    };
    ClassProductService.prototype.count = function () {
        var url = this.api + "/stats/count";
        return this.http.get(url, { headers: headers });
    };
    ClassProductService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _configuration_configuration_service__WEBPACK_IMPORTED_MODULE_3__["ConfigurationService"] }
    ]; };
    ClassProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ClassProductService);
    return ClassProductService;
}());



/***/ }),

/***/ "./src/app/stock/class_product/class-product.ts":
/*!******************************************************!*\
  !*** ./src/app/stock/class_product/class-product.ts ***!
  \******************************************************/
/*! exports provided: ClassProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassProduct", function() { return ClassProduct; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var ClassProduct = /** @class */ (function () {
    function ClassProduct() {
    }
    Object.defineProperty(ClassProduct.prototype, "display", {
        get: function () {
            return "class_product_display"; // Remplacer avec la chaine que vous souhaitez afficher
        },
        enumerable: true,
        configurable: true
    });
    return ClassProduct;
}());



/***/ }),

/***/ "./src/app/stock/product/product-edit/product-edit.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/stock/product/product-edit/product-edit.component.ts ***!
  \**********************************************************************/
/*! exports provided: ProductEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductEditComponent", function() { return ProductEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../product.service */ "./src/app/stock/product/product.service.ts");
/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../product */ "./src/app/stock/product/product.ts");
/* harmony import */ var src_app_stock_category_category_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/stock/category/category.service */ "./src/app/stock/category/category.service.ts");
/* harmony import */ var src_app_stock_category_category__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/stock/category/category */ "./src/app/stock/category/category.ts");
/* harmony import */ var src_app_stock_category_category_filter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/stock/category/category-filter */ "./src/app/stock/category/category-filter.ts");







var caster = __webpack_require__(/*! angular-crud/gs-cast */ "./node_modules/angular-crud/gs-cast/index.js");





var ProductEditComponent = /** @class */ (function () {
    function ProductEditComponent(route, router, productService, categoryService) {
        this.route = route;
        this.router = router;
        this.productService = productService;
        this.categoryService = categoryService;
        this.feedback = {};
        this.filteredCategoryList = new Array();
        this.isLoadingCategory = false;
    }
    ProductEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this
            .route
            .params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (p) { return p.id; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (id) {
            if (id === 'new') {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _product__WEBPACK_IMPORTED_MODULE_7__["Product"]());
            }
            return _this.productService.findById(id);
        }))
            .subscribe(function (product) {
            _this.product = product;
            _this.feedback = {};
        }, function (err) {
            _this.feedback = { type: 'warning', message: 'Erreur lors du chargement' };
        });
        this.configureCategoryInput();
    };
    ProductEditComponent.prototype.save = function () {
        var _this = this;
        this.productService.save(this.product).subscribe(function (product) {
            _this.product = product;
            _this.feedback = { type: 'success', message: 'Enregistrement effectué avec succès' };
            setTimeout(function () {
                _this.router.navigate(['/stock/products']);
            }, 1000);
        }, function (err) {
            _this.feedback = { type: 'warning', message: "Erreur lors de l'enregistrement" };
        });
    };
    ProductEditComponent.prototype.cancel = function () {
        this.router.navigate(['/stock/products']);
    };
    ProductEditComponent.prototype.categoryClick = function (event) {
        this.selectedCategory = event.option.value;
    };
    ProductEditComponent.prototype.checkCategory = function () {
        if (!this.selectedCategory || this.selectedCategory !== this.categoryInput.value) {
            this.categoryInput.setValue(null);
            this.selectedCategory = null;
            return;
        }
        this.product.category = this.selectedCategory;
    };
    ProductEditComponent.prototype.displayCategory = function (category) {
        if (category)
            return category.name;
    };
    ProductEditComponent.prototype.configureCategoryInput = function () {
        var _this = this;
        this.categoryInput = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.categoryInput.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () { _this.isLoadingCategory = true; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (value) { return _this.categoryService.find(new src_app_stock_category_category_filter__WEBPACK_IMPORTED_MODULE_10__["CategoryFilter"](value))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () { return _this.isLoadingCategory = false; })); }))
            .subscribe((function (resultList) {
            caster.arrayCast(resultList, src_app_stock_category_category__WEBPACK_IMPORTED_MODULE_9__["Category"]);
            _this.filteredCategoryList = resultList;
        }));
    };
    ProductEditComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"] },
        { type: src_app_stock_category_category_service__WEBPACK_IMPORTED_MODULE_8__["CategoryService"] }
    ]; };
    ProductEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-edit',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/stock/product/product-edit/product-edit.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product-edit.scss */ "./src/app/stock/product/product-edit/product-edit.scss")).default]
        })
    ], ProductEditComponent);
    return ProductEditComponent;
}());



/***/ }),

/***/ "./src/app/stock/product/product-edit/product-edit.scss":
/*!**************************************************************!*\
  !*** ./src/app/stock/product/product-edit/product-edit.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0b2NrL3Byb2R1Y3QvcHJvZHVjdC1lZGl0L3Byb2R1Y3QtZWRpdC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/stock/product/product-filter.ts":
/*!*************************************************!*\
  !*** ./src/app/stock/product/product-filter.ts ***!
  \*************************************************/
/*! exports provided: ProductFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductFilter", function() { return ProductFilter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var ProductFilter = /** @class */ (function () {
    function ProductFilter(value) {
        this.name = '';
        this.description = '';
        this.unit_price = '';
        this.status = '';
        if (!value)
            return;
        this.name = value;
        this.description = value;
    }
    return ProductFilter;
}());



/***/ }),

/***/ "./src/app/stock/product/product-list/product-list.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/stock/product/product-list/product-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: ProductListComponent, GsFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GsFilter", function() { return GsFilter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _product_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product-filter */ "./src/app/stock/product/product-filter.ts");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../product.service */ "./src/app/stock/product/product.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(productService) {
        this.productService = productService;
        this.filter = new _product_filter__WEBPACK_IMPORTED_MODULE_2__["ProductFilter"](null);
        this.feedback = {};
        this.displayedColumns = ['_id', 'name', 'description', 'category', 'unit_price', 'actions'];
        this.server_processing = false;
    }
    ProductListComponent.prototype.initFilters = function () {
        this.nameFilter = new GsFilter();
        this.nameFilter.controls.val = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        this.descriptionFilter = new GsFilter();
        this.descriptionFilter.controls.val = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        this.unit_priceFilter = new GsFilter();
        this.unit_priceFilter.controls.min = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        this.unit_priceFilter.controls.max = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        this.unit_priceFilter.controls.val = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        this.statusFilter = new GsFilter();
        this.statusFilter.controls.val = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        this.filteredValues = { name: this.nameFilter.values, description: this.descriptionFilter.values, unit_price: this.unit_priceFilter.values, status: this.statusFilter.values, };
    };
    ProductListComponent.prototype.applyFilter = function () {
        this.dataSource.filter = JSON.stringify(this.filteredValues);
    };
    ProductListComponent.prototype.enableFiltering = function () {
        var _this = this;
        this.nameFilter.controls.val.valueChanges.subscribe(function (value) { _this.nameFilter.values.val = value; _this.applyFilter(); });
        this.descriptionFilter.controls.val.valueChanges.subscribe(function (value) { _this.descriptionFilter.values.val = value; _this.applyFilter(); });
        this.unit_priceFilter.controls.val.valueChanges.subscribe(function (value) { _this.unit_priceFilter.values.val = value; _this.applyFilter(); });
        this.unit_priceFilter.controls.min.valueChanges.subscribe(function (value) { _this.unit_priceFilter.values.min = value; _this.applyFilter(); });
        this.unit_priceFilter.controls.max.valueChanges.subscribe(function (value) { _this.unit_priceFilter.values.max = value; _this.applyFilter(); });
        this.statusFilter.controls.val.valueChanges.subscribe(function (value) { _this.statusFilter.values.val = value; _this.applyFilter(); });
        this.dataSource.filterPredicate =
            function (product, filters) {
                var parsedFilters = JSON.parse(filters);
                var nameCheck = true;
                var descriptionCheck = true;
                var unit_priceCheck = true;
                var statusCheck = true;
                if (parsedFilters.name.val) {
                    nameCheck = !product.name ? false : product.name.toLowerCase().includes(parsedFilters.name.val.toLowerCase());
                }
                if (parsedFilters.description.val) {
                    descriptionCheck = !product.name ? false : product.description.toLowerCase().includes(parsedFilters.description.val.toLowerCase());
                }
                if (parsedFilters.unit_price.val) {
                    unit_priceCheck = !product.unit_price ? false : product.unit_price == parsedFilters.unit_price.val;
                }
                else {
                    if (parsedFilters.unit_price.min) {
                        unit_priceCheck = unit_priceCheck && (parsedFilters.unit_price.min <= product.unit_price);
                    }
                    if (parsedFilters.unit_price.max) {
                        unit_priceCheck = unit_priceCheck && (parsedFilters.unit_price.max >= product.unit_price);
                    }
                }
                if (parsedFilters.status.val != undefined && parsedFilters.status.val != null) {
                    statusCheck = (product.status == null || product.status == undefined) ? false : product.status == parsedFilters.status.val;
                }
                return nameCheck && descriptionCheck && unit_priceCheck && statusCheck && true;
            };
    };
    Object.defineProperty(ProductListComponent.prototype, "productList", {
        get: function () {
            return this.productService.productList;
        },
        enumerable: true,
        configurable: true
    });
    ProductListComponent.prototype.ngOnInit = function () {
        this.initFilters();
    };
    ProductListComponent.prototype.ngAfterViewInit = function () {
        this.search();
    };
    ProductListComponent.prototype.search = function () {
        var _this = this;
        this.productService.load(this.filter).then(function (data) {
            setTimeout(function () {
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this.productService.productList);
                _this.dataSource.sort = _this.sort;
                _this.dataSource.paginator = _this.paginator;
                _this.enableFiltering();
            }, 200);
        });
    };
    ProductListComponent.prototype.select = function (selected) {
        this.selectedProduct = selected;
    };
    ProductListComponent.prototype.delete = function (product) {
        var _this = this;
        if (confirm('Etes-vous sûr?')) {
            this.productService.delete(product).subscribe(function () {
                _this.feedback = { type: 'success', message: 'Suppression effectuée avec succès!' };
                setTimeout(function () {
                    _this.search();
                }, 1000);
            }, function (err) {
                _this.feedback = { type: 'warning', message: 'Erreur lors de la suppression.' };
            });
        }
    };
    ProductListComponent.ctorParameters = function () { return [
        { type: _product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], null)
    ], ProductListComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"], null)
    ], ProductListComponent.prototype, "sort", void 0);
    ProductListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/stock/product/product-list/product-list.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product-list.scss */ "./src/app/stock/product/product-list/product-list.scss")).default]
        })
    ], ProductListComponent);
    return ProductListComponent;
}());

var GsFilter = /** @class */ (function () {
    function GsFilter() {
        this.values = {
            min: undefined,
            max: undefined,
            val: undefined,
        };
        this.controls = {
            min: null,
            max: null,
            val: null,
        };
    }
    GsFilter.prototype.reset = function () {
        if (this.controls.min)
            this.controls.min.setValue(undefined);
        if (this.controls.max)
            this.controls.max.setValue(undefined);
        if (this.controls.val)
            this.controls.val.setValue(undefined);
    };
    return GsFilter;
}());



/***/ }),

/***/ "./src/app/stock/product/product-list/product-list.scss":
/*!**************************************************************!*\
  !*** ./src/app/stock/product/product-list/product-list.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0b2NrL3Byb2R1Y3QvcHJvZHVjdC1saXN0L3Byb2R1Y3QtbGlzdC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/stock/product/product.module.ts":
/*!*************************************************!*\
  !*** ./src/app/stock/product/product.module.ts ***!
  \*************************************************/
/*! exports provided: ProductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductModule", function() { return ProductModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product-list/product-list.component */ "./src/app/stock/product/product-list/product-list.component.ts");
/* harmony import */ var _product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product-edit/product-edit.component */ "./src/app/stock/product/product-edit/product-edit.component.ts");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./product.service */ "./src/app/stock/product/product.service.ts");
/* harmony import */ var _product_routes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./product.routes */ "./src/app/stock/product/product.routes.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");














var ProductModule = /** @class */ (function () {
    function ProductModule() {
    }
    ProductModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatRadioModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(_product_routes__WEBPACK_IMPORTED_MODULE_11__["PRODUCT_ROUTES"])
            ],
            declarations: [
                _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_8__["ProductListComponent"],
                _product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_9__["ProductEditComponent"]
            ],
            providers: [_product_service__WEBPACK_IMPORTED_MODULE_10__["ProductService"]],
            exports: []
        })
    ], ProductModule);
    return ProductModule;
}());



/***/ }),

/***/ "./src/app/stock/product/product.routes.ts":
/*!*************************************************!*\
  !*** ./src/app/stock/product/product.routes.ts ***!
  \*************************************************/
/*! exports provided: PRODUCT_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRODUCT_ROUTES", function() { return PRODUCT_ROUTES; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-list/product-list.component */ "./src/app/stock/product/product-list/product-list.component.ts");
/* harmony import */ var _product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-edit/product-edit.component */ "./src/app/stock/product/product-edit/product-edit.component.ts");



var PRODUCT_ROUTES = [
    {
        path: 'stock/products',
        component: _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_1__["ProductListComponent"]
    },
    {
        path: 'stock/products/:id',
        component: _product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_2__["ProductEditComponent"]
    }
];


/***/ }),

/***/ "./src/app/stock/product/product.service.ts":
/*!**************************************************!*\
  !*** ./src/app/stock/product/product.service.ts ***!
  \**************************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _configuration_configuration_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../configuration/configuration.service */ "./src/app/configuration/configuration.service.ts");



var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Accept', 'application/json');

var ProductService = /** @class */ (function () {
    function ProductService(http, configurationService) {
        this.http = http;
        this.configurationService = configurationService;
        this.productList = [];
        this.api = '';
        this.api = this.configurationService.environment.main_api + '/stock/product';
        console.log(this.configurationService.environment);
    }
    ProductService.prototype.findById = function (id) {
        var url = this.api + "/" + id;
        var params = { _id: id };
        return this.http.get(url, { params: params, headers: headers });
    };
    ProductService.prototype.load = function (filter) {
        var p = this;
        return new Promise(function (resolve, reject) {
            p.find(filter).subscribe(function (result) {
                p.productList = result;
                resolve(true);
            }, function (err) {
                reject(err);
                console.error('error loading', err);
            });
        });
    };
    ProductService.prototype.find = function (filter) {
        var params = {
            'name': filter.name,
            'description': filter.description,
            'unit_price': filter.unit_price,
            'status': filter.status,
        };
        return this.http.get(this.api, { params: params, headers: headers });
    };
    ProductService.prototype.save = function (entity) {
        console.log(entity);
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var url = '';
        if (entity._id) {
            url = this.api + "/" + entity._id.toString();
            params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('ID', entity._id.toString());
            return this.http.put(url, entity, { headers: headers, params: params });
        }
        else {
            url = "" + this.api;
            return this.http.post(url, entity, { headers: headers, params: params });
        }
    };
    ProductService.prototype.delete = function (entity) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var url = '';
        if (entity._id) {
            url = this.api + "/" + entity._id.toString();
            params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('ID', entity._id.toString());
            return this.http.delete(url, { headers: headers, params: params });
        }
        return null;
    };
    ProductService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _configuration_configuration_service__WEBPACK_IMPORTED_MODULE_3__["ConfigurationService"] }
    ]; };
    ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/stock/product/product.ts":
/*!******************************************!*\
  !*** ./src/app/stock/product/product.ts ***!
  \******************************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var Product = /** @class */ (function () {
    function Product() {
    }
    Object.defineProperty(Product.prototype, "display", {
        get: function () {
            return "product_display"; // Remplacer avec la chaine que vous souhaitez afficher
        },
        enumerable: true,
        configurable: true
    });
    return Product;
}());



/***/ }),

/***/ "./src/app/stock_operations/payment/payment-edit/payment-edit.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/stock_operations/payment/payment-edit/payment-edit.component.ts ***!
  \*********************************************************************************/
/*! exports provided: PaymentEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentEditComponent", function() { return PaymentEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _payment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../payment.service */ "./src/app/stock_operations/payment/payment.service.ts");
/* harmony import */ var _payment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../payment */ "./src/app/stock_operations/payment/payment.ts");
/* harmony import */ var src_app_params_manager_manager_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/params/manager/manager.service */ "./src/app/params/manager/manager.service.ts");
/* harmony import */ var src_app_stock_operations_product_command_product_command_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/stock_operations/product_command/product-command.service */ "./src/app/stock_operations/product_command/product-command.service.ts");
/* harmony import */ var src_app_stock_operations_product_command_product_command__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/stock_operations/product_command/product-command */ "./src/app/stock_operations/product_command/product-command.ts");
/* harmony import */ var _params_manager_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../params/manager/auth/auth.service */ "./src/app/params/manager/auth/auth.service.ts");
/* harmony import */ var _sale_sale__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../sale/sale */ "./src/app/stock_operations/sale/sale.ts");
/* harmony import */ var _sale_sale_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../sale/sale.service */ "./src/app/stock_operations/sale/sale.service.ts");





var caster = __webpack_require__(/*! angular-crud/gs-cast */ "./node_modules/angular-crud/gs-cast/index.js");








var PaymentEditComponent = /** @class */ (function () {
    function PaymentEditComponent(route, router, paymentService, managerService, authService, product_commandService, saleService) {
        this.route = route;
        this.router = router;
        this.paymentService = paymentService;
        this.managerService = managerService;
        this.authService = authService;
        this.product_commandService = product_commandService;
        this.saleService = saleService;
        this.amountInput = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.dateInput = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.feedback = {};
    }
    PaymentEditComponent.prototype.ngOnInit = function () {
        this.payment = new _payment__WEBPACK_IMPORTED_MODULE_5__["Payment"]();
        this.configureAmountInput();
        this.configureDateInput();
    };
    PaymentEditComponent.prototype.configureAmountInput = function () {
        var minAmount = 1;
        var maxAmount = 0;
        if (this.product_command)
            maxAmount = this.product_command.amount - this.product_command.amount_payment;
        if (this.sale)
            maxAmount = this.sale.amount - this.sale.amount_payment;
        this.payment.amount = maxAmount;
        this.amountInput.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(maxAmount), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(minAmount)]);
    };
    PaymentEditComponent.prototype.configureDateInput = function () {
        this.payment.date = new Date();
    };
    PaymentEditComponent.prototype.save = function () {
        var _this = this;
        if (this.product_command) {
            this.payment.product_command = this.product_command;
            this.payment.manager = this.authService.active_user;
            this.paymentService.save(this.payment).subscribe(function (payment) {
                _this.payment = payment;
                _this.feedback = { type: 'success', message: 'Payment effectué avec succès' };
                _this.ngOnInit();
                setTimeout(function () {
                    _this.feedback = {};
                    src_app_stock_operations_product_command_product_command__WEBPACK_IMPORTED_MODULE_8__["ProductCommand"].addPayment(payment, _this.product_command);
                    src_app_stock_operations_product_command_product_command__WEBPACK_IMPORTED_MODULE_8__["ProductCommand"].updatePaymentStatus(_this.product_command, _this.product_commandService);
                }, 1000);
            }, function (err) {
                _this.feedback = { type: 'warning', message: "Erreur lors de l'enregistrement du paiement : " + err.message };
            });
        }
        if (this.sale) {
            this.payment.sale = this.sale;
            this.payment.manager = this.authService.active_user;
            this.paymentService.save(this.payment).subscribe(function (payment) {
                _this.payment = payment;
                _this.feedback = { type: 'success', message: 'Payment effectué avec succès' };
                _this.ngOnInit();
                setTimeout(function () {
                    _this.feedback = {};
                    _sale_sale__WEBPACK_IMPORTED_MODULE_10__["Sale"].addPayment(payment, _this.sale);
                    _sale_sale__WEBPACK_IMPORTED_MODULE_10__["Sale"].updatePaymentStatus(_this.sale, _this.saleService);
                }, 1000);
            }, function (err) {
                _this.feedback = { type: 'warning', message: "Erreur lors de l'enregistrement du paiement : " + err.message };
            });
        }
    };
    PaymentEditComponent.prototype.cancel = function () {
        this.router.navigate(['/stock_operations/payments']);
    };
    PaymentEditComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _payment_service__WEBPACK_IMPORTED_MODULE_4__["PaymentService"] },
        { type: src_app_params_manager_manager_service__WEBPACK_IMPORTED_MODULE_6__["ManagerService"] },
        { type: _params_manager_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"] },
        { type: src_app_stock_operations_product_command_product_command_service__WEBPACK_IMPORTED_MODULE_7__["ProductCommandService"] },
        { type: _sale_sale_service__WEBPACK_IMPORTED_MODULE_11__["SaleService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], PaymentEditComponent.prototype, "product_command", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], PaymentEditComponent.prototype, "sale", void 0);
    PaymentEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-payment-edit',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./payment-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/stock_operations/payment/payment-edit/payment-edit.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./payment-edit.scss */ "./src/app/stock_operations/payment/payment-edit/payment-edit.scss")).default]
        })
    ], PaymentEditComponent);
    return PaymentEditComponent;
}());



/***/ }),

/***/ "./src/app/stock_operations/payment/payment-edit/payment-edit.scss":
/*!*************************************************************************!*\
  !*** ./src/app/stock_operations/payment/payment-edit/payment-edit.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0b2NrX29wZXJhdGlvbnMvcGF5bWVudC9wYXltZW50LWVkaXQvcGF5bWVudC1lZGl0LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/stock_operations/payment/payment-filter.ts":
/*!************************************************************!*\
  !*** ./src/app/stock_operations/payment/payment-filter.ts ***!
  \************************************************************/
/*! exports provided: PaymentFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentFilter", function() { return PaymentFilter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var PaymentFilter = /** @class */ (function () {
    function PaymentFilter() {
    }
    return PaymentFilter;
}());



/***/ }),

/***/ "./src/app/stock_operations/payment/payment-list/payment-list.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/stock_operations/payment/payment-list/payment-list.component.ts ***!
  \*********************************************************************************/
/*! exports provided: PaymentListComponent, GsFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentListComponent", function() { return PaymentListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GsFilter", function() { return GsFilter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _payment_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../payment-filter */ "./src/app/stock_operations/payment/payment-filter.ts");
/* harmony import */ var _payment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../payment.service */ "./src/app/stock_operations/payment/payment.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");





var caster = __webpack_require__(/*! angular-crud/gs-cast */ "./node_modules/angular-crud/gs-cast/index.js");
var PaymentListComponent = /** @class */ (function () {
    function PaymentListComponent(paymentService) {
        this.paymentService = paymentService;
        this.filter = new _payment_filter__WEBPACK_IMPORTED_MODULE_2__["PaymentFilter"]();
        this.feedback = {};
        this.displayedColumns = ['amount', 'date', 'manager'];
        this.server_processing = false;
    }
    PaymentListComponent.prototype.initFilters = function () {
        this.filteredValues = {};
    };
    PaymentListComponent.prototype.initData = function () {
        if (this.sale)
            this.dataSource = this.sale.sale_payments;
        else if (this.command)
            this.dataSource = this.command.command_payments;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.enableFiltering();
    };
    ;
    PaymentListComponent.prototype.applyFilter = function () {
        this.dataSource.filter = JSON.stringify(this.filteredValues);
    };
    PaymentListComponent.prototype.enableFiltering = function () {
        this.dataSource.filterPredicate =
            function (payment, filters) {
                var parsedFilters = JSON.parse(filters);
                return true;
            };
    };
    Object.defineProperty(PaymentListComponent.prototype, "paymentList", {
        get: function () {
            return this.paymentService.paymentList;
        },
        enumerable: true,
        configurable: true
    });
    PaymentListComponent.prototype.ngOnInit = function () {
        this.initData();
        this.initFilters();
    };
    PaymentListComponent.prototype.ngAfterViewInit = function () {
    };
    PaymentListComponent.prototype.search = function () {
        this.enableFiltering();
        this.initData();
    };
    PaymentListComponent.prototype.select = function (selected) {
        this.selectedPayment = selected;
    };
    PaymentListComponent.prototype.delete = function (payment) {
        var _this = this;
        if (confirm('Etes-vous sûr?')) {
            this.paymentService.delete(payment).subscribe(function () {
                _this.feedback = { type: 'success', message: 'Suppression effectuée avec succès!' };
                setTimeout(function () {
                    _this.search();
                }, 1000);
            }, function (err) {
                _this.feedback = { type: 'warning', message: 'Erreur lors de la suppression.' };
            });
        }
    };
    PaymentListComponent.ctorParameters = function () { return [
        { type: _payment_service__WEBPACK_IMPORTED_MODULE_3__["PaymentService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], null)
    ], PaymentListComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"], null)
    ], PaymentListComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], PaymentListComponent.prototype, "command", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], PaymentListComponent.prototype, "sale", void 0);
    PaymentListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-payment',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./payment-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/stock_operations/payment/payment-list/payment-list.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./payment-list.scss */ "./src/app/stock_operations/payment/payment-list/payment-list.scss")).default]
        })
    ], PaymentListComponent);
    return PaymentListComponent;
}());

var GsFilter = /** @class */ (function () {
    function GsFilter() {
        this.values = {
            min: undefined,
            max: undefined,
            val: undefined,
        };
        this.controls = {
            min: null,
            max: null,
            val: null,
        };
    }
    GsFilter.prototype.reset = function () {
        if (this.controls.min)
            this.controls.min.setValue(undefined);
        if (this.controls.max)
            this.controls.max.setValue(undefined);
        if (this.controls.val)
            this.controls.val.setValue(undefined);
    };
    return GsFilter;
}());



/***/ }),

/***/ "./src/app/stock_operations/payment/payment-list/payment-list.scss":
/*!*************************************************************************!*\
  !*** ./src/app/stock_operations/payment/payment-list/payment-list.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0b2NrX29wZXJhdGlvbnMvcGF5bWVudC9wYXltZW50LWxpc3QvcGF5bWVudC1saXN0LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/stock_operations/payment/payment.module.ts":
/*!************************************************************!*\
  !*** ./src/app/stock_operations/payment/payment.module.ts ***!
  \************************************************************/
/*! exports provided: PaymentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentModule", function() { return PaymentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _payment_list_payment_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./payment-list/payment-list.component */ "./src/app/stock_operations/payment/payment-list/payment-list.component.ts");
/* harmony import */ var _payment_edit_payment_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./payment-edit/payment-edit.component */ "./src/app/stock_operations/payment/payment-edit/payment-edit.component.ts");
/* harmony import */ var _payment_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./payment.service */ "./src/app/stock_operations/payment/payment.service.ts");
/* harmony import */ var _payment_routes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./payment.routes */ "./src/app/stock_operations/payment/payment.routes.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");














var PaymentModule = /** @class */ (function () {
    function PaymentModule() {
    }
    PaymentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatRadioModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(_payment_routes__WEBPACK_IMPORTED_MODULE_11__["PAYMENT_ROUTES"])
            ],
            declarations: [
                _payment_list_payment_list_component__WEBPACK_IMPORTED_MODULE_8__["PaymentListComponent"],
                _payment_edit_payment_edit_component__WEBPACK_IMPORTED_MODULE_9__["PaymentEditComponent"]
            ],
            providers: [_payment_service__WEBPACK_IMPORTED_MODULE_10__["PaymentService"]],
            exports: [
                _payment_list_payment_list_component__WEBPACK_IMPORTED_MODULE_8__["PaymentListComponent"],
                _payment_edit_payment_edit_component__WEBPACK_IMPORTED_MODULE_9__["PaymentEditComponent"]
            ]
        })
    ], PaymentModule);
    return PaymentModule;
}());



/***/ }),

/***/ "./src/app/stock_operations/payment/payment.routes.ts":
/*!************************************************************!*\
  !*** ./src/app/stock_operations/payment/payment.routes.ts ***!
  \************************************************************/
/*! exports provided: PAYMENT_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAYMENT_ROUTES", function() { return PAYMENT_ROUTES; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var PAYMENT_ROUTES = [];


/***/ }),

/***/ "./src/app/stock_operations/payment/payment.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/stock_operations/payment/payment.service.ts ***!
  \*************************************************************/
/*! exports provided: PaymentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentService", function() { return PaymentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _configuration_configuration_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../configuration/configuration.service */ "./src/app/configuration/configuration.service.ts");



var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Accept', 'application/json');

var PaymentService = /** @class */ (function () {
    function PaymentService(http, configurationService) {
        this.http = http;
        this.configurationService = configurationService;
        this.paymentList = [];
        this.api = this.configurationService.environment.main_api + '/payment/payment';
    }
    PaymentService.prototype.findById = function (id) {
        var url = this.api + "/" + id;
        var params = { _id: id };
        return this.http.get(url, { params: params, headers: headers });
    };
    PaymentService.prototype.load = function (filter) {
        var p = this;
        return new Promise(function (resolve, reject) {
            p.find(filter).subscribe(function (result) {
                p.paymentList = result;
                resolve(true);
            }, function (err) {
                reject(err);
                console.error('error loading', err);
            });
        });
    };
    PaymentService.prototype.find = function (filter) {
        var url = "";
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        if (filter.command) {
            url = this.api + "/command/" + filter.command;
            params.set("command", filter.command);
        }
        else {
            url = this.api + "/sale/" + filter.sale;
            params.set("sale", filter.sale);
        }
        return this.http.get(url, { params: params, headers: headers });
    };
    PaymentService.prototype.save = function (entity) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var url = '';
        if (entity._id) {
            url = this.api + "/" + entity._id.toString();
            params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('ID', entity._id.toString());
            return this.http.put(url, entity, { headers: headers, params: params });
        }
        else {
            url = "" + this.api;
            var pmt = new Object();
            Object.assign(pmt, entity);
            if (pmt.product_command)
                pmt.product_command = pmt.product_command._id;
            if (pmt.sale)
                pmt.sale = pmt.sale._id;
            return this.http.post(url, pmt, { headers: headers, params: params });
        }
    };
    PaymentService.prototype.delete = function (entity) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var url = '';
        if (entity._id) {
            url = this.api + "/" + entity._id.toString();
            params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('ID', entity._id.toString());
            return this.http.delete(url, { headers: headers, params: params });
        }
        return null;
    };
    PaymentService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _configuration_configuration_service__WEBPACK_IMPORTED_MODULE_3__["ConfigurationService"] }
    ]; };
    PaymentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], PaymentService);
    return PaymentService;
}());



/***/ }),

/***/ "./src/app/stock_operations/payment/payment.ts":
/*!*****************************************************!*\
  !*** ./src/app/stock_operations/payment/payment.ts ***!
  \*****************************************************/
/*! exports provided: Payment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Payment", function() { return Payment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var Payment = /** @class */ (function () {
    function Payment() {
    }
    Object.defineProperty(Payment.prototype, "display", {
        get: function () {
            return "payment_display"; // Remplacer avec la chaine que vous souhaitez afficher
        },
        enumerable: true,
        configurable: true
    });
    return Payment;
}());



/***/ }),

/***/ "./src/app/stock_operations/product_command/product-command-edit/product-command-edit.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/stock_operations/product_command/product-command-edit/product-command-edit.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: ProductCommandEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCommandEditComponent", function() { return ProductCommandEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _product_command_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../product-command.service */ "./src/app/stock_operations/product_command/product-command.service.ts");
/* harmony import */ var _product_command__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../product-command */ "./src/app/stock_operations/product_command/product-command.ts");
/* harmony import */ var src_app_partners_provider_provider_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/partners/provider/provider.service */ "./src/app/partners/provider/provider.service.ts");
/* harmony import */ var src_app_partners_provider_provider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/partners/provider/provider */ "./src/app/partners/provider/provider.ts");
/* harmony import */ var src_app_partners_provider_provider_filter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/partners/provider/provider-filter */ "./src/app/partners/provider/provider-filter.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _product_command_unit_product_command_unit_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../product_command_unit/product-command-unit.service */ "./src/app/stock_operations/product_command/product_command_unit/product-command-unit.service.ts");
/* harmony import */ var _product_command_unit_product_command_unit_filter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../product_command_unit/product-command-unit-filter */ "./src/app/stock_operations/product_command/product_command_unit/product-command-unit-filter.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _product_command_print_product_command_print_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../product-command-print/product-command-print.component */ "./src/app/stock_operations/product_command/product-command-print/product-command-print.component.ts");
/* harmony import */ var _payment_payment_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../payment/payment.service */ "./src/app/stock_operations/payment/payment.service.ts");
/* harmony import */ var _payment_payment_filter__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../payment/payment-filter */ "./src/app/stock_operations/payment/payment-filter.ts");
/* harmony import */ var _payment_payment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../payment/payment */ "./src/app/stock_operations/payment/payment.ts");
/* harmony import */ var _params_manager_auth_auth_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../params/manager/auth/auth.service */ "./src/app/params/manager/auth/auth.service.ts");







var caster = __webpack_require__(/*! angular-crud/gs-cast */ "./node_modules/angular-crud/gs-cast/index.js");














var ProductCommandEditComponent = /** @class */ (function () {
    function ProductCommandEditComponent(route, router, product_commandService, providerService, pcu_service, paymentService, authService, matDialog) {
        this.route = route;
        this.router = router;
        this.product_commandService = product_commandService;
        this.providerService = providerService;
        this.pcu_service = pcu_service;
        this.paymentService = paymentService;
        this.authService = authService;
        this.matDialog = matDialog;
        this.product_command = new _product_command__WEBPACK_IMPORTED_MODULE_7__["ProductCommand"]();
        this.feedback = {};
        this.filteredProviderList = new Array();
        this.isLoadingProvider = false;
    }
    ProductCommandEditComponent.prototype.visualize = function () {
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialogConfig"]();
        // The user can't close the dialog by clicking outside its bo
        dialogConfig.disableClose = false;
        dialogConfig.id = "modal-component";
        dialogConfig.height = "90vh";
        dialogConfig.width = "60vh";
        dialogConfig.data = {
            command: this.product_command
        };
        // https://material.angular.io/components/dialog/overview
        var modalDialog = this.matDialog.open(_product_command_print_product_command_print_component__WEBPACK_IMPORTED_MODULE_15__["ProductCommandPrintComponent"], dialogConfig);
    };
    ProductCommandEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this
            .route
            .params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (p) { return p.id; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (id) {
            if (id === 'new') {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _product_command__WEBPACK_IMPORTED_MODULE_7__["ProductCommand"]());
            }
            return _this.product_commandService.findById(id);
        }))
            .subscribe(function (product_command) {
            _this.product_command = product_command;
            if (!product_command._id) {
                _this.product_command.command_units_datasource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableDataSource"](new Array());
            }
            else {
                var filter = new _product_command_unit_product_command_unit_filter__WEBPACK_IMPORTED_MODULE_13__["ProductCommandUnitFilter"]();
                filter.command = _this.product_command._id;
                _this.pcu_service.find(filter).subscribe(function (data) {
                    _this.product_command.command_units_datasource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableDataSource"](data);
                    _product_command__WEBPACK_IMPORTED_MODULE_7__["ProductCommand"].calculateAmounts(_this.product_command);
                    _this.providerInput.setValue(_this.product_command.provider);
                }, function (error) { return _this.feedback = { type: 'warning', message: 'Erreur lors du chargement des produits de la commande' }; });
                var filter2 = new _payment_payment_filter__WEBPACK_IMPORTED_MODULE_17__["PaymentFilter"]();
                filter2.command = _this.product_command._id;
                _this.paymentService.find(filter2).subscribe(function (data) {
                    _this.product_command.command_payments = new _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableDataSource"](data);
                    _product_command__WEBPACK_IMPORTED_MODULE_7__["ProductCommand"].calculateAmountsPayement(_this.product_command);
                }, function (error) { return _this.feedback = { type: 'warning', message: 'Erreur lors de la liste des paiements' }; });
                _this.feedback = {};
            }
        }, function (err) {
            _this.feedback = { type: 'warning', message: 'Erreur lors du chargement' };
        });
        this.configureProviderInput();
    };
    ProductCommandEditComponent.prototype.save = function () {
        var _this = this;
        if (this.product_command._id)
            return;
        this.product_commandService.save(this.product_command).subscribe(function (product_command) {
            _this.product_command._id = product_command._id;
            _this.product_command.command_payments = new _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableDataSource"](new Array());
            _this.feedback = { type: 'success', message: 'Commmande enregistrée avec succès; La livraison est prévue pour le :' + product_command.date_finalizing };
            if (confirm("Voulez-vous régler le paiement de cette commande maintenant?")) {
                var payment = new _payment_payment__WEBPACK_IMPORTED_MODULE_18__["Payment"]();
                payment.manager = _this.authService.active_user;
                payment.amount = _this.product_command.amount;
                payment.product_command = _this.product_command;
                payment.date = new Date();
                _this.paymentService.save(payment).subscribe(function (data) {
                    _product_command__WEBPACK_IMPORTED_MODULE_7__["ProductCommand"].addPayment(payment, _this.product_command);
                    _product_command__WEBPACK_IMPORTED_MODULE_7__["ProductCommand"].updatePaymentStatus(_this.product_command, _this.product_commandService);
                    _this.product_command.payment_status = true;
                    _this.feedback = { type: 'succes', message: "Paiement effectué avec succès : " };
                }, function (error) {
                    alert("Erre");
                    _this.feedback = { type: 'warning', message: "Erreur lors de l'enregistrement du paiement : " };
                });
                setTimeout(function () {
                    _this.feedback = {};
                }, 2000);
                return;
            }
            setTimeout(function () {
                _this.router.navigate(['/stock_operations/productCommands']);
            }, 1000);
        }, function (err) {
            _this.feedback = { type: 'warning', message: "Erreur lors de l'enregistrement : " + err };
        });
    };
    ProductCommandEditComponent.prototype.cancel = function () {
        this.router.navigate(['/stock_operations/productCommands']);
    };
    ProductCommandEditComponent.prototype.providerClick = function (event) {
        this.selectedProvider = event.option.value;
    };
    ProductCommandEditComponent.prototype.checkProvider = function () {
        if (this.product_command._id)
            return;
        if (!this.selectedProvider || this.selectedProvider !== this.providerInput.value) {
            this.providerInput.setValue(null);
            this.selectedProvider = null;
            return;
        }
        this.product_command.provider = this.selectedProvider;
    };
    ProductCommandEditComponent.prototype.displayProvider = function (provider) {
        if (provider)
            return provider.name;
    };
    ProductCommandEditComponent.prototype.configureProviderInput = function () {
        var _this = this;
        this.providerInput = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.providerInput.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () { _this.isLoadingProvider = true; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (value) { return _this.providerService.find(new src_app_partners_provider_provider_filter__WEBPACK_IMPORTED_MODULE_10__["ProviderFilter"](value))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () { return _this.isLoadingProvider = false; })); }))
            .subscribe((function (resultList) {
            caster.arrayCast(resultList, src_app_partners_provider_provider__WEBPACK_IMPORTED_MODULE_9__["Provider"]);
            _this.filteredProviderList = resultList;
        }));
    };
    ProductCommandEditComponent.prototype.makeNow = function () {
        var _this = this;
        if (!confirm("Voulez vous vraiment effectuer la livraison de cette commande maintenant? "))
            return;
        this.product_commandService.save(this.product_command).subscribe(function (product_command) {
            _this.product_command.status = true;
            _this.product_command = product_command;
            _this.feedback = { type: 'success', message: 'Livraison effectuée avec succès ' + _this.product_command.date_finalizing };
            setTimeout(function () {
                _this.router.navigate(['/stock_operations/productCommands']);
            }, 1000);
        }, function (err) {
            _this.product_command.status = false;
            _this.feedback = { type: 'warning', message: "Erreur lors de l'enregistrement : " + err };
        });
    };
    ProductCommandEditComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _product_command_service__WEBPACK_IMPORTED_MODULE_6__["ProductCommandService"] },
        { type: src_app_partners_provider_provider_service__WEBPACK_IMPORTED_MODULE_8__["ProviderService"] },
        { type: _product_command_unit_product_command_unit_service__WEBPACK_IMPORTED_MODULE_12__["ProductCommandUnitService"] },
        { type: _payment_payment_service__WEBPACK_IMPORTED_MODULE_16__["PaymentService"] },
        { type: _params_manager_auth_auth_service__WEBPACK_IMPORTED_MODULE_19__["AuthService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialog"] }
    ]; };
    ProductCommandEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-command-edit',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-command-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/stock_operations/product_command/product-command-edit/product-command-edit.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product-command-edit.scss */ "./src/app/stock_operations/product_command/product-command-edit/product-command-edit.scss")).default]
        })
    ], ProductCommandEditComponent);
    return ProductCommandEditComponent;
}());



/***/ }),

/***/ "./src/app/stock_operations/product_command/product-command-edit/product-command-edit.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/stock_operations/product_command/product-command-edit/product-command-edit.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0b2NrX29wZXJhdGlvbnMvcHJvZHVjdF9jb21tYW5kL3Byb2R1Y3QtY29tbWFuZC1lZGl0L3Byb2R1Y3QtY29tbWFuZC1lZGl0LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/stock_operations/product_command/product-command-filter.ts":
/*!****************************************************************************!*\
  !*** ./src/app/stock_operations/product_command/product-command-filter.ts ***!
  \****************************************************************************/
/*! exports provided: ProductCommandFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCommandFilter", function() { return ProductCommandFilter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var ProductCommandFilter = /** @class */ (function () {
    function ProductCommandFilter() {
        this.provider = '';
        this.date_finalizing = '';
        this.status = '';
    }
    return ProductCommandFilter;
}());



/***/ }),

/***/ "./src/app/stock_operations/product_command/product-command-list/product-command-list.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/stock_operations/product_command/product-command-list/product-command-list.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: ProductCommandListComponent, GsFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCommandListComponent", function() { return ProductCommandListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GsFilter", function() { return GsFilter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _product_command_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product-command-filter */ "./src/app/stock_operations/product_command/product-command-filter.ts");
/* harmony import */ var src_app_partners_provider_provider_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/partners/provider/provider.service */ "./src/app/partners/provider/provider.service.ts");
/* harmony import */ var src_app_partners_provider_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/partners/provider/provider */ "./src/app/partners/provider/provider.ts");
/* harmony import */ var src_app_partners_provider_provider_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/partners/provider/provider-filter */ "./src/app/partners/provider/provider-filter.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _product_command_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../product-command.service */ "./src/app/stock_operations/product_command/product-command.service.ts");
/* harmony import */ var _tools_statistical_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../tools/statistical.service */ "./src/app/tools/statistical.service.ts");











var caster = __webpack_require__(/*! angular-crud/gs-cast */ "./node_modules/angular-crud/gs-cast/index.js");
var ProductCommandListComponent = /** @class */ (function () {
    function ProductCommandListComponent(product_commandService, providerService, statService) {
        this.product_commandService = product_commandService;
        this.providerService = providerService;
        this.statService = statService;
        this.filter = new _product_command_filter__WEBPACK_IMPORTED_MODULE_2__["ProductCommandFilter"]();
        this.feedback = {};
        this.displayedColumns = ['provider', 'amount', 'date_initiating', 'date_finalizing', 'manager', 'status', 'payment_status', 'actions'];
        this.server_processing = false;
        this.filteredProviderList = new Array();
        this.isLoadingProvider = false;
        this.configureAmountStatService();
    }
    ProductCommandListComponent.prototype.providerClick = function (event) {
        this.selectedProvider = event.option.value;
        this.applyFilter();
    };
    ProductCommandListComponent.prototype.checkProvider = function () {
        if (!this.selectedProvider || this.selectedProvider !== this.providerInput.value) {
            this.providerInput.setValue(null);
            this.selectedProvider = null;
            return;
        }
    };
    ProductCommandListComponent.prototype.resetProviderFilter = function () {
        this.selectedProvider = null;
        this.providerInput.setValue(this.selectedProvider);
        this.applyFilter();
    };
    ProductCommandListComponent.prototype.displayProvider = function (provider) {
        if (provider)
            return provider.name;
    };
    ProductCommandListComponent.prototype.configureProviderInput = function () {
        var _this = this;
        this.providerInput = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]();
        this.providerInput.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])(function () { _this.isLoadingProvider = true; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])(function (value) { return _this.providerService.find(new src_app_partners_provider_provider_filter__WEBPACK_IMPORTED_MODULE_5__["ProviderFilter"](value))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () { return _this.isLoadingProvider = false; })); }))
            .subscribe((function (resultList) {
            caster.arrayCast(resultList, src_app_partners_provider_provider__WEBPACK_IMPORTED_MODULE_4__["Provider"]);
            _this.filteredProviderList = resultList;
        }));
    };
    ProductCommandListComponent.prototype.initFilters = function () {
        this.date_finalizingFilter = new GsFilter();
        this.date_finalizingFilter.controls.min = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]();
        this.date_finalizingFilter.controls.max = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]();
        this.date_finalizingFilter.controls.val = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]();
        this.date_initiatingFilter = new GsFilter();
        this.date_initiatingFilter.controls.min = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]();
        this.date_initiatingFilter.controls.max = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]();
        this.date_initiatingFilter.controls.val = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]();
        this.statusFilter = new GsFilter();
        this.statusFilter.controls.val = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]();
        this.pstatusFilter = new GsFilter();
        this.pstatusFilter.controls.val = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]();
        this.filteredValues = { provider: this.selectedProvider,
            date_finalizing: this.date_finalizingFilter.values,
            date_initiating: this.date_initiatingFilter.values,
            status: this.statusFilter.values,
            pstatus: this.pstatusFilter.values,
        };
    };
    ProductCommandListComponent.prototype.applyFilter = function () {
        this.dataSource.filter = JSON.stringify(this.filteredValues);
        this.actualizeStats();
    };
    ProductCommandListComponent.prototype.enableFiltering = function () {
        var _this = this;
        this.date_initiatingFilter.controls.val.valueChanges.subscribe(function (value) { _this.date_initiatingFilter.values.val = value; _this.applyFilter(); });
        this.date_initiatingFilter.controls.min.valueChanges.subscribe(function (value) { _this.date_initiatingFilter.values.min = value; _this.applyFilter(); });
        this.date_initiatingFilter.controls.max.valueChanges.subscribe(function (value) { _this.date_initiatingFilter.values.max = value; _this.applyFilter(); });
        this.date_finalizingFilter.controls.val.valueChanges.subscribe(function (value) { _this.date_finalizingFilter.values.val = value; _this.applyFilter(); });
        this.date_finalizingFilter.controls.min.valueChanges.subscribe(function (value) { _this.date_finalizingFilter.values.min = value; _this.applyFilter(); });
        this.date_finalizingFilter.controls.max.valueChanges.subscribe(function (value) { _this.date_finalizingFilter.values.max = value; _this.applyFilter(); });
        this.statusFilter.controls.val.valueChanges.subscribe(function (value) { _this.statusFilter.values.val = value; _this.applyFilter(); });
        this.pstatusFilter.controls.val.valueChanges.subscribe(function (value) { _this.pstatusFilter.values.val = value; _this.applyFilter(); });
        this.dataSource.filterPredicate =
            function (product_command, filters) {
                var parsedFilters = JSON.parse(filters);
                var providerCheck = true;
                var date_finalizingCheck = true;
                var date_initiatingCheck = true;
                var statusCheck = true;
                var pstatusCheck = true;
                providerCheck = (_this.selectedProvider) ? (_this.selectedProvider._id == product_command.provider._id) : true;
                if (parsedFilters.date_finalizing.val) {
                    var date0 = new Date(parsedFilters.date_finalizing.val), date1 = new Date(product_command.date_finalizing);
                    date_finalizingCheck = !product_command.date_finalizing ? false : date0.getFullYear() == date1.getFullYear() &&
                        date0.getMonth() == date1.getMonth()
                        && date0.getDate() == date1.getDate();
                }
                else {
                    if (parsedFilters.date_finalizing.min) {
                        date_finalizingCheck = date_finalizingCheck && (parsedFilters.date_finalizing.min <= product_command.date_finalizing);
                    }
                    if (parsedFilters.date_finalizing.max) {
                        date_finalizingCheck = date_finalizingCheck && (parsedFilters.date_finalizing.max >= product_command.date_finalizing);
                    }
                }
                if (parsedFilters.date_initiating.val) {
                    var date0 = new Date(parsedFilters.date_initiating.val), date1 = new Date(product_command.date_initiating);
                    date_initiatingCheck = !product_command.date_initiating ? false : date0.getFullYear() == date1.getFullYear() &&
                        date0.getMonth() == date1.getMonth()
                        && date0.getDate() == date1.getDate();
                }
                else {
                    if (parsedFilters.date_initiating.min) {
                        date_initiatingCheck = date_initiatingCheck && (parsedFilters.date_initiating.min <= product_command.date_initiating);
                    }
                    if (parsedFilters.date_initiating.max) {
                        date_initiatingCheck = date_initiatingCheck && (parsedFilters.date_initiating.max >= product_command.date_initiating);
                    }
                }
                if (parsedFilters.pstatus.val != undefined && parsedFilters.pstatus.val != null) {
                    pstatusCheck = (product_command.payment_status == null || product_command.payment_status == undefined) ? false : product_command.payment_status == parsedFilters.pstatus.val;
                }
                if (parsedFilters.status.val != undefined && parsedFilters.status.val != null) {
                    statusCheck = (product_command.status == null || product_command.status == undefined) ? false : product_command.status == parsedFilters.status.val;
                }
                return providerCheck && date_finalizingCheck && date_initiatingCheck && statusCheck && pstatusCheck && true;
            };
    };
    Object.defineProperty(ProductCommandListComponent.prototype, "product_commandList", {
        get: function () {
            return this.product_commandService.product_commandList;
        },
        enumerable: true,
        configurable: true
    });
    ProductCommandListComponent.prototype.ngOnInit = function () {
        this.initFilters();
        this.configureProviderInput();
    };
    ProductCommandListComponent.prototype.ngAfterViewInit = function () {
        this.search();
    };
    ProductCommandListComponent.prototype.configureAmountStatService = function () {
    };
    ProductCommandListComponent.prototype.actualizeStats = function () {
        this.statService.setDatas(this.dataSource.filteredData);
        this.statService.computeSum('amount');
    };
    ProductCommandListComponent.prototype.search = function () {
        var _this = this;
        this.product_commandService.load(this.filter).then(function (data) {
            setTimeout(function () {
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](_this.product_commandService.product_commandList);
                _this.actualizeStats();
                _this.dataSource.sort = _this.sort;
                _this.dataSource.paginator = _this.paginator;
                _this.enableFiltering();
            }, 200);
        });
    };
    ProductCommandListComponent.prototype.select = function (selected) {
        this.selectedProductCommand = selected;
    };
    ProductCommandListComponent.prototype.delete = function (product_command) {
        var _this = this;
        if (confirm('Etes-vous sûr?')) {
            this.product_commandService.delete(product_command).subscribe(function () {
                _this.feedback = { type: 'success', message: 'Suppression effectuée avec succès!' };
                setTimeout(function () {
                    _this.search();
                }, 1000);
            }, function (err) {
                _this.feedback = { type: 'warning', message: 'Erreur lors de la suppression.' };
            });
        }
    };
    ProductCommandListComponent.prototype.livrate = function (product_command) {
        var _this = this;
        if (!confirm("Voulez vous vraiment effectuer la livraison de cette commande maintenant? "))
            return;
        this.product_commandService.save(product_command).subscribe(function (pc) {
            product_command = pc;
            _this.actualizeStats();
            alert("Livraison effectuée avec succès");
        }, function (err) {
            product_command.status = false;
            alert("Erreur lors de livraison de la commande");
        });
    };
    ProductCommandListComponent.ctorParameters = function () { return [
        { type: _product_command_service__WEBPACK_IMPORTED_MODULE_9__["ProductCommandService"] },
        { type: src_app_partners_provider_provider_service__WEBPACK_IMPORTED_MODULE_3__["ProviderService"] },
        { type: _tools_statistical_service__WEBPACK_IMPORTED_MODULE_10__["StatisticalService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"], null)
    ], ProductCommandListComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSort"], null)
    ], ProductCommandListComponent.prototype, "sort", void 0);
    ProductCommandListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-command',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-command-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/stock_operations/product_command/product-command-list/product-command-list.component.html")).default,
            providers: [_tools_statistical_service__WEBPACK_IMPORTED_MODULE_10__["StatisticalService"]],
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product-command-list.scss */ "./src/app/stock_operations/product_command/product-command-list/product-command-list.scss")).default]
        })
    ], ProductCommandListComponent);
    return ProductCommandListComponent;
}());

var GsFilter = /** @class */ (function () {
    function GsFilter() {
        this.values = {
            min: undefined,
            max: undefined,
            val: undefined,
        };
        this.controls = {
            min: null,
            max: null,
            val: null,
        };
    }
    GsFilter.prototype.reset = function () {
        if (this.controls.min)
            this.controls.min.setValue(undefined);
        if (this.controls.max)
            this.controls.max.setValue(undefined);
        if (this.controls.val)
            this.controls.val.setValue(undefined);
    };
    return GsFilter;
}());



/***/ }),

/***/ "./src/app/stock_operations/product_command/product-command-list/product-command-list.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/stock_operations/product_command/product-command-list/product-command-list.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0b2NrX29wZXJhdGlvbnMvcHJvZHVjdF9jb21tYW5kL3Byb2R1Y3QtY29tbWFuZC1saXN0L3Byb2R1Y3QtY29tbWFuZC1saXN0LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/stock_operations/product_command/product-command-print/product-command-print.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/stock_operations/product_command/product-command-print/product-command-print.component.scss ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0b2NrX29wZXJhdGlvbnMvcHJvZHVjdF9jb21tYW5kL3Byb2R1Y3QtY29tbWFuZC1wcmludC9wcm9kdWN0LWNvbW1hbmQtcHJpbnQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/stock_operations/product_command/product-command-print/product-command-print.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/stock_operations/product_command/product-command-print/product-command-print.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: ProductCommandPrintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCommandPrintComponent", function() { return ProductCommandPrintComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");



var ProductCommandPrintComponent = /** @class */ (function () {
    function ProductCommandPrintComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.command = data.command;
    }
    ProductCommandPrintComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    ProductCommandPrintComponent.prototype.ngOnInit = function () {
    };
    ProductCommandPrintComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
    ]; };
    ProductCommandPrintComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-command-print',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-command-print.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/stock_operations/product_command/product-command-print/product-command-print.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product-command-print.component.scss */ "./src/app/stock_operations/product_command/product-command-print/product-command-print.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
    ], ProductCommandPrintComponent);
    return ProductCommandPrintComponent;
}());



/***/ }),

/***/ "./src/app/stock_operations/product_command/product-command.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/stock_operations/product_command/product-command.module.ts ***!
  \****************************************************************************/
/*! exports provided: ProductCommandModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCommandModule", function() { return ProductCommandModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _product_command_list_product_command_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product-command-list/product-command-list.component */ "./src/app/stock_operations/product_command/product-command-list/product-command-list.component.ts");
/* harmony import */ var _product_command_edit_product_command_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product-command-edit/product-command-edit.component */ "./src/app/stock_operations/product_command/product-command-edit/product-command-edit.component.ts");
/* harmony import */ var _product_command_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./product-command.service */ "./src/app/stock_operations/product_command/product-command.service.ts");
/* harmony import */ var _product_command_routes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./product-command.routes */ "./src/app/stock_operations/product_command/product-command.routes.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _product_command_unit_product_command_unit_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./product_command_unit/product-command-unit.module */ "./src/app/stock_operations/product_command/product_command_unit/product-command-unit.module.ts");
/* harmony import */ var _product_command_print_product_command_print_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./product-command-print/product-command-print.component */ "./src/app/stock_operations/product_command/product-command-print/product-command-print.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _payment_payment_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../payment/payment.module */ "./src/app/stock_operations/payment/payment.module.ts");


















var ProductCommandModule = /** @class */ (function () {
    function ProductCommandModule() {
    }
    ProductCommandModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _product_command_unit_product_command_unit_module__WEBPACK_IMPORTED_MODULE_14__["ProductCommandUnitModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatRadioModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _payment_payment_module__WEBPACK_IMPORTED_MODULE_17__["PaymentModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(_product_command_routes__WEBPACK_IMPORTED_MODULE_11__["PRODUCT_COMMAND_ROUTES"])
            ],
            declarations: [
                _product_command_list_product_command_list_component__WEBPACK_IMPORTED_MODULE_8__["ProductCommandListComponent"],
                _product_command_edit_product_command_edit_component__WEBPACK_IMPORTED_MODULE_9__["ProductCommandEditComponent"],
                _product_command_print_product_command_print_component__WEBPACK_IMPORTED_MODULE_15__["ProductCommandPrintComponent"]
            ],
            entryComponents: [_product_command_print_product_command_print_component__WEBPACK_IMPORTED_MODULE_15__["ProductCommandPrintComponent"]],
            providers: [_product_command_service__WEBPACK_IMPORTED_MODULE_10__["ProductCommandService"]],
            exports: []
        })
    ], ProductCommandModule);
    return ProductCommandModule;
}());



/***/ }),

/***/ "./src/app/stock_operations/product_command/product-command.routes.ts":
/*!****************************************************************************!*\
  !*** ./src/app/stock_operations/product_command/product-command.routes.ts ***!
  \****************************************************************************/
/*! exports provided: PRODUCT_COMMAND_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRODUCT_COMMAND_ROUTES", function() { return PRODUCT_COMMAND_ROUTES; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _product_command_list_product_command_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-command-list/product-command-list.component */ "./src/app/stock_operations/product_command/product-command-list/product-command-list.component.ts");
/* harmony import */ var _product_command_edit_product_command_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-command-edit/product-command-edit.component */ "./src/app/stock_operations/product_command/product-command-edit/product-command-edit.component.ts");



var PRODUCT_COMMAND_ROUTES = [
    {
        path: 'stock_operations/productCommands',
        component: _product_command_list_product_command_list_component__WEBPACK_IMPORTED_MODULE_1__["ProductCommandListComponent"]
    },
    {
        path: 'stock_operations/productCommands/:id',
        component: _product_command_edit_product_command_edit_component__WEBPACK_IMPORTED_MODULE_2__["ProductCommandEditComponent"]
    }
];


/***/ }),

/***/ "./src/app/stock_operations/product_command/product-command.service.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/stock_operations/product_command/product-command.service.ts ***!
  \*****************************************************************************/
/*! exports provided: ProductCommandService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCommandService", function() { return ProductCommandService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _product_command__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-command */ "./src/app/stock_operations/product_command/product-command.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _product_command_unit_product_command_unit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product_command_unit/product-command-unit.service */ "./src/app/stock_operations/product_command/product_command_unit/product-command-unit.service.ts");
/* harmony import */ var _stock_class_product_class_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../stock/class_product/class-product.service */ "./src/app/stock/class_product/class-product.service.ts");
/* harmony import */ var _params_manager_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../params/manager/auth/auth.service */ "./src/app/params/manager/auth/auth.service.ts");
/* harmony import */ var _configuration_configuration_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../configuration/configuration.service */ "./src/app/configuration/configuration.service.ts");







var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Accept', 'application/json');

var ProductCommandService = /** @class */ (function () {
    function ProductCommandService(http, configurationService, pcu_service, stock_service, authService) {
        this.http = http;
        this.configurationService = configurationService;
        this.pcu_service = pcu_service;
        this.stock_service = stock_service;
        this.authService = authService;
        this.product_commandList = [];
        this.api = this.configurationService.environment.main_api + '/stock_operations/product_command';
        console.log(this.configurationService.environment);
    }
    ProductCommandService.prototype.findById = function (id) {
        var url = this.api + "/" + id;
        var params = { _id: id };
        return this.http.get(url, { params: params, headers: headers });
    };
    ProductCommandService.prototype.load = function (filter) {
        var p = this;
        return new Promise(function (resolve, reject) {
            p.find(filter).subscribe(function (result) {
                p.product_commandList = result;
                resolve(true);
            }, function (err) {
                reject(err);
                console.error('error loading', err);
            });
        });
    };
    ProductCommandService.prototype.find = function (filter) {
        var params = {
            'provider': filter.provider,
            'date_finalizing': filter.date_finalizing,
            'status': filter.status,
        };
        return this.http.get(this.api, { params: params, headers: headers });
    };
    ProductCommandService.prototype.save = function (command) {
        var entity = new _product_command__WEBPACK_IMPORTED_MODULE_1__["ProductCommand"]();
        Object.assign(entity, command);
        entity.command_units_datasource = null;
        entity.manager = this.authService.active_user;
        entity.command_units = command.command_units_datasource.data;
        entity.date_initiating = new Date();
        entity.command_payments = null;
        ;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
        var url = '';
        if (entity._id) {
            entity.status = true;
            url = this.api + "/" + entity._id.toString();
            params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('ID', entity._id.toString());
            return this.http.put(url, entity, { headers: headers, params: params });
        }
        else {
            url = "" + this.api;
            return this.http.post(url, entity, { headers: headers, params: params });
        }
    };
    ProductCommandService.prototype.close_payments = function (command) {
        var entity = new _product_command__WEBPACK_IMPORTED_MODULE_1__["ProductCommand"]();
        console.log(command);
        Object.assign(entity, command);
        entity.command_units_datasource = null;
        entity.manager = this.authService.active_user;
        entity.date_initiating = new Date();
        entity.command_payments = null;
        entity.payment_status = true;
        ;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
        var url = '';
        entity.status = true;
        url = this.api + "/closepmts/" + entity._id.toString();
        params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('ID', entity._id.toString());
        return this.http.put(url, entity, { headers: headers, params: params });
    };
    ProductCommandService.prototype.delete = function (entity) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
        var url = '';
        if (entity._id) {
            url = this.api + "/" + entity._id.toString();
            params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('ID', entity._id.toString());
            return this.http.delete(url, { headers: headers, params: params });
        }
        return null;
    };
    ProductCommandService.prototype.load_on_comming = function () {
        var url = this.api + "/stats/count_oncomming";
        return this.http.get(url, { headers: headers });
    };
    ProductCommandService.prototype.load_last = function () {
        var url = this.api + "/stats/last";
        return this.http.get(url, { headers: headers });
    };
    ProductCommandService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _configuration_configuration_service__WEBPACK_IMPORTED_MODULE_7__["ConfigurationService"] },
        { type: _product_command_unit_product_command_unit_service__WEBPACK_IMPORTED_MODULE_4__["ProductCommandUnitService"] },
        { type: _stock_class_product_class_product_service__WEBPACK_IMPORTED_MODULE_5__["ClassProductService"] },
        { type: _params_manager_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }
    ]; };
    ProductCommandService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
    ], ProductCommandService);
    return ProductCommandService;
}());



/***/ }),

/***/ "./src/app/stock_operations/product_command/product-command.ts":
/*!*********************************************************************!*\
  !*** ./src/app/stock_operations/product_command/product-command.ts ***!
  \*********************************************************************/
/*! exports provided: ProductCommand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCommand", function() { return ProductCommand; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");


var ProductCommand = /** @class */ (function () {
    function ProductCommand() {
        this.command_units_datasource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](new Array());
        this.command_payments = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](new Array());
        this.amount = 0;
        this.amount_payment = 0;
        this.payment_status = false;
    }
    Object.defineProperty(ProductCommand.prototype, "display", {
        get: function () {
            return 'product_command_display'; // Remplacer avec la chaine que vous souhaitez afficher
        },
        enumerable: true,
        configurable: true
    });
    ProductCommand.prototype.add = function (product_command_unit) {
        this.command_units_datasource.data.push(product_command_unit);
        this.command_units_datasource._updateChangeSubscription();
        this.amount += product_command_unit.unit_price * product_command_unit.quantity;
        console.log(this.command_units_datasource.data);
    };
    ProductCommand.prototype.remove = function (product_command_unit) {
        var index = this.command_units_datasource.data.indexOf(product_command_unit);
        this.command_units_datasource.data.splice(index, 1);
        this.command_units_datasource._updateChangeSubscription();
        this.amount -= product_command_unit.unit_price * product_command_unit.quantity;
    };
    ProductCommand.calculateAmounts = function (product_command) {
        var e_1, _a;
        product_command.amount = 0;
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](product_command.command_units_datasource.data), _c = _b.next(); !_c.done; _c = _b.next()) {
                var pcu = _c.value;
                product_command.amount += pcu.quantity * pcu.unit_price;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    ProductCommand.calculateAmountsPayement = function (product_command) {
        var e_2, _a;
        product_command.amount_payment = 0;
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](product_command.command_payments.data), _c = _b.next(); !_c.done; _c = _b.next()) {
                var py = _c.value;
                product_command.amount_payment += py.amount;
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    ProductCommand.addPayment = function (payment, command) {
        try {
            command.command_payments.data.push(payment);
            ProductCommand.calculateAmountsPayement(command);
        }
        catch (err) {
            throw (err);
        }
    };
    ProductCommand.updatePaymentStatus = function (product_command, productCommandService) {
        if (product_command.payment_status == true)
            return;
        if (product_command.amount_payment == product_command.amount) {
            product_command.payment_status = true;
            productCommandService.close_payments(product_command).subscribe(function (data) {
                product_command.payment_status = true;
            }, function (err) {
                console.log(err);
                throw (err);
                product_command.payment_status = false;
            });
        }
    };
    return ProductCommand;
}());



/***/ }),

/***/ "./src/app/stock_operations/product_command/product_command_unit/product-command-unit-edit/product-command-unit-edit.component.ts":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/stock_operations/product_command/product_command_unit/product-command-unit-edit/product-command-unit-edit.component.ts ***!
  \****************************************************************************************************************************************/
/*! exports provided: ProductCommandUnitEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCommandUnitEditComponent", function() { return ProductCommandUnitEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _product_command_unit_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../product-command-unit.service */ "./src/app/stock_operations/product_command/product_command_unit/product-command-unit.service.ts");
/* harmony import */ var _product_command_unit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../product-command-unit */ "./src/app/stock_operations/product_command/product_command_unit/product-command-unit.ts");
/* harmony import */ var src_app_stock_product_product_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/stock/product/product.service */ "./src/app/stock/product/product.service.ts");
/* harmony import */ var src_app_stock_product_product__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/stock/product/product */ "./src/app/stock/product/product.ts");
/* harmony import */ var src_app_stock_product_product_filter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/stock/product/product-filter */ "./src/app/stock/product/product-filter.ts");
/* harmony import */ var src_app_stock_operations_product_command_product_command__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/stock_operations/product_command/product-command */ "./src/app/stock_operations/product_command/product-command.ts");
/* harmony import */ var src_app_stock_operations_product_command_product_command_filter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/stock_operations/product_command/product-command-filter */ "./src/app/stock_operations/product_command/product-command-filter.ts");
/* harmony import */ var _product_command_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../product-command.service */ "./src/app/stock_operations/product_command/product-command.service.ts");













var caster = __webpack_require__(/*! angular-crud/gs-cast */ "./node_modules/angular-crud/gs-cast/index.js");
var ProductCommandUnitEditComponent = /** @class */ (function () {
    function ProductCommandUnitEditComponent(route, router, product_command_unitService, productService, product_commandService) {
        this.route = route;
        this.router = router;
        this.product_command_unitService = product_command_unitService;
        this.productService = productService;
        this.product_commandService = product_commandService;
        this.feedback = {};
        this.filteredProductList = new Array();
        this.isLoadingProduct = false;
        this.filteredProductCommandList = new Array();
        this.isLoadingProductCommand = false;
    }
    ProductCommandUnitEditComponent.prototype.ngOnInit = function () {
        this.product_command_unit = new _product_command_unit__WEBPACK_IMPORTED_MODULE_6__["ProductCommandUnit"]();
        this.configureProductInput();
        this.configureProductCommandInput();
    };
    ProductCommandUnitEditComponent.prototype.add = function () {
        this.product_command.add(this.product_command_unit);
        this.ngOnInit();
    };
    ProductCommandUnitEditComponent.prototype.cancel = function () {
        this.router.navigate(['/stock_operations/product_command/productCommandUnits']);
    };
    ProductCommandUnitEditComponent.prototype.productClick = function (event) {
        this.selectedProduct = event.option.value;
    };
    ProductCommandUnitEditComponent.prototype.checkProduct = function () {
        if (!this.selectedProduct || this.selectedProduct !== this.productInput.value) {
            this.productInput.setValue(null);
            this.selectedProduct = null;
            return;
        }
        this.product_command_unit.product_class.product = this.selectedProduct;
    };
    ProductCommandUnitEditComponent.prototype.displayProduct = function (product) {
        if (product)
            return product.name;
    };
    ProductCommandUnitEditComponent.prototype.configureProductInput = function () {
        var _this = this;
        this.productInput = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.productInput.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () { _this.isLoadingProduct = true; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (value) { return _this.productService.find(new src_app_stock_product_product_filter__WEBPACK_IMPORTED_MODULE_9__["ProductFilter"](value))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () { return _this.isLoadingProduct = false; })); }))
            .subscribe((function (resultList) {
            caster.arrayCast(resultList, src_app_stock_product_product__WEBPACK_IMPORTED_MODULE_8__["Product"]);
            _this.filteredProductList = resultList;
        }));
    };
    ProductCommandUnitEditComponent.prototype.product_commandClick = function (event) {
        this.selectedProductCommand = event.option.value;
    };
    ProductCommandUnitEditComponent.prototype.checkProductCommand = function () {
        if (!this.selectedProductCommand || this.selectedProductCommand !== this.product_commandInput.value) {
            this.product_commandInput.setValue(null);
            this.selectedProductCommand = null;
            return;
        }
    };
    ProductCommandUnitEditComponent.prototype.displayProductCommand = function (product_command) {
        if (product_command)
            return product_command;
    };
    ProductCommandUnitEditComponent.prototype.configureProductCommandInput = function () {
        var _this = this;
        this.product_commandInput = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.product_commandInput.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () { _this.isLoadingProductCommand = true; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (value) { return _this.product_commandService.find(new src_app_stock_operations_product_command_product_command_filter__WEBPACK_IMPORTED_MODULE_11__["ProductCommandFilter"]())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () { return _this.isLoadingProductCommand = false; })); }))
            .subscribe((function (resultList) {
            caster.arrayCast(resultList, src_app_stock_operations_product_command_product_command__WEBPACK_IMPORTED_MODULE_10__["ProductCommand"]);
            _this.filteredProductCommandList = resultList;
        }));
    };
    ProductCommandUnitEditComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _product_command_unit_service__WEBPACK_IMPORTED_MODULE_5__["ProductCommandUnitService"] },
        { type: src_app_stock_product_product_service__WEBPACK_IMPORTED_MODULE_7__["ProductService"] },
        { type: _product_command_service__WEBPACK_IMPORTED_MODULE_12__["ProductCommandService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ProductCommandUnitEditComponent.prototype, "product_command", void 0);
    ProductCommandUnitEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-command-unit-edit',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-command-unit-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/stock_operations/product_command/product_command_unit/product-command-unit-edit/product-command-unit-edit.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product-command-unit-edit.scss */ "./src/app/stock_operations/product_command/product_command_unit/product-command-unit-edit/product-command-unit-edit.scss")).default]
        })
    ], ProductCommandUnitEditComponent);
    return ProductCommandUnitEditComponent;
}());



/***/ }),

/***/ "./src/app/stock_operations/product_command/product_command_unit/product-command-unit-edit/product-command-unit-edit.scss":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/stock_operations/product_command/product_command_unit/product-command-unit-edit/product-command-unit-edit.scss ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-option {\n  height: auto;\n  border: 1px;\n  border-style: inset;\n  border-radius: 0.1em;\n}\n\n.card-option div {\n  border-width: 0.5px;\n  border-color: darkslategrey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RvY2tfb3BlcmF0aW9ucy9wcm9kdWN0X2NvbW1hbmQvcHJvZHVjdF9jb21tYW5kX3VuaXQvcHJvZHVjdC1jb21tYW5kLXVuaXQtZWRpdC9COlxcUHJvamV0c1xcR2VzdGlvbiBkZSBCb3V0aXF1ZVxcZ3Nfc3RvY2tcXEFQUC9zcmNcXGFwcFxcc3RvY2tfb3BlcmF0aW9uc1xccHJvZHVjdF9jb21tYW5kXFxwcm9kdWN0X2NvbW1hbmRfdW5pdFxccHJvZHVjdC1jb21tYW5kLXVuaXQtZWRpdFxccHJvZHVjdC1jb21tYW5kLXVuaXQtZWRpdC5zY3NzIiwic3JjL2FwcC9zdG9ja19vcGVyYXRpb25zL3Byb2R1Y3RfY29tbWFuZC9wcm9kdWN0X2NvbW1hbmRfdW5pdC9wcm9kdWN0LWNvbW1hbmQtdW5pdC1lZGl0L3Byb2R1Y3QtY29tbWFuZC11bml0LWVkaXQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0UsbUJBQUE7RUFDQSxvQkFBQTtBQ0NGOztBREVBO0VBRUUsbUJBQUE7RUFDQSwyQkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvc3RvY2tfb3BlcmF0aW9ucy9wcm9kdWN0X2NvbW1hbmQvcHJvZHVjdF9jb21tYW5kX3VuaXQvcHJvZHVjdC1jb21tYW5kLXVuaXQtZWRpdC9wcm9kdWN0LWNvbW1hbmQtdW5pdC1lZGl0LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1vcHRpb24ge1xyXG5oZWlnaHQ6YXV0bztcclxuYm9yZGVyOiAxcHg7XHJcbiAgYm9yZGVyLXN0eWxlOiBpbnNldDtcclxuICBib3JkZXItcmFkaXVzOjAuMWVtO1xyXG59XHJcblxyXG4uY2FyZC1vcHRpb24gZGl2IHtcclxuXHJcbiAgYm9yZGVyLXdpZHRoOiAwLjVweDtcclxuICBib3JkZXItY29sb3I6IGRhcmtzbGF0ZWdyZXk7XHJcblxyXG59XHJcblxyXG4uY2FyZC1vcHRpb24gOmhvdmVyIHtcclxuXHJcbn1cclxuIiwiLmNhcmQtb3B0aW9uIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3JkZXI6IDFweDtcbiAgYm9yZGVyLXN0eWxlOiBpbnNldDtcbiAgYm9yZGVyLXJhZGl1czogMC4xZW07XG59XG5cbi5jYXJkLW9wdGlvbiBkaXYge1xuICBib3JkZXItd2lkdGg6IDAuNXB4O1xuICBib3JkZXItY29sb3I6IGRhcmtzbGF0ZWdyZXk7XG59Il19 */");

/***/ }),

/***/ "./src/app/stock_operations/product_command/product_command_unit/product-command-unit-filter.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/stock_operations/product_command/product_command_unit/product-command-unit-filter.ts ***!
  \******************************************************************************************************/
/*! exports provided: ProductCommandUnitFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCommandUnitFilter", function() { return ProductCommandUnitFilter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var ProductCommandUnitFilter = /** @class */ (function () {
    function ProductCommandUnitFilter() {
    }
    return ProductCommandUnitFilter;
}());



/***/ }),

/***/ "./src/app/stock_operations/product_command/product_command_unit/product-command-unit-list/product-command-unit-list.component.ts":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/stock_operations/product_command/product_command_unit/product-command-unit-list/product-command-unit-list.component.ts ***!
  \****************************************************************************************************************************************/
/*! exports provided: ProductCommandUnitListComponent, GsFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCommandUnitListComponent", function() { return ProductCommandUnitListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GsFilter", function() { return GsFilter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _product_command_unit_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product-command-unit-filter */ "./src/app/stock_operations/product_command/product_command_unit/product-command-unit-filter.ts");
/* harmony import */ var _product_command_unit_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../product-command-unit.service */ "./src/app/stock_operations/product_command/product_command_unit/product-command-unit.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");





var caster = __webpack_require__(/*! angular-crud/gs-cast */ "./node_modules/angular-crud/gs-cast/index.js");
var ProductCommandUnitListComponent = /** @class */ (function () {
    function ProductCommandUnitListComponent(product_command_unitService) {
        this.product_command_unitService = product_command_unitService;
        this.filter = new _product_command_unit_filter__WEBPACK_IMPORTED_MODULE_2__["ProductCommandUnitFilter"]();
        this.print_mode = false;
        this.feedback = {};
        this.displayedColumns = ['product', 'quantity', 'unit_price', 'total', 'actions'];
        this.server_processing = false;
    }
    ProductCommandUnitListComponent.prototype.initFilters = function () {
        this.filteredValues = {};
    };
    ProductCommandUnitListComponent.prototype.applyFilter = function () {
        this.dataSource.filter = JSON.stringify(this.filteredValues);
    };
    ProductCommandUnitListComponent.prototype.enableFiltering = function () {
        this.dataSource.filterPredicate =
            function (product_command_unit, filters) {
                var parsedFilters = JSON.parse(filters);
                return true;
            };
    };
    Object.defineProperty(ProductCommandUnitListComponent.prototype, "product_command_unitList", {
        get: function () {
            return this.product_command_unitService.product_command_unitList;
        },
        enumerable: true,
        configurable: true
    });
    ProductCommandUnitListComponent.prototype.ngOnInit = function () {
        this.initData();
        this.initFilters();
    };
    ProductCommandUnitListComponent.prototype.ngAfterViewInit = function () {
    };
    ProductCommandUnitListComponent.prototype.initData = function () {
        this.dataSource = this.command.command_units_datasource;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.enableFiltering();
    };
    ;
    ProductCommandUnitListComponent.prototype.select = function (selected) {
        this.selectedProductCommandUnit = selected;
    };
    ;
    ProductCommandUnitListComponent.prototype.remove = function (product_command_unit) {
        if (!confirm("Voulez-vous vraiment supprimer?"))
            return;
        this.command.remove(product_command_unit);
    };
    ;
    ProductCommandUnitListComponent.ctorParameters = function () { return [
        { type: _product_command_unit_service__WEBPACK_IMPORTED_MODULE_3__["ProductCommandUnitService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], null)
    ], ProductCommandUnitListComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"], null)
    ], ProductCommandUnitListComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ProductCommandUnitListComponent.prototype, "command", void 0);
    ProductCommandUnitListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-command-unit',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-command-unit-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/stock_operations/product_command/product_command_unit/product-command-unit-list/product-command-unit-list.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product-command-unit-list.scss */ "./src/app/stock_operations/product_command/product_command_unit/product-command-unit-list/product-command-unit-list.scss")).default]
        })
    ], ProductCommandUnitListComponent);
    return ProductCommandUnitListComponent;
}());

var GsFilter = /** @class */ (function () {
    function GsFilter() {
        this.values = {
            min: undefined,
            max: undefined,
            val: undefined,
        };
        this.controls = {
            min: null,
            max: null,
            val: null,
        };
    }
    GsFilter.prototype.reset = function () {
        if (this.controls.min) {
            this.controls.min.setValue(undefined);
        }
        if (this.controls.max) {
            this.controls.max.setValue(undefined);
        }
        if (this.controls.val) {
            this.controls.val.setValue(undefined);
        }
    };
    return GsFilter;
}());



/***/ }),

/***/ "./src/app/stock_operations/product_command/product_command_unit/product-command-unit-list/product-command-unit-list.scss":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/stock_operations/product_command/product_command_unit/product-command-unit-list/product-command-unit-list.scss ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0b2NrX29wZXJhdGlvbnMvcHJvZHVjdF9jb21tYW5kL3Byb2R1Y3RfY29tbWFuZF91bml0L3Byb2R1Y3QtY29tbWFuZC11bml0LWxpc3QvcHJvZHVjdC1jb21tYW5kLXVuaXQtbGlzdC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/stock_operations/product_command/product_command_unit/product-command-unit.module.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/stock_operations/product_command/product_command_unit/product-command-unit.module.ts ***!
  \******************************************************************************************************/
/*! exports provided: ProductCommandUnitModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCommandUnitModule", function() { return ProductCommandUnitModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _product_command_unit_list_product_command_unit_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product-command-unit-list/product-command-unit-list.component */ "./src/app/stock_operations/product_command/product_command_unit/product-command-unit-list/product-command-unit-list.component.ts");
/* harmony import */ var _product_command_unit_edit_product_command_unit_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product-command-unit-edit/product-command-unit-edit.component */ "./src/app/stock_operations/product_command/product_command_unit/product-command-unit-edit/product-command-unit-edit.component.ts");
/* harmony import */ var _product_command_unit_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./product-command-unit.service */ "./src/app/stock_operations/product_command/product_command_unit/product-command-unit.service.ts");
/* harmony import */ var _product_command_unit_routes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./product-command-unit.routes */ "./src/app/stock_operations/product_command/product_command_unit/product-command-unit.routes.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");














var ProductCommandUnitModule = /** @class */ (function () {
    function ProductCommandUnitModule() {
    }
    ProductCommandUnitModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatRadioModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(_product_command_unit_routes__WEBPACK_IMPORTED_MODULE_11__["PRODUCT_COMMAND_UNIT_ROUTES"])
            ],
            declarations: [
                _product_command_unit_list_product_command_unit_list_component__WEBPACK_IMPORTED_MODULE_8__["ProductCommandUnitListComponent"],
                _product_command_unit_edit_product_command_unit_edit_component__WEBPACK_IMPORTED_MODULE_9__["ProductCommandUnitEditComponent"]
            ],
            providers: [_product_command_unit_service__WEBPACK_IMPORTED_MODULE_10__["ProductCommandUnitService"]],
            exports: [_product_command_unit_edit_product_command_unit_edit_component__WEBPACK_IMPORTED_MODULE_9__["ProductCommandUnitEditComponent"], _product_command_unit_list_product_command_unit_list_component__WEBPACK_IMPORTED_MODULE_8__["ProductCommandUnitListComponent"]]
        })
    ], ProductCommandUnitModule);
    return ProductCommandUnitModule;
}());



/***/ }),

/***/ "./src/app/stock_operations/product_command/product_command_unit/product-command-unit.routes.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/stock_operations/product_command/product_command_unit/product-command-unit.routes.ts ***!
  \******************************************************************************************************/
/*! exports provided: PRODUCT_COMMAND_UNIT_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRODUCT_COMMAND_UNIT_ROUTES", function() { return PRODUCT_COMMAND_UNIT_ROUTES; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _product_command_unit_list_product_command_unit_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-command-unit-list/product-command-unit-list.component */ "./src/app/stock_operations/product_command/product_command_unit/product-command-unit-list/product-command-unit-list.component.ts");
/* harmony import */ var _product_command_unit_edit_product_command_unit_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-command-unit-edit/product-command-unit-edit.component */ "./src/app/stock_operations/product_command/product_command_unit/product-command-unit-edit/product-command-unit-edit.component.ts");



var PRODUCT_COMMAND_UNIT_ROUTES = [
    {
        path: 'stock_operations/product_command/productCommandUnits',
        component: _product_command_unit_list_product_command_unit_list_component__WEBPACK_IMPORTED_MODULE_1__["ProductCommandUnitListComponent"]
    },
    {
        path: 'stock_operations/product_command/productCommandUnits/:id',
        component: _product_command_unit_edit_product_command_unit_edit_component__WEBPACK_IMPORTED_MODULE_2__["ProductCommandUnitEditComponent"]
    }
];


/***/ }),

/***/ "./src/app/stock_operations/product_command/product_command_unit/product-command-unit.service.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/stock_operations/product_command/product_command_unit/product-command-unit.service.ts ***!
  \*******************************************************************************************************/
/*! exports provided: ProductCommandUnitService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCommandUnitService", function() { return ProductCommandUnitService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _configuration_configuration_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../configuration/configuration.service */ "./src/app/configuration/configuration.service.ts");



var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Accept', 'application/json');

var ProductCommandUnitService = /** @class */ (function () {
    function ProductCommandUnitService(http, configurationService) {
        this.http = http;
        this.configurationService = configurationService;
        this.product_command_unitList = [];
        this.api = this.configurationService.environment.main_api + '/stock_operations/product_command_unit';
        console.log(this.configurationService.environment);
    }
    ProductCommandUnitService.prototype.findById = function (id) {
        var url = this.api + "/" + id;
        var params = { _id: id };
        return this.http.get(url, { params: params, headers: headers });
    };
    ProductCommandUnitService.prototype.findByProductClass = function (id) {
        var url = this.api + "/product_class/" + id;
        var params = { _id: id };
        return this.http.get(url, { params: params, headers: headers });
    };
    ProductCommandUnitService.prototype.load = function (filter) {
        var p = this;
        return new Promise(function (resolve, reject) {
            p.find(filter).subscribe(function (result) {
                p.product_command_unitList = result;
                resolve(true);
            }, function (err) {
                reject(err);
                console.error('error loading', err);
            });
        });
    };
    ProductCommandUnitService.prototype.find = function (filter) {
        var url = this.api + "/" + filter.command;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("command", filter.command);
        return this.http.get(url, { params: params, headers: headers });
    };
    ProductCommandUnitService.prototype.save = function (entity) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var url = '';
        if (entity._id) {
            url = this.api + "/" + entity._id.toString();
            params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('ID', entity._id.toString());
            return this.http.put(url, entity, { headers: headers, params: params });
        }
        else {
            url = "" + this.api;
            return this.http.post(url, entity, { headers: headers, params: params });
        }
    };
    ProductCommandUnitService.prototype.delete = function (entity) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var url = '';
        if (entity._id) {
            url = this.api + "/" + entity._id.toString();
            params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('ID', entity._id.toString());
            return this.http.delete(url, { headers: headers, params: params });
        }
        return null;
    };
    ProductCommandUnitService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _configuration_configuration_service__WEBPACK_IMPORTED_MODULE_3__["ConfigurationService"] }
    ]; };
    ProductCommandUnitService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ProductCommandUnitService);
    return ProductCommandUnitService;
}());



/***/ }),

/***/ "./src/app/stock_operations/product_command/product_command_unit/product-command-unit.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/stock_operations/product_command/product_command_unit/product-command-unit.ts ***!
  \***********************************************************************************************/
/*! exports provided: ProductCommandUnit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCommandUnit", function() { return ProductCommandUnit; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _stock_class_product_class_product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../stock/class_product/class-product */ "./src/app/stock/class_product/class-product.ts");


var ProductCommandUnit = /** @class */ (function () {
    function ProductCommandUnit() {
        this.product_class = new _stock_class_product_class_product__WEBPACK_IMPORTED_MODULE_1__["ClassProduct"]();
    }
    Object.defineProperty(ProductCommandUnit.prototype, "display", {
        get: function () {
            return 'product_command_unit_display'; // Remplacer avec la chaine que vous souhaitez afficher
        },
        enumerable: true,
        configurable: true
    });
    return ProductCommandUnit;
}());



/***/ }),

/***/ "./src/app/stock_operations/sale/sale-edit/sale-edit.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/stock_operations/sale/sale-edit/sale-edit.component.ts ***!
  \************************************************************************/
/*! exports provided: SaleEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaleEditComponent", function() { return SaleEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _sale_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sale.service */ "./src/app/stock_operations/sale/sale.service.ts");
/* harmony import */ var _sale__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sale */ "./src/app/stock_operations/sale/sale.ts");
/* harmony import */ var src_app_partners_customer_customer_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/partners/customer/customer.service */ "./src/app/partners/customer/customer.service.ts");
/* harmony import */ var src_app_partners_customer_customer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/partners/customer/customer */ "./src/app/partners/customer/customer.ts");
/* harmony import */ var src_app_partners_customer_customer_filter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/partners/customer/customer-filter */ "./src/app/partners/customer/customer-filter.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _sale_unit_sale_unit_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../sale_unit/sale-unit.service */ "./src/app/stock_operations/sale/sale_unit/sale-unit.service.ts");
/* harmony import */ var _sale_unit_sale_unit_filter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../sale_unit/sale-unit-filter */ "./src/app/stock_operations/sale/sale_unit/sale-unit-filter.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _sale_print_sale_print_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../sale-print/sale-print.component */ "./src/app/stock_operations/sale/sale-print/sale-print.component.ts");
/* harmony import */ var _payment_payment_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../payment/payment.service */ "./src/app/stock_operations/payment/payment.service.ts");
/* harmony import */ var _payment_payment_filter__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../payment/payment-filter */ "./src/app/stock_operations/payment/payment-filter.ts");
/* harmony import */ var _payment_payment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../payment/payment */ "./src/app/stock_operations/payment/payment.ts");
/* harmony import */ var _params_manager_auth_auth_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../params/manager/auth/auth.service */ "./src/app/params/manager/auth/auth.service.ts");







var caster = __webpack_require__(/*! angular-crud/gs-cast */ "./node_modules/angular-crud/gs-cast/index.js");














var SaleEditComponent = /** @class */ (function () {
    function SaleEditComponent(route, router, saleService, customerService, pcu_service, paymentService, authService, matDialog) {
        this.route = route;
        this.router = router;
        this.saleService = saleService;
        this.customerService = customerService;
        this.pcu_service = pcu_service;
        this.paymentService = paymentService;
        this.authService = authService;
        this.matDialog = matDialog;
        this.sale = new _sale__WEBPACK_IMPORTED_MODULE_7__["Sale"]();
        this.feedback = {};
        this.filteredCustomerList = new Array();
        this.isLoadingCustomer = false;
    }
    SaleEditComponent.prototype.visualize = function () {
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialogConfig"]();
        // The user can't close the dialog by clicking outside its bo
        dialogConfig.disableClose = false;
        dialogConfig.id = "modal-component";
        dialogConfig.height = "90vh";
        dialogConfig.width = "60vh";
        dialogConfig.data = {
            sale: this.sale
        };
        // https://material.angular.io/components/dialog/overview
        var modalDialog = this.matDialog.open(_sale_print_sale_print_component__WEBPACK_IMPORTED_MODULE_15__["SalePrintComponent"], dialogConfig);
    };
    SaleEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this
            .route
            .params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (p) { return p.id; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (id) {
            if (id === 'new') {
                var sale = new _sale__WEBPACK_IMPORTED_MODULE_7__["Sale"];
                sale.date_finalizing = new Date();
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _sale__WEBPACK_IMPORTED_MODULE_7__["Sale"]());
            }
            return _this.saleService.findById(id);
        }))
            .subscribe(function (sale) {
            _this.sale = sale;
            if (!sale._id) {
                _this.sale.sale_units_datasource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableDataSource"](new Array());
                _this.sale.date_finalizing = new Date();
            }
            else {
                var filter = new _sale_unit_sale_unit_filter__WEBPACK_IMPORTED_MODULE_13__["SaleUnitFilter"]();
                filter.sale = _this.sale._id;
                _this.customerInput.setValue(_this.sale.customer);
                _this.pcu_service.find(filter).subscribe(function (data) {
                    _this.sale.sale_units_datasource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableDataSource"](data);
                    _sale__WEBPACK_IMPORTED_MODULE_7__["Sale"].calculateAmounts(_this.sale);
                }, function (error) { return _this.feedback = { type: 'warning', message: 'Erreur lors du chargement des produits de la vente' }; });
                var filter2 = new _payment_payment_filter__WEBPACK_IMPORTED_MODULE_17__["PaymentFilter"]();
                filter2.sale = _this.sale._id;
                _this.paymentService.find(filter2).subscribe(function (data) {
                    _this.sale.sale_payments = new _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableDataSource"](data);
                    _sale__WEBPACK_IMPORTED_MODULE_7__["Sale"].calculateAmountsPayement(_this.sale);
                }, function (error) { return _this.feedback = { type: 'warning', message: 'Erreur lors de la liste des paiements' }; });
                _this.feedback = {};
            }
        }, function (err) {
            _this.feedback = { type: 'warning', message: 'Erreur lors du chargement' };
        });
        this.configureCustomerInput();
    };
    SaleEditComponent.prototype.save = function () {
        var _this = this;
        this.saleService.save(this.sale).subscribe(function (sale) {
            _this.sale._id = sale._id;
            _this.sale.sale_payments = new _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableDataSource"](new Array());
            _this.feedback = { type: 'success', message: 'Commmande enregistrée avec succès; La livraison est prévue pour le :' + sale.date_finalizing };
            if (confirm("Voulez-vous régler le paiement de cette vente maintenant?")) {
                var payment = new _payment_payment__WEBPACK_IMPORTED_MODULE_18__["Payment"]();
                payment.manager = _this.authService.active_user;
                payment.amount = _this.sale.amount;
                payment.sale = _this.sale;
                payment.date = new Date();
                _this.paymentService.save(payment).subscribe(function (data) {
                    _sale__WEBPACK_IMPORTED_MODULE_7__["Sale"].addPayment(payment, _this.sale);
                    _sale__WEBPACK_IMPORTED_MODULE_7__["Sale"].updatePaymentStatus(_this.sale, _this.saleService);
                    _this.feedback = { type: 'succes', message: "Paiement effectué avec succès : " };
                }, function (error) {
                    _this.feedback = { type: 'warning', message: "Erreur lors de l'enregistrement du paiement : " };
                });
                setTimeout(function () {
                    _this.router.navigate(['/stock_operations/sales/', sale._id]);
                    _this.feedback = {};
                }, 500);
                return;
            }
            setTimeout(function () {
                //    this.router.navigate(['/stock_operations/sales']);
            }, 1000);
        }, function (err) {
            _this.feedback = { type: 'warning', message: "Erreur lors de l'enregistrement : " + err };
        });
    };
    SaleEditComponent.prototype.cancel = function () {
        this.router.navigate(['/stock_operations/sales']);
    };
    SaleEditComponent.prototype.customerClick = function (event) {
        this.selectedCustomer = event.option.value;
    };
    SaleEditComponent.prototype.checkCustomer = function () {
        if (this.sale._id)
            return;
        if (!this.selectedCustomer || this.selectedCustomer !== this.customerInput.value) {
            this.customerInput.setValue(null);
            this.selectedCustomer = null;
            return;
        }
        this.sale.customer = this.selectedCustomer;
    };
    SaleEditComponent.prototype.displayCustomer = function (customer) {
        if (customer)
            return customer.name;
    };
    SaleEditComponent.prototype.configureCustomerInput = function () {
        var _this = this;
        this.customerInput = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.customerInput.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () { _this.isLoadingCustomer = true; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (value) { return _this.customerService.find(new src_app_partners_customer_customer_filter__WEBPACK_IMPORTED_MODULE_10__["CustomerFilter"](value))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () { return _this.isLoadingCustomer = false; })); }))
            .subscribe((function (resultList) {
            caster.arrayCast(resultList, src_app_partners_customer_customer__WEBPACK_IMPORTED_MODULE_9__["Customer"]);
            _this.filteredCustomerList = resultList;
        }));
    };
    SaleEditComponent.prototype.makeNow = function () {
        var _this = this;
        if (!confirm("Voulez vous vraiment effectuer la livraison de cette vente maintenant? "))
            return;
        this.saleService.save(this.sale).subscribe(function (sale) {
            _this.sale = sale;
            _this.feedback = { type: 'success', message: 'Livraison effectuée avec succès ' + _this.sale.date_finalizing };
            setTimeout(function () {
                _this.router.navigate(['/stock_operations/sales/', sale._id]);
            }, 1000);
        }, function (err) {
            _this.sale.status = false;
            _this.feedback = { type: 'warning', message: "Erreur lors de l'enregistrement : " + err };
        });
    };
    SaleEditComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _sale_service__WEBPACK_IMPORTED_MODULE_6__["SaleService"] },
        { type: src_app_partners_customer_customer_service__WEBPACK_IMPORTED_MODULE_8__["CustomerService"] },
        { type: _sale_unit_sale_unit_service__WEBPACK_IMPORTED_MODULE_12__["SaleUnitService"] },
        { type: _payment_payment_service__WEBPACK_IMPORTED_MODULE_16__["PaymentService"] },
        { type: _params_manager_auth_auth_service__WEBPACK_IMPORTED_MODULE_19__["AuthService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialog"] }
    ]; };
    SaleEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sale-edit',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sale-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/stock_operations/sale/sale-edit/sale-edit.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sale-edit.scss */ "./src/app/stock_operations/sale/sale-edit/sale-edit.scss")).default]
        })
    ], SaleEditComponent);
    return SaleEditComponent;
}());

0;


/***/ }),

/***/ "./src/app/stock_operations/sale/sale-edit/sale-edit.scss":
/*!****************************************************************!*\
  !*** ./src/app/stock_operations/sale/sale-edit/sale-edit.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0b2NrX29wZXJhdGlvbnMvc2FsZS9zYWxlLWVkaXQvc2FsZS1lZGl0LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/stock_operations/sale/sale-filter.ts":
/*!******************************************************!*\
  !*** ./src/app/stock_operations/sale/sale-filter.ts ***!
  \******************************************************/
/*! exports provided: SaleFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaleFilter", function() { return SaleFilter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var SaleFilter = /** @class */ (function () {
    function SaleFilter() {
        this.customer = '';
        this.date_finalizing = '';
        this.status = '';
    }
    return SaleFilter;
}());



/***/ }),

/***/ "./src/app/stock_operations/sale/sale-list/sale-list.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/stock_operations/sale/sale-list/sale-list.component.ts ***!
  \************************************************************************/
/*! exports provided: SaleListComponent, GsFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaleListComponent", function() { return SaleListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GsFilter", function() { return GsFilter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sale_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sale-filter */ "./src/app/stock_operations/sale/sale-filter.ts");
/* harmony import */ var _sale_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sale.service */ "./src/app/stock_operations/sale/sale.service.ts");
/* harmony import */ var src_app_partners_customer_customer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/partners/customer/customer.service */ "./src/app/partners/customer/customer.service.ts");
/* harmony import */ var src_app_partners_customer_customer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/partners/customer/customer */ "./src/app/partners/customer/customer.ts");
/* harmony import */ var src_app_partners_customer_customer_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/partners/customer/customer-filter */ "./src/app/partners/customer/customer-filter.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _tools_statistical_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../tools/statistical.service */ "./src/app/tools/statistical.service.ts");









var caster = __webpack_require__(/*! angular-crud/gs-cast */ "./node_modules/angular-crud/gs-cast/index.js");


var SaleListComponent = /** @class */ (function () {
    function SaleListComponent(saleService, customerService, statService) {
        this.saleService = saleService;
        this.customerService = customerService;
        this.statService = statService;
        this.filter = new _sale_filter__WEBPACK_IMPORTED_MODULE_2__["SaleFilter"]();
        this.feedback = {};
        this.displayedColumns = ['customer', 'amount', 'date_initiating', 'date_finalizing', 'manager', 'status', 'payment_status', 'actions'];
        this.server_processing = false;
        this.filteredCustomerList = new Array();
        this.isLoadingCustomer = false;
    }
    SaleListComponent.prototype.customerClick = function (event) {
        this.selectedCustomer = event.option.value;
        this.applyFilter();
    };
    SaleListComponent.prototype.checkCustomer = function () {
        if (!this.selectedCustomer || this.selectedCustomer !== this.customerInput.value) {
            this.customerInput.setValue(null);
            this.selectedCustomer = null;
            return;
        }
    };
    SaleListComponent.prototype.resetCustomerFilter = function () {
        this.selectedCustomer = null;
        this.customerInput.setValue(this.selectedCustomer);
        this.applyFilter();
    };
    SaleListComponent.prototype.displayCustomer = function (customer) {
        if (customer)
            return customer.name;
    };
    SaleListComponent.prototype.configureCustomerInput = function () {
        var _this = this;
        this.customerInput = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]();
        this.customerInput.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["tap"])(function () { _this.isLoadingCustomer = true; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["switchMap"])(function (value) { return _this.customerService.find(new src_app_partners_customer_customer_filter__WEBPACK_IMPORTED_MODULE_6__["CustomerFilter"](value))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(function () { return _this.isLoadingCustomer = false; })); }))
            .subscribe((function (resultList) {
            caster.arrayCast(resultList, src_app_partners_customer_customer__WEBPACK_IMPORTED_MODULE_5__["Customer"]);
            _this.filteredCustomerList = resultList;
        }));
    };
    SaleListComponent.prototype.initFilters = function () {
        this.date_initiatingFilter = new GsFilter();
        this.date_initiatingFilter.controls.min = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]();
        this.date_initiatingFilter.controls.max = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]();
        this.date_initiatingFilter.controls.val = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]();
        this.date_finalizingFilter = new GsFilter();
        this.date_finalizingFilter.controls.min = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]();
        this.date_finalizingFilter.controls.max = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]();
        this.date_finalizingFilter.controls.val = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]();
        this.statusFilter = new GsFilter();
        this.statusFilter.controls.val = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]();
        this.pstatusFilter = new GsFilter();
        this.pstatusFilter.controls.val = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]();
        this.filteredValues = { customer: this.selectedCustomer,
            date_finalizing: this.date_finalizingFilter.values,
            date_initiating: this.date_initiatingFilter.values,
            status: this.statusFilter.values,
            pstatus: this.pstatusFilter.values,
        };
    };
    SaleListComponent.prototype.applyFilter = function () {
        this.dataSource.filter = JSON.stringify(this.filteredValues);
        this.actualizeStat();
    };
    SaleListComponent.prototype.enableFiltering = function () {
        var _this = this;
        this.date_finalizingFilter.controls.val.valueChanges.subscribe(function (value) { _this.date_finalizingFilter.values.val = value; _this.applyFilter(); });
        this.date_finalizingFilter.controls.min.valueChanges.subscribe(function (value) { _this.date_finalizingFilter.values.min = value; _this.applyFilter(); });
        this.date_finalizingFilter.controls.max.valueChanges.subscribe(function (value) { _this.date_finalizingFilter.values.max = value; _this.applyFilter(); });
        this.date_initiatingFilter.controls.val.valueChanges.subscribe(function (value) { _this.date_initiatingFilter.values.val = value; _this.applyFilter(); });
        this.date_initiatingFilter.controls.min.valueChanges.subscribe(function (value) { _this.date_initiatingFilter.values.min = value; _this.applyFilter(); });
        this.date_initiatingFilter.controls.max.valueChanges.subscribe(function (value) { _this.date_initiatingFilter.values.max = value; _this.applyFilter(); });
        this.statusFilter.controls.val.valueChanges.subscribe(function (value) { _this.statusFilter.values.val = value; _this.applyFilter(); });
        this.pstatusFilter.controls.val.valueChanges.subscribe(function (value) { _this.pstatusFilter.values.val = value; _this.applyFilter(); });
        this.dataSource.filterPredicate =
            function (sale, filters) {
                var parsedFilters = JSON.parse(filters);
                var customerCheck = true;
                var date_finalizingCheck = true;
                var date_initiatingCheck = true;
                var statusCheck = true;
                var pstatusCheck = true;
                customerCheck = (_this.selectedCustomer) ? (_this.selectedCustomer._id == sale.customer._id) : true;
                if (parsedFilters.date_finalizing.val) {
                    var date0 = new Date(parsedFilters.date_finalizing.val), date1 = new Date(sale.date_finalizing);
                    date_finalizingCheck = !sale.date_finalizing ? false : date0.getFullYear() == date1.getFullYear() &&
                        date0.getMonth() == date1.getMonth()
                        && date0.getDate() == date1.getDate();
                }
                else {
                    if (parsedFilters.date_finalizing.min) {
                        date_finalizingCheck = date_finalizingCheck && (parsedFilters.date_finalizing.min <= sale.date_finalizing);
                    }
                    if (parsedFilters.date_finalizing.max) {
                        date_finalizingCheck = date_finalizingCheck && (parsedFilters.date_finalizing.max >= sale.date_finalizing);
                    }
                }
                if (parsedFilters.date_initiating.val) {
                    var date0 = new Date(parsedFilters.date_initiating.val), date1 = new Date(sale.date_initiating);
                    date_initiatingCheck = !sale.date_initiating ? false : date0.getFullYear() == date1.getFullYear() &&
                        date0.getMonth() == date1.getMonth()
                        && date0.getDate() == date1.getDate();
                }
                else {
                    if (parsedFilters.date_initiating.min) {
                        date_initiatingCheck = date_initiatingCheck && (parsedFilters.date_initiating.min <= sale.date_initiating);
                    }
                    if (parsedFilters.date_initiating.max) {
                        date_initiatingCheck = date_initiatingCheck && (parsedFilters.date_initiating.max >= sale.date_initiating);
                    }
                }
                if (parsedFilters.pstatus.val != undefined && parsedFilters.pstatus.val != null) {
                    pstatusCheck = (sale.payment_status == null || sale.payment_status == undefined) ? false : sale.payment_status == parsedFilters.pstatus.val;
                }
                if (parsedFilters.status.val != undefined && parsedFilters.status.val != null) {
                    statusCheck = (sale.status == null || sale.status == undefined) ? false : sale.status == parsedFilters.status.val;
                }
                return customerCheck && date_finalizingCheck && date_initiatingCheck && statusCheck && pstatusCheck && true;
            };
    };
    Object.defineProperty(SaleListComponent.prototype, "saleList", {
        get: function () {
            return this.saleService.saleList;
        },
        enumerable: true,
        configurable: true
    });
    SaleListComponent.prototype.actualizeStat = function () {
        this.statService.setDatas(this.dataSource.filteredData);
        this.statService.computeSum('amount');
    };
    SaleListComponent.prototype.ngOnInit = function () {
        this.initFilters();
        this.configureCustomerInput();
    };
    SaleListComponent.prototype.ngAfterViewInit = function () {
        this.search();
    };
    SaleListComponent.prototype.search = function () {
        var _this = this;
        this.saleService.load(this.filter).then(function (data) {
            setTimeout(function () {
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](_this.saleService.saleList);
                _this.actualizeStat();
                _this.dataSource.sort = _this.sort;
                _this.dataSource.paginator = _this.paginator;
                _this.enableFiltering();
            }, 200);
        });
    };
    SaleListComponent.prototype.select = function (selected) {
        this.selectedSale = selected;
    };
    SaleListComponent.prototype.delete = function (sale) {
        var _this = this;
        if (confirm('Etes-vous sûr?')) {
            this.saleService.delete(sale).subscribe(function () {
                _this.feedback = { type: 'success', message: 'Suppression effectuée avec succès!' };
                setTimeout(function () {
                    _this.search();
                }, 1000);
            }, function (err) {
                _this.feedback = { type: 'warning', message: 'Erreur lors de la suppression.' };
            });
        }
    };
    SaleListComponent.ctorParameters = function () { return [
        { type: _sale_service__WEBPACK_IMPORTED_MODULE_3__["SaleService"] },
        { type: src_app_partners_customer_customer_service__WEBPACK_IMPORTED_MODULE_4__["CustomerService"] },
        { type: _tools_statistical_service__WEBPACK_IMPORTED_MODULE_10__["StatisticalService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"], null)
    ], SaleListComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSort"], null)
    ], SaleListComponent.prototype, "sort", void 0);
    SaleListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sale',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sale-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/stock_operations/sale/sale-list/sale-list.component.html")).default,
            providers: [_tools_statistical_service__WEBPACK_IMPORTED_MODULE_10__["StatisticalService"]],
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sale-list.scss */ "./src/app/stock_operations/sale/sale-list/sale-list.scss")).default]
        })
    ], SaleListComponent);
    return SaleListComponent;
}());

var GsFilter = /** @class */ (function () {
    function GsFilter() {
        this.values = {
            min: undefined,
            max: undefined,
            val: undefined,
        };
        this.controls = {
            min: null,
            max: null,
            val: null,
        };
    }
    GsFilter.prototype.reset = function () {
        if (this.controls.min)
            this.controls.min.setValue(undefined);
        if (this.controls.max)
            this.controls.max.setValue(undefined);
        if (this.controls.val)
            this.controls.val.setValue(undefined);
    };
    return GsFilter;
}());



/***/ }),

/***/ "./src/app/stock_operations/sale/sale-list/sale-list.scss":
/*!****************************************************************!*\
  !*** ./src/app/stock_operations/sale/sale-list/sale-list.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0b2NrX29wZXJhdGlvbnMvc2FsZS9zYWxlLWxpc3Qvc2FsZS1saXN0LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/stock_operations/sale/sale-print/sale-print.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/stock_operations/sale/sale-print/sale-print.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0b2NrX29wZXJhdGlvbnMvc2FsZS9zYWxlLXByaW50L3NhbGUtcHJpbnQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/stock_operations/sale/sale-print/sale-print.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/stock_operations/sale/sale-print/sale-print.component.ts ***!
  \**************************************************************************/
/*! exports provided: SalePrintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalePrintComponent", function() { return SalePrintComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SalePrintComponent = /** @class */ (function () {
    function SalePrintComponent() {
    }
    SalePrintComponent.prototype.ngOnInit = function () {
    };
    SalePrintComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sale-print',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sale-print.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/stock_operations/sale/sale-print/sale-print.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sale-print.component.scss */ "./src/app/stock_operations/sale/sale-print/sale-print.component.scss")).default]
        })
    ], SalePrintComponent);
    return SalePrintComponent;
}());



/***/ }),

/***/ "./src/app/stock_operations/sale/sale.module.ts":
/*!******************************************************!*\
  !*** ./src/app/stock_operations/sale/sale.module.ts ***!
  \******************************************************/
/*! exports provided: SaleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaleModule", function() { return SaleModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _sale_list_sale_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sale-list/sale-list.component */ "./src/app/stock_operations/sale/sale-list/sale-list.component.ts");
/* harmony import */ var _sale_edit_sale_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sale-edit/sale-edit.component */ "./src/app/stock_operations/sale/sale-edit/sale-edit.component.ts");
/* harmony import */ var _sale_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sale.service */ "./src/app/stock_operations/sale/sale.service.ts");
/* harmony import */ var _sale_routes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sale.routes */ "./src/app/stock_operations/sale/sale.routes.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _sale_unit_sale_unit_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./sale_unit/sale-unit.module */ "./src/app/stock_operations/sale/sale_unit/sale-unit.module.ts");
/* harmony import */ var _sale_print_sale_print_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./sale-print/sale-print.component */ "./src/app/stock_operations/sale/sale-print/sale-print.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _payment_payment_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../payment/payment.module */ "./src/app/stock_operations/payment/payment.module.ts");


















var SaleModule = /** @class */ (function () {
    function SaleModule() {
    }
    SaleModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _sale_unit_sale_unit_module__WEBPACK_IMPORTED_MODULE_14__["SaleUnitModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatRadioModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _payment_payment_module__WEBPACK_IMPORTED_MODULE_17__["PaymentModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(_sale_routes__WEBPACK_IMPORTED_MODULE_11__["SALE_ROUTES"])
            ],
            declarations: [
                _sale_list_sale_list_component__WEBPACK_IMPORTED_MODULE_8__["SaleListComponent"],
                _sale_edit_sale_edit_component__WEBPACK_IMPORTED_MODULE_9__["SaleEditComponent"],
                _sale_print_sale_print_component__WEBPACK_IMPORTED_MODULE_15__["SalePrintComponent"]
            ],
            entryComponents: [_sale_print_sale_print_component__WEBPACK_IMPORTED_MODULE_15__["SalePrintComponent"]],
            providers: [_sale_service__WEBPACK_IMPORTED_MODULE_10__["SaleService"]],
            exports: []
        })
    ], SaleModule);
    return SaleModule;
}());



/***/ }),

/***/ "./src/app/stock_operations/sale/sale.routes.ts":
/*!******************************************************!*\
  !*** ./src/app/stock_operations/sale/sale.routes.ts ***!
  \******************************************************/
/*! exports provided: SALE_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SALE_ROUTES", function() { return SALE_ROUTES; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sale_list_sale_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sale-list/sale-list.component */ "./src/app/stock_operations/sale/sale-list/sale-list.component.ts");
/* harmony import */ var _sale_edit_sale_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sale-edit/sale-edit.component */ "./src/app/stock_operations/sale/sale-edit/sale-edit.component.ts");



var SALE_ROUTES = [
    {
        path: 'stock_operations/sales',
        component: _sale_list_sale_list_component__WEBPACK_IMPORTED_MODULE_1__["SaleListComponent"]
    },
    {
        path: 'stock_operations/sales/:id',
        component: _sale_edit_sale_edit_component__WEBPACK_IMPORTED_MODULE_2__["SaleEditComponent"]
    },
];


/***/ }),

/***/ "./src/app/stock_operations/sale/sale.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/stock_operations/sale/sale.service.ts ***!
  \*******************************************************/
/*! exports provided: SaleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaleService", function() { return SaleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sale */ "./src/app/stock_operations/sale/sale.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _sale_unit_sale_unit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sale_unit/sale-unit.service */ "./src/app/stock_operations/sale/sale_unit/sale-unit.service.ts");
/* harmony import */ var _stock_class_product_class_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../stock/class_product/class-product.service */ "./src/app/stock/class_product/class-product.service.ts");
/* harmony import */ var _params_manager_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../params/manager/auth/auth.service */ "./src/app/params/manager/auth/auth.service.ts");
/* harmony import */ var _configuration_configuration_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../configuration/configuration.service */ "./src/app/configuration/configuration.service.ts");







var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Accept', 'application/json');

var SaleService = /** @class */ (function () {
    function SaleService(http, configurationService, pcu_service, stock_service, authService) {
        this.http = http;
        this.configurationService = configurationService;
        this.pcu_service = pcu_service;
        this.authService = authService;
        this.saleList = [];
        this.api = this.configurationService.environment.main_api + '/stock_operations/sale';
        console.log(this.configurationService.environment);
    }
    SaleService.prototype.findById = function (id) {
        var url = this.api + "/" + id;
        var params = { _id: id };
        return this.http.get(url, { params: params, headers: headers });
    };
    SaleService.prototype.load = function (filter) {
        var p = this;
        return new Promise(function (resolve, reject) {
            p.find(filter).subscribe(function (result) {
                p.saleList = result;
                resolve(true);
            }, function (err) {
                reject(err);
                console.error('error loading', err);
            });
        });
    };
    SaleService.prototype.find = function (filter) {
        var params = {
            'customer': filter.customer,
            'date_finalizing': filter.date_finalizing,
            'status': filter.status,
        };
        return this.http.get(this.api, { params: params, headers: headers });
    };
    SaleService.prototype.save = function (sale) {
        var entity = new _sale__WEBPACK_IMPORTED_MODULE_1__["Sale"]();
        Object.assign(entity, sale);
        entity.sale_units_datasource = null;
        entity.manager = this.authService.active_user;
        entity.sale_units = sale.sale_units_datasource.data;
        entity.date_initiating = new Date();
        entity.sale_payments = null;
        ;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
        var url = '';
        if (entity._id) {
            entity.status = true;
            url = this.api + "/" + entity._id.toString();
            params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('ID', entity._id.toString());
            return this.http.put(url, entity, { headers: headers, params: params });
        }
        else {
            url = "" + this.api;
            return this.http.post(url, entity, { headers: headers, params: params });
        }
    };
    SaleService.prototype.close_payments = function (sale) {
        var entity = new _sale__WEBPACK_IMPORTED_MODULE_1__["Sale"]();
        console.log(sale);
        Object.assign(entity, sale);
        entity.sale_units_datasource = null;
        entity.manager = this.authService.active_user;
        entity.date_initiating = new Date();
        entity.sale_payments = null;
        entity.payment_status = true;
        ;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
        var url = '';
        entity.status = true;
        url = this.api + "/closepmts/" + entity._id.toString();
        params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('ID', entity._id.toString());
        return this.http.put(url, entity, { headers: headers, params: params });
    };
    SaleService.prototype.delete = function (entity) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
        var url = '';
        if (entity._id) {
            url = this.api + "/" + entity._id.toString();
            params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('ID', entity._id.toString());
            return this.http.delete(url, { headers: headers, params: params });
        }
        return null;
    };
    SaleService.prototype.load_on_comming = function () {
        var url = this.api + "/stats/count_oncomming";
        return this.http.get(url, { headers: headers });
    };
    SaleService.prototype.load_last = function () {
        var url = this.api + "/stats/last";
        return this.http.get(url, { headers: headers });
    };
    SaleService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _configuration_configuration_service__WEBPACK_IMPORTED_MODULE_7__["ConfigurationService"] },
        { type: _sale_unit_sale_unit_service__WEBPACK_IMPORTED_MODULE_4__["SaleUnitService"] },
        { type: _stock_class_product_class_product_service__WEBPACK_IMPORTED_MODULE_5__["ClassProductService"] },
        { type: _params_manager_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }
    ]; };
    SaleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
    ], SaleService);
    return SaleService;
}());



/***/ }),

/***/ "./src/app/stock_operations/sale/sale.ts":
/*!***********************************************!*\
  !*** ./src/app/stock_operations/sale/sale.ts ***!
  \***********************************************/
/*! exports provided: Sale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sale", function() { return Sale; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");


var Sale = /** @class */ (function () {
    function Sale() {
        this.sale_units_datasource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](new Array());
        this.sale_payments = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](new Array());
        this.amount = 0;
        this.amount_payment = 0;
        this.paid_amount = 0;
        this.payment_status = false;
    }
    Object.defineProperty(Sale.prototype, "display", {
        get: function () {
            return 'sale_display'; // Remplacer avec la chaine que vous souhaitez afficher
        },
        enumerable: true,
        configurable: true
    });
    Sale.prototype.add = function (sale_unit) {
        this.sale_units_datasource.data.push(sale_unit);
        this.sale_units_datasource._updateChangeSubscription();
        this.amount += sale_unit.unit_price * sale_unit.quantity;
        console.log(this.sale_units_datasource.data);
    };
    Sale.prototype.remove = function (sale_unit) {
        var index = this.sale_units_datasource.data.indexOf(sale_unit);
        this.sale_units_datasource.data.splice(index, 1);
        this.sale_units_datasource._updateChangeSubscription();
        this.amount -= sale_unit.unit_price * sale_unit.quantity;
    };
    Sale.calculateAmounts = function (sale) {
        var e_1, _a;
        sale.amount = 0;
        sale.paid_amount = 0;
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](sale.sale_units_datasource.data), _c = _b.next(); !_c.done; _c = _b.next()) {
                var pcu = _c.value;
                sale.amount += pcu.quantity * pcu.unit_price;
                if (pcu.sale && pcu.sale.payment_status) {
                    sale.paid_amount += pcu.quantity * pcu.unit_price;
                }
                var check_unary_sale = (pcu.sale.amount == pcu.quantity * pcu.unit_price);
                if (!pcu.sale.payment_status && check_unary_sale) {
                    sale.paid_amount += pcu.sale.amount_payment;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    Sale.calculateAmountsPayement = function (sale) {
        var e_2, _a;
        sale.amount_payment = 0;
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](sale.sale_payments.data), _c = _b.next(); !_c.done; _c = _b.next()) {
                var py = _c.value;
                sale.amount_payment += py.amount;
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        sale.sale_payments._updateChangeSubscription();
    };
    Sale.addPayment = function (payment, sale) {
        try {
            sale.sale_payments.data.push(payment);
            Sale.calculateAmountsPayement(sale);
        }
        catch (err) {
            throw (err);
        }
    };
    Sale.updatePaymentStatus = function (sale, saleService) {
        if (sale.payment_status == true)
            return;
        if (sale.amount_payment == sale.amount) {
            sale.payment_status = true;
            saleService.close_payments(sale).subscribe(function (data) { sale.payment_status = true; }, function (err) { console.log(err); throw (err); sale.payment_status = false; });
        }
    };
    return Sale;
}());



/***/ }),

/***/ "./src/app/stock_operations/sale/sale_unit/sale-unit-edit/sale-unit-edit.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/stock_operations/sale/sale_unit/sale-unit-edit/sale-unit-edit.component.ts ***!
  \********************************************************************************************/
/*! exports provided: SaleUnitEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaleUnitEditComponent", function() { return SaleUnitEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _sale_unit_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sale-unit.service */ "./src/app/stock_operations/sale/sale_unit/sale-unit.service.ts");
/* harmony import */ var _sale_unit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sale-unit */ "./src/app/stock_operations/sale/sale_unit/sale-unit.ts");
/* harmony import */ var src_app_stock_product_product__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/stock/product/product */ "./src/app/stock/product/product.ts");
/* harmony import */ var src_app_stock_operations_sale_sale_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/stock_operations/sale/sale.service */ "./src/app/stock_operations/sale/sale.service.ts");
/* harmony import */ var src_app_stock_operations_sale_sale__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/stock_operations/sale/sale */ "./src/app/stock_operations/sale/sale.ts");
/* harmony import */ var src_app_stock_operations_sale_sale_filter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/stock_operations/sale/sale-filter */ "./src/app/stock_operations/sale/sale-filter.ts");
/* harmony import */ var _stock_class_product_class_product_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../stock/class_product/class-product.service */ "./src/app/stock/class_product/class-product.service.ts");
/* harmony import */ var _stock_class_product_class_product_filter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../stock/class_product/class-product-filter */ "./src/app/stock/class_product/class-product-filter.ts");






var caster = __webpack_require__(/*! angular-crud/gs-cast */ "./node_modules/angular-crud/gs-cast/index.js");








var SaleUnitEditComponent = /** @class */ (function () {
    function SaleUnitEditComponent(route, router, sale_unitService, productService, saleService) {
        this.route = route;
        this.router = router;
        this.sale_unitService = sale_unitService;
        this.productService = productService;
        this.saleService = saleService;
        this.feedback = {};
        this.filteredClassProductList = new Array();
        this.quantityInput = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.isLoadingProduct = false;
        this.filteredSaleList = new Array();
        this.isLoadingSale = false;
    }
    SaleUnitEditComponent.prototype.check_init_product = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            console.log("paramètres de la route");
            console.log(params);
            if (params["init_product_id"]) {
                _this.productService.findById(params["init_product_id"]).subscribe(function (cp) { _this.productInput.setValue(cp); _this.selectedProduct = cp; _this.sale_unit.product_class = cp; _this.sale_unit.unit_price = _this.selectedProduct.unit_price; });
            }
        });
    };
    SaleUnitEditComponent.prototype.ngOnInit = function () {
        this.sale_unit = new _sale_unit__WEBPACK_IMPORTED_MODULE_6__["SaleUnit"]();
        this.configureProductInput();
        this.configureSaleInput();
        console.log(this.sale);
        this.check_init_product();
    };
    SaleUnitEditComponent.prototype.add = function () {
        this.sale.add(this.sale_unit);
        this.ngOnInit();
    };
    SaleUnitEditComponent.prototype.cancel = function () {
        this.router.navigate(['/stock_operations/sale/saleUnits']);
    };
    SaleUnitEditComponent.prototype.productClick = function (event) {
        this.selectedProduct = event.option.value;
        this.sale_unit.unit_price = this.selectedProduct.unit_price;
        this.sale_unit.quantity = 1;
        this.quantityInput.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(this.selectedProduct.quantity), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(1)]);
    };
    SaleUnitEditComponent.prototype.checkProduct = function () {
        if (!this.selectedProduct || this.selectedProduct !== this.productInput.value) {
            this.productInput.setValue(null);
            this.selectedProduct = null;
            return;
        }
        this.sale_unit.product_class = this.selectedProduct;
    };
    SaleUnitEditComponent.prototype.displayProduct = function (product) {
        if (product)
            return product.product.name + "   " + product.quantity + " restant(s)";
    };
    SaleUnitEditComponent.prototype.configureProductInput = function () {
        var _this = this;
        this.productInput = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.productInput.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () { _this.isLoadingProduct = true; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (value) {
            var filter = new _stock_class_product_class_product_filter__WEBPACK_IMPORTED_MODULE_12__["ClassProductFilter"](value);
            filter.status = true;
            if (value) {
                filter.product = value.toString();
                filter.label = value.toString();
            }
            return _this.productService.find(filter)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () { return _this.isLoadingProduct = false; }));
        }))
            .subscribe((function (resultList) {
            caster.arrayCast(resultList, src_app_stock_product_product__WEBPACK_IMPORTED_MODULE_7__["Product"]);
            _this.filteredClassProductList = resultList;
        }));
    };
    SaleUnitEditComponent.prototype.saleClick = function (event) {
        this.selectedSale = event.option.value;
    };
    SaleUnitEditComponent.prototype.checkSale = function () {
        if (!this.selectedSale || this.selectedSale !== this.saleInput.value) {
            this.saleInput.setValue(null);
            this.selectedSale = null;
            return;
        }
    };
    SaleUnitEditComponent.prototype.displaySale = function (sale) {
        if (sale)
            return sale;
    };
    SaleUnitEditComponent.prototype.configureSaleInput = function () {
        var _this = this;
        this.saleInput = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.saleInput.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () { _this.isLoadingSale = true; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (value) { return _this.saleService.find(new src_app_stock_operations_sale_sale_filter__WEBPACK_IMPORTED_MODULE_10__["SaleFilter"]())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () { return _this.isLoadingSale = false; })); }))
            .subscribe((function (resultList) {
            caster.arrayCast(resultList, src_app_stock_operations_sale_sale__WEBPACK_IMPORTED_MODULE_9__["Sale"]);
            _this.filteredSaleList = resultList;
        }));
    };
    SaleUnitEditComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _sale_unit_service__WEBPACK_IMPORTED_MODULE_5__["SaleUnitService"] },
        { type: _stock_class_product_class_product_service__WEBPACK_IMPORTED_MODULE_11__["ClassProductService"] },
        { type: src_app_stock_operations_sale_sale_service__WEBPACK_IMPORTED_MODULE_8__["SaleService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], SaleUnitEditComponent.prototype, "sale", void 0);
    SaleUnitEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sale-unit-edit',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sale-unit-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/stock_operations/sale/sale_unit/sale-unit-edit/sale-unit-edit.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sale-unit-edit.scss */ "./src/app/stock_operations/sale/sale_unit/sale-unit-edit/sale-unit-edit.scss")).default]
        })
    ], SaleUnitEditComponent);
    return SaleUnitEditComponent;
}());



/***/ }),

/***/ "./src/app/stock_operations/sale/sale_unit/sale-unit-edit/sale-unit-edit.scss":
/*!************************************************************************************!*\
  !*** ./src/app/stock_operations/sale/sale_unit/sale-unit-edit/sale-unit-edit.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-option {\n  padding: 10px;\n  height: auto;\n  border: 1px;\n  border-style: inset;\n  border-radius: 0.1em;\n}\n\n.card-option:hover div:first-child {\n  background: none;\n}\n\n.card-option div:first-child {\n  border-width: 0.5px;\n  border-color: darkslategrey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RvY2tfb3BlcmF0aW9ucy9zYWxlL3NhbGVfdW5pdC9zYWxlLXVuaXQtZWRpdC9COlxcUHJvamV0c1xcR2VzdGlvbiBkZSBCb3V0aXF1ZVxcZ3Nfc3RvY2tcXEFQUC9zcmNcXGFwcFxcc3RvY2tfb3BlcmF0aW9uc1xcc2FsZVxcc2FsZV91bml0XFxzYWxlLXVuaXQtZWRpdFxcc2FsZS11bml0LWVkaXQuc2NzcyIsInNyYy9hcHAvc3RvY2tfb3BlcmF0aW9ucy9zYWxlL3NhbGVfdW5pdC9zYWxlLXVuaXQtZWRpdC9zYWxlLXVuaXQtZWRpdC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUVBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQ0FGOztBREdBO0VBQ0UsZ0JBQUE7QUNBRjs7QURJQTtFQUVFLG1CQUFBO0VBQ0EsMkJBQUE7QUNGRiIsImZpbGUiOiJzcmMvYXBwL3N0b2NrX29wZXJhdGlvbnMvc2FsZS9zYWxlX3VuaXQvc2FsZS11bml0LWVkaXQvc2FsZS11bml0LWVkaXQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLW9wdGlvbiB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuXHJcbiAgaGVpZ2h0OmF1dG87XHJcbiAgYm9yZGVyOiAxcHg7XHJcbiAgYm9yZGVyLXN0eWxlOiBpbnNldDtcclxuICBib3JkZXItcmFkaXVzOjAuMWVtO1xyXG59XHJcblxyXG4uY2FyZC1vcHRpb246aG92ZXIgZGl2OmZpcnN0LWNoaWxkIHtcclxuICBiYWNrZ3JvdW5kOm5vbmU7XHJcbn1cclxuXHJcblxyXG4uY2FyZC1vcHRpb24gIGRpdjpmaXJzdC1jaGlsZCB7XHJcblxyXG4gIGJvcmRlci13aWR0aDogMC41cHg7XHJcbiAgYm9yZGVyLWNvbG9yOiBkYXJrc2xhdGVncmV5O1xyXG5cclxufVxyXG5cclxuLmNhcmQtb3B0aW9uIDpob3ZlciB7XHJcblxyXG59XHJcbiIsIi5jYXJkLW9wdGlvbiB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgYm9yZGVyOiAxcHg7XG4gIGJvcmRlci1zdHlsZTogaW5zZXQ7XG4gIGJvcmRlci1yYWRpdXM6IDAuMWVtO1xufVxuXG4uY2FyZC1vcHRpb246aG92ZXIgZGl2OmZpcnN0LWNoaWxkIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cblxuLmNhcmQtb3B0aW9uIGRpdjpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci13aWR0aDogMC41cHg7XG4gIGJvcmRlci1jb2xvcjogZGFya3NsYXRlZ3JleTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/stock_operations/sale/sale_unit/sale-unit-filter.ts":
/*!*********************************************************************!*\
  !*** ./src/app/stock_operations/sale/sale_unit/sale-unit-filter.ts ***!
  \*********************************************************************/
/*! exports provided: SaleUnitFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaleUnitFilter", function() { return SaleUnitFilter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var SaleUnitFilter = /** @class */ (function () {
    function SaleUnitFilter() {
    }
    return SaleUnitFilter;
}());



/***/ }),

/***/ "./src/app/stock_operations/sale/sale_unit/sale-unit-list/sale-unit-list.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/stock_operations/sale/sale_unit/sale-unit-list/sale-unit-list.component.ts ***!
  \********************************************************************************************/
/*! exports provided: SaleUnitListComponent, GsFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaleUnitListComponent", function() { return SaleUnitListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GsFilter", function() { return GsFilter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sale_unit_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sale-unit-filter */ "./src/app/stock_operations/sale/sale_unit/sale-unit-filter.ts");
/* harmony import */ var _sale_unit_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sale-unit.service */ "./src/app/stock_operations/sale/sale_unit/sale-unit.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");





var caster = __webpack_require__(/*! angular-crud/gs-cast */ "./node_modules/angular-crud/gs-cast/index.js");
var SaleUnitListComponent = /** @class */ (function () {
    function SaleUnitListComponent(sale_unitService) {
        this.sale_unitService = sale_unitService;
        this.filter = new _sale_unit_filter__WEBPACK_IMPORTED_MODULE_2__["SaleUnitFilter"]();
        this.print_mode = false;
        this.productMode = false;
        this.saleMode = true;
        this.feedback = {};
        this.displayedColumns = ['quantity', 'unit_price', 'total', 'actions'];
        this.server_processing = false;
    }
    SaleUnitListComponent.prototype.initFilters = function () {
        this.filteredValues = {};
    };
    SaleUnitListComponent.prototype.applyFilter = function () {
        this.dataSource.filter = JSON.stringify(this.filteredValues);
    };
    SaleUnitListComponent.prototype.enableFiltering = function () {
        this.dataSource.filterPredicate =
            function (sale_unit, filters) {
                var parsedFilters = JSON.parse(filters);
                return true;
            };
    };
    Object.defineProperty(SaleUnitListComponent.prototype, "sale_unitList", {
        get: function () {
            return this.sale_unitService.sale_unitList;
        },
        enumerable: true,
        configurable: true
    });
    SaleUnitListComponent.prototype.ngOnInit = function () {
        //initifalize table visible columns ;
        if (this.saleMode)
            this.displayedColumns = ['product'].concat(this.displayedColumns);
        if (this.productMode) {
            this.displayedColumns = ['date', 'customer', 'payment_status',].concat(this.displayedColumns).concat(['amount_payment']);
        }
        ;
        this.initData();
        this.initFilters();
    };
    SaleUnitListComponent.prototype.ngAfterViewInit = function () {
    };
    SaleUnitListComponent.prototype.initData = function () {
        this.dataSource = this.sale.sale_units_datasource;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.enableFiltering();
    };
    ;
    SaleUnitListComponent.prototype.select = function (selected) {
        this.selectedSaleUnit = selected;
    };
    ;
    SaleUnitListComponent.prototype.remove = function (sale_unit) {
        if (!confirm("Voulez-vous vraiment supprimer?"))
            return;
        this.sale.remove(sale_unit);
    };
    ;
    SaleUnitListComponent.ctorParameters = function () { return [
        { type: _sale_unit_service__WEBPACK_IMPORTED_MODULE_3__["SaleUnitService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], null)
    ], SaleUnitListComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"], null)
    ], SaleUnitListComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], SaleUnitListComponent.prototype, "productMode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], SaleUnitListComponent.prototype, "saleMode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], SaleUnitListComponent.prototype, "sale", void 0);
    SaleUnitListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sale-unit',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sale-unit-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/stock_operations/sale/sale_unit/sale-unit-list/sale-unit-list.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sale-unit-list.scss */ "./src/app/stock_operations/sale/sale_unit/sale-unit-list/sale-unit-list.scss")).default]
        })
    ], SaleUnitListComponent);
    return SaleUnitListComponent;
}());

var GsFilter = /** @class */ (function () {
    function GsFilter() {
        this.values = {
            min: undefined,
            max: undefined,
            val: undefined,
        };
        this.controls = {
            min: null,
            max: null,
            val: null,
        };
    }
    GsFilter.prototype.reset = function () {
        if (this.controls.min) {
            this.controls.min.setValue(undefined);
        }
        if (this.controls.max) {
            this.controls.max.setValue(undefined);
        }
        if (this.controls.val) {
            this.controls.val.setValue(undefined);
        }
    };
    return GsFilter;
}());



/***/ }),

/***/ "./src/app/stock_operations/sale/sale_unit/sale-unit-list/sale-unit-list.scss":
/*!************************************************************************************!*\
  !*** ./src/app/stock_operations/sale/sale_unit/sale-unit-list/sale-unit-list.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0b2NrX29wZXJhdGlvbnMvc2FsZS9zYWxlX3VuaXQvc2FsZS11bml0LWxpc3Qvc2FsZS11bml0LWxpc3Quc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/stock_operations/sale/sale_unit/sale-unit.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/stock_operations/sale/sale_unit/sale-unit.module.ts ***!
  \*********************************************************************/
/*! exports provided: SaleUnitModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaleUnitModule", function() { return SaleUnitModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _sale_unit_list_sale_unit_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sale-unit-list/sale-unit-list.component */ "./src/app/stock_operations/sale/sale_unit/sale-unit-list/sale-unit-list.component.ts");
/* harmony import */ var _sale_unit_edit_sale_unit_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sale-unit-edit/sale-unit-edit.component */ "./src/app/stock_operations/sale/sale_unit/sale-unit-edit/sale-unit-edit.component.ts");
/* harmony import */ var _sale_unit_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sale-unit.service */ "./src/app/stock_operations/sale/sale_unit/sale-unit.service.ts");
/* harmony import */ var _sale_unit_routes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sale-unit.routes */ "./src/app/stock_operations/sale/sale_unit/sale-unit.routes.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");














var SaleUnitModule = /** @class */ (function () {
    function SaleUnitModule() {
    }
    SaleUnitModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatRadioModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(_sale_unit_routes__WEBPACK_IMPORTED_MODULE_11__["SALE_UNIT_ROUTES"])
            ],
            declarations: [
                _sale_unit_list_sale_unit_list_component__WEBPACK_IMPORTED_MODULE_8__["SaleUnitListComponent"],
                _sale_unit_edit_sale_unit_edit_component__WEBPACK_IMPORTED_MODULE_9__["SaleUnitEditComponent"]
            ],
            providers: [_sale_unit_service__WEBPACK_IMPORTED_MODULE_10__["SaleUnitService"]],
            exports: [_sale_unit_edit_sale_unit_edit_component__WEBPACK_IMPORTED_MODULE_9__["SaleUnitEditComponent"], _sale_unit_list_sale_unit_list_component__WEBPACK_IMPORTED_MODULE_8__["SaleUnitListComponent"]]
        })
    ], SaleUnitModule);
    return SaleUnitModule;
}());



/***/ }),

/***/ "./src/app/stock_operations/sale/sale_unit/sale-unit.routes.ts":
/*!*********************************************************************!*\
  !*** ./src/app/stock_operations/sale/sale_unit/sale-unit.routes.ts ***!
  \*********************************************************************/
/*! exports provided: SALE_UNIT_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SALE_UNIT_ROUTES", function() { return SALE_UNIT_ROUTES; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sale_unit_list_sale_unit_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sale-unit-list/sale-unit-list.component */ "./src/app/stock_operations/sale/sale_unit/sale-unit-list/sale-unit-list.component.ts");
/* harmony import */ var _sale_unit_edit_sale_unit_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sale-unit-edit/sale-unit-edit.component */ "./src/app/stock_operations/sale/sale_unit/sale-unit-edit/sale-unit-edit.component.ts");



var SALE_UNIT_ROUTES = [
    {
        path: 'stock_operations/sale/saleUnits',
        component: _sale_unit_list_sale_unit_list_component__WEBPACK_IMPORTED_MODULE_1__["SaleUnitListComponent"]
    },
    {
        path: 'stock_operations/sale/saleUnits/:id',
        component: _sale_unit_edit_sale_unit_edit_component__WEBPACK_IMPORTED_MODULE_2__["SaleUnitEditComponent"]
    }
];


/***/ }),

/***/ "./src/app/stock_operations/sale/sale_unit/sale-unit.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/stock_operations/sale/sale_unit/sale-unit.service.ts ***!
  \**********************************************************************/
/*! exports provided: SaleUnitService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaleUnitService", function() { return SaleUnitService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sale_unit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sale-unit */ "./src/app/stock_operations/sale/sale_unit/sale-unit.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _configuration_configuration_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../configuration/configuration.service */ "./src/app/configuration/configuration.service.ts");




var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Accept', 'application/json');

var SaleUnitService = /** @class */ (function () {
    function SaleUnitService(http, configurationService) {
        this.http = http;
        this.configurationService = configurationService;
        this.sale_unitList = [];
        this.api = this.configurationService.environment.main_api + '/stock_operations/sale_unit';
        console.log(this.configurationService.environment);
    }
    SaleUnitService.prototype.findById = function (id) {
        var url = this.api + "/" + id;
        var params = { _id: id };
        return this.http.get(url, { params: params, headers: headers });
    };
    SaleUnitService.prototype.findByProductClass = function (id) {
        var url = this.api + "/product_class/" + id;
        var params = { id: id };
        return this.http.get(url, { params: params, headers: headers });
    };
    SaleUnitService.prototype.load = function (filter) {
        var p = this;
        return new Promise(function (resolve, reject) {
            p.find(filter).subscribe(function (result) {
                p.sale_unitList = result;
                resolve(true);
            }, function (err) {
                reject(err);
                console.error('error loading', err);
            });
        });
    };
    SaleUnitService.prototype.find = function (filter) {
        var url = this.api + "/" + filter.sale;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set("sale", filter.sale);
        return this.http.get(url, { params: params, headers: headers });
    };
    SaleUnitService.prototype.save = function (su) {
        var entity = new _sale_unit__WEBPACK_IMPORTED_MODULE_1__["SaleUnit"]();
        Object.assign(entity, su);
        su.sale = null;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
        var url = '';
        if (entity._id) {
            url = this.api + "/" + entity._id.toString();
            params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('ID', entity._id.toString());
            return this.http.put(url, entity, { headers: headers, params: params });
        }
        else {
            url = "" + this.api;
            return this.http.post(url, entity, { headers: headers, params: params });
        }
    };
    SaleUnitService.prototype.delete = function (entity) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
        var url = '';
        if (entity._id) {
            url = this.api + "/" + entity._id.toString();
            params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('ID', entity._id.toString());
            return this.http.delete(url, { headers: headers, params: params });
        }
        return null;
    };
    SaleUnitService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _configuration_configuration_service__WEBPACK_IMPORTED_MODULE_4__["ConfigurationService"] }
    ]; };
    SaleUnitService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
    ], SaleUnitService);
    return SaleUnitService;
}());



/***/ }),

/***/ "./src/app/stock_operations/sale/sale_unit/sale-unit.ts":
/*!**************************************************************!*\
  !*** ./src/app/stock_operations/sale/sale_unit/sale-unit.ts ***!
  \**************************************************************/
/*! exports provided: SaleUnit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaleUnit", function() { return SaleUnit; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _stock_class_product_class_product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../stock/class_product/class-product */ "./src/app/stock/class_product/class-product.ts");


var SaleUnit = /** @class */ (function () {
    function SaleUnit() {
        this.product_class = new _stock_class_product_class_product__WEBPACK_IMPORTED_MODULE_1__["ClassProduct"]();
    }
    Object.defineProperty(SaleUnit.prototype, "display", {
        get: function () {
            return 'sale_unit_display'; // Remplacer avec la chaine que vous souhaitez afficher
        },
        enumerable: true,
        configurable: true
    });
    return SaleUnit;
}());



/***/ }),

/***/ "./src/app/tools/statistical.service.ts":
/*!**********************************************!*\
  !*** ./src/app/tools/statistical.service.ts ***!
  \**********************************************/
/*! exports provided: StatisticalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticalService", function() { return StatisticalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var d3 = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
var StatisticalService = /** @class */ (function () {
    function StatisticalService() {
        this.numeric_datas = new Array();
        this.values = new Map();
    }
    StatisticalService.prototype.setDatas = function (newDatas) {
        this.datas = newDatas;
    };
    StatisticalService.prototype.computeSum = function (property) {
        this.numeric_datas = this.datas.map(function (value) { ; return value[property]; });
        this.values.set('sum', d3.sum(this.numeric_datas));
    };
    StatisticalService.prototype.computeProductSum = function (first_property, second_property) {
        this.numeric_datas = this.datas.map(function (value) { ; return value[first_property] * value[second_property]; });
        this.values.set('sum_product', d3.sum(this.numeric_datas));
    };
    StatisticalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], StatisticalService);
    return StatisticalService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

var environment = {
    production: false,
    main_api: 'http://192.168.43.231:5000',
    encrypt_key: 'aabbccddee1122334455'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! B:\Projets\Gestion de Boutique\gs_stock\APP\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map