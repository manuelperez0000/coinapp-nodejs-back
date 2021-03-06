(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\58412\Desktop\coinapp\angular-front\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
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

/***/ "BuFo":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class HomeComponent {
    constructor(_apiservice) {
        this._apiservice = _apiservice;
        this.loading = true;
    }
    ngOnInit() {
        this.loading = false;
        /*   this._apiservice.getApiRest().subscribe((res:any)=>{
            console.log(res);
            this.listaCriptos = res;
            this.loading = false
          }) */
    }
}
HomeComponent.??fac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"])); };
HomeComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 99, vars: 0, consts: [[1, "container-fluid"], [1, "row"], [1, "col-12", "col-md-8", "pb-5"], [1, "p-3", "bg-light", "text-center"], ["behavior", "left", 1, "griz"], [1, "n-marquee"], [1, "negro"], [1, ""], [1, "max-500", "m-auto"], [1, "col-12", "text-center", "mt-2"], [1, "d-md-none"], [1, "d-none", "d-md-inline", "py-3"], [1, "row", "pt-2", "pb-3"], [1, "col-12", "mb-1"], ["src", "../../../assets/items/logocripto.png", "alt", "", "srcset", "", 1, "itemMenu"], [1, "col-6"], ["routerLink", "Compra", 1, "bluebtn", "btn", "w-100", "shadow-mx"], [1, "grizbtn", "btn", "w-100", "shadow-mx"], [1, "max-500", "m-auto", "pb-3"], [1, "col-12", "medio-bg", "mb-1"], [1, "prox-h1"], ["src", "../../../assets/items/logo-electro.png", "alt", "", "srcset", "", 1, "itemMenu"], [1, "prox"], [1, "bluebtn", "btn", "w-100", "shadow-mx"], [1, "row", "pt-3"], [1, "col-12"], ["src", "../../../assets/items/logo-remesas.png", "alt", "", "srcset", "", 1, "itemMenu"], [1, "col-12", "mt-2"], [1, "col-12", "p-0"], ["src", "../../../assets/items/bottom-img.png", "alt", "", 1, "img-bottom"], [1, "col-4", "d-none", "d-md-inline", "pt-3", "bg-white"], [1, "w-100", "text-center"], [1, "list-group", "list-group-flush"], ["routerLink", "home", "onclick", "closeMenu()", "type", "button", 1, "list-group-item", "list-group-item-action", "griz-o"], [1, "bi", "bi-house"], ["routerLink", "login", "onclick", "closeMenu()", "type", "button", 1, "list-group-item", "list-group-item-action", "griz-o"], [1, "bi", "bi-person"], ["routerLink", "registro", "onclick", "closeMenu()", "routerLink", "criptos", "type", "button", 1, "list-group-item", "list-group-item-action", "griz-o"], [1, "bi", "bi-file-earmark-person"], ["routerLink", "criptos", "onclick", "closeMenu()", 1, "list-group-item", "list-group-item-action", "griz-o"], [1, "bi", "bi-bar-chart"], ["routerLink", "guia", "type", "button", 1, "list-group-item", "list-group-item-action", "griz-o"], [1, "bi", "bi-book"], ["routerLink", "politicas", "type", "button", 1, "list-group-item", "list-group-item-action", "griz-o"], [1, "bi", "bi-file-lock"], [1, "list-group", "list-group-flush", "mt-3"], ["routerLink", "remesas", "type", "button", "disabled", "", 1, "list-group-item", "list-group-item-action"], [1, "bi", "bi-arrow-left-right"], ["routerLink", "electronicos", "type", "button", "disabled", "", 1, "list-group-item", "list-group-item-action"], [1, "bi", "bi-cash"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "marquee", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "b", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, " BTC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " ( Compra: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "b", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "$50.526");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, ", Venta: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "b", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "$51.125");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, " ) - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "b", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "ETH");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, " ( Compra: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "b", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "$3.526 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, ", Venta: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "b", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "$3.925");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, " ) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "h6", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Compra y vende criptomonedas de forma rapida y segura");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Compra y vende criptomonedas de forma rapida y segura");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](34, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, " Criptomonedas ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "Comprar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Vender");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "h4", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](46, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, " Electronicos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "b", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "Proximamente");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "Comprar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "Vender");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "h4", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](59, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, " Remesas ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "b", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "Proximamente");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "Remesas en Bolivares");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](68, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, "Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](75, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, " Inicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](78, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, " Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](81, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, " Registro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](84, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, " Criptomonedas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](87, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, " Guia de uso");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](90, "i", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, " Politicas de privacidad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](94, "i", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, " Remesas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "button", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](97, "i", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, " Electronicos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "H+bZ":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class ApiService {
    constructor(http) {
        this.http = http;
        this.cant = 100;
        this.url = "http://localhost:3000/api/" + this.cant;
    }
    getApiRest() {
        return this.http.get(this.url, {
            headers: { "Type-content": "aplication/json" }
        });
    }
}
ApiService.??fac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ApiService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: ApiService, factory: ApiService.??fac, providedIn: 'root' });


/***/ }),

/***/ "L+MI":
/*!*********************************************************!*\
  !*** ./src/app/components/criptos/criptos.component.ts ***!
  \*********************************************************/
/*! exports provided: CriptosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CriptosComponent", function() { return CriptosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function CriptosComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " Cargando, ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Por favor espere...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function CriptosComponent_tr_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](9, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", item_r2.id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r2.symbol);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](9, 4, item_r2.quote.USD.price));
} }
class CriptosComponent {
    constructor(_apiservice) {
        this._apiservice = _apiservice;
        this.loading = true;
    }
    ngOnInit() {
        this.loading = false;
        this._apiservice.getApiRest().subscribe((res) => {
            console.log(res);
            this.listaCriptos = res;
            this.loading = false;
        });
    }
}
CriptosComponent.??fac = function CriptosComponent_Factory(t) { return new (t || CriptosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"])); };
CriptosComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: CriptosComponent, selectors: [["app-criptos"]], decls: 18, vars: 2, consts: [["class", "loading", 4, "ngIf"], [1, "table"], ["scope", "col"], [1, "fa", "fa-list"], [1, "bi-list"], [4, "ngFor", "ngForOf"], [1, "loading"], ["role", "status", 1, "spinner-border"], ["scope", "row"]], template: function CriptosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, CriptosComponent_div_0_Template, 6, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Lista de criptomonedas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "ID ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Simbol ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Precio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](17, CriptosComponent_tr_17_Template, 10, 6, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.listaCriptos);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmlwdG9zLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.??fac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 5, vars: 0, consts: [[1, "container"], [1, "row"], [1, "col-12", "text-center", "py-3"], [1, "text-footer"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "transferdcoin.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "RUEf":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _components_criptos_criptos_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/criptos/criptos.component */ "L+MI");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_compra_compra_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/compra/compra.component */ "aR4O");



const ROUTES = [
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'compra', component: _components_compra_compra_component__WEBPACK_IMPORTED_MODULE_2__["CompraComponent"] },
    { path: 'criptos', component: _components_criptos_criptos_component__WEBPACK_IMPORTED_MODULE_0__["CriptosComponent"] },
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: '**', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] }
];


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");





class AppComponent {
    constructor(http) {
        this.http = http;
        /* console.log("constructor activo");
        this.http.get("http://localhost:3000/api")
        .subscribe((res)=>{
          console.log(res);
        }) */
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, consts: [["href", "", 1, "ws"], ["src", "../assets/logo-ws.png", 1, "w-100"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_criptos_criptos_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/criptos/criptos.component */ "L+MI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.routes */ "RUEf");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");
/* harmony import */ var _components_compra_compra_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/compra/compra.component */ "aR4O");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");














class AppModule {
}
AppModule.??fac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["????defineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_8__["ROUTES"])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        _components_criptos_criptos_component__WEBPACK_IMPORTED_MODULE_6__["CriptosComponent"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
        _components_compra_compra_component__WEBPACK_IMPORTED_MODULE_11__["CompraComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]] }); })();


/***/ }),

/***/ "aR4O":
/*!*******************************************************!*\
  !*** ./src/app/components/compra/compra.component.ts ***!
  \*******************************************************/
/*! exports provided: CompraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompraComponent", function() { return CompraComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CompraComponent {
    constructor() { }
    ngOnInit() {
    }
}
CompraComponent.??fac = function CompraComponent_Factory(t) { return new (t || CompraComponent)(); };
CompraComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: CompraComponent, selectors: [["app-compra"]], decls: 2, vars: 0, template: function CompraComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "compra works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wcmEuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "hrlM":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class NavbarComponent {
    constructor() {
        this.showmenu = false;
    }
    menuOf() {
        this.showmenu = !this.showmenu;
    }
    ngOnInit() {
    }
}
NavbarComponent.??fac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 42, vars: 0, consts: [[1, "header-blue", "shadow-in"], [1, "container"], [1, "row"], [1, "col-2"], [1, "col-8"], [1, "text-center", "pt-2"], ["routerLink", "home"], ["src", "../../../assets/logo.png", "alt", "", 1, "img-logo"], ["onclick", "openMenu()", 1, "menubtn", "d-md-none"], [1, "bi", "bi-list", "menu-ico"], ["id", "myDIV", 1, "hover-menu", "d-md-none"], ["onclick", "closeMenu()", 1, "boton-x"], [1, "bi", "bi-x-lg"], [1, "list-group", "list-group-flush"], ["routerLink", "home", "onclick", "closeMenu()", "type", "button", 1, "list-group-item", "list-group-item-action", "griz-o"], [1, "bi", "bi-house"], ["routerLink", "login", "onclick", "closeMenu()", "type", "button", 1, "list-group-item", "list-group-item-action", "griz-o"], [1, "bi", "bi-person"], ["routerLink", "registro", "onclick", "closeMenu()", "routerLink", "criptos", "type", "button", 1, "list-group-item", "list-group-item-action", "griz-o"], [1, "bi", "bi-file-earmark-person"], ["routerLink", "criptos", "onclick", "closeMenu()", 1, "list-group-item", "list-group-item-action", "griz-o"], [1, "bi", "bi-bar-chart"], ["routerLink", "guia", "type", "button", 1, "list-group-item", "list-group-item-action", "griz-o"], [1, "bi", "bi-book"], ["routerLink", "politicas", "type", "button", 1, "list-group-item", "list-group-item-action", "griz-o"], [1, "bi", "bi-file-lock"], [1, "list-group", "list-group-flush", "mt-3"], ["routerLink", "remesas", "type", "button", "disabled", "", 1, "list-group-item", "list-group-item-action"], [1, "bi", "bi-arrow-left-right"], ["routerLink", "electronicos", "type", "button", "disabled", "", 1, "list-group-item", "list-group-item-action"], [1, "bi", "bi-cash"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, " Inicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, " Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, " Registro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, " Criptomonedas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, " Guia de uso");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](33, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, " Politicas de privacidad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](37, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, " Remesas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, " Electronicos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.??fac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map