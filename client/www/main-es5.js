function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet-controller_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-controller_8.entry.js", "common", 0],
      "./ion-action-sheet-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js", "common", 1],
      "./ion-action-sheet-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js", "common", 2],
      "./ion-alert-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js", "common", 3],
      "./ion-alert-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js", "common", 4],
      "./ion-app_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js", "common", 5],
      "./ion-app_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js", "common", 6],
      "./ion-avatar_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js", "common", 7],
      "./ion-avatar_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js", "common", 8],
      "./ion-back-button-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js", "common", 9],
      "./ion-back-button-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js", "common", 10],
      "./ion-backdrop-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js", 11],
      "./ion-backdrop-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js", 12],
      "./ion-button_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js", "common", 13],
      "./ion-button_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js", "common", 14],
      "./ion-card_5-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js", "common", 15],
      "./ion-card_5-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js", "common", 16],
      "./ion-checkbox-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js", "common", 17],
      "./ion-checkbox-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js", "common", 18],
      "./ion-chip-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js", "common", 19],
      "./ion-chip-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js", "common", 20],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 21],
      "./ion-datetime_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js", "common", 22],
      "./ion-datetime_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js", "common", 23],
      "./ion-fab_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js", "common", 24],
      "./ion-fab_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js", "common", 25],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 26],
      "./ion-infinite-scroll_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js", "common", 27],
      "./ion-infinite-scroll_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js", "common", 28],
      "./ion-input-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js", "common", 29],
      "./ion-input-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js", "common", 30],
      "./ion-item-option_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js", "common", 31],
      "./ion-item-option_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js", "common", 32],
      "./ion-item_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js", "common", 33],
      "./ion-item_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js", "common", 34],
      "./ion-loading-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js", "common", 35],
      "./ion-loading-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js", "common", 36],
      "./ion-menu_4-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_4-ios.entry.js", "common", 37],
      "./ion-menu_4-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_4-md.entry.js", "common", 38],
      "./ion-modal-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js", "common", 39],
      "./ion-modal-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js", "common", 40],
      "./ion-nav_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_5.entry.js", "common", 41],
      "./ion-popover-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js", "common", 42],
      "./ion-popover-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js", "common", 43],
      "./ion-progress-bar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js", "common", 44],
      "./ion-progress-bar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js", "common", 45],
      "./ion-radio_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js", "common", 46],
      "./ion-radio_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js", "common", 47],
      "./ion-range-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js", "common", 48],
      "./ion-range-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js", "common", 49],
      "./ion-refresher_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js", "common", 50],
      "./ion-refresher_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js", "common", 51],
      "./ion-reorder_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js", "common", 52],
      "./ion-reorder_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js", "common", 53],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 54],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 55],
      "./ion-searchbar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js", "common", 56],
      "./ion-searchbar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js", "common", 57],
      "./ion-segment_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js", "common", 58],
      "./ion-segment_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js", "common", 59],
      "./ion-select_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js", "common", 60],
      "./ion-select_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js", "common", 61],
      "./ion-slide_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js", 62],
      "./ion-slide_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js", 63],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 64],
      "./ion-split-pane-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js", 65],
      "./ion-split-pane-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js", 66],
      "./ion-tab-bar_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js", "common", 67],
      "./ion-tab-bar_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js", "common", 68],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 69],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 70],
      "./ion-textarea-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js", "common", 71],
      "./ion-textarea-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js", "common", 72],
      "./ion-toast-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js", "common", 73],
      "./ion-toast-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js", "common", 74],
      "./ion-toggle-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js", "common", 75],
      "./ion-toggle-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js", "common", 76],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 77]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\r\n  <ion-menu contentId=\"main-content\" type=\"overlay\">\r\n\r\n    <ion-header>\r\n      <ion-toolbar class=\"padding-col card-background-header background-image-header\">\r\n        <ion-row *ngIf=\"userInfo\">\r\n          <ion-col class=\"ion-no-padding\">\r\n            <div class=\"background-image-header\"\r\n              [style.background-image]=\"'url('+(userInfo?.background?userInfo.background:'assets/imgs/background.jpg')+')'\">\r\n            </div>\r\n            <ion-label class=\"card-title-header\">\r\n              {{userInfo?.fullname?userInfo?.fullname:userInfo?.username}}{{userInfo?.nickname?\"\\n(\"+userInfo?.nickname+\")\":\"\"}}\r\n            </ion-label>\r\n            <div class=\"avatar-header\"\r\n              [style.background-image]=\"'url('+(userInfo?.avatar?userInfo?.avatar:'assets/imgs/avatar.jpg')+')'\">\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row *ngIf=\"!userInfo\">\r\n          <ion-col style=\"margin:auto; text-align:center\">\r\n            <ion-chip color=\"primary\" (click)=\"onClickLogin()\">\r\n              <ion-label>Login...</ion-label>\r\n              <ion-icon name=\"log-in\" color=\"secondary\"></ion-icon>\r\n            </ion-chip>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n\r\n    <ion-content>\r\n      <tree-menu [treeData]=\"treeMenu\"></tree-menu>\r\n    </ion-content>\r\n  </ion-menu>\r\n  <ion-router-outlet id=\"main-content\"></ion-router-outlet>\r\n</ion-app>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tree-menu/tree-menu.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/tree-menu/tree-menu.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsTreeMenuTreeMenuHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Kiểu menu mẫu ionic 4 -->\r\n<div *ngFor=\"let item of treeData; let idx = index\" [style.padding-left]=\"level>0?'15px':'0px'\">\r\n    <!-- Nếu là lá cây thì dùng toggle -- phải thiết lập auto-hide=\"false\" để không bị ẩn ở chế độ window -->\r\n    <ion-menu-toggle auto-hide=\"false\" *ngIf=\"!item.subs?.length\">\r\n        <!-- Nếu gọi link url thì gọi href link outside -->\r\n        <ion-item *ngIf=\"item.type==='url'\" class=\"tree-input-item\" href=\"{{item.url}}\">\r\n            <ion-icon slot=\"start\" [style.font-size]=\"level>0?'1.3em':'1.5em'\" [style.color]=\"item.icon?'green':'#dfe0fd'\" name=\"{{item.icon?item.icon:'remove'}}\"></ion-icon>\r\n            <ion-label class=\"ion-text-wrap\" [style.font-size]=\"item.size?item.size:'1em'\">{{item.name}}</ion-label>\r\n        </ion-item>\r\n        <!-- Nếu gọi kiểu truyền page độc lập url='/home' thì gọi route -->\r\n        <ion-item *ngIf=\"item.type==='route'\" class=\"tree-input-item\" [routerDirection]=\"'root'\" [routerLink]=\"[item.url]\" [queryParams]=\"item.options\">\r\n            <ion-icon slot=\"start\" [style.font-size]=\"level>0?'1.3em':'1.5em'\" [style.color]=\"item.icon?'green':'#dfe0fd'\" name=\"{{item.icon?item.icon:'remove'}}\"></ion-icon>\r\n            <ion-label class=\"ion-text-wrap\" [style.font-size]=\"item.size?item.size:'1em'\">{{item.name}}</ion-label>\r\n        </ion-item>\r\n        <!-- Nếu kiểu gọi click để mở trang component truyền tham số options -->\r\n        <ion-item *ngIf=\"item.type==='click'\" class=\"tree-input-item\" [attr.tappable]=\"'true'\" (click)=\"onClickLeaf(item, idx, treeData)\">\r\n            <ion-icon slot=\"start\" [style.font-size]=\"level>0?'1.3em':'1.5em'\" [style.color]=\"item.icon?'green':'#dfe0fd'\" name=\"{{item.icon?item.icon:'remove'}}\"></ion-icon>\r\n            <ion-label class=\"ion-text-wrap\" [style.font-size]=\"item.size?item.size:'1em'\">{{item.name}}</ion-label>\r\n        </ion-item>\r\n    </ion-menu-toggle>\r\n    <!-- Nếu là cành cây thì dùng nút -->\r\n    <ion-item *ngIf=\"item.subs?.length\" tappable (click)=\"hideAndShowChildrent(item)\">\r\n        <ion-icon slot=\"start\" style=\"font-size: 1.5em\" [style.color]=\"item.visible?'darkgoldenrod':'darkblue'\" name=\"{{item.visible?'remove-circle':'add-circle'}}\"></ion-icon>\r\n        <ion-label class=\"ion-text-wrap\" [style.font-size]=\"item.size?item.size:'1em'\">{{item.name}}</ion-label>\r\n        <ion-icon slot=\"end\" *ngIf=\"item.subs?.length\" [style.color]=\"item.visible?'darkgoldenrod':'darkblue'\" name=\"{{item.visible?'ios-arrow-up':'ios-arrow-down'}}\"></ion-icon>\r\n    </ion-item>\r\n\r\n    <!-- Cây menu đệ quy nhé $event là biến nhận được từ sự kiện xảy ra, chính là dữ liệu truyền từ cấp cha xuống -->\r\n    <tree-menu [treeData]=\"item.subs\" *ngIf=\"item.visible\" [level]=\"(level+1)\" (onClickItem)=\"onClickSubItem($event)\"></tree-menu>\r\n\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [{
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    }, {
      path: 'home',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | main-entry-home-home-module */
        "main-entry-home-home-module").then(__webpack_require__.bind(null,
        /*! ./main-entry/home/home.module */
        "./src/app/main-entry/home/home.module.ts")).then(function (m) {
          return m.HomePageModule;
        });
      }
    }, {
      path: 'idea',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | idea-entry-idea-idea-module */
        [__webpack_require__.e("common"), __webpack_require__.e("idea-entry-idea-idea-module")]).then(__webpack_require__.bind(null,
        /*! ./idea-entry/idea/idea.module */
        "./src/app/idea-entry/idea/idea.module.ts")).then(function (m) {
          return m.IdeaPageModule;
        });
      }
    }, {
      path: 'login',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | main-entry-login-login-module */
        "main-entry-login-login-module").then(__webpack_require__.bind(null,
        /*! ./main-entry/login/login.module */
        "./src/app/main-entry/login/login.module.ts")).then(function (m) {
          return m.LoginPageModule;
        });
      }
    }, {
      path: 'idea-detail',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | idea-entry-idea-detail-idea-detail-module */
        [__webpack_require__.e("common"), __webpack_require__.e("idea-entry-idea-detail-idea-detail-module")]).then(__webpack_require__.bind(null,
        /*! ./idea-entry/idea-detail/idea-detail.module */
        "./src/app/idea-entry/idea-detail/idea-detail.module.ts")).then(function (m) {
          return m.IdeaDetailPageModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".background-card {\n  background-color: #f3f3f3;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);\n}\n\n.gradient {\n  background-image: url(\"/assets/imgs/gradient.png\");\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-position: center;\n}\n\n.grid-border {\n  border-radius: 0.5em;\n  border: solid 0.1em #FFFFFF;\n}\n\n.badge-background {\n  position: relative;\n  text-align: left;\n}\n\n.badge-background .badge-alert {\n  position: absolute;\n  left: 30%;\n  top: 20%;\n  padding: 0;\n  margin: 0;\n  font-size: 0.6em;\n  height: 30%;\n  width: 70%;\n  color: #ffffff;\n}\n\n.padding-col {\n  padding: 2px;\n}\n\n.card-background-header {\n  position: relative;\n  text-align: left;\n}\n\n.background-image-header {\n  background-size: cover;\n  background-position: center;\n  min-height: 100px;\n}\n\n.card-background-header .avatar-header {\n  position: absolute;\n  top: 10px;\n  left: 5px;\n  width: 80px;\n  height: 80px;\n  font-weight: bold;\n  color: #fff;\n  border-radius: 50%;\n  border: 5px solid greenyellow;\n  background-size: cover;\n  background-position: center;\n}\n\n.card-background-header .card-title-header {\n  position: absolute;\n  top: 25%;\n  left: 33%;\n  font-size: 1.5em;\n  width: 67%;\n  font-weight: bold;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXERJTkhOVlxcTXlEYXRhXFxMQVBUUklOSFxcTk9ERTRcXG5vZGU0LWlub3ZhdGlvblxcY2xpZW50L3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLHlCQUFBO0VBQ0Esd0NBQUE7QUNBSjs7QURHQTtFQUNJLGtEQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0FDQUo7O0FER0E7RUFDSSxvQkFBQTtFQUNBLDJCQUFBO0FDQUo7O0FER0E7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FDQUo7O0FER0E7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQ0FKOztBREdBO0VBQ0ksWUFBQTtBQ0FKOztBREdBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQ0FKOztBREdBO0VBQ0ksc0JBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0FDQUo7O0FER0E7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtBQ0FKOztBREdBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8tLS0tLS0tLS0tIHN0eWxlIGZvciBtZW51IC0tLS0tLy9cclxuLmJhY2tncm91bmQtY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxufVxyXG5cclxuLmdyYWRpZW50IHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1ncy9ncmFkaWVudC5wbmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxufVxyXG5cclxuLmdyaWQtYm9yZGVye1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC41ZW07XHJcbiAgICBib3JkZXI6IHNvbGlkIDAuMWVtICNGRkZGRkY7XHJcbn1cclxuXHJcbi5iYWRnZS1iYWNrZ3JvdW5kIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5iYWRnZS1iYWNrZ3JvdW5kIC5iYWRnZS1hbGVydCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAzMCU7XHJcbiAgICB0b3A6IDIwJTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXNpemU6IDAuNmVtO1xyXG4gICAgaGVpZ2h0OiAzMCU7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5wYWRkaW5nLWNvbHtcclxuICAgIHBhZGRpbmc6IDJweDtcclxufVxyXG5cclxuLmNhcmQtYmFja2dyb3VuZC1oZWFkZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLmJhY2tncm91bmQtaW1hZ2UtaGVhZGVye1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgXHJcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcclxufVxyXG5cclxuLmNhcmQtYmFja2dyb3VuZC1oZWFkZXIgLmF2YXRhci1oZWFkZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgbGVmdDogNXB4O1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyOiA1cHggc29saWQgZ3JlZW55ZWxsb3c7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyBcclxufVxyXG5cclxuLmNhcmQtYmFja2dyb3VuZC1oZWFkZXIgLmNhcmQtdGl0bGUtaGVhZGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjUlO1xyXG4gICAgbGVmdDogMzMlO1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIHdpZHRoOiA2NyU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59IiwiLmJhY2tncm91bmQtY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5ncmFkaWVudCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1ncy9ncmFkaWVudC5wbmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuLmdyaWQtYm9yZGVyIHtcbiAgYm9yZGVyLXJhZGl1czogMC41ZW07XG4gIGJvcmRlcjogc29saWQgMC4xZW0gI0ZGRkZGRjtcbn1cblxuLmJhZGdlLWJhY2tncm91bmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5iYWRnZS1iYWNrZ3JvdW5kIC5iYWRnZS1hbGVydCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMzAlO1xuICB0b3A6IDIwJTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDAuNmVtO1xuICBoZWlnaHQ6IDMwJTtcbiAgd2lkdGg6IDcwJTtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5wYWRkaW5nLWNvbCB7XG4gIHBhZGRpbmc6IDJweDtcbn1cblxuLmNhcmQtYmFja2dyb3VuZC1oZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5iYWNrZ3JvdW5kLWltYWdlLWhlYWRlciB7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgbWluLWhlaWdodDogMTAwcHg7XG59XG5cbi5jYXJkLWJhY2tncm91bmQtaGVhZGVyIC5hdmF0YXItaGVhZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIGxlZnQ6IDVweDtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogNXB4IHNvbGlkIGdyZWVueWVsbG93O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbi5jYXJkLWJhY2tncm91bmQtaGVhZGVyIC5jYXJkLXRpdGxlLWhlYWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyNSU7XG4gIGxlZnQ6IDMzJTtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgd2lkdGg6IDY3JTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjZmZmO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ngxi4_dynamic_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngxi4-dynamic-service */
    "./node_modules/ngxi4-dynamic-service/fesm2015/ngxi4-dynamic-service.js");
    /* harmony import */


    var _services_main_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./services/main.service */
    "./src/app/services/main.service.ts");
    /* harmony import */


    var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/environments/environment.prod */
    "./src/environments/environment.prod.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(menuCtrl, router, apiAuth, apiCommons, mainService) {
        _classCallCheck(this, AppComponent);

        this.menuCtrl = menuCtrl;
        this.router = router;
        this.apiAuth = apiAuth;
        this.apiCommons = apiCommons;
        this.mainService = mainService; // menu chưa login

        this.defaultMenu = [{
          id: 1,
          name: 'Văn phòng sáng tạo',
          size: '1.1em',
          type: 'route',
          url: '/home',
          icon: 'home'
        }, {
          id: 2,
          name: 'Login/Logout',
          type: 'route',
          url: '/login',
          icon: 'log-in'
        }]; //cây này sẽ nhúng vào component tree-menu để hiển thị menu

        this.treeMenu = [];
        this.init();
      }
      /**
       * Khởi tạo các biến đầu tiên
       */


      _createClass(AppComponent, [{
        key: "init",
        value: function init() {
          var _this = this;

          // this.apiAuth.serviceUrls.AUTH_SERVER = environment.AUTH_SERVER;
          // this.apiAuth.serviceUrls.RESOURCE_SERVER = environment.RESOURCE_SERVER;
          this.apiAuth.serviceUrls.AUTH_SERVER = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_6__["environment_web"].AUTH_SERVER;
          this.apiAuth.serviceUrls.RESOURCE_SERVER = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_6__["environment_web"].RESOURCE_SERVER;
          this.apiCommons.subscribe('event-login-ok', function (userInfo) {
            _this.userInfo = userInfo; // gọi tổ chức menu khi login thành công

            _this.refresh();
          });
          this.apiCommons.subscribe('event-logout-ok', function () {
            _this.userInfo = null; // Gán lại menu mặc định

            _this.treeMenu = _this.defaultMenu;
          });
          this.mainService.getTokenInfo().then(function (userInfo) {
            _this.userInfo = userInfo; // console.log(this.userInfo);

            _this.refresh();
          })["catch"](function (err) {
            _this.refresh();
          });
        }
        /**
         * Làm mới menu sau khi load, login hoặc logout
         */

      }, {
        key: "refresh",
        value: function refresh() {
          // Khai báo menu Mặc định
          this.treeMenu = [{
            id: 1,
            name: 'Văn phòng sáng tạo',
            size: '1.1em',
            type: 'route',
            url: '/home',
            icon: 'home'
          }, {
            id: 2,
            name: 'Login/Logout',
            type: 'route',
            url: '/login',
            icon: 'log-in'
          }];

          if (this.userInfo) {
            // thêm menu phòng ý tưởng
            this.treeMenu.push({
              id: 3,
              name: 'Phòng ý tưởng',
              size: '1.1em',
              type: 'route',
              url: '/idea',
              icon: 'md-alarm'
            });
          }
        }
        /**
         * Bấm gọi trang login
         */

      }, {
        key: "onClickLogin",
        value: function onClickLogin() {
          this.menuCtrl.close();
          this.router.navigate(['/login']);
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: ngxi4_dynamic_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: ngxi4_dynamic_service__WEBPACK_IMPORTED_MODULE_4__["CommonsService"]
      }, {
        type: _services_main_service__WEBPACK_IMPORTED_MODULE_5__["MainService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ngxi4_dynamic_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], ngxi4_dynamic_service__WEBPACK_IMPORTED_MODULE_4__["CommonsService"], _services_main_service__WEBPACK_IMPORTED_MODULE_5__["MainService"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _components_tree_menu_tree_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/tree-menu/tree-menu */
    "./src/app/components/tree-menu/tree-menu.ts");
    /* harmony import */


    var ngxi4_dynamic_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngxi4-dynamic-service */
    "./node_modules/ngxi4-dynamic-service/fesm2015/ngxi4-dynamic-service.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_tree_menu_tree_menu__WEBPACK_IMPORTED_MODULE_6__["TreeMenu"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"].forRoot(), ngxi4_dynamic_service__WEBPACK_IMPORTED_MODULE_7__["Ngxi4DynamicServiceModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/tree-menu/tree-menu.scss":
  /*!*****************************************************!*\
    !*** ./src/app/components/tree-menu/tree-menu.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsTreeMenuTreeMenuScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host .tree-input-item {\n  border-radius: 0.8em;\n  opacity: 0.9;\n  font-size: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90cmVlLW1lbnUvRDpcXERJTkhOVlxcTXlEYXRhXFxMQVBUUklOSFxcTk9ERTRcXG5vZGU0LWlub3ZhdGlvblxcY2xpZW50L3NyY1xcYXBwXFxjb21wb25lbnRzXFx0cmVlLW1lbnVcXHRyZWUtbWVudS5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3RyZWUtbWVudS90cmVlLW1lbnUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQztFQUNDLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdHJlZS1tZW51L3RyZWUtbWVudS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG5cdC50cmVlLWlucHV0LWl0ZW0ge1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMC44ZW07XHJcblx0XHRvcGFjaXR5OiAwLjk7XHJcblx0XHRmb250LXNpemU6IDFlbTtcclxuXHR9XHJcbn0iLCI6aG9zdCAudHJlZS1pbnB1dC1pdGVtIHtcbiAgYm9yZGVyLXJhZGl1czogMC44ZW07XG4gIG9wYWNpdHk6IDAuOTtcbiAgZm9udC1zaXplOiAxZW07XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/tree-menu/tree-menu.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/tree-menu/tree-menu.ts ***!
    \***************************************************/

  /*! exports provided: TreeMenu */

  /***/
  function srcAppComponentsTreeMenuTreeMenuTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TreeMenu", function () {
      return TreeMenu;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /**
     * Sử dụng cấu trúc hình cây kiểu menu, cho phép đóng mở menu bằng click
     *
     */


    var TreeMenu = /*#__PURE__*/function () {
      function TreeMenu() {
        _classCallCheck(this, TreeMenu);

        this.level = 0;
        this.onClickItem = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }
      /**
       * Khi bấm vào nút mở cây và đóng cây nó sẽ ẩn và hiện lá cây dưới nó ra
       * @param node
       */


      _createClass(TreeMenu, [{
        key: "hideAndShowChildrent",
        value: function hideAndShowChildrent(node) {
          node.visible = !node.visible;
        }
        /**
         * Khi bấm vào item của một lá cây thì truyền thông tin cây đó cho cấp trên của nó
         * @param node
         * @param idx
         * @param parent
         */

      }, {
        key: "onClickLeaf",
        value: function onClickLeaf(node, idx, parent) {
          this.onClickItem.emit({
            item: node,
            index: idx,
            parent: parent
          });
        }
        /**
         * Sự kiện xảy ra khi bấm click trên subItem,
         * Nó sẽ emit một đối tượng data {item:node,index:idx,tree:parent}
         * Vậy ta sẽ chuyển trả cho gốc cây nhúng nó nguyên trạng dữ liệu này
         *
         * Xem như bấm ở gốc cây vậy
         * @param event
         */

      }, {
        key: "onClickSubItem",
        value: function onClickSubItem(event) {
          this.onClickItem.emit(event);
        }
      }]);

      return TreeMenu;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)], TreeMenu.prototype, "treeData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)], TreeMenu.prototype, "level", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], TreeMenu.prototype, "onClickItem", void 0);
    TreeMenu = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'tree-menu',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tree-menu.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tree-menu/tree-menu.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tree-menu.scss */
      "./src/app/components/tree-menu/tree-menu.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], TreeMenu);
    /***/
  },

  /***/
  "./src/app/services/main.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/main.service.ts ***!
    \******************************************/

  /*! exports provided: MainService */

  /***/
  function srcAppServicesMainServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainService", function () {
      return MainService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ngxi4_dynamic_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngxi4-dynamic-service */
    "./node_modules/ngxi4-dynamic-service/fesm2015/ngxi4-dynamic-service.js");

    var MainService = /*#__PURE__*/function () {
      function MainService(apiStorage, apiAuth, apiCommons) {
        _classCallCheck(this, MainService);

        this.apiStorage = apiStorage;
        this.apiAuth = apiAuth;
        this.apiCommons = apiCommons;
      }
      /**
       * Đọc token từ đĩa, nếu có thì đẩy lên server để xác thực
       * Nếu xác thực thành công thì trả về userInfo
       */


      _createClass(MainService, [{
        key: "getTokenInfo",
        value: function getTokenInfo() {
          var _this2 = this;

          return new Promise(function (resolve, reject) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var token, result;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (!(this.token && this.userInfo)) {
                        _context.next = 4;
                        break;
                      }

                      resolve(this.userInfo);
                      _context.next = 19;
                      break;

                    case 4:
                      // this.apiStorage.delete("TOKEN");
                      token = this.apiStorage.read("TOKEN"); // console.log(token);

                      if (!token) {
                        _context.next = 18;
                        break;
                      }

                      _context.prev = 6;
                      _context.next = 9;
                      return this.apiAuth.getDynamicUrl(this.apiAuth.serviceUrls.RESOURCE_SERVER + '/get-user-info', token);

                    case 9:
                      result = _context.sent;

                      // console.log(result);
                      if (result && result.status === 'OK' && result.data) {
                        this.userInfo = result.data;
                        this.token = token;
                        this.apiAuth.token = token;
                        resolve(this.userInfo);
                      } else {
                        reject();
                      }

                      _context.next = 16;
                      break;

                    case 13:
                      _context.prev = 13;
                      _context.t0 = _context["catch"](6);
                      reject();

                    case 16:
                      _context.next = 19;
                      break;

                    case 18:
                      reject();

                    case 19:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this, [[6, 13]]);
            }));
          });
        }
      }, {
        key: "saveUserInfo",
        value: function saveUserInfo(userInfo) {
          this.userInfo = userInfo;
          this.apiCommons.publish('event-login-ok', this.userInfo);
        }
        /**
         * Lưu token xuống đĩa
         * @param token
         */

      }, {
        key: "saveToken",
        value: function saveToken(token, userInfo) {
          this.apiStorage.save("TOKEN", token);
          this.userInfo = userInfo;
          this.token = token; // Lưu token trong interceptor để sử dụng post, request tự động chèn token 

          this.apiAuth.token = token;
          this.apiCommons.publish('event-login-ok', this.userInfo);
        }
        /**
         * Xóa token khỏi đĩa
         * Gán các thông số bằng null
         */

      }, {
        key: "logout",
        value: function logout() {
          this.apiStorage["delete"]("TOKEN");
          this.token = null;
          this.userInfo = null;
          this.apiAuth.token = null;
          this.apiCommons.publish('event-logout-ok');
        }
      }, {
        key: "getUserInfo",
        value: function getUserInfo() {
          return this.userInfo;
        }
      }]);

      return MainService;
    }();

    MainService.ctorParameters = function () {
      return [{
        type: ngxi4_dynamic_service__WEBPACK_IMPORTED_MODULE_2__["ApiStorageService"]
      }, {
        type: ngxi4_dynamic_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: ngxi4_dynamic_service__WEBPACK_IMPORTED_MODULE_2__["CommonsService"]
      }];
    };

    MainService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngxi4_dynamic_service__WEBPACK_IMPORTED_MODULE_2__["ApiStorageService"], ngxi4_dynamic_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], ngxi4_dynamic_service__WEBPACK_IMPORTED_MODULE_2__["CommonsService"]])], MainService);
    /***/
  },

  /***/
  "./src/environments/environment.prod.ts":
  /*!**********************************************!*\
    !*** ./src/environments/environment.prod.ts ***!
    \**********************************************/

  /*! exports provided: environment_web */

  /***/
  function srcEnvironmentsEnvironmentProdTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment_web", function () {
      return environment_web;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var environment_web = {
      production: true,
      AUTH_SERVER: 'https://dinh-inovation.herokuapp.com/m-inovation/api/auth',
      RESOURCE_SERVER: 'https://dinh-inovation.herokuapp.com/m-inovation/api'
    };
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var environment = {
      production: false,
      AUTH_SERVER: 'http://localhost:9223/m-inovation/api/auth',
      RESOURCE_SERVER: 'http://localhost:9223/m-inovation/api'
    };
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\DINHNV\MyData\LAPTRINH\NODE4\node4-inovation\client\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map