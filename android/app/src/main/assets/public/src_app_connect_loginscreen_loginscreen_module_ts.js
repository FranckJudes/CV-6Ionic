"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_connect_loginscreen_loginscreen_module_ts"],{

/***/ 7157:
/*!*******************************************************************!*\
  !*** ./src/app/connect/loginscreen/loginscreen-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginscreenPageRoutingModule": () => (/* binding */ LoginscreenPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _loginscreen_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loginscreen.page */ 9119);




const routes = [
    {
        path: '',
        component: _loginscreen_page__WEBPACK_IMPORTED_MODULE_0__.LoginscreenPage
    }
];
let LoginscreenPageRoutingModule = class LoginscreenPageRoutingModule {
};
LoginscreenPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginscreenPageRoutingModule);



/***/ }),

/***/ 8486:
/*!***********************************************************!*\
  !*** ./src/app/connect/loginscreen/loginscreen.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginscreenPageModule": () => (/* binding */ LoginscreenPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _loginscreen_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loginscreen-routing.module */ 7157);
/* harmony import */ var _loginscreen_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loginscreen.page */ 9119);








let LoginscreenPageModule = class LoginscreenPageModule {
};
LoginscreenPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _loginscreen_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginscreenPageRoutingModule
        ],
        declarations: [_loginscreen_page__WEBPACK_IMPORTED_MODULE_1__.LoginscreenPage]
    })
], LoginscreenPageModule);



/***/ }),

/***/ 9119:
/*!*********************************************************!*\
  !*** ./src/app/connect/loginscreen/loginscreen.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginscreenPage": () => (/* binding */ LoginscreenPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _loginscreen_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loginscreen.page.html?ngResource */ 8796);
/* harmony import */ var _loginscreen_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loginscreen.page.scss?ngResource */ 5764);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);
/* harmony import */ var firebase_compat_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/compat/auth */ 7210);










let LoginscreenPage = class LoginscreenPage {
    constructor(formbuilder, router, nav, authservice, afAuth, alert, alertCtrl) {
        this.formbuilder = formbuilder;
        this.router = router;
        this.nav = nav;
        this.authservice = authservice;
        this.afAuth = afAuth;
        this.alert = alert;
        this.alertCtrl = alertCtrl;
        this.validationUserMessage = {
            email: [
                { type: "required", message: "Entrez votre Email" },
                { type: "pattern", message: "Email incorrect" }
            ],
            password: [
                { type: "required", message: "Entrez votre Mot de passe" },
                { type: "minlength", message: "Au moins 8 caractere" }
            ]
        };
    }
    //-------------------------------------------
    alerte(tete, msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.alle = yield this.alert.create({
                header: tete,
                message: msg,
                buttons: ['OK']
            });
        });
    }
    seconnecter(value) {
        console.log("hello");
        try {
            this.authservice.LoginFireauth(value).then(resp => {
                console.log(resp);
                this.router.navigate(['tabs']);
            });
        }
        catch (err) {
            console.log(err);
        }
    }
    sinscire() {
        this.router.navigate(['/signup']);
    }
    // }
    //-------------------------------------------------------------
    ngOnInit() {
        this.validationFormUser = this.formbuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(8)
            ]))
        });
    }
};
LoginscreenPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_8__.AngularFireAuth },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController }
];
LoginscreenPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-loginscreen',
        template: _loginscreen_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_loginscreen_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginscreenPage);



/***/ }),

/***/ 5764:
/*!**********************************************************************!*\
  !*** ./src/app/connect/loginscreen/loginscreen.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --ion-background-color: #E1EAF9 !important;\n}\n\nion-header {\n  position: absolue;\n}\n\nion-toolbar {\n  --ion-background-color: trasparent;\n  --opacity: 0;\n}\n\n.wrapform {\n  margin-top: 15px;\n}\n\nion-item {\n  color: #747B7E;\n  --border-color:#747B7E;\n  --highlight-color-focused:#647B9D;\n  --padding-start:0;\n  --inner-padding-end:0;\n  font-size: 18px;\n  padding: 10px;\n}\n\nion-item ion-input {\n  color: #647B9D;\n}\n\nion-icon {\n  padding-right: 20px;\n  font-size: 18px;\n}\n\n.mot_oublier {\n  text-align: right;\n}\n\n.mot_oublier ion-button {\n  font-size: 12px;\n  color: #044296;\n}\n\n.sign-btn-wrap {\n  text-align: center;\n  padding-top: 20px;\n}\n\n.sign-btn-wrap .sign-btn {\n  --ion-primary-color:#215AB7;\n  --background-activated:#E1EAF9;\n  --background-focused:#E1EAF9 ;\n  --background-hover: #647B9D;\n  color: #F4F6FA;\n  border-radius: 25px;\n  --background: #21A5B7;\n  background-color: #215AB7;\n}\n\nion-card {\n  --ion-background-color: transparent;\n  box-shadow: none !important;\n}\n\n.ion-card-footer {\n  width: 100%;\n  height: 40px;\n  align-items: center;\n  justify-content: center;\n  display: flex;\n}\n\n.ion-card-footer span {\n  color: #85888D;\n  font-size: 12px;\n  font-weight: 20%;\n}\n\n.ion-card-footer button {\n  background-color: transparent;\n  font-size: 14px;\n  font-weight: 40%;\n  padding-left: 3px;\n  color: #535558;\n}\n\nbutton:hover {\n  color: #969393;\n}\n\n.text-tag {\n  margin-top: 35px;\n  text-align: center;\n}\n\n.text-tag span {\n  font-size: 13px;\n  font-weight: normal;\n  color: #098585;\n}\n\n.social-btns {\n  margin-top: 25px;\n  text-align: center;\n}\n\n.social-btns ion-button {\n  width: 40px;\n  padding-left: 5px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luc2NyZWVuLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXFBST0pFVFMlMjBJT05JQ1xcQ1YtNklvbmljXFxzcmNcXGFwcFxcY29ubmVjdFxcbG9naW5zY3JlZW5cXGxvZ2luc2NyZWVuLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBDQUFBO0FDQ0o7O0FEQ0E7RUFDSSxpQkFBQTtBQ0VKOztBREFBO0VBQ0ksa0NBQUE7RUFDQSxZQUFBO0FDR0o7O0FEREE7RUFDSSxnQkFBQTtBQ0lKOztBREZBO0VBQ1EsY0FBQTtFQUNKLHNCQUFBO0VBQ0EsaUNBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0ksZUFBQTtFQUNBLGFBQUE7QUNLUjs7QURKSTtFQUNJLGNBQUE7QUNNUjs7QURIQTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtBQ01KOztBREpBO0VBQ0ksaUJBQUE7QUNPSjs7QUROSTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FDUVI7O0FETEE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0FDUUo7O0FEUEk7RUFDSSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUNTUjs7QURMQTtFQUNJLG1DQUFBO0VBQ0EsMkJBQUE7QUNRSjs7QUROQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7QUNTSjs7QURSSTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNVUjs7QURSSTtFQUNJLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDVVI7O0FEUEE7RUFDSSxjQUFBO0FDVUo7O0FEUkE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FDV0o7O0FEVkk7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDWVI7O0FEVEE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FDWUo7O0FEWEk7RUFDSSxXQUFBO0VBQ0EsNEJBQUE7QUNhUiIsImZpbGUiOiJsb2dpbnNjcmVlbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yIDogI0UxRUFGOSAhaW1wb3J0YW50O1xufVxuaW9uLWhlYWRlcntcbiAgICBwb3NpdGlvbjogYWJzb2x1ZTtcbn1cbmlvbi10b29sYmFye1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3IgOiB0cmFzcGFyZW50O1xuICAgIC0tb3BhY2l0eSA6IDA7XG59IFxuLndyYXBmb3Jte1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG59XG5pb24taXRlbXtcbiAgICAgICAgY29sb3I6Izc0N0I3RTtcbiAgICAtLWJvcmRlci1jb2xvcjojNzQ3QjdFO1xuICAgIC0taGlnaGxpZ2h0LWNvbG9yLWZvY3VzZWQgOiM2NDdCOUQ7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OjA7XG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDowO1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgaW9uLWlucHV0e1xuICAgICAgICBjb2xvcjogIzY0N0I5RDtcbiAgICB9XG59XG5pb24taWNvbntcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cbi5tb3Rfb3VibGllcntcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBpb24tYnV0dG9ue1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGNvbG9yOiAjMDQ0Mjk2O1xuICAgIH1cbn1cbi5zaWduLWJ0bi13cmFwe1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAuc2lnbi1idG57XG4gICAgICAgIC0taW9uLXByaW1hcnktY29sb3I6IzIxNUFCNztcbiAgICAgICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDojRTFFQUY5O1xuICAgICAgICAtLWJhY2tncm91bmQtZm9jdXNlZDojRTFFQUY5IDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjNjQ3QjlEOyBcbiAgICAgICAgY29sb3I6ICNGNEY2RkE7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgICAgIC0tYmFja2dyb3VuZCA6ICMyMUE1Qjc7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTVBQjc7XG4gICAgfVxuXG59XG5pb24tY2FyZHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG4uaW9uLWNhcmQtZm9vdGVye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgc3BhbntcbiAgICAgICAgY29sb3I6ICM4NTg4OEQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDIwJTtcbiAgICB9XG4gICAgYnV0dG9ue1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNDAlO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDNweCA7XG4gICAgICAgIGNvbG9yOiAjNTM1NTU4IDtcbiAgICB9XG59XG5idXR0b246aG92ZXJ7XG4gICAgY29sb3I6ICM5NjkzOTM7XG59XG4udGV4dC10YWd7XG4gICAgbWFyZ2luLXRvcDogMzVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgc3BhbntcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBjb2xvcjogIzA5ODU4NTtcbiAgICB9XG59XG4uc29jaWFsLWJ0bnN7XG4gICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaW9uLWJ1dHRvbntcbiAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogNXB4ICFpbXBvcnRhbnQgO1xuICAgIH1cbn0iLCJpb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNFMUVBRjkgIWltcG9ydGFudDtcbn1cblxuaW9uLWhlYWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHVlO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHRyYXNwYXJlbnQ7XG4gIC0tb3BhY2l0eTogMDtcbn1cblxuLndyYXBmb3JtIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuaW9uLWl0ZW0ge1xuICBjb2xvcjogIzc0N0I3RTtcbiAgLS1ib3JkZXItY29sb3I6Izc0N0I3RTtcbiAgLS1oaWdobGlnaHQtY29sb3ItZm9jdXNlZDojNjQ3QjlEO1xuICAtLXBhZGRpbmctc3RhcnQ6MDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDowO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5pb24taXRlbSBpb24taW5wdXQge1xuICBjb2xvcjogIzY0N0I5RDtcbn1cblxuaW9uLWljb24ge1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5tb3Rfb3VibGllciB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLm1vdF9vdWJsaWVyIGlvbi1idXR0b24ge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjMDQ0Mjk2O1xufVxuXG4uc2lnbi1idG4td3JhcCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG4uc2lnbi1idG4td3JhcCAuc2lnbi1idG4ge1xuICAtLWlvbi1wcmltYXJ5LWNvbG9yOiMyMTVBQjc7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6I0UxRUFGOTtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6I0UxRUFGOSA7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogIzY0N0I5RDtcbiAgY29sb3I6ICNGNEY2RkE7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIC0tYmFja2dyb3VuZDogIzIxQTVCNztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxNUFCNztcbn1cblxuaW9uLWNhcmQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWNhcmQtZm9vdGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uaW9uLWNhcmQtZm9vdGVyIHNwYW4ge1xuICBjb2xvcjogIzg1ODg4RDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogMjAlO1xufVxuLmlvbi1jYXJkLWZvb3RlciBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAlO1xuICBwYWRkaW5nLWxlZnQ6IDNweDtcbiAgY29sb3I6ICM1MzU1NTg7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIGNvbG9yOiAjOTY5MzkzO1xufVxuXG4udGV4dC10YWcge1xuICBtYXJnaW4tdG9wOiAzNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udGV4dC10YWcgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgY29sb3I6ICMwOTg1ODU7XG59XG5cbi5zb2NpYWwtYnRucyB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zb2NpYWwtYnRucyBpb24tYnV0dG9uIHtcbiAgd2lkdGg6IDQwcHg7XG4gIHBhZGRpbmctbGVmdDogNXB4ICFpbXBvcnRhbnQ7XG59Il19 */";

/***/ }),

/***/ 8796:
/*!**********************************************************************!*\
  !*** ./src/app/connect/loginscreen/loginscreen.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "\n<ion-content>\n  <ion-card class=\"ion-no-margin\">\n  \n    <ion-card-content>\n      <form [formGroup]=\"validationFormUser\" (ngSubmit)=\"seconnecter(validationFormUser.value)\">\n        <div class=\"wrapform\">\n          <ion-item>\n              <ion-icon name=\"mail-outline\"></ion-icon>\n              <ion-input name=\"email\" formControlName=\"email\" placeholder=\"E-mail\" required></ion-input>\n          </ion-item>\n          <div>\n            <ng-container *ngFor=\"let validation of validationUserMessage.email\">\n                  <div class=\"error_message\" *ngIf=\"validationFormUser.get('email').hasError(validation.type) && (validationFormUser.get('email').dirty || validationFormUser.get('email').touched)\">\n                     {{validation.message}}\n                  </div>\n            </ng-container>\n        </div>\n          <ion-item>\n            <ion-icon name=\"lock-closed-outline\"></ion-icon>\n            <ion-input name=\"password\" type=\"password\" formControlName=\"password\" placeholder=\"**********\"  required ></ion-input>\n          </ion-item>\n          <div>\n            <ng-container *ngFor=\"let validation of validationUserMessage.password\">\n                 <div class=\"error_message\" *ngIf=\"validationFormUser.get('password').hasError(validation.type) && (validationFormUser.get('password').dirty || validationFormUser.get('password').touched)\">\n                    {{validation.message}}\n                 </div>\n             </ng-container>\n        </div> \n        </div>\n        <div class=\"mot_oublier\">\n          <ion-button fill=\"clear\" class=\"ion-no-padding\">mot de passe oublier?</ion-button>\n        </div>\n        <div class=\"sign-btn-wrap\">\n          <ion-button fill=\"solid\" type=\"submit\" sclass=\"sign-btn\" [disabled]=\"!validationFormUser.valid\">Se Connecter</ion-button>\n        </div>\n        <div class=\"social-btns\">\n          <ion-button fill=\"clear\"  class=\"googlebtn ion-no-padding\">\n            <ion-img src=\"assets/IonicAssets/google.png\"></ion-img>\n          </ion-button>\n          <ion-button fill=\"clear\"  class=\"facebookbtn ion-no-padding\">\n            <ion-img src=\"assets/IonicAssets/facebook.png\"></ion-img>\n          </ion-button>\n          <ion-button fill=\"clear\"  class=\"facebookbtn ion-no-padding\">\n            <ion-img src=\"assets/IonicAssets/apple.png\"></ion-img>\n          </ion-button>\n\n        </div>\n      </form> \n    </ion-card-content>\n    <div class=\"ion-card-footer\">\n      <span>Tu n'as un Compte?</span><button class=\"ion-no-padding\" (click)=\"sinscire()\">S'inscire</button>\n    </div>\n  </ion-card>  \n   \n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_connect_loginscreen_loginscreen_module_ts.js.map