"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_connect_signup_signup_module_ts"],{

/***/ 7931:
/*!*********************************************************!*\
  !*** ./src/app/connect/signup/signup-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPageRoutingModule": () => (/* binding */ SignupPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup.page */ 8175);




const routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_0__.SignupPage
    }
];
let SignupPageRoutingModule = class SignupPageRoutingModule {
};
SignupPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SignupPageRoutingModule);



/***/ }),

/***/ 7895:
/*!*************************************************!*\
  !*** ./src/app/connect/signup/signup.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPageModule": () => (/* binding */ SignupPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup-routing.module */ 7931);
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.page */ 8175);







let SignupPageModule = class SignupPageModule {
};
SignupPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__.SignupPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_1__.SignupPage]
    })
], SignupPageModule);



/***/ }),

/***/ 8175:
/*!***********************************************!*\
  !*** ./src/app/connect/signup/signup.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPage": () => (/* binding */ SignupPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _signup_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup.page.html?ngResource */ 8346);
/* harmony import */ var _signup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.page.scss?ngResource */ 2549);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);
/* harmony import */ var firebase_compat_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/compat/auth */ 7210);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);










let SignupPage = class SignupPage {
    constructor(router, afAuth, formbuilder, authService, alertCtrl, navCtr) {
        this.router = router;
        this.afAuth = afAuth;
        this.formbuilder = formbuilder;
        this.authService = authService;
        this.alertCtrl = alertCtrl;
        this.navCtr = navCtr;
        this.validationUserMessage = {
            names: [{ type: "required", message: "Entrez votre Nom complet" }],
            phone: [{ type: "required", message: "Entrez votre numero" }],
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
    ngOnInit() {
        this.validationFormUser = this.formbuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required
            ])),
            names: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(8)
            ]))
        });
    }
    registerUser(value) {
        // this.showalert();
        try {
            this.authService.userRegistration(value).then(response => {
                // console.log(response);
                if (response.user) {
                    this.router.navigate['/loginscreen'];
                }
                error => {
                    this.errorLoading(this.message);
                };
            });
        }
        catch (error) {
            console.log(error);
        }
    }
    gotosignIn() {
        this.router.navigate(['/loginscreen']);
    }
    showalert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            var load = yield this.alertCtrl.create({
                message: "Veuillez patientez ..."
            });
            load.present();
        });
    }
    errorLoading(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.alertCtrl.create({
                header: "Erreur de Creation",
                message: message,
                buttons: [{
                        text: 'OK',
                        handler: () => {
                            this.navCtr.navigateBack(['signup']);
                        }
                    }]
            });
        });
    }
};
SignupPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_7__.AngularFireAuth },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController }
];
SignupPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-signup',
        template: _signup_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_signup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SignupPage);



/***/ }),

/***/ 2549:
/*!************************************************************!*\
  !*** ./src/app/connect/signup/signup.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --ion-background-color: transparent;\n  --ion-item-background: transparent !important;\n}\n\n.bg-color {\n  background: #E1EAF9;\n}\n\nion-header {\n  position: absolute;\n}\n\nion-toolbar {\n  --ion-background-color:transparent;\n  --opacity:0;\n}\n\nion-card {\n  --ion-background-color:transparent;\n  box-shadow: none !important;\n  background-color: transparent !important;\n}\n\nion-card-title {\n  margin-top: 50px !important;\n  font-size: 25px;\n  color: #53565A;\n  font-weight: 600;\n  text-align: center;\n}\n\nion-card-subtitle {\n  text-align: center;\n  padding-top: 15px !important;\n  font-size: 13px;\n  color: #888C91;\n  font-weight: 400;\n  text-transform: none;\n  padding: 0 30px;\n}\n\nion-card-content {\n  padding-top: 10px;\n}\n\nion-item {\n  color: #74787E;\n  --border-color:#D4D7DB;\n  --highlight-color-focused:#215AB7;\n  --padding-start:0;\n  --inner-padding-end:0;\n  --highlight-color-invalid: #215AB7;\n  --highlight-color-valid: #215AB7;\n  font-size: 13px;\n}\n\nion-item ion-input {\n  color: #74787E;\n  font-size: 13px;\n}\n\nion-item ion-input ion-icon {\n  padding-right: 6px;\n  font-size: 18px;\n}\n\nion-item ion-input:hover {\n  color: #215AB7;\n}\n\n.ion-card-footer {\n  width: 100%;\n  height: 40px;\n  align-items: center;\n  justify-content: center;\n  display: flex;\n}\n\n.ion-card-footer span {\n  color: #85888D;\n  font-size: 12px;\n  font-weight: 20%;\n}\n\n.ion-card-footer button {\n  background-color: transparent;\n  font-size: 14px;\n  font-weight: 40%;\n  padding-left: 3px;\n  color: #535558;\n}\n\n.sign-btn-wrap {\n  text-align: center;\n  padding-top: 45px;\n}\n\n.sign-btn-wrap .sign-btn {\n  --ion-primary-color:#215AB7;\n  --background:#215AB7;\n  --background-activated:#E1EAF9;\n  --background-focused:#E1EAF9;\n  --background-hover:#647B9D;\n  color: #F4F6FA;\n  background-color: #215AB7;\n  border-radius: 25px;\n}\n\n.text-tag {\n  margin-top: 35px;\n  text-align: center;\n}\n\n.text-tag span {\n  font-size: 13px;\n  font-weight: normal;\n  color: #334862;\n}\n\n.social-btns {\n  margin-top: 18px;\n  text-align: center;\n}\n\n.social-btns ion-button {\n  width: 30px;\n  padding-left: 5px !important;\n}\n\n.error_message {\n  font-size: 6px;\n  font-weight: 200;\n  color: #913e87;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxQUk9KRVRTJTIwSU9OSUNcXENWLTZJb25pY1xcc3JjXFxhcHBcXGNvbm5lY3RcXHNpZ251cFxcc2lnbnVwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNBLG1DQUFBO0VBQ0EsNkNBQUE7QUNDQTs7QURHQTtFQUNBLG1CQUFBO0FDQUE7O0FER0E7RUFDSSxrQkFBQTtBQ0FKOztBREdBO0VBQ0ksa0NBQUE7RUFDQSxXQUFBO0FDQUo7O0FER0E7RUFDSSxrQ0FBQTtFQUNBLDJCQUFBO0VBQ0Esd0NBQUE7QUNBSjs7QURHQTtFQUNJLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQUo7O0FESUE7RUFDSSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBQ0RKOztBRElBO0VBQ0ksaUJBQUE7QUNESjs7QURJQTtFQUNJLGNBQUE7RUFDQSxzQkFBQTtFQUVBLGlDQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0NBQUE7RUFFSSxlQUFBO0FDSFI7O0FESVE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0ZSOztBREdJO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FDRFI7O0FES0k7RUFDQSxjQUFBO0FDSEo7O0FEVUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FDUEo7O0FEUUk7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDTlI7O0FEUUk7RUFDSSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ05SOztBRFVBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtBQ1BKOztBRFFJO0VBQ0EsMkJBQUE7RUFDQSxvQkFBQTtFQUNBLDhCQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FDTko7O0FEV0E7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FDUko7O0FEU0k7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDUEo7O0FEV0E7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FDUko7O0FEU0k7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7QUNQSjs7QURXQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNSSiIsImZpbGUiOiJzaWdudXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XG4tLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbi0taW9uLWl0ZW0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgXG59XG5cbi5iZy1jb2xvcntcbmJhY2tncm91bmQ6ICNFMUVBRjk7XG59XG5cbmlvbi1oZWFkZXJ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG5pb24tdG9vbGJhcntcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xuICAgIC0tb3BhY2l0eTowO1xufVxuXG5pb24tY2FyZHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG5pb24tY2FyZC10aXRsZXtcbiAgICBtYXJnaW4tdG9wOiA1MHB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGNvbG9yOiAjNTM1NjVBO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG59XG5cbmlvbi1jYXJkLXN1YnRpdGxle1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogMTVweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBjb2xvcjogIzg4OEM5MTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgIHBhZGRpbmc6IDAgMzBweDtcbn1cblxuaW9uLWNhcmQtY29udGVudHtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgIFxufVxuaW9uLWl0ZW17XG4gICAgY29sb3I6Izc0Nzg3RTtcbiAgICAtLWJvcmRlci1jb2xvcjojRDREN0RCO1xuXG4gICAgLS1oaWdobGlnaHQtY29sb3ItZm9jdXNlZDojMjE1QUI3O1xuICAgIC0tcGFkZGluZy1zdGFydDowO1xuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6MDtcbiAgICAtLWhpZ2hsaWdodC1jb2xvci1pbnZhbGlkOiAjMjE1QUI3O1xuICAgIC0taGlnaGxpZ2h0LWNvbG9yLXZhbGlkOiAjMjE1QUI3OyBcbiAgICBcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBpb24taW5wdXR7XG4gICAgICAgIGNvbG9yOiM3NDc4N0U7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBpb24taWNvbntcbiAgICAgICAgcGFkZGluZy1yaWdodDogNnB4O1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpb24taW5wdXQ6aG92ZXJ7XG4gICAgY29sb3I6IzIxNUFCNztcblxuICAgIH1cblxuXG5cbn1cbi5pb24tY2FyZC1mb290ZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBzcGFue1xuICAgICAgICBjb2xvcjogIzg1ODg4RDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBmb250LXdlaWdodDogMjAlO1xuICAgIH1cbiAgICBidXR0b257XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MCU7XG4gICAgICAgIHBhZGRpbmctbGVmdDogM3B4IDtcbiAgICAgICAgY29sb3I6ICM1MzU1NTggO1xuICAgIH1cbn1cblxuLnNpZ24tYnRuLXdyYXB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiA0NXB4O1xuICAgIC5zaWduLWJ0bntcbiAgICAtLWlvbi1wcmltYXJ5LWNvbG9yOiMyMTVBQjc7XG4gICAgLS1iYWNrZ3JvdW5kOiMyMTVBQjc7XG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDojRTFFQUY5O1xuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiNFMUVBRjk7XG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiM2NDdCOUQ7XG4gICAgY29sb3I6I0Y0RjZGQTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE1QUI3O1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG5cbiAgICB9XG59XG5cbi50ZXh0LXRhZ3tcbiAgICBtYXJnaW4tdG9wOiAzNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBzcGFue1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGNvbG9yOiMzMzQ4NjI7XG4gICAgfVxufVxuXG4uc29jaWFsLWJ0bnN7XG4gICAgbWFyZ2luLXRvcDogMThweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaW9uLWJ1dHRvbntcbiAgICB3aWR0aDozMHB4O1xuICAgIHBhZGRpbmctbGVmdDogNXB4ICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG4uZXJyb3JfbWVzc2FnZXtcbiAgICBmb250LXNpemU6IDZweDtcbiAgICBmb250LXdlaWdodCA6IDIwMDtcbiAgICBjb2xvcjogIzkxM2U4NztcblxufSIsImlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuLmJnLWNvbG9yIHtcbiAgYmFja2dyb3VuZDogI0UxRUFGOTtcbn1cblxuaW9uLWhlYWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xuICAtLW9wYWNpdHk6MDtcbn1cblxuaW9uLWNhcmQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jYXJkLXRpdGxlIHtcbiAgbWFyZ2luLXRvcDogNTBweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDI1cHg7XG4gIGNvbG9yOiAjNTM1NjVBO1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1jYXJkLXN1YnRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMTVweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjODg4QzkxO1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgcGFkZGluZzogMCAzMHB4O1xufVxuXG5pb24tY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbmlvbi1pdGVtIHtcbiAgY29sb3I6ICM3NDc4N0U7XG4gIC0tYm9yZGVyLWNvbG9yOiNENEQ3REI7XG4gIC0taGlnaGxpZ2h0LWNvbG9yLWZvY3VzZWQ6IzIxNUFCNztcbiAgLS1wYWRkaW5nLXN0YXJ0OjA7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6MDtcbiAgLS1oaWdobGlnaHQtY29sb3ItaW52YWxpZDogIzIxNUFCNztcbiAgLS1oaWdobGlnaHQtY29sb3ItdmFsaWQ6ICMyMTVBQjc7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbmlvbi1pdGVtIGlvbi1pbnB1dCB7XG4gIGNvbG9yOiAjNzQ3ODdFO1xuICBmb250LXNpemU6IDEzcHg7XG59XG5pb24taXRlbSBpb24taW5wdXQgaW9uLWljb24ge1xuICBwYWRkaW5nLXJpZ2h0OiA2cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbmlvbi1pdGVtIGlvbi1pbnB1dDpob3ZlciB7XG4gIGNvbG9yOiAjMjE1QUI3O1xufVxuXG4uaW9uLWNhcmQtZm9vdGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uaW9uLWNhcmQtZm9vdGVyIHNwYW4ge1xuICBjb2xvcjogIzg1ODg4RDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogMjAlO1xufVxuLmlvbi1jYXJkLWZvb3RlciBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAlO1xuICBwYWRkaW5nLWxlZnQ6IDNweDtcbiAgY29sb3I6ICM1MzU1NTg7XG59XG5cbi5zaWduLWJ0bi13cmFwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogNDVweDtcbn1cbi5zaWduLWJ0bi13cmFwIC5zaWduLWJ0biB7XG4gIC0taW9uLXByaW1hcnktY29sb3I6IzIxNUFCNztcbiAgLS1iYWNrZ3JvdW5kOiMyMTVBQjc7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6I0UxRUFGOTtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6I0UxRUFGOTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiM2NDdCOUQ7XG4gIGNvbG9yOiAjRjRGNkZBO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE1QUI3O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuXG4udGV4dC10YWcge1xuICBtYXJnaW4tdG9wOiAzNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udGV4dC10YWcgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgY29sb3I6ICMzMzQ4NjI7XG59XG5cbi5zb2NpYWwtYnRucyB7XG4gIG1hcmdpbi10b3A6IDE4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zb2NpYWwtYnRucyBpb24tYnV0dG9uIHtcbiAgd2lkdGg6IDMwcHg7XG4gIHBhZGRpbmctbGVmdDogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5lcnJvcl9tZXNzYWdlIHtcbiAgZm9udC1zaXplOiA2cHg7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIGNvbG9yOiAjOTEzZTg3O1xufSJdfQ== */";

/***/ }),

/***/ 8346:
/*!************************************************************!*\
  !*** ./src/app/connect/signup/signup.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-content class=\"bg-color ion-no-margin\">\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>\n          Inscription\n      </ion-card-title>\n      <ion-card-subtitle>\n        Creation d'un CV\n      </ion-card-subtitle>\n    </ion-card-header>\n        <ion-card-content>\n        <form [formGroup]=\"validationFormUser\" (ngSubmit)=\"registerUser(validationFormUser.value)\">\n          <ion-item>\n              <ion-input name=\"names\" type=\"text\" placeholder=\"Votre nom\"  formControlName=\"names\">\n                <ion-icon name=\"person-outline\"></ion-icon>\n            </ion-input>\n          </ion-item>\n          <ng-container *ngFor=\"let validation of validationUserMessage.names\">\n            <div class=\"error_message\" *ngIf=\"validationFormUser.get('names').hasError(validation.type) && (validationFormUser.get('names').dirty || validationFormUser.get('names').touched)\">\n               {{validation.message}}\n            </div>\n          </ng-container>  \n          <ion-item>\n            <ion-input name=\"phone\" type=\"number\" placeholder=\"No. Telephone\"  formControlName=\"phone\">\n              <ion-icon name=\"call-outline\"></ion-icon>\n            </ion-input>\n        </ion-item>\n        <ng-container *ngFor=\"let validation of validationUserMessage.phone\">\n          <div class=\"error_message\" *ngIf=\"validationFormUser.get('phone').hasError(validation.type) && (validationFormUser.get('phone').dirty || validationFormUser.get('phone').touched)\">\n             {{validation.message}}\n          </div>\n        </ng-container>\n        <ion-item>\n            <ion-input name=\"email\" type=\"text\" placeholder=\"E-mail\"  formControlName=\"email\">\n              <ion-icon name=\"mail-outline\"></ion-icon>\n            </ion-input>\n        </ion-item>\n        <ng-container *ngFor=\"let validation of validationUserMessage.email\">\n          <div class=\"error_message\" *ngIf=\"validationFormUser.get('email').hasError(validation.type) && (validationFormUser.get('email').dirty || validationFormUser.get('email').touched)\">\n             {{validation.message}}\n          </div>\n        </ng-container>\n        <ion-item>\n            <ion-input name=\"email\" type=\"password\" placeholder=\"password\"  formControlName=\"password\">\n              <ion-icon name=\"lock-closed-outline\"></ion-icon>            \n            </ion-input>\n        </ion-item>\n        <ng-container *ngFor=\"let validation of validationUserMessage.password\">\n          <div class=\"error_message\" *ngIf=\"validationFormUser.get('password').hasError(validation.type) && (validationFormUser.get('password').dirty || validationFormUser.get('password').touched)\">\n             {{validation.message}}\n          </div>\n        </ng-container>\n        <div class=\"sign-btn-wrap\">\n          <ion-button fill=\"solid\" size=\"small\" type=\"submit \"shape=\"round\" class=\"sign-btn\"  [disabled]=\"!validationFormUser.valid\">S'inscrire</ion-button>\n        </div>\n   \n    \n      <div class=\"social-btns\">\n        <ion-button fill=\"clear\"  class=\"googlebtn ion-no-padding\">\n          <ion-img src=\"assets/IonicAssets/google.png\"></ion-img>\n        </ion-button>\n        <ion-button fill=\"clear\"  class=\"facebookbtn ion-no-padding\">\n          <ion-img src=\"assets/IonicAssets/facebook.png\"></ion-img>\n        </ion-button>\n        <ion-button fill=\"clear\"  class=\"facebookbtn ion-no-padding\">\n          <ion-img src=\"assets/IonicAssets/apple.png\"></ion-img>\n        </ion-button>\n      </div>\n        <div class=\"ion-card-footer\">\n          <span>Tu as un Compte?</span><button class=\"ion-no-padding\"  (click)=\"gotosignIn()\">Connexion</button>\n        </div>\n      </form>   \n    </ion-card-content>\n  </ion-card>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_connect_signup_signup_module_ts.js.map