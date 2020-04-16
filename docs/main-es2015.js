(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./modules/account/account.module": [
		"./src/app/modules/account/account.module.ts",
		"modules-account-account-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/auth/components/registration/registration.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/auth/components/registration/registration.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"registration\">\n  <div class=\"registration__container\">\n    <nav class=\"registration__nav\">\n      <a [routerLink]=\"['/auth/registration']\" routerLinkActive=\"registration__nav-link_active\" class=\"registration__nav-link\">Регистрация</a>\n      <a [routerLink]=\"['/auth/login']\" routerLinkActive=\"registration__nav-link_active\" class=\"registration__nav-link\">Вход</a>\n    </nav>\n    <form class=\"form\" [formGroup]=\"registrationGroup\">\n      <label class=\"form__label\">\n        <span class=\"form__label-title\">Имя</span>\n        <input type=\"text\" class=\"form__control\" placeholder=\"Alex\" formControlName=\"userName\">\n      </label>\n      <label class=\"form__label\">\n        <span class=\"form__label-title\">Email</span>\n        <input type=\"email\" class=\"form__control\" placeholder=\"Alex@example.ru\" formControlName=\"email\">\n      </label>\n      <label class=\"form__label\">\n        <span class=\"form__label-title\">Пароль</span>\n        <input type=\"password\" class=\"form__control\" placeholder=\"password\" formControlName=\"password\">\n      </label>\n      <button class=\"form__button\" [disabled]=\"!registrationGroup.valid\" (click)=\"onSubmit()\">\n        <span *ngIf=\"!isLoading\">Регистрация</span>\n        <span *ngIf=\"isLoading\" class=\"ti-reload\"></span>\n      </button>\n    </form>\n  </div>\n</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _modules_auth_components_registration_registration_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/auth/components/registration/registration.component */ "./src/app/modules/auth/components/registration/registration.component.ts");
/* harmony import */ var _services_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/guards/auth.guard */ "./src/app/services/guards/auth.guard.ts");





const routes = [
    {
        path: 'auth',
        children: [
            {
                path: '',
                redirectTo: 'registration',
                pathMatch: 'full',
            },
            {
                path: 'registration',
                component: _modules_auth_components_registration_registration_component__WEBPACK_IMPORTED_MODULE_3__["RegistrationComponent"],
            },
        ],
    },
    {
        path: 'account',
        loadChildren: './modules/account/account.module#AccountModule',
        canActivate: [_services_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _modules_auth_auth_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/auth/auth.module */ "./src/app/modules/auth/auth.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _services_jwt_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/jwt.interceptor */ "./src/app/services/jwt.interceptor.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_fake_back_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/fake-back.interceptor */ "./src/app/services/fake-back.interceptor.ts");










let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _modules_auth_auth_module__WEBPACK_IMPORTED_MODULE_5__["AuthModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
        ],
        providers: [
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"], useClass: _services_jwt_interceptor__WEBPACK_IMPORTED_MODULE_7__["JwtInterceptor"], multi: true },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"], useClass: _services_fake_back_interceptor__WEBPACK_IMPORTED_MODULE_9__["FakeBackInterceptor"], multi: true },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/modules/auth/auth.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/auth/auth.module.ts ***!
  \*********************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/registration/registration.component */ "./src/app/modules/auth/components/registration/registration.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let AuthModule = class AuthModule {
};
AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_components_registration_registration_component__WEBPACK_IMPORTED_MODULE_3__["RegistrationComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
        ]
    })
], AuthModule);



/***/ }),

/***/ "./src/app/modules/auth/components/registration/registration.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/auth/components/registration/registration.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n[class^=ti-], [class*=\" ti-\"] {\n  font-family: \"themify\";\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.ti-wand:before {\n  content: \"\";\n}\n.ti-volume:before {\n  content: \"\";\n}\n.ti-user:before {\n  content: \"\";\n}\n.ti-unlock:before {\n  content: \"\";\n}\n.ti-unlink:before {\n  content: \"\";\n}\n.ti-trash:before {\n  content: \"\";\n}\n.ti-thought:before {\n  content: \"\";\n}\n.ti-target:before {\n  content: \"\";\n}\n.ti-tag:before {\n  content: \"\";\n}\n.ti-tablet:before {\n  content: \"\";\n}\n.ti-star:before {\n  content: \"\";\n}\n.ti-spray:before {\n  content: \"\";\n}\n.ti-signal:before {\n  content: \"\";\n}\n.ti-shopping-cart:before {\n  content: \"\";\n}\n.ti-shopping-cart-full:before {\n  content: \"\";\n}\n.ti-settings:before {\n  content: \"\";\n}\n.ti-search:before {\n  content: \"\";\n}\n.ti-zoom-in:before {\n  content: \"\";\n}\n.ti-zoom-out:before {\n  content: \"\";\n}\n.ti-cut:before {\n  content: \"\";\n}\n.ti-ruler:before {\n  content: \"\";\n}\n.ti-ruler-pencil:before {\n  content: \"\";\n}\n.ti-ruler-alt:before {\n  content: \"\";\n}\n.ti-bookmark:before {\n  content: \"\";\n}\n.ti-bookmark-alt:before {\n  content: \"\";\n}\n.ti-reload:before {\n  content: \"\";\n}\n.ti-plus:before {\n  content: \"\";\n}\n.ti-pin:before {\n  content: \"\";\n}\n.ti-pencil:before {\n  content: \"\";\n}\n.ti-pencil-alt:before {\n  content: \"\";\n}\n.ti-paint-roller:before {\n  content: \"\";\n}\n.ti-paint-bucket:before {\n  content: \"\";\n}\n.ti-na:before {\n  content: \"\";\n}\n.ti-mobile:before {\n  content: \"\";\n}\n.ti-minus:before {\n  content: \"\";\n}\n.ti-medall:before {\n  content: \"\";\n}\n.ti-medall-alt:before {\n  content: \"\";\n}\n.ti-marker:before {\n  content: \"\";\n}\n.ti-marker-alt:before {\n  content: \"\";\n}\n.ti-arrow-up:before {\n  content: \"\";\n}\n.ti-arrow-right:before {\n  content: \"\";\n}\n.ti-arrow-left:before {\n  content: \"\";\n}\n.ti-arrow-down:before {\n  content: \"\";\n}\n.ti-lock:before {\n  content: \"\";\n}\n.ti-location-arrow:before {\n  content: \"\";\n}\n.ti-link:before {\n  content: \"\";\n}\n.ti-layout:before {\n  content: \"\";\n}\n.ti-layers:before {\n  content: \"\";\n}\n.ti-layers-alt:before {\n  content: \"\";\n}\n.ti-key:before {\n  content: \"\";\n}\n.ti-import:before {\n  content: \"\";\n}\n.ti-image:before {\n  content: \"\";\n}\n.ti-heart:before {\n  content: \"\";\n}\n.ti-heart-broken:before {\n  content: \"\";\n}\n.ti-hand-stop:before {\n  content: \"\";\n}\n.ti-hand-open:before {\n  content: \"\";\n}\n.ti-hand-drag:before {\n  content: \"\";\n}\n.ti-folder:before {\n  content: \"\";\n}\n.ti-flag:before {\n  content: \"\";\n}\n.ti-flag-alt:before {\n  content: \"\";\n}\n.ti-flag-alt-2:before {\n  content: \"\";\n}\n.ti-eye:before {\n  content: \"\";\n}\n.ti-export:before {\n  content: \"\";\n}\n.ti-exchange-vertical:before {\n  content: \"\";\n}\n.ti-desktop:before {\n  content: \"\";\n}\n.ti-cup:before {\n  content: \"\";\n}\n.ti-crown:before {\n  content: \"\";\n}\n.ti-comments:before {\n  content: \"\";\n}\n.ti-comment:before {\n  content: \"\";\n}\n.ti-comment-alt:before {\n  content: \"\";\n}\n.ti-close:before {\n  content: \"\";\n}\n.ti-clip:before {\n  content: \"\";\n}\n.ti-angle-up:before {\n  content: \"\";\n}\n.ti-angle-right:before {\n  content: \"\";\n}\n.ti-angle-left:before {\n  content: \"\";\n}\n.ti-angle-down:before {\n  content: \"\";\n}\n.ti-check:before {\n  content: \"\";\n}\n.ti-check-box:before {\n  content: \"\";\n}\n.ti-camera:before {\n  content: \"\";\n}\n.ti-announcement:before {\n  content: \"\";\n}\n.ti-brush:before {\n  content: \"\";\n}\n.ti-briefcase:before {\n  content: \"\";\n}\n.ti-bolt:before {\n  content: \"\";\n}\n.ti-bolt-alt:before {\n  content: \"\";\n}\n.ti-blackboard:before {\n  content: \"\";\n}\n.ti-bag:before {\n  content: \"\";\n}\n.ti-move:before {\n  content: \"\";\n}\n.ti-arrows-vertical:before {\n  content: \"\";\n}\n.ti-arrows-horizontal:before {\n  content: \"\";\n}\n.ti-fullscreen:before {\n  content: \"\";\n}\n.ti-arrow-top-right:before {\n  content: \"\";\n}\n.ti-arrow-top-left:before {\n  content: \"\";\n}\n.ti-arrow-circle-up:before {\n  content: \"\";\n}\n.ti-arrow-circle-right:before {\n  content: \"\";\n}\n.ti-arrow-circle-left:before {\n  content: \"\";\n}\n.ti-arrow-circle-down:before {\n  content: \"\";\n}\n.ti-angle-double-up:before {\n  content: \"\";\n}\n.ti-angle-double-right:before {\n  content: \"\";\n}\n.ti-angle-double-left:before {\n  content: \"\";\n}\n.ti-angle-double-down:before {\n  content: \"\";\n}\n.ti-zip:before {\n  content: \"\";\n}\n.ti-world:before {\n  content: \"\";\n}\n.ti-wheelchair:before {\n  content: \"\";\n}\n.ti-view-list:before {\n  content: \"\";\n}\n.ti-view-list-alt:before {\n  content: \"\";\n}\n.ti-view-grid:before {\n  content: \"\";\n}\n.ti-uppercase:before {\n  content: \"\";\n}\n.ti-upload:before {\n  content: \"\";\n}\n.ti-underline:before {\n  content: \"\";\n}\n.ti-truck:before {\n  content: \"\";\n}\n.ti-timer:before {\n  content: \"\";\n}\n.ti-ticket:before {\n  content: \"\";\n}\n.ti-thumb-up:before {\n  content: \"\";\n}\n.ti-thumb-down:before {\n  content: \"\";\n}\n.ti-text:before {\n  content: \"\";\n}\n.ti-stats-up:before {\n  content: \"\";\n}\n.ti-stats-down:before {\n  content: \"\";\n}\n.ti-split-v:before {\n  content: \"\";\n}\n.ti-split-h:before {\n  content: \"\";\n}\n.ti-smallcap:before {\n  content: \"\";\n}\n.ti-shine:before {\n  content: \"\";\n}\n.ti-shift-right:before {\n  content: \"\";\n}\n.ti-shift-left:before {\n  content: \"\";\n}\n.ti-shield:before {\n  content: \"\";\n}\n.ti-notepad:before {\n  content: \"\";\n}\n.ti-server:before {\n  content: \"\";\n}\n.ti-quote-right:before {\n  content: \"\";\n}\n.ti-quote-left:before {\n  content: \"\";\n}\n.ti-pulse:before {\n  content: \"\";\n}\n.ti-printer:before {\n  content: \"\";\n}\n.ti-power-off:before {\n  content: \"\";\n}\n.ti-plug:before {\n  content: \"\";\n}\n.ti-pie-chart:before {\n  content: \"\";\n}\n.ti-paragraph:before {\n  content: \"\";\n}\n.ti-panel:before {\n  content: \"\";\n}\n.ti-package:before {\n  content: \"\";\n}\n.ti-music:before {\n  content: \"\";\n}\n.ti-music-alt:before {\n  content: \"\";\n}\n.ti-mouse:before {\n  content: \"\";\n}\n.ti-mouse-alt:before {\n  content: \"\";\n}\n.ti-money:before {\n  content: \"\";\n}\n.ti-microphone:before {\n  content: \"\";\n}\n.ti-menu:before {\n  content: \"\";\n}\n.ti-menu-alt:before {\n  content: \"\";\n}\n.ti-map:before {\n  content: \"\";\n}\n.ti-map-alt:before {\n  content: \"\";\n}\n.ti-loop:before {\n  content: \"\";\n}\n.ti-location-pin:before {\n  content: \"\";\n}\n.ti-list:before {\n  content: \"\";\n}\n.ti-light-bulb:before {\n  content: \"\";\n}\n.ti-Italic:before {\n  content: \"\";\n}\n.ti-info:before {\n  content: \"\";\n}\n.ti-infinite:before {\n  content: \"\";\n}\n.ti-id-badge:before {\n  content: \"\";\n}\n.ti-hummer:before {\n  content: \"\";\n}\n.ti-home:before {\n  content: \"\";\n}\n.ti-help:before {\n  content: \"\";\n}\n.ti-headphone:before {\n  content: \"\";\n}\n.ti-harddrives:before {\n  content: \"\";\n}\n.ti-harddrive:before {\n  content: \"\";\n}\n.ti-gift:before {\n  content: \"\";\n}\n.ti-game:before {\n  content: \"\";\n}\n.ti-filter:before {\n  content: \"\";\n}\n.ti-files:before {\n  content: \"\";\n}\n.ti-file:before {\n  content: \"\";\n}\n.ti-eraser:before {\n  content: \"\";\n}\n.ti-envelope:before {\n  content: \"\";\n}\n.ti-download:before {\n  content: \"\";\n}\n.ti-direction:before {\n  content: \"\";\n}\n.ti-direction-alt:before {\n  content: \"\";\n}\n.ti-dashboard:before {\n  content: \"\";\n}\n.ti-control-stop:before {\n  content: \"\";\n}\n.ti-control-shuffle:before {\n  content: \"\";\n}\n.ti-control-play:before {\n  content: \"\";\n}\n.ti-control-pause:before {\n  content: \"\";\n}\n.ti-control-forward:before {\n  content: \"\";\n}\n.ti-control-backward:before {\n  content: \"\";\n}\n.ti-cloud:before {\n  content: \"\";\n}\n.ti-cloud-up:before {\n  content: \"\";\n}\n.ti-cloud-down:before {\n  content: \"\";\n}\n.ti-clipboard:before {\n  content: \"\";\n}\n.ti-car:before {\n  content: \"\";\n}\n.ti-calendar:before {\n  content: \"\";\n}\n.ti-book:before {\n  content: \"\";\n}\n.ti-bell:before {\n  content: \"\";\n}\n.ti-basketball:before {\n  content: \"\";\n}\n.ti-bar-chart:before {\n  content: \"\";\n}\n.ti-bar-chart-alt:before {\n  content: \"\";\n}\n.ti-back-right:before {\n  content: \"\";\n}\n.ti-back-left:before {\n  content: \"\";\n}\n.ti-arrows-corner:before {\n  content: \"\";\n}\n.ti-archive:before {\n  content: \"\";\n}\n.ti-anchor:before {\n  content: \"\";\n}\n.ti-align-right:before {\n  content: \"\";\n}\n.ti-align-left:before {\n  content: \"\";\n}\n.ti-align-justify:before {\n  content: \"\";\n}\n.ti-align-center:before {\n  content: \"\";\n}\n.ti-alert:before {\n  content: \"\";\n}\n.ti-alarm-clock:before {\n  content: \"\";\n}\n.ti-agenda:before {\n  content: \"\";\n}\n.ti-write:before {\n  content: \"\";\n}\n.ti-window:before {\n  content: \"\";\n}\n.ti-widgetized:before {\n  content: \"\";\n}\n.ti-widget:before {\n  content: \"\";\n}\n.ti-widget-alt:before {\n  content: \"\";\n}\n.ti-wallet:before {\n  content: \"\";\n}\n.ti-video-clapper:before {\n  content: \"\";\n}\n.ti-video-camera:before {\n  content: \"\";\n}\n.ti-vector:before {\n  content: \"\";\n}\n.ti-themify-logo:before {\n  content: \"\";\n}\n.ti-themify-favicon:before {\n  content: \"\";\n}\n.ti-themify-favicon-alt:before {\n  content: \"\";\n}\n.ti-support:before {\n  content: \"\";\n}\n.ti-stamp:before {\n  content: \"\";\n}\n.ti-split-v-alt:before {\n  content: \"\";\n}\n.ti-slice:before {\n  content: \"\";\n}\n.ti-shortcode:before {\n  content: \"\";\n}\n.ti-shift-right-alt:before {\n  content: \"\";\n}\n.ti-shift-left-alt:before {\n  content: \"\";\n}\n.ti-ruler-alt-2:before {\n  content: \"\";\n}\n.ti-receipt:before {\n  content: \"\";\n}\n.ti-pin2:before {\n  content: \"\";\n}\n.ti-pin-alt:before {\n  content: \"\";\n}\n.ti-pencil-alt2:before {\n  content: \"\";\n}\n.ti-palette:before {\n  content: \"\";\n}\n.ti-more:before {\n  content: \"\";\n}\n.ti-more-alt:before {\n  content: \"\";\n}\n.ti-microphone-alt:before {\n  content: \"\";\n}\n.ti-magnet:before {\n  content: \"\";\n}\n.ti-line-double:before {\n  content: \"\";\n}\n.ti-line-dotted:before {\n  content: \"\";\n}\n.ti-line-dashed:before {\n  content: \"\";\n}\n.ti-layout-width-full:before {\n  content: \"\";\n}\n.ti-layout-width-default:before {\n  content: \"\";\n}\n.ti-layout-width-default-alt:before {\n  content: \"\";\n}\n.ti-layout-tab:before {\n  content: \"\";\n}\n.ti-layout-tab-window:before {\n  content: \"\";\n}\n.ti-layout-tab-v:before {\n  content: \"\";\n}\n.ti-layout-tab-min:before {\n  content: \"\";\n}\n.ti-layout-slider:before {\n  content: \"\";\n}\n.ti-layout-slider-alt:before {\n  content: \"\";\n}\n.ti-layout-sidebar-right:before {\n  content: \"\";\n}\n.ti-layout-sidebar-none:before {\n  content: \"\";\n}\n.ti-layout-sidebar-left:before {\n  content: \"\";\n}\n.ti-layout-placeholder:before {\n  content: \"\";\n}\n.ti-layout-menu:before {\n  content: \"\";\n}\n.ti-layout-menu-v:before {\n  content: \"\";\n}\n.ti-layout-menu-separated:before {\n  content: \"\";\n}\n.ti-layout-menu-full:before {\n  content: \"\";\n}\n.ti-layout-media-right-alt:before {\n  content: \"\";\n}\n.ti-layout-media-right:before {\n  content: \"\";\n}\n.ti-layout-media-overlay:before {\n  content: \"\";\n}\n.ti-layout-media-overlay-alt:before {\n  content: \"\";\n}\n.ti-layout-media-overlay-alt-2:before {\n  content: \"\";\n}\n.ti-layout-media-left-alt:before {\n  content: \"\";\n}\n.ti-layout-media-left:before {\n  content: \"\";\n}\n.ti-layout-media-center-alt:before {\n  content: \"\";\n}\n.ti-layout-media-center:before {\n  content: \"\";\n}\n.ti-layout-list-thumb:before {\n  content: \"\";\n}\n.ti-layout-list-thumb-alt:before {\n  content: \"\";\n}\n.ti-layout-list-post:before {\n  content: \"\";\n}\n.ti-layout-list-large-image:before {\n  content: \"\";\n}\n.ti-layout-line-solid:before {\n  content: \"\";\n}\n.ti-layout-grid4:before {\n  content: \"\";\n}\n.ti-layout-grid3:before {\n  content: \"\";\n}\n.ti-layout-grid2:before {\n  content: \"\";\n}\n.ti-layout-grid2-thumb:before {\n  content: \"\";\n}\n.ti-layout-cta-right:before {\n  content: \"\";\n}\n.ti-layout-cta-left:before {\n  content: \"\";\n}\n.ti-layout-cta-center:before {\n  content: \"\";\n}\n.ti-layout-cta-btn-right:before {\n  content: \"\";\n}\n.ti-layout-cta-btn-left:before {\n  content: \"\";\n}\n.ti-layout-column4:before {\n  content: \"\";\n}\n.ti-layout-column3:before {\n  content: \"\";\n}\n.ti-layout-column2:before {\n  content: \"\";\n}\n.ti-layout-accordion-separated:before {\n  content: \"\";\n}\n.ti-layout-accordion-merged:before {\n  content: \"\";\n}\n.ti-layout-accordion-list:before {\n  content: \"\";\n}\n.ti-ink-pen:before {\n  content: \"\";\n}\n.ti-info-alt:before {\n  content: \"\";\n}\n.ti-help-alt:before {\n  content: \"\";\n}\n.ti-headphone-alt:before {\n  content: \"\";\n}\n.ti-hand-point-up:before {\n  content: \"\";\n}\n.ti-hand-point-right:before {\n  content: \"\";\n}\n.ti-hand-point-left:before {\n  content: \"\";\n}\n.ti-hand-point-down:before {\n  content: \"\";\n}\n.ti-gallery:before {\n  content: \"\";\n}\n.ti-face-smile:before {\n  content: \"\";\n}\n.ti-face-sad:before {\n  content: \"\";\n}\n.ti-credit-card:before {\n  content: \"\";\n}\n.ti-control-skip-forward:before {\n  content: \"\";\n}\n.ti-control-skip-backward:before {\n  content: \"\";\n}\n.ti-control-record:before {\n  content: \"\";\n}\n.ti-control-eject:before {\n  content: \"\";\n}\n.ti-comments-smiley:before {\n  content: \"\";\n}\n.ti-brush-alt:before {\n  content: \"\";\n}\n.ti-youtube:before {\n  content: \"\";\n}\n.ti-vimeo:before {\n  content: \"\";\n}\n.ti-twitter:before {\n  content: \"\";\n}\n.ti-time:before {\n  content: \"\";\n}\n.ti-tumblr:before {\n  content: \"\";\n}\n.ti-skype:before {\n  content: \"\";\n}\n.ti-share:before {\n  content: \"\";\n}\n.ti-share-alt:before {\n  content: \"\";\n}\n.ti-rocket:before {\n  content: \"\";\n}\n.ti-pinterest:before {\n  content: \"\";\n}\n.ti-new-window:before {\n  content: \"\";\n}\n.ti-microsoft:before {\n  content: \"\";\n}\n.ti-list-ol:before {\n  content: \"\";\n}\n.ti-linkedin:before {\n  content: \"\";\n}\n.ti-layout-sidebar-2:before {\n  content: \"\";\n}\n.ti-layout-grid4-alt:before {\n  content: \"\";\n}\n.ti-layout-grid3-alt:before {\n  content: \"\";\n}\n.ti-layout-grid2-alt:before {\n  content: \"\";\n}\n.ti-layout-column4-alt:before {\n  content: \"\";\n}\n.ti-layout-column3-alt:before {\n  content: \"\";\n}\n.ti-layout-column2-alt:before {\n  content: \"\";\n}\n.ti-instagram:before {\n  content: \"\";\n}\n.ti-google:before {\n  content: \"\";\n}\n.ti-github:before {\n  content: \"\";\n}\n.ti-flickr:before {\n  content: \"\";\n}\n.ti-facebook:before {\n  content: \"\";\n}\n.ti-dropbox:before {\n  content: \"\";\n}\n.ti-dribbble:before {\n  content: \"\";\n}\n.ti-apple:before {\n  content: \"\";\n}\n.ti-android:before {\n  content: \"\";\n}\n.ti-save:before {\n  content: \"\";\n}\n.ti-save-alt:before {\n  content: \"\";\n}\n.ti-yahoo:before {\n  content: \"\";\n}\n.ti-wordpress:before {\n  content: \"\";\n}\n.ti-vimeo-alt:before {\n  content: \"\";\n}\n.ti-twitter-alt:before {\n  content: \"\";\n}\n.ti-tumblr-alt:before {\n  content: \"\";\n}\n.ti-trello:before {\n  content: \"\";\n}\n.ti-stack-overflow:before {\n  content: \"\";\n}\n.ti-soundcloud:before {\n  content: \"\";\n}\n.ti-sharethis:before {\n  content: \"\";\n}\n.ti-sharethis-alt:before {\n  content: \"\";\n}\n.ti-reddit:before {\n  content: \"\";\n}\n.ti-pinterest-alt:before {\n  content: \"\";\n}\n.ti-microsoft-alt:before {\n  content: \"\";\n}\n.ti-linux:before {\n  content: \"\";\n}\n.ti-jsfiddle:before {\n  content: \"\";\n}\n.ti-joomla:before {\n  content: \"\";\n}\n.ti-html5:before {\n  content: \"\";\n}\n.ti-flickr-alt:before {\n  content: \"\";\n}\n.ti-email:before {\n  content: \"\";\n}\n.ti-drupal:before {\n  content: \"\";\n}\n.ti-dropbox-alt:before {\n  content: \"\";\n}\n.ti-css3:before {\n  content: \"\";\n}\n.ti-rss:before {\n  content: \"\";\n}\n.ti-rss-alt:before {\n  content: \"\";\n}\n.registration {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n}\n.registration__nav {\n  text-align: center;\n  padding: 20px;\n}\n.registration__nav-link {\n  font-family: \"Roboto\";\n  font-weight: 300;\n  font-size: 21px;\n  text-decoration: none;\n  margin-right: 20px;\n  color: #888EA7;\n}\n.registration__nav-link_active {\n  font-weight: 400;\n  color: #313643;\n}\n.form {\n  padding: 40px 75px;\n  background: #FFFFFF 0% 0% no-repeat padding-box;\n  border: 1px solid #E6ECF5;\n  border-radius: 10px;\n}\n.form__label {\n  display: block;\n  position: relative;\n}\n.form__label-title {\n  position: absolute;\n  left: 20px;\n  top: 12px;\n  font-family: \"Roboto\";\n  font-weight: 400;\n  font-size: 14px;\n  color: #888EA7;\n}\n.form__control {\n  background: #FFFFFF 0% 0% no-repeat padding-box;\n  font-family: \"Roboto\";\n  font-size: 14px;\n  font-weight: 300;\n  color: #313643;\n  width: 300px;\n  border: 2px solid #E6ECF5;\n  border-radius: 10px;\n  opacity: 1;\n  padding: 10px 10px 10px 90px;\n  margin-bottom: 10px;\n}\n.form__control.ng-valid {\n  border: 2px solid #AAC72E66;\n}\n.form__control.ng-invalid:not(form) {\n  border: 2px solid #E63782;\n}\n.form__control:active, .form__control:focus {\n  outline: none;\n  border: 2px solid #22A4DC;\n}\n.form__button {\n  display: block;\n  margin: 20px auto 0 auto;\n  padding: 10px 21px;\n  cursor: pointer;\n  background: #22A4DC 0% 0% no-repeat padding-box;\n  border-radius: 10px;\n  font-family: \"Roboto\";\n  font-weight: 300;\n  font-size: 14px;\n  letter-spacing: 0px;\n  color: #FFFFFF;\n}\n.form__button:active, .form__button:focus {\n  outline: none;\n  border: none;\n}\n.form__button:disabled {\n  opacity: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hdXRoL2NvbXBvbmVudHMvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9hbGV4bWFjL0RvY3VtZW50cy93b3JrL0dpdEh1Yi9IZXp6bF90ZXN0L2FwcC9zcmMvYXBwL21vZHVsZXMvYXV0aC9jb21wb25lbnRzL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvYWxleG1hYy9Eb2N1bWVudHMvd29yay9HaXRIdWIvSGV6emxfdGVzdC9hcHAvc3RkaW4iLCIvVXNlcnMvYWxleG1hYy9Eb2N1bWVudHMvd29yay9HaXRIdWIvSGV6emxfdGVzdC9hcHAvc3JjL2Fzc2V0cy9zY3NzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDRSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFFQSxzQ0FBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7QURDRjtBQ0VBO0VBQ0UsWUFBQTtBRENGO0FDQ0E7RUFDRSxZQUFBO0FERUY7QUNBQTtFQUNFLFlBQUE7QURHRjtBQ0RBO0VBQ0UsWUFBQTtBRElGO0FDRkE7RUFDRSxZQUFBO0FES0Y7QUNIQTtFQUNFLFlBQUE7QURNRjtBQ0pBO0VBQ0UsWUFBQTtBRE9GO0FDTEE7RUFDRSxZQUFBO0FEUUY7QUNOQTtFQUNFLFlBQUE7QURTRjtBQ1BBO0VBQ0UsWUFBQTtBRFVGO0FDUkE7RUFDRSxZQUFBO0FEV0Y7QUNUQTtFQUNFLFlBQUE7QURZRjtBQ1ZBO0VBQ0UsWUFBQTtBRGFGO0FDWEE7RUFDRSxZQUFBO0FEY0Y7QUNaQTtFQUNFLFlBQUE7QURlRjtBQ2JBO0VBQ0UsWUFBQTtBRGdCRjtBQ2RBO0VBQ0UsWUFBQTtBRGlCRjtBQ2ZBO0VBQ0UsWUFBQTtBRGtCRjtBQ2hCQTtFQUNFLFlBQUE7QURtQkY7QUNqQkE7RUFDRSxZQUFBO0FEb0JGO0FDbEJBO0VBQ0UsWUFBQTtBRHFCRjtBQ25CQTtFQUNFLFlBQUE7QURzQkY7QUNwQkE7RUFDRSxZQUFBO0FEdUJGO0FDckJBO0VBQ0UsWUFBQTtBRHdCRjtBQ3RCQTtFQUNFLFlBQUE7QUR5QkY7QUN2QkE7RUFDRSxZQUFBO0FEMEJGO0FDeEJBO0VBQ0UsWUFBQTtBRDJCRjtBQ3pCQTtFQUNFLFlBQUE7QUQ0QkY7QUMxQkE7RUFDRSxZQUFBO0FENkJGO0FDM0JBO0VBQ0UsWUFBQTtBRDhCRjtBQzVCQTtFQUNFLFlBQUE7QUQrQkY7QUM3QkE7RUFDRSxZQUFBO0FEZ0NGO0FDOUJBO0VBQ0UsWUFBQTtBRGlDRjtBQy9CQTtFQUNFLFlBQUE7QURrQ0Y7QUNoQ0E7RUFDRSxZQUFBO0FEbUNGO0FDakNBO0VBQ0UsWUFBQTtBRG9DRjtBQ2xDQTtFQUNFLFlBQUE7QURxQ0Y7QUNuQ0E7RUFDRSxZQUFBO0FEc0NGO0FDcENBO0VBQ0UsWUFBQTtBRHVDRjtBQ3JDQTtFQUNFLFlBQUE7QUR3Q0Y7QUN0Q0E7RUFDRSxZQUFBO0FEeUNGO0FDdkNBO0VBQ0UsWUFBQTtBRDBDRjtBQ3hDQTtFQUNFLFlBQUE7QUQyQ0Y7QUN6Q0E7RUFDRSxZQUFBO0FENENGO0FDMUNBO0VBQ0UsWUFBQTtBRDZDRjtBQzNDQTtFQUNFLFlBQUE7QUQ4Q0Y7QUM1Q0E7RUFDRSxZQUFBO0FEK0NGO0FDN0NBO0VBQ0UsWUFBQTtBRGdERjtBQzlDQTtFQUNFLFlBQUE7QURpREY7QUMvQ0E7RUFDRSxZQUFBO0FEa0RGO0FDaERBO0VBQ0UsWUFBQTtBRG1ERjtBQ2pEQTtFQUNFLFlBQUE7QURvREY7QUNsREE7RUFDRSxZQUFBO0FEcURGO0FDbkRBO0VBQ0UsWUFBQTtBRHNERjtBQ3BEQTtFQUNFLFlBQUE7QUR1REY7QUNyREE7RUFDRSxZQUFBO0FEd0RGO0FDdERBO0VBQ0UsWUFBQTtBRHlERjtBQ3ZEQTtFQUNFLFlBQUE7QUQwREY7QUN4REE7RUFDRSxZQUFBO0FEMkRGO0FDekRBO0VBQ0UsWUFBQTtBRDRERjtBQzFEQTtFQUNFLFlBQUE7QUQ2REY7QUMzREE7RUFDRSxZQUFBO0FEOERGO0FDNURBO0VBQ0UsWUFBQTtBRCtERjtBQzdEQTtFQUNFLFlBQUE7QURnRUY7QUM5REE7RUFDRSxZQUFBO0FEaUVGO0FDL0RBO0VBQ0UsWUFBQTtBRGtFRjtBQ2hFQTtFQUNFLFlBQUE7QURtRUY7QUNqRUE7RUFDRSxZQUFBO0FEb0VGO0FDbEVBO0VBQ0UsWUFBQTtBRHFFRjtBQ25FQTtFQUNFLFlBQUE7QURzRUY7QUNwRUE7RUFDRSxZQUFBO0FEdUVGO0FDckVBO0VBQ0UsWUFBQTtBRHdFRjtBQ3RFQTtFQUNFLFlBQUE7QUR5RUY7QUN2RUE7RUFDRSxZQUFBO0FEMEVGO0FDeEVBO0VBQ0UsWUFBQTtBRDJFRjtBQ3pFQTtFQUNFLFlBQUE7QUQ0RUY7QUMxRUE7RUFDRSxZQUFBO0FENkVGO0FDM0VBO0VBQ0UsWUFBQTtBRDhFRjtBQzVFQTtFQUNFLFlBQUE7QUQrRUY7QUM3RUE7RUFDRSxZQUFBO0FEZ0ZGO0FDOUVBO0VBQ0UsWUFBQTtBRGlGRjtBQy9FQTtFQUNFLFlBQUE7QURrRkY7QUNoRkE7RUFDRSxZQUFBO0FEbUZGO0FDakZBO0VBQ0UsWUFBQTtBRG9GRjtBQ2xGQTtFQUNFLFlBQUE7QURxRkY7QUNuRkE7RUFDRSxZQUFBO0FEc0ZGO0FDcEZBO0VBQ0UsWUFBQTtBRHVGRjtBQ3JGQTtFQUNFLFlBQUE7QUR3RkY7QUN0RkE7RUFDRSxZQUFBO0FEeUZGO0FDdkZBO0VBQ0UsWUFBQTtBRDBGRjtBQ3hGQTtFQUNFLFlBQUE7QUQyRkY7QUN6RkE7RUFDRSxZQUFBO0FENEZGO0FDMUZBO0VBQ0UsWUFBQTtBRDZGRjtBQzNGQTtFQUNFLFlBQUE7QUQ4RkY7QUM1RkE7RUFDRSxZQUFBO0FEK0ZGO0FDN0ZBO0VBQ0UsWUFBQTtBRGdHRjtBQzlGQTtFQUNFLFlBQUE7QURpR0Y7QUMvRkE7RUFDRSxZQUFBO0FEa0dGO0FDaEdBO0VBQ0UsWUFBQTtBRG1HRjtBQ2pHQTtFQUNFLFlBQUE7QURvR0Y7QUNsR0E7RUFDRSxZQUFBO0FEcUdGO0FDbkdBO0VBQ0UsWUFBQTtBRHNHRjtBQ3BHQTtFQUNFLFlBQUE7QUR1R0Y7QUNyR0E7RUFDRSxZQUFBO0FEd0dGO0FDdEdBO0VBQ0UsWUFBQTtBRHlHRjtBQ3ZHQTtFQUNFLFlBQUE7QUQwR0Y7QUN4R0E7RUFDRSxZQUFBO0FEMkdGO0FDekdBO0VBQ0UsWUFBQTtBRDRHRjtBQzFHQTtFQUNFLFlBQUE7QUQ2R0Y7QUMzR0E7RUFDRSxZQUFBO0FEOEdGO0FDNUdBO0VBQ0UsWUFBQTtBRCtHRjtBQzdHQTtFQUNFLFlBQUE7QURnSEY7QUM5R0E7RUFDRSxZQUFBO0FEaUhGO0FDL0dBO0VBQ0UsWUFBQTtBRGtIRjtBQ2hIQTtFQUNFLFlBQUE7QURtSEY7QUNqSEE7RUFDRSxZQUFBO0FEb0hGO0FDbEhBO0VBQ0UsWUFBQTtBRHFIRjtBQ25IQTtFQUNFLFlBQUE7QURzSEY7QUNwSEE7RUFDRSxZQUFBO0FEdUhGO0FDckhBO0VBQ0UsWUFBQTtBRHdIRjtBQ3RIQTtFQUNFLFlBQUE7QUR5SEY7QUN2SEE7RUFDRSxZQUFBO0FEMEhGO0FDeEhBO0VBQ0UsWUFBQTtBRDJIRjtBQ3pIQTtFQUNFLFlBQUE7QUQ0SEY7QUMxSEE7RUFDRSxZQUFBO0FENkhGO0FDM0hBO0VBQ0UsWUFBQTtBRDhIRjtBQzVIQTtFQUNFLFlBQUE7QUQrSEY7QUM3SEE7RUFDRSxZQUFBO0FEZ0lGO0FDOUhBO0VBQ0UsWUFBQTtBRGlJRjtBQy9IQTtFQUNFLFlBQUE7QURrSUY7QUNoSUE7RUFDRSxZQUFBO0FEbUlGO0FDaklBO0VBQ0UsWUFBQTtBRG9JRjtBQ2xJQTtFQUNFLFlBQUE7QURxSUY7QUNuSUE7RUFDRSxZQUFBO0FEc0lGO0FDcElBO0VBQ0UsWUFBQTtBRHVJRjtBQ3JJQTtFQUNFLFlBQUE7QUR3SUY7QUN0SUE7RUFDRSxZQUFBO0FEeUlGO0FDdklBO0VBQ0UsWUFBQTtBRDBJRjtBQ3hJQTtFQUNFLFlBQUE7QUQySUY7QUN6SUE7RUFDRSxZQUFBO0FENElGO0FDMUlBO0VBQ0UsWUFBQTtBRDZJRjtBQzNJQTtFQUNFLFlBQUE7QUQ4SUY7QUM1SUE7RUFDRSxZQUFBO0FEK0lGO0FDN0lBO0VBQ0UsWUFBQTtBRGdKRjtBQzlJQTtFQUNFLFlBQUE7QURpSkY7QUMvSUE7RUFDRSxZQUFBO0FEa0pGO0FDaEpBO0VBQ0UsWUFBQTtBRG1KRjtBQ2pKQTtFQUNFLFlBQUE7QURvSkY7QUNsSkE7RUFDRSxZQUFBO0FEcUpGO0FDbkpBO0VBQ0UsWUFBQTtBRHNKRjtBQ3BKQTtFQUNFLFlBQUE7QUR1SkY7QUNySkE7RUFDRSxZQUFBO0FEd0pGO0FDdEpBO0VBQ0UsWUFBQTtBRHlKRjtBQ3ZKQTtFQUNFLFlBQUE7QUQwSkY7QUN4SkE7RUFDRSxZQUFBO0FEMkpGO0FDekpBO0VBQ0UsWUFBQTtBRDRKRjtBQzFKQTtFQUNFLFlBQUE7QUQ2SkY7QUMzSkE7RUFDRSxZQUFBO0FEOEpGO0FDNUpBO0VBQ0UsWUFBQTtBRCtKRjtBQzdKQTtFQUNFLFlBQUE7QURnS0Y7QUM5SkE7RUFDRSxZQUFBO0FEaUtGO0FDL0pBO0VBQ0UsWUFBQTtBRGtLRjtBQ2hLQTtFQUNFLFlBQUE7QURtS0Y7QUNqS0E7RUFDRSxZQUFBO0FEb0tGO0FDbEtBO0VBQ0UsWUFBQTtBRHFLRjtBQ25LQTtFQUNFLFlBQUE7QURzS0Y7QUNwS0E7RUFDRSxZQUFBO0FEdUtGO0FDcktBO0VBQ0UsWUFBQTtBRHdLRjtBQ3RLQTtFQUNFLFlBQUE7QUR5S0Y7QUN2S0E7RUFDRSxZQUFBO0FEMEtGO0FDeEtBO0VBQ0UsWUFBQTtBRDJLRjtBQ3pLQTtFQUNFLFlBQUE7QUQ0S0Y7QUMxS0E7RUFDRSxZQUFBO0FENktGO0FDM0tBO0VBQ0UsWUFBQTtBRDhLRjtBQzVLQTtFQUNFLFlBQUE7QUQrS0Y7QUM3S0E7RUFDRSxZQUFBO0FEZ0xGO0FDOUtBO0VBQ0UsWUFBQTtBRGlMRjtBQy9LQTtFQUNFLFlBQUE7QURrTEY7QUNoTEE7RUFDRSxZQUFBO0FEbUxGO0FDakxBO0VBQ0UsWUFBQTtBRG9MRjtBQ2xMQTtFQUNFLFlBQUE7QURxTEY7QUNuTEE7RUFDRSxZQUFBO0FEc0xGO0FDcExBO0VBQ0UsWUFBQTtBRHVMRjtBQ3JMQTtFQUNFLFlBQUE7QUR3TEY7QUN0TEE7RUFDRSxZQUFBO0FEeUxGO0FDdkxBO0VBQ0UsWUFBQTtBRDBMRjtBQ3hMQTtFQUNFLFlBQUE7QUQyTEY7QUN6TEE7RUFDRSxZQUFBO0FENExGO0FDMUxBO0VBQ0UsWUFBQTtBRDZMRjtBQzNMQTtFQUNFLFlBQUE7QUQ4TEY7QUM1TEE7RUFDRSxZQUFBO0FEK0xGO0FDN0xBO0VBQ0UsWUFBQTtBRGdNRjtBQzlMQTtFQUNFLFlBQUE7QURpTUY7QUMvTEE7RUFDRSxZQUFBO0FEa01GO0FDaE1BO0VBQ0UsWUFBQTtBRG1NRjtBQ2pNQTtFQUNFLFlBQUE7QURvTUY7QUNsTUE7RUFDRSxZQUFBO0FEcU1GO0FDbk1BO0VBQ0UsWUFBQTtBRHNNRjtBQ3BNQTtFQUNFLFlBQUE7QUR1TUY7QUNyTUE7RUFDRSxZQUFBO0FEd01GO0FDdE1BO0VBQ0UsWUFBQTtBRHlNRjtBQ3ZNQTtFQUNFLFlBQUE7QUQwTUY7QUN4TUE7RUFDRSxZQUFBO0FEMk1GO0FDek1BO0VBQ0UsWUFBQTtBRDRNRjtBQzFNQTtFQUNFLFlBQUE7QUQ2TUY7QUMzTUE7RUFDRSxZQUFBO0FEOE1GO0FDNU1BO0VBQ0UsWUFBQTtBRCtNRjtBQzdNQTtFQUNFLFlBQUE7QURnTkY7QUM5TUE7RUFDRSxZQUFBO0FEaU5GO0FDL01BO0VBQ0UsWUFBQTtBRGtORjtBQ2hOQTtFQUNFLFlBQUE7QURtTkY7QUNqTkE7RUFDRSxZQUFBO0FEb05GO0FDbE5BO0VBQ0UsWUFBQTtBRHFORjtBQ25OQTtFQUNFLFlBQUE7QURzTkY7QUNwTkE7RUFDRSxZQUFBO0FEdU5GO0FDck5BO0VBQ0UsWUFBQTtBRHdORjtBQ3ROQTtFQUNFLFlBQUE7QUR5TkY7QUN2TkE7RUFDRSxZQUFBO0FEME5GO0FDeE5BO0VBQ0UsWUFBQTtBRDJORjtBQ3pOQTtFQUNFLFlBQUE7QUQ0TkY7QUMxTkE7RUFDRSxZQUFBO0FENk5GO0FDM05BO0VBQ0UsWUFBQTtBRDhORjtBQzVOQTtFQUNFLFlBQUE7QUQrTkY7QUM3TkE7RUFDRSxZQUFBO0FEZ09GO0FDOU5BO0VBQ0UsWUFBQTtBRGlPRjtBQy9OQTtFQUNFLFlBQUE7QURrT0Y7QUNoT0E7RUFDRSxZQUFBO0FEbU9GO0FDak9BO0VBQ0UsWUFBQTtBRG9PRjtBQ2xPQTtFQUNFLFlBQUE7QURxT0Y7QUNuT0E7RUFDRSxZQUFBO0FEc09GO0FDcE9BO0VBQ0UsWUFBQTtBRHVPRjtBQ3JPQTtFQUNFLFlBQUE7QUR3T0Y7QUN0T0E7RUFDRSxZQUFBO0FEeU9GO0FDdk9BO0VBQ0UsWUFBQTtBRDBPRjtBQ3hPQTtFQUNFLFlBQUE7QUQyT0Y7QUN6T0E7RUFDRSxZQUFBO0FENE9GO0FDMU9BO0VBQ0UsWUFBQTtBRDZPRjtBQzNPQTtFQUNFLFlBQUE7QUQ4T0Y7QUM1T0E7RUFDRSxZQUFBO0FEK09GO0FDN09BO0VBQ0UsWUFBQTtBRGdQRjtBQzlPQTtFQUNFLFlBQUE7QURpUEY7QUMvT0E7RUFDRSxZQUFBO0FEa1BGO0FDaFBBO0VBQ0UsWUFBQTtBRG1QRjtBQ2pQQTtFQUNFLFlBQUE7QURvUEY7QUNsUEE7RUFDRSxZQUFBO0FEcVBGO0FDblBBO0VBQ0UsWUFBQTtBRHNQRjtBQ3BQQTtFQUNFLFlBQUE7QUR1UEY7QUNyUEE7RUFDRSxZQUFBO0FEd1BGO0FDdFBBO0VBQ0UsWUFBQTtBRHlQRjtBQ3ZQQTtFQUNFLFlBQUE7QUQwUEY7QUN4UEE7RUFDRSxZQUFBO0FEMlBGO0FDelBBO0VBQ0UsWUFBQTtBRDRQRjtBQzFQQTtFQUNFLFlBQUE7QUQ2UEY7QUMzUEE7RUFDRSxZQUFBO0FEOFBGO0FDNVBBO0VBQ0UsWUFBQTtBRCtQRjtBQzdQQTtFQUNFLFlBQUE7QURnUUY7QUM5UEE7RUFDRSxZQUFBO0FEaVFGO0FDL1BBO0VBQ0UsWUFBQTtBRGtRRjtBQ2hRQTtFQUNFLFlBQUE7QURtUUY7QUNqUUE7RUFDRSxZQUFBO0FEb1FGO0FDbFFBO0VBQ0UsWUFBQTtBRHFRRjtBQ25RQTtFQUNFLFlBQUE7QURzUUY7QUNwUUE7RUFDRSxZQUFBO0FEdVFGO0FDclFBO0VBQ0UsWUFBQTtBRHdRRjtBQ3RRQTtFQUNFLFlBQUE7QUR5UUY7QUN2UUE7RUFDRSxZQUFBO0FEMFFGO0FDeFFBO0VBQ0UsWUFBQTtBRDJRRjtBQ3pRQTtFQUNFLFlBQUE7QUQ0UUY7QUMxUUE7RUFDRSxZQUFBO0FENlFGO0FDM1FBO0VBQ0UsWUFBQTtBRDhRRjtBQzVRQTtFQUNFLFlBQUE7QUQrUUY7QUM3UUE7RUFDRSxZQUFBO0FEZ1JGO0FDOVFBO0VBQ0UsWUFBQTtBRGlSRjtBQy9RQTtFQUNFLFlBQUE7QURrUkY7QUNoUkE7RUFDRSxZQUFBO0FEbVJGO0FDalJBO0VBQ0UsWUFBQTtBRG9SRjtBQ2xSQTtFQUNFLFlBQUE7QURxUkY7QUNuUkE7RUFDRSxZQUFBO0FEc1JGO0FDcFJBO0VBQ0UsWUFBQTtBRHVSRjtBQ3JSQTtFQUNFLFlBQUE7QUR3UkY7QUN0UkE7RUFDRSxZQUFBO0FEeVJGO0FDdlJBO0VBQ0UsWUFBQTtBRDBSRjtBQ3hSQTtFQUNFLFlBQUE7QUQyUkY7QUN6UkE7RUFDRSxZQUFBO0FENFJGO0FDMVJBO0VBQ0UsWUFBQTtBRDZSRjtBQzNSQTtFQUNFLFlBQUE7QUQ4UkY7QUM1UkE7RUFDRSxZQUFBO0FEK1JGO0FDN1JBO0VBQ0UsWUFBQTtBRGdTRjtBQzlSQTtFQUNFLFlBQUE7QURpU0Y7QUMvUkE7RUFDRSxZQUFBO0FEa1NGO0FDaFNBO0VBQ0UsWUFBQTtBRG1TRjtBQ2pTQTtFQUNFLFlBQUE7QURvU0Y7QUNsU0E7RUFDRSxZQUFBO0FEcVNGO0FDblNBO0VBQ0UsWUFBQTtBRHNTRjtBQ3BTQTtFQUNFLFlBQUE7QUR1U0Y7QUNyU0E7RUFDRSxZQUFBO0FEd1NGO0FDdFNBO0VBQ0UsWUFBQTtBRHlTRjtBQ3ZTQTtFQUNFLFlBQUE7QUQwU0Y7QUN4U0E7RUFDRSxZQUFBO0FEMlNGO0FDelNBO0VBQ0UsWUFBQTtBRDRTRjtBQzFTQTtFQUNFLFlBQUE7QUQ2U0Y7QUMzU0E7RUFDRSxZQUFBO0FEOFNGO0FDNVNBO0VBQ0UsWUFBQTtBRCtTRjtBQzdTQTtFQUNFLFlBQUE7QURnVEY7QUM5U0E7RUFDRSxZQUFBO0FEaVRGO0FDL1NBO0VBQ0UsWUFBQTtBRGtURjtBQ2hUQTtFQUNFLFlBQUE7QURtVEY7QUNqVEE7RUFDRSxZQUFBO0FEb1RGO0FDbFRBO0VBQ0UsWUFBQTtBRHFURjtBQ25UQTtFQUNFLFlBQUE7QURzVEY7QUNwVEE7RUFDRSxZQUFBO0FEdVRGO0FDclRBO0VBQ0UsWUFBQTtBRHdURjtBQ3RUQTtFQUNFLFlBQUE7QUR5VEY7QUN2VEE7RUFDRSxZQUFBO0FEMFRGO0FDeFRBO0VBQ0UsWUFBQTtBRDJURjtBQ3pUQTtFQUNFLFlBQUE7QUQ0VEY7QUMxVEE7RUFDRSxZQUFBO0FENlRGO0FDM1RBO0VBQ0UsWUFBQTtBRDhURjtBQzVUQTtFQUNFLFlBQUE7QUQrVEY7QUM3VEE7RUFDRSxZQUFBO0FEZ1VGO0FDOVRBO0VBQ0UsWUFBQTtBRGlVRjtBQy9UQTtFQUNFLFlBQUE7QURrVUY7QUNoVUE7RUFDRSxZQUFBO0FEbVVGO0FDalVBO0VBQ0UsWUFBQTtBRG9VRjtBQ2xVQTtFQUNFLFlBQUE7QURxVUY7QUNuVUE7RUFDRSxZQUFBO0FEc1VGO0FDcFVBO0VBQ0UsWUFBQTtBRHVVRjtBQ3JVQTtFQUNFLFlBQUE7QUR3VUY7QUN0VUE7RUFDRSxZQUFBO0FEeVVGO0FDdlVBO0VBQ0UsWUFBQTtBRDBVRjtBQ3hVQTtFQUNFLFlBQUE7QUQyVUY7QUN6VUE7RUFDRSxZQUFBO0FENFVGO0FDMVVBO0VBQ0UsWUFBQTtBRDZVRjtBQzNVQTtFQUNFLFlBQUE7QUQ4VUY7QUM1VUE7RUFDRSxZQUFBO0FEK1VGO0FDN1VBO0VBQ0UsWUFBQTtBRGdWRjtBQzlVQTtFQUNFLFlBQUE7QURpVkY7QUMvVUE7RUFDRSxZQUFBO0FEa1ZGO0FDaFZBO0VBQ0UsWUFBQTtBRG1WRjtBQ2pWQTtFQUNFLFlBQUE7QURvVkY7QUNsVkE7RUFDRSxZQUFBO0FEcVZGO0FDblZBO0VBQ0UsWUFBQTtBRHNWRjtBQ3BWQTtFQUNFLFlBQUE7QUR1VkY7QUNyVkE7RUFDRSxZQUFBO0FEd1ZGO0FDdFZBO0VBQ0UsWUFBQTtBRHlWRjtBQ3ZWQTtFQUNFLFlBQUE7QUQwVkY7QUN4VkE7RUFDRSxZQUFBO0FEMlZGO0FDelZBO0VBQ0UsWUFBQTtBRDRWRjtBQzFWQTtFQUNFLFlBQUE7QUQ2VkY7QUMzVkE7RUFDRSxZQUFBO0FEOFZGO0FDNVZBO0VBQ0UsWUFBQTtBRCtWRjtBQzdWQTtFQUNFLFlBQUE7QURnV0Y7QUV6NENBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FGNDRDRjtBRXQ0Q0U7RUFDRSxrQkFBQTtFQUNBLGFBQUE7QUZ3NENKO0FFdDRDSTtFQUNFLHFCQ2pCUTtFRGtCUixnQkNqQmM7RURrQmQsZUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FGdzRDTjtBRXQ0Q007RUFDRSxnQkN2QmM7RUR3QmQsY0FBQTtBRnc0Q1I7QUVuNENBO0VBQ0Usa0JBQUE7RUFDQSwrQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUZzNENGO0FFcjRDRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBRnU0Q0o7QUV0NENJO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLHFCQzNDUTtFRDRDUixnQkMxQ2dCO0VEMkNoQixlQUFBO0VBQ0EsY0FBQTtBRnc0Q047QUVyNENFO0VBQ0UsK0NBQUE7RUFDQSxxQkNuRFU7RURvRFYsZUFBQTtFQUNBLGdCQ3BEZ0I7RURxRGhCLGNBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0FGdTRDSjtBRXQ0Q0k7RUFDRSwyQkFBQTtBRnc0Q047QUV0NENJO0VBQ0UseUJBQUE7QUZ3NENOO0FFdDRDSTtFQUVFLGFBQUE7RUFDQSx5QkFBQTtBRnU0Q047QUVwNENFO0VBQ0UsY0FBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsK0NBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQ2hGVTtFRGlGVixnQkNoRmdCO0VEaUZoQixlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FGczRDSjtBRXI0Q0k7RUFFRSxhQUFBO0VBQ0EsWUFBQTtBRnM0Q047QUVwNENJO0VBQ0UsWUFBQTtBRnM0Q04iLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2F1dGgvY29tcG9uZW50cy9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuW2NsYXNzXj10aS1dLCBbY2xhc3MqPVwiIHRpLVwiXSB7XG4gIGZvbnQtZmFtaWx5OiBcInRoZW1pZnlcIjtcbiAgc3BlYWs6IG5vbmU7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC12YXJpYW50OiBub3JtYWw7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBsaW5lLWhlaWdodDogMTtcbiAgLyogQmV0dGVyIEZvbnQgUmVuZGVyaW5nID09PT09PT09PT09ICovXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG4udGktd2FuZDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6YgFwiO1xufVxuXG4udGktdm9sdW1lOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7piBXCI7XG59XG5cbi50aS11c2VyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7piCXCI7XG59XG5cbi50aS11bmxvY2s6YmVmb3JlIHtcbiAgY29udGVudDogXCLumINcIjtcbn1cblxuLnRpLXVubGluazpiZWZvcmUge1xuICBjb250ZW50OiBcIu6YhFwiO1xufVxuXG4udGktdHJhc2g6YmVmb3JlIHtcbiAgY29udGVudDogXCLumIVcIjtcbn1cblxuLnRpLXRob3VnaHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLumIZcIjtcbn1cblxuLnRpLXRhcmdldDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6Yh1wiO1xufVxuXG4udGktdGFnOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7piIXCI7XG59XG5cbi50aS10YWJsZXQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLumIlcIjtcbn1cblxuLnRpLXN0YXI6YmVmb3JlIHtcbiAgY29udGVudDogXCLumIpcIjtcbn1cblxuLnRpLXNwcmF5OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7piLXCI7XG59XG5cbi50aS1zaWduYWw6YmVmb3JlIHtcbiAgY29udGVudDogXCLumIxcIjtcbn1cblxuLnRpLXNob3BwaW5nLWNhcnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLumI1cIjtcbn1cblxuLnRpLXNob3BwaW5nLWNhcnQtZnVsbDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6YjlwiO1xufVxuXG4udGktc2V0dGluZ3M6YmVmb3JlIHtcbiAgY29udGVudDogXCLumI9cIjtcbn1cblxuLnRpLXNlYXJjaDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6YkFwiO1xufVxuXG4udGktem9vbS1pbjpiZWZvcmUge1xuICBjb250ZW50OiBcIu6YkVwiO1xufVxuXG4udGktem9vbS1vdXQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLumJJcIjtcbn1cblxuLnRpLWN1dDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6Yk1wiO1xufVxuXG4udGktcnVsZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCLumJRcIjtcbn1cblxuLnRpLXJ1bGVyLXBlbmNpbDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6YlVwiO1xufVxuXG4udGktcnVsZXItYWx0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7piWXCI7XG59XG5cbi50aS1ib29rbWFyazpiZWZvcmUge1xuICBjb250ZW50OiBcIu6Yl1wiO1xufVxuXG4udGktYm9va21hcmstYWx0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7piYXCI7XG59XG5cbi50aS1yZWxvYWQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLumJlcIjtcbn1cblxuLnRpLXBsdXM6YmVmb3JlIHtcbiAgY29udGVudDogXCLumJpcIjtcbn1cblxuLnRpLXBpbjpiZWZvcmUge1xuICBjb250ZW50OiBcIu6Ym1wiO1xufVxuXG4udGktcGVuY2lsOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7picXCI7XG59XG5cbi50aS1wZW5jaWwtYWx0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7pidXCI7XG59XG5cbi50aS1wYWludC1yb2xsZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCLumJ5cIjtcbn1cblxuLnRpLXBhaW50LWJ1Y2tldDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6Yn1wiO1xufVxuXG4udGktbmE6YmVmb3JlIHtcbiAgY29udGVudDogXCLumKBcIjtcbn1cblxuLnRpLW1vYmlsZTpiZWZvcmUge1xuICBjb250ZW50OiBcIu6YoVwiO1xufVxuXG4udGktbWludXM6YmVmb3JlIHtcbiAgY29udGVudDogXCLumKJcIjtcbn1cblxuLnRpLW1lZGFsbDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6Yo1wiO1xufVxuXG4udGktbWVkYWxsLWFsdDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6YpFwiO1xufVxuXG4udGktbWFya2VyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7pilXCI7XG59XG5cbi50aS1tYXJrZXItYWx0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7pimXCI7XG59XG5cbi50aS1hcnJvdy11cDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6Yp1wiO1xufVxuXG4udGktYXJyb3ctcmlnaHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLumKhcIjtcbn1cblxuLnRpLWFycm93LWxlZnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLumKlcIjtcbn1cblxuLnRpLWFycm93LWRvd246YmVmb3JlIHtcbiAgY29udGVudDogXCLumKpcIjtcbn1cblxuLnRpLWxvY2s6YmVmb3JlIHtcbiAgY29udGVudDogXCLumKtcIjtcbn1cblxuLnRpLWxvY2F0aW9uLWFycm93OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7pisXCI7XG59XG5cbi50aS1saW5rOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7pitXCI7XG59XG5cbi50aS1sYXlvdXQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLumK5cIjtcbn1cblxuLnRpLWxheWVyczpiZWZvcmUge1xuICBjb250ZW50OiBcIu6Yr1wiO1xufVxuXG4udGktbGF5ZXJzLWFsdDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6YsFwiO1xufVxuXG4udGkta2V5OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7pixXCI7XG59XG5cbi50aS1pbXBvcnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLumLJcIjtcbn1cblxuLnRpLWltYWdlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7pizXCI7XG59XG5cbi50aS1oZWFydDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6YtFwiO1xufVxuXG4udGktaGVhcnQtYnJva2VuOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7pi1XCI7XG59XG5cbi50aS1oYW5kLXN0b3A6YmVmb3JlIHtcbiAgY29udGVudDogXCLumLZcIjtcbn1cblxuLnRpLWhhbmQtb3BlbjpiZWZvcmUge1xuICBjb250ZW50OiBcIu6Yt1wiO1xufVxuXG4udGktaGFuZC1kcmFnOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7pi4XCI7XG59XG5cbi50aS1mb2xkZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCLumLlcIjtcbn1cblxuLnRpLWZsYWc6YmVmb3JlIHtcbiAgY29udGVudDogXCLumLpcIjtcbn1cblxuLnRpLWZsYWctYWx0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7pi7XCI7XG59XG5cbi50aS1mbGFnLWFsdC0yOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7pi8XCI7XG59XG5cbi50aS1leWU6YmVmb3JlIHtcbiAgY29udGVudDogXCLumL1cIjtcbn1cblxuLnRpLWV4cG9ydDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6YvlwiO1xufVxuXG4udGktZXhjaGFuZ2UtdmVydGljYWw6YmVmb3JlIHtcbiAgY29udGVudDogXCLumL9cIjtcbn1cblxuLnRpLWRlc2t0b3A6YmVmb3JlIHtcbiAgY29udGVudDogXCLumYBcIjtcbn1cblxuLnRpLWN1cDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6ZgVwiO1xufVxuXG4udGktY3Jvd246YmVmb3JlIHtcbiAgY29udGVudDogXCLumYJcIjtcbn1cblxuLnRpLWNvbW1lbnRzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7pmDXCI7XG59XG5cbi50aS1jb21tZW50OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7pmEXCI7XG59XG5cbi50aS1jb21tZW50LWFsdDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6ZhVwiO1xufVxuXG4udGktY2xvc2U6YmVmb3JlIHtcbiAgY29udGVudDogXCLumYZcIjtcbn1cblxuLnRpLWNsaXA6YmVmb3JlIHtcbiAgY29udGVudDogXCLumYdcIjtcbn1cblxuLnRpLWFuZ2xlLXVwOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7pmIXCI7XG59XG5cbi50aS1hbmdsZS1yaWdodDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6ZiVwiO1xufVxuXG4udGktYW5nbGUtbGVmdDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6ZilwiO1xufVxuXG4udGktYW5nbGUtZG93bjpiZWZvcmUge1xuICBjb250ZW50OiBcIu6Zi1wiO1xufVxuXG4udGktY2hlY2s6YmVmb3JlIHtcbiAgY29udGVudDogXCLumYxcIjtcbn1cblxuLnRpLWNoZWNrLWJveDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6ZjVwiO1xufVxuXG4udGktY2FtZXJhOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7pmOXCI7XG59XG5cbi50aS1hbm5vdW5jZW1lbnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLumY9cIjtcbn1cblxuLnRpLWJydXNoOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7pmQXCI7XG59XG5cbi50aS1icmllZmNhc2U6YmVmb3JlIHtcbiAgY29udGVudDogXCLumZFcIjtcbn1cblxuLnRpLWJvbHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLumZJcIjtcbn1cblxuLnRpLWJvbHQtYWx0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7pmTXCI7XG59XG5cbi50aS1ibGFja2JvYXJkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7pmUXCI7XG59XG5cbi50aS1iYWc6YmVmb3JlIHtcbiAgY29udGVudDogXCLumZVcIjtcbn1cblxuLnRpLW1vdmU6YmVmb3JlIHtcbiAgY29udGVudDogXCLumZZcIjtcbn1cblxuLnRpLWFycm93cy12ZXJ0aWNhbDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6Zl1wiO1xufVxuXG4udGktYXJyb3dzLWhvcml6b250YWw6YmVmb3JlIHtcbiAgY29udGVudDogXCLumZhcIjtcbn1cblxuLnRpLWZ1bGxzY3JlZW46YmVmb3JlIHtcbiAgY29udGVudDogXCLumZlcIjtcbn1cblxuLnRpLWFycm93LXRvcC1yaWdodDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6ZmlwiO1xufVxuXG4udGktYXJyb3ctdG9wLWxlZnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLumZtcIjtcbn1cblxuLnRpLWFycm93LWNpcmNsZS11cDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6ZnFwiO1xufVxuXG4udGktYXJyb3ctY2lyY2xlLXJpZ2h0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7pmdXCI7XG59XG5cbi50aS1hcnJvdy1jaXJjbGUtbGVmdDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6ZnlwiO1xufVxuXG4udGktYXJyb3ctY2lyY2xlLWRvd246YmVmb3JlIHtcbiAgY29udGVudDogXCLumZ9cIjtcbn1cblxuLnRpLWFuZ2xlLWRvdWJsZS11cDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6ZoFwiO1xufVxuXG4udGktYW5nbGUtZG91YmxlLXJpZ2h0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7pmhXCI7XG59XG5cbi50aS1hbmdsZS1kb3VibGUtbGVmdDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6ZolwiO1xufVxuXG4udGktYW5nbGUtZG91YmxlLWRvd246YmVmb3JlIHtcbiAgY29udGVudDogXCLumaNcIjtcbn1cblxuLnRpLXppcDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6ZpFwiO1xufVxuXG4udGktd29ybGQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLumaVcIjtcbn1cblxuLnRpLXdoZWVsY2hhaXI6YmVmb3JlIHtcbiAgY29udGVudDogXCLumaZcIjtcbn1cblxuLnRpLXZpZXctbGlzdDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6Zp1wiO1xufVxuXG4udGktdmlldy1saXN0LWFsdDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6ZqFwiO1xufVxuXG4udGktdmlldy1ncmlkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7pmpXCI7XG59XG5cbi50aS11cHBlcmNhc2U6YmVmb3JlIHtcbiAgY29udGVudDogXCLumapcIjtcbn1cblxuLnRpLXVwbG9hZDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6Zq1wiO1xufVxuXG4udGktdW5kZXJsaW5lOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7pmsXCI7XG59XG5cbi50aS10cnVjazpiZWZvcmUge1xuICBjb250ZW50OiBcIu6ZrVwiO1xufVxuXG4udGktdGltZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCLuma5cIjtcbn1cblxuLnRpLXRpY2tldDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6Zr1wiO1xufVxuXG4udGktdGh1bWItdXA6YmVmb3JlIHtcbiAgY29udGVudDogXCLumbBcIjtcbn1cblxuLnRpLXRodW1iLWRvd246YmVmb3JlIHtcbiAgY29udGVudDogXCLumbFcIjtcbn1cblxuLnRpLXRleHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLumbJcIjtcbn1cblxuLnRpLXN0YXRzLXVwOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7pmzXCI7XG59XG5cbi50aS1zdGF0cy1kb3duOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7pm0XCI7XG59XG5cbi50aS1zcGxpdC12OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7pm1XCI7XG59XG5cbi50aS1zcGxpdC1oOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7pm2XCI7XG59XG5cbi50aS1zbWFsbGNhcDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6Zt1wiO1xufVxuXG4udGktc2hpbmU6YmVmb3JlIHtcbiAgY29udGVudDogXCLumbhcIjtcbn1cblxuLnRpLXNoaWZ0LXJpZ2h0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7pm5XCI7XG59XG5cbi50aS1zaGlmdC1sZWZ0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7pm6XCI7XG59XG5cbi50aS1zaGllbGQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLumbtcIjtcbn1cblxuLnRpLW5vdGVwYWQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLumbxcIjtcbn1cblxuLnRpLXNlcnZlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIu6ZvVwiO1xufVxuXG4udGktcXVvdGUtcmlnaHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLumb5cIjtcbn1cblxuLnRpLXF1b3RlLWxlZnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLumb9cIjtcbn1cblxuLnRpLXB1bHNlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7pqAXCI7XG59XG5cbi50aS1wcmludGVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7pqBXCI7XG59XG5cbi50aS1wb3dlci1vZmY6YmVmb3JlIHtcbiAgY29udGVudDogXCLumoJcIjtcbn1cblxuLnRpLXBsdWc6YmVmb3JlIHtcbiAgY29udGVudDogXCLumoNcIjtcbn1cblxuLnRpLXBpZS1jaGFydDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6ahFwiO1xufVxuXG4udGktcGFyYWdyYXBoOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7pqFXCI7XG59XG5cbi50aS1wYW5lbDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6ahlwiO1xufVxuXG4udGktcGFja2FnZTpiZWZvcmUge1xuICBjb250ZW50OiBcIu6ah1wiO1xufVxuXG4udGktbXVzaWM6YmVmb3JlIHtcbiAgY29udGVudDogXCLumohcIjtcbn1cblxuLnRpLW11c2ljLWFsdDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6aiVwiO1xufVxuXG4udGktbW91c2U6YmVmb3JlIHtcbiAgY29udGVudDogXCLumopcIjtcbn1cblxuLnRpLW1vdXNlLWFsdDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6ai1wiO1xufVxuXG4udGktbW9uZXk6YmVmb3JlIHtcbiAgY29udGVudDogXCLumoxcIjtcbn1cblxuLnRpLW1pY3JvcGhvbmU6YmVmb3JlIHtcbiAgY29udGVudDogXCLumo1cIjtcbn1cblxuLnRpLW1lbnU6YmVmb3JlIHtcbiAgY29udGVudDogXCLumo5cIjtcbn1cblxuLnRpLW1lbnUtYWx0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7pqPXCI7XG59XG5cbi50aS1tYXA6YmVmb3JlIHtcbiAgY29udGVudDogXCLumpBcIjtcbn1cblxuLnRpLW1hcC1hbHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLumpFcIjtcbn1cblxuLnRpLWxvb3A6YmVmb3JlIHtcbiAgY29udGVudDogXCLumpJcIjtcbn1cblxuLnRpLWxvY2F0aW9uLXBpbjpiZWZvcmUge1xuICBjb250ZW50OiBcIu6ak1wiO1xufVxuXG4udGktbGlzdDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6alFwiO1xufVxuXG4udGktbGlnaHQtYnVsYjpiZWZvcmUge1xuICBjb250ZW50OiBcIu6alVwiO1xufVxuXG4udGktSXRhbGljOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7pqWXCI7XG59XG5cbi50aS1pbmZvOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7pqXXCI7XG59XG5cbi50aS1pbmZpbml0ZTpiZWZvcmUge1xuICBjb250ZW50OiBcIu6amFwiO1xufVxuXG4udGktaWQtYmFkZ2U6YmVmb3JlIHtcbiAgY29udGVudDogXCLumplcIjtcbn1cblxuLnRpLWh1bW1lcjpiZWZvcmUge1xuICBjb250ZW50OiBcIu6amlwiO1xufVxuXG4udGktaG9tZTpiZWZvcmUge1xuICBjb250ZW50OiBcIu6am1wiO1xufVxuXG4udGktaGVscDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6anFwiO1xufVxuXG4udGktaGVhZHBob25lOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7pqdXCI7XG59XG5cbi50aS1oYXJkZHJpdmVzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7pqeXCI7XG59XG5cbi50aS1oYXJkZHJpdmU6YmVmb3JlIHtcbiAgY29udGVudDogXCLump9cIjtcbn1cblxuLnRpLWdpZnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLumqBcIjtcbn1cblxuLnRpLWdhbWU6YmVmb3JlIHtcbiAgY29udGVudDogXCLumqFcIjtcbn1cblxuLnRpLWZpbHRlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIu6aolwiO1xufVxuXG4udGktZmlsZXM6YmVmb3JlIHtcbiAgY29udGVudDogXCLumqNcIjtcbn1cblxuLnRpLWZpbGU6YmVmb3JlIHtcbiAgY29udGVudDogXCLumqRcIjtcbn1cblxuLnRpLWVyYXNlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIu6apVwiO1xufVxuXG4udGktZW52ZWxvcGU6YmVmb3JlIHtcbiAgY29udGVudDogXCLumqZcIjtcbn1cblxuLnRpLWRvd25sb2FkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7pqnXCI7XG59XG5cbi50aS1kaXJlY3Rpb246YmVmb3JlIHtcbiAgY29udGVudDogXCLumqhcIjtcbn1cblxuLnRpLWRpcmVjdGlvbi1hbHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLumqlcIjtcbn1cblxuLnRpLWRhc2hib2FyZDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6aqlwiO1xufVxuXG4udGktY29udHJvbC1zdG9wOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7pqrXCI7XG59XG5cbi50aS1jb250cm9sLXNodWZmbGU6YmVmb3JlIHtcbiAgY29udGVudDogXCLumqxcIjtcbn1cblxuLnRpLWNvbnRyb2wtcGxheTpiZWZvcmUge1xuICBjb250ZW50OiBcIu6arVwiO1xufVxuXG4udGktY29udHJvbC1wYXVzZTpiZWZvcmUge1xuICBjb250ZW50OiBcIu6arlwiO1xufVxuXG4udGktY29udHJvbC1mb3J3YXJkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7pqvXCI7XG59XG5cbi50aS1jb250cm9sLWJhY2t3YXJkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7pqwXCI7XG59XG5cbi50aS1jbG91ZDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6asVwiO1xufVxuXG4udGktY2xvdWQtdXA6YmVmb3JlIHtcbiAgY29udGVudDogXCLumrJcIjtcbn1cblxuLnRpLWNsb3VkLWRvd246YmVmb3JlIHtcbiAgY29udGVudDogXCLumrNcIjtcbn1cblxuLnRpLWNsaXBib2FyZDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6atFwiO1xufVxuXG4udGktY2FyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7pq1XCI7XG59XG5cbi50aS1jYWxlbmRhcjpiZWZvcmUge1xuICBjb250ZW50OiBcIu6atlwiO1xufVxuXG4udGktYm9vazpiZWZvcmUge1xuICBjb250ZW50OiBcIu6at1wiO1xufVxuXG4udGktYmVsbDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6auFwiO1xufVxuXG4udGktYmFza2V0YmFsbDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6auVwiO1xufVxuXG4udGktYmFyLWNoYXJ0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7pq6XCI7XG59XG5cbi50aS1iYXItY2hhcnQtYWx0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7pq7XCI7XG59XG5cbi50aS1iYWNrLXJpZ2h0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7pq8XCI7XG59XG5cbi50aS1iYWNrLWxlZnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLumr1cIjtcbn1cblxuLnRpLWFycm93cy1jb3JuZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCLumr5cIjtcbn1cblxuLnRpLWFyY2hpdmU6YmVmb3JlIHtcbiAgY29udGVudDogXCLumr9cIjtcbn1cblxuLnRpLWFuY2hvcjpiZWZvcmUge1xuICBjb250ZW50OiBcIu6bgFwiO1xufVxuXG4udGktYWxpZ24tcmlnaHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLum4FcIjtcbn1cblxuLnRpLWFsaWduLWxlZnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLum4JcIjtcbn1cblxuLnRpLWFsaWduLWp1c3RpZnk6YmVmb3JlIHtcbiAgY29udGVudDogXCLum4NcIjtcbn1cblxuLnRpLWFsaWduLWNlbnRlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIu6bhFwiO1xufVxuXG4udGktYWxlcnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLum4VcIjtcbn1cblxuLnRpLWFsYXJtLWNsb2NrOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7puGXCI7XG59XG5cbi50aS1hZ2VuZGE6YmVmb3JlIHtcbiAgY29udGVudDogXCLum4dcIjtcbn1cblxuLnRpLXdyaXRlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7puIXCI7XG59XG5cbi50aS13aW5kb3c6YmVmb3JlIHtcbiAgY29udGVudDogXCLum4lcIjtcbn1cblxuLnRpLXdpZGdldGl6ZWQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLum4pcIjtcbn1cblxuLnRpLXdpZGdldDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6bi1wiO1xufVxuXG4udGktd2lkZ2V0LWFsdDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6bjFwiO1xufVxuXG4udGktd2FsbGV0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7puNXCI7XG59XG5cbi50aS12aWRlby1jbGFwcGVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7puOXCI7XG59XG5cbi50aS12aWRlby1jYW1lcmE6YmVmb3JlIHtcbiAgY29udGVudDogXCLum49cIjtcbn1cblxuLnRpLXZlY3RvcjpiZWZvcmUge1xuICBjb250ZW50OiBcIu6bkFwiO1xufVxuXG4udGktdGhlbWlmeS1sb2dvOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7puRXCI7XG59XG5cbi50aS10aGVtaWZ5LWZhdmljb246YmVmb3JlIHtcbiAgY29udGVudDogXCLum5JcIjtcbn1cblxuLnRpLXRoZW1pZnktZmF2aWNvbi1hbHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLum5NcIjtcbn1cblxuLnRpLXN1cHBvcnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLum5RcIjtcbn1cblxuLnRpLXN0YW1wOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7puVXCI7XG59XG5cbi50aS1zcGxpdC12LWFsdDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6bllwiO1xufVxuXG4udGktc2xpY2U6YmVmb3JlIHtcbiAgY29udGVudDogXCLum5dcIjtcbn1cblxuLnRpLXNob3J0Y29kZTpiZWZvcmUge1xuICBjb250ZW50OiBcIu6bmFwiO1xufVxuXG4udGktc2hpZnQtcmlnaHQtYWx0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7puZXCI7XG59XG5cbi50aS1zaGlmdC1sZWZ0LWFsdDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6bmlwiO1xufVxuXG4udGktcnVsZXItYWx0LTI6YmVmb3JlIHtcbiAgY29udGVudDogXCLum5tcIjtcbn1cblxuLnRpLXJlY2VpcHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLum5xcIjtcbn1cblxuLnRpLXBpbjI6YmVmb3JlIHtcbiAgY29udGVudDogXCLum51cIjtcbn1cblxuLnRpLXBpbi1hbHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLum55cIjtcbn1cblxuLnRpLXBlbmNpbC1hbHQyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7pufXCI7XG59XG5cbi50aS1wYWxldHRlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7pugXCI7XG59XG5cbi50aS1tb3JlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7puhXCI7XG59XG5cbi50aS1tb3JlLWFsdDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6bolwiO1xufVxuXG4udGktbWljcm9waG9uZS1hbHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLum6NcIjtcbn1cblxuLnRpLW1hZ25ldDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6bpFwiO1xufVxuXG4udGktbGluZS1kb3VibGU6YmVmb3JlIHtcbiAgY29udGVudDogXCLum6VcIjtcbn1cblxuLnRpLWxpbmUtZG90dGVkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7pumXCI7XG59XG5cbi50aS1saW5lLWRhc2hlZDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6bp1wiO1xufVxuXG4udGktbGF5b3V0LXdpZHRoLWZ1bGw6YmVmb3JlIHtcbiAgY29udGVudDogXCLum6hcIjtcbn1cblxuLnRpLWxheW91dC13aWR0aC1kZWZhdWx0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7pupXCI7XG59XG5cbi50aS1sYXlvdXQtd2lkdGgtZGVmYXVsdC1hbHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLum6pcIjtcbn1cblxuLnRpLWxheW91dC10YWI6YmVmb3JlIHtcbiAgY29udGVudDogXCLum6tcIjtcbn1cblxuLnRpLWxheW91dC10YWItd2luZG93OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7pusXCI7XG59XG5cbi50aS1sYXlvdXQtdGFiLXY6YmVmb3JlIHtcbiAgY29udGVudDogXCLum61cIjtcbn1cblxuLnRpLWxheW91dC10YWItbWluOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7puuXCI7XG59XG5cbi50aS1sYXlvdXQtc2xpZGVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7puvXCI7XG59XG5cbi50aS1sYXlvdXQtc2xpZGVyLWFsdDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6bsFwiO1xufVxuXG4udGktbGF5b3V0LXNpZGViYXItcmlnaHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLum7FcIjtcbn1cblxuLnRpLWxheW91dC1zaWRlYmFyLW5vbmU6YmVmb3JlIHtcbiAgY29udGVudDogXCLum7JcIjtcbn1cblxuLnRpLWxheW91dC1zaWRlYmFyLWxlZnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLum7NcIjtcbn1cblxuLnRpLWxheW91dC1wbGFjZWhvbGRlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIu6btFwiO1xufVxuXG4udGktbGF5b3V0LW1lbnU6YmVmb3JlIHtcbiAgY29udGVudDogXCLum7VcIjtcbn1cblxuLnRpLWxheW91dC1tZW51LXY6YmVmb3JlIHtcbiAgY29udGVudDogXCLum7ZcIjtcbn1cblxuLnRpLWxheW91dC1tZW51LXNlcGFyYXRlZDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6bt1wiO1xufVxuXG4udGktbGF5b3V0LW1lbnUtZnVsbDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6buFwiO1xufVxuXG4udGktbGF5b3V0LW1lZGlhLXJpZ2h0LWFsdDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6buVwiO1xufVxuXG4udGktbGF5b3V0LW1lZGlhLXJpZ2h0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7pu6XCI7XG59XG5cbi50aS1sYXlvdXQtbWVkaWEtb3ZlcmxheTpiZWZvcmUge1xuICBjb250ZW50OiBcIu6bu1wiO1xufVxuXG4udGktbGF5b3V0LW1lZGlhLW92ZXJsYXktYWx0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7pu8XCI7XG59XG5cbi50aS1sYXlvdXQtbWVkaWEtb3ZlcmxheS1hbHQtMjpiZWZvcmUge1xuICBjb250ZW50OiBcIu6bvVwiO1xufVxuXG4udGktbGF5b3V0LW1lZGlhLWxlZnQtYWx0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7pu+XCI7XG59XG5cbi50aS1sYXlvdXQtbWVkaWEtbGVmdDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6bv1wiO1xufVxuXG4udGktbGF5b3V0LW1lZGlhLWNlbnRlci1hbHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLunIBcIjtcbn1cblxuLnRpLWxheW91dC1tZWRpYS1jZW50ZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCLunIFcIjtcbn1cblxuLnRpLWxheW91dC1saXN0LXRodW1iOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7pyCXCI7XG59XG5cbi50aS1sYXlvdXQtbGlzdC10aHVtYi1hbHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLunINcIjtcbn1cblxuLnRpLWxheW91dC1saXN0LXBvc3Q6YmVmb3JlIHtcbiAgY29udGVudDogXCLunIRcIjtcbn1cblxuLnRpLWxheW91dC1saXN0LWxhcmdlLWltYWdlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7pyFXCI7XG59XG5cbi50aS1sYXlvdXQtbGluZS1zb2xpZDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6chlwiO1xufVxuXG4udGktbGF5b3V0LWdyaWQ0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7pyHXCI7XG59XG5cbi50aS1sYXlvdXQtZ3JpZDM6YmVmb3JlIHtcbiAgY29udGVudDogXCLunIhcIjtcbn1cblxuLnRpLWxheW91dC1ncmlkMjpiZWZvcmUge1xuICBjb250ZW50OiBcIu6ciVwiO1xufVxuXG4udGktbGF5b3V0LWdyaWQyLXRodW1iOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7pyKXCI7XG59XG5cbi50aS1sYXlvdXQtY3RhLXJpZ2h0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7pyLXCI7XG59XG5cbi50aS1sYXlvdXQtY3RhLWxlZnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLunIxcIjtcbn1cblxuLnRpLWxheW91dC1jdGEtY2VudGVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7pyNXCI7XG59XG5cbi50aS1sYXlvdXQtY3RhLWJ0bi1yaWdodDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6cjlwiO1xufVxuXG4udGktbGF5b3V0LWN0YS1idG4tbGVmdDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6cj1wiO1xufVxuXG4udGktbGF5b3V0LWNvbHVtbjQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLunJBcIjtcbn1cblxuLnRpLWxheW91dC1jb2x1bW4zOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7pyRXCI7XG59XG5cbi50aS1sYXlvdXQtY29sdW1uMjpiZWZvcmUge1xuICBjb250ZW50OiBcIu6cklwiO1xufVxuXG4udGktbGF5b3V0LWFjY29yZGlvbi1zZXBhcmF0ZWQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLunJNcIjtcbn1cblxuLnRpLWxheW91dC1hY2NvcmRpb24tbWVyZ2VkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7pyUXCI7XG59XG5cbi50aS1sYXlvdXQtYWNjb3JkaW9uLWxpc3Q6YmVmb3JlIHtcbiAgY29udGVudDogXCLunJVcIjtcbn1cblxuLnRpLWluay1wZW46YmVmb3JlIHtcbiAgY29udGVudDogXCLunJZcIjtcbn1cblxuLnRpLWluZm8tYWx0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7pyXXCI7XG59XG5cbi50aS1oZWxwLWFsdDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6cmFwiO1xufVxuXG4udGktaGVhZHBob25lLWFsdDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6cmVwiO1xufVxuXG4udGktaGFuZC1wb2ludC11cDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6cmlwiO1xufVxuXG4udGktaGFuZC1wb2ludC1yaWdodDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6cm1wiO1xufVxuXG4udGktaGFuZC1wb2ludC1sZWZ0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7pycXCI7XG59XG5cbi50aS1oYW5kLXBvaW50LWRvd246YmVmb3JlIHtcbiAgY29udGVudDogXCLunJ1cIjtcbn1cblxuLnRpLWdhbGxlcnk6YmVmb3JlIHtcbiAgY29udGVudDogXCLunJ5cIjtcbn1cblxuLnRpLWZhY2Utc21pbGU6YmVmb3JlIHtcbiAgY29udGVudDogXCLunJ9cIjtcbn1cblxuLnRpLWZhY2Utc2FkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7pygXCI7XG59XG5cbi50aS1jcmVkaXQtY2FyZDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6coVwiO1xufVxuXG4udGktY29udHJvbC1za2lwLWZvcndhcmQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLunKJcIjtcbn1cblxuLnRpLWNvbnRyb2wtc2tpcC1iYWNrd2FyZDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6co1wiO1xufVxuXG4udGktY29udHJvbC1yZWNvcmQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLunKRcIjtcbn1cblxuLnRpLWNvbnRyb2wtZWplY3Q6YmVmb3JlIHtcbiAgY29udGVudDogXCLunKVcIjtcbn1cblxuLnRpLWNvbW1lbnRzLXNtaWxleTpiZWZvcmUge1xuICBjb250ZW50OiBcIu6cplwiO1xufVxuXG4udGktYnJ1c2gtYWx0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7pynXCI7XG59XG5cbi50aS15b3V0dWJlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7pyoXCI7XG59XG5cbi50aS12aW1lbzpiZWZvcmUge1xuICBjb250ZW50OiBcIu6cqVwiO1xufVxuXG4udGktdHdpdHRlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIu6cqlwiO1xufVxuXG4udGktdGltZTpiZWZvcmUge1xuICBjb250ZW50OiBcIu6cq1wiO1xufVxuXG4udGktdHVtYmxyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7pysXCI7XG59XG5cbi50aS1za3lwZTpiZWZvcmUge1xuICBjb250ZW50OiBcIu6crVwiO1xufVxuXG4udGktc2hhcmU6YmVmb3JlIHtcbiAgY29udGVudDogXCLunK5cIjtcbn1cblxuLnRpLXNoYXJlLWFsdDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6cr1wiO1xufVxuXG4udGktcm9ja2V0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7pywXCI7XG59XG5cbi50aS1waW50ZXJlc3Q6YmVmb3JlIHtcbiAgY29udGVudDogXCLunLFcIjtcbn1cblxuLnRpLW5ldy13aW5kb3c6YmVmb3JlIHtcbiAgY29udGVudDogXCLunLJcIjtcbn1cblxuLnRpLW1pY3Jvc29mdDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6cs1wiO1xufVxuXG4udGktbGlzdC1vbDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6ctFwiO1xufVxuXG4udGktbGlua2VkaW46YmVmb3JlIHtcbiAgY29udGVudDogXCLunLVcIjtcbn1cblxuLnRpLWxheW91dC1zaWRlYmFyLTI6YmVmb3JlIHtcbiAgY29udGVudDogXCLunLZcIjtcbn1cblxuLnRpLWxheW91dC1ncmlkNC1hbHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLunLdcIjtcbn1cblxuLnRpLWxheW91dC1ncmlkMy1hbHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLunLhcIjtcbn1cblxuLnRpLWxheW91dC1ncmlkMi1hbHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLunLlcIjtcbn1cblxuLnRpLWxheW91dC1jb2x1bW40LWFsdDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6culwiO1xufVxuXG4udGktbGF5b3V0LWNvbHVtbjMtYWx0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7py7XCI7XG59XG5cbi50aS1sYXlvdXQtY29sdW1uMi1hbHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLunLxcIjtcbn1cblxuLnRpLWluc3RhZ3JhbTpiZWZvcmUge1xuICBjb250ZW50OiBcIu6cvVwiO1xufVxuXG4udGktZ29vZ2xlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7py+XCI7XG59XG5cbi50aS1naXRodWI6YmVmb3JlIHtcbiAgY29udGVudDogXCLunL9cIjtcbn1cblxuLnRpLWZsaWNrcjpiZWZvcmUge1xuICBjb250ZW50OiBcIu6dgFwiO1xufVxuXG4udGktZmFjZWJvb2s6YmVmb3JlIHtcbiAgY29udGVudDogXCLunYFcIjtcbn1cblxuLnRpLWRyb3Bib3g6YmVmb3JlIHtcbiAgY29udGVudDogXCLunYJcIjtcbn1cblxuLnRpLWRyaWJiYmxlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7p2DXCI7XG59XG5cbi50aS1hcHBsZTpiZWZvcmUge1xuICBjb250ZW50OiBcIu6dhFwiO1xufVxuXG4udGktYW5kcm9pZDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6dhVwiO1xufVxuXG4udGktc2F2ZTpiZWZvcmUge1xuICBjb250ZW50OiBcIu6dhlwiO1xufVxuXG4udGktc2F2ZS1hbHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLunYdcIjtcbn1cblxuLnRpLXlhaG9vOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7p2IXCI7XG59XG5cbi50aS13b3JkcHJlc3M6YmVmb3JlIHtcbiAgY29udGVudDogXCLunYlcIjtcbn1cblxuLnRpLXZpbWVvLWFsdDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6dilwiO1xufVxuXG4udGktdHdpdHRlci1hbHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLunYtcIjtcbn1cblxuLnRpLXR1bWJsci1hbHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLunYxcIjtcbn1cblxuLnRpLXRyZWxsbzpiZWZvcmUge1xuICBjb250ZW50OiBcIu6djVwiO1xufVxuXG4udGktc3RhY2stb3ZlcmZsb3c6YmVmb3JlIHtcbiAgY29udGVudDogXCLunY5cIjtcbn1cblxuLnRpLXNvdW5kY2xvdWQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLunY9cIjtcbn1cblxuLnRpLXNoYXJldGhpczpiZWZvcmUge1xuICBjb250ZW50OiBcIu6dkFwiO1xufVxuXG4udGktc2hhcmV0aGlzLWFsdDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6dkVwiO1xufVxuXG4udGktcmVkZGl0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7p2SXCI7XG59XG5cbi50aS1waW50ZXJlc3QtYWx0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7p2TXCI7XG59XG5cbi50aS1taWNyb3NvZnQtYWx0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7p2UXCI7XG59XG5cbi50aS1saW51eDpiZWZvcmUge1xuICBjb250ZW50OiBcIu6dlVwiO1xufVxuXG4udGktanNmaWRkbGU6YmVmb3JlIHtcbiAgY29udGVudDogXCLunZZcIjtcbn1cblxuLnRpLWpvb21sYTpiZWZvcmUge1xuICBjb250ZW50OiBcIu6dl1wiO1xufVxuXG4udGktaHRtbDU6YmVmb3JlIHtcbiAgY29udGVudDogXCLunZhcIjtcbn1cblxuLnRpLWZsaWNrci1hbHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLunZlcIjtcbn1cblxuLnRpLWVtYWlsOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7p2aXCI7XG59XG5cbi50aS1kcnVwYWw6YmVmb3JlIHtcbiAgY29udGVudDogXCLunZtcIjtcbn1cblxuLnRpLWRyb3Bib3gtYWx0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7p2cXCI7XG59XG5cbi50aS1jc3MzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7p2dXCI7XG59XG5cbi50aS1yc3M6YmVmb3JlIHtcbiAgY29udGVudDogXCLunZ5cIjtcbn1cblxuLnRpLXJzcy1hbHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLunZ9cIjtcbn1cblxuLnJlZ2lzdHJhdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuLnJlZ2lzdHJhdGlvbl9fbmF2IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLnJlZ2lzdHJhdGlvbl9fbmF2LWxpbmsge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAyMXB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgY29sb3I6ICM4ODhFQTc7XG59XG4ucmVnaXN0cmF0aW9uX19uYXYtbGlua19hY3RpdmUge1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzMxMzY0Mztcbn1cblxuLmZvcm0ge1xuICBwYWRkaW5nOiA0MHB4IDc1cHg7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBib3JkZXI6IDFweCBzb2xpZCAjRTZFQ0Y1O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLmZvcm1fX2xhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5mb3JtX19sYWJlbC10aXRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMjBweDtcbiAgdG9wOiAxMnB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzg4OEVBNztcbn1cbi5mb3JtX19jb250cm9sIHtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjMzEzNjQzO1xuICB3aWR0aDogMzAwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNFNkVDRjU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG9wYWNpdHk6IDE7XG4gIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDkwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uZm9ybV9fY29udHJvbC5uZy12YWxpZCB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNBQUM3MkU2Njtcbn1cbi5mb3JtX19jb250cm9sLm5nLWludmFsaWQ6bm90KGZvcm0pIHtcbiAgYm9yZGVyOiAycHggc29saWQgI0U2Mzc4Mjtcbn1cbi5mb3JtX19jb250cm9sOmFjdGl2ZSwgLmZvcm1fX2NvbnRyb2w6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IDJweCBzb2xpZCAjMjJBNERDO1xufVxuLmZvcm1fX2J1dHRvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDIwcHggYXV0byAwIGF1dG87XG4gIHBhZGRpbmc6IDEwcHggMjFweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiAjMjJBNERDIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG4uZm9ybV9fYnV0dG9uOmFjdGl2ZSwgLmZvcm1fX2J1dHRvbjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5mb3JtX19idXR0b246ZGlzYWJsZWQge1xuICBvcGFjaXR5OiA1MCU7XG59IiwiW2NsYXNzXj1cInRpLVwiXSwgW2NsYXNzKj1cIiB0aS1cIl0ge1xuICBmb250LWZhbWlseTogJ3RoZW1pZnknO1xuICBzcGVhazogbm9uZTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuXG4gIC8qIEJldHRlciBGb250IFJlbmRlcmluZyA9PT09PT09PT09PSAqL1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuLnRpLXdhbmQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU2MDBcIjtcbn1cbi50aS12b2x1bWU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU2MDFcIjtcbn1cbi50aS11c2VyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNjAyXCI7XG59XG4udGktdW5sb2NrOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNjAzXCI7XG59XG4udGktdW5saW5rOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNjA0XCI7XG59XG4udGktdHJhc2g6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU2MDVcIjtcbn1cbi50aS10aG91Z2h0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNjA2XCI7XG59XG4udGktdGFyZ2V0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNjA3XCI7XG59XG4udGktdGFnOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNjA4XCI7XG59XG4udGktdGFibGV0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNjA5XCI7XG59XG4udGktc3RhcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTYwYVwiO1xufVxuLnRpLXNwcmF5OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNjBiXCI7XG59XG4udGktc2lnbmFsOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNjBjXCI7XG59XG4udGktc2hvcHBpbmctY2FydDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTYwZFwiO1xufVxuLnRpLXNob3BwaW5nLWNhcnQtZnVsbDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTYwZVwiO1xufVxuLnRpLXNldHRpbmdzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNjBmXCI7XG59XG4udGktc2VhcmNoOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNjEwXCI7XG59XG4udGktem9vbS1pbjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTYxMVwiO1xufVxuLnRpLXpvb20tb3V0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNjEyXCI7XG59XG4udGktY3V0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNjEzXCI7XG59XG4udGktcnVsZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU2MTRcIjtcbn1cbi50aS1ydWxlci1wZW5jaWw6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU2MTVcIjtcbn1cbi50aS1ydWxlci1hbHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU2MTZcIjtcbn1cbi50aS1ib29rbWFyazpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTYxN1wiO1xufVxuLnRpLWJvb2ttYXJrLWFsdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTYxOFwiO1xufVxuLnRpLXJlbG9hZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTYxOVwiO1xufVxuLnRpLXBsdXM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU2MWFcIjtcbn1cbi50aS1waW46YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU2MWJcIjtcbn1cbi50aS1wZW5jaWw6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU2MWNcIjtcbn1cbi50aS1wZW5jaWwtYWx0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNjFkXCI7XG59XG4udGktcGFpbnQtcm9sbGVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNjFlXCI7XG59XG4udGktcGFpbnQtYnVja2V0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNjFmXCI7XG59XG4udGktbmE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU2MjBcIjtcbn1cbi50aS1tb2JpbGU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU2MjFcIjtcbn1cbi50aS1taW51czpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTYyMlwiO1xufVxuLnRpLW1lZGFsbDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTYyM1wiO1xufVxuLnRpLW1lZGFsbC1hbHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU2MjRcIjtcbn1cbi50aS1tYXJrZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU2MjVcIjtcbn1cbi50aS1tYXJrZXItYWx0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNjI2XCI7XG59XG4udGktYXJyb3ctdXA6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU2MjdcIjtcbn1cbi50aS1hcnJvdy1yaWdodDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTYyOFwiO1xufVxuLnRpLWFycm93LWxlZnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU2MjlcIjtcbn1cbi50aS1hcnJvdy1kb3duOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNjJhXCI7XG59XG4udGktbG9jazpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTYyYlwiO1xufVxuLnRpLWxvY2F0aW9uLWFycm93OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNjJjXCI7XG59XG4udGktbGluazpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTYyZFwiO1xufVxuLnRpLWxheW91dDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTYyZVwiO1xufVxuLnRpLWxheWVyczpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTYyZlwiO1xufVxuLnRpLWxheWVycy1hbHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU2MzBcIjtcbn1cbi50aS1rZXk6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU2MzFcIjtcbn1cbi50aS1pbXBvcnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU2MzJcIjtcbn1cbi50aS1pbWFnZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTYzM1wiO1xufVxuLnRpLWhlYXJ0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNjM0XCI7XG59XG4udGktaGVhcnQtYnJva2VuOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNjM1XCI7XG59XG4udGktaGFuZC1zdG9wOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNjM2XCI7XG59XG4udGktaGFuZC1vcGVuOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNjM3XCI7XG59XG4udGktaGFuZC1kcmFnOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNjM4XCI7XG59XG4udGktZm9sZGVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNjM5XCI7XG59XG4udGktZmxhZzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTYzYVwiO1xufVxuLnRpLWZsYWctYWx0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNjNiXCI7XG59XG4udGktZmxhZy1hbHQtMjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTYzY1wiO1xufVxuLnRpLWV5ZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTYzZFwiO1xufVxuLnRpLWV4cG9ydDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTYzZVwiO1xufVxuLnRpLWV4Y2hhbmdlLXZlcnRpY2FsOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNjNmXCI7XG59XG4udGktZGVza3RvcDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTY0MFwiO1xufVxuLnRpLWN1cDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTY0MVwiO1xufVxuLnRpLWNyb3duOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNjQyXCI7XG59XG4udGktY29tbWVudHM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU2NDNcIjtcbn1cbi50aS1jb21tZW50OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNjQ0XCI7XG59XG4udGktY29tbWVudC1hbHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU2NDVcIjtcbn1cbi50aS1jbG9zZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTY0NlwiO1xufVxuLnRpLWNsaXA6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU2NDdcIjtcbn1cbi50aS1hbmdsZS11cDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTY0OFwiO1xufVxuLnRpLWFuZ2xlLXJpZ2h0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNjQ5XCI7XG59XG4udGktYW5nbGUtbGVmdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTY0YVwiO1xufVxuLnRpLWFuZ2xlLWRvd246YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU2NGJcIjtcbn1cbi50aS1jaGVjazpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTY0Y1wiO1xufVxuLnRpLWNoZWNrLWJveDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTY0ZFwiO1xufVxuLnRpLWNhbWVyYTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTY0ZVwiO1xufVxuLnRpLWFubm91bmNlbWVudDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTY0ZlwiO1xufVxuLnRpLWJydXNoOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNjUwXCI7XG59XG4udGktYnJpZWZjYXNlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNjUxXCI7XG59XG4udGktYm9sdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTY1MlwiO1xufVxuLnRpLWJvbHQtYWx0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNjUzXCI7XG59XG4udGktYmxhY2tib2FyZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTY1NFwiO1xufVxuLnRpLWJhZzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTY1NVwiO1xufVxuLnRpLW1vdmU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU2NTZcIjtcbn1cbi50aS1hcnJvd3MtdmVydGljYWw6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU2NTdcIjtcbn1cbi50aS1hcnJvd3MtaG9yaXpvbnRhbDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTY1OFwiO1xufVxuLnRpLWZ1bGxzY3JlZW46YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU2NTlcIjtcbn1cbi50aS1hcnJvdy10b3AtcmlnaHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU2NWFcIjtcbn1cbi50aS1hcnJvdy10b3AtbGVmdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTY1YlwiO1xufVxuLnRpLWFycm93LWNpcmNsZS11cDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTY1Y1wiO1xufVxuLnRpLWFycm93LWNpcmNsZS1yaWdodDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTY1ZFwiO1xufVxuLnRpLWFycm93LWNpcmNsZS1sZWZ0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNjVlXCI7XG59XG4udGktYXJyb3ctY2lyY2xlLWRvd246YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU2NWZcIjtcbn1cbi50aS1hbmdsZS1kb3VibGUtdXA6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU2NjBcIjtcbn1cbi50aS1hbmdsZS1kb3VibGUtcmlnaHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU2NjFcIjtcbn1cbi50aS1hbmdsZS1kb3VibGUtbGVmdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTY2MlwiO1xufVxuLnRpLWFuZ2xlLWRvdWJsZS1kb3duOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNjYzXCI7XG59XG4udGktemlwOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNjY0XCI7XG59XG4udGktd29ybGQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU2NjVcIjtcbn1cbi50aS13aGVlbGNoYWlyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNjY2XCI7XG59XG4udGktdmlldy1saXN0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNjY3XCI7XG59XG4udGktdmlldy1saXN0LWFsdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTY2OFwiO1xufVxuLnRpLXZpZXctZ3JpZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTY2OVwiO1xufVxuLnRpLXVwcGVyY2FzZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTY2YVwiO1xufVxuLnRpLXVwbG9hZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTY2YlwiO1xufVxuLnRpLXVuZGVybGluZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTY2Y1wiO1xufVxuLnRpLXRydWNrOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNjZkXCI7XG59XG4udGktdGltZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU2NmVcIjtcbn1cbi50aS10aWNrZXQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU2NmZcIjtcbn1cbi50aS10aHVtYi11cDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTY3MFwiO1xufVxuLnRpLXRodW1iLWRvd246YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU2NzFcIjtcbn1cbi50aS10ZXh0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNjcyXCI7XG59XG4udGktc3RhdHMtdXA6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU2NzNcIjtcbn1cbi50aS1zdGF0cy1kb3duOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNjc0XCI7XG59XG4udGktc3BsaXQtdjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTY3NVwiO1xufVxuLnRpLXNwbGl0LWg6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU2NzZcIjtcbn1cbi50aS1zbWFsbGNhcDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTY3N1wiO1xufVxuLnRpLXNoaW5lOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNjc4XCI7XG59XG4udGktc2hpZnQtcmlnaHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU2NzlcIjtcbn1cbi50aS1zaGlmdC1sZWZ0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNjdhXCI7XG59XG4udGktc2hpZWxkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNjdiXCI7XG59XG4udGktbm90ZXBhZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTY3Y1wiO1xufVxuLnRpLXNlcnZlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTY3ZFwiO1xufVxuLnRpLXF1b3RlLXJpZ2h0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNjdlXCI7XG59XG4udGktcXVvdGUtbGVmdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTY3ZlwiO1xufVxuLnRpLXB1bHNlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNjgwXCI7XG59XG4udGktcHJpbnRlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTY4MVwiO1xufVxuLnRpLXBvd2VyLW9mZjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTY4MlwiO1xufVxuLnRpLXBsdWc6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU2ODNcIjtcbn1cbi50aS1waWUtY2hhcnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU2ODRcIjtcbn1cbi50aS1wYXJhZ3JhcGg6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU2ODVcIjtcbn1cbi50aS1wYW5lbDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTY4NlwiO1xufVxuLnRpLXBhY2thZ2U6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU2ODdcIjtcbn1cbi50aS1tdXNpYzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTY4OFwiO1xufVxuLnRpLW11c2ljLWFsdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTY4OVwiO1xufVxuLnRpLW1vdXNlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNjhhXCI7XG59XG4udGktbW91c2UtYWx0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNjhiXCI7XG59XG4udGktbW9uZXk6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU2OGNcIjtcbn1cbi50aS1taWNyb3Bob25lOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNjhkXCI7XG59XG4udGktbWVudTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTY4ZVwiO1xufVxuLnRpLW1lbnUtYWx0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNjhmXCI7XG59XG4udGktbWFwOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNjkwXCI7XG59XG4udGktbWFwLWFsdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTY5MVwiO1xufVxuLnRpLWxvb3A6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU2OTJcIjtcbn1cbi50aS1sb2NhdGlvbi1waW46YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU2OTNcIjtcbn1cbi50aS1saXN0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNjk0XCI7XG59XG4udGktbGlnaHQtYnVsYjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTY5NVwiO1xufVxuLnRpLUl0YWxpYzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTY5NlwiO1xufVxuLnRpLWluZm86YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU2OTdcIjtcbn1cbi50aS1pbmZpbml0ZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTY5OFwiO1xufVxuLnRpLWlkLWJhZGdlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNjk5XCI7XG59XG4udGktaHVtbWVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNjlhXCI7XG59XG4udGktaG9tZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTY5YlwiO1xufVxuLnRpLWhlbHA6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU2OWNcIjtcbn1cbi50aS1oZWFkcGhvbmU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU2OWRcIjtcbn1cbi50aS1oYXJkZHJpdmVzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNjllXCI7XG59XG4udGktaGFyZGRyaXZlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNjlmXCI7XG59XG4udGktZ2lmdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTZhMFwiO1xufVxuLnRpLWdhbWU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU2YTFcIjtcbn1cbi50aS1maWx0ZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU2YTJcIjtcbn1cbi50aS1maWxlczpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTZhM1wiO1xufVxuLnRpLWZpbGU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU2YTRcIjtcbn1cbi50aS1lcmFzZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU2YTVcIjtcbn1cbi50aS1lbnZlbG9wZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTZhNlwiO1xufVxuLnRpLWRvd25sb2FkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNmE3XCI7XG59XG4udGktZGlyZWN0aW9uOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNmE4XCI7XG59XG4udGktZGlyZWN0aW9uLWFsdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTZhOVwiO1xufVxuLnRpLWRhc2hib2FyZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTZhYVwiO1xufVxuLnRpLWNvbnRyb2wtc3RvcDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTZhYlwiO1xufVxuLnRpLWNvbnRyb2wtc2h1ZmZsZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTZhY1wiO1xufVxuLnRpLWNvbnRyb2wtcGxheTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTZhZFwiO1xufVxuLnRpLWNvbnRyb2wtcGF1c2U6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU2YWVcIjtcbn1cbi50aS1jb250cm9sLWZvcndhcmQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU2YWZcIjtcbn1cbi50aS1jb250cm9sLWJhY2t3YXJkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNmIwXCI7XG59XG4udGktY2xvdWQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU2YjFcIjtcbn1cbi50aS1jbG91ZC11cDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTZiMlwiO1xufVxuLnRpLWNsb3VkLWRvd246YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU2YjNcIjtcbn1cbi50aS1jbGlwYm9hcmQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU2YjRcIjtcbn1cbi50aS1jYXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU2YjVcIjtcbn1cbi50aS1jYWxlbmRhcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTZiNlwiO1xufVxuLnRpLWJvb2s6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU2YjdcIjtcbn1cbi50aS1iZWxsOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNmI4XCI7XG59XG4udGktYmFza2V0YmFsbDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTZiOVwiO1xufVxuLnRpLWJhci1jaGFydDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTZiYVwiO1xufVxuLnRpLWJhci1jaGFydC1hbHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU2YmJcIjtcbn1cbi50aS1iYWNrLXJpZ2h0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNmJjXCI7XG59XG4udGktYmFjay1sZWZ0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNmJkXCI7XG59XG4udGktYXJyb3dzLWNvcm5lcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTZiZVwiO1xufVxuLnRpLWFyY2hpdmU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU2YmZcIjtcbn1cbi50aS1hbmNob3I6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU2YzBcIjtcbn1cbi50aS1hbGlnbi1yaWdodDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTZjMVwiO1xufVxuLnRpLWFsaWduLWxlZnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU2YzJcIjtcbn1cbi50aS1hbGlnbi1qdXN0aWZ5OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNmMzXCI7XG59XG4udGktYWxpZ24tY2VudGVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNmM0XCI7XG59XG4udGktYWxlcnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU2YzVcIjtcbn1cbi50aS1hbGFybS1jbG9jazpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTZjNlwiO1xufVxuLnRpLWFnZW5kYTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTZjN1wiO1xufVxuLnRpLXdyaXRlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNmM4XCI7XG59XG4udGktd2luZG93OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNmM5XCI7XG59XG4udGktd2lkZ2V0aXplZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTZjYVwiO1xufVxuLnRpLXdpZGdldDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTZjYlwiO1xufVxuLnRpLXdpZGdldC1hbHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU2Y2NcIjtcbn1cbi50aS13YWxsZXQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU2Y2RcIjtcbn1cbi50aS12aWRlby1jbGFwcGVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNmNlXCI7XG59XG4udGktdmlkZW8tY2FtZXJhOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNmNmXCI7XG59XG4udGktdmVjdG9yOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNmQwXCI7XG59XG4udGktdGhlbWlmeS1sb2dvOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNmQxXCI7XG59XG4udGktdGhlbWlmeS1mYXZpY29uOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNmQyXCI7XG59XG4udGktdGhlbWlmeS1mYXZpY29uLWFsdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTZkM1wiO1xufVxuLnRpLXN1cHBvcnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU2ZDRcIjtcbn1cbi50aS1zdGFtcDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTZkNVwiO1xufVxuLnRpLXNwbGl0LXYtYWx0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNmQ2XCI7XG59XG4udGktc2xpY2U6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU2ZDdcIjtcbn1cbi50aS1zaG9ydGNvZGU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU2ZDhcIjtcbn1cbi50aS1zaGlmdC1yaWdodC1hbHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU2ZDlcIjtcbn1cbi50aS1zaGlmdC1sZWZ0LWFsdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTZkYVwiO1xufVxuLnRpLXJ1bGVyLWFsdC0yOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNmRiXCI7XG59XG4udGktcmVjZWlwdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTZkY1wiO1xufVxuLnRpLXBpbjI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU2ZGRcIjtcbn1cbi50aS1waW4tYWx0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNmRlXCI7XG59XG4udGktcGVuY2lsLWFsdDI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU2ZGZcIjtcbn1cbi50aS1wYWxldHRlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNmUwXCI7XG59XG4udGktbW9yZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTZlMVwiO1xufVxuLnRpLW1vcmUtYWx0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNmUyXCI7XG59XG4udGktbWljcm9waG9uZS1hbHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU2ZTNcIjtcbn1cbi50aS1tYWduZXQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU2ZTRcIjtcbn1cbi50aS1saW5lLWRvdWJsZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTZlNVwiO1xufVxuLnRpLWxpbmUtZG90dGVkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNmU2XCI7XG59XG4udGktbGluZS1kYXNoZWQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU2ZTdcIjtcbn1cbi50aS1sYXlvdXQtd2lkdGgtZnVsbDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTZlOFwiO1xufVxuLnRpLWxheW91dC13aWR0aC1kZWZhdWx0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNmU5XCI7XG59XG4udGktbGF5b3V0LXdpZHRoLWRlZmF1bHQtYWx0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNmVhXCI7XG59XG4udGktbGF5b3V0LXRhYjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTZlYlwiO1xufVxuLnRpLWxheW91dC10YWItd2luZG93OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNmVjXCI7XG59XG4udGktbGF5b3V0LXRhYi12OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNmVkXCI7XG59XG4udGktbGF5b3V0LXRhYi1taW46YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU2ZWVcIjtcbn1cbi50aS1sYXlvdXQtc2xpZGVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNmVmXCI7XG59XG4udGktbGF5b3V0LXNsaWRlci1hbHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU2ZjBcIjtcbn1cbi50aS1sYXlvdXQtc2lkZWJhci1yaWdodDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTZmMVwiO1xufVxuLnRpLWxheW91dC1zaWRlYmFyLW5vbmU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU2ZjJcIjtcbn1cbi50aS1sYXlvdXQtc2lkZWJhci1sZWZ0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNmYzXCI7XG59XG4udGktbGF5b3V0LXBsYWNlaG9sZGVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNmY0XCI7XG59XG4udGktbGF5b3V0LW1lbnU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU2ZjVcIjtcbn1cbi50aS1sYXlvdXQtbWVudS12OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNmY2XCI7XG59XG4udGktbGF5b3V0LW1lbnUtc2VwYXJhdGVkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNmY3XCI7XG59XG4udGktbGF5b3V0LW1lbnUtZnVsbDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTZmOFwiO1xufVxuLnRpLWxheW91dC1tZWRpYS1yaWdodC1hbHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU2ZjlcIjtcbn1cbi50aS1sYXlvdXQtbWVkaWEtcmlnaHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU2ZmFcIjtcbn1cbi50aS1sYXlvdXQtbWVkaWEtb3ZlcmxheTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTZmYlwiO1xufVxuLnRpLWxheW91dC1tZWRpYS1vdmVybGF5LWFsdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTZmY1wiO1xufVxuLnRpLWxheW91dC1tZWRpYS1vdmVybGF5LWFsdC0yOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNmZkXCI7XG59XG4udGktbGF5b3V0LW1lZGlhLWxlZnQtYWx0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNmZlXCI7XG59XG4udGktbGF5b3V0LW1lZGlhLWxlZnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU2ZmZcIjtcbn1cbi50aS1sYXlvdXQtbWVkaWEtY2VudGVyLWFsdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTcwMFwiO1xufVxuLnRpLWxheW91dC1tZWRpYS1jZW50ZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU3MDFcIjtcbn1cbi50aS1sYXlvdXQtbGlzdC10aHVtYjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTcwMlwiO1xufVxuLnRpLWxheW91dC1saXN0LXRodW1iLWFsdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTcwM1wiO1xufVxuLnRpLWxheW91dC1saXN0LXBvc3Q6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU3MDRcIjtcbn1cbi50aS1sYXlvdXQtbGlzdC1sYXJnZS1pbWFnZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTcwNVwiO1xufVxuLnRpLWxheW91dC1saW5lLXNvbGlkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNzA2XCI7XG59XG4udGktbGF5b3V0LWdyaWQ0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNzA3XCI7XG59XG4udGktbGF5b3V0LWdyaWQzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNzA4XCI7XG59XG4udGktbGF5b3V0LWdyaWQyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNzA5XCI7XG59XG4udGktbGF5b3V0LWdyaWQyLXRodW1iOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNzBhXCI7XG59XG4udGktbGF5b3V0LWN0YS1yaWdodDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTcwYlwiO1xufVxuLnRpLWxheW91dC1jdGEtbGVmdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTcwY1wiO1xufVxuLnRpLWxheW91dC1jdGEtY2VudGVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNzBkXCI7XG59XG4udGktbGF5b3V0LWN0YS1idG4tcmlnaHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU3MGVcIjtcbn1cbi50aS1sYXlvdXQtY3RhLWJ0bi1sZWZ0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNzBmXCI7XG59XG4udGktbGF5b3V0LWNvbHVtbjQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU3MTBcIjtcbn1cbi50aS1sYXlvdXQtY29sdW1uMzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTcxMVwiO1xufVxuLnRpLWxheW91dC1jb2x1bW4yOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNzEyXCI7XG59XG4udGktbGF5b3V0LWFjY29yZGlvbi1zZXBhcmF0ZWQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU3MTNcIjtcbn1cbi50aS1sYXlvdXQtYWNjb3JkaW9uLW1lcmdlZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTcxNFwiO1xufVxuLnRpLWxheW91dC1hY2NvcmRpb24tbGlzdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTcxNVwiO1xufVxuLnRpLWluay1wZW46YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU3MTZcIjtcbn1cbi50aS1pbmZvLWFsdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTcxN1wiO1xufVxuLnRpLWhlbHAtYWx0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNzE4XCI7XG59XG4udGktaGVhZHBob25lLWFsdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTcxOVwiO1xufVxuLnRpLWhhbmQtcG9pbnQtdXA6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU3MWFcIjtcbn1cbi50aS1oYW5kLXBvaW50LXJpZ2h0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNzFiXCI7XG59XG4udGktaGFuZC1wb2ludC1sZWZ0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNzFjXCI7XG59XG4udGktaGFuZC1wb2ludC1kb3duOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNzFkXCI7XG59XG4udGktZ2FsbGVyeTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTcxZVwiO1xufVxuLnRpLWZhY2Utc21pbGU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU3MWZcIjtcbn1cbi50aS1mYWNlLXNhZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTcyMFwiO1xufVxuLnRpLWNyZWRpdC1jYXJkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNzIxXCI7XG59XG4udGktY29udHJvbC1za2lwLWZvcndhcmQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU3MjJcIjtcbn1cbi50aS1jb250cm9sLXNraXAtYmFja3dhcmQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU3MjNcIjtcbn1cbi50aS1jb250cm9sLXJlY29yZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTcyNFwiO1xufVxuLnRpLWNvbnRyb2wtZWplY3Q6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU3MjVcIjtcbn1cbi50aS1jb21tZW50cy1zbWlsZXk6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU3MjZcIjtcbn1cbi50aS1icnVzaC1hbHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU3MjdcIjtcbn1cbi50aS15b3V0dWJlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNzI4XCI7XG59XG4udGktdmltZW86YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU3MjlcIjtcbn1cbi50aS10d2l0dGVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNzJhXCI7XG59XG4udGktdGltZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTcyYlwiO1xufVxuLnRpLXR1bWJscjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTcyY1wiO1xufVxuLnRpLXNreXBlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNzJkXCI7XG59XG4udGktc2hhcmU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU3MmVcIjtcbn1cbi50aS1zaGFyZS1hbHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU3MmZcIjtcbn1cbi50aS1yb2NrZXQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU3MzBcIjtcbn1cbi50aS1waW50ZXJlc3Q6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU3MzFcIjtcbn1cbi50aS1uZXctd2luZG93OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNzMyXCI7XG59XG4udGktbWljcm9zb2Z0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNzMzXCI7XG59XG4udGktbGlzdC1vbDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTczNFwiO1xufVxuLnRpLWxpbmtlZGluOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNzM1XCI7XG59XG4udGktbGF5b3V0LXNpZGViYXItMjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTczNlwiO1xufVxuLnRpLWxheW91dC1ncmlkNC1hbHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU3MzdcIjtcbn1cbi50aS1sYXlvdXQtZ3JpZDMtYWx0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNzM4XCI7XG59XG4udGktbGF5b3V0LWdyaWQyLWFsdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTczOVwiO1xufVxuLnRpLWxheW91dC1jb2x1bW40LWFsdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTczYVwiO1xufVxuLnRpLWxheW91dC1jb2x1bW4zLWFsdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTczYlwiO1xufVxuLnRpLWxheW91dC1jb2x1bW4yLWFsdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTczY1wiO1xufVxuLnRpLWluc3RhZ3JhbTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTczZFwiO1xufVxuLnRpLWdvb2dsZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTczZVwiO1xufVxuLnRpLWdpdGh1YjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTczZlwiO1xufVxuLnRpLWZsaWNrcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTc0MFwiO1xufVxuLnRpLWZhY2Vib29rOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNzQxXCI7XG59XG4udGktZHJvcGJveDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTc0MlwiO1xufVxuLnRpLWRyaWJiYmxlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNzQzXCI7XG59XG4udGktYXBwbGU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU3NDRcIjtcbn1cbi50aS1hbmRyb2lkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNzQ1XCI7XG59XG4udGktc2F2ZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTc0NlwiO1xufVxuLnRpLXNhdmUtYWx0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNzQ3XCI7XG59XG4udGkteWFob286YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU3NDhcIjtcbn1cbi50aS13b3JkcHJlc3M6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU3NDlcIjtcbn1cbi50aS12aW1lby1hbHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU3NGFcIjtcbn1cbi50aS10d2l0dGVyLWFsdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTc0YlwiO1xufVxuLnRpLXR1bWJsci1hbHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU3NGNcIjtcbn1cbi50aS10cmVsbG86YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU3NGRcIjtcbn1cbi50aS1zdGFjay1vdmVyZmxvdzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTc0ZVwiO1xufVxuLnRpLXNvdW5kY2xvdWQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU3NGZcIjtcbn1cbi50aS1zaGFyZXRoaXM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU3NTBcIjtcbn1cbi50aS1zaGFyZXRoaXMtYWx0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNzUxXCI7XG59XG4udGktcmVkZGl0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNzUyXCI7XG59XG4udGktcGludGVyZXN0LWFsdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTc1M1wiO1xufVxuLnRpLW1pY3Jvc29mdC1hbHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU3NTRcIjtcbn1cbi50aS1saW51eDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTc1NVwiO1xufVxuLnRpLWpzZmlkZGxlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNzU2XCI7XG59XG4udGktam9vbWxhOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNzU3XCI7XG59XG4udGktaHRtbDU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU3NThcIjtcbn1cbi50aS1mbGlja3ItYWx0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNzU5XCI7XG59XG4udGktZW1haWw6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU3NWFcIjtcbn1cbi50aS1kcnVwYWw6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU3NWJcIjtcbn1cbi50aS1kcm9wYm94LWFsdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTc1Y1wiO1xufVxuLnRpLWNzczM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU3NWRcIjtcbn1cbi50aS1yc3M6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU3NWVcIjtcbn1cbi50aS1yc3MtYWx0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlNzVmXCI7XG59XG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3MvdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3MvaWNvbnNcIjtcblxuLnJlZ2lzdHJhdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMHZoO1xuXG4gICZfX2NvbnRhaW5lciB7XG5cbiAgfVxuXG4gICZfX25hdiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDIwcHg7XG5cbiAgICAmLWxpbmsge1xuICAgICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgICAgIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQtbGlnaHQ7XG4gICAgICBmb250LXNpemU6IDIxcHg7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICBjb2xvcjogIzg4OEVBNztcblxuICAgICAgJl9hY3RpdmUge1xuICAgICAgICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LXJlZ3VsYXI7XG4gICAgICAgIGNvbG9yOiAjMzEzNjQzO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLmZvcm0ge1xuICBwYWRkaW5nOiA0MHB4IDc1cHg7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBib3JkZXI6IDFweCBzb2xpZCAjRTZFQ0Y1O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAmX19sYWJlbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICYtdGl0bGUge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbGVmdDogMjBweDtcbiAgICAgIHRvcDogMTJweDtcbiAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gICAgICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LXJlZ3VsYXI7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBjb2xvcjogIzg4OEVBNztcbiAgICB9XG4gIH1cbiAgJl9fY29udHJvbCB7XG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodC1saWdodDtcbiAgICBjb2xvcjogIzMxMzY0MztcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgI0U2RUNGNTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG9wYWNpdHk6IDE7XG4gICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggOTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICYubmctdmFsaWQge1xuICAgICAgYm9yZGVyOiAycHggc29saWQgI0FBQzcyRTY2O1xuICAgIH1cbiAgICAmLm5nLWludmFsaWQ6bm90KGZvcm0pICB7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjRTYzNzgyO1xuICAgIH1cbiAgICAmOmFjdGl2ZSxcbiAgICAmOmZvY3VzIHtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjMjJBNERDO1xuICAgIH1cbiAgfVxuICAmX19idXR0b24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMjBweCBhdXRvIDAgYXV0bztcbiAgICBwYWRkaW5nOiAxMHB4IDIxcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQ6ICMyMkE0REMgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LWxpZ2h0O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgICY6YWN0aXZlLFxuICAgICY6Zm9jdXMge1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICB9XG4gICAgJjpkaXNhYmxlZCB7XG4gICAgICBvcGFjaXR5OiA1MCU7XG4gICAgfVxuICB9XG5cbn1cbiIsIlxuJGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbiRmb250LXdlaWdodC1saWdodDogMzAwO1xuJGZvbnQtd2VpZ2h0LXJlZ3VsYXI6IDQwMDtcbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/auth/components/registration/registration.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/auth/components/registration/registration.component.ts ***!
  \********************************************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");







let RegistrationComponent = class RegistrationComponent {
    constructor(_fb, authService, router) {
        this._fb = _fb;
        this.authService = authService;
        this.router = router;
        this.isLoading = false;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    ngOnInit() {
        this.registrationGroup = this._fb.group({
            userName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/(\w+)?(?=[A-Z])\w+/g), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    }
    onSubmit() {
        this.isLoading = true;
        this.authService.registration(this.registrationGroup.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroy$))
            .subscribe((res) => {
            this.router.navigate(['/account']);
        }, (err) => {
            // errors
            this.isLoading = false;
        });
    }
};
RegistrationComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
RegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-registration',
        template: __webpack_require__(/*! raw-loader!./registration.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/auth/components/registration/registration.component.html"),
        styles: [__webpack_require__(/*! ./registration.component.scss */ "./src/app/modules/auth/components/registration/registration.component.scss")]
    })
], RegistrationComponent);



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let AuthService = class AuthService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](JSON.parse(localStorage.getItem('User')));
    }
    get currentUser() {
        return this.currentUserSubject.value;
    }
    login(userName, password) {
        return this.httpClient.post(`http://localhost:4200/auth/login`, { userName, password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((user) => {
            localStorage.setItem('User', JSON.stringify(user));
            this.currentUserSubject.next(user);
        }));
    }
    registration(body) {
        return this.httpClient.post(`http://localhost:4200/auth/registration`, body)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((user) => {
            localStorage.setItem('User', JSON.stringify(user));
            this.currentUserSubject.next(user);
        }));
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/services/fake-back.interceptor.ts":
/*!***************************************************!*\
  !*** ./src/app/services/fake-back.interceptor.ts ***!
  \***************************************************/
/*! exports provided: FakeBackInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeBackInterceptor", function() { return FakeBackInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE0MzQ0Nzk4ODN9.HQyx15jWm1upqsrKSf89X_iP0sg7N46a9pqBVGPMYdiqZeuU_ZZOdU-zizHJoIHMIJxtEWzpSMaVubJW0AJsTqjqQf6GoJ4cmFAfmfUFXmMC4Xv5oc4UqvGizpoLjfZedd834PcwbS-WskZcL4pVNmBIGRtDXkoU1j2X1P5M_sNJ9lYZ5vITyqe4MYJovQzNdQziUNhcMI5wkXncV7XzGInBeQsPquASWVG4gb3Y--k1P3xWA4Df3rKeEQBbInDKXczvDpfIlTojx4Ch8OM8vXWWNxW-mIQrV31wRrS9XtNoig7irx8N0MzokiYKrQ8WP_ezPicHvVPIHhz-InOw";
const users = [];
let FakeBackInterceptor = class FakeBackInterceptor {
    constructor() { }
    intercept(req, next) {
        const { url, method, headers, body } = req;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(handleRequest))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(1000));
        function handleRequest() {
            switch (true) {
                case url.endsWith('/auth/registration') && method === 'POST':
                    return registration(body);
                default:
                    return next.handle(req);
            }
        }
        function registration(user) {
            user.id = (users.length + 1).toString();
            user.token = token;
            users.push(user);
            return response(user);
        }
        function response(customBody) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]({ status: 200, body: customBody }));
        }
    }
};
FakeBackInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FakeBackInterceptor);



/***/ }),

/***/ "./src/app/services/guards/auth.guard.ts":
/*!***********************************************!*\
  !*** ./src/app/services/guards/auth.guard.ts ***!
  \***********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/services/auth.service.ts");




let AuthGuard = class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        const user = this.authService.currentUser;
        if (user) {
            return true;
        }
        this.router.navigate(['/auth'], { queryParams: { returnUrl: state.url } });
        return false;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/services/jwt.interceptor.ts":
/*!*********************************************!*\
  !*** ./src/app/services/jwt.interceptor.ts ***!
  \*********************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");



let JwtInterceptor = class JwtInterceptor {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(req, next) {
        const user = this.authService.currentUser;
        if (user && user.token) {
            req = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${user.token}`
                }
            });
        }
        return next.handle(req);
    }
};
JwtInterceptor.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
JwtInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], JwtInterceptor);



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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/alexmac/Documents/work/GitHub/Hezzl_test/app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map