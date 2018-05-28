webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/***/ (function(module, exports) {

module.exports = "img{\r\n  width: 100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5 mb-5\">\r\n<ngb-tabset type=\"pills\">\r\n  <ngb-tab title=\"Details\" class=\"mt-5\">\r\n    <ng-template ngbTabContent>\r\n      <div *ngFor=\"let item of jsonData\" class=\"mt-3 border p-5\">\r\n        <div class=\"row d-flex justify-content-center align-items-center\"> \r\n          <div class=\"col-sm-12 col-md-3\"><img src={{item.url}} class=\"mr-5\" ></div>\r\n          <div class=\"col-sm-12 col-md-9\"> <p class=\"pt-4\">{{item.details}}</p></div>\r\n        </div>\r\n      </div>\r\n    </ng-template>\r\n  </ngb-tab>\r\n  <ngb-tab>\r\n    <ng-template ngbTabTitle class=\"btn\"><b>Mission</b></ng-template>\r\n    <ng-template ngbTabContent>\r\n      <div *ngFor=\"let item of jsonData\" class=\"mt-3 border p-5\">\r\n        <div class=\"row d-flex justify-content-center align-items-center\">\r\n            <div class=\"col-sm-12 col-md-3\"><img src={{item.url}} class=\"mr-5\" ></div>\r\n            <div class=\"col-sm-12 col-md-9\"> <p class=\"pt-4\">{{item.details}}</p></div>\r\n        </div>\r\n      </div>\r\n    </ng-template>\r\n  </ngb-tab>\r\n  <ngb-tab title=\"Vision\">\r\n    <ng-template ngbTabContent>\r\n      <div *ngFor=\"let item of jsonData\" class=\"mt-3 border p-5\">\r\n        <div class=\"row d-flex justify-content-center align-items-center\">\r\n            <div class=\"col-sm-12 col-md-3\"><img src={{item.url}} class=\"mr-5\" ></div>\r\n            <div class=\"col-sm-12 col-md-9\"> <p class=\"pt-4\">{{item.details}}</p></div>\r\n        </div>\r\n      </div>\r\n    </ng-template>\r\n  </ngb-tab>\r\n</ngb-tabset>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__query_service__ = __webpack_require__("./src/app/query.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponent = /** @class */ (function () {
    function AboutComponent(qService) {
        this.qService = qService;
        this.getJsonData();
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent.prototype.getJsonData = function () {
        var _this = this;
        var path = "../assets/data.json";
        this.qService.getAbout(path).subscribe(function (res) {
            console.log(res);
            _this.jsonData = res;
        }, function (err) {
            console.log(err);
        });
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("./src/app/about/about.component.html"),
            styles: [__webpack_require__("./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__query_service__["a" /* QueryService */]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "footer img{\r\n  height: 35px;\r\n  width: 35px;\r\n  margin-right: 15px;\r\n}\r\nh5{\r\n  font-weight: bold;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<link href=\"https://use.fontawesome.com/releases/v5.0.8/css/all.css\" rel=\"stylesheet\">\r\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n  <div class=\"container\">\r\n    <a class=\"navbar-brand\" href=\"#\">ANGULAR</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" (click)=\"navbarCollapsed = !navbarCollapsed\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse justify-content-end\" id=\"navbarNavAltMarkup\" [ngbCollapse]=\"navbarCollapsed\">\r\n      <div class=\"navbar-nav d-flex align-items-center justify-content-baseline\">\r\n        <a class=\"nav-item nav-link\" routerLink=\"\">Home</a>\r\n        <a class=\"nav-item nav-link\" routerLink=\"/about\">About us</a>\r\n        <a class=\"nav-item nav-link\" routerLink=\"/contact\">Contact</a>\r\n        <button type=\"button\" name=\"button\" (click)=\"goLogin()\" class=\"btn mx-3 mb-2 px-4 my-lg-0 my-xl-0\">Login</button>\r\n        <button type=\"button\" name=\"button\" (click)=\"goRegister()\" class=\"btn mx-3 mb-2 px-4 my-lg-0 my-xl-0\">Register</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n<router-outlet></router-outlet>\r\n\r\n<footer class=\"bg-dark\">\r\n  <div class=\"container py-5 text-white\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4 col-sm-12\">\r\n        <h5>Keep in touch</h5>\r\n        <p><small>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small></p>\r\n      </div>\r\n      <div class=\"col-md-4 col-sm-12\">\r\n        <h5>About us</h5>\r\n        <p><small>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small></p>\r\n      </div>\r\n      <div class=\"col-md-4 col-sm-12\">\r\n        <h5>Contact us</h5>\r\n      <a href=\"https://www.facebook.com\">\r\n      <img src=\"../assets/facebook.png\" >\r\n      </a>\r\n      <a href=\"https://twitter.com/\">\r\n      <img src=\"../assets/twitter.png\" >\r\n      </a>\r\n      <a href=\"https://www.google.com/\">\r\n      <img src=\"../assets/google-plus.png\" >\r\n      </a>\r\n    </div>\r\n  </div>\r\n  </div>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router, currentRoute) {
        this.router = router;
        this.currentRoute = currentRoute;
        this.navbarCollapsed = true;
    }
    AppComponent.prototype.goLogin = function () {
        this.router.navigate(['/login'], { queryParams: { name: 'marina', age: 24 } });
    };
    AppComponent.prototype.goRegister = function () {
        this.router.navigate(['/signUp'], { queryParams: { name: 'marina', age: 24 } });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__about_about_component__ = __webpack_require__("./src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__contact_contact_component__ = __webpack_require__("./src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__sign_up_sign_up_component__ = __webpack_require__("./src/app/sign-up/sign-up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__cards_cards_component__ = __webpack_require__("./src/app/cards/cards.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__query_service__ = __webpack_require__("./src/app/query.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Modules






//Components







//services

//Routes
var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_8__about_about_component__["a" /* AboutComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_9__contact_contact_component__["a" /* ContactComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_11__login_login_component__["a" /* LoginComponent */] },
    { path: 'signUp', component: __WEBPACK_IMPORTED_MODULE_10__sign_up_sign_up_component__["a" /* SignUpComponent */] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__sign_up_sign_up_component__["a" /* SignUpComponent */],
                __WEBPACK_IMPORTED_MODULE_11__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_9__contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_12__cards_cards_component__["a" /* CardsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* RouterModule */].forRoot(routes),
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_13__query_service__["a" /* QueryService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cards/cards.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/cards/cards.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row d-flex flex-column mb-5 justify-content-center\">\r\n    <h2 class=\"text-center mb-3\">Lorem ipsem</h2>\r\n    <hr class=\"mb-5\">\r\n    <div class=\"card-columns col-12\">\r\n      <div class=\"card\" *ngFor=\"let cd of cardData; let i = index;\">\r\n        <img class=\"card-img-top\" [src]=\"cd.url\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">{{cd.title}}</h5>\r\n          <p class=\"card-text\">{{cd.body}}</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/cards/cards.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__query_service__ = __webpack_require__("./src/app/query.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CardsComponent = /** @class */ (function () {
    function CardsComponent(c) {
        this.c = c;
        this.cardData = [];
        this.getCardData();
    }
    CardsComponent.prototype.getCardData = function () {
        var _this = this;
        var path = '../assets/cards.json';
        this.c.getCData(path).subscribe(function (res) {
            console.log(res);
            _this.cardData = res;
        }, function (err) {
            console.log(err);
        }, function () { });
    };
    CardsComponent.prototype.ngOnInit = function () {
    };
    CardsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-cards',
            template: __webpack_require__("./src/app/cards/cards.component.html"),
            styles: [__webpack_require__("./src/app/cards/cards.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__query_service__["a" /* QueryService */]])
    ], CardsComponent);
    return CardsComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/***/ (function(module, exports) {

module.exports = ".contact{\r\n\tbackground-color:#f0f4f7;\r\n\tmargin-top: 80px;\r\n}\r\nh2{\r\n\ttext-align: center;\r\n}\r\nh3{\r\n\tfont-size: 18px;\r\n\tpadding-bottom: 5px;\r\n}\r\n.row{\r\n\twidth: 100%;\r\n}\r\n.Message{\r\n\twidth: 100%;\r\n\tpadding-bottom: 80px;\r\n}\r\n.btn{\r\n\tbackground-color: #fd7e14;\r\n\tcolor: white;\r\n}\r\ni{\r\n\tcolor: inherit;\r\n\tmargin-right: 10px;\r\n}\r\ni:hover{\r\n\tcolor: #fd7e14;\r\n}"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Contact Us</h2>\r\n<hr>\r\n<div class=\"container\">\r\n\t<div class=\"text-center\" >\r\n\t<h3 *ngFor=\"let item of getData\">\r\n\t\t<i class=\"fas fa-map-marker\"></i> {{item.address}}\r\n\t</h3>\r\n\t<h3 *ngFor=\"let item of getData\">\r\n\t\t<i class=\"fas fa-phone\"></i>{{item.telephoneNumber}}\r\n\t</h3>\r\n\t<h3 *ngFor=\"let item of getData\">\r\n\t\t<i class=\"fas fa-phone\"></i>{{item.mobileNumber}}\r\n\t</h3>\r\n\t<h3 *ngFor=\"let item of getData\">\r\n\t\t<i class=\"fas fa-envelope\"></i>{{item.email}}\r\n\t</h3>\r\n\t</div>\r\n</div>\r\n\r\n\r\n<div class=\"contact pb-5\">\r\n\t<h2 class=\"pt-5 mt-4\">Contact Form</h2>\r\n<hr>\r\n\r\n<div class=\"container\">\r\n\t<form class=\"col-lg-12\" name=\"conatctForm\" #contactForm=\"ngForm\" (ngSubmit)=\"contactSubmit(contactForm)\" novalidate>\r\n\t\t<div class=\"form-row \">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-lg-2\"></div>\r\n\t\t\t\t<div class=\"col-lg-4\">\r\n\t\t\t\t\t<input class=\"form-control mr-sm-2 rounded-0 w-100 \"  type=\"text\" placeholder=\"Name\" name=\"user_name\" [(ngModel)]=\"formData.user_name\" required>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-4\">\r\n\t\t\t\t\t<input class=\"form-control mr-sm-2 rounded-0 w-100\"  type=\"text\" placeholder=\"Email\" name=\"user_email\" [(ngModel)]=\"formData.user_email\" required>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-2\"></div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-lg-2\"></div>\r\n\t\t\t\t<div class=\"col-lg-8 mt-4\">\r\n\t\t\t\t\t<input class=\"form-control mr-sm-2 rounded-0 Message\"  type=\"text\" placeholder=\"Message\" name=\"user_Message\" [(ngModel)]=\"formData.user_Message\" required>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-2\"></div>\r\n\t\t\t</div>\r\n\t\t\t\r\n\t\t</div>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-lg-12 text-center my-3\">\r\n\t\t\t\t<button [disabled]=\"!contactForm.valid\" type=\"submit\"class=\"btn\">Submit</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</form>\r\n</div>\r\n\t\t\t\t\t\r\n</div>\r\n\r\n\r\n\t\t\t\t\t"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__query_service__ = __webpack_require__("./src/app/query.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactComponent = /** @class */ (function () {
    function ContactComponent(q) {
        this.q = q;
        this.getData = [{}];
        this.getContact();
        this.formData = {};
    }
    ContactComponent.prototype.getContact = function () {
        var _this = this;
        var path = '../assets/ContactData.json';
        this.q.getContactData(path).subscribe(function (res) {
            _this.getData = res;
            console.log(res);
        }, function (err) {
            console.log(err);
        });
    };
    ContactComponent.prototype.contactSubmit = function (data) {
        if (!data.valid) {
            console.log("error");
        }
        else {
            console.log(data);
            console.log(this.formData);
            data.reset();
        }
        console.log(data);
    };
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("./src/app/contact/contact.component.html"),
            styles: [__webpack_require__("./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__query_service__["a" /* QueryService */]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".jumbotron{ \r\n    background-image: url('head.0621a539bf2f386cc281.jpg');\r\n    background-size: cover;\r\n}\r\n.imgNav{\r\n    width: 100%;\r\n}\r\n.headpar{\r\n    font-size: 14px;\r\n}\r\n@media all and (max-width:576px){\r\n    h3{\r\n        font-size: 16px;\r\n    }\r\n    .slidePar{\r\n        font-size: 12px;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\r\n  <div class=\"jumbotron\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-6\">\r\n          <h1 class=\"display-4\">{{homeData.headtitle}}</h1>\r\n          <p class=\"lead headpar\">{{homeData.headPar}}</p>\r\n          <p class=\"lead\">\r\n            <a class=\"btn  btn-lg\"  role=\"button\" (click)=\"redirectTo()\">{{homeData.button}}</a>\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</header>\r\n\r\n<h2 class=\"text-center\">{{homeData.secOne}}</h2>\r\n<hr>\r\n<ngb-carousel>\r\n    <ng-template ngbSlide>\r\n      <img src=\"{{homeData.img3}}\" class=\"imgNav\"  alt=\"Random first slide\">\r\n      <div class=\"carousel-caption\">\r\n        <h3>{{homeData.slide1H}}</h3>\r\n        <p class=\"slidePar\">{{homeData.slide1p}}</p>\r\n      </div>\r\n    </ng-template>\r\n    <ng-template ngbSlide>\r\n      <img src=\"{{homeData.img1}}\" class=\"imgNav\"  alt=\"Random second slide\">\r\n      <div class=\"carousel-caption\">\r\n        <h3>{{homeData.slide2H}}</h3>\r\n        <p class=\"slidePar\">{{homeData.slide2p}}</p>\r\n      </div>\r\n    </ng-template>\r\n    <ng-template ngbSlide>\r\n      <img src=\"{{homeData.img2}}\"class=\"imgNav\" alt=\"Random third slide\">\r\n      <div class=\"carousel-caption\">\r\n        <h3>{{homeData.slide3H}}</h3>\r\n        <p class=\"slidePar\">{{homeData.slide3p}}</p>\r\n      </div>\r\n    </ng-template>\r\n  </ngb-carousel>\r\n\r\n  <app-cards></app-cards>\r\n\r\n\r\n  <div class=\"bg-light\">\r\n    <h2 class=\"text-center pt-5\">{{homeData.secFour}}</h2>\r\n    <hr>\r\n    <p class=\"text-center pb-5 mb-0 w-75 mx-auto\">\r\n      {{homeData.text}}\r\n    </p>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__query_service__ = __webpack_require__("./src/app/query.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(q, router) {
        this.q = q;
        this.router = router;
        this.homeData = {};
        this.getProfileData();
    }
    HomeComponent.prototype.getProfileData = function () {
        var _this = this;
        var path = '././assets/home.json';
        this.q.getData(path).subscribe(function (res) {
            console.log(res);
            _this.homeData = res;
        }, function (err) { console.log(err); });
    };
    HomeComponent.prototype.redirectTo = function () {
        this.router.navigate(['/signUp'], { queryParams: { name: 'marina', age: 24 } });
    };
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__query_service__["a" /* QueryService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ".bg\r\n{\r\n    border: 1px solid #ddd;\r\n    /* background: #ddd; */\r\n    padding: 20px;\r\n    margin: 20px;\r\n    height: 380px;\r\n}\r\nh1\r\n{\r\n    color: #fd7e14;\r\n}\r\nbutton{\r\n\tbackground-color: #fd7e14;\r\n    color: white;\r\n    border: none;\r\n    -webkit-box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.15);\r\n            box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.15);\r\n    cursor: pointer;\r\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container m-auto  text-center\">\r\n      <div class=\"row\">   \r\n         <div class=\"col-sm-6 offset-sm-3\">\r\n            <div class=\"bg\">\r\n                <h2 class=\"mt-1 text-center\">Login Form</h2>\r\n                <hr>\r\n            <form name=\"loginForm\" #loginForm=\"ngForm\" (ngSubmit)=\"loginSubmit(loginForm)\" novalidate>\r\n              <input type=\"text\" class=\"form-control mb-3\" placeholder=\"Email Address\" ngModel name=\"email\" #email=\"ngModel\" required/>\r\n              <div class=\"alert alert-danger mb-2\" role=\"alert\" *ngIf=\"email.touched && !email.valid\">\r\n                Email is required\r\n              </div>  \r\n              <input type=\"password\" class=\"form-control mb-3\"  placeholder=\"password here\" ngModel name=\"password\"  #password=\"ngModel\"  required>\r\n              <div class=\"alert alert-danger mb-2\" role=\"alert\" *ngIf=\"password.touched && !password.valid\">\r\n                Password is required\r\n              </div>\r\n              <button  [disabled]=\"!loginForm.valid\" type=\"submit\"class=\"btn\">Login</button>\r\n            </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(route) {
        this.route = route;
    }
    LoginComponent.prototype.redirectToHome = function () {
        this.route.navigate(['']);
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function (data) {
        console.log(data);
        data.reset();
    };
    LoginComponent.prototype.loginSubmit = function (data) {
        if (!data.valid) {
            console.log("error");
        }
        else {
            console.log("Form Submitted!");
            data.reset();
            this.route.navigate(['//']);
        }
        console.log(data);
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/query.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QueryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QueryService = /** @class */ (function () {
    function QueryService(http) {
        this.http = http;
    }
    QueryService.prototype.getData = function (path) {
        return this.http.get(path);
    };
    QueryService.prototype.getAbout = function (path) {
        return this.http.get(path);
    };
    QueryService.prototype.getCData = function (path) {
        return this.http.get(path);
    };
    QueryService.prototype.getContactData = function (path) {
        return this.http.get(path);
    };
    QueryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], QueryService);
    return QueryService;
}());



/***/ }),

/***/ "./src/app/sign-up/sign-up.component.css":
/***/ (function(module, exports) {

module.exports = "button{\r\n\tbackground-color: #fd7e14;\r\n    color: white;\r\n    border: none;\r\n    -webkit-box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.15);\r\n            box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.15);\r\n    cursor: pointer;\r\n}"

/***/ }),

/***/ "./src/app/sign-up/sign-up.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container m-auto  text-center\">\r\n    <div class=\"row\">   \r\n       <div class=\"col-sm-6 offset-sm-3\">\r\n          <div class=\"bg\">\r\n              <h2 class=\"mt-1 text-center\">sign-up Form</h2>\r\n              <hr>\r\n        <form name=\"register\" #register=\"ngForm\" (ngSubmit)=\"register(registerForm)\" novalidate class=\"mb-4\">\r\n         <div class=\"form-group\">\r\n             <label for=\"exampleInputEmail\">user name</label>\r\n             <input type=\"text\" class=\"form-control\" placeholder=\"enter your name\" name=\"userName\"\r\n             #userName=\"ngModel\" [(ngModel)]=\"dataRegister.userName\" required>\r\n             <div class=\"alert alert-danger mb-2\" role=\"alert\" *ngIf=\"userName.touched && !userName.valid\">\r\n               username is required\r\n              </div> \r\n         </div>   \r\n         \r\n         <div class=\"form-group\">\r\n             <label for=\"exampleInputEmail\">Email</label>\r\n             <input type=\"email\" class=\"form-control\" placeholder=\"enter your email\" name=\"email\" #email=\"ngModel\" [(ngModel)]=\"dataRegister.email\" required>\r\n         </div>  \r\n         \r\n         <div class=\"form-group\">\r\n             <label for=\"exampleInputEmail\">password</label>\r\n             <input type=\"password\" class=\"form-control\" placeholder=\"enter your password\" name=\"password\" [(ngModel)]=\"dataRegister.password\" required>\r\n           <div class=\"alert alert-danger mb-2\" role=\"alert\" *ngIf=\"userName.touched && !userName.valid\">\r\n               email is required\r\n              </div>  \r\n         </div>   \r\n         \r\n         <div class=\"form-check\">\"\r\n             <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\" required>\r\n             <label for=\"exampleCheck1\" class=\"form-check-label\">agree with the rules and regulation</label>\r\n         </div>\r\n        \r\n         <button type=\"submit\" [disabled]=\"!register.valid\" class=\"p-2 m-3\">Submit</button>\r\n        </form>\r\n    </div>\r\n</div>\r\n</div>\r\n</div>"

/***/ }),

/***/ "./src/app/sign-up/sign-up.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SignUpComponent = /** @class */ (function () {
    function SignUpComponent() {
        this.dataRegister = {};
    }
    SignUpComponent.prototype.registerForm = function (data) {
        if (!data.valid) {
            console.log("error");
        }
        else {
            console.log(data);
            console.log(this.dataRegister);
        }
    };
    SignUpComponent.prototype.ngOnInit = function () {
    };
    SignUpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sign-up',
            template: __webpack_require__("./src/app/sign-up/sign-up.component.html"),
            styles: [__webpack_require__("./src/app/sign-up/sign-up.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map