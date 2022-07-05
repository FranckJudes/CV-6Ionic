"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_scolaire_scolaire_module_ts"],{

/***/ 4665:
/*!***********************************************************!*\
  !*** ./src/app/pages/scolaire/scolaire-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScolairePageRoutingModule": () => (/* binding */ ScolairePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _scolaire_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scolaire.page */ 9335);




const routes = [
    {
        path: '',
        component: _scolaire_page__WEBPACK_IMPORTED_MODULE_0__.ScolairePage
    }
];
let ScolairePageRoutingModule = class ScolairePageRoutingModule {
};
ScolairePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ScolairePageRoutingModule);



/***/ }),

/***/ 2703:
/*!***************************************************!*\
  !*** ./src/app/pages/scolaire/scolaire.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScolairePageModule": () => (/* binding */ ScolairePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _scolaire_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scolaire-routing.module */ 4665);
/* harmony import */ var _scolaire_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scolaire.page */ 9335);







let ScolairePageModule = class ScolairePageModule {
};
ScolairePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _scolaire_routing_module__WEBPACK_IMPORTED_MODULE_0__.ScolairePageRoutingModule
        ],
        declarations: [_scolaire_page__WEBPACK_IMPORTED_MODULE_1__.ScolairePage]
    })
], ScolairePageModule);



/***/ }),

/***/ 9335:
/*!*************************************************!*\
  !*** ./src/app/pages/scolaire/scolaire.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScolairePage": () => (/* binding */ ScolairePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _scolaire_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scolaire.page.html?ngResource */ 9260);
/* harmony import */ var _scolaire_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scolaire.page.scss?ngResource */ 7369);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let ScolairePage = class ScolairePage {
    constructor() { }
    ngOnInit() {
    }
};
ScolairePage.ctorParameters = () => [];
ScolairePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-scolaire',
        template: _scolaire_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_scolaire_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ScolairePage);



/***/ }),

/***/ 7369:
/*!**************************************************************!*\
  !*** ./src/app/pages/scolaire/scolaire.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzY29sYWlyZS5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 9260:
/*!**************************************************************!*\
  !*** ./src/app/pages/scolaire/scolaire.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>scolaire</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_scolaire_scolaire_module_ts.js.map