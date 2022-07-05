"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_apropos_apropos_module_ts"],{

/***/ 4580:
/*!*********************************************************!*\
  !*** ./src/app/pages/apropos/apropos-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AproposPageRoutingModule": () => (/* binding */ AproposPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _apropos_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apropos.page */ 1709);




const routes = [
    {
        path: '',
        component: _apropos_page__WEBPACK_IMPORTED_MODULE_0__.AproposPage
    }
];
let AproposPageRoutingModule = class AproposPageRoutingModule {
};
AproposPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AproposPageRoutingModule);



/***/ }),

/***/ 7047:
/*!*************************************************!*\
  !*** ./src/app/pages/apropos/apropos.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AproposPageModule": () => (/* binding */ AproposPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _apropos_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apropos-routing.module */ 4580);
/* harmony import */ var _apropos_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apropos.page */ 1709);







let AproposPageModule = class AproposPageModule {
};
AproposPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _apropos_routing_module__WEBPACK_IMPORTED_MODULE_0__.AproposPageRoutingModule
        ],
        declarations: [_apropos_page__WEBPACK_IMPORTED_MODULE_1__.AproposPage]
    })
], AproposPageModule);



/***/ }),

/***/ 1709:
/*!***********************************************!*\
  !*** ./src/app/pages/apropos/apropos.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AproposPage": () => (/* binding */ AproposPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _apropos_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apropos.page.html?ngResource */ 701);
/* harmony import */ var _apropos_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apropos.page.scss?ngResource */ 4170);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let AproposPage = class AproposPage {
    constructor() { }
    ngOnInit() {
    }
};
AproposPage.ctorParameters = () => [];
AproposPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-apropos',
        template: _apropos_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_apropos_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AproposPage);



/***/ }),

/***/ 4170:
/*!************************************************************!*\
  !*** ./src/app/pages/apropos/apropos.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHJvcG9zLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 701:
/*!************************************************************!*\
  !*** ./src/app/pages/apropos/apropos.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>apropos</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_apropos_apropos_module_ts.js.map