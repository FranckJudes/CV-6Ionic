"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_connect_login_login_module_ts"],{

/***/ 3733:
/*!*******************************************************!*\
  !*** ./src/app/connect/login/login-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 1235);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 494:
/*!***********************************************!*\
  !*** ./src/app/connect/login/login.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 3733);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 1235);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 1235:
/*!*********************************************!*\
  !*** ./src/app/connect/login/login.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page.html?ngResource */ 4426);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 853);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);





let LoginPage = class LoginPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    gotosignUp() {
        this.router.navigate(['signup']);
    }
    gotosignIn() {
        this.router.navigate(['loginscreen']);
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-login',
        template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 853:
/*!**********************************************************!*\
  !*** ./src/app/connect/login/login.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --ion-background-color: #f7f3f7 !important;\n}\n\nion-header {\n  position: absolue;\n}\n\nion-toolbar {\n  --ion-background-color: trasparent;\n  --opacity: 0;\n}\n\nion-card {\n  --ion-background-color:trasparent;\n  box-shadow: none !important;\n}\n\nion-card-title {\n  margin-top: 30px;\n  font-size: 40px;\n  color: #080808;\n  text-align: center;\n  font-weight: 600;\n}\n\nion-card-subtitle {\n  padding-top: 15px;\n  font-size: 11px;\n  color: #898585;\n  text-align: center;\n  font-weight: 300;\n}\n\n.signin-bts {\n  margin-top: 40px;\n  text-align: center;\n  color: #F0F4FA;\n}\n\n.loginbtn {\n  --ion-color-primary: #2d5ab6;\n}\n\n.text-tag {\n  margin-top: 35px;\n  text-align: center;\n}\n\n.text-tag span {\n  font-size: 13px;\n  font-weight: normal;\n}\n\n.social-btns {\n  text-align: center;\n}\n\n.social-btns ion-button {\n  width: 40px;\n  padding-left: 5px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXFBST0pFVFMlMjBJT05JQ1xcQ1YtNklvbmljXFxzcmNcXGFwcFxcY29ubmVjdFxcbG9naW5cXGxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBDQUFBO0FDQ0o7O0FEQ0E7RUFDSSxpQkFBQTtBQ0VKOztBREFBO0VBQ0ksa0NBQUE7RUFDQSxZQUFBO0FDR0o7O0FEREE7RUFDSSxpQ0FBQTtFQUNBLDJCQUFBO0FDSUo7O0FERkE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0tKOztBREZBO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNLSjs7QURIQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDTUo7O0FESkE7RUFDSSw0QkFBQTtBQ09KOztBRExBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQ1FKOztBRFBJO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0FDU1I7O0FETkE7RUFDSSxrQkFBQTtBQ1NKOztBRFJJO0VBQ0ksV0FBQTtFQUNBLDRCQUFBO0FDVVIiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvciA6ICNmN2YzZjcgIWltcG9ydGFudDtcbn1cbmlvbi1oZWFkZXJ7XG4gICAgcG9zaXRpb246IGFic29sdWU7XG59XG5pb24tdG9vbGJhcntcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yIDogdHJhc3BhcmVudDtcbiAgICAtLW9wYWNpdHkgOiAwO1xufVxuaW9uLWNhcmR7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjp0cmFzcGFyZW50O1xuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cbmlvbi1jYXJkLXRpdGxle1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIGNvbG9yOiAjMDgwODA4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuXG59XG5pb24tY2FyZC1zdWJ0aXRsZXtcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgY29sb3I6ICM4OTg1ODU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4uc2lnbmluLWJ0c3tcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI0YwRjRGQTtcbn1cbi5sb2dpbmJ0bntcbiAgICAtLWlvbi1jb2xvci1wcmltYXJ5IDogIzJkNWFiNjtcbn1cbi50ZXh0LXRhZ3tcbiAgICBtYXJnaW4tdG9wOiAzNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBzcGFue1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgfVxufVxuLnNvY2lhbC1idG5ze1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBpb24tYnV0dG9ue1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHggIWltcG9ydGFudCA7XG4gICAgfVxufVxuXG4iLCJpb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNmN2YzZjcgIWltcG9ydGFudDtcbn1cblxuaW9uLWhlYWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHVlO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHRyYXNwYXJlbnQ7XG4gIC0tb3BhY2l0eTogMDtcbn1cblxuaW9uLWNhcmQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOnRyYXNwYXJlbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuaW9uLWNhcmQtdGl0bGUge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBmb250LXNpemU6IDQwcHg7XG4gIGNvbG9yOiAjMDgwODA4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbmlvbi1jYXJkLXN1YnRpdGxlIHtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgY29sb3I6ICM4OTg1ODU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLnNpZ25pbi1idHMge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjRjBGNEZBO1xufVxuXG4ubG9naW5idG4ge1xuICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjMmQ1YWI2O1xufVxuXG4udGV4dC10YWcge1xuICBtYXJnaW4tdG9wOiAzNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udGV4dC10YWcgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLnNvY2lhbC1idG5zIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnNvY2lhbC1idG5zIGlvbi1idXR0b24ge1xuICB3aWR0aDogNDBweDtcbiAgcGFkZGluZy1sZWZ0OiA1cHggIWltcG9ydGFudDtcbn0iXX0= */";

/***/ }),

/***/ 4426:
/*!**********************************************************!*\
  !*** ./src/app/connect/login/login.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "\n<ion-content>\n  <ion-card>\n     <ion-card-header>\n      <ion-card-title>Bienvenue</ion-card-title>\n      <ion-card-subtitle class=\"ion-text-lowercase\">Mon application de Cv en ligne developper Ionic/Angular Groupe 6 ICT202</ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content>\n      <div class=\"signin-bts\">\n        <ion-button fill=\"solid\" size=\"small\" shape=\"round\" class=\"loginbtn\" (click)=\"gotosignUp()\">Inscrire</ion-button>\n        <ion-button fill=\"outline\" size=\"small\"  shape=\"round\" color=\"dark\" (click)=\"gotosignIn()\" >Connecter</ion-button>\n\n      </div>\n      <div class=\"text-tag\">\n        <span>Ou via Reseau Social</span>\n      </div>\n      <div class=\"social-btns\">\n        <ion-button fill=\"clear\"  class=\"googlebtn ion-no-padding\">\n          <ion-img src=\"assets/IonicAssets/google.png\"></ion-img>\n        </ion-button>\n        <ion-button fill=\"clear\"  class=\"facebookbtn ion-no-padding\">\n          <ion-img src=\"assets/IonicAssets/facebook.png\"></ion-img>\n        </ion-button>\n        <ion-button fill=\"clear\"  class=\"facebookbtn ion-no-padding\">\n          <ion-img src=\"assets/IonicAssets/apple.png\"></ion-img>\n        </ion-button>\n\n      </div>\n    </ion-card-content>\n    <ion-card-content>\n     \n\n      \n    </ion-card-content>\n    \n  </ion-card>\n</ion-content>\n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_connect_login_login_module_ts.js.map