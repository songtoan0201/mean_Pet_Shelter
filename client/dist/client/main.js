(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n  <h1>Pet Shelter</h1>\n  <router-outlet></router-outlet>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/create-pet/create-pet.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/create-pet/create-pet.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3>Know of a pet needing a home?</h3>\n<div style=\"color: red; padding: 5px 0px;\" *ngFor=\"let key of errors; index as i\">\n  {{errors[i]}}\n</div>\n<form (submit)=\"onSubmitCreatePet()\">\n  <fieldset>\n    <div class=\"form-group\">\n      <label name=\"newPet.name\">Pet name: </label>\n      <input class=\"form-control\" type=\"text\" name=\"newPet.name\" [(ngModel)]=\"newPet.name\" />\n    </div>\n    <div class=\"form-group\">\n      <label name=\"newPet.type\">Pet type: </label>\n      <input class=\"form-control\" type=\"text\" name=\"newPet.type\" [(ngModel)]=\"newPet.type\" />\n    </div>\n    <div class=\"form-group\">\n      <label name=\"newPet.description\">Description: </label>\n      <input class=\"form-control\" type=\"text\" name=\"newPet.description\" [(ngModel)]=\"newPet.description\" />\n    </div>\n    <p>Skill:</p>\n    <div class=\"form-group ml-3\">\n      <label name=\"skill1\">Skill 1: </label>\n      <input class=\"form-control\" type=\"text\" name=\"skill1\" [(ngModel)]=\"skill1\" />\n      <label name=\"skill2\">Skill 2: </label>\n      <input class=\"form-control\" type=\"text\" name=\"skill2\" [(ngModel)]=\"skill2\" />\n      <label name=\"skill3\">Skill 3: </label>\n      <input class=\"form-control\" type=\"text\" name=\"skill3\" [(ngModel)]=\"skill3\" />\n    </div>\n\n    <input class=\"btn btn-small btn-outline-success\" type=\"submit\" value=\"Create New Pet\" />\n\n    <button (click)=\"goHome()\" class=\"btn btn-small btn-outline-success ml-3\">Cancel</button>\n  </fieldset>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-pet/edit-pet.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-pet/edit-pet.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3>Edit this pet</h3>\n<div style=\"color: red; padding: 5px 0px;\" *ngFor=\"let key of errors; index as i\">\n  {{errors[i]}}\n</div>\n<form (submit)=\"onSubmitEditPet(editPet._id)\">\n  <div class=\"form-group\">\n    <label name=\"editPet.name\">Pet name: </label>\n    <input class=\"form-control\" type=\"text\" name=\"editPet.name\" [(ngModel)]=\"editPet.name\" />\n  </div>\n  <div class=\"form-group\">\n    <label name=\"editPet.type\">Pet type: </label>\n    <input class=\"form-control\" type=\"text\" name=\"editPet.type\" [(ngModel)]=\"editPet.type\" />\n  </div>\n  <div class=\"form-group\">\n    <label name=\"editPet.description\">Description: </label>\n    <input class=\"form-control\" type=\"text\" name=\"editPet.description\" [(ngModel)]=\"editPet.description\" />\n  </div>\n  <p>Skill:</p>\n  <div class=\"form-group ml-3\">\n    <label name=\"skill1\">Skill 1: </label>\n    <input class=\"form-control\" type=\"text\" name=\"skill1\" [(ngModel)]=\"skill1\" />\n    <label name=\"skill2\">Skill 2: </label>\n    <input class=\"form-control\" type=\"text\" name=\"skill2\" [(ngModel)]=\"skill2\" />\n    <label name=\"skill3\">Skill 3: </label>\n    <input class=\"form-control\" type=\"text\" name=\"skill3\" [(ngModel)]=\"skill3\" />\n  </div>\n\n  <input class=\"btn btn-small btn-outline-success\" type=\"submit\" value=\"Edit Pet\" />\n\n  <button (click)=\"goToShow(editPet._id)\" class=\"btn btn-small btn-outline-success ml-3\">Cancel</button>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/error/error.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/error/error.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>error works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3>These pets are looking for a home!</h3>\n<button [routerLink]=\"['/pets/new']\">Add a new Pet to the Shelter</button>\n<table class=\"table table-striped\">\n  <thead>\n    <tr>\n      <th scope=\"col\">Name</th>\n      <th scope=\"col\">Type</th>\n      <th scope=\"col\">Actions</th>\n    </tr>\n  </thead>\n  <tbody>\n\n    <tr *ngFor=\"let pet of allPets\">\n      <td>{{pet.name}}</td>\n      <td>{{pet.type}}</td>\n      <td><button (click)=\"goToShow(pet._id)\">Details</button> <button (click)=\"goToEdit(pet._id)\">Edit</button></td>\n    </tr>\n  </tbody>\n</table>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/show-pet/show-pet.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/show-pet/show-pet.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3>Details about {{OnePet.name}}</h3>\n<button (click)=\"goHome()\">Go Home</button>\n<table class=\"table\">\n  <tbody>\n    <tr>\n      <td>Pet type:</td>\n      <td>{{OnePet.type}}</td>\n    </tr>\n    <tr>\n      <td>Description:</td>\n      <td>{{OnePet.description}}</td>\n    </tr>\n    <tr>\n      <td>Skills:</td>\n      <td>\n        {{OnePet.skill}}\n      </td>\n    </tr>\n    <tr>\n      <td>Likes:</td>\n      <td>{{OnePet.like}}</td>\n    </tr>\n\n    <button (click)=\"likePet(OnePet._id)\" onclick=\"this.disabled = 'disabled';\"\n      class=\"btn btn-small btn-outline-success ml-3\">Like\n      this pet</button>\n    <button (click)=\"adoptPet(OnePet._id)\" class=\"btn btn-small btn-outline-success ml-3\">Adopt this pet</button>\n  </tbody>\n</table>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


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
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _create_pet_create_pet_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-pet/create-pet.component */ "./src/app/create-pet/create-pet.component.ts");
/* harmony import */ var _show_pet_show_pet_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./show-pet/show-pet.component */ "./src/app/show-pet/show-pet.component.ts");
/* harmony import */ var _edit_pet_edit_pet_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-pet/edit-pet.component */ "./src/app/edit-pet/edit-pet.component.ts");








const routes = [
    { path: "home", component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: "pets/new", component: _create_pet_create_pet_component__WEBPACK_IMPORTED_MODULE_5__["CreatePetComponent"] },
    { path: "pets/:id", component: _show_pet_show_pet_component__WEBPACK_IMPORTED_MODULE_6__["ShowPetComponent"] },
    { path: "pets/:id/edit", component: _edit_pet_edit_pet_component__WEBPACK_IMPORTED_MODULE_7__["EditPetComponent"] },
    // use a colon and parameter name to include a parameter in the url
    // { path: 'gamma/:id', component: GammaComponent },
    // redirect to /home if there is nothing in the url
    { path: "", pathMatch: "full", redirectTo: "/home" },
    // the ** will catch anything that did not match any of the above routes
    { path: "error", component: _error_error_component__WEBPACK_IMPORTED_MODULE_3__["ErrorComponent"] },
    { path: "**", redirectTo: "/error" }
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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");



let AppComponent = class AppComponent {
    constructor(_httpService) {
        this._httpService = _httpService;
    }
};
AppComponent.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-root",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
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
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _create_pet_create_pet_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./create-pet/create-pet.component */ "./src/app/create-pet/create-pet.component.ts");
/* harmony import */ var _show_pet_show_pet_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./show-pet/show-pet.component */ "./src/app/show-pet/show-pet.component.ts");
/* harmony import */ var _edit_pet_edit_pet_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./edit-pet/edit-pet.component */ "./src/app/edit-pet/edit-pet.component.ts");













let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _error_error_component__WEBPACK_IMPORTED_MODULE_6__["ErrorComponent"], _create_pet_create_pet_component__WEBPACK_IMPORTED_MODULE_10__["CreatePetComponent"], _show_pet_show_pet_component__WEBPACK_IMPORTED_MODULE_11__["ShowPetComponent"], _edit_pet_edit_pet_component__WEBPACK_IMPORTED_MODULE_12__["EditPetComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]],
        providers: [_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/create-pet/create-pet.component.css":
/*!*****************************************************!*\
  !*** ./src/app/create-pet/create-pet.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZS1wZXQvY3JlYXRlLXBldC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/create-pet/create-pet.component.ts":
/*!****************************************************!*\
  !*** ./src/app/create-pet/create-pet.component.ts ***!
  \****************************************************/
/*! exports provided: CreatePetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePetComponent", function() { return CreatePetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");




let CreatePetComponent = class CreatePetComponent {
    constructor(_route, _router, _httpService) {
        this._route = _route;
        this._router = _router;
        this._httpService = _httpService;
        this.newPet = {};
        this.errors = [];
    }
    ngOnInit() {
        this.skill1 = "";
        this.skill2 = "";
        this.skill3 = "";
        this.newPet = {
            name: "",
            type: "",
            description: ""
        };
    }
    goHome() {
        this._router.navigate(["/home"]);
    }
    onSubmitCreatePet() {
        this.errors = [];
        const obs = this._httpService.createPet({
            name: this.newPet.name,
            type: this.newPet.type,
            description: this.newPet.description,
            skill: [this.skill1, this.skill2, this.skill3]
        });
        obs.subscribe((data) => {
            if (data["errors"]) {
                //this is an error check for custom error messages (see models for custom error message setup)
                for (let key in data.errors) {
                    this.errors.push(data.errors[key].message);
                }
            }
            else {
                // this line clears the errors array when they are successful
                this.errors = [];
                console.log(data);
                this.goHome();
            }
        });
    }
};
CreatePetComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] }
];
CreatePetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-create-pet",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-pet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/create-pet/create-pet.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-pet.component.css */ "./src/app/create-pet/create-pet.component.css")).default]
    })
], CreatePetComponent);



/***/ }),

/***/ "./src/app/edit-pet/edit-pet.component.css":
/*!*************************************************!*\
  !*** ./src/app/edit-pet/edit-pet.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtcGV0L2VkaXQtcGV0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/edit-pet/edit-pet.component.ts":
/*!************************************************!*\
  !*** ./src/app/edit-pet/edit-pet.component.ts ***!
  \************************************************/
/*! exports provided: EditPetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPetComponent", function() { return EditPetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");




let EditPetComponent = class EditPetComponent {
    constructor(_route, _router, _httpService) {
        this._route = _route;
        this._router = _router;
        this._httpService = _httpService;
        this.editPet = {};
        this.errors = [];
    }
    ngOnInit() {
        this._route.params.subscribe((params) => {
            console.log(params["id"]);
            this.getOnePet(params["id"]);
        });
        this.skill1 = "";
        this.skill2 = "";
        this.skill3 = "";
        this.editPet = {
            name: "",
            type: "",
            description: ""
        };
    }
    goToShow(id) {
        this._router.navigate(["/pets/" + id]);
    }
    getOnePet(id) {
        let observable = this._httpService.findOnePet(id);
        observable.subscribe(data => {
            console.log(data);
            this.editPet = data;
            this.skill1 = data["skill"][0];
            this.skill2 = data["skill"][1];
            this.skill3 = data["skill"][2];
        });
    }
    onSubmitEditPet(id, data) {
        this.errors = [];
        let observable = this._httpService.updatePet(id, {
            name: this.editPet.name,
            type: this.editPet.type,
            description: this.editPet.description,
            skill: [this.skill1, this.skill2, this.skill3]
        });
        observable.subscribe((data) => {
            console.log(data["errors"]);
            if (data["errors"]) {
                //this is an error check for custom error messages (see models for custom error message setup)
                for (let key in data.errors) {
                    this.errors.push(data.errors[key].message);
                }
            }
            else {
                // this line clears the errors array when they are successful
                this.errors = [];
                console.log(data);
                this.goToShow(id);
            }
        });
    }
};
EditPetComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] }
];
EditPetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-edit-pet",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-pet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-pet/edit-pet.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-pet.component.css */ "./src/app/edit-pet/edit-pet.component.css")).default]
    })
], EditPetComponent);



/***/ }),

/***/ "./src/app/error/error.component.css":
/*!*******************************************!*\
  !*** ./src/app/error/error.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/error/error.component.ts":
/*!******************************************!*\
  !*** ./src/app/error/error.component.ts ***!
  \******************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ErrorComponent = class ErrorComponent {
    constructor() { }
    ngOnInit() {
    }
};
ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-error',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./error.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/error/error.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./error.component.css */ "./src/app/error/error.component.css")).default]
    })
], ErrorComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");




let HomeComponent = class HomeComponent {
    constructor(_route, _router, _httpService) {
        this._route = _route;
        this._router = _router;
        this._httpService = _httpService;
        this.allPets = [];
        this.arr = [];
    }
    ngOnInit() {
        // this._route.params.subscribe((params: Params) => {
        //   console.log(params["id"]);
        // });
        this.getAllPets();
    }
    getAllPets() {
        let observable = this._httpService.showAllPets();
        observable.subscribe((data) => {
            // console.log(data);
            let index;
            for (index in data) {
                // console.log(data[index].type);
                this.arr.push(data[index].type);
                if (this.arr.includes(data[index].type)) {
                    // console.log("yes");
                    this.allPets.splice(this.arr.indexOf(data[index].type), 0, data[index]);
                }
                else {
                    // console.log("no");
                    this.allPets.push(data[index]);
                }
                // console.log("arr", this.arr);
                // console.log("all pets", this.allPets);
            }
            // for (let key in data.errors) {
            //   this.errors.push(data.errors[key].message);
            // }
        });
    }
    goToShow(id) {
        this._router.navigate(["/pets/" + id]);
    }
    goToEdit(id) {
        this._router.navigate(["/pets/" + id + "/edit"]);
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-home",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let HttpService = class HttpService {
    constructor(_http) {
        this._http = _http;
    }
    showAllPets() {
        return this._http.get("/api/pets");
    }
    createPet(data) {
        return this._http.post("/api/pets", data);
    }
    findOnePet(id) {
        return this._http.get("/api/pets/" + id);
    }
    updatePet(id, data) {
        return this._http.put("/api/pets/" + id, data);
    }
    deletePet(id) {
        return this._http.delete("/api/pets/" + id);
    }
    increaseLike(id) {
        return this._http.get("/api/pets/" + id + "/like");
    }
};
HttpService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], HttpService);



/***/ }),

/***/ "./src/app/show-pet/show-pet.component.css":
/*!*************************************************!*\
  !*** ./src/app/show-pet/show-pet.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3ctcGV0L3Nob3ctcGV0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/show-pet/show-pet.component.ts":
/*!************************************************!*\
  !*** ./src/app/show-pet/show-pet.component.ts ***!
  \************************************************/
/*! exports provided: ShowPetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowPetComponent", function() { return ShowPetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");




let ShowPetComponent = class ShowPetComponent {
    constructor(_route, _router, _httpService) {
        this._route = _route;
        this._router = _router;
        this._httpService = _httpService;
        this.OnePet = {};
    }
    ngOnInit() {
        this._route.params.subscribe((params) => {
            console.log(params["id"]);
            this.getOnePet(params["id"]);
        });
    }
    goHome() {
        this._router.navigate(["/home"]);
    }
    getOnePet(id) {
        let observable = this._httpService.findOnePet(id);
        observable.subscribe(data => {
            this.OnePet = data;
        });
    }
    likePet(id) {
        let observable = this._httpService.increaseLike(id);
        observable.subscribe(data => {
            this.OnePet = data;
        });
    }
    adoptPet(id) {
        let observable = this._httpService.deletePet(id);
        observable.subscribe(data => {
            this.goHome();
        });
    }
};
ShowPetComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] }
];
ShowPetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-show-pet",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./show-pet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/show-pet/show-pet.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./show-pet.component.css */ "./src/app/show-pet/show-pet.component.css")).default]
    })
], ShowPetComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\CodingDojo\mean_stack\Angular\PetShelter\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map