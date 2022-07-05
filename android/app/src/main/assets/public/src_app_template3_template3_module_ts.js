"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_template3_template3_module_ts"],{

/***/ 6770:
/*!*******************************************************!*\
  !*** ./src/app/template3/template3-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Template3PageRoutingModule": () => (/* binding */ Template3PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _template3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template3.page */ 1888);




const routes = [
    {
        path: '',
        component: _template3_page__WEBPACK_IMPORTED_MODULE_0__.Template3Page
    }
];
let Template3PageRoutingModule = class Template3PageRoutingModule {
};
Template3PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], Template3PageRoutingModule);



/***/ }),

/***/ 5052:
/*!***********************************************!*\
  !*** ./src/app/template3/template3.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Template3PageModule": () => (/* binding */ Template3PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _template3_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template3-routing.module */ 6770);
/* harmony import */ var _template3_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template3.page */ 1888);







let Template3PageModule = class Template3PageModule {
};
Template3PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _template3_routing_module__WEBPACK_IMPORTED_MODULE_0__.Template3PageRoutingModule
        ],
        declarations: [_template3_page__WEBPACK_IMPORTED_MODULE_1__.Template3Page]
    })
], Template3PageModule);



/***/ }),

/***/ 1888:
/*!*********************************************!*\
  !*** ./src/app/template3/template3.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Template3Page": () => (/* binding */ Template3Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _template3_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template3.page.html?ngResource */ 5323);
/* harmony import */ var _template3_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template3.page.scss?ngResource */ 3511);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let Template3Page = class Template3Page {
    constructor() { }
    ngOnInit() {
    }
};
Template3Page.ctorParameters = () => [];
Template3Page = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-template3',
        template: _template3_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_template3_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Template3Page);



/***/ }),

/***/ 3511:
/*!**********************************************************!*\
  !*** ./src/app/template3/template3.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "ion-col {\n  border: 1px solid grey;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbXBsYXRlMy5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXFBST0pFVFMlMjBJT05JQ1xcQ1YtNklvbmljXFxzcmNcXGFwcFxcdGVtcGxhdGUzXFx0ZW1wbGF0ZTMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtBQ0NKIiwiZmlsZSI6InRlbXBsYXRlMy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29sIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfSIsImlvbi1jb2wge1xuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */";

/***/ }),

/***/ 5323:
/*!**********************************************************!*\
  !*** ./src/app/template3/template3.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-app>\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Variable Width Columns</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content class=\"ion-padding\">\n    <h1>Grid With Columns with varying sizes based on content</h1>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          Nom prenom photo adress\n        </ion-col>\n      </ion-row>\n\n\n      <ion-row>\n        <ion-col size=\"2.5\">\n        <ion-progress-bar value=\"0.35\" color=\"danger\"></ion-progress-bar><br>\n        </ion-col>\n  \n\n        <ion-col size=\"2.5\">\n          second progress circle\n        </ion-col>\n        <ion-col size=\"2.5\">\n          third progress circle\n        </ion-col>\n        <ion-col size=\"2.5\">\n          fourth progress circle\n        </ion-col>\n        <ion-col size=\"2\">\n          fifth progress circle\n        </ion-col>\n      </ion-row>\n     \n\n\n\n\n      <ion-row>\n        <ion-col size=\"4\">\n          skill\n        </ion-col>\n        <ion-col size=\"4\">\n          personality\n        </ion-col>\n        <ion-col size=\"4\">\n         software\n        </ion-col>\n      </ion-row>\n\n\n\n    </ion-grid>\n  </ion-content>\n\n</ion-app>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_template3_template3_module_ts.js.map