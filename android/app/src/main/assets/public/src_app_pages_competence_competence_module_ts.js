"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_competence_competence_module_ts"],{

/***/ 6917:
/*!***************************************************************!*\
  !*** ./src/app/pages/competence/competence-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompetencePageRoutingModule": () => (/* binding */ CompetencePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _competence_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./competence.page */ 2316);




const routes = [
    {
        path: '',
        component: _competence_page__WEBPACK_IMPORTED_MODULE_0__.CompetencePage
    }
];
let CompetencePageRoutingModule = class CompetencePageRoutingModule {
};
CompetencePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CompetencePageRoutingModule);



/***/ }),

/***/ 5082:
/*!*******************************************************!*\
  !*** ./src/app/pages/competence/competence.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompetencePageModule": () => (/* binding */ CompetencePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _competence_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./competence-routing.module */ 6917);
/* harmony import */ var _competence_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./competence.page */ 2316);







let CompetencePageModule = class CompetencePageModule {
};
CompetencePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _competence_routing_module__WEBPACK_IMPORTED_MODULE_0__.CompetencePageRoutingModule
        ],
        declarations: [_competence_page__WEBPACK_IMPORTED_MODULE_1__.CompetencePage]
    })
], CompetencePageModule);



/***/ }),

/***/ 2316:
/*!*****************************************************!*\
  !*** ./src/app/pages/competence/competence.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompetencePage": () => (/* binding */ CompetencePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _competence_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./competence.page.html?ngResource */ 611);
/* harmony import */ var _competence_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./competence.page.scss?ngResource */ 1871);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let CompetencePage = class CompetencePage {
    constructor() { }
    ngOnInit() {
    }
};
CompetencePage.ctorParameters = () => [];
CompetencePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-competence',
        template: _competence_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_competence_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CompetencePage);



/***/ }),

/***/ 1871:
/*!******************************************************************!*\
  !*** ./src/app/pages/competence/competence.page.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wZXRlbmNlLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 611:
/*!******************************************************************!*\
  !*** ./src/app/pages/competence/competence.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>competence</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_competence_competence_module_ts.js.map