(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@angular/core'),require('@angular/common'),require('@angular/router'),require('@angular/cdk/overlay'),require('@angular/material/form-field'),require('@angular/material/input'),require('@angular/forms'),require('@angular/material/autocomplete'),require('@angular/material/dialog'),require('@angular/material/core'),require('@angular/platform-browser/animations'),require('@angular/platform-browser'),require('@angular/common/http'),exports, require('@angular/core'), require('@angular/forms'), require('@angular/platform-browser'), require('@angular/common/http'), require('@angular/common'), require('@angular/router'), require('@angular/material/autocomplete'), require('@angular/material/dialog'), require('@angular/material/form-field'), require('@angular/material/input'), require('@angular/platform-browser/animations'), require('@angular/cdk/overlay'), require('gl-w-frontend/lib/es5/scripts/core/services/input/core-services-input.service'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('gl-ng-frontend', ['@angular/core','@angular/common','@angular/router','@angular/cdk/overlay','@angular/material/form-field','@angular/material/input','@angular/forms','@angular/material/autocomplete','@angular/material/dialog','@angular/material/core','@angular/platform-browser/animations','@angular/platform-browser','@angular/common/http','exports', '@angular/core', '@angular/forms', '@angular/platform-browser', '@angular/common/http', '@angular/common', '@angular/router', '@angular/material/autocomplete', '@angular/material/dialog', '@angular/material/form-field', '@angular/material/input', '@angular/platform-browser/animations', '@angular/cdk/overlay', 'gl-w-frontend/lib/es5/scripts/core/services/input/core-services-input.service', 'rxjs', 'rxjs/operators'], factory) :
    (global = global || self, factory(global.ng.core,global.ng.common,global.ng.router,global.ng.cdk.overlay,global.ng.material.formField,global.ng.material.input,global.ng.forms,global.ng.material.autocomplete,global.ng.material.dialog,global.ng.material.core,global.ng.platformBrowser.animations,global.ng.platformBrowser,global.ng.common.http,global['gl-ng-frontend'] = {}, global.ng.core, global.ng.forms, global.ng.platformBrowser, global.ng.common.http, global.ng.common, global.ng.router, global.ng.material.autocomplete, global.ng.material.dialog, global.ng.material.formField, global.ng.material.input, global.ng.platformBrowser.animations, global.ng.cdk.overlay, global.coreServicesInput_service, global.rxjs, global.rxjs.operators));
}(this, (function (ɵngcc0,ɵngcc1,ɵngcc2,ɵngcc3,ɵngcc4,ɵngcc5,ɵngcc6,ɵngcc7,ɵngcc8,ɵngcc9,ɵngcc10,ɵngcc11,ɵngcc12,exports, core, forms, platformBrowser, http, common, router, autocomplete, dialog, formField, input, animations, overlay, coreServicesInput_service, rxjs, operators) { 
var _c0 = ["input"];
var _c1 = ["inputElement"];
function GlSharedComponentTitleLabelSimpleComponent_img_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "img", 1);
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMapInterpolate1("required-fill-dot ", ctx_r0.class, "");
    ɵngcc0.ɵɵproperty("title", ctx_r0.requiredLabel);
} }
var _c2 = ["textArea"];
var _c3 = ["*"];
function GlSharedComponentModalAlertComponent_div_0_gl_shared_component_input_button_simple_7_Template(rf, ctx) { if (rf & 1) {
    var _r5 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "gl-shared-component-input-button-simple", 11);
    ɵngcc0.ɵɵlistener("click", function GlSharedComponentModalAlertComponent_div_0_gl_shared_component_input_button_simple_7_Template_gl_shared_component_input_button_simple_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r5); var ctx_r4 = ɵngcc0.ɵɵnextContext(2); return ctx_r4.service.onNo(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("innerValue", ctx_r1.innerValueNo)("value", ctx_r1.noValue);
} }
function GlSharedComponentModalAlertComponent_div_0_gl_shared_component_input_button_simple_8_Template(rf, ctx) { if (rf & 1) {
    var _r7 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "gl-shared-component-input-button-simple", 12);
    ɵngcc0.ɵɵlistener("click", function GlSharedComponentModalAlertComponent_div_0_gl_shared_component_input_button_simple_8_Template_gl_shared_component_input_button_simple_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r7); var ctx_r6 = ɵngcc0.ɵɵnextContext(2); return ctx_r6.service.onYes(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("innerValue", ctx_r2.innerValueYes)("value", ctx_r2.yesValue);
} }
function GlSharedComponentModalAlertComponent_div_0_gl_shared_component_input_button_simple_9_Template(rf, ctx) { if (rf & 1) {
    var _r9 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "gl-shared-component-input-button-simple", 13);
    ɵngcc0.ɵɵlistener("click", function GlSharedComponentModalAlertComponent_div_0_gl_shared_component_input_button_simple_9_Template_gl_shared_component_input_button_simple_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r9); var ctx_r8 = ɵngcc0.ɵɵnextContext(2); return ctx_r8.service.onOk(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("innerValue", ctx_r3.innerValueOK)("value", ctx_r3.okValue);
} }
function GlSharedComponentModalAlertComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    var _r11 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 1);
    ɵngcc0.ɵɵlistener("keydown", function GlSharedComponentModalAlertComponent_div_0_Template_div_keydown_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r11); var ctx_r10 = ɵngcc0.ɵɵnextContext(); return ctx_r10.service.onModalKeyUp($event); });
    ɵngcc0.ɵɵelementStart(1, "div", 2);
    ɵngcc0.ɵɵelement(2, "gl-shared-component-modal-header", 3);
    ɵngcc0.ɵɵelementStart(3, "div", 4);
    ɵngcc0.ɵɵelementStart(4, "span", 5);
    ɵngcc0.ɵɵtext(5);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(6, "div", 6);
    ɵngcc0.ɵɵtemplate(7, GlSharedComponentModalAlertComponent_div_0_gl_shared_component_input_button_simple_7_Template, 1, 2, "gl-shared-component-input-button-simple", 7);
    ɵngcc0.ɵɵtemplate(8, GlSharedComponentModalAlertComponent_div_0_gl_shared_component_input_button_simple_8_Template, 1, 2, "gl-shared-component-input-button-simple", 8);
    ɵngcc0.ɵɵtemplate(9, GlSharedComponentModalAlertComponent_div_0_gl_shared_component_input_button_simple_9_Template, 1, 2, "gl-shared-component-input-button-simple", 9);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelement(10, "div", 10);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMapInterpolate1("modal-container ", ctx_r0.service.modalClass, "");
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("title", ctx_r0.title)("subtitle", ctx_r0.subtitle)("modalLogo", ctx_r0.modalLogo);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.service.message);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r0.service.isOK);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r0.service.isOK);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.service.isOK);
} }
var _c4 = ["mainLoading"];
function GlSharedComponentModalLoadingComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 1, 2);
    ɵngcc0.ɵɵelementStart(2, "div", 3);
    ɵngcc0.ɵɵelementStart(3, "div", 4);
    ɵngcc0.ɵɵelement(4, "div");
    ɵngcc0.ɵɵelement(5, "div");
    ɵngcc0.ɵɵelement(6, "div");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(7, "div", 5);
    ɵngcc0.ɵɵelementStart(8, "div", 6);
    ɵngcc0.ɵɵprojection(9);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(10, "h2", 7);
    ɵngcc0.ɵɵtext(11);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(11);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.service._loadingStatus);
} }
function GlSharedComponentTitleLabelButtonSimpleComponent_img_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "img", 3);
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("title", ctx_r0.requiredFieldDescription);
} }
var _c5 = ["container"];
var _c6 = ["background"];
function GlSharedComponentMenuComponent_img_10_Template(rf, ctx) { if (rf & 1) {
    var _r5 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "img", 17);
    ɵngcc0.ɵɵlistener("click", function GlSharedComponentMenuComponent_img_10_Template_img_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r5); var ctx_r4 = ɵngcc0.ɵɵnextContext(); return ctx_r4.service.goToSettings(ctx_r4.settingsUrl, ctx_r4.settingsTarget); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("src", ctx_r2.settingsButton, ɵngcc0.ɵɵsanitizeUrl);
} }
function GlSharedComponentMenuComponent_gl_shared_component_menu_item_16_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "gl-shared-component-menu-item", 18);
} if (rf & 2) {
    var menuItem_r6 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("absolute", menuItem_r6.absolute)("alt", menuItem_r6.alt)("src", menuItem_r6.src)("routerLink", menuItem_r6.href)("href", menuItem_r6.href)("content", menuItem_r6.content)("itemClass", menuItem_r6.class);
} }
function GlSharedComponentMenuItemComponent_a_2_Template(rf, ctx) { if (rf & 1) {
    var _r3 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 4);
    ɵngcc0.ɵɵlistener("click", function GlSharedComponentMenuItemComponent_a_2_Template_a_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r3); var ctx_r2 = ɵngcc0.ɵɵnextContext(); return ctx_r2.openAbsoluteLink($event, ctx_r2.href); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("href", "externalRedirect", ɵngcc0.ɵɵsanitizeUrl);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.content);
} }
function GlSharedComponentMenuItemComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    var _r5 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 5);
    ɵngcc0.ɵɵlistener("click", function GlSharedComponentMenuItemComponent_a_3_Template_a_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r5); var ctx_r4 = ɵngcc0.ɵɵnextContext(); return ctx_r4.onClick.emit(null); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("routerLink", ctx_r1.href);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r1.content);
} }
function GlSharedComponentFooterSimpleComponent_img_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "img", 3);
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("alt", ctx_r0.imageDescription)("src", ctx_r0.imageLogo, ɵngcc0.ɵɵsanitizeUrl);
} }
function GlSharedComponentFooterContainerComponent_img_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "img", 4);
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("alt", ctx_r0.imageDescription)("src", ctx_r0.imageLogo, ɵngcc0.ɵɵsanitizeUrl);
} }
function GlSharedComponentButtonImageTooltipComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 1);
    ɵngcc0.ɵɵelement(1, "gl-shared-component-button-image-simple", 2);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassProp("hidden", !ctx_r0.show);
    ɵngcc0.ɵɵproperty("id", ctx_r0.id);
    ɵngcc0.ɵɵattribute("tooltip", ctx_r0.alt);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("src", ctx_r0.src)("alt", ctx_r0.alt)("id", ctx_r0.id)("callback", ctx_r0.callback);
} }
function GlSharedComponentButtonMenuTooltipComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    var _r2 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 1);
    ɵngcc0.ɵɵelementStart(1, "gl-shared-component-button-menu-simple", 2);
    ɵngcc0.ɵɵlistener("click", function GlSharedComponentButtonMenuTooltipComponent_div_0_Template_gl_shared_component_button_menu_simple_click_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r2); var ctx_r1 = ɵngcc0.ɵɵnextContext(); return ctx_r1.callback($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵattribute("alt", ctx_r0.alt);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("src", ctx_r0.src)("id", ctx_r0.id)("alt", ctx_r0.alt);
} }
function GlSharedComponentInputAutocompleteSimpleComponent_mat_option_9_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-option", 8);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var option_r4 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("value", option_r4.text);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", option_r4.text, " ");
} }
var _c7 = ["menuNavContainer"];
function GlSharedComponentFilterComponent_span_19_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 19);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate3("", ctx_r3.partialResultDescription, " ", ctx_r3.partialResult, " ", ctx_r3.partialResult > 1 ? ctx_r3.itemPluralDescription : ctx_r3.itemSingularDescription, " ");
} }
var _c8 = ["mainContainer"];
function GlSharedViewErrorMessageComponent_gl_shared_component_input_button_hyperlink_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "gl-shared-component-input-button-hyperlink", 6);
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("description", ctx_r1.footerDescription)("imageDescription", ctx_r1.footerImageDescription)("imageSrc", ctx_r1.footerImageSrc)("link", ctx_r1.footerLink);
} }
'use strict';

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
        };
        return __assign.apply(this, arguments);
    };

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
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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

    function __createBinding(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    }

    function __exportStar(m, exports) {
        for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
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

    var CoreDirectivesAutofocusDirective = /** @class */ (function () {
        function CoreDirectivesAutofocusDirective(elementRef) {
            this.elementRef = elementRef;
        }
        CoreDirectivesAutofocusDirective.prototype.ngOnInit = function () {
            this.elementRef.nativeElement.focus();
        };
        CoreDirectivesAutofocusDirective.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
CoreDirectivesAutofocusDirective.ɵfac = function CoreDirectivesAutofocusDirective_Factory(t) { return new (t || CoreDirectivesAutofocusDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
CoreDirectivesAutofocusDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CoreDirectivesAutofocusDirective, selectors: [["", "glAutoFocus", ""]] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CoreDirectivesAutofocusDirective, [{
        type: core.Directive,
        args: [{
                selector: '[glAutoFocus]'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, null); })();
        return CoreDirectivesAutofocusDirective;
    }());

    var GlCoreModule = /** @class */ (function () {
        function GlCoreModule() {
        }
GlCoreModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: GlCoreModule });
GlCoreModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function GlCoreModule_Factory(t) { return new (t || GlCoreModule)(); }, imports: [[
            common.CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(GlCoreModule, { declarations: [CoreDirectivesAutofocusDirective], imports: [ɵngcc1.CommonModule], exports: [CoreDirectivesAutofocusDirective] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GlCoreModule, [{
        type: core.NgModule,
        args: [{
                declarations: [
                    CoreDirectivesAutofocusDirective
                ],
                exports: [
                    CoreDirectivesAutofocusDirective
                ],
                imports: [
                    common.CommonModule
                ]
            }]
    }], function () { return []; }, null); })();
        return GlCoreModule;
    }());

    var GlSharedComponentInputButtonSimpleComponent = /** @class */ (function () {
        function GlSharedComponentInputButtonSimpleComponent() {
        }
        __decorate([
            core.Input()
        ], GlSharedComponentInputButtonSimpleComponent.prototype, "value", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentInputButtonSimpleComponent.prototype, "class", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentInputButtonSimpleComponent.prototype, "innerValue", void 0);
GlSharedComponentInputButtonSimpleComponent.ɵfac = function GlSharedComponentInputButtonSimpleComponent_Factory(t) { return new (t || GlSharedComponentInputButtonSimpleComponent)(); };
GlSharedComponentInputButtonSimpleComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GlSharedComponentInputButtonSimpleComponent, selectors: [["gl-shared-component-input-button-simple"]], inputs: { value: "value", class: "class", innerValue: "innerValue" }, decls: 2, vars: 5, consts: [["type", "button", 3, "value"]], template: function GlSharedComponentInputButtonSimpleComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "button", 0);
        ɵngcc0.ɵɵtext(1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMapInterpolate1("default-button ", ctx.class, "");
        ɵngcc0.ɵɵproperty("value", ctx.value);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate(ctx.innerValue);
    } }, styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);[_nghost-%COMP%] {display:flex;flex:1 1 0px;height:2em}[_nghost-%COMP%]  .default-button{font-family:Montserrat,sans-serif;font-weight:700;border:none;font-size:.5em;text-transform:uppercase;flex:1 1 0px;background-color:#d24077;color:#fff}[_nghost-%COMP%]  .default-button.light-translucid{font-family:Montserrat,sans-serif;font-weight:300;background-color:rgba(255,255,255,.1)}[_nghost-%COMP%]  .default-button:focus, [_nghost-%COMP%]  .default-button:hover{opacity:1;transition:.3s ease-in-out}[_nghost-%COMP%]  .light-translucid.default-button:focus, [_nghost-%COMP%]  .light-translucid.default-button:hover{font-family:Montserrat,sans-serif;font-weight:300;background-color:rgba(255,255,255,.9);color:#4b4d52}[_nghost-%COMP%]  .default-button:not(hover){opacity:.7;transition:.3s ease-in-out}"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GlSharedComponentInputButtonSimpleComponent, [{
        type: core.Component,
        args: [{
                selector: 'gl-shared-component-input-button-simple',
                template: "<button\n  type=\"button\"\n  class=\"default-button {{ class }}\"\n  [value]=\"value\"\n>{{ innerValue }}</button>\n",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);:host::ng-deep{display:flex;flex:1 1 0px;height:2em}:host::ng-deep .default-button{font-family:Montserrat,sans-serif;font-weight:700;border:none;font-size:.5em;text-transform:uppercase;flex:1 1 0px;background-color:#d24077;color:#fff}:host::ng-deep .default-button.light-translucid{font-family:Montserrat,sans-serif;font-weight:300;background-color:rgba(255,255,255,.1)}:host::ng-deep .default-button:focus,:host::ng-deep .default-button:hover{opacity:1;transition:.3s ease-in-out}:host::ng-deep .light-translucid.default-button:focus,:host::ng-deep .light-translucid.default-button:hover{font-family:Montserrat,sans-serif;font-weight:300;background-color:rgba(255,255,255,.9);color:#4b4d52}:host::ng-deep .default-button:not(hover){opacity:.7;transition:.3s ease-in-out}"]
            }]
    }], function () { return []; }, { value: [{
            type: core.Input
        }], class: [{
            type: core.Input
        }], innerValue: [{
            type: core.Input
        }] }); })();
        return GlSharedComponentInputButtonSimpleComponent;
    }());

    var GlSharedComponentInputOptionSimpleComponent = /** @class */ (function () {
        function GlSharedComponentInputOptionSimpleComponent() {
            this.itemSelected = new core.EventEmitter();
        }
        GlSharedComponentInputOptionSimpleComponent.prototype.onCheck = function () {
            var input = document.querySelector("#" + this.id);
            input.checked = true;
            this.itemSelected.emit(input.value);
        };
        __decorate([
            core.ViewChild('input')
        ], GlSharedComponentInputOptionSimpleComponent.prototype, "input", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentInputOptionSimpleComponent.prototype, "value", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentInputOptionSimpleComponent.prototype, "id", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentInputOptionSimpleComponent.prototype, "label", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentInputOptionSimpleComponent.prototype, "name", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentInputOptionSimpleComponent.prototype, "checked", void 0);
        __decorate([
            core.Output()
        ], GlSharedComponentInputOptionSimpleComponent.prototype, "itemSelected", void 0);
GlSharedComponentInputOptionSimpleComponent.ɵfac = function GlSharedComponentInputOptionSimpleComponent_Factory(t) { return new (t || GlSharedComponentInputOptionSimpleComponent)(); };
GlSharedComponentInputOptionSimpleComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GlSharedComponentInputOptionSimpleComponent, selectors: [["gl-shared-component-input-option-simple"]], viewQuery: function GlSharedComponentInputOptionSimpleComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.input = _t.first);
    } }, inputs: { value: "value", id: "id", label: "label", name: "name", checked: "checked" }, outputs: { itemSelected: "itemSelected" }, decls: 6, vars: 6, consts: [[1, "input-container"], ["type", "radio", 1, "input-radio", 3, "checked", "value", "id", "name", "click"], ["input", ""], [1, "check-mark", 3, "click"], [1, "label", 3, "for"]], template: function GlSharedComponentInputOptionSimpleComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "input", 1, 2);
        ɵngcc0.ɵɵlistener("click", function GlSharedComponentInputOptionSimpleComponent_Template_input_click_1_listener() { return ctx.onCheck(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(3, "span", 3);
        ɵngcc0.ɵɵlistener("click", function GlSharedComponentInputOptionSimpleComponent_Template_span_click_3_listener() { return ctx.onCheck(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(4, "label", 4);
        ɵngcc0.ɵɵtext(5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("checked", ctx.checked)("value", ctx.value)("id", ctx.id)("name", ctx.name);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("for", ctx.id);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate(ctx.label);
    } }, styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);[_nghost-%COMP%] {display:block;flex-grow:1}[_nghost-%COMP%]  .input-container{position:relative;padding:.2em .2em 0;display:flex;flex-grow:1;align-items:center}[_nghost-%COMP%]  .input-container:not(hover) .check-mark{background-color:#1a1b1d;transition:.3s ease-in-out}[_nghost-%COMP%]  .input-container:hover .check-mark{background-color:#333437;transition:.3s ease-in-out}[_nghost-%COMP%]  .input-container .input-radio{position:absolute;opacity:0;cursor:pointer;height:2.2em;width:2.2em;left:.75em;top:.9em}[_nghost-%COMP%]  .input-container .input-radio:checked~.check-mark{background-color:#1a1b1d}[_nghost-%COMP%]  .input-container .input-radio:checked~.check-mark:after{visibility:visible;opacity:1;top:.25em;left:.24em;width:.5em;height:.5em;border-radius:50%;background-color:#d24077;transition:opacity .5s ease-in-out,background-color .5s ease-in-out}[_nghost-%COMP%]  .input-container .check-mark{position:relative;cursor:pointer;top:0;left:0;height:1em;width:1em;background-color:#d24077;border-radius:50%;margin:0 .2em 0 0}[_nghost-%COMP%]  .input-container .check-mark:after{content:\"\";-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;position:absolute;opacity:0;visibility:collapse;transition:opacity .5s ease-in-out,background-color .5s ease-in-out}[_nghost-%COMP%]  .input-container .check-mark:after:hover{transform:scale(1.1);transition:.2s ease-in-out}[_nghost-%COMP%]  .input-container .label{font-family:Montserrat,sans-serif;font-weight:400;color:#64666c;font-size:.6em}"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GlSharedComponentInputOptionSimpleComponent, [{
        type: core.Component,
        args: [{
                selector: 'gl-shared-component-input-option-simple',
                template: "<div class=\"input-container\">\n  <!--suppress HtmlFormInputWithoutLabel -->\n  <input\n    #input\n    [checked]=\"checked\"\n    class=\"input-radio\"\n    type=\"radio\"\n    [value]=\"value\"\n    [id]=\"id\"\n    [name]=\"name\"\n    (click)=\"onCheck()\"\n  >\n  <span (click)=\"onCheck()\" class=\"check-mark\"></span>\n  <label class=\"label\" [for]=\"id\">{{ label }}</label>\n</div>\n",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);:host::ng-deep{display:block;flex-grow:1}:host::ng-deep .input-container{position:relative;padding:.2em .2em 0;display:flex;flex-grow:1;align-items:center}:host::ng-deep .input-container:not(hover) .check-mark{background-color:#1a1b1d;transition:.3s ease-in-out}:host::ng-deep .input-container:hover .check-mark{background-color:#333437;transition:.3s ease-in-out}:host::ng-deep .input-container .input-radio{position:absolute;opacity:0;cursor:pointer;height:2.2em;width:2.2em;left:.75em;top:.9em}:host::ng-deep .input-container .input-radio:checked~.check-mark{background-color:#1a1b1d}:host::ng-deep .input-container .input-radio:checked~.check-mark:after{visibility:visible;opacity:1;top:.25em;left:.24em;width:.5em;height:.5em;border-radius:50%;background-color:#d24077;transition:opacity .5s ease-in-out,background-color .5s ease-in-out}:host::ng-deep .input-container .check-mark{position:relative;cursor:pointer;top:0;left:0;height:1em;width:1em;background-color:#d24077;border-radius:50%;margin:0 .2em 0 0}:host::ng-deep .input-container .check-mark:after{content:\"\";-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;position:absolute;opacity:0;visibility:collapse;transition:opacity .5s ease-in-out,background-color .5s ease-in-out}:host::ng-deep .input-container .check-mark:after:hover{transform:scale(1.1);transition:.2s ease-in-out}:host::ng-deep .input-container .label{font-family:Montserrat,sans-serif;font-weight:400;color:#64666c;font-size:.6em}"]
            }]
    }], function () { return []; }, { itemSelected: [{
            type: core.Output
        }], input: [{
            type: core.ViewChild,
            args: ['input']
        }], value: [{
            type: core.Input
        }], id: [{
            type: core.Input
        }], label: [{
            type: core.Input
        }], name: [{
            type: core.Input
        }], checked: [{
            type: core.Input
        }] }); })();
        return GlSharedComponentInputOptionSimpleComponent;
    }());

    var GlSharedComponentInputTextSimpleComponent = /** @class */ (function () {
        function GlSharedComponentInputTextSimpleComponent() {
            this.disabled = false;
            this.autocomplete = false;
            this.value = null;
            this.maxLength = 255;
            this.currentValue = new core.EventEmitter();
        }
        GlSharedComponentInputTextSimpleComponent.prototype.onKeyUp = function (args) {
            if (args.target.value.trim().length > 0) {
                args.target.classList.remove('required-fill');
            }
            this.currentValue.emit({ value: args.target.value });
        };
        GlSharedComponentInputTextSimpleComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            setTimeout(function () {
                if (_this.mask != null && _this.mask.includes('currency')) {
                    _this.inputElement.nativeElement.placeholder = coreServicesInput_service.InputMask.currency(_this.inputElement.nativeElement, _this.mask, _this.maskSymbol);
                }
            }, 0);
        };
        __decorate([
            core.ViewChild('inputElement', { read: core.ElementRef, static: true })
        ], GlSharedComponentInputTextSimpleComponent.prototype, "inputElement", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentInputTextSimpleComponent.prototype, "disabled", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentInputTextSimpleComponent.prototype, "autocomplete", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentInputTextSimpleComponent.prototype, "id", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentInputTextSimpleComponent.prototype, "placeholder", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentInputTextSimpleComponent.prototype, "itemContentAlignment", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentInputTextSimpleComponent.prototype, "class", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentInputTextSimpleComponent.prototype, "value", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentInputTextSimpleComponent.prototype, "mask", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentInputTextSimpleComponent.prototype, "maskSymbol", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentInputTextSimpleComponent.prototype, "maxLength", void 0);
        __decorate([
            core.Output()
        ], GlSharedComponentInputTextSimpleComponent.prototype, "currentValue", void 0);
        __decorate([
            core.Output()
        ], GlSharedComponentInputTextSimpleComponent.prototype, "onKeyUp", null);
GlSharedComponentInputTextSimpleComponent.ɵfac = function GlSharedComponentInputTextSimpleComponent_Factory(t) { return new (t || GlSharedComponentInputTextSimpleComponent)(); };
GlSharedComponentInputTextSimpleComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GlSharedComponentInputTextSimpleComponent, selectors: [["gl-shared-component-input-text-simple"]], viewQuery: function GlSharedComponentInputTextSimpleComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(_c1, true, core.ElementRef);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.inputElement = _t.first);
    } }, inputs: { disabled: "disabled", autocomplete: "autocomplete", value: "value", maxLength: "maxLength", id: "id", placeholder: "placeholder", itemContentAlignment: "itemContentAlignment", class: "class", mask: "mask", maskSymbol: "maskSymbol" }, outputs: { currentValue: "currentValue", onKeyUp: "onKeyUp" }, decls: 2, vars: 10, consts: [["type", "text", "required", "", 3, "id", "value", "autocomplete", "placeholder", "disabled", "maxLength", "keyup"], ["inputElement", ""]], template: function GlSharedComponentInputTextSimpleComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "input", 0, 1);
        ɵngcc0.ɵɵlistener("keyup", function GlSharedComponentInputTextSimpleComponent_Template_input_keyup_0_listener($event) { return ctx.onKeyUp($event); });
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMapInterpolate2("item-content ", ctx.itemContentAlignment, " ", ctx.class, "");
        ɵngcc0.ɵɵproperty("id", ctx.id)("value", ctx.value)("autocomplete", "off")("placeholder", ctx.placeholder)("disabled", ctx.disabled)("maxLength", ctx.maxLength);
    } }, styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);.required-fill[_ngcontent-%COMP%]{background-color:rgba(210,64,119,.3)!important;border-color:#e64949!important;color:#fff!important;transition:.2s ease-in-out}.required-fill[_ngcontent-%COMP%]::-moz-placeholder{color:rgba(255,255,255,.3)!important}.required-fill[_ngcontent-%COMP%]:-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.required-fill[_ngcontent-%COMP%]::-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.required-fill[_ngcontent-%COMP%]::placeholder{color:rgba(255,255,255,.3)!important}.error-highlight[_ngcontent-%COMP%]{background-color:rgba(210,64,119,.3)!important;border-color:#e64949!important;color:#fff!important;transition:.2s ease-in-out}.error-highlight[_ngcontent-%COMP%]::-moz-placeholder{color:rgba(255,255,255,.3)!important}.error-highlight[_ngcontent-%COMP%]:-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.error-highlight[_ngcontent-%COMP%]::-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.error-highlight[_ngcontent-%COMP%]::placeholder{color:rgba(255,255,255,.3)!important}[_nghost-%COMP%] {display:flex;flex:1 0 auto;position:relative;flex-direction:column;align-items:stretch}[_nghost-%COMP%]  .item-content{font-family:Montserrat,sans-serif;font-weight:400;padding:.8em;border:none;background-color:#333437;color:#fff;font-size:.45em;flex-grow:1}[_nghost-%COMP%]  .item-content:focus{outline:0!important}[_nghost-%COMP%]  .item-content::-moz-placeholder{color:#64666c!important}[_nghost-%COMP%]  .item-content::-ms-input-placeholder{color:#64666c!important}[_nghost-%COMP%]  .item-content::placeholder{color:#64666c!important}[_nghost-%COMP%]  .item-content.left{text-align:left}[_nghost-%COMP%]  .item-content.center{text-align:center}[_nghost-%COMP%]  .item-content.right{text-align:right}[_nghost-%COMP%]  .item-content.light{background-color:rgba(0,0,0,.1)}[_nghost-%COMP%]  .item-content.light::-moz-placeholder{color:rgba(255,255,255,.2)!important}[_nghost-%COMP%]  .item-content.light::-ms-input-placeholder{color:rgba(255,255,255,.2)!important}[_nghost-%COMP%]  .item-content.light::placeholder{color:rgba(255,255,255,.2)!important}[_nghost-%COMP%]  .item-content.dark{background-color:#161617}[_nghost-%COMP%]  .item-content:-ms-input-placeholder{color:#64666c!important}[_nghost-%COMP%]  .item-content.light:-ms-input-placeholder{color:gray!important}@media screen and (-ms-high-contrast:none),(-ms-high-contrast:active){[_nghost-%COMP%]  .item-content:-ms-input-placeholder{color:#64666c!important}[_nghost-%COMP%]  .item-content::-moz-placeholder{color:#64666c!important}[_nghost-%COMP%]  .item-content::-ms-input-placeholder{color:#64666c!important}[_nghost-%COMP%]  .item-content::placeholder{color:#64666c!important}}"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GlSharedComponentInputTextSimpleComponent, [{
        type: core.Component,
        args: [{
                selector: 'gl-shared-component-input-text-simple',
                template: "<!--suppress HtmlFormInputWithoutLabel -->\n<input\n  #inputElement\n  class=\"item-content {{ itemContentAlignment }} {{ class }}\"\n  type=\"text\"\n  [id]=\"id\"\n  [value]=\"value\"\n  [autocomplete]=\"'off'\"\n  required\n  [placeholder]=\"placeholder\"\n  (keyup)=\"onKeyUp($event)\"\n  [disabled]=\"disabled\"\n  [maxLength]=\"maxLength\">\n",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);.required-fill{background-color:rgba(210,64,119,.3)!important;border-color:#e64949!important;color:#fff!important;transition:.2s ease-in-out}.required-fill::-moz-placeholder{color:rgba(255,255,255,.3)!important}.required-fill:-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.required-fill::-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.required-fill::placeholder{color:rgba(255,255,255,.3)!important}.error-highlight{background-color:rgba(210,64,119,.3)!important;border-color:#e64949!important;color:#fff!important;transition:.2s ease-in-out}.error-highlight::-moz-placeholder{color:rgba(255,255,255,.3)!important}.error-highlight:-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.error-highlight::-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.error-highlight::placeholder{color:rgba(255,255,255,.3)!important}:host::ng-deep{display:flex;flex:1 0 auto;position:relative;flex-direction:column;align-items:stretch}:host::ng-deep .item-content{font-family:Montserrat,sans-serif;font-weight:400;padding:.8em;border:none;background-color:#333437;color:#fff;font-size:.45em;flex-grow:1}:host::ng-deep .item-content:focus{outline:0!important}:host::ng-deep .item-content::-moz-placeholder{color:#64666c!important}:host::ng-deep .item-content::-ms-input-placeholder{color:#64666c!important}:host::ng-deep .item-content::placeholder{color:#64666c!important}:host::ng-deep .item-content.left{text-align:left}:host::ng-deep .item-content.center{text-align:center}:host::ng-deep .item-content.right{text-align:right}:host::ng-deep .item-content.light{background-color:rgba(0,0,0,.1)}:host::ng-deep .item-content.light::-moz-placeholder{color:rgba(255,255,255,.2)!important}:host::ng-deep .item-content.light::-ms-input-placeholder{color:rgba(255,255,255,.2)!important}:host::ng-deep .item-content.light::placeholder{color:rgba(255,255,255,.2)!important}:host::ng-deep .item-content.dark{background-color:#161617}:host::ng-deep .item-content:-ms-input-placeholder{color:#64666c!important}:host::ng-deep .item-content.light:-ms-input-placeholder{color:gray!important}@media screen and (-ms-high-contrast:none),(-ms-high-contrast:active){:host::ng-deep .item-content:-ms-input-placeholder{color:#64666c!important}:host::ng-deep .item-content::-moz-placeholder{color:#64666c!important}:host::ng-deep .item-content::-ms-input-placeholder{color:#64666c!important}:host::ng-deep .item-content::placeholder{color:#64666c!important}}"]
            }]
    }], function () { return []; }, { disabled: [{
            type: core.Input
        }], autocomplete: [{
            type: core.Input
        }], value: [{
            type: core.Input
        }], maxLength: [{
            type: core.Input
        }], currentValue: [{
            type: core.Output
        }], onKeyUp: [{
            type: core.Output
        }], inputElement: [{
            type: core.ViewChild,
            args: ['inputElement', { read: core.ElementRef, static: true }]
        }], id: [{
            type: core.Input
        }], placeholder: [{
            type: core.Input
        }], itemContentAlignment: [{
            type: core.Input
        }], class: [{
            type: core.Input
        }], mask: [{
            type: core.Input
        }], maskSymbol: [{
            type: core.Input
        }] }); })();
        return GlSharedComponentInputTextSimpleComponent;
    }());

    var GlSharedComponentTitleLabelSimpleComponent = /** @class */ (function () {
        function GlSharedComponentTitleLabelSimpleComponent() {
            this.class = '';
            this.required = false;
            this.requiredLabel = 'Required field';
        }
        __decorate([
            core.Input()
        ], GlSharedComponentTitleLabelSimpleComponent.prototype, "labelValue", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentTitleLabelSimpleComponent.prototype, "id", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentTitleLabelSimpleComponent.prototype, "labelAlignment", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentTitleLabelSimpleComponent.prototype, "class", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentTitleLabelSimpleComponent.prototype, "required", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentTitleLabelSimpleComponent.prototype, "requiredLabel", void 0);
GlSharedComponentTitleLabelSimpleComponent.ɵfac = function GlSharedComponentTitleLabelSimpleComponent_Factory(t) { return new (t || GlSharedComponentTitleLabelSimpleComponent)(); };
GlSharedComponentTitleLabelSimpleComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GlSharedComponentTitleLabelSimpleComponent, selectors: [["gl-shared-component-title-label-simple"]], inputs: { class: "class", required: "required", requiredLabel: "requiredLabel", labelValue: "labelValue", id: "id", labelAlignment: "labelAlignment" }, decls: 3, vars: 7, consts: [["src", "../assets/img/icon/label/dot.svg", "alt", "Required fill icon", 3, "class", "title", 4, "ngIf"], ["src", "../assets/img/icon/label/dot.svg", "alt", "Required fill icon", 3, "title"]], template: function GlSharedComponentTitleLabelSimpleComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "label");
        ɵngcc0.ɵɵtext(1);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(2, GlSharedComponentTitleLabelSimpleComponent_img_2_Template, 1, 4, "img", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMapInterpolate2("header-data ", ctx.labelAlignment, " ", ctx.class, "");
        ɵngcc0.ɵɵattribute("for", ctx.id);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate1("", ctx.labelValue, "\n");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.required);
    } }, directives: [ɵngcc1.NgIf], styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);[_nghost-%COMP%] {display:flex;flex-grow:1}[_nghost-%COMP%]  .header-data{position:relative;flex-grow:1;font-family:Montserrat,sans-serif;font-weight:700;background-color:#2c2c2f;color:#fff;font-size:.4em;padding:1.25em 1em;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}[_nghost-%COMP%]  .header-data.light{background-color:rgba(0,0,0,.3)}[_nghost-%COMP%]  .header-data.dark{background-color:#111112}[_nghost-%COMP%]  .header-data.left{text-align:left}[_nghost-%COMP%]  .header-data.center{text-align:center}[_nghost-%COMP%]  .header-data.right{text-align:right}[_nghost-%COMP%]  .header-data.report{background-color:rgba(210,64,119,.8);font-size:.7em;padding:.5em}[_nghost-%COMP%]  .required-fill-dot{position:absolute;top:.5em;right:.2em;width:.3em;height:.3em;opacity:.5}"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GlSharedComponentTitleLabelSimpleComponent, [{
        type: core.Component,
        args: [{
                selector: 'gl-shared-component-title-label-simple',
                template: "<label\n  class=\"header-data {{ labelAlignment }} {{ class }}\"\n  [attr.for]=\"id\">{{ labelValue }}\n</label>\n<img\n  *ngIf=\"required\"\n  src=\"../assets/img/icon/label/dot.svg\"\n  class=\"required-fill-dot {{ class }}\"\n  [title]=\"requiredLabel\"\n  alt=\"Required fill icon\">\n",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);:host::ng-deep{display:flex;flex-grow:1}:host::ng-deep .header-data{position:relative;flex-grow:1;font-family:Montserrat,sans-serif;font-weight:700;background-color:#2c2c2f;color:#fff;font-size:.4em;padding:1.25em 1em;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host::ng-deep .header-data.light{background-color:rgba(0,0,0,.3)}:host::ng-deep .header-data.dark{background-color:#111112}:host::ng-deep .header-data.left{text-align:left}:host::ng-deep .header-data.center{text-align:center}:host::ng-deep .header-data.right{text-align:right}:host::ng-deep .header-data.report{background-color:rgba(210,64,119,.8);font-size:.7em;padding:.5em}:host::ng-deep .required-fill-dot{position:absolute;top:.5em;right:.2em;width:.3em;height:.3em;opacity:.5}"]
            }]
    }], function () { return []; }, { class: [{
            type: core.Input
        }], required: [{
            type: core.Input
        }], requiredLabel: [{
            type: core.Input
        }], labelValue: [{
            type: core.Input
        }], id: [{
            type: core.Input
        }], labelAlignment: [{
            type: core.Input
        }] }); })();
        return GlSharedComponentTitleLabelSimpleComponent;
    }());

    var GlSharedComponentInputTextLabelComponent = /** @class */ (function () {
        function GlSharedComponentInputTextLabelComponent() {
            this.disabled = false;
            this.autocomplete = false;
            this.value = null;
            this.maxLength = 255;
            this.requiredLabel = 'Required field';
            this.currentValue = new core.EventEmitter();
        }
        GlSharedComponentInputTextLabelComponent.prototype.onKeyUp = function (values) { this.currentValue.emit(values); };
        __decorate([
            core.Input()
        ], GlSharedComponentInputTextLabelComponent.prototype, "disabled", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentInputTextLabelComponent.prototype, "autocomplete", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentInputTextLabelComponent.prototype, "id", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentInputTextLabelComponent.prototype, "labelAlignment", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentInputTextLabelComponent.prototype, "labelValue", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentInputTextLabelComponent.prototype, "placeholder", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentInputTextLabelComponent.prototype, "itemContentAlignment", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentInputTextLabelComponent.prototype, "class", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentInputTextLabelComponent.prototype, "value", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentInputTextLabelComponent.prototype, "mask", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentInputTextLabelComponent.prototype, "maskSymbol", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentInputTextLabelComponent.prototype, "maxLength", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentInputTextLabelComponent.prototype, "required", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentInputTextLabelComponent.prototype, "requiredLabel", void 0);
        __decorate([
            core.Output()
        ], GlSharedComponentInputTextLabelComponent.prototype, "currentValue", void 0);
GlSharedComponentInputTextLabelComponent.ɵfac = function GlSharedComponentInputTextLabelComponent_Factory(t) { return new (t || GlSharedComponentInputTextLabelComponent)(); };
GlSharedComponentInputTextLabelComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GlSharedComponentInputTextLabelComponent, selectors: [["gl-shared-component-input-text-label"]], inputs: { disabled: "disabled", autocomplete: "autocomplete", value: "value", maxLength: "maxLength", requiredLabel: "requiredLabel", id: "id", labelAlignment: "labelAlignment", labelValue: "labelValue", placeholder: "placeholder", itemContentAlignment: "itemContentAlignment", class: "class", mask: "mask", maskSymbol: "maskSymbol", required: "required" }, outputs: { currentValue: "currentValue" }, decls: 3, vars: 18, consts: [[1, "item-container"], [3, "id", "labelValue", "labelAlignment", "required", "requiredLabel"], [3, "value", "id", "itemContentAlignment", "placeholder", "disabled", "autocomplete", "mask", "maskSymbol", "maxLength", "currentValue"]], template: function GlSharedComponentInputTextLabelComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelement(1, "gl-shared-component-title-label-simple", 1);
        ɵngcc0.ɵɵelementStart(2, "gl-shared-component-input-text-simple", 2);
        ɵngcc0.ɵɵlistener("currentValue", function GlSharedComponentInputTextLabelComponent_Template_gl_shared_component_input_text_simple_currentValue_2_listener($event) { return ctx.onKeyUp($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMap(ctx.class);
        ɵngcc0.ɵɵproperty("id", ctx.id)("labelValue", ctx.labelValue)("labelAlignment", ctx.labelAlignment)("required", ctx.required)("requiredLabel", ctx.requiredLabel);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMap(ctx.class);
        ɵngcc0.ɵɵproperty("value", ctx.value)("id", ctx.id)("itemContentAlignment", ctx.itemContentAlignment)("placeholder", ctx.placeholder)("disabled", ctx.disabled)("autocomplete", ctx.autocomplete)("mask", ctx.mask)("maskSymbol", ctx.maskSymbol)("maxLength", ctx.maxLength);
    } }, directives: [GlSharedComponentTitleLabelSimpleComponent,
        GlSharedComponentInputTextSimpleComponent], styles: ["[_nghost-%COMP%] {display:flex;flex:1 0 auto}[_nghost-%COMP%]  .item-container{position:relative;display:flex;flex-direction:column;align-items:stretch;flex:1 0 auto}[_nghost-%COMP%]  .item-container   gl-shared-component-input-text-simple{margin:0}"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GlSharedComponentInputTextLabelComponent, [{
        type: core.Component,
        args: [{
                selector: 'gl-shared-component-input-text-label',
                template: "<div class=\"item-container\">\n  <gl-shared-component-title-label-simple\n    [id]=\"id\"\n    [labelValue]=\"labelValue\"\n    [labelAlignment]=\"labelAlignment\"\n    [required]=\"required\"\n    [class]=\"class\"\n    [requiredLabel]=\"requiredLabel\"\n  ></gl-shared-component-title-label-simple>\n  <gl-shared-component-input-text-simple\n    [class]=\"class\"\n    [value]=\"value\"\n    [id]=\"id\"\n    [itemContentAlignment]=\"itemContentAlignment\"\n    [placeholder]=\"placeholder\"\n    (currentValue)=\"onKeyUp($event)\"\n    [disabled]=\"disabled\"\n    [autocomplete]=\"autocomplete\"\n\n    [mask]=\"mask\"\n    [maskSymbol]=\"maskSymbol\"\n    [maxLength]=\"maxLength\"\n  ></gl-shared-component-input-text-simple>\n</div>\n",
                styles: [":host::ng-deep{display:flex;flex:1 0 auto}:host::ng-deep .item-container{position:relative;display:flex;flex-direction:column;align-items:stretch;flex:1 0 auto}:host::ng-deep .item-container ::ng-deep gl-shared-component-input-text-simple{margin:0}"]
            }]
    }], function () { return []; }, { disabled: [{
            type: core.Input
        }], autocomplete: [{
            type: core.Input
        }], value: [{
            type: core.Input
        }], maxLength: [{
            type: core.Input
        }], requiredLabel: [{
            type: core.Input
        }], currentValue: [{
            type: core.Output
        }], id: [{
            type: core.Input
        }], labelAlignment: [{
            type: core.Input
        }], labelValue: [{
            type: core.Input
        }], placeholder: [{
            type: core.Input
        }], itemContentAlignment: [{
            type: core.Input
        }], class: [{
            type: core.Input
        }], mask: [{
            type: core.Input
        }], maskSymbol: [{
            type: core.Input
        }], required: [{
            type: core.Input
        }] }); })();
        return GlSharedComponentInputTextLabelComponent;
    }());

    var GlSharedComponentInputTextAreaSimpleComponent = /** @class */ (function () {
        function GlSharedComponentInputTextAreaSimpleComponent() {
            this.disabled = false;
            this.value = '';
            this.currentValue = new core.EventEmitter();
        }
        GlSharedComponentInputTextAreaSimpleComponent.prototype.onKeyUp = function (args) {
            var value = args.target.value;
            if (value.trim().length > 0) {
                this.textArea.nativeElement.classList.remove('required-fill');
            }
            this.currentValue.emit({ value: value });
        };
        __decorate([
            core.ViewChild('textArea', { read: core.ElementRef, static: true })
        ], GlSharedComponentInputTextAreaSimpleComponent.prototype, "textArea", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentInputTextAreaSimpleComponent.prototype, "disabled", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentInputTextAreaSimpleComponent.prototype, "id", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentInputTextAreaSimpleComponent.prototype, "labelAlignment", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentInputTextAreaSimpleComponent.prototype, "labelValue", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentInputTextAreaSimpleComponent.prototype, "placeholder", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentInputTextAreaSimpleComponent.prototype, "itemContentAlignment", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentInputTextAreaSimpleComponent.prototype, "class", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentInputTextAreaSimpleComponent.prototype, "value", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentInputTextAreaSimpleComponent.prototype, "maxLength", void 0);
        __decorate([
            core.Output()
        ], GlSharedComponentInputTextAreaSimpleComponent.prototype, "currentValue", void 0);
GlSharedComponentInputTextAreaSimpleComponent.ɵfac = function GlSharedComponentInputTextAreaSimpleComponent_Factory(t) { return new (t || GlSharedComponentInputTextAreaSimpleComponent)(); };
GlSharedComponentInputTextAreaSimpleComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GlSharedComponentInputTextAreaSimpleComponent, selectors: [["gl-shared-component-input-text-area-simple"]], viewQuery: function GlSharedComponentInputTextAreaSimpleComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(_c2, true, core.ElementRef);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.textArea = _t.first);
    } }, inputs: { disabled: "disabled", value: "value", id: "id", labelAlignment: "labelAlignment", labelValue: "labelValue", placeholder: "placeholder", itemContentAlignment: "itemContentAlignment", class: "class", maxLength: "maxLength" }, outputs: { currentValue: "currentValue" }, ngContentSelectors: _c3, decls: 4, vars: 9, consts: [[1, "item-container"], [3, "id", "placeholder", "value", "disabled", "maxLength", "keyup"], ["textArea", ""]], template: function GlSharedComponentInputTextAreaSimpleComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementStart(2, "textarea", 1, 2);
        ɵngcc0.ɵɵlistener("keyup", function GlSharedComponentInputTextAreaSimpleComponent_Template_textarea_keyup_2_listener($event) { return ctx.onKeyUp($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵclassMapInterpolate2("item-content ", ctx.itemContentAlignment, " ", ctx.class, "");
        ɵngcc0.ɵɵproperty("id", ctx.id)("placeholder", ctx.placeholder)("value", ctx.value)("disabled", ctx.disabled)("maxLength", ctx.maxLength);
    } }, styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);[_nghost-%COMP%]  .item-container .item-content::-webkit-scrollbar:horizontal{height:.5em!important}[_nghost-%COMP%]  .item-container .item-content::-webkit-scrollbar:vertical{width:.5em!important}[_nghost-%COMP%]  .item-container .item-content::-webkit-scrollbar-button{background-color:#333437!important;display:none!important}[_nghost-%COMP%]  .item-container .item-content::-webkit-scrollbar-track{background-color:green!important}[_nghost-%COMP%]  .item-container .item-content::-webkit-scrollbar-track-piece{background-color:#2c2c2f!important}[_nghost-%COMP%]  .item-container .item-content::-webkit-scrollbar-thumb{background-color:#64666c!important;border:1px solid #38393c!important}.required-fill[_ngcontent-%COMP%]{background-color:rgba(210,64,119,.3)!important;border-color:#e64949!important;color:#fff!important;transition:.2s ease-in-out}.required-fill[_ngcontent-%COMP%]::-moz-placeholder{color:rgba(255,255,255,.3)!important}.required-fill[_ngcontent-%COMP%]:-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.required-fill[_ngcontent-%COMP%]::-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.required-fill[_ngcontent-%COMP%]::placeholder{color:rgba(255,255,255,.3)!important}.error-highlight[_ngcontent-%COMP%]{background-color:rgba(210,64,119,.3)!important;border-color:#e64949!important;color:#fff!important;transition:.2s ease-in-out}.error-highlight[_ngcontent-%COMP%]::-moz-placeholder{color:rgba(255,255,255,.3)!important}.error-highlight[_ngcontent-%COMP%]:-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.error-highlight[_ngcontent-%COMP%]::-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.error-highlight[_ngcontent-%COMP%]::placeholder{color:rgba(255,255,255,.3)!important}[_nghost-%COMP%] {display:flex;flex:1 0 auto}[_nghost-%COMP%]  .item-container{position:relative;display:flex;flex-direction:column;align-items:stretch;flex:1 0 auto}[_nghost-%COMP%]  .item-container gl-shared-component-title-label-simple{flex-grow:0}[_nghost-%COMP%]  .item-container .item-content{scrollbar-face-color:#333437!important;scrollbar-shadow-color:#38393c!important;scrollbar-track-color:#2c2c2f!important;scrollbar-arrow-color:#64666c!important;font-family:Montserrat,sans-serif;font-weight:300;resize:none;padding:.8em;font-size:.45em;text-align:left;flex-grow:1;overflow-x:hidden;overflow-y:auto;background-color:#333437;border:none;color:#fff}[_nghost-%COMP%]  .item-container .item-content:focus{outline:0!important}[_nghost-%COMP%]  .item-container .item-content::-moz-placeholder{color:#64666c}[_nghost-%COMP%]  .item-container .item-content::-ms-input-placeholder{color:#64666c}[_nghost-%COMP%]  .item-container .item-content::placeholder{color:#64666c}[_nghost-%COMP%]  .item-container .item-content.light{background-color:rgba(0,0,0,.1)}[_nghost-%COMP%]  .item-container .item-content.dark{background-color:#161617}[_nghost-%COMP%]  .item-container .item-content:-ms-input-placeholder{color:#64666c!important}[_nghost-%COMP%]  .item-container .item-content.light:-ms-input-placeholder{color:rgba(255,255,255,.2)!important}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){[_nghost-%COMP%]  .item-container .scroll-wrapper{height:0%}[_nghost-%COMP%]  .item-container .scroll-wrapper .scroll-content .item-content{height:100%!important;margin-right:0}}"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GlSharedComponentInputTextAreaSimpleComponent, [{
        type: core.Component,
        args: [{
                selector: 'gl-shared-component-input-text-area-simple',
                template: "<div class=\"item-container\">\n  <ng-content></ng-content>\n  <!--suppress HtmlFormInputWithoutLabel -->\n  <textarea\n    #textArea\n    class=\"item-content {{ itemContentAlignment }} {{ class }}\"\n    [id]=\"id\"\n    [placeholder]=\"placeholder\"\n    (keyup)=\"onKeyUp($event)\"\n    [value]=\"value\"\n    [disabled]=\"disabled\"\n    [maxLength]=\"maxLength\"\n  ></textarea>\n</div>\n",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);:host::ng-deep .item-container .item-content::-webkit-scrollbar:horizontal{height:.5em!important}:host::ng-deep .item-container .item-content::-webkit-scrollbar:vertical{width:.5em!important}:host::ng-deep .item-container .item-content::-webkit-scrollbar-button{background-color:#333437!important;display:none!important}:host::ng-deep .item-container .item-content::-webkit-scrollbar-track{background-color:green!important}:host::ng-deep .item-container .item-content::-webkit-scrollbar-track-piece{background-color:#2c2c2f!important}:host::ng-deep .item-container .item-content::-webkit-scrollbar-thumb{background-color:#64666c!important;border:1px solid #38393c!important}.required-fill{background-color:rgba(210,64,119,.3)!important;border-color:#e64949!important;color:#fff!important;transition:.2s ease-in-out}.required-fill::-moz-placeholder{color:rgba(255,255,255,.3)!important}.required-fill:-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.required-fill::-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.required-fill::placeholder{color:rgba(255,255,255,.3)!important}.error-highlight{background-color:rgba(210,64,119,.3)!important;border-color:#e64949!important;color:#fff!important;transition:.2s ease-in-out}.error-highlight::-moz-placeholder{color:rgba(255,255,255,.3)!important}.error-highlight:-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.error-highlight::-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.error-highlight::placeholder{color:rgba(255,255,255,.3)!important}:host::ng-deep{display:flex;flex:1 0 auto}:host::ng-deep .item-container{position:relative;display:flex;flex-direction:column;align-items:stretch;flex:1 0 auto}:host::ng-deep .item-container gl-shared-component-title-label-simple{flex-grow:0}:host::ng-deep .item-container .item-content{scrollbar-face-color:#333437!important;scrollbar-shadow-color:#38393c!important;scrollbar-track-color:#2c2c2f!important;scrollbar-arrow-color:#64666c!important;font-family:Montserrat,sans-serif;font-weight:300;resize:none;padding:.8em;font-size:.45em;text-align:left;flex-grow:1;overflow-x:hidden;overflow-y:auto;background-color:#333437;border:none;color:#fff}:host::ng-deep .item-container .item-content:focus{outline:0!important}:host::ng-deep .item-container .item-content::-moz-placeholder{color:#64666c}:host::ng-deep .item-container .item-content::-ms-input-placeholder{color:#64666c}:host::ng-deep .item-container .item-content::placeholder{color:#64666c}:host::ng-deep .item-container .item-content.light{background-color:rgba(0,0,0,.1)}:host::ng-deep .item-container .item-content.dark{background-color:#161617}:host::ng-deep .item-container .item-content:-ms-input-placeholder{color:#64666c!important}:host::ng-deep .item-container .item-content.light:-ms-input-placeholder{color:rgba(255,255,255,.2)!important}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){:host::ng-deep .item-container .scroll-wrapper{height:0%}:host::ng-deep .item-container .scroll-wrapper .scroll-content .item-content{height:100%!important;margin-right:0}}"]
            }]
    }], function () { return []; }, { disabled: [{
            type: core.Input
        }], value: [{
            type: core.Input
        }], currentValue: [{
            type: core.Output
        }], textArea: [{
            type: core.ViewChild,
            args: ['textArea', { read: core.ElementRef, static: true }]
        }], id: [{
            type: core.Input
        }], labelAlignment: [{
            type: core.Input
        }], labelValue: [{
            type: core.Input
        }], placeholder: [{
            type: core.Input
        }], itemContentAlignment: [{
            type: core.Input
        }], class: [{
            type: core.Input
        }], maxLength: [{
            type: core.Input
        }] }); })();
        return GlSharedComponentInputTextAreaSimpleComponent;
    }());

    var GlSharedComponentInputTextAreaLabelComponent = /** @class */ (function () {
        function GlSharedComponentInputTextAreaLabelComponent() {
            this.disabled = false;
            this.value = '';
            this.requiredLabel = 'Required label';
            this.currentValue = new core.EventEmitter();
        }
        GlSharedComponentInputTextAreaLabelComponent.prototype.onKeyUp = function (values) {
            this.currentValue.emit(values);
        };
        __decorate([
            core.Input()
        ], GlSharedComponentInputTextAreaLabelComponent.prototype, "disabled", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentInputTextAreaLabelComponent.prototype, "id", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentInputTextAreaLabelComponent.prototype, "labelAlignment", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentInputTextAreaLabelComponent.prototype, "labelValue", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentInputTextAreaLabelComponent.prototype, "placeholder", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentInputTextAreaLabelComponent.prototype, "itemContentAlignment", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentInputTextAreaLabelComponent.prototype, "class", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentInputTextAreaLabelComponent.prototype, "value", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentInputTextAreaLabelComponent.prototype, "maxLength", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentInputTextAreaLabelComponent.prototype, "required", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentInputTextAreaLabelComponent.prototype, "requiredLabel", void 0);
        __decorate([
            core.Output()
        ], GlSharedComponentInputTextAreaLabelComponent.prototype, "currentValue", void 0);
GlSharedComponentInputTextAreaLabelComponent.ɵfac = function GlSharedComponentInputTextAreaLabelComponent_Factory(t) { return new (t || GlSharedComponentInputTextAreaLabelComponent)(); };
GlSharedComponentInputTextAreaLabelComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GlSharedComponentInputTextAreaLabelComponent, selectors: [["gl-shared-component-input-text-area-label"]], inputs: { disabled: "disabled", value: "value", requiredLabel: "requiredLabel", id: "id", labelAlignment: "labelAlignment", labelValue: "labelValue", placeholder: "placeholder", itemContentAlignment: "itemContentAlignment", class: "class", maxLength: "maxLength", required: "required" }, outputs: { currentValue: "currentValue" }, decls: 2, vars: 15, consts: [[3, "id", "placeholder", "itemContentAlignment", "value", "disabled", "maxLength", "currentValue"], [3, "labelAlignment", "id", "labelValue", "required", "requiredLabel"]], template: function GlSharedComponentInputTextAreaLabelComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "gl-shared-component-input-text-area-simple", 0);
        ɵngcc0.ɵɵlistener("currentValue", function GlSharedComponentInputTextAreaLabelComponent_Template_gl_shared_component_input_text_area_simple_currentValue_0_listener($event) { return ctx.onKeyUp($event); });
        ɵngcc0.ɵɵelement(1, "gl-shared-component-title-label-simple", 1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.class);
        ɵngcc0.ɵɵproperty("id", ctx.id)("placeholder", ctx.placeholder)("itemContentAlignment", ctx.itemContentAlignment)("value", ctx.value)("disabled", ctx.disabled)("maxLength", ctx.maxLength);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMap(ctx.class);
        ɵngcc0.ɵɵproperty("labelAlignment", ctx.labelAlignment)("id", ctx.id)("labelValue", ctx.labelValue)("required", ctx.required)("requiredLabel", ctx.requiredLabel);
    } }, directives: [GlSharedComponentInputTextAreaSimpleComponent,
        GlSharedComponentTitleLabelSimpleComponent], styles: ["[_nghost-%COMP%] {display:flex;flex-grow:1}"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GlSharedComponentInputTextAreaLabelComponent, [{
        type: core.Component,
        args: [{
                selector: 'gl-shared-component-input-text-area-label',
                template: "<gl-shared-component-input-text-area-simple\n  [class]=\"class\"\n  [id]=\"id\"\n  [placeholder]=\"placeholder\"\n  [itemContentAlignment]=\"itemContentAlignment\"\n  (currentValue)=\"onKeyUp($event)\"\n  [value]=\"value\"\n  [disabled]=\"disabled\"\n  [maxLength]=\"maxLength\">\n  <gl-shared-component-title-label-simple\n    [class]=\"class\"\n    [labelAlignment]=\"labelAlignment\"\n    [id]=\"id\"\n    [labelValue]=\"labelValue\"\n    [required]=\"required\"\n    [requiredLabel]=\"requiredLabel\"\n  ></gl-shared-component-title-label-simple>\n</gl-shared-component-input-text-area-simple>\n",
                styles: [":host::ng-deep{display:flex;flex-grow:1}"]
            }]
    }], function () { return []; }, { disabled: [{
            type: core.Input
        }], value: [{
            type: core.Input
        }], requiredLabel: [{
            type: core.Input
        }], currentValue: [{
            type: core.Output
        }], id: [{
            type: core.Input
        }], labelAlignment: [{
            type: core.Input
        }], labelValue: [{
            type: core.Input
        }], placeholder: [{
            type: core.Input
        }], itemContentAlignment: [{
            type: core.Input
        }], class: [{
            type: core.Input
        }], maxLength: [{
            type: core.Input
        }], required: [{
            type: core.Input
        }] }); })();
        return GlSharedComponentInputTextAreaLabelComponent;
    }());

    var GlSharedComponentModalAlertService = /** @class */ (function () {
        function GlSharedComponentModalAlertService() {
            this.isOK = true;
            this.currentValue = new rxjs.Subject();
        }
        GlSharedComponentModalAlertService.prototype.show = function (message) {
            return this.modal(true, true, message);
        };
        GlSharedComponentModalAlertService.prototype.showYesNo = function (message) {
            return this.modal(true, false, message);
        };
        GlSharedComponentModalAlertService.prototype.hide = function () {
            this.modal(false, this.isOK, this.message);
        };
        GlSharedComponentModalAlertService.prototype.onNo = function () {
            this.currentValue.next(false);
            this.resolvePromise(false);
            this.hide();
        };
        GlSharedComponentModalAlertService.prototype.onYes = function () {
            this.currentValue.next(true);
            this.resolvePromise(true);
            this.hide();
        };
        GlSharedComponentModalAlertService.prototype.onOk = function () {
            this.currentValue.next(true);
            this.resolvePromise(true);
            this.hide();
        };
        GlSharedComponentModalAlertService.prototype.modal = function (show, isOK, message) {
            var _this = this;
            if (isOK === void 0) { isOK = true; }
            if (message === void 0) { message = ''; }
            return new Promise(function (resolve) {
                _this.resolvePromise = resolve;
                _this.isOK = isOK;
                _this.message = message;
                if (show) {
                    _this.modalClass = 'hide-modal';
                    _this.showModal = show;
                    _this.modalClass = 'show-modal';
                }
                else {
                    _this.modalClass = 'hide-modal';
                    setTimeout(function () {
                        _this.showModal = false;
                        _this.message = '';
                    }, 300);
                }
            });
        };
        GlSharedComponentModalAlertService.prototype.onModalKeyUp = function (e) {
            if (e.key === 'Enter') {
                if (this.isOK) {
                    this.onOk();
                }
                else {
                    this.onYes();
                }
            }
            else if (e.key === 'Escape') {
                if (this.isOK) {
                    this.onOk();
                }
                else {
                    this.onNo();
                }
            }
        };
        GlSharedComponentModalAlertService.ɵprov = core.ɵɵdefineInjectable({ factory: function GlSharedComponentModalAlertService_Factory() { return new GlSharedComponentModalAlertService(); }, token: GlSharedComponentModalAlertService, providedIn: "root" });
GlSharedComponentModalAlertService.ɵfac = function GlSharedComponentModalAlertService_Factory(t) { return new (t || GlSharedComponentModalAlertService)(); };
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GlSharedComponentModalAlertService, [{
        type: core.Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
        return GlSharedComponentModalAlertService;
    }());

    var GlSharedComponentModalAlertComponent = /** @class */ (function () {
        function GlSharedComponentModalAlertComponent(service) {
            this.service = service;
            this.innerValueNo = 'No';
            this.innerValueYes = 'Yes';
            this.innerValueOK = 'OK';
            this.noValue = 'no';
            this.yesValue = 'yes';
            this.okValue = 'ok';
        }
        GlSharedComponentModalAlertComponent.ctorParameters = function () { return [
            { type: GlSharedComponentModalAlertService }
        ]; };
        __decorate([
            core.Input()
        ], GlSharedComponentModalAlertComponent.prototype, "title", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentModalAlertComponent.prototype, "subtitle", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentModalAlertComponent.prototype, "modalLogo", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentModalAlertComponent.prototype, "innerValueNo", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentModalAlertComponent.prototype, "innerValueYes", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentModalAlertComponent.prototype, "innerValueOK", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentModalAlertComponent.prototype, "noValue", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentModalAlertComponent.prototype, "yesValue", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentModalAlertComponent.prototype, "okValue", void 0);
GlSharedComponentModalAlertComponent.ɵfac = function GlSharedComponentModalAlertComponent_Factory(t) { return new (t || GlSharedComponentModalAlertComponent)(ɵngcc0.ɵɵdirectiveInject(GlSharedComponentModalAlertService)); };
GlSharedComponentModalAlertComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GlSharedComponentModalAlertComponent, selectors: [["gl-shared-component-modal-alert"]], inputs: { innerValueNo: "innerValueNo", innerValueYes: "innerValueYes", innerValueOK: "innerValueOK", noValue: "noValue", yesValue: "yesValue", okValue: "okValue", title: "title", subtitle: "subtitle", modalLogo: "modalLogo" }, decls: 1, vars: 1, consts: [["glAutoFocus", "", "id", "modal", "tabindex", "-1", 3, "class", "keydown", 4, "ngIf"], ["glAutoFocus", "", "id", "modal", "tabindex", "-1", 3, "keydown"], [1, "modal-main-content"], [3, "title", "subtitle", "modalLogo"], [1, "modal-message-container"], [1, "modal-message"], [1, "button-container"], ["class", "no", 3, "innerValue", "value", "click", 4, "ngIf"], ["class", "yes", 3, "innerValue", "value", "click", 4, "ngIf"], ["class", "ok", 3, "innerValue", "value", "click", 4, "ngIf"], [1, "modal-footer"], [1, "no", 3, "innerValue", "value", "click"], [1, "yes", 3, "innerValue", "value", "click"], [1, "ok", 3, "innerValue", "value", "click"]], template: function GlSharedComponentModalAlertComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, GlSharedComponentModalAlertComponent_div_0_Template, 11, 10, "div", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.service.showModal);
    } }, directives: function () { return [ɵngcc1.NgIf, CoreDirectivesAutofocusDirective,
        GlSharedComponentModalHeaderComponent,
        GlSharedComponentInputButtonSimpleComponent]; }, styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);[_nghost-%COMP%]  .modal-container{position:fixed;min-width:100vw;min-height:100vh;z-index:100000;top:0;left:0;display:flex;justify-items:center;align-items:center;height:0;-webkit-animation:.5s ease-in-out forwards show-modal;animation:.5s ease-in-out forwards show-modal;background:rgba(0,0,0,.8)}@-webkit-keyframes show-modal{from{opacity:0}to{opacity:1}}@keyframes show-modal{from{opacity:0}to{opacity:1}}[_nghost-%COMP%]  .modal-container>.modal-main-content{opacity:1!important;transition:.5s ease-in-out .5s}[_nghost-%COMP%]  .modal-container .modal-main-content{opacity:0;background:rgba(2,2,2,.5);margin:0 auto;word-wrap:break-word;display:flex;flex-direction:column;justify-content:stretch;width:90vw;max-width:36em;min-height:10em;height:1em;align-items:stretch}[_nghost-%COMP%]  .modal-container .modal-main-content .modal-message-container{display:flex;align-items:center;justify-content:center;flex-grow:1;height:-webkit-max-content;height:-moz-max-content;height:max-content;margin:1em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}[_nghost-%COMP%]  .modal-container .modal-main-content .modal-message-container .modal-message{font-family:Montserrat,sans-serif;font-weight:700;text-transform:unset;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:block;text-align:center;width:100%;font-size:.6em;color:#fff;white-space:pre-wrap}[_nghost-%COMP%]  .modal-container .modal-main-content .button-container{display:flex;justify-content:center;align-items:stretch;height:2em}[_nghost-%COMP%]  .modal-container .modal-main-content .button-container gl-shared-component-input-button-simple{margin:0 .2em;max-width:calc(100% / 3)}[_nghost-%COMP%]  .modal-container .modal-main-content .modal-footer{height:.5em;background-color:#0e0e0f;border-top:1px solid;border-image-source:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%);border-image-slice:.5;margin:.2em 0 0;width:100%}[_nghost-%COMP%]  .hide-modal{-webkit-animation:.3s ease-in-out forwards hide-modal;animation:.3s ease-in-out forwards hide-modal}@-webkit-keyframes hide-modal{from{opacity:1}to{opacity:0}}@keyframes hide-modal{from{opacity:1}to{opacity:0}}@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){[_nghost-%COMP%]  .modal-container .modal-main-content gl-shared-component-input-button-simple .default-button{max-width:calc(30vw / 3)!important;min-width:calc(30vw / 3)!important}[_nghost-%COMP%]  .modal-container .modal-main-content .modal-footer{position:relative;border-top:0 solid transparent!important}[_nghost-%COMP%]  .modal-container .modal-main-content .modal-footer::before{width:100%;height:1px;left:0;top:1px;margin-top:-1px;content:\"\";position:absolute;background:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%)}}@media screen and (min-device-width:1024px) and (orientation:landscape){[_nghost-%COMP%]  .modal-container .modal-main-content{width:30vw}[_nghost-%COMP%]  .modal-container .modal-main-content gl-shared-component-input-button-simple{margin:0 .2em;max-width:calc(30vw / 3)}}"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GlSharedComponentModalAlertComponent, [{
        type: core.Component,
        args: [{
                selector: 'gl-shared-component-modal-alert',
                template: "<div\n  *ngIf=\"service.showModal\"\n  glAutoFocus\n  (keydown)=\"service.onModalKeyUp($event)\"\n  id=\"modal\"\n  class=\"modal-container {{ service.modalClass }}\"\n  tabindex=\"-1\">\n  <div class=\"modal-main-content\">\n    <gl-shared-component-modal-header\n      [title]=\"title\"\n      [subtitle]=\"subtitle\"\n      [modalLogo]=\"modalLogo\"\n    ></gl-shared-component-modal-header>\n    <div class=\"modal-message-container\">\n      <span class=\"modal-message\">{{ service.message }}</span>\n    </div>\n    <div class=\"button-container\">\n      <gl-shared-component-input-button-simple\n        *ngIf=\"!service.isOK\"\n        class=\"no\"\n        (click)=\"service.onNo()\"\n        [innerValue]=\"innerValueNo\"\n        [value]=\"noValue\"\n      ></gl-shared-component-input-button-simple>\n      <gl-shared-component-input-button-simple\n        *ngIf=\"!service.isOK\"\n        class=\"yes\"\n        (click)=\"service.onYes()\"\n        [innerValue]=\"innerValueYes\"\n        [value]=\"yesValue\"\n      ></gl-shared-component-input-button-simple>\n      <gl-shared-component-input-button-simple\n        *ngIf=\"service.isOK\"\n        class=\"ok\"\n        (click)=\"service.onOk()\"\n        [innerValue]=\"innerValueOK\"\n        [value]=\"okValue\"\n      ></gl-shared-component-input-button-simple>\n    </div>\n    <div class=\"modal-footer\"></div>\n  </div>\n</div>\n",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);:host::ng-deep .modal-container{position:fixed;min-width:100vw;min-height:100vh;z-index:100000;top:0;left:0;display:flex;justify-items:center;align-items:center;height:0;-webkit-animation:.5s ease-in-out forwards show-modal;animation:.5s ease-in-out forwards show-modal;background:rgba(0,0,0,.8)}@-webkit-keyframes show-modal{from{opacity:0}to{opacity:1}}@keyframes show-modal{from{opacity:0}to{opacity:1}}:host::ng-deep .modal-container>.modal-main-content{opacity:1!important;transition:.5s ease-in-out .5s}:host::ng-deep .modal-container .modal-main-content{opacity:0;background:rgba(2,2,2,.5);margin:0 auto;word-wrap:break-word;display:flex;flex-direction:column;justify-content:stretch;width:90vw;max-width:36em;min-height:10em;height:1em;align-items:stretch}:host::ng-deep .modal-container .modal-main-content .modal-message-container{display:flex;align-items:center;justify-content:center;flex-grow:1;height:-webkit-max-content;height:-moz-max-content;height:max-content;margin:1em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host::ng-deep .modal-container .modal-main-content .modal-message-container .modal-message{font-family:Montserrat,sans-serif;font-weight:700;text-transform:unset;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:block;text-align:center;width:100%;font-size:.6em;color:#fff;white-space:pre-wrap}:host::ng-deep .modal-container .modal-main-content .button-container{display:flex;justify-content:center;align-items:stretch;height:2em}:host::ng-deep .modal-container .modal-main-content .button-container gl-shared-component-input-button-simple{margin:0 .2em;max-width:calc(100% / 3)}:host::ng-deep .modal-container .modal-main-content .modal-footer{height:.5em;background-color:#0e0e0f;border-top:1px solid;border-image-source:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%);border-image-slice:.5;margin:.2em 0 0;width:100%}:host::ng-deep .hide-modal{-webkit-animation:.3s ease-in-out forwards hide-modal;animation:.3s ease-in-out forwards hide-modal}@-webkit-keyframes hide-modal{from{opacity:1}to{opacity:0}}@keyframes hide-modal{from{opacity:1}to{opacity:0}}@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){:host::ng-deep .modal-container .modal-main-content gl-shared-component-input-button-simple .default-button{max-width:calc(30vw / 3)!important;min-width:calc(30vw / 3)!important}:host::ng-deep .modal-container .modal-main-content .modal-footer{position:relative;border-top:0 solid transparent!important}:host::ng-deep .modal-container .modal-main-content .modal-footer::before{width:100%;height:1px;left:0;top:1px;margin-top:-1px;content:\"\";position:absolute;background:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%)}}@media screen and (min-device-width:1024px) and (orientation:landscape){:host::ng-deep .modal-container .modal-main-content{width:30vw}:host::ng-deep .modal-container .modal-main-content gl-shared-component-input-button-simple{margin:0 .2em;max-width:calc(30vw / 3)}}"]
            }]
    }], function () { return [{ type: GlSharedComponentModalAlertService }]; }, { innerValueNo: [{
            type: core.Input
        }], innerValueYes: [{
            type: core.Input
        }], innerValueOK: [{
            type: core.Input
        }], noValue: [{
            type: core.Input
        }], yesValue: [{
            type: core.Input
        }], okValue: [{
            type: core.Input
        }], title: [{
            type: core.Input
        }], subtitle: [{
            type: core.Input
        }], modalLogo: [{
            type: core.Input
        }] }); })();
        return GlSharedComponentModalAlertComponent;
    }());

    var GlSharedComponentModalHeaderComponent = /** @class */ (function () {
        function GlSharedComponentModalHeaderComponent() {
        }
        __decorate([
            core.Input()
        ], GlSharedComponentModalHeaderComponent.prototype, "title", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentModalHeaderComponent.prototype, "subtitle", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentModalHeaderComponent.prototype, "modalLogo", void 0);
GlSharedComponentModalHeaderComponent.ɵfac = function GlSharedComponentModalHeaderComponent_Factory(t) { return new (t || GlSharedComponentModalHeaderComponent)(); };
GlSharedComponentModalHeaderComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GlSharedComponentModalHeaderComponent, selectors: [["gl-shared-component-modal-header"]], inputs: { title: "title", subtitle: "subtitle", modalLogo: "modalLogo" }, decls: 7, vars: 3, consts: [[1, "modal-title-container"], [1, "modal-title-text-container"], [1, "modal-title"], ["alt", "Header Logo", 1, "modal-logo", 3, "src"]], template: function GlSharedComponentModalHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "h2", 2);
        ɵngcc0.ɵɵtext(3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(4, "h2", 2);
        ɵngcc0.ɵɵtext(5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(6, "img", 3);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵtextInterpolate(ctx.title);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate(ctx.subtitle);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("src", ctx.modalLogo, ɵngcc0.ɵɵsanitizeUrl);
    } }, styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);[_nghost-%COMP%]  .modal-title-container{background-color:#1a1b1d;border-bottom:1px solid;border-image-source:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%);border-image-slice:.5;display:flex;justify-content:flex-start;align-items:center;padding:.5em 0;text-align:left;width:100%;font-size:.65em}[_nghost-%COMP%]  .modal-title-container .modal-logo{margin:0 .5em;height:1.5em;width:1.5em}[_nghost-%COMP%]  .modal-title-container .modal-title-text-container{display:flex;align-items:center;margin:0 1em;flex-grow:1}[_nghost-%COMP%]  .modal-title-container .modal-title-text-container .modal-title{font-family:Montserrat,sans-serif;font-weight:400;color:#64666c;text-transform:uppercase;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}[_nghost-%COMP%]  .modal-title-container .modal-title-text-container .modal-title:nth-child(1){margin:0 .3em 0 0}@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){[_nghost-%COMP%]  .modal-title-container{position:relative;border-bottom:0 solid transparent!important}[_nghost-%COMP%]  .modal-title-container::after{width:100%;height:1px;left:0;bottom:1px;margin-bottom:-1px;content:\"\";position:absolute;background:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%)}}"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GlSharedComponentModalHeaderComponent, [{
        type: core.Component,
        args: [{
                selector: 'gl-shared-component-modal-header',
                template: "<div class=\"modal-title-container\">\n  <div class=\"modal-title-text-container\">\n    <h2 class=\"modal-title\">{{ title }}</h2>\n    <h2 class=\"modal-title\">{{ subtitle }}</h2>\n  </div>\n  <img class=\"modal-logo\" [src]=\"modalLogo\" alt=\"Header Logo\">\n</div>\n",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);:host::ng-deep .modal-title-container{background-color:#1a1b1d;border-bottom:1px solid;border-image-source:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%);border-image-slice:.5;display:flex;justify-content:flex-start;align-items:center;padding:.5em 0;text-align:left;width:100%;font-size:.65em}:host::ng-deep .modal-title-container .modal-logo{margin:0 .5em;height:1.5em;width:1.5em}:host::ng-deep .modal-title-container .modal-title-text-container{display:flex;align-items:center;margin:0 1em;flex-grow:1}:host::ng-deep .modal-title-container .modal-title-text-container .modal-title{font-family:Montserrat,sans-serif;font-weight:400;color:#64666c;text-transform:uppercase;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host::ng-deep .modal-title-container .modal-title-text-container .modal-title:nth-child(1){margin:0 .3em 0 0}@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){:host::ng-deep .modal-title-container{position:relative;border-bottom:0 solid transparent!important}:host::ng-deep .modal-title-container::after{width:100%;height:1px;left:0;bottom:1px;margin-bottom:-1px;content:\"\";position:absolute;background:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%)}}"]
            }]
    }], function () { return []; }, { title: [{
            type: core.Input
        }], subtitle: [{
            type: core.Input
        }], modalLogo: [{
            type: core.Input
        }] }); })();
        return GlSharedComponentModalHeaderComponent;
    }());

    var GlSharedComponentModalLoadingService = /** @class */ (function () {
        function GlSharedComponentModalLoadingService() {
            this._defaultMessage = 'Loading... please wait...';
            this.defaultMessage = 'Loading... please wait...';
            this._loadingStatus = this.defaultMessage;
            this._showLoading = true;
        }
        GlSharedComponentModalLoadingService.prototype.checkElement = function () {
            var _this = this;
            return new Promise(function (resolve) {
                if (_this._mainLoading == null) {
                    var loadingInterval_1 = setInterval(function () {
                        _this._mainLoading = document.querySelector('.main-loading');
                        if (_this._mainLoading != null) {
                            clearInterval(loadingInterval_1);
                            resolve();
                        }
                    }, 1);
                }
                else {
                    resolve();
                }
            });
        };
        GlSharedComponentModalLoadingService.prototype.setup = function (mainLoading) {
            this._mainLoading = mainLoading;
        };
        GlSharedComponentModalLoadingService.prototype.hide = function () {
            var _this = this;
            this.checkElement().then(function () {
                _this._mainLoading.classList.add('hide-loading');
                setTimeout(function () {
                    _this._showLoading = false;
                    _this.status(null);
                }, 1100);
            });
        };
        GlSharedComponentModalLoadingService.prototype.show = function (status) {
            var _this = this;
            this.checkElement().then(function () {
                if (status != null) {
                    _this.status(status);
                }
                else {
                    _this.status(null);
                }
                _this._mainLoading.classList.remove('hide-loading');
                _this._showLoading = true;
            });
        };
        GlSharedComponentModalLoadingService.prototype.status = function (message) {
            var _this = this;
            this.checkElement().then(function () {
                setTimeout(function () {
                    if (message == null || message.trim().length === 0) {
                        if (_this.defaultMessage != null && _this.defaultMessage.length === 0) {
                            _this.defaultMessage = _this._defaultMessage;
                        }
                        _this._loadingStatus = _this.defaultMessage;
                    }
                    else {
                        _this._loadingStatus = message;
                    }
                }, 10);
            });
        };
        GlSharedComponentModalLoadingService.ɵprov = core.ɵɵdefineInjectable({ factory: function GlSharedComponentModalLoadingService_Factory() { return new GlSharedComponentModalLoadingService(); }, token: GlSharedComponentModalLoadingService, providedIn: "root" });
GlSharedComponentModalLoadingService.ɵfac = function GlSharedComponentModalLoadingService_Factory(t) { return new (t || GlSharedComponentModalLoadingService)(); };
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GlSharedComponentModalLoadingService, [{
        type: core.Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
        return GlSharedComponentModalLoadingService;
    }());

    var GlSharedComponentModalLoadingComponent = /** @class */ (function () {
        function GlSharedComponentModalLoadingComponent(service) {
            this.service = service;
            this.loaded = false;
            service.defaultMessage = this.defaultMessage;
        }
        GlSharedComponentModalLoadingComponent.prototype.ngAfterViewChecked = function () {
            var container = document.querySelector('.main-loading');
            if (container != null && !this.loaded) {
                this.service.setup(container);
                this.loaded = true;
            }
        };
        GlSharedComponentModalLoadingComponent.ctorParameters = function () { return [
            { type: GlSharedComponentModalLoadingService }
        ]; };
        __decorate([
            core.ViewChild('mainLoading', { read: core.ElementRef, static: true })
        ], GlSharedComponentModalLoadingComponent.prototype, "mainLoading", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentModalLoadingComponent.prototype, "defaultMessage", void 0);
GlSharedComponentModalLoadingComponent.ɵfac = function GlSharedComponentModalLoadingComponent_Factory(t) { return new (t || GlSharedComponentModalLoadingComponent)(ɵngcc0.ɵɵdirectiveInject(GlSharedComponentModalLoadingService)); };
GlSharedComponentModalLoadingComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GlSharedComponentModalLoadingComponent, selectors: [["gl-shared-component-modal-loading"]], viewQuery: function GlSharedComponentModalLoadingComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(_c4, true, core.ElementRef);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.mainLoading = _t.first);
    } }, inputs: { defaultMessage: "defaultMessage" }, ngContentSelectors: _c3, decls: 1, vars: 1, consts: [["class", "main-loading", 4, "ngIf"], [1, "main-loading"], ["mainLoading", ""], [1, "loading-container"], [1, "lds-facebook"], [1, "status-container"], [1, "user-content"], [1, "subtitle", "loading-status"]], template: function GlSharedComponentModalLoadingComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵtemplate(0, GlSharedComponentModalLoadingComponent_div_0_Template, 12, 1, "div", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.service._showLoading);
    } }, directives: [ɵngcc1.NgIf], styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);[_nghost-%COMP%]  .main-loading{position:fixed;width:100vw;height:100vh;z-index:999999999;top:0;left:0;background:rgba(0,0,0,.85);display:flex;justify-content:center;flex-direction:column}[_nghost-%COMP%]  .main-loading .status-container{display:flex;flex-direction:column;text-align:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:.5}[_nghost-%COMP%]  .main-loading .status-container .user-content{flex-grow:1}[_nghost-%COMP%]  .main-loading .status-container .loading-status{font-family:Montserrat,sans-serif;font-weight:300;color:#fff;font-size:.5em;width:100%;margin:1em 0 0;background:unset;white-space:pre-line}.loading-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.hide-loading[_ngcontent-%COMP%]{opacity:0;visibility:collapse;transition:1s ease-in-out,visibility 1s ease-in-out}.lds-facebook[_ngcontent-%COMP%]{display:inline-block;position:relative;width:64px;height:64px}.lds-facebook[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:inline-block;position:absolute;left:6px;width:13px;background:#fff;-webkit-animation:1.2s cubic-bezier(0,.5,.5,1) infinite lds-facebook;animation:1.2s cubic-bezier(0,.5,.5,1) infinite lds-facebook}.lds-facebook[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1){left:6px;-webkit-animation-delay:-.24s;animation-delay:-.24s}.lds-facebook[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2){left:26px;-webkit-animation-delay:-.12s;animation-delay:-.12s}.lds-facebook[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3){left:45px;-webkit-animation-delay:0s;animation-delay:0s}@-webkit-keyframes lds-facebook{0%{top:6px;height:51px}100%,50%{top:19px;height:26px}}@keyframes lds-facebook{0%{top:6px;height:51px}100%,50%{top:19px;height:26px}}"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GlSharedComponentModalLoadingComponent, [{
        type: core.Component,
        args: [{
                selector: 'gl-shared-component-modal-loading',
                template: "<div #mainLoading class=\"main-loading\" *ngIf=\"service._showLoading\">\n  <div class=\"loading-container\">\n    <div class=\"lds-facebook\"><div></div><div></div><div></div></div>\n  </div>\n  <div class=\"status-container\">\n    <div class=\"user-content\">\n      <ng-content></ng-content>\n    </div>\n    <h2 class=\"subtitle loading-status\">{{ service._loadingStatus }}</h2>\n  </div>\n</div>\n",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);:host::ng-deep .main-loading{position:fixed;width:100vw;height:100vh;z-index:999999999;top:0;left:0;background:rgba(0,0,0,.85);display:flex;justify-content:center;flex-direction:column}:host::ng-deep .main-loading .status-container{display:flex;flex-direction:column;text-align:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:.5}:host::ng-deep .main-loading .status-container .user-content{flex-grow:1}:host::ng-deep .main-loading .status-container .loading-status{font-family:Montserrat,sans-serif;font-weight:300;color:#fff;font-size:.5em;width:100%;margin:1em 0 0;background:unset;white-space:pre-line}.loading-container{display:flex;justify-content:center;align-items:center}.hide-loading{opacity:0;visibility:collapse;transition:1s ease-in-out,visibility 1s ease-in-out}.lds-facebook{display:inline-block;position:relative;width:64px;height:64px}.lds-facebook div{display:inline-block;position:absolute;left:6px;width:13px;background:#fff;-webkit-animation:1.2s cubic-bezier(0,.5,.5,1) infinite lds-facebook;animation:1.2s cubic-bezier(0,.5,.5,1) infinite lds-facebook}.lds-facebook div:nth-child(1){left:6px;-webkit-animation-delay:-.24s;animation-delay:-.24s}.lds-facebook div:nth-child(2){left:26px;-webkit-animation-delay:-.12s;animation-delay:-.12s}.lds-facebook div:nth-child(3){left:45px;-webkit-animation-delay:0s;animation-delay:0s}@-webkit-keyframes lds-facebook{0%{top:6px;height:51px}100%,50%{top:19px;height:26px}}@keyframes lds-facebook{0%{top:6px;height:51px}100%,50%{top:19px;height:26px}}"]
            }]
    }], function () { return [{ type: GlSharedComponentModalLoadingService }]; }, { mainLoading: [{
            type: core.ViewChild,
            args: ['mainLoading', { read: core.ElementRef, static: true }]
        }], defaultMessage: [{
            type: core.Input
        }] }); })();
        return GlSharedComponentModalLoadingComponent;
    }());

    var GlSharedComponentTitlePageComponent = /** @class */ (function () {
        function GlSharedComponentTitlePageComponent() {
        }
        __decorate([
            core.Input()
        ], GlSharedComponentTitlePageComponent.prototype, "title", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentTitlePageComponent.prototype, "subtitle", void 0);
GlSharedComponentTitlePageComponent.ɵfac = function GlSharedComponentTitlePageComponent_Factory(t) { return new (t || GlSharedComponentTitlePageComponent)(); };
GlSharedComponentTitlePageComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GlSharedComponentTitlePageComponent, selectors: [["gl-shared-component-title-page"]], inputs: { title: "title", subtitle: "subtitle" }, decls: 6, vars: 2, consts: [[1, "page-title"], [1, "title-container"], [1, "title"], [1, "subtitle"]], template: function GlSharedComponentTitlePageComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "h1", 2);
        ɵngcc0.ɵɵtext(3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(4, "h2", 3);
        ɵngcc0.ɵɵtext(5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵtextInterpolate(ctx.title);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate(ctx.subtitle);
    } }, styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);.page-title[_ngcontent-%COMP%]{margin:0 .5em;flex-grow:1;align-self:flex-start}.page-title[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]{display:flex}.page-title[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-family:Montserrat,sans-serif;font-weight:700}.page-title[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%], .page-title[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{text-transform:uppercase;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:#fff;font-size:1.5em}.page-title[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{font-family:Montserrat,sans-serif;font-weight:100;margin:0 0 0 .3em}"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GlSharedComponentTitlePageComponent, [{
        type: core.Component,
        args: [{
                selector: 'gl-shared-component-title-page',
                template: "<div class=\"page-title\">\n  <div class=\"title-container\">\n    <h1 class=\"title\">{{ title }}</h1>\n    <h2 class=\"subtitle\">{{ subtitle }}</h2>\n  </div>\n</div>\n",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);.page-title{margin:0 .5em;flex-grow:1;align-self:flex-start}.page-title .title-container{display:flex}.page-title .title-container .title{font-family:Montserrat,sans-serif;font-weight:700}.page-title .title-container .subtitle,.page-title .title-container .title{text-transform:uppercase;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:#fff;font-size:1.5em}.page-title .title-container .subtitle{font-family:Montserrat,sans-serif;font-weight:100;margin:0 0 0 .3em}"]
            }]
    }], function () { return []; }, { title: [{
            type: core.Input
        }], subtitle: [{
            type: core.Input
        }] }); })();
        return GlSharedComponentTitlePageComponent;
    }());

    var GlSharedComponentTitleLabelButtonSimpleComponent = /** @class */ (function () {
        function GlSharedComponentTitleLabelButtonSimpleComponent() {
            this.required = false;
            this.requiredFieldDescription = 'Required field';
        }
        __decorate([
            core.Input()
        ], GlSharedComponentTitleLabelButtonSimpleComponent.prototype, "id", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentTitleLabelButtonSimpleComponent.prototype, "alt", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentTitleLabelButtonSimpleComponent.prototype, "src", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentTitleLabelButtonSimpleComponent.prototype, "required", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentTitleLabelButtonSimpleComponent.prototype, "class", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentTitleLabelButtonSimpleComponent.prototype, "requiredFieldDescription", void 0);
GlSharedComponentTitleLabelButtonSimpleComponent.ɵfac = function GlSharedComponentTitleLabelButtonSimpleComponent_Factory(t) { return new (t || GlSharedComponentTitleLabelButtonSimpleComponent)(); };
GlSharedComponentTitleLabelButtonSimpleComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GlSharedComponentTitleLabelButtonSimpleComponent, selectors: [["gl-shared-component-title-label-button-simple"]], inputs: { required: "required", requiredFieldDescription: "requiredFieldDescription", id: "id", alt: "alt", src: "src", class: "class" }, decls: 4, vars: 8, consts: [[1, "tooltip", "top"], [1, "label-button", 3, "id", "src", "alt"], ["src", "../assets/img/icon/label/dot.svg", "class", "required-fill-dot", "alt", "Required fill icon", 3, "title", 4, "ngIf"], ["src", "../assets/img/icon/label/dot.svg", "alt", "Required fill icon", 1, "required-fill-dot", 3, "title"]], template: function GlSharedComponentTitleLabelButtonSimpleComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵelementStart(1, "div", 0);
        ɵngcc0.ɵɵelement(2, "img", 1);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(3, GlSharedComponentTitleLabelButtonSimpleComponent_img_3_Template, 1, 1, "img", 2);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMapInterpolate1("label-button-container ", ctx.class, "");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵattribute("alt", ctx.alt);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("id", ctx.id)("src", ctx.src, ɵngcc0.ɵɵsanitizeUrl)("alt", ctx.alt);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.required);
    } }, directives: [ɵngcc1.NgIf], styles: [".required-fill[_ngcontent-%COMP%]{background-color:rgba(210,64,119,.3)!important;border-color:#e64949!important;color:#fff!important;transition:.2s ease-in-out}.required-fill[_ngcontent-%COMP%]::-moz-placeholder{color:rgba(255,255,255,.3)!important}.required-fill[_ngcontent-%COMP%]:-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.required-fill[_ngcontent-%COMP%]::-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.required-fill[_ngcontent-%COMP%]::placeholder{color:rgba(255,255,255,.3)!important}.error-highlight[_ngcontent-%COMP%]{background-color:rgba(210,64,119,.3)!important;border-color:#e64949!important;color:#fff!important;transition:.2s ease-in-out}.error-highlight[_ngcontent-%COMP%]::-moz-placeholder{color:rgba(255,255,255,.3)!important}.error-highlight[_ngcontent-%COMP%]:-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.error-highlight[_ngcontent-%COMP%]::-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.error-highlight[_ngcontent-%COMP%]::placeholder{color:rgba(255,255,255,.3)!important}.label-button-container[_ngcontent-%COMP%]{display:flex;position:absolute;top:.19em;right:.2em}.label-button-container[_ngcontent-%COMP%]   .label-button[_ngcontent-%COMP%]{cursor:pointer;height:1em;width:1em;margin:0 .1em}.label-button-container[_ngcontent-%COMP%]   .label-button[_ngcontent-%COMP%]:hover{transform:scale(1.1);opacity:1;transition:.2s ease-in-out}.label-button-container[_ngcontent-%COMP%]   .label-button[_ngcontent-%COMP%]:not(hover){transform:scale(1);opacity:.5;transition:.2s ease-in-out}@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){[_nghost-%COMP%] {height:.5em}}"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GlSharedComponentTitleLabelButtonSimpleComponent, [{
        type: core.Component,
        args: [{
                selector: 'gl-shared-component-title-label-button-simple',
                template: "<div class=\"label-button-container {{ class }}\">\n  <div\n    [attr.alt]=\"alt\"\n    class=\"tooltip top\">\n    <img\n      class=\"label-button\"\n      [id]=\"id\"\n      [src]=\"src\"\n      [alt]=\"alt\">\n  </div>\n  <img\n    *ngIf=\"required\"\n    src=\"../assets/img/icon/label/dot.svg\"\n    class=\"required-fill-dot\"\n    [title]=\"requiredFieldDescription\"\n    alt=\"Required fill icon\">\n</div>\n",
                styles: [".required-fill{background-color:rgba(210,64,119,.3)!important;border-color:#e64949!important;color:#fff!important;transition:.2s ease-in-out}.required-fill::-moz-placeholder{color:rgba(255,255,255,.3)!important}.required-fill:-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.required-fill::-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.required-fill::placeholder{color:rgba(255,255,255,.3)!important}.error-highlight{background-color:rgba(210,64,119,.3)!important;border-color:#e64949!important;color:#fff!important;transition:.2s ease-in-out}.error-highlight::-moz-placeholder{color:rgba(255,255,255,.3)!important}.error-highlight:-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.error-highlight::-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.error-highlight::placeholder{color:rgba(255,255,255,.3)!important}.label-button-container{display:flex;position:absolute;top:.19em;right:.2em}.label-button-container .label-button{cursor:pointer;height:1em;width:1em;margin:0 .1em}.label-button-container .label-button:hover{transform:scale(1.1);opacity:1;transition:.2s ease-in-out}.label-button-container .label-button:not(hover){transform:scale(1);opacity:.5;transition:.2s ease-in-out}@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){:host::ng-deep{height:.5em}}"]
            }]
    }], function () { return []; }, { required: [{
            type: core.Input
        }], requiredFieldDescription: [{
            type: core.Input
        }], id: [{
            type: core.Input
        }], alt: [{
            type: core.Input
        }], src: [{
            type: core.Input
        }], class: [{
            type: core.Input
        }] }); })();
        return GlSharedComponentTitleLabelButtonSimpleComponent;
    }());

    var GlSharedComponentTitleLabelButtonContainerComponent = /** @class */ (function () {
        function GlSharedComponentTitleLabelButtonContainerComponent() {
            this.required = false;
            this.requiredFieldDescription = 'Required field';
        }
        __decorate([
            core.Input()
        ], GlSharedComponentTitleLabelButtonContainerComponent.prototype, "labelValue", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentTitleLabelButtonContainerComponent.prototype, "id", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentTitleLabelButtonContainerComponent.prototype, "labelAlignment", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentTitleLabelButtonContainerComponent.prototype, "required", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentTitleLabelButtonContainerComponent.prototype, "class", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentTitleLabelButtonContainerComponent.prototype, "requiredFieldDescription", void 0);
GlSharedComponentTitleLabelButtonContainerComponent.ɵfac = function GlSharedComponentTitleLabelButtonContainerComponent_Factory(t) { return new (t || GlSharedComponentTitleLabelButtonContainerComponent)(); };
GlSharedComponentTitleLabelButtonContainerComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GlSharedComponentTitleLabelButtonContainerComponent, selectors: [["gl-shared-component-title-label-button-container"]], inputs: { required: "required", requiredFieldDescription: "requiredFieldDescription", labelValue: "labelValue", id: "id", labelAlignment: "labelAlignment", class: "class" }, ngContentSelectors: _c3, decls: 4, vars: 10, consts: [[3, "labelValue", "id", "labelAlignment", "required", "requiredLabel"], [1, "label-button-container"]], template: function GlSharedComponentTitleLabelButtonContainerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵelement(1, "gl-shared-component-title-label-simple", 0);
        ɵngcc0.ɵɵelementStart(2, "div", 1);
        ɵngcc0.ɵɵprojection(3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMapInterpolate1("label-with-button-container ", ctx.class, "");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMap(ctx.class);
        ɵngcc0.ɵɵproperty("labelValue", ctx.labelValue)("id", ctx.id)("labelAlignment", ctx.labelAlignment)("required", ctx.required)("requiredLabel", ctx.requiredFieldDescription);
    } }, directives: [GlSharedComponentTitleLabelSimpleComponent], styles: ["[_nghost-%COMP%] {display:flex;flex-grow:1}[_nghost-%COMP%]  .label-with-button-container{display:flex;flex-grow:1;background-color:#2c2c2f}[_nghost-%COMP%]  .label-with-button-container .label-button-container{display:flex;flex-grow:0;margin:0 .2em 0 0}[_nghost-%COMP%]  .label-with-button-container .label-button-container .button{margin:0 0 0 .2em}[_nghost-%COMP%]  .label-with-button-container.light{background-color:rgba(0,0,0,.3)}[_nghost-%COMP%]  .label-with-button-container.dark{background-color:#111112}"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GlSharedComponentTitleLabelButtonContainerComponent, [{
        type: core.Component,
        args: [{
                selector: 'gl-shared-component-title-label-button-container',
                template: "<div class=\"label-with-button-container {{ class }}\">\n  <gl-shared-component-title-label-simple\n    [labelValue]=\"labelValue\"\n    [id]=\"id\"\n    [labelAlignment]=\"labelAlignment\"\n    [required]=\"required\"\n    [class]=\"class\"\n    [requiredLabel]=\"requiredFieldDescription\"\n  ></gl-shared-component-title-label-simple>\n  <div class=\"label-button-container\">\n    <ng-content></ng-content>\n  </div>\n</div>\n",
                styles: [":host::ng-deep{display:flex;flex-grow:1}:host::ng-deep .label-with-button-container{display:flex;flex-grow:1;background-color:#2c2c2f}:host::ng-deep .label-with-button-container .label-button-container{display:flex;flex-grow:0;margin:0 .2em 0 0}:host::ng-deep .label-with-button-container .label-button-container .button{margin:0 0 0 .2em}:host::ng-deep .label-with-button-container.light{background-color:rgba(0,0,0,.3)}:host::ng-deep .label-with-button-container.dark{background-color:#111112}"]
            }]
    }], function () { return []; }, { required: [{
            type: core.Input
        }], requiredFieldDescription: [{
            type: core.Input
        }], labelValue: [{
            type: core.Input
        }], id: [{
            type: core.Input
        }], labelAlignment: [{
            type: core.Input
        }], class: [{
            type: core.Input
        }] }); })();
        return GlSharedComponentTitleLabelButtonContainerComponent;
    }());

    var GlSharedComponentMenuBackgroundComponent = /** @class */ (function () {
        function GlSharedComponentMenuBackgroundComponent() {
        }
GlSharedComponentMenuBackgroundComponent.ɵfac = function GlSharedComponentMenuBackgroundComponent_Factory(t) { return new (t || GlSharedComponentMenuBackgroundComponent)(); };
GlSharedComponentMenuBackgroundComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GlSharedComponentMenuBackgroundComponent, selectors: [["gl-shared-component-menu-background"]], decls: 1, vars: 0, consts: [[1, "menu-background"]], template: function GlSharedComponentMenuBackgroundComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelement(0, "div", 0);
    } }, styles: ["[_nghost-%COMP%]  .menu-background{background-color:rgba(0,0,0,.3);position:fixed;width:100vw;height:100vh}"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GlSharedComponentMenuBackgroundComponent, [{
        type: core.Component,
        args: [{
                selector: 'gl-shared-component-menu-background',
                template: "<div class=\"menu-background\"></div>\n",
                styles: [":host::ng-deep .menu-background{background-color:rgba(0,0,0,.3);position:fixed;width:100vw;height:100vh}"]
            }]
    }], function () { return []; }, null); })();
        return GlSharedComponentMenuBackgroundComponent;
    }());

    var GlSharedComponentMenuService = /** @class */ (function () {
        function GlSharedComponentMenuService() {
            this.menuHidden = new rxjs.Subject();
            this.opened = false;
        }
        GlSharedComponentMenuService.prototype.ngOnDestroy = function () {
            this.menuHidden.observers.map(function (x) { return x.complete(); });
        };
        GlSharedComponentMenuService.prototype.initialize = function (container, background, router) {
            this.container = container;
            this.background = background;
            this.router = router;
            this.menuHidden.next(true);
        };
        GlSharedComponentMenuService.prototype.close = function (event) {
            event.preventDefault();
            this.container.classList.remove('menu-active');
            this.background.classList.remove('visible-background');
            this.menuHidden.next(true);
            this.opened = false;
            return false;
        };
        GlSharedComponentMenuService.prototype.open = function (event) {
            event.preventDefault();
            this.container.classList.add('menu-active');
            this.background.classList.add('visible-background');
            this.menuHidden.next(false);
            this.opened = true;
            return true;
        };
        GlSharedComponentMenuService.prototype.goToSettings = function (url, target) {
            if (target === void 0) { target = '_blank'; }
            window.open(url, target);
        };
        GlSharedComponentMenuService.prototype.backgroundClick = function (event) {
            if (this.opened) {
                this.close(event);
            }
        };
        GlSharedComponentMenuService.ɵprov = core.ɵɵdefineInjectable({ factory: function GlSharedComponentMenuService_Factory() { return new GlSharedComponentMenuService(); }, token: GlSharedComponentMenuService, providedIn: "root" });
GlSharedComponentMenuService.ɵfac = function GlSharedComponentMenuService_Factory(t) { return new (t || GlSharedComponentMenuService)(); };
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GlSharedComponentMenuService, [{
        type: core.Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
        return GlSharedComponentMenuService;
    }());

    var GlSharedComponentMenuComponent = /** @class */ (function () {
        function GlSharedComponentMenuComponent(service, router) {
            this.service = service;
            this.router = router;
            this.settingsTarget = '_blank';
            this.menuLogo = '../assets/img/logo/glaucio-logo-colored.svg';
            this.menuBottomVersion = '1.0.0';
            this.menuPosition = 'right';
            this.closeButton = '../assets/img/icon/side-menu/close.svg';
            this.settingsButton = '../assets/img/icon/side-menu/admin-settings.svg';
        }
        GlSharedComponentMenuComponent.prototype.ngOnInit = function () {
            this.service.initialize(this.container.nativeElement, this.background.nativeElement, this.router);
        };
        GlSharedComponentMenuComponent.ctorParameters = function () { return [
            { type: GlSharedComponentMenuService },
            { type: router.Router }
        ]; };
        __decorate([
            core.ViewChild('container', { static: true, read: core.ElementRef })
        ], GlSharedComponentMenuComponent.prototype, "container", void 0);
        __decorate([
            core.ViewChild('background', { static: true, read: core.ElementRef })
        ], GlSharedComponentMenuComponent.prototype, "background", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentMenuComponent.prototype, "title", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentMenuComponent.prototype, "subtitle", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentMenuComponent.prototype, "systemVersion", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentMenuComponent.prototype, "menuItems", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentMenuComponent.prototype, "showSettings", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentMenuComponent.prototype, "className", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentMenuComponent.prototype, "settingsUrl", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentMenuComponent.prototype, "settingsTarget", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentMenuComponent.prototype, "menuLogo", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentMenuComponent.prototype, "menuBottomTitle", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentMenuComponent.prototype, "menuBottomVersion", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentMenuComponent.prototype, "menuPosition", void 0);
GlSharedComponentMenuComponent.ɵfac = function GlSharedComponentMenuComponent_Factory(t) { return new (t || GlSharedComponentMenuComponent)(ɵngcc0.ɵɵdirectiveInject(GlSharedComponentMenuService), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.Router)); };
GlSharedComponentMenuComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GlSharedComponentMenuComponent, selectors: [["gl-shared-component-menu"]], viewQuery: function GlSharedComponentMenuComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(_c5, true, core.ElementRef);
        ɵngcc0.ɵɵstaticViewQuery(_c6, true, core.ElementRef);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.container = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.background = _t.first);
    } }, inputs: { settingsTarget: "settingsTarget", menuLogo: "menuLogo", menuBottomVersion: "menuBottomVersion", menuPosition: "menuPosition", title: "title", subtitle: "subtitle", systemVersion: "systemVersion", menuItems: "menuItems", showSettings: "showSettings", className: "className", settingsUrl: "settingsUrl", menuBottomTitle: "menuBottomTitle" }, decls: 24, vars: 12, consts: [[3, "click"], ["background", ""], ["container", ""], [1, "menu-nav-container"], [1, "menu-content"], [1, "menu-header"], [1, "menu-top-icons-container"], ["id", "close-menu-button", "alt", "Close menu button", 1, "menu-icons", "close-menu", 3, "src", "click"], ["id", "settings-menu-button", "class", "menu-icons settings-menu", "alt", "Settings menu button", 3, "src", "click", 4, "ngIf"], [1, "menu-header-title"], [1, "title"], [1, "subtitle"], [3, "absolute", "alt", "src", "routerLink", "href", "content", "itemClass", 4, "ngFor", "ngForOf"], [1, "logo-main-container"], [1, "logo-container"], ["alt", "Menu Logo", 1, "main-logo", 3, "src"], [1, "main-logo-title"], ["id", "settings-menu-button", "alt", "Settings menu button", 1, "menu-icons", "settings-menu", 3, "src", "click"], [3, "absolute", "alt", "src", "routerLink", "href", "content", "itemClass"]], template: function GlSharedComponentMenuComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "gl-shared-component-menu-background", 0, 1);
        ɵngcc0.ɵɵlistener("click", function GlSharedComponentMenuComponent_Template_gl_shared_component_menu_background_click_0_listener($event) { return ctx.service.backgroundClick($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(2, "div", null, 2);
        ɵngcc0.ɵɵelementStart(4, "nav", 3);
        ɵngcc0.ɵɵelementStart(5, "ul", 4);
        ɵngcc0.ɵɵelementStart(6, "li");
        ɵngcc0.ɵɵelementStart(7, "div", 5);
        ɵngcc0.ɵɵelementStart(8, "div", 6);
        ɵngcc0.ɵɵelementStart(9, "img", 7);
        ɵngcc0.ɵɵlistener("click", function GlSharedComponentMenuComponent_Template_img_click_9_listener($event) { return ctx.service.close($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(10, GlSharedComponentMenuComponent_img_10_Template, 1, 1, "img", 8);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(11, "div", 9);
        ɵngcc0.ɵɵelementStart(12, "h1", 10);
        ɵngcc0.ɵɵtext(13);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(14, "h2", 11);
        ɵngcc0.ɵɵtext(15);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(16, GlSharedComponentMenuComponent_gl_shared_component_menu_item_16_Template, 1, 7, "gl-shared-component-menu-item", 12);
        ɵngcc0.ɵɵelementStart(17, "li", 13);
        ɵngcc0.ɵɵelementStart(18, "div", 14);
        ɵngcc0.ɵɵelement(19, "img", 15);
        ɵngcc0.ɵɵelementStart(20, "span", 16);
        ɵngcc0.ɵɵtext(21);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(22, "span", 16);
        ɵngcc0.ɵɵtext(23);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵclassMapInterpolate2("menu-container ", ctx.className, " ", ctx.menuPosition === "left" ? "left" : "right", "");
        ɵngcc0.ɵɵadvance(7);
        ɵngcc0.ɵɵproperty("src", ctx.closeButton, ɵngcc0.ɵɵsanitizeUrl);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showSettings);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵtextInterpolate(ctx.title);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate(ctx.subtitle);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.menuItems);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("src", ctx.menuLogo, ɵngcc0.ɵɵsanitizeUrl);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate(ctx.menuBottomTitle);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate(ctx.menuBottomVersion == null ? "Version: " + ctx.systemVersion : ctx.menuBottomVersion);
    } }, directives: function () { return [GlSharedComponentMenuBackgroundComponent, ɵngcc1.NgIf, ɵngcc1.NgForOf, GlSharedComponentMenuItemComponent, ɵngcc2.RouterLink]; }, styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);[_nghost-%COMP%]  .menu-container{border-top:.3em solid;border-image-source:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%);border-image-slice:.5;border-bottom:0 solid transparent!important;background:0 0/cover #1a1b1d;position:fixed;top:0;bottom:0;overflow:hidden;width:85vw;max-width:17em;min-width:17em;z-index:10000;flex-grow:1;display:flex;height:100vh}[_nghost-%COMP%]  .menu-container::after{width:100%;height:.7em;left:0;bottom:.7em;margin-bottom:-.7em;content:\"\";position:absolute;background:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%)}[_nghost-%COMP%]  .menu-container.left{left:-110%;transition:left .5s ease-in-out}[_nghost-%COMP%]  .menu-container.right{right:-110%;transition:right .5s ease-in-out}[_nghost-%COMP%]  .menu-container .a{display:block;min-height:3em}[_nghost-%COMP%]  .menu-container .menu-nav-container{overflow:auto;scrollbar-width:none;max-height:100%;flex-grow:1;display:flex}[_nghost-%COMP%]  .menu-container .menu-nav-container .menu-content{display:flex;flex-direction:column;flex-grow:1;position:relative}[_nghost-%COMP%]  .menu-container .menu-nav-container .menu-content .menu-header{display:flex;flex-direction:column;margin:.5em 1em 1em .5em}[_nghost-%COMP%]  .menu-container .menu-nav-container .menu-content .menu-header .menu-top-icons-container{display:flex;margin:0 0 1.5em}[_nghost-%COMP%]  .menu-container .menu-nav-container .menu-content .menu-header .menu-top-icons-container .close-menu, [_nghost-%COMP%]  .menu-container .menu-nav-container .menu-content .menu-header .menu-top-icons-container .settings-menu{cursor:pointer;height:1.5em;width:1.5em}[_nghost-%COMP%]  .menu-container .menu-nav-container .menu-content .menu-header .menu-top-icons-container .close-menu:active, [_nghost-%COMP%]  .menu-container .menu-nav-container .menu-content .menu-header .menu-top-icons-container .close-menu:hover, [_nghost-%COMP%]  .menu-container .menu-nav-container .menu-content .menu-header .menu-top-icons-container .settings-menu:active, [_nghost-%COMP%]  .menu-container .menu-nav-container .menu-content .menu-header .menu-top-icons-container .settings-menu:hover{opacity:1;-webkit-animation:.4s ease-in-out forwards increase-decrease;animation:.4s ease-in-out forwards increase-decrease}[_nghost-%COMP%]  .menu-container .menu-nav-container .menu-content .menu-header .menu-top-icons-container .close-menu{margin:0 .2em 0 0}[_nghost-%COMP%]  .menu-container .menu-nav-container .menu-content .menu-header .menu-header-title .subtitle, [_nghost-%COMP%]  .menu-container .menu-nav-container .menu-content .menu-header .menu-header-title .title{text-transform:uppercase;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:#fff;margin:0}[_nghost-%COMP%]  .menu-container .menu-nav-container .menu-content .menu-header .menu-header-title .title{font-family:Montserrat,sans-serif;font-weight:700;font-size:.9em;display:none}[_nghost-%COMP%]  .menu-container .menu-nav-container .menu-content .menu-header .menu-header-title .subtitle{font-family:Montserrat,sans-serif;font-weight:100;font-size:1.5em}[_nghost-%COMP%]  .menu-container .menu-nav-container .menu-content .admin-settings{visibility:collapse}[_nghost-%COMP%]  .menu-container .menu-nav-container .menu-content .menu-item-container{display:flex;flex-direction:column;font-size:.8em;background-color:rgba(255,255,255,.3)}[_nghost-%COMP%]  .menu-container .menu-nav-container .menu-content .menu-item-container .menu-item{min-height:3em;font-size:.8em;display:flex;align-items:center;padding:.2em;transition:.2s ease-in-out}[_nghost-%COMP%]  .menu-container .menu-nav-container .menu-content .menu-item-container .menu-item:nth-child(n+2){border-top:1px solid;border-image-source:linear-gradient(90deg,transparent 15%,rgba(255,255,255,.1) 15.01%,rgba(255,255,255,.05) 98%,transparent 98%);border-image-slice:1}[_nghost-%COMP%]  .menu-container .menu-nav-container .menu-content .menu-item-container .menu-item:hover{background-color:rgba(75,77,82,.3)}[_nghost-%COMP%]  .menu-container .menu-nav-container .menu-content .menu-item-container .menu-icons{margin:0 0 0 .7em;height:1.8em;width:1.8em;opacity:.5}[_nghost-%COMP%]  .menu-container .menu-nav-container .menu-content .menu-item-container a{color:rgba(255,255,255,.6);padding:.8em;flex-grow:1;text-decoration:none}[_nghost-%COMP%]  .menu-container .menu-nav-container .menu-content .menu-social-network{display:flex;justify-content:center;margin:3em 0 0;flex-grow:1;height:100%;align-items:flex-end}[_nghost-%COMP%]  .menu-container .menu-nav-container .menu-content .menu-social-network .menu-icons{height:2em;width:2em;margin:.2em}[_nghost-%COMP%]  .menu-container .menu-nav-container .logo-container{display:flex;flex-direction:column;align-items:center;bottom:5vh;position:absolute;width:100%}[_nghost-%COMP%]  .menu-container .menu-nav-container .logo-container .main-logo{height:2em;width:2em}[_nghost-%COMP%]  .menu-container .menu-nav-container .logo-container .main-logo-title{color:#fff;font-size:.4em;margin:1em 0 0}[_nghost-%COMP%]  .show-admin-settings{visibility:visible!important}[_nghost-%COMP%]  .menu-container.menu-active.left{left:0}[_nghost-%COMP%]  .menu-container.menu-active.right{right:0}[_nghost-%COMP%]  .menu-background{opacity:0;z-index:-100}[_nghost-%COMP%]  .visible-background{width:100%;height:100%;background:rgba(0,0,0,.6);opacity:1;position:fixed;top:0;z-index:999;transition:opacity 1s ease-in-out}[_nghost-%COMP%]  .hide-subtitle{opacity:0;visibility:collapse;margin:0;padding:0;transition:.25s ease-in-out}[_nghost-%COMP%]  .show-subtitle{opacity:1;visibility:visible;transition:.25s ease-in-out .4s}[_nghost-%COMP%]  .hide-subtitle-container{-webkit-animation:.4s ease-in-out forwards hide-subtitle;animation:.4s ease-in-out forwards hide-subtitle}[_nghost-%COMP%]  .show-subtitle-container{-webkit-animation:.4s ease-in-out forwards show-subtitle;animation:.4s ease-in-out forwards show-subtitle}[_nghost-%COMP%]  .collapsed-menu .expand{transform:rotate(0);transition:.4s ease-in-out}[_nghost-%COMP%]  .collapsed-menu .menu-icons{-webkit-animation:.4s ease-in-out forwards decrease-increase;animation:.4s ease-in-out forwards decrease-increase}[_nghost-%COMP%]  .expanded-menu .expand{transform:rotate(-180deg);transition:.4s ease-in-out}[_nghost-%COMP%]  .expanded-menu .menu-icons{-webkit-animation:.4s ease-in-out forwards increase-decrease;animation:.4s ease-in-out forwards increase-decrease}[_nghost-%COMP%]  .menu-container.dark{border-left:1px solid #38393c;border-top:.3em solid rgba(210,64,119,.7);border-image-source:none}[_nghost-%COMP%]  .menu-container.translucid{background:rgba(255,255,255,.05);border-left:1px solid rgba(255,255,255,.05);border-top:.3em solid rgba(255,255,255,.1);border-image-source:none}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){[_nghost-%COMP%]  .menu-container{border-top:0 solid transparent!important;padding-top:.2em;max-height:unset}[_nghost-%COMP%]  .menu-container::before{width:100%;height:.2em;left:0;top:.2em;margin-top:-.2em;content:\"\";position:absolute;background:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%)}[_nghost-%COMP%]  .menu-container .menu-nav-container .logo-main-container{position:fixed;bottom:2vh;display:flex;flex-direction:column;align-items:center;width:13vw}[_nghost-%COMP%]  .menu-container .menu-nav-container .logo-main-container .logo-container{display:flex;flex-direction:column;align-items:center;bottom:2vh;position:absolute;width:100%}[_nghost-%COMP%]  .menu-container .menu-nav-container .logo-main-container .logo-container .main-logo{height:2em;width:2em}[_nghost-%COMP%]  .menu-container .menu-nav-container .logo-main-container .logo-container .main-logo-title{display:block;color:#fff;font-size:.4em;margin:1em 0 0}}"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GlSharedComponentMenuComponent, [{
        type: core.Component,
        args: [{
                selector: 'gl-shared-component-menu',
                template: "<gl-shared-component-menu-background\n  #background\n  (click)=\"service.backgroundClick($event)\"\n></gl-shared-component-menu-background>\n<div #container class=\"menu-container {{ className }} {{ menuPosition === 'left' ? 'left' : 'right' }}\">\n  <nav class=\"menu-nav-container\">\n    <ul class=\"menu-content\">\n      <li>\n        <div class=\"menu-header\">\n          <div class=\"menu-top-icons-container\">\n            <img id=\"close-menu-button\"\n               (click)=\"service.close($event)\"\n               [src]=\"closeButton\"\n               class=\"menu-icons close-menu\"\n               alt=\"Close menu button\">\n            <img\n              *ngIf=\"showSettings\"\n              id=\"settings-menu-button\"\n              (click)=\"service.goToSettings(settingsUrl, settingsTarget)\"\n              [src]=\"settingsButton\"\n              class=\"menu-icons settings-menu\"\n              alt=\"Settings menu button\">\n          </div>\n          <div class=\"menu-header-title\">\n            <h1 class=\"title\">{{ title }}</h1>\n            <h2 class=\"subtitle\">{{ subtitle }}</h2>\n          </div>\n        </div>\n      </li>\n      <gl-shared-component-menu-item\n        *ngFor=\"let menuItem of menuItems\"\n        [absolute]=\"menuItem.absolute\"\n        [alt]=\"menuItem.alt\"\n        [src]=\"menuItem.src\"\n        [routerLink]=\"menuItem.href\"\n        [href]=\"menuItem.href\"\n        [content]=\"menuItem.content\"\n        [itemClass]=\"menuItem.class\"\n      ></gl-shared-component-menu-item>\n      <li class=\"logo-main-container\">\n        <div class=\"logo-container\">\n          <img class=\"main-logo\" [src]=\"menuLogo\" alt=\"Menu Logo\"/>\n          <span class=\"main-logo-title\">{{ menuBottomTitle }}</span>\n          <span class=\"main-logo-title\">{{ menuBottomVersion == null ? 'Version: ' + systemVersion : menuBottomVersion }}</span>\n        </div>\n      </li>\n    </ul>\n  </nav>\n</div>\n",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);:host::ng-deep .menu-container{border-top:.3em solid;border-image-source:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%);border-image-slice:.5;border-bottom:0 solid transparent!important;background:0 0/cover #1a1b1d;position:fixed;top:0;bottom:0;overflow:hidden;width:85vw;max-width:17em;min-width:17em;z-index:10000;flex-grow:1;display:flex;height:100vh}:host::ng-deep .menu-container::after{width:100%;height:.7em;left:0;bottom:.7em;margin-bottom:-.7em;content:\"\";position:absolute;background:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%)}:host::ng-deep .menu-container.left{left:-110%;transition:left .5s ease-in-out}:host::ng-deep .menu-container.right{right:-110%;transition:right .5s ease-in-out}:host::ng-deep .menu-container .a{display:block;min-height:3em}:host::ng-deep .menu-container .menu-nav-container{overflow:auto;scrollbar-width:none;max-height:100%;flex-grow:1;display:flex}:host::ng-deep .menu-container .menu-nav-container .menu-content{display:flex;flex-direction:column;flex-grow:1;position:relative}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header{display:flex;flex-direction:column;margin:.5em 1em 1em .5em}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header .menu-top-icons-container{display:flex;margin:0 0 1.5em}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header .menu-top-icons-container .close-menu,:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header .menu-top-icons-container .settings-menu{cursor:pointer;height:1.5em;width:1.5em}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header .menu-top-icons-container .close-menu:active,:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header .menu-top-icons-container .close-menu:hover,:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header .menu-top-icons-container .settings-menu:active,:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header .menu-top-icons-container .settings-menu:hover{opacity:1;-webkit-animation:.4s ease-in-out forwards increase-decrease;animation:.4s ease-in-out forwards increase-decrease}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header .menu-top-icons-container .close-menu{margin:0 .2em 0 0}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header .menu-header-title .subtitle,:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header .menu-header-title .title{text-transform:uppercase;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:#fff;margin:0}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header .menu-header-title .title{font-family:Montserrat,sans-serif;font-weight:700;font-size:.9em;display:none}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header .menu-header-title .subtitle{font-family:Montserrat,sans-serif;font-weight:100;font-size:1.5em}:host::ng-deep .menu-container .menu-nav-container .menu-content .admin-settings{visibility:collapse}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-item-container{display:flex;flex-direction:column;font-size:.8em;background-color:rgba(255,255,255,.3)}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-item-container .menu-item{min-height:3em;font-size:.8em;display:flex;align-items:center;padding:.2em;transition:.2s ease-in-out}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-item-container .menu-item:nth-child(n+2){border-top:1px solid;border-image-source:linear-gradient(90deg,transparent 15%,rgba(255,255,255,.1) 15.01%,rgba(255,255,255,.05) 98%,transparent 98%);border-image-slice:1}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-item-container .menu-item:hover{background-color:rgba(75,77,82,.3)}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-item-container .menu-icons{margin:0 0 0 .7em;height:1.8em;width:1.8em;opacity:.5}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-item-container a{color:rgba(255,255,255,.6);padding:.8em;flex-grow:1;text-decoration:none}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-social-network{display:flex;justify-content:center;margin:3em 0 0;flex-grow:1;height:100%;align-items:flex-end}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-social-network .menu-icons{height:2em;width:2em;margin:.2em}:host::ng-deep .menu-container .menu-nav-container .logo-container{display:flex;flex-direction:column;align-items:center;bottom:5vh;position:absolute;width:100%}:host::ng-deep .menu-container .menu-nav-container .logo-container .main-logo{height:2em;width:2em}:host::ng-deep .menu-container .menu-nav-container .logo-container .main-logo-title{color:#fff;font-size:.4em;margin:1em 0 0}:host::ng-deep .show-admin-settings{visibility:visible!important}:host::ng-deep .menu-container.menu-active.left{left:0}:host::ng-deep .menu-container.menu-active.right{right:0}:host::ng-deep .menu-background{opacity:0;z-index:-100}:host::ng-deep .visible-background{width:100%;height:100%;background:rgba(0,0,0,.6);opacity:1;position:fixed;top:0;z-index:999;transition:opacity 1s ease-in-out}:host::ng-deep .hide-subtitle{opacity:0;visibility:collapse;margin:0;padding:0;transition:.25s ease-in-out}:host::ng-deep .show-subtitle{opacity:1;visibility:visible;transition:.25s ease-in-out .4s}:host::ng-deep .hide-subtitle-container{-webkit-animation:.4s ease-in-out forwards hide-subtitle;animation:.4s ease-in-out forwards hide-subtitle}:host::ng-deep .show-subtitle-container{-webkit-animation:.4s ease-in-out forwards show-subtitle;animation:.4s ease-in-out forwards show-subtitle}:host::ng-deep .collapsed-menu .expand{transform:rotate(0);transition:.4s ease-in-out}:host::ng-deep .collapsed-menu .menu-icons{-webkit-animation:.4s ease-in-out forwards decrease-increase;animation:.4s ease-in-out forwards decrease-increase}:host::ng-deep .expanded-menu .expand{transform:rotate(-180deg);transition:.4s ease-in-out}:host::ng-deep .expanded-menu .menu-icons{-webkit-animation:.4s ease-in-out forwards increase-decrease;animation:.4s ease-in-out forwards increase-decrease}:host::ng-deep .menu-container.dark{border-left:1px solid #38393c;border-top:.3em solid rgba(210,64,119,.7);border-image-source:none}:host::ng-deep .menu-container.translucid{background:rgba(255,255,255,.05);border-left:1px solid rgba(255,255,255,.05);border-top:.3em solid rgba(255,255,255,.1);border-image-source:none}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){:host::ng-deep .menu-container{border-top:0 solid transparent!important;padding-top:.2em;max-height:unset}:host::ng-deep .menu-container::before{width:100%;height:.2em;left:0;top:.2em;margin-top:-.2em;content:\"\";position:absolute;background:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%)}:host::ng-deep .menu-container .menu-nav-container .logo-main-container{position:fixed;bottom:2vh;display:flex;flex-direction:column;align-items:center;width:13vw}:host::ng-deep .menu-container .menu-nav-container .logo-main-container .logo-container{display:flex;flex-direction:column;align-items:center;bottom:2vh;position:absolute;width:100%}:host::ng-deep .menu-container .menu-nav-container .logo-main-container .logo-container .main-logo{height:2em;width:2em}:host::ng-deep .menu-container .menu-nav-container .logo-main-container .logo-container .main-logo-title{display:block;color:#fff;font-size:.4em;margin:1em 0 0}}"]
            }]
    }], function () { return [{ type: GlSharedComponentMenuService }, { type: ɵngcc2.Router }]; }, { settingsTarget: [{
            type: core.Input
        }], menuLogo: [{
            type: core.Input
        }], menuBottomVersion: [{
            type: core.Input
        }], menuPosition: [{
            type: core.Input
        }], container: [{
            type: core.ViewChild,
            args: ['container', { static: true, read: core.ElementRef }]
        }], background: [{
            type: core.ViewChild,
            args: ['background', { static: true, read: core.ElementRef }]
        }], title: [{
            type: core.Input
        }], subtitle: [{
            type: core.Input
        }], systemVersion: [{
            type: core.Input
        }], menuItems: [{
            type: core.Input
        }], showSettings: [{
            type: core.Input
        }], className: [{
            type: core.Input
        }], settingsUrl: [{
            type: core.Input
        }], menuBottomTitle: [{
            type: core.Input
        }] }); })();
        return GlSharedComponentMenuComponent;
    }());

    var GlSharedComponentMenuItemComponent = /** @class */ (function () {
        function GlSharedComponentMenuItemComponent(_router) {
            this._router = _router;
            this.itemClass = 'dark';
            this.menuLogo = '../assets/img/logo/glaucio-logo-colored.svg';
            this.src = this.menuLogo;
            this.onClick = new core.EventEmitter();
        }
        GlSharedComponentMenuItemComponent.prototype.openAbsoluteLink = function (event, href) {
            this._router.navigate(['/externalRedirect', { externalUrl: href }], {
                skipLocationChange: true,
            }).then(function () {
                console.log("Redirected to: " + href);
            });
            event.preventDefault();
        };
        GlSharedComponentMenuItemComponent.ctorParameters = function () { return [
            { type: router.Router }
        ]; };
        __decorate([
            core.Input()
        ], GlSharedComponentMenuItemComponent.prototype, "itemClass", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentMenuItemComponent.prototype, "absolute", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentMenuItemComponent.prototype, "menuLogo", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentMenuItemComponent.prototype, "src", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentMenuItemComponent.prototype, "href", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentMenuItemComponent.prototype, "alt", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentMenuItemComponent.prototype, "content", void 0);
        __decorate([
            core.Output()
        ], GlSharedComponentMenuItemComponent.prototype, "onClick", void 0);
GlSharedComponentMenuItemComponent.ɵfac = function GlSharedComponentMenuItemComponent_Factory(t) { return new (t || GlSharedComponentMenuItemComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc2.Router)); };
GlSharedComponentMenuItemComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GlSharedComponentMenuItemComponent, selectors: [["gl-shared-component-menu-item"]], inputs: { itemClass: "itemClass", menuLogo: "menuLogo", src: "src", absolute: "absolute", href: "href", alt: "alt", content: "content" }, outputs: { onClick: "onClick" }, decls: 4, vars: 7, consts: [["id", "{this.props.id}"], [1, "menu-icons", 3, "src", "alt"], [3, "href", "click", 4, "ngIf"], [3, "routerLink", "click", 4, "ngIf"], [3, "href", "click"], [3, "routerLink", "click"]], template: function GlSharedComponentMenuItemComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "li", 0);
        ɵngcc0.ɵɵelement(1, "img", 1);
        ɵngcc0.ɵɵtemplate(2, GlSharedComponentMenuItemComponent_a_2_Template, 2, 2, "a", 2);
        ɵngcc0.ɵɵtemplate(3, GlSharedComponentMenuItemComponent_a_3_Template, 2, 2, "a", 3);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMapInterpolate1("menu-title ", ctx.itemClass, "");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("src", ctx.src, ɵngcc0.ɵɵsanitizeUrl)("alt", ctx.alt);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.absolute);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.absolute);
    } }, directives: [ɵngcc1.NgIf, ɵngcc2.RouterLinkWithHref], styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);[_nghost-%COMP%]  .menu-title{background:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%);margin:0 0 .14em;position:relative;display:flex;align-items:center;border-left:.2em solid #d24077}[_nghost-%COMP%]  .menu-title .material-icons{color:rgba(255,255,255,.6);font-size:1.2em;padding:.3em;margin:0 .5em 0 .3em}[_nghost-%COMP%]  .menu-title .material-icons.expand{position:absolute;color:#fff;top:.5em;right:.3em}[_nghost-%COMP%]  .menu-title .menu-icons{padding:.2em .5em;height:1.5em;width:1.5em}[_nghost-%COMP%]  .menu-title a{text-decoration:none;font-size:.6em;font-family:Montserrat,sans-serif;font-weight:300;text-transform:uppercase;color:rgba(255,255,255,.4);padding:1.5em .7em;flex-grow:1}[_nghost-%COMP%]  .menu-title.dark{margin:0;border-bottom:1px solid #38393c;border-left:none}[_nghost-%COMP%]  .menu-title.dark:not(hover){background:#2c2c2f;transition:.3s ease-in-out}[_nghost-%COMP%]  .menu-title.dark:hover{background:#4b4d52;transition:.3s ease-in-out}[_nghost-%COMP%]  .menu-title.translucid{margin:0;border-bottom:.5px solid rgba(255,255,255,.1);border-left:none}[_nghost-%COMP%]  .menu-title.translucid:not(hover){background:rgba(255,255,255,.05);transition:.3s ease-in-out}[_nghost-%COMP%]  .menu-title.translucid:hover{background:rgba(255,255,255,.1);transition:.3s ease-in-out}"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GlSharedComponentMenuItemComponent, [{
        type: core.Component,
        args: [{
                selector: 'gl-shared-component-menu-item',
                template: "<li id={this.props.id} class=\"menu-title {{ itemClass }}\">\n  <img [src]=\"src\" class=\"menu-icons\" [alt]=\"alt\"/>\n  <a\n    *ngIf=\"absolute\"\n    [href]=\"'externalRedirect'\"\n    (click)=\"openAbsoluteLink($event, href)\"\n  >{{ content }}</a>\n  <a *ngIf=\"!absolute\"\n     [routerLink]=\"href\"\n     (click)=\"onClick.emit(null)\"\n  >{{ content }}</a>\n</li>\n",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);:host::ng-deep .menu-title{background:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%);margin:0 0 .14em;position:relative;display:flex;align-items:center;border-left:.2em solid #d24077}:host::ng-deep .menu-title .material-icons{color:rgba(255,255,255,.6);font-size:1.2em;padding:.3em;margin:0 .5em 0 .3em}:host::ng-deep .menu-title .material-icons.expand{position:absolute;color:#fff;top:.5em;right:.3em}:host::ng-deep .menu-title .menu-icons{padding:.2em .5em;height:1.5em;width:1.5em}:host::ng-deep .menu-title a{text-decoration:none;font-size:.6em;font-family:Montserrat,sans-serif;font-weight:300;text-transform:uppercase;color:rgba(255,255,255,.4);padding:1.5em .7em;flex-grow:1}:host::ng-deep .menu-title.dark{margin:0;border-bottom:1px solid #38393c;border-left:none}:host::ng-deep .menu-title.dark:not(hover){background:#2c2c2f;transition:.3s ease-in-out}:host::ng-deep .menu-title.dark:hover{background:#4b4d52;transition:.3s ease-in-out}:host::ng-deep .menu-title.translucid{margin:0;border-bottom:.5px solid rgba(255,255,255,.1);border-left:none}:host::ng-deep .menu-title.translucid:not(hover){background:rgba(255,255,255,.05);transition:.3s ease-in-out}:host::ng-deep .menu-title.translucid:hover{background:rgba(255,255,255,.1);transition:.3s ease-in-out}"]
            }]
    }], function () { return [{ type: ɵngcc2.Router }]; }, { itemClass: [{
            type: core.Input
        }], menuLogo: [{
            type: core.Input
        }], src: [{
            type: core.Input
        }], onClick: [{
            type: core.Output
        }], absolute: [{
            type: core.Input
        }], href: [{
            type: core.Input
        }], alt: [{
            type: core.Input
        }], content: [{
            type: core.Input
        }] }); })();
        return GlSharedComponentMenuItemComponent;
    }());

    var GlSharedComponentFooterSimpleComponent = /** @class */ (function () {
        function GlSharedComponentFooterSimpleComponent() {
            this.imageDescription = 'Image logo';
        }
        __decorate([
            core.Input()
        ], GlSharedComponentFooterSimpleComponent.prototype, "description", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentFooterSimpleComponent.prototype, "imageLogo", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentFooterSimpleComponent.prototype, "imageDescription", void 0);
GlSharedComponentFooterSimpleComponent.ɵfac = function GlSharedComponentFooterSimpleComponent_Factory(t) { return new (t || GlSharedComponentFooterSimpleComponent)(); };
GlSharedComponentFooterSimpleComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GlSharedComponentFooterSimpleComponent, selectors: [["gl-shared-component-footer-simple"]], inputs: { imageDescription: "imageDescription", description: "description", imageLogo: "imageLogo" }, decls: 4, vars: 2, consts: [[1, "footer-container"], [1, "description"], ["class", "image-logo", 3, "alt", "src", 4, "ngIf"], [1, "image-logo", 3, "alt", "src"]], template: function GlSharedComponentFooterSimpleComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "section", 0);
        ɵngcc0.ɵɵelementStart(1, "span", 1);
        ɵngcc0.ɵɵtext(2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(3, GlSharedComponentFooterSimpleComponent_img_3_Template, 1, 2, "img", 2);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate(ctx.description);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.imageLogo != null);
    } }, directives: [ɵngcc1.NgIf], styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);[_nghost-%COMP%] {z-index:100;max-width:100vw;min-width:100vw;position:fixed;bottom:0;flex-grow:1}[_nghost-%COMP%]  .footer-container{position:relative;display:flex;justify-content:center;background-color:#1a1b1d;border-top:.1em solid;border-image-source:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%);border-image-slice:.5;height:1.3em;z-index:99}[_nghost-%COMP%]  .footer-container .description{font-family:Montserrat,sans-serif;font-weight:300;text-transform:uppercase;padding:1em;color:#fff;font-size:.5em;letter-spacing:.14em}[_nghost-%COMP%]  .footer-container .image-logo{height:1em;margin:0 0 0 .3em}@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){[_nghost-%COMP%]  .footer-container{border-top:0 solid transparent!important;padding-top:.1em}[_nghost-%COMP%]  .footer-container::before{width:100%;height:.1em;left:0;top:.1em;margin-top:-.1em;content:\"\";position:absolute;background:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%)}}"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GlSharedComponentFooterSimpleComponent, [{
        type: core.Component,
        args: [{
                selector: 'gl-shared-component-footer-simple',
                template: "<section class=\"footer-container\">\n  <span class=\"description\">{{ description }}</span>\n  <img\n    *ngIf=\"imageLogo != null\"\n    class=\"image-logo\"\n    [alt]=\"imageDescription\"\n    [src]=\"imageLogo\">\n</section>\n",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);:host::ng-deep{z-index:100;max-width:100vw;min-width:100vw;position:fixed;bottom:0;flex-grow:1}:host::ng-deep .footer-container{position:relative;display:flex;justify-content:center;background-color:#1a1b1d;border-top:.1em solid;border-image-source:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%);border-image-slice:.5;height:1.3em;z-index:99}:host::ng-deep .footer-container .description{font-family:Montserrat,sans-serif;font-weight:300;text-transform:uppercase;padding:1em;color:#fff;font-size:.5em;letter-spacing:.14em}:host::ng-deep .footer-container .image-logo{height:1em;margin:0 0 0 .3em}@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){:host::ng-deep .footer-container{border-top:0 solid transparent!important;padding-top:.1em}:host::ng-deep .footer-container::before{width:100%;height:.1em;left:0;top:.1em;margin-top:-.1em;content:\"\";position:absolute;background:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%)}}"]
            }]
    }], function () { return []; }, { imageDescription: [{
            type: core.Input
        }], description: [{
            type: core.Input
        }], imageLogo: [{
            type: core.Input
        }] }); })();
        return GlSharedComponentFooterSimpleComponent;
    }());

    var GlSharedComponentInputButtonHyperlinkComponent = /** @class */ (function () {
        function GlSharedComponentInputButtonHyperlinkComponent() {
        }
        __decorate([
            core.Input()
        ], GlSharedComponentInputButtonHyperlinkComponent.prototype, "imageSrc", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentInputButtonHyperlinkComponent.prototype, "imageDescription", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentInputButtonHyperlinkComponent.prototype, "description", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentInputButtonHyperlinkComponent.prototype, "link", void 0);
GlSharedComponentInputButtonHyperlinkComponent.ɵfac = function GlSharedComponentInputButtonHyperlinkComponent_Factory(t) { return new (t || GlSharedComponentInputButtonHyperlinkComponent)(); };
GlSharedComponentInputButtonHyperlinkComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GlSharedComponentInputButtonHyperlinkComponent, selectors: [["gl-shared-component-input-button-hyperlink"]], inputs: { imageSrc: "imageSrc", imageDescription: "imageDescription", description: "description", link: "link" }, decls: 4, vars: 4, consts: [[1, "hyperlink-container"], [1, "logo", 3, "src", "alt"], ["target", "_blank", 1, "message", 3, "href"]], template: function GlSharedComponentInputButtonHyperlinkComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelement(1, "img", 1);
        ɵngcc0.ɵɵelementStart(2, "a", 2);
        ɵngcc0.ɵɵtext(3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("src", ctx.imageSrc, ɵngcc0.ɵɵsanitizeUrl)("alt", ctx.imageDescription);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("href", ctx.link, ɵngcc0.ɵɵsanitizeUrl);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate(ctx.description);
    } }, styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);[_nghost-%COMP%]  .hyperlink-container{display:flex;flex-direction:row;align-items:center;position:absolute;right:.3em;bottom:.3em}[_nghost-%COMP%]  .hyperlink-container .logo{width:.7em;height:.7em;margin:0 .2em 0 0}[_nghost-%COMP%]  .hyperlink-container .message{margin:0 0 0 .2em;font-family:Montserrat,sans-serif;font-weight:400;font-size:.5em;color:#ff9800}"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GlSharedComponentInputButtonHyperlinkComponent, [{
        type: core.Component,
        args: [{
                selector: 'gl-shared-component-input-button-hyperlink',
                template: "<div class=\"hyperlink-container\">\n  <img\n    class=\"logo\"\n    [src]=\"imageSrc\"\n    [alt]=\"imageDescription\">\n  <a\n    class=\"message\"\n    [href]=\"link\"\n    target=\"_blank\">{{ description }}</a>\n</div>\n",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);:host::ng-deep .hyperlink-container{display:flex;flex-direction:row;align-items:center;position:absolute;right:.3em;bottom:.3em}:host::ng-deep .hyperlink-container .logo{width:.7em;height:.7em;margin:0 .2em 0 0}:host::ng-deep .hyperlink-container .message{margin:0 0 0 .2em;font-family:Montserrat,sans-serif;font-weight:400;font-size:.5em;color:#ff9800}"]
            }]
    }], function () { return []; }, { imageSrc: [{
            type: core.Input
        }], imageDescription: [{
            type: core.Input
        }], description: [{
            type: core.Input
        }], link: [{
            type: core.Input
        }] }); })();
        return GlSharedComponentInputButtonHyperlinkComponent;
    }());

    var GlSharedComponentFooterContainerComponent = /** @class */ (function () {
        function GlSharedComponentFooterContainerComponent() {
            this.imageDescription = 'Image logo';
        }
        __decorate([
            core.Input()
        ], GlSharedComponentFooterContainerComponent.prototype, "description", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentFooterContainerComponent.prototype, "imageLogo", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentFooterContainerComponent.prototype, "imageDescription", void 0);
GlSharedComponentFooterContainerComponent.ɵfac = function GlSharedComponentFooterContainerComponent_Factory(t) { return new (t || GlSharedComponentFooterContainerComponent)(); };
GlSharedComponentFooterContainerComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GlSharedComponentFooterContainerComponent, selectors: [["gl-shared-component-footer-container"]], inputs: { imageDescription: "imageDescription", description: "description", imageLogo: "imageLogo" }, ngContentSelectors: _c3, decls: 6, vars: 2, consts: [[1, "footer-container"], [1, "description"], ["class", "image-logo", 3, "alt", "src", 4, "ngIf"], [1, "user-container"], [1, "image-logo", 3, "alt", "src"]], template: function GlSharedComponentFooterContainerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "section", 0);
        ɵngcc0.ɵɵelementStart(1, "span", 1);
        ɵngcc0.ɵɵtext(2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(3, GlSharedComponentFooterContainerComponent_img_3_Template, 1, 2, "img", 2);
        ɵngcc0.ɵɵelementStart(4, "div", 3);
        ɵngcc0.ɵɵprojection(5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate(ctx.description);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.imageLogo != null);
    } }, directives: [ɵngcc1.NgIf], styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);[_nghost-%COMP%] {z-index:100;max-width:100vw;min-width:100vw;position:fixed;bottom:0;flex-grow:1}[_nghost-%COMP%]  .footer-container{position:relative;display:flex;justify-content:center;background-color:#1a1b1d;border-top:.1em solid;border-image-source:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%);border-image-slice:.5;height:1.3em;z-index:99}[_nghost-%COMP%]  .footer-container .description{font-family:Montserrat,sans-serif;font-weight:300;text-transform:uppercase;padding:1em;color:#fff;font-size:.5em;letter-spacing:.14em}[_nghost-%COMP%]  .footer-container .image-logo{height:1em;margin:0 0 0 .3em}[_nghost-%COMP%]  .footer-container .user-container{align-self:flex-end;margin:0 .3em 0 0}[_nghost-%COMP%]  .footer-container .user-container .user-container{display:flex;align-items:center;justify-content:center}@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){[_nghost-%COMP%]  .footer-container{border-top:0 solid transparent!important;padding-top:.1em}[_nghost-%COMP%]  .footer-container::before{width:100%;height:.1em;left:0;top:.1em;margin-top:-.1em;content:\"\";position:absolute;background:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%)}}"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GlSharedComponentFooterContainerComponent, [{
        type: core.Component,
        args: [{
                selector: 'gl-shared-component-footer-container',
                template: "<section class=\"footer-container\">\n  <span class=\"description\">{{ description }}</span>\n  <img\n    *ngIf=\"imageLogo != null\"\n    class=\"image-logo\"\n    [alt]=\"imageDescription\"\n    [src]=\"imageLogo\">\n  <div class=\"user-container\">\n    <ng-content></ng-content>\n  </div>\n</section>\n",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);:host::ng-deep{z-index:100;max-width:100vw;min-width:100vw;position:fixed;bottom:0;flex-grow:1}:host::ng-deep .footer-container{position:relative;display:flex;justify-content:center;background-color:#1a1b1d;border-top:.1em solid;border-image-source:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%);border-image-slice:.5;height:1.3em;z-index:99}:host::ng-deep .footer-container .description{font-family:Montserrat,sans-serif;font-weight:300;text-transform:uppercase;padding:1em;color:#fff;font-size:.5em;letter-spacing:.14em}:host::ng-deep .footer-container .image-logo{height:1em;margin:0 0 0 .3em}:host::ng-deep .footer-container .user-container{align-self:flex-end;margin:0 .3em 0 0}:host::ng-deep .footer-container .user-container .user-container{display:flex;align-items:center;justify-content:center}@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){:host::ng-deep .footer-container{border-top:0 solid transparent!important;padding-top:.1em}:host::ng-deep .footer-container::before{width:100%;height:.1em;left:0;top:.1em;margin-top:-.1em;content:\"\";position:absolute;background:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%)}}"]
            }]
    }], function () { return []; }, { imageDescription: [{
            type: core.Input
        }], description: [{
            type: core.Input
        }], imageLogo: [{
            type: core.Input
        }] }); })();
        return GlSharedComponentFooterContainerComponent;
    }());

    var GlSharedComponentErrorMessageComponent = /** @class */ (function () {
        function GlSharedComponentErrorMessageComponent() {
            this.position = 'left';
            this.buttonAction$ = new core.EventEmitter();
        }
        GlSharedComponentErrorMessageComponent.prototype.buttonAction = function () {
            this.buttonAction$.emit();
        };
        __decorate([
            core.Input()
        ], GlSharedComponentErrorMessageComponent.prototype, "position", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentErrorMessageComponent.prototype, "errorCode", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentErrorMessageComponent.prototype, "errorMessage", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentErrorMessageComponent.prototype, "buttonLabel", void 0);
        __decorate([
            core.Output()
        ], GlSharedComponentErrorMessageComponent.prototype, "buttonAction$", void 0);
GlSharedComponentErrorMessageComponent.ɵfac = function GlSharedComponentErrorMessageComponent_Factory(t) { return new (t || GlSharedComponentErrorMessageComponent)(); };
GlSharedComponentErrorMessageComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GlSharedComponentErrorMessageComponent, selectors: [["gl-shared-component-error-message"]], inputs: { position: "position", errorCode: "errorCode", errorMessage: "errorMessage", buttonLabel: "buttonLabel" }, outputs: { buttonAction$: "buttonAction$" }, decls: 6, vars: 6, consts: [[1, "main-title"], [1, "message"], [1, "home-button", 3, "innerValue", "click"]], template: function GlSharedComponentErrorMessageComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵelementStart(1, "h1", 0);
        ɵngcc0.ɵɵtext(2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(3, "h2", 1);
        ɵngcc0.ɵɵtext(4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(5, "gl-shared-component-input-button-simple", 2);
        ɵngcc0.ɵɵlistener("click", function GlSharedComponentErrorMessageComponent_Template_gl_shared_component_input_button_simple_click_5_listener() { return ctx.buttonAction(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMapInterpolate1("content-container ", ctx.position === "right" ? "right" : "left", "");
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate(ctx.errorCode);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate(ctx.errorMessage);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("innerValue", ctx.buttonLabel);
    } }, directives: [GlSharedComponentInputButtonSimpleComponent], styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);[_nghost-%COMP%] {display:flex;flex-grow:1}[_nghost-%COMP%]  .content-container{display:flex;flex-direction:column;position:absolute;top:25%;justify-content:center;align-content:center;text-align:center;align-items:center}[_nghost-%COMP%]  .content-container.right{right:10vw}[_nghost-%COMP%]  .content-container.left{left:10vw}[_nghost-%COMP%]  .content-container .main-title{font-family:Montserrat,sans-serif;font-weight:800;color:rgba(255,255,255,.3);font-size:11em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}[_nghost-%COMP%]  .content-container .message{font-family:Montserrat,sans-serif;font-weight:100;color:rgba(255,255,255,.3);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-size:1.5em}[_nghost-%COMP%]  .content-container gl-shared-component-input-button-simple{display:block;align-items:center;flex-direction:column;margin:3em 0}[_nghost-%COMP%]  .content-container gl-shared-component-input-button-simple .default-button{border-radius:10em;display:block;padding:1.5em 4em;background-color:rgba(0,0,0,.4);font-family:Montserrat,sans-serif;font-weight:300}"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GlSharedComponentErrorMessageComponent, [{
        type: core.Component,
        args: [{
                selector: 'gl-shared-component-error-message',
                template: "<div class=\"content-container {{ position === 'right' ? 'right' : 'left' }}\">\n  <h1 class=\"main-title\">{{ errorCode }}</h1>\n  <h2 class=\"message\">{{ errorMessage }}</h2>\n  <gl-shared-component-input-button-simple\n    class=\"home-button\"\n    [innerValue]=\"buttonLabel\"\n    (click)=\"buttonAction()\"\n  ></gl-shared-component-input-button-simple>\n</div>\n",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);:host::ng-deep{display:flex;flex-grow:1}:host::ng-deep .content-container{display:flex;flex-direction:column;position:absolute;top:25%;justify-content:center;align-content:center;text-align:center;align-items:center}:host::ng-deep .content-container.right{right:10vw}:host::ng-deep .content-container.left{left:10vw}:host::ng-deep .content-container .main-title{font-family:Montserrat,sans-serif;font-weight:800;color:rgba(255,255,255,.3);font-size:11em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host::ng-deep .content-container .message{font-family:Montserrat,sans-serif;font-weight:100;color:rgba(255,255,255,.3);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-size:1.5em}:host::ng-deep .content-container gl-shared-component-input-button-simple{display:block;align-items:center;flex-direction:column;margin:3em 0}:host::ng-deep .content-container gl-shared-component-input-button-simple .default-button{border-radius:10em;display:block;padding:1.5em 4em;background-color:rgba(0,0,0,.4);font-family:Montserrat,sans-serif;font-weight:300}"]
            }]
    }], function () { return []; }, { position: [{
            type: core.Input
        }], buttonAction$: [{
            type: core.Output
        }], errorCode: [{
            type: core.Input
        }], errorMessage: [{
            type: core.Input
        }], buttonLabel: [{
            type: core.Input
        }] }); })();
        return GlSharedComponentErrorMessageComponent;
    }());

    var GlSharedComponentLogoSquareComponent = /** @class */ (function () {
        function GlSharedComponentLogoSquareComponent() {
            this.horizontalPosition = 'left';
            this.verticalPosition = 'top';
        }
        __decorate([
            core.Input()
        ], GlSharedComponentLogoSquareComponent.prototype, "imageScr", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentLogoSquareComponent.prototype, "imageAlt", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentLogoSquareComponent.prototype, "horizontalPosition", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentLogoSquareComponent.prototype, "verticalPosition", void 0);
GlSharedComponentLogoSquareComponent.ɵfac = function GlSharedComponentLogoSquareComponent_Factory(t) { return new (t || GlSharedComponentLogoSquareComponent)(); };
GlSharedComponentLogoSquareComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GlSharedComponentLogoSquareComponent, selectors: [["gl-shared-component-logo-square"]], inputs: { horizontalPosition: "horizontalPosition", verticalPosition: "verticalPosition", imageScr: "imageScr", imageAlt: "imageAlt" }, decls: 1, vars: 6, consts: [[3, "src", "alt"]], template: function GlSharedComponentLogoSquareComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelement(0, "img", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMapInterpolate2("logo ", ctx.horizontalPosition == "right" ? "right" : "left", " ", ctx.verticalPosition == "bottom" ? "bottom" : "top", "");
        ɵngcc0.ɵɵproperty("src", ctx.imageScr, ɵngcc0.ɵɵsanitizeUrl)("alt", ctx.imageAlt);
    } }, styles: ["[_nghost-%COMP%]  .logo{width:3em;height:3em;position:absolute;opacity:.1}[_nghost-%COMP%]  .logo.top{top:1em}[_nghost-%COMP%]  .logo.right{right:1em}[_nghost-%COMP%]  .logo.bottom{bottom:1em}[_nghost-%COMP%]  .logo.left{left:1em}"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GlSharedComponentLogoSquareComponent, [{
        type: core.Component,
        args: [{
                selector: 'gl-shared-component-logo-square',
                template: "<img\n  class=\"logo {{ horizontalPosition == 'right' ? 'right' : 'left' }} {{ verticalPosition == 'bottom' ? 'bottom' : 'top' }}\"\n  [src]=\"imageScr\"\n  [alt]=\"imageAlt\">\n",
                styles: [":host::ng-deep .logo{width:3em;height:3em;position:absolute;opacity:.1}:host::ng-deep .logo.top{top:1em}:host::ng-deep .logo.right{right:1em}:host::ng-deep .logo.bottom{bottom:1em}:host::ng-deep .logo.left{left:1em}"]
            }]
    }], function () { return []; }, { horizontalPosition: [{
            type: core.Input
        }], verticalPosition: [{
            type: core.Input
        }], imageScr: [{
            type: core.Input
        }], imageAlt: [{
            type: core.Input
        }] }); })();
        return GlSharedComponentLogoSquareComponent;
    }());

    var GlSharedComponentButtonImageSimpleComponent = /** @class */ (function () {
        function GlSharedComponentButtonImageSimpleComponent() {
        }
        __decorate([
            core.Input()
        ], GlSharedComponentButtonImageSimpleComponent.prototype, "id", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentButtonImageSimpleComponent.prototype, "alt", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentButtonImageSimpleComponent.prototype, "src", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentButtonImageSimpleComponent.prototype, "callback", void 0);
GlSharedComponentButtonImageSimpleComponent.ɵfac = function GlSharedComponentButtonImageSimpleComponent_Factory(t) { return new (t || GlSharedComponentButtonImageSimpleComponent)(); };
GlSharedComponentButtonImageSimpleComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GlSharedComponentButtonImageSimpleComponent, selectors: [["gl-shared-component-button-image-simple"]], inputs: { id: "id", alt: "alt", src: "src", callback: "callback" }, decls: 1, vars: 3, consts: [[1, "button", 3, "id", "src", "alt", "click"]], template: function GlSharedComponentButtonImageSimpleComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "img", 0);
        ɵngcc0.ɵɵlistener("click", function GlSharedComponentButtonImageSimpleComponent_Template_img_click_0_listener($event) { return ctx.callback($event); });
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("id", ctx.id)("src", ctx.src, ɵngcc0.ɵɵsanitizeUrl)("alt", ctx.alt);
    } }, styles: ["[_nghost-%COMP%] {display:flex;align-items:center}[_nghost-%COMP%]  .button{width:1em;height:1em}[_nghost-%COMP%]  .button:not(hover){opacity:.5;transform:scale(1);transition:.2s ease-in-out}[_nghost-%COMP%]  .button:hover{opacity:1;transform:scale(1.1);transition:.2s ease-in-out}"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GlSharedComponentButtonImageSimpleComponent, [{
        type: core.Component,
        args: [{
                selector: 'gl-shared-component-button-image-simple',
                template: "<img\n  class=\"button\"\n  [id]=\"id\"\n  [src]=\"src\"\n  [alt]=\"alt\"\n  (click)=\"callback($event)\">\n",
                styles: [":host::ng-deep{display:flex;align-items:center}:host::ng-deep .button{width:1em;height:1em}:host::ng-deep .button:not(hover){opacity:.5;transform:scale(1);transition:.2s ease-in-out}:host::ng-deep .button:hover{opacity:1;transform:scale(1.1);transition:.2s ease-in-out}"]
            }]
    }], function () { return []; }, { id: [{
            type: core.Input
        }], alt: [{
            type: core.Input
        }], src: [{
            type: core.Input
        }], callback: [{
            type: core.Input
        }] }); })();
        return GlSharedComponentButtonImageSimpleComponent;
    }());

    var GlSharedComponentButtonImageTooltipComponent = /** @class */ (function () {
        function GlSharedComponentButtonImageTooltipComponent() {
            this.show = true;
        }
        __decorate([
            core.Input()
        ], GlSharedComponentButtonImageTooltipComponent.prototype, "id", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentButtonImageTooltipComponent.prototype, "alt", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentButtonImageTooltipComponent.prototype, "src", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentButtonImageTooltipComponent.prototype, "show", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentButtonImageTooltipComponent.prototype, "callback", void 0);
GlSharedComponentButtonImageTooltipComponent.ɵfac = function GlSharedComponentButtonImageTooltipComponent_Factory(t) { return new (t || GlSharedComponentButtonImageTooltipComponent)(); };
GlSharedComponentButtonImageTooltipComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GlSharedComponentButtonImageTooltipComponent, selectors: [["gl-shared-component-button-image-tooltip"]], inputs: { show: "show", id: "id", alt: "alt", src: "src", callback: "callback" }, decls: 1, vars: 1, consts: [["class", "tooltip top", 3, "hidden", "id", 4, "ngIf"], [1, "tooltip", "top", 3, "id"], [3, "src", "alt", "id", "callback"]], template: function GlSharedComponentButtonImageTooltipComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, GlSharedComponentButtonImageTooltipComponent_div_0_Template, 2, 8, "div", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.show);
    } }, directives: [ɵngcc1.NgIf, GlSharedComponentButtonImageSimpleComponent], styles: [".tooltip-menu[_ngcontent-%COMP%]{z-index:100;position:relative;display:flex}.tooltip-menu[_ngcontent-%COMP%]::before{content:\"\";position:absolute;left:80%;transform:translateX(-137%) translateY(100%) rotate(180deg);border-width:.2em .2em 0;border-style:solid;border-color:#fff transparent transparent;z-index:100}.tooltip-menu[_ngcontent-%COMP%]::after{content:attr(tooltip);position:absolute;left:80%;transform:translateX(-57%) translateY(124%);background:#fff;text-align:left;color:#64666c;font-weight:600;padding:.5em 1em;width:-webkit-max-content;width:-moz-max-content;width:max-content;max-width:50em;border:none;pointer-events:none;white-space:nowrap;line-height:1.5em;font-size:.4em}.tooltip-menu[_ngcontent-%COMP%]:not(hover)::before{opacity:0;bottom:-.3em;transition:.1s ease-in-out}.tooltip-menu[_ngcontent-%COMP%]:not(hover)::after{opacity:0;bottom:0;transition:.1s ease-in-out}.tooltip-menu[_ngcontent-%COMP%]:hover::after, .tooltip-menu[_ngcontent-%COMP%]:hover::before{opacity:1;bottom:-.11em;transition:.1s ease-in-out}.tooltip.top[_ngcontent-%COMP%]{z-index:1000;position:relative}.tooltip.top[_ngcontent-%COMP%]::before{content:\"\";position:absolute;left:82%;border-width:.2em .2em 0;border-style:solid;border-color:#fff transparent transparent;z-index:100;transform:translateX(-200%) translateY(90%)}.tooltip.top[_ngcontent-%COMP%]::after{content:attr(tooltip);position:absolute;background:#fff;text-align:center;color:#64666c;font-weight:300;padding:.5em 1em;width:-webkit-max-content;width:-moz-max-content;width:max-content;max-width:50em;border:none;pointer-events:none;white-space:nowrap;line-height:1.5em;font-size:.4em;height:1.5em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;left:0}.tooltip.top[_ngcontent-%COMP%]:hover::before, .tooltip.top[_ngcontent-%COMP%]:not(hover)::before{top:-.5em;left:93%}.tooltip.top[_ngcontent-%COMP%]:hover::after, .tooltip.top[_ngcontent-%COMP%]:not(hover)::after{left:0;top:-3.1em}.tooltip.top[_ngcontent-%COMP%]:not(hover)::after, .tooltip.top[_ngcontent-%COMP%]:not(hover)::before{opacity:0;transition:.1s ease-in-out}.tooltip.top[_ngcontent-%COMP%]:hover::after, .tooltip.top[_ngcontent-%COMP%]:hover::before{opacity:1;transition:.1s ease-in-out}.tooltip.top.status-table[_ngcontent-%COMP%]{z-index:1000;position:relative}.tooltip.top.status-table[_ngcontent-%COMP%]::before{content:\"\";position:absolute;left:82%;border-width:.6em .6em 0;border-style:solid;border-color:#fff transparent transparent;z-index:100;transform:translateX(-237%) translateY(-15%)}.tooltip.top.status-table[_ngcontent-%COMP%]::after{content:attr(tooltip);position:absolute;background:#fff;text-align:center;color:#64666c;font-weight:300;padding:.5em 1em;width:-webkit-max-content;width:-moz-max-content;width:max-content;max-width:50em;border:none;pointer-events:none;white-space:nowrap;line-height:1.5em;height:1.5em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;left:0;font-size:.9em}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.tooltip-menu[_ngcontent-%COMP%]{margin:0 0 0 .3em;width:1.5em}.tooltip-menu[_ngcontent-%COMP%]::before{transform:translateX(-150%) translateY(100%) rotate(180deg)}.tooltip-menu[_ngcontent-%COMP%]::after{font-size:11.5px;transform:translateX(-55%) translateY(124%)}.tooltip.top.status-table[_ngcontent-%COMP%]::after{left:.9em;font-size:2em}}.tooltip.top.status-table[_ngcontent-%COMP%]:not(hover)::after, .tooltip.top.status-table[_ngcontent-%COMP%]:not(hover)::before{opacity:0;transition:.1s ease-in-out}.tooltip.top.status-table[_ngcontent-%COMP%]:hover::after, .tooltip.top.status-table[_ngcontent-%COMP%]:hover::before{opacity:1;transition:.1s ease-in-out}.tooltip.bottom[_ngcontent-%COMP%]{z-index:1000;position:relative}.tooltip.bottom[_ngcontent-%COMP%]::before{content:\"\";position:absolute;border-width:.2em .2em 0;border-style:solid;border-color:#fff transparent transparent;z-index:100;left:107%;transform:translateX(-137%) translateY(100%) rotate(180deg)}.tooltip.bottom[_ngcontent-%COMP%]::after{content:attr(tooltip);position:absolute;background:#fff;text-align:center;color:#64666c;font-weight:300;padding:.5em 1em;width:-webkit-max-content;width:-moz-max-content;width:max-content;max-width:50em;border:none;pointer-events:none;white-space:nowrap;line-height:1.5em;font-size:.4em;height:1.5em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.tooltip.bottom[_ngcontent-%COMP%]:hover::before, .tooltip.bottom[_ngcontent-%COMP%]:not(hover)::before{bottom:.1em}.tooltip.bottom[_ngcontent-%COMP%]:hover::after, .tooltip.bottom[_ngcontent-%COMP%]:not(hover)::after{left:0;bottom:-2.7em}.tooltip.bottom[_ngcontent-%COMP%]:not(hover)::after, .tooltip.bottom[_ngcontent-%COMP%]:not(hover)::before{opacity:0;transition:.1s ease-in-out}.tooltip.bottom[_ngcontent-%COMP%]:hover::after, .tooltip.bottom[_ngcontent-%COMP%]:hover::before{opacity:1;transition:.1s ease-in-out}.tooltip.bottom-right[_ngcontent-%COMP%]{z-index:1000;position:relative}.tooltip.bottom-right[_ngcontent-%COMP%]::before{content:\"\";position:absolute;left:82%;border-width:.2em .2em 0;border-style:solid;border-color:#fff transparent transparent;z-index:100;transform:translateX(-137%) translateY(100%) rotate(180deg)}.tooltip.bottom-right[_ngcontent-%COMP%]::after{content:attr(tooltip);position:absolute;background:#fff;text-align:center;color:#64666c;font-weight:300;padding:.5em 1em;width:-webkit-max-content;width:-moz-max-content;width:max-content;max-width:50em;border:none;pointer-events:none;white-space:nowrap;line-height:1.5em;font-size:.4em;height:1.5em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.tooltip.bottom-right[_ngcontent-%COMP%]:hover::before, .tooltip.bottom-right[_ngcontent-%COMP%]:not(hover)::before{left:94%}.tooltip.bottom-right[_ngcontent-%COMP%]:hover::after, .tooltip.bottom-right[_ngcontent-%COMP%]:not(hover)::after{left:-200%;bottom:-2.7em}.tooltip.bottom-right[_ngcontent-%COMP%]:not(hover)::after, .tooltip.bottom-right[_ngcontent-%COMP%]:not(hover)::before{opacity:0;transition:.1s ease-in-out}.tooltip.bottom-right[_ngcontent-%COMP%]:hover::after, .tooltip.bottom-right[_ngcontent-%COMP%]:hover::before{opacity:1;transition:.1s ease-in-out}.tooltip.bottom-gantt[_ngcontent-%COMP%]{z-index:1000;position:relative}.tooltip.bottom-gantt[_ngcontent-%COMP%]::before{content:\"\";position:absolute;left:82%;border-width:.2em .2em 0;border-style:solid;border-color:#fff transparent transparent;z-index:100;transform:translateX(-137%) translateY(100%) rotate(180deg)}.tooltip.bottom-gantt[_ngcontent-%COMP%]::after{content:attr(tooltip);position:absolute;background:#fff;text-align:center;color:#64666c;font-weight:300;padding:.5em 1em;width:-webkit-max-content;width:-moz-max-content;width:max-content;max-width:50em;border:none;pointer-events:none;white-space:nowrap;line-height:1.5em;font-size:.4em;height:1.5em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.tooltip.bottom-gantt[_ngcontent-%COMP%]::after{font-size:11.5px}}.tooltip.bottom-gantt[_ngcontent-%COMP%]:hover::before, .tooltip.bottom-gantt[_ngcontent-%COMP%]:not(hover)::before{left:83%;bottom:-.1em}.tooltip.bottom-gantt[_ngcontent-%COMP%]:hover::after, .tooltip.bottom-gantt[_ngcontent-%COMP%]:not(hover)::after{left:0;bottom:-3.1em}.tooltip.bottom-gantt[_ngcontent-%COMP%]:not(hover)::after, .tooltip.bottom-gantt[_ngcontent-%COMP%]:not(hover)::before{opacity:0;transition:.1s ease-in-out}.tooltip.bottom-gantt[_ngcontent-%COMP%]:hover::after, .tooltip.bottom-gantt[_ngcontent-%COMP%]:hover::before{opacity:1;transition:.1s ease-in-out}.tooltip.bottom-menu[_ngcontent-%COMP%]{z-index:1000;position:relative}.tooltip.bottom-menu[_ngcontent-%COMP%]::before{content:\"\";position:absolute;left:82%;border-width:.2em .2em 0;border-style:solid;border-color:#fff transparent transparent;z-index:100;transform:translateX(-137%) translateY(100%) rotate(180deg)}.tooltip.bottom-menu[_ngcontent-%COMP%]::after{content:attr(tooltip);position:absolute;background:#fff;text-align:center;color:#64666c;font-weight:300;padding:.5em 1em;width:-webkit-max-content;width:-moz-max-content;width:max-content;max-width:50em;border:none;pointer-events:none;white-space:nowrap;line-height:1.5em;font-size:.4em;height:1.5em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.tooltip.bottom-menu[_ngcontent-%COMP%]:hover::before, .tooltip.bottom-menu[_ngcontent-%COMP%]:not(hover)::before{left:74%;bottom:-.1em}.tooltip.bottom-menu[_ngcontent-%COMP%]:hover::after, .tooltip.bottom-menu[_ngcontent-%COMP%]:not(hover)::after{left:-64%;bottom:-3.1em}.tooltip.bottom-menu[_ngcontent-%COMP%]:not(hover)::after, .tooltip.bottom-menu[_ngcontent-%COMP%]:not(hover)::before{opacity:0;transition:.1s ease-in-out}.tooltip.bottom-menu[_ngcontent-%COMP%]:hover::after, .tooltip.bottom-menu[_ngcontent-%COMP%]:hover::before{opacity:1;transition:.1s ease-in-out}[_nghost-%COMP%] {display:flex;align-items:center;justify-content:center;margin:0}[_nghost-%COMP%]  .tooltip{display:flex;align-items:center}[_nghost-%COMP%]  .tooltip::after{transform:translateX(-20%)}[_nghost-%COMP%]  .tooltip::before{left:108%!important}"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GlSharedComponentButtonImageTooltipComponent, [{
        type: core.Component,
        args: [{
                selector: 'gl-shared-component-button-image-tooltip',
                template: "<div\n  *ngIf=\"show\"\n  [class.hidden]=\"!show\"\n  [id]=\"id\"\n  [attr.tooltip]=\"alt\"\n  class=\"tooltip top\">\n  <gl-shared-component-button-image-simple\n    [src]=\"src\"\n    [alt]=\"alt\"\n    [id]=\"id\"\n    [callback]=\"callback\"\n  ></gl-shared-component-button-image-simple>\n</div>\n",
                styles: [".tooltip-menu{z-index:100;position:relative;display:flex}.tooltip-menu::before{content:\"\";position:absolute;left:80%;transform:translateX(-137%) translateY(100%) rotate(180deg);border-width:.2em .2em 0;border-style:solid;border-color:#fff transparent transparent;z-index:100}.tooltip-menu::after{content:attr(tooltip);position:absolute;left:80%;transform:translateX(-57%) translateY(124%);background:#fff;text-align:left;color:#64666c;font-weight:600;padding:.5em 1em;width:-webkit-max-content;width:-moz-max-content;width:max-content;max-width:50em;border:none;pointer-events:none;white-space:nowrap;line-height:1.5em;font-size:.4em}.tooltip-menu:not(hover)::before{opacity:0;bottom:-.3em;transition:.1s ease-in-out}.tooltip-menu:not(hover)::after{opacity:0;bottom:0;transition:.1s ease-in-out}.tooltip-menu:hover::after,.tooltip-menu:hover::before{opacity:1;bottom:-.11em;transition:.1s ease-in-out}.tooltip.top{z-index:1000;position:relative}.tooltip.top::before{content:\"\";position:absolute;left:82%;border-width:.2em .2em 0;border-style:solid;border-color:#fff transparent transparent;z-index:100;transform:translateX(-200%) translateY(90%)}.tooltip.top::after{content:attr(tooltip);position:absolute;background:#fff;text-align:center;color:#64666c;font-weight:300;padding:.5em 1em;width:-webkit-max-content;width:-moz-max-content;width:max-content;max-width:50em;border:none;pointer-events:none;white-space:nowrap;line-height:1.5em;font-size:.4em;height:1.5em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;left:0}.tooltip.top:hover::before,.tooltip.top:not(hover)::before{top:-.5em;left:93%}.tooltip.top:hover::after,.tooltip.top:not(hover)::after{left:0;top:-3.1em}.tooltip.top:not(hover)::after,.tooltip.top:not(hover)::before{opacity:0;transition:.1s ease-in-out}.tooltip.top:hover::after,.tooltip.top:hover::before{opacity:1;transition:.1s ease-in-out}.tooltip.top.status-table{z-index:1000;position:relative}.tooltip.top.status-table::before{content:\"\";position:absolute;left:82%;border-width:.6em .6em 0;border-style:solid;border-color:#fff transparent transparent;z-index:100;transform:translateX(-237%) translateY(-15%)}.tooltip.top.status-table::after{content:attr(tooltip);position:absolute;background:#fff;text-align:center;color:#64666c;font-weight:300;padding:.5em 1em;width:-webkit-max-content;width:-moz-max-content;width:max-content;max-width:50em;border:none;pointer-events:none;white-space:nowrap;line-height:1.5em;height:1.5em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;left:0;font-size:.9em}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.tooltip-menu{margin:0 0 0 .3em;width:1.5em}.tooltip-menu::before{transform:translateX(-150%) translateY(100%) rotate(180deg)}.tooltip-menu::after{font-size:11.5px;transform:translateX(-55%) translateY(124%)}.tooltip.top.status-table::after{left:.9em;font-size:2em}}.tooltip.top.status-table:not(hover)::after,.tooltip.top.status-table:not(hover)::before{opacity:0;transition:.1s ease-in-out}.tooltip.top.status-table:hover::after,.tooltip.top.status-table:hover::before{opacity:1;transition:.1s ease-in-out}.tooltip.bottom{z-index:1000;position:relative}.tooltip.bottom::before{content:\"\";position:absolute;border-width:.2em .2em 0;border-style:solid;border-color:#fff transparent transparent;z-index:100;left:107%;transform:translateX(-137%) translateY(100%) rotate(180deg)}.tooltip.bottom::after{content:attr(tooltip);position:absolute;background:#fff;text-align:center;color:#64666c;font-weight:300;padding:.5em 1em;width:-webkit-max-content;width:-moz-max-content;width:max-content;max-width:50em;border:none;pointer-events:none;white-space:nowrap;line-height:1.5em;font-size:.4em;height:1.5em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.tooltip.bottom:hover::before,.tooltip.bottom:not(hover)::before{bottom:.1em}.tooltip.bottom:hover::after,.tooltip.bottom:not(hover)::after{left:0;bottom:-2.7em}.tooltip.bottom:not(hover)::after,.tooltip.bottom:not(hover)::before{opacity:0;transition:.1s ease-in-out}.tooltip.bottom:hover::after,.tooltip.bottom:hover::before{opacity:1;transition:.1s ease-in-out}.tooltip.bottom-right{z-index:1000;position:relative}.tooltip.bottom-right::before{content:\"\";position:absolute;left:82%;border-width:.2em .2em 0;border-style:solid;border-color:#fff transparent transparent;z-index:100;transform:translateX(-137%) translateY(100%) rotate(180deg)}.tooltip.bottom-right::after{content:attr(tooltip);position:absolute;background:#fff;text-align:center;color:#64666c;font-weight:300;padding:.5em 1em;width:-webkit-max-content;width:-moz-max-content;width:max-content;max-width:50em;border:none;pointer-events:none;white-space:nowrap;line-height:1.5em;font-size:.4em;height:1.5em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.tooltip.bottom-right:hover::before,.tooltip.bottom-right:not(hover)::before{left:94%}.tooltip.bottom-right:hover::after,.tooltip.bottom-right:not(hover)::after{left:-200%;bottom:-2.7em}.tooltip.bottom-right:not(hover)::after,.tooltip.bottom-right:not(hover)::before{opacity:0;transition:.1s ease-in-out}.tooltip.bottom-right:hover::after,.tooltip.bottom-right:hover::before{opacity:1;transition:.1s ease-in-out}.tooltip.bottom-gantt{z-index:1000;position:relative}.tooltip.bottom-gantt::before{content:\"\";position:absolute;left:82%;border-width:.2em .2em 0;border-style:solid;border-color:#fff transparent transparent;z-index:100;transform:translateX(-137%) translateY(100%) rotate(180deg)}.tooltip.bottom-gantt::after{content:attr(tooltip);position:absolute;background:#fff;text-align:center;color:#64666c;font-weight:300;padding:.5em 1em;width:-webkit-max-content;width:-moz-max-content;width:max-content;max-width:50em;border:none;pointer-events:none;white-space:nowrap;line-height:1.5em;font-size:.4em;height:1.5em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.tooltip.bottom-gantt::after{font-size:11.5px}}.tooltip.bottom-gantt:hover::before,.tooltip.bottom-gantt:not(hover)::before{left:83%;bottom:-.1em}.tooltip.bottom-gantt:hover::after,.tooltip.bottom-gantt:not(hover)::after{left:0;bottom:-3.1em}.tooltip.bottom-gantt:not(hover)::after,.tooltip.bottom-gantt:not(hover)::before{opacity:0;transition:.1s ease-in-out}.tooltip.bottom-gantt:hover::after,.tooltip.bottom-gantt:hover::before{opacity:1;transition:.1s ease-in-out}.tooltip.bottom-menu{z-index:1000;position:relative}.tooltip.bottom-menu::before{content:\"\";position:absolute;left:82%;border-width:.2em .2em 0;border-style:solid;border-color:#fff transparent transparent;z-index:100;transform:translateX(-137%) translateY(100%) rotate(180deg)}.tooltip.bottom-menu::after{content:attr(tooltip);position:absolute;background:#fff;text-align:center;color:#64666c;font-weight:300;padding:.5em 1em;width:-webkit-max-content;width:-moz-max-content;width:max-content;max-width:50em;border:none;pointer-events:none;white-space:nowrap;line-height:1.5em;font-size:.4em;height:1.5em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.tooltip.bottom-menu:hover::before,.tooltip.bottom-menu:not(hover)::before{left:74%;bottom:-.1em}.tooltip.bottom-menu:hover::after,.tooltip.bottom-menu:not(hover)::after{left:-64%;bottom:-3.1em}.tooltip.bottom-menu:not(hover)::after,.tooltip.bottom-menu:not(hover)::before{opacity:0;transition:.1s ease-in-out}.tooltip.bottom-menu:hover::after,.tooltip.bottom-menu:hover::before{opacity:1;transition:.1s ease-in-out}:host::ng-deep{display:flex;align-items:center;justify-content:center;margin:0}:host::ng-deep .tooltip{display:flex;align-items:center}:host::ng-deep .tooltip::after{transform:translateX(-20%)}:host::ng-deep .tooltip::before{left:108%!important}"]
            }]
    }], function () { return []; }, { show: [{
            type: core.Input
        }], id: [{
            type: core.Input
        }], alt: [{
            type: core.Input
        }], src: [{
            type: core.Input
        }], callback: [{
            type: core.Input
        }] }); })();
        return GlSharedComponentButtonImageTooltipComponent;
    }());

    var GlSharedComponentButtonMenuSimpleComponent = /** @class */ (function () {
        function GlSharedComponentButtonMenuSimpleComponent() {
            this.disabled = false;
        }
        __decorate([
            core.Input()
        ], GlSharedComponentButtonMenuSimpleComponent.prototype, "disabled", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentButtonMenuSimpleComponent.prototype, "src", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentButtonMenuSimpleComponent.prototype, "id", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentButtonMenuSimpleComponent.prototype, "alt", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentButtonMenuSimpleComponent.prototype, "callback", void 0);
GlSharedComponentButtonMenuSimpleComponent.ɵfac = function GlSharedComponentButtonMenuSimpleComponent_Factory(t) { return new (t || GlSharedComponentButtonMenuSimpleComponent)(); };
GlSharedComponentButtonMenuSimpleComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GlSharedComponentButtonMenuSimpleComponent, selectors: [["gl-shared-component-button-menu-simple"]], inputs: { disabled: "disabled", src: "src", id: "id", alt: "alt", callback: "callback" }, decls: 1, vars: 3, consts: [[1, "menu-buttons", 3, "id", "src", "alt", "click"]], template: function GlSharedComponentButtonMenuSimpleComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "img", 0);
        ɵngcc0.ɵɵlistener("click", function GlSharedComponentButtonMenuSimpleComponent_Template_img_click_0_listener() { return ctx.callback; });
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("id", ctx.id)("src", ctx.src, ɵngcc0.ɵɵsanitizeUrl)("alt", ctx.alt);
    } }, styles: [".menu-buttons[_ngcontent-%COMP%]{height:1.5em;width:1.5em;margin:0 0 0 .3em;cursor:pointer}.menu-buttons[_ngcontent-%COMP%]:hover{transform:scale(1.1);opacity:1;transition:.2s ease-in-out}.menu-buttons[_ngcontent-%COMP%]:not(hover){transform:scale(1);opacity:.5;transition:.2s ease-in-out}@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){[_nghost-%COMP%]{display:block}}"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GlSharedComponentButtonMenuSimpleComponent, [{
        type: core.Component,
        args: [{
                selector: 'gl-shared-component-button-menu-simple',
                template: "<img\n  [id]=\"id\"\n  class=\"menu-buttons\"\n  [src]=\"src\"\n  [alt]=\"alt\"\n  (click)=\"callback\">\n",
                styles: [".menu-buttons{height:1.5em;width:1.5em;margin:0 0 0 .3em;cursor:pointer}.menu-buttons:hover{transform:scale(1.1);opacity:1;transition:.2s ease-in-out}.menu-buttons:not(hover){transform:scale(1);opacity:.5;transition:.2s ease-in-out}@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){:host{display:block}}"]
            }]
    }], function () { return []; }, { disabled: [{
            type: core.Input
        }], src: [{
            type: core.Input
        }], id: [{
            type: core.Input
        }], alt: [{
            type: core.Input
        }], callback: [{
            type: core.Input
        }] }); })();
        return GlSharedComponentButtonMenuSimpleComponent;
    }());

    var GlSharedComponentButtonMenuTooltipComponent = /** @class */ (function () {
        function GlSharedComponentButtonMenuTooltipComponent() {
            this.disabled = false;
        }
        __decorate([
            core.Input()
        ], GlSharedComponentButtonMenuTooltipComponent.prototype, "disabled", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentButtonMenuTooltipComponent.prototype, "tooltip", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentButtonMenuTooltipComponent.prototype, "src", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentButtonMenuTooltipComponent.prototype, "id", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentButtonMenuTooltipComponent.prototype, "alt", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentButtonMenuTooltipComponent.prototype, "callback", void 0);
GlSharedComponentButtonMenuTooltipComponent.ɵfac = function GlSharedComponentButtonMenuTooltipComponent_Factory(t) { return new (t || GlSharedComponentButtonMenuTooltipComponent)(); };
GlSharedComponentButtonMenuTooltipComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GlSharedComponentButtonMenuTooltipComponent, selectors: [["gl-shared-component-button-menu-tooltip"]], inputs: { disabled: "disabled", tooltip: "tooltip", src: "src", id: "id", alt: "alt", callback: "callback" }, decls: 1, vars: 1, consts: [["class", "tooltip-menu", 4, "ngIf"], [1, "tooltip-menu"], [3, "src", "id", "alt", "click"]], template: function GlSharedComponentButtonMenuTooltipComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, GlSharedComponentButtonMenuTooltipComponent_div_0_Template, 2, 4, "div", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", !ctx.disabled);
    } }, directives: [ɵngcc1.NgIf, GlSharedComponentButtonMenuSimpleComponent], styles: [".tooltip-menu[_ngcontent-%COMP%]{z-index:100;position:relative;display:flex}.tooltip-menu[_ngcontent-%COMP%]::before{content:\"\";position:absolute;left:80%;transform:translateX(-137%) translateY(100%) rotate(180deg);border-width:.2em .2em 0;border-style:solid;border-color:#fff transparent transparent;z-index:100}.tooltip-menu[_ngcontent-%COMP%]::after{content:attr(alt);position:absolute;left:50%;transform:translateX(-85%) translateY(124%);background:#fff;text-align:left;color:#64666c;font-weight:600;padding:.5em 1em;width:-webkit-max-content;width:-moz-max-content;width:max-content;max-width:50em;border:none;pointer-events:none;white-space:nowrap;line-height:1.5em;font-size:.4em}.tooltip-menu[_ngcontent-%COMP%]:not(hover)::before{opacity:0;bottom:-.3em;transition:.1s ease-in-out}.tooltip-menu[_ngcontent-%COMP%]:not(hover)::after{opacity:0;bottom:0;transition:.1s ease-in-out}.tooltip-menu[_ngcontent-%COMP%]:hover::after, .tooltip-menu[_ngcontent-%COMP%]:hover::before{opacity:1;bottom:-.11em;transition:.1s ease-in-out}@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){[_nghost-%COMP%] {display:block}}"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GlSharedComponentButtonMenuTooltipComponent, [{
        type: core.Component,
        args: [{
                selector: 'gl-shared-component-button-menu-tooltip',
                template: "<div [attr.alt]=\"alt\" class=\"tooltip-menu\" *ngIf=\"!disabled\">\n  <gl-shared-component-button-menu-simple\n    [src]=\"src\"\n    [id]=\"id\"\n    [alt]=\"alt\"\n    (click)=\"callback($event)\"\n  ></gl-shared-component-button-menu-simple>\n</div>\n",
                styles: [".tooltip-menu{z-index:100;position:relative;display:flex}.tooltip-menu::before{content:\"\";position:absolute;left:80%;transform:translateX(-137%) translateY(100%) rotate(180deg);border-width:.2em .2em 0;border-style:solid;border-color:#fff transparent transparent;z-index:100}.tooltip-menu::after{content:attr(alt);position:absolute;left:50%;transform:translateX(-85%) translateY(124%);background:#fff;text-align:left;color:#64666c;font-weight:600;padding:.5em 1em;width:-webkit-max-content;width:-moz-max-content;width:max-content;max-width:50em;border:none;pointer-events:none;white-space:nowrap;line-height:1.5em;font-size:.4em}.tooltip-menu:not(hover)::before{opacity:0;bottom:-.3em;transition:.1s ease-in-out}.tooltip-menu:not(hover)::after{opacity:0;bottom:0;transition:.1s ease-in-out}.tooltip-menu:hover::after,.tooltip-menu:hover::before{opacity:1;bottom:-.11em;transition:.1s ease-in-out}@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){:host::ng-deep{display:block}}"]
            }]
    }], function () { return []; }, { disabled: [{
            type: core.Input
        }], tooltip: [{
            type: core.Input
        }], src: [{
            type: core.Input
        }], id: [{
            type: core.Input
        }], alt: [{
            type: core.Input
        }], callback: [{
            type: core.Input
        }] }); })();
        return GlSharedComponentButtonMenuTooltipComponent;
    }());

    var GlSharedComponentInputAutocompleteSimpleService = /** @class */ (function () {
        function GlSharedComponentInputAutocompleteSimpleService() {
            this.autocompleteList$ = new rxjs.Subject();
            this.autocompleteReset$ = new rxjs.Subject();
            this.autocompleteLoaded$ = new rxjs.Subject();
            this.autocompleteUpdateValue$ = new rxjs.Subject();
        }
        GlSharedComponentInputAutocompleteSimpleService.prototype.ngOnDestroy = function () {
            this.autocompleteList$.observers.map(function (x) { return x.complete(); });
            this.autocompleteLoaded$.observers.map(function (x) { return x.complete(); });
            this.autocompleteReset$.observers.map(function (x) { return x.complete(); });
            this.autocompleteUpdateValue$.observers.map(function (x) { return x.complete(); });
        };
        GlSharedComponentInputAutocompleteSimpleService.ɵprov = core.ɵɵdefineInjectable({ factory: function GlSharedComponentInputAutocompleteSimpleService_Factory() { return new GlSharedComponentInputAutocompleteSimpleService(); }, token: GlSharedComponentInputAutocompleteSimpleService, providedIn: "root" });
GlSharedComponentInputAutocompleteSimpleService.ɵfac = function GlSharedComponentInputAutocompleteSimpleService_Factory(t) { return new (t || GlSharedComponentInputAutocompleteSimpleService)(); };
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GlSharedComponentInputAutocompleteSimpleService, [{
        type: core.Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
        return GlSharedComponentInputAutocompleteSimpleService;
    }());

    var GlSharedComponentInputAutocompleteSimpleComponent = /** @class */ (function () {
        function GlSharedComponentInputAutocompleteSimpleComponent(_service, overlay) {
            var _this = this;
            this._service = _service;
            this.overlay = overlay;
            this.currentValue = new core.EventEmitter();
            this.listItems = [];
            this.class = '';
            this.maxLength = '255';
            this._loaded = false;
            this.imageSource = '../assets/img/icon/drop-down/arrow-down.svg';
            this.autocompleteInput = new forms.FormControl();
            _service.autocompleteList$.subscribe(function (update) {
                if (_this.listName === update.listName) {
                    _this.listItems = update.options;
                    _this.setup();
                }
            });
            _service.autocompleteReset$.subscribe(function (update) {
                if (_this.id === update.comboboxId) {
                    _this.input.nativeElement.value = '';
                    _this.validate();
                }
            });
            _service.autocompleteLoaded$.subscribe(function (loaded) {
                _this._loaded = loaded;
                _service.autocompleteLoaded$.observers.map(function (x) { return x.complete(); });
            });
            _service.autocompleteUpdateValue$.subscribe(function (update) {
                if (_this.id === update.comboboxId) {
                    _this.listItems = update.options;
                    var value = update.options.filter(function (x) { return x.value === update.value; });
                    var input = _this.input.nativeElement;
                    if (value != null && value.length > 0) {
                        input.value = value[0].text;
                        _this.autocompleteInput.setValue(value[0].text);
                        _this.value = value[0].value;
                        _this.setup();
                    }
                    else {
                        input.value = '';
                        _this.autocompleteInput.setValue('');
                        _this.value = '';
                        _this.setup();
                    }
                }
            });
        }
        GlSharedComponentInputAutocompleteSimpleComponent.prototype.ngOnInit = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.setup();
                    return [2 /*return*/];
                });
            });
        };
        GlSharedComponentInputAutocompleteSimpleComponent.prototype.setup = function () {
            var _this = this;
            this.filteredOptions = this.autocompleteInput.valueChanges.pipe(operators.startWith(''), 
            // startWith(this.value),
            operators.map(function (value) { return _this.filter(value); }));
            // if (!this._loaded) { this.autocompleteInput.setValue(this.value); }
            // this.autocompleteInput.setValue(this.value);
            setTimeout(function () { _this.validate(); });
        };
        GlSharedComponentInputAutocompleteSimpleComponent.prototype.filter = function (value) {
            if (value == null) {
                value = '';
            }
            var filterValue = value.toLowerCase();
            return this.listItems.filter(function (option) { var _a; return (_a = option.text) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes(filterValue); });
        };
        GlSharedComponentInputAutocompleteSimpleComponent.prototype.validate = function () {
            var input = this.input.nativeElement;
            var value = input.value;
            var filteredData = this.filter(value);
            if (value != null && value.trim().length > 0 && filteredData.length > 0) {
                input.value = filteredData[0].text;
                this.autocompleteInput.setValue(filteredData[0].text);
                this.currentValue.emit({ text: filteredData[0].text, value: filteredData[0].value });
            }
            else {
                input.value = '';
                this.autocompleteInput.setValue('');
                this.currentValue.emit({ text: null, value: null });
            }
        };
        GlSharedComponentInputAutocompleteSimpleComponent.prototype.reset = function (auto, event) {
            if (auto.options != null) {
                auto.options.map(function (option) { return option.deselect(); });
            }
            event.currentTarget.select();
        };
        GlSharedComponentInputAutocompleteSimpleComponent.prototype.ngOnDestroy = function () {
            this._service.autocompleteList$.observers.map(function (x) { return x.complete(); });
            this._service.autocompleteReset$.observers.map(function (x) { return x.complete(); });
            this._service.autocompleteLoaded$.observers.map(function (x) { return x.complete(); });
        };
        GlSharedComponentInputAutocompleteSimpleComponent.prototype.ngOnChanges = function (changes) {
            var _a, _b, _c, _d;
            var prevList = (_a = changes.listItems) === null || _a === void 0 ? void 0 : _a.previousValue;
            var currList = (_b = changes.listItems) === null || _b === void 0 ? void 0 : _b.currentValue;
            var prevValue = (_c = changes.value) === null || _c === void 0 ? void 0 : _c.previousValue;
            var currValue = (_d = changes.value) === null || _d === void 0 ? void 0 : _d.currentValue;
            if (prevList != currList) {
                this.setup();
            }
            if (prevValue != currValue) {
                this.setup();
            }
            this.overlay.position().global().dispose();
            // if (prevList != currList || prevValue != currValue) { this.setup(); }
        };
        GlSharedComponentInputAutocompleteSimpleComponent.ctorParameters = function () { return [
            { type: GlSharedComponentInputAutocompleteSimpleService },
            { type: overlay.Overlay }
        ]; };
        __decorate([
            core.ViewChild('input')
        ], GlSharedComponentInputAutocompleteSimpleComponent.prototype, "input", void 0);
        __decorate([
            core.Output()
        ], GlSharedComponentInputAutocompleteSimpleComponent.prototype, "currentValue", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentInputAutocompleteSimpleComponent.prototype, "listItems", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentInputAutocompleteSimpleComponent.prototype, "disabled", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentInputAutocompleteSimpleComponent.prototype, "listName", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentInputAutocompleteSimpleComponent.prototype, "id", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentInputAutocompleteSimpleComponent.prototype, "placeholder", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentInputAutocompleteSimpleComponent.prototype, "itemContentAlignment", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentInputAutocompleteSimpleComponent.prototype, "class", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentInputAutocompleteSimpleComponent.prototype, "value", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentInputAutocompleteSimpleComponent.prototype, "maxLength", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentInputAutocompleteSimpleComponent.prototype, "custom", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentInputAutocompleteSimpleComponent.prototype, "baseUrl", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentInputAutocompleteSimpleComponent.prototype, "valueField", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentInputAutocompleteSimpleComponent.prototype, "textField", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentInputAutocompleteSimpleComponent.prototype, "labelValue", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentInputAutocompleteSimpleComponent.prototype, "labelAlignment", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentInputAutocompleteSimpleComponent.prototype, "required", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentInputAutocompleteSimpleComponent.prototype, "requiredField", void 0);
GlSharedComponentInputAutocompleteSimpleComponent.ɵfac = function GlSharedComponentInputAutocompleteSimpleComponent_Factory(t) { return new (t || GlSharedComponentInputAutocompleteSimpleComponent)(ɵngcc0.ɵɵdirectiveInject(GlSharedComponentInputAutocompleteSimpleService), ɵngcc0.ɵɵdirectiveInject(ɵngcc3.Overlay)); };
GlSharedComponentInputAutocompleteSimpleComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GlSharedComponentInputAutocompleteSimpleComponent, selectors: [["gl-shared-component-input-autocomplete-simple"]], viewQuery: function GlSharedComponentInputAutocompleteSimpleComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.input = _t.first);
    } }, inputs: { listItems: "listItems", class: "class", maxLength: "maxLength", disabled: "disabled", listName: "listName", id: "id", placeholder: "placeholder", itemContentAlignment: "itemContentAlignment", value: "value", custom: "custom", baseUrl: "baseUrl", valueField: "valueField", textField: "textField", labelValue: "labelValue", labelAlignment: "labelAlignment", required: "required", requiredField: "requiredField" }, outputs: { currentValue: "currentValue" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c3, decls: 11, vars: 29, consts: [["floatLabel", "never", "appearance", "none", 3, "focusout"], ["type", "text", "aria-label", "Number", "matInput", "", 3, "readonly", "id", "placeholder", "formControl", "maxLength", "matAutocomplete", "focusin", "focusout"], ["input", ""], ["alt", "Show items", 3, "src", "click"], ["arrowDown", ""], ["autoActiveFirstOption", "true", 3, "mat-dialog-close", "optionSelected"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function GlSharedComponentInputAutocompleteSimpleComponent_Template(rf, ctx) { if (rf & 1) {
        var _r5 = ɵngcc0.ɵɵgetCurrentView();
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
        ɵngcc0.ɵɵelementStart(1, "mat-form-field", 0);
        ɵngcc0.ɵɵlistener("focusout", function GlSharedComponentInputAutocompleteSimpleComponent_Template_mat_form_field_focusout_1_listener() { return ctx.overlay.position().global().dispose(); });
        ɵngcc0.ɵɵelementStart(2, "div");
        ɵngcc0.ɵɵelementStart(3, "input", 1, 2);
        ɵngcc0.ɵɵlistener("focusin", function GlSharedComponentInputAutocompleteSimpleComponent_Template_input_focusin_3_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); var _r2 = ɵngcc0.ɵɵreference(8); return ctx.reset(_r2, $event); })("focusout", function GlSharedComponentInputAutocompleteSimpleComponent_Template_input_focusout_3_listener() { return ctx.validate(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(5, "img", 3, 4);
        ɵngcc0.ɵɵlistener("click", function GlSharedComponentInputAutocompleteSimpleComponent_Template_img_click_5_listener() { return ctx.autocompleteInput.reset(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(7, "mat-autocomplete", 5, 6);
        ɵngcc0.ɵɵlistener("optionSelected", function GlSharedComponentInputAutocompleteSimpleComponent_Template_mat_autocomplete_optionSelected_7_listener() { ɵngcc0.ɵɵrestoreView(_r5); var _r0 = ɵngcc0.ɵɵreference(4); return _r0.blur(); });
        ɵngcc0.ɵɵtemplate(9, GlSharedComponentInputAutocompleteSimpleComponent_mat_option_9_Template, 2, 2, "mat-option", 7);
        ɵngcc0.ɵɵpipe(10, "async");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        var _r2 = ɵngcc0.ɵɵreference(8);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate2("input-container custom-combobox ", ctx.class, " ", ctx.disabled ? "read-only" : "", "");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate2("combobox-container ", ctx.listItems.length > 0 ? "" : "no-data", " ", ctx.disabled ? "read-only" : "", "");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate4("item-content ", ctx.itemContentAlignment, " ", ctx.class, " ", ctx.listItems.length > 0 ? "" : "no-data", " ", ctx.disabled ? "read-only" : "", "");
        ɵngcc0.ɵɵproperty("readonly", ctx.disabled)("id", ctx.id)("placeholder", ctx.placeholder)("formControl", ctx.autocompleteInput)("maxLength", ctx.maxLength)("matAutocomplete", _r2);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵclassMapInterpolate2("arrow-down ", ctx.class, " ", ctx.disabled ? "read-only" : "", "");
        ɵngcc0.ɵɵproperty("src", ctx.imageSource, ɵngcc0.ɵɵsanitizeUrl);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("mat-dialog-close", ctx.overlay.position().global().dispose());
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngForOf", ɵngcc0.ɵɵpipeBind1(10, 27, ctx.filteredOptions));
    } }, directives: [ɵngcc4.MatFormField, ɵngcc5.MatInput, ɵngcc6.DefaultValueAccessor, ɵngcc7.MatAutocompleteTrigger, ɵngcc6.NgControlStatus, ɵngcc6.FormControlDirective, ɵngcc7.MatAutocomplete, ɵngcc8.MatDialogClose, ɵngcc1.NgForOf, ɵngcc9.MatOption], pipes: [ɵngcc1.AsyncPipe], styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);  .dark .mat-autocomplete-panel,   .light .mat-autocomplete-panel,   .mat-autocomplete-panel{scrollbar-face-color:#333437!important;scrollbar-shadow-color:#38393c!important;scrollbar-track-color:#2c2c2f!important;scrollbar-arrow-color:#64666c!important}  .mat-autocomplete-panel::-webkit-scrollbar:horizontal{height:.5em!important}  .mat-autocomplete-panel::-webkit-scrollbar:vertical{width:.5em!important}  .dark .mat-autocomplete-panel::-webkit-scrollbar-button,   .light .mat-autocomplete-panel::-webkit-scrollbar-button,   .mat-autocomplete-panel::-webkit-scrollbar-button{background-color:#333437!important;display:none!important}  .dark .mat-autocomplete-panel::-webkit-scrollbar-track,   .light .mat-autocomplete-panel::-webkit-scrollbar-track,   .mat-autocomplete-panel::-webkit-scrollbar-track{background-color:green!important}  .dark .mat-autocomplete-panel::-webkit-scrollbar-track-piece,   .light .mat-autocomplete-panel::-webkit-scrollbar-track-piece,   .mat-autocomplete-panel::-webkit-scrollbar-track-piece{background-color:#2c2c2f!important}  .dark .mat-autocomplete-panel::-webkit-scrollbar-thumb,   .light .mat-autocomplete-panel::-webkit-scrollbar-thumb,   .mat-autocomplete-panel::-webkit-scrollbar-thumb{background-color:#64666c!important;border:1px solid #38393c!important}[_nghost-%COMP%] {display:flex;flex-direction:column;flex:1 0 auto;position:relative}[_nghost-%COMP%]  mat-form-field{display:flex;flex-grow:1;margin:0}[_nghost-%COMP%]  mat-form-field .mat-form-field-wrapper{display:flex;flex-grow:1;flex-direction:column;padding:0}[_nghost-%COMP%]  mat-form-field .mat-form-field-wrapper .mat-form-field-flex{display:flex;flex-grow:1;align-items:inherit}[_nghost-%COMP%]  mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix{padding:0;flex:1 1 0px;border:none;width:100%;display:flex}[_nghost-%COMP%]  mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container{display:flex;flex-grow:1;flex-direction:row;pointer-events:none}[_nghost-%COMP%]  mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element{font-family:Montserrat,sans-serif;font-weight:400;padding:.8em;border:none;background-color:#333437;color:#fff;font-size:.45em;flex-grow:1;margin:0}[_nghost-%COMP%]  mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element::-moz-placeholder{color:#64666c!important}[_nghost-%COMP%]  mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element:-ms-input-placeholder{color:#64666c!important}[_nghost-%COMP%]  mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element::-ms-input-placeholder{color:#64666c!important}[_nghost-%COMP%]  mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element::placeholder{color:#64666c!important}[_nghost-%COMP%]  mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element.left{text-align:left}[_nghost-%COMP%]  mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element.center{text-align:center}[_nghost-%COMP%]  mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element.right{text-align:right}[_nghost-%COMP%]  mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element.light{background-color:rgba(0,0,0,.1)}[_nghost-%COMP%]  mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element.light::-moz-placeholder{color:rgba(255,255,255,.2)!important}[_nghost-%COMP%]  mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element.light:-ms-input-placeholder{color:rgba(255,255,255,.2)!important}[_nghost-%COMP%]  mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element.light::-ms-input-placeholder{color:rgba(255,255,255,.2)!important}[_nghost-%COMP%]  mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element.light::placeholder{color:rgba(255,255,255,.2)!important}[_nghost-%COMP%]  mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element.dark{background-color:#161617}[_nghost-%COMP%]  mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element .item-content:-ms-input-placeholder{color:#64666c!important}[_nghost-%COMP%]  mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element .item-content.light:-ms-input-placeholder{color:gray!important}[_nghost-%COMP%]  mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .arrow-down{background-color:#333437;width:.6em;padding:0 .5em;transition:.2s ease-in-out}[_nghost-%COMP%]  mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .arrow-down:hover{background-color:#2c2c2f;transition:.2s ease-in-out}[_nghost-%COMP%]  mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .arrow-down.light{background-color:rgba(0,0,0,.1);transition:.2s ease-in-out}[_nghost-%COMP%]  mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .arrow-down.light::-moz-placeholder{color:rgba(255,255,255,.2)!important}[_nghost-%COMP%]  mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .arrow-down.light:-ms-input-placeholder{color:rgba(255,255,255,.2)!important}[_nghost-%COMP%]  mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .arrow-down.light::-ms-input-placeholder{color:rgba(255,255,255,.2)!important}[_nghost-%COMP%]  mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .arrow-down.light::placeholder{color:rgba(255,255,255,.2)!important}[_nghost-%COMP%]  mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .arrow-down.light:hover{background-color:rgba(0,0,0,.2);transition:.2s ease-in-out}[_nghost-%COMP%]  mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .arrow-down.dark{background-color:#161617;transition:.2s ease-in-out}[_nghost-%COMP%]  mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .arrow-down.dark:hover{background-color:#1a1b1d;transition:.2s ease-in-out}[_nghost-%COMP%]  mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .arrow-down.read-only{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none}[_nghost-%COMP%]  mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container.no-data .arrow-down, [_nghost-%COMP%]  mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container.read-only .arrow-down{display:none}@media screen and (-ms-high-contrast:none),(-ms-high-contrast:active){[_nghost-%COMP%]  .mat-form-field-label-wrapper{max-width:88.5%;top:0;padding-top:0}[_nghost-%COMP%]  .combobox-container .mat-input-element{max-width:77%}[_nghost-%COMP%]  .combobox-container .mat-input-element:-ms-input-placeholder{color:#64666c!important}[_nghost-%COMP%]  .combobox-container .mat-input-element::-moz-placeholder{color:#64666c!important}[_nghost-%COMP%]  .combobox-container .mat-input-element::-ms-input-placeholder{color:#64666c!important}[_nghost-%COMP%]  .combobox-container .mat-input-element::placeholder{color:#64666c!important}[_nghost-%COMP%]  .combobox-container .arrow-down{height:100%}[_nghost-%COMP%]  .combobox-container.read-only .mat-input-element{max-width:100%!important}[_nghost-%COMP%]  .combobox-container.no-data .mat-input-element{max-width:100%!important}[_nghost-%COMP%]  .read-only .mat-form-field-label-wrapper{max-width:100%}[_nghost-%COMP%]  .read-only .combobox-container .item-content{width:93%}}  .mat-autocomplete-panel{background-color:#38393c;border-radius:0;box-shadow:none!important;transition:.2s ease-in-out}  .mat-autocomplete-panel mat-option{font-size:1em;border-radius:0;transition:.2s ease-in-out;line-height:4em;height:4em;padding:0 1.5em}  .mat-autocomplete-panel mat-option:nth-child(2n+1){background-color:#333437;transition:.2s ease-in-out}  .mat-autocomplete-panel mat-option.mat-active,   .mat-autocomplete-panel mat-option.mat-selected{background-color:#d24077;transition:.2s ease-in-out}  .mat-autocomplete-panel mat-option:hover{background-color:#b01e45!important;transition:.2s ease-in-out}  .light .mat-autocomplete-panel{background-color:transparent;transition:.2s ease-in-out}  .light .mat-autocomplete-panel mat-option:nth-child(2n+1){background-color:rgba(0,0,0,.6);transition:.2s ease-in-out}  .light .mat-autocomplete-panel mat-option:nth-child(2n+2){background-color:rgba(0,0,0,.7);transition:.2s ease-in-out}  .light .mat-autocomplete-panel mat-option.mat-active{background-color:#d24077;transition:.2s ease-in-out}  .light .mat-autocomplete-panel mat-option:hover{background-color:#b01e45!important;transition:.2s ease-in-out}  .dark .mat-autocomplete-panel{background-color:transparent;transition:.2s ease-in-out}  .dark .mat-autocomplete-panel mat-option:nth-child(2n+1){background-color:#2c2c2f;transition:.2s ease-in-out}  .dark .mat-autocomplete-panel mat-option:nth-child(2n+2){background-color:#333437;transition:.2s ease-in-out}  .dark .mat-autocomplete-panel mat-option.mat-active{background-color:#d24077;transition:.2s ease-in-out}  .dark .mat-autocomplete-panel mat-option:hover{background-color:#b01e45!important;transition:.2s ease-in-out}@media screen and (min-device-width:320px) and (max-device-width:1024px){  .mat-autocomplete-panel{font-size:2.8vw!important}}@media screen and (min-device-width:1024px){  .mat-autocomplete-panel{font-size:.6vw!important}}"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GlSharedComponentInputAutocompleteSimpleComponent, [{
        type: core.Component,
        args: [{
                selector: 'gl-shared-component-input-autocomplete-simple',
                template: "<ng-content></ng-content>\n<mat-form-field\n  (focusout)=\"overlay.position().global().dispose()\"\n  class=\"input-container custom-combobox {{ class }} {{ disabled ? 'read-only' : '' }}\"\n  floatLabel=\"never\"\n  appearance=\"none\">\n  <div class=\"combobox-container {{ listItems.length > 0 ? '' : 'no-data' }} {{ disabled ? 'read-only' : '' }}\">\n    <input\n      #input\n      type=\"text\"\n      aria-label=\"Number\"\n      class=\"item-content {{ itemContentAlignment }} {{ class }} {{ listItems.length > 0 ? '' : 'no-data' }} {{ disabled ? 'read-only' : '' }}\"\n      matInput\n      [readonly]=\"disabled\"\n      [id]=\"id\"\n      [placeholder]=\"placeholder\"\n      [formControl]=\"autocompleteInput\"\n      [maxLength]=\"maxLength\"\n      [matAutocomplete]=\"auto\"\n      (focusin)=\"reset(auto, $event)\"\n      (focusout)=\"validate()\">\n    <img\n      #arrowDown\n      (click)=\"this.autocompleteInput.reset()\"\n      alt=\"Show items\"\n      class=\"arrow-down {{ class }} {{ disabled ? 'read-only' : '' }}\"\n      [src]=\"imageSource\">\n  </div>\n  <mat-autocomplete autoActiveFirstOption=\"true\" #auto=\"matAutocomplete\" (optionSelected)=\"input.blur()\" [mat-dialog-close]=\"overlay.position().global().dispose()\">\n    <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option.text\">\n      {{option.text}}\n    </mat-option>\n  </mat-autocomplete>\n</mat-form-field>\n\n",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);::ng-deep .dark .mat-autocomplete-panel,::ng-deep .light .mat-autocomplete-panel,::ng-deep .mat-autocomplete-panel{scrollbar-face-color:#333437!important;scrollbar-shadow-color:#38393c!important;scrollbar-track-color:#2c2c2f!important;scrollbar-arrow-color:#64666c!important}::ng-deep .mat-autocomplete-panel::-webkit-scrollbar:horizontal{height:.5em!important}::ng-deep .mat-autocomplete-panel::-webkit-scrollbar:vertical{width:.5em!important}::ng-deep .dark .mat-autocomplete-panel::-webkit-scrollbar-button,::ng-deep .light .mat-autocomplete-panel::-webkit-scrollbar-button,::ng-deep .mat-autocomplete-panel::-webkit-scrollbar-button{background-color:#333437!important;display:none!important}::ng-deep .dark .mat-autocomplete-panel::-webkit-scrollbar-track,::ng-deep .light .mat-autocomplete-panel::-webkit-scrollbar-track,::ng-deep .mat-autocomplete-panel::-webkit-scrollbar-track{background-color:green!important}::ng-deep .dark .mat-autocomplete-panel::-webkit-scrollbar-track-piece,::ng-deep .light .mat-autocomplete-panel::-webkit-scrollbar-track-piece,::ng-deep .mat-autocomplete-panel::-webkit-scrollbar-track-piece{background-color:#2c2c2f!important}::ng-deep .dark .mat-autocomplete-panel::-webkit-scrollbar-thumb,::ng-deep .light .mat-autocomplete-panel::-webkit-scrollbar-thumb,::ng-deep .mat-autocomplete-panel::-webkit-scrollbar-thumb{background-color:#64666c!important;border:1px solid #38393c!important}:host::ng-deep{display:flex;flex-direction:column;flex:1 0 auto;position:relative}:host::ng-deep mat-form-field{display:flex;flex-grow:1;margin:0}:host::ng-deep mat-form-field .mat-form-field-wrapper{display:flex;flex-grow:1;flex-direction:column;padding:0}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex{display:flex;flex-grow:1;align-items:inherit}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix{padding:0;flex:1 1 0px;border:none;width:100%;display:flex}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container{display:flex;flex-grow:1;flex-direction:row;pointer-events:none}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element{font-family:Montserrat,sans-serif;font-weight:400;padding:.8em;border:none;background-color:#333437;color:#fff;font-size:.45em;flex-grow:1;margin:0}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element::-moz-placeholder{color:#64666c!important}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element:-ms-input-placeholder{color:#64666c!important}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element::-ms-input-placeholder{color:#64666c!important}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element::placeholder{color:#64666c!important}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element.left{text-align:left}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element.center{text-align:center}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element.right{text-align:right}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element.light{background-color:rgba(0,0,0,.1)}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element.light::-moz-placeholder{color:rgba(255,255,255,.2)!important}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element.light:-ms-input-placeholder{color:rgba(255,255,255,.2)!important}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element.light::-ms-input-placeholder{color:rgba(255,255,255,.2)!important}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element.light::placeholder{color:rgba(255,255,255,.2)!important}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element.dark{background-color:#161617}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element .item-content:-ms-input-placeholder{color:#64666c!important}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element .item-content.light:-ms-input-placeholder{color:gray!important}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .arrow-down{background-color:#333437;width:.6em;padding:0 .5em;transition:.2s ease-in-out}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .arrow-down:hover{background-color:#2c2c2f;transition:.2s ease-in-out}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .arrow-down.light{background-color:rgba(0,0,0,.1);transition:.2s ease-in-out}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .arrow-down.light::-moz-placeholder{color:rgba(255,255,255,.2)!important}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .arrow-down.light:-ms-input-placeholder{color:rgba(255,255,255,.2)!important}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .arrow-down.light::-ms-input-placeholder{color:rgba(255,255,255,.2)!important}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .arrow-down.light::placeholder{color:rgba(255,255,255,.2)!important}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .arrow-down.light:hover{background-color:rgba(0,0,0,.2);transition:.2s ease-in-out}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .arrow-down.dark{background-color:#161617;transition:.2s ease-in-out}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .arrow-down.dark:hover{background-color:#1a1b1d;transition:.2s ease-in-out}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .arrow-down.read-only{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container.no-data .arrow-down,:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container.read-only .arrow-down{display:none}@media screen and (-ms-high-contrast:none),(-ms-high-contrast:active){:host::ng-deep .mat-form-field-label-wrapper{max-width:88.5%;top:0;padding-top:0}:host::ng-deep .combobox-container .mat-input-element{max-width:77%}:host::ng-deep .combobox-container .mat-input-element:-ms-input-placeholder{color:#64666c!important}:host::ng-deep .combobox-container .mat-input-element::-moz-placeholder{color:#64666c!important}:host::ng-deep .combobox-container .mat-input-element::-ms-input-placeholder{color:#64666c!important}:host::ng-deep .combobox-container .mat-input-element::placeholder{color:#64666c!important}:host::ng-deep .combobox-container .arrow-down{height:100%}:host::ng-deep .combobox-container.read-only .mat-input-element{max-width:100%!important}:host::ng-deep .combobox-container.no-data .mat-input-element{max-width:100%!important}:host::ng-deep .read-only .mat-form-field-label-wrapper{max-width:100%}:host::ng-deep .read-only .combobox-container .item-content{width:93%}}::ng-deep .mat-autocomplete-panel{background-color:#38393c;border-radius:0;box-shadow:none!important;transition:.2s ease-in-out}::ng-deep .mat-autocomplete-panel mat-option{font-size:1em;border-radius:0;transition:.2s ease-in-out;line-height:4em;height:4em;padding:0 1.5em}::ng-deep .mat-autocomplete-panel mat-option:nth-child(2n+1){background-color:#333437;transition:.2s ease-in-out}::ng-deep .mat-autocomplete-panel mat-option.mat-active,::ng-deep .mat-autocomplete-panel mat-option.mat-selected{background-color:#d24077;transition:.2s ease-in-out}::ng-deep .mat-autocomplete-panel mat-option:hover{background-color:#b01e45!important;transition:.2s ease-in-out}::ng-deep .light .mat-autocomplete-panel{background-color:transparent;transition:.2s ease-in-out}::ng-deep .light .mat-autocomplete-panel mat-option:nth-child(2n+1){background-color:rgba(0,0,0,.6);transition:.2s ease-in-out}::ng-deep .light .mat-autocomplete-panel mat-option:nth-child(2n+2){background-color:rgba(0,0,0,.7);transition:.2s ease-in-out}::ng-deep .light .mat-autocomplete-panel mat-option.mat-active{background-color:#d24077;transition:.2s ease-in-out}::ng-deep .light .mat-autocomplete-panel mat-option:hover{background-color:#b01e45!important;transition:.2s ease-in-out}::ng-deep .dark .mat-autocomplete-panel{background-color:transparent;transition:.2s ease-in-out}::ng-deep .dark .mat-autocomplete-panel mat-option:nth-child(2n+1){background-color:#2c2c2f;transition:.2s ease-in-out}::ng-deep .dark .mat-autocomplete-panel mat-option:nth-child(2n+2){background-color:#333437;transition:.2s ease-in-out}::ng-deep .dark .mat-autocomplete-panel mat-option.mat-active{background-color:#d24077;transition:.2s ease-in-out}::ng-deep .dark .mat-autocomplete-panel mat-option:hover{background-color:#b01e45!important;transition:.2s ease-in-out}@media screen and (min-device-width:320px) and (max-device-width:1024px){::ng-deep .mat-autocomplete-panel{font-size:2.8vw!important}}@media screen and (min-device-width:1024px){::ng-deep .mat-autocomplete-panel{font-size:.6vw!important}}"]
            }]
    }], function () { return [{ type: GlSharedComponentInputAutocompleteSimpleService }, { type: ɵngcc3.Overlay }]; }, { currentValue: [{
            type: core.Output
        }], listItems: [{
            type: core.Input
        }], class: [{
            type: core.Input
        }], maxLength: [{
            type: core.Input
        }], input: [{
            type: core.ViewChild,
            args: ['input']
        }], disabled: [{
            type: core.Input
        }], listName: [{
            type: core.Input
        }], id: [{
            type: core.Input
        }], placeholder: [{
            type: core.Input
        }], itemContentAlignment: [{
            type: core.Input
        }], value: [{
            type: core.Input
        }], custom: [{
            type: core.Input
        }], baseUrl: [{
            type: core.Input
        }], valueField: [{
            type: core.Input
        }], textField: [{
            type: core.Input
        }], labelValue: [{
            type: core.Input
        }], labelAlignment: [{
            type: core.Input
        }], required: [{
            type: core.Input
        }], requiredField: [{
            type: core.Input
        }] }); })();
        return GlSharedComponentInputAutocompleteSimpleComponent;
    }());

    var GlSharedComponentInputAutocompleteLabelComponent = /** @class */ (function () {
        function GlSharedComponentInputAutocompleteLabelComponent() {
            this.currentValue = new core.EventEmitter();
            this.listItems = [];
            this.disabled = false;
            this.requiredField = 'Required field';
        }
        GlSharedComponentInputAutocompleteLabelComponent.prototype.onCurrentValue = function (value) { this.currentValue.emit(value); };
        __decorate([
            core.Output()
        ], GlSharedComponentInputAutocompleteLabelComponent.prototype, "currentValue", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentInputAutocompleteLabelComponent.prototype, "listItems", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentInputAutocompleteLabelComponent.prototype, "disabled", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentInputAutocompleteLabelComponent.prototype, "listName", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentInputAutocompleteLabelComponent.prototype, "id", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentInputAutocompleteLabelComponent.prototype, "labelValue", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentInputAutocompleteLabelComponent.prototype, "labelAlignment", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentInputAutocompleteLabelComponent.prototype, "placeholder", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentInputAutocompleteLabelComponent.prototype, "itemContentAlignment", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentInputAutocompleteLabelComponent.prototype, "class", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentInputAutocompleteLabelComponent.prototype, "value", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentInputAutocompleteLabelComponent.prototype, "required", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentInputAutocompleteLabelComponent.prototype, "custom", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentInputAutocompleteLabelComponent.prototype, "baseUrl", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentInputAutocompleteLabelComponent.prototype, "valueField", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentInputAutocompleteLabelComponent.prototype, "textField", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentInputAutocompleteLabelComponent.prototype, "requiredField", void 0);
GlSharedComponentInputAutocompleteLabelComponent.ɵfac = function GlSharedComponentInputAutocompleteLabelComponent_Factory(t) { return new (t || GlSharedComponentInputAutocompleteLabelComponent)(); };
GlSharedComponentInputAutocompleteLabelComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GlSharedComponentInputAutocompleteLabelComponent, selectors: [["gl-shared-component-input-autocomplete-label"]], inputs: { listItems: "listItems", disabled: "disabled", requiredField: "requiredField", listName: "listName", id: "id", labelValue: "labelValue", labelAlignment: "labelAlignment", placeholder: "placeholder", itemContentAlignment: "itemContentAlignment", class: "class", value: "value", required: "required", custom: "custom", baseUrl: "baseUrl", valueField: "valueField", textField: "textField" }, outputs: { currentValue: "currentValue" }, decls: 2, vars: 20, consts: [[3, "value", "listName", "id", "itemContentAlignment", "placeholder", "listItems", "disabled", "custom", "baseUrl", "valueField", "textField", "currentValue"], [3, "id", "labelAlignment", "labelValue", "required", "requiredLabel"]], template: function GlSharedComponentInputAutocompleteLabelComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "gl-shared-component-input-autocomplete-simple", 0);
        ɵngcc0.ɵɵlistener("currentValue", function GlSharedComponentInputAutocompleteLabelComponent_Template_gl_shared_component_input_autocomplete_simple_currentValue_0_listener($event) { return ctx.onCurrentValue($event); });
        ɵngcc0.ɵɵelement(1, "gl-shared-component-title-label-simple", 1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.class);
        ɵngcc0.ɵɵproperty("value", ctx.value)("listName", ctx.listName)("id", ctx.id)("itemContentAlignment", ctx.itemContentAlignment)("placeholder", ctx.placeholder)("listItems", ctx.listItems)("disabled", ctx.disabled)("custom", ctx.custom)("baseUrl", ctx.baseUrl)("valueField", ctx.valueField)("textField", ctx.textField);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMap(ctx.class);
        ɵngcc0.ɵɵproperty("id", ctx.id)("labelAlignment", ctx.labelAlignment)("labelValue", ctx.labelValue)("required", ctx.required)("requiredLabel", ctx.requiredField);
    } }, directives: [GlSharedComponentInputAutocompleteSimpleComponent,
        GlSharedComponentTitleLabelSimpleComponent], styles: ["[_nghost-%COMP%] {display:flex}[_nghost-%COMP%]  gl-shared-component-title-label-simple{flex-grow:0}"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GlSharedComponentInputAutocompleteLabelComponent, [{
        type: core.Component,
        args: [{
                selector: 'gl-shared-component-input-autocomplete-label',
                template: "<gl-shared-component-input-autocomplete-simple\n  [class]=\"class\"\n  [value]=\"value\"\n  [listName]=\"listName\"\n  (currentValue)=\"onCurrentValue($event)\"\n  [id]=\"id\"\n  [itemContentAlignment]=\"itemContentAlignment\"\n  [placeholder]=\"placeholder\"\n  [listItems]=\"listItems\"\n  [disabled]=\"disabled\"\n\n  [custom]=\"custom\"\n  [baseUrl]=\"baseUrl\"\n  [valueField]=\"valueField\"\n  [textField]=\"textField\">\n  <gl-shared-component-title-label-simple\n    [id]=\"id\"\n    [labelAlignment]=\"labelAlignment\"\n    [labelValue]=\"labelValue\"\n    [required]=\"required\"\n    [class]=\"class\"\n    [requiredLabel]=\"requiredField\"\n  ></gl-shared-component-title-label-simple>\n</gl-shared-component-input-autocomplete-simple>\n",
                styles: [":host::ng-deep{display:flex}:host::ng-deep gl-shared-component-title-label-simple{flex-grow:0}"]
            }]
    }], function () { return []; }, { currentValue: [{
            type: core.Output
        }], listItems: [{
            type: core.Input
        }], disabled: [{
            type: core.Input
        }], requiredField: [{
            type: core.Input
        }], listName: [{
            type: core.Input
        }], id: [{
            type: core.Input
        }], labelValue: [{
            type: core.Input
        }], labelAlignment: [{
            type: core.Input
        }], placeholder: [{
            type: core.Input
        }], itemContentAlignment: [{
            type: core.Input
        }], class: [{
            type: core.Input
        }], value: [{
            type: core.Input
        }], required: [{
            type: core.Input
        }], custom: [{
            type: core.Input
        }], baseUrl: [{
            type: core.Input
        }], valueField: [{
            type: core.Input
        }], textField: [{
            type: core.Input
        }] }); })();
        return GlSharedComponentInputAutocompleteLabelComponent;
    }());

    var GlSharedComponentFilterService = /** @class */ (function () {
        function GlSharedComponentFilterService() {
            this.opened = false;
            this.menuHidden$ = new rxjs.Subject();
        }
        GlSharedComponentFilterService.prototype.initialize = function (container, background, menuNavContainer, router) {
            this.container = container;
            this.background = background;
            this.menuNavContainer = menuNavContainer;
            this.router = router;
            // this.filter = filter;
            // this._core = core;
            this.menuHidden$.next(true);
        };
        GlSharedComponentFilterService.prototype.backgroundClick = function (event) {
            if (this.opened) {
                this.close(event);
            }
        };
        GlSharedComponentFilterService.prototype.open = function (event) {
            var _this = this;
            event.preventDefault();
            this.applyPartialResult;
            this.container.classList.add('menu-active');
            this.background.classList.add('visible-background');
            setTimeout(function () {
                if (_this.isIE) {
                    _this.menuNavContainer.scrollTop = 0;
                }
                else {
                    _this.menuNavContainer.scrollTo({ top: 0, behavior: 'smooth' });
                }
            }, 100);
            this.menuHidden$.next(false);
            this.opened = true;
            return true;
        };
        GlSharedComponentFilterService.prototype.close = function (event) {
            event.preventDefault();
            this.container.classList.remove('menu-active');
            this.background.classList.remove('visible-background');
            this.menuHidden$.next(true);
            this.opened = false;
            return false;
        };
        GlSharedComponentFilterService.ɵprov = core.ɵɵdefineInjectable({ factory: function GlSharedComponentFilterService_Factory() { return new GlSharedComponentFilterService(); }, token: GlSharedComponentFilterService, providedIn: "root" });
GlSharedComponentFilterService.ɵfac = function GlSharedComponentFilterService_Factory(t) { return new (t || GlSharedComponentFilterService)(); };
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GlSharedComponentFilterService, [{
        type: core.Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
        return GlSharedComponentFilterService;
    }());

    var GlSharedComponentFilterComponent = /** @class */ (function () {
        function GlSharedComponentFilterComponent(router, service) {
            this.router = router;
            this.service = service;
            this.subtitle = 'Filter';
            this.type = '';
            this.closeButton = '../assets/img/icon/menu/close.svg';
            this.partialResultDescription = 'Partial results with these filters:';
            this.itemSingularDescription = 'item';
            this.itemPluralDescription = 'items';
            this.applyButtonDescription = 'Apply filter';
            this.clearButtonDescription = 'Clear filter';
            this.buttonClass = 'light-translucid';
            this.isIE = false;
            this.applyFilter$ = new core.EventEmitter();
            this.clearFilter$ = new core.EventEmitter();
            service.applyPartialResult = this.applyPartialResult;
        }
        GlSharedComponentFilterComponent.prototype.ngOnInit = function () {
        };
        GlSharedComponentFilterComponent.prototype.ngAfterViewInit = function () {
            this.service.initialize(this.container.nativeElement, this.background.nativeElement, this.menuNavContainer.nativeElement, this.router);
        };
        GlSharedComponentFilterComponent.prototype.onApply = function () {
            this.applyFilter$.emit();
        };
        GlSharedComponentFilterComponent.prototype.onClear = function () {
            this.clearFilter$.emit();
        };
        GlSharedComponentFilterComponent.ctorParameters = function () { return [
            { type: router.Router },
            { type: GlSharedComponentFilterService }
        ]; };
        __decorate([
            core.ViewChild('container', { static: true, read: core.ElementRef })
        ], GlSharedComponentFilterComponent.prototype, "container", void 0);
        __decorate([
            core.ViewChild('background', { static: true, read: core.ElementRef })
        ], GlSharedComponentFilterComponent.prototype, "background", void 0);
        __decorate([
            core.ViewChild('menuNavContainer')
        ], GlSharedComponentFilterComponent.prototype, "menuNavContainer", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentFilterComponent.prototype, "title", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentFilterComponent.prototype, "subtitle", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentFilterComponent.prototype, "type", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentFilterComponent.prototype, "closeButton", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentFilterComponent.prototype, "partialResult", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentFilterComponent.prototype, "partialResultDescription", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentFilterComponent.prototype, "itemSingularDescription", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentFilterComponent.prototype, "itemPluralDescription", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentFilterComponent.prototype, "applyButtonDescription", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentFilterComponent.prototype, "clearButtonDescription", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentFilterComponent.prototype, "buttonClass", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentFilterComponent.prototype, "isIE", void 0);
        __decorate([
            core.Input()
        ], GlSharedComponentFilterComponent.prototype, "applyPartialResult", void 0);
        __decorate([
            core.Output()
        ], GlSharedComponentFilterComponent.prototype, "applyFilter$", void 0);
        __decorate([
            core.Output()
        ], GlSharedComponentFilterComponent.prototype, "clearFilter$", void 0);
GlSharedComponentFilterComponent.ɵfac = function GlSharedComponentFilterComponent_Factory(t) { return new (t || GlSharedComponentFilterComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc2.Router), ɵngcc0.ɵɵdirectiveInject(GlSharedComponentFilterService)); };
GlSharedComponentFilterComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GlSharedComponentFilterComponent, selectors: [["gl-shared-component-filter"]], viewQuery: function GlSharedComponentFilterComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(_c5, true, core.ElementRef);
        ɵngcc0.ɵɵstaticViewQuery(_c6, true, core.ElementRef);
        ɵngcc0.ɵɵviewQuery(_c7, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.container = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.background = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.menuNavContainer = _t.first);
    } }, inputs: { subtitle: "subtitle", type: "type", closeButton: "closeButton", partialResultDescription: "partialResultDescription", itemSingularDescription: "itemSingularDescription", itemPluralDescription: "itemPluralDescription", applyButtonDescription: "applyButtonDescription", clearButtonDescription: "clearButtonDescription", buttonClass: "buttonClass", isIE: "isIE", title: "title", partialResult: "partialResult", applyPartialResult: "applyPartialResult" }, outputs: { applyFilter$: "applyFilter$", clearFilter$: "clearFilter$" }, ngContentSelectors: _c3, decls: 23, vars: 13, consts: [[3, "click"], ["background", ""], ["container", ""], [1, "header-filter-container"], [1, "menu-header"], [1, "menu-top-icons-container"], ["id", "close-menu-button", "alt", "Close menu button", 1, "menu-icons", "close-menu", 3, "src", "click"], [1, "menu-header-title"], [1, "title"], [1, "subtitle"], [1, "menu-nav-container"], ["menuNavContainer", ""], [1, "menu-content"], [1, "input-container"], [1, "bottom-container"], ["class", "partial-result-description", 4, "ngIf"], [1, "buttons-container"], ["value", "apply", 3, "innerValue", "click"], ["value", "clear", 3, "innerValue", "click"], [1, "partial-result-description"]], template: function GlSharedComponentFilterComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "gl-shared-component-menu-background", 0, 1);
        ɵngcc0.ɵɵlistener("click", function GlSharedComponentFilterComponent_Template_gl_shared_component_menu_background_click_0_listener($event) { return ctx.service.backgroundClick($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(2, "div", null, 2);
        ɵngcc0.ɵɵelementStart(4, "div", 3);
        ɵngcc0.ɵɵelementStart(5, "div", 4);
        ɵngcc0.ɵɵelementStart(6, "div", 5);
        ɵngcc0.ɵɵelementStart(7, "img", 6);
        ɵngcc0.ɵɵlistener("click", function GlSharedComponentFilterComponent_Template_img_click_7_listener($event) { return ctx.service.close($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(8, "div", 7);
        ɵngcc0.ɵɵelementStart(9, "h1", 8);
        ɵngcc0.ɵɵtext(10);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(11, "h2", 9);
        ɵngcc0.ɵɵtext(12);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(13, "nav", 10, 11);
        ɵngcc0.ɵɵelementStart(15, "div", 12);
        ɵngcc0.ɵɵelementStart(16, "div", 13);
        ɵngcc0.ɵɵprojection(17);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(18, "div", 14);
        ɵngcc0.ɵɵtemplate(19, GlSharedComponentFilterComponent_span_19_Template, 2, 3, "span", 15);
        ɵngcc0.ɵɵelementStart(20, "div", 16);
        ɵngcc0.ɵɵelementStart(21, "gl-shared-component-input-button-simple", 17);
        ɵngcc0.ɵɵlistener("click", function GlSharedComponentFilterComponent_Template_gl_shared_component_input_button_simple_click_21_listener() { return ctx.onApply(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(22, "gl-shared-component-input-button-simple", 18);
        ɵngcc0.ɵɵlistener("click", function GlSharedComponentFilterComponent_Template_gl_shared_component_input_button_simple_click_22_listener() { return ctx.onClear(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵclassMapInterpolate1("filter-container ", ctx.type, "");
        ɵngcc0.ɵɵadvance(5);
        ɵngcc0.ɵɵproperty("src", ctx.closeButton, ɵngcc0.ɵɵsanitizeUrl);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵtextInterpolate(ctx.title);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate(ctx.subtitle);
        ɵngcc0.ɵɵadvance(7);
        ɵngcc0.ɵɵproperty("ngIf", ctx.partialResult != null);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵclassMap(ctx.buttonClass);
        ɵngcc0.ɵɵproperty("innerValue", ctx.applyButtonDescription);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMap(ctx.buttonClass);
        ɵngcc0.ɵɵproperty("innerValue", ctx.clearButtonDescription);
    } }, directives: [GlSharedComponentMenuBackgroundComponent, ɵngcc1.NgIf, GlSharedComponentInputButtonSimpleComponent], styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);[_nghost-%COMP%]  .filter-container .menu-nav-container::-webkit-scrollbar:horizontal{height:.5em!important}[_nghost-%COMP%]  .filter-container .menu-nav-container::-webkit-scrollbar:vertical{width:.5em!important}[_nghost-%COMP%]  .filter-container .menu-nav-container::-webkit-scrollbar-button{background-color:#333437!important;display:none!important}[_nghost-%COMP%]  .filter-container .menu-nav-container::-webkit-scrollbar-track{background-color:green!important}[_nghost-%COMP%]  .filter-container .menu-nav-container::-webkit-scrollbar-track-piece{background-color:#2c2c2f!important}[_nghost-%COMP%]  .filter-container .menu-nav-container::-webkit-scrollbar-thumb{background-color:#64666c!important;border:1px solid #38393c!important}[_nghost-%COMP%]  .filter-container{border-top:.3em solid;border-image-source:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%);border-image-slice:.5;border-bottom:2em solid;border-image-source:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%);border-image-slice:.5;display:flex;flex-direction:column;background:0 0/cover #1a1b1d;position:fixed;top:0;bottom:0;overflow:hidden;width:85vw;right:-110%;max-width:17em;min-width:17em;z-index:10000;transition:right .5s ease-in-out;flex-grow:1;height:100vh}[_nghost-%COMP%]  .filter-container.translucid{background:rgba(255,255,255,.05);border-left:1px solid rgba(255,255,255,.05);border-top:.3em solid rgba(255,255,255,.1);border-image-source:none}[_nghost-%COMP%]  .filter-container .a{display:block;min-height:3em}[_nghost-%COMP%]  .filter-container .header-filter-container .menu-header{display:flex;flex-direction:column;margin:.5em 1em 1em .5em}[_nghost-%COMP%]  .filter-container .header-filter-container .menu-header .menu-top-icons-container{display:flex;margin:0 0 1.5em}[_nghost-%COMP%]  .filter-container .header-filter-container .menu-header .menu-top-icons-container .close-menu, [_nghost-%COMP%]  .filter-container .header-filter-container .menu-header .menu-top-icons-container .settings-menu{cursor:pointer;height:1.5em;width:1.5em}[_nghost-%COMP%]  .filter-container .header-filter-container .menu-header .menu-top-icons-container .close-menu:active, [_nghost-%COMP%]  .filter-container .header-filter-container .menu-header .menu-top-icons-container .close-menu:hover, [_nghost-%COMP%]  .filter-container .header-filter-container .menu-header .menu-top-icons-container .settings-menu:active, [_nghost-%COMP%]  .filter-container .header-filter-container .menu-header .menu-top-icons-container .settings-menu:hover{opacity:1;-webkit-animation:.4s ease-in-out forwards increase-decrease;animation:.4s ease-in-out forwards increase-decrease}[_nghost-%COMP%]  .filter-container .header-filter-container .menu-header .menu-top-icons-container .close-menu{margin:0 .2em 0 0}[_nghost-%COMP%]  .filter-container .header-filter-container .menu-header .menu-header-title .subtitle, [_nghost-%COMP%]  .filter-container .header-filter-container .menu-header .menu-header-title .title{text-transform:uppercase;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:#fff;margin:0}[_nghost-%COMP%]  .filter-container .header-filter-container .menu-header .menu-header-title .title{font-family:Montserrat,sans-serif;font-weight:700;font-size:.9em;display:none}[_nghost-%COMP%]  .filter-container .header-filter-container .menu-header .menu-header-title .subtitle{font-family:Montserrat,sans-serif;font-weight:100;font-size:1.5em}[_nghost-%COMP%]  .filter-container .bottom-container{display:flex;flex-direction:column;margin:1em 0 .4em}[_nghost-%COMP%]  .filter-container .bottom-container .partial-result-description{font-family:Montserrat,sans-serif;font-weight:700;color:#d24077;font-size:.5em;padding:0 0 0 .5em;text-align:center}[_nghost-%COMP%]  .filter-container .bottom-container .buttons-container{display:flex;padding:.6em 0 .3em .3em;font-size:.8em}[_nghost-%COMP%]  .filter-container .bottom-container .buttons-container .default-button:nth-child(1){margin:0 .5em 0 0}[_nghost-%COMP%]  .filter-container .bottom-container .buttons-container .default-button:nth-child(2){margin:0 0 0 .5em}[_nghost-%COMP%]  .filter-container .menu-nav-container{scrollbar-face-color:#333437!important;scrollbar-shadow-color:#38393c!important;scrollbar-track-color:#2c2c2f!important;scrollbar-arrow-color:#64666c!important;overflow:auto;max-height:100%;flex-grow:1;display:flex;overflow-x:hidden;border-top:0 solid transparent!important;position:relative;border-bottom:0 solid transparent!important}[_nghost-%COMP%]  .filter-container .menu-nav-container::before{width:100%;height:1px;left:0;top:1px;margin-top:-1px;content:\"\";position:absolute;background:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%)}[_nghost-%COMP%]  .filter-container .menu-nav-container::after{width:100%;height:1px;left:0;margin-bottom:-1px;content:\"\";position:absolute;background:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%);bottom:-38%}[_nghost-%COMP%]  .filter-container .menu-nav-container .menu-content{display:flex;flex-direction:column;flex-grow:1;position:relative}[_nghost-%COMP%]  .filter-container .menu-nav-container .menu-content .menu-title{background:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%);margin:0 0 .14em;position:relative;display:flex;align-items:center;border-left:.2em solid #fff}[_nghost-%COMP%]  .filter-container .menu-nav-container .menu-content .menu-title .material-icons{color:rgba(255,255,255,.6);font-size:1.2em;padding:.3em;margin:0 .5em 0 .3em}[_nghost-%COMP%]  .filter-container .menu-nav-container .menu-content .menu-title .material-icons.expand{position:absolute;color:#fff;top:.5em;right:.3em}[_nghost-%COMP%]  .filter-container .menu-nav-container .menu-content .menu-title .menu-icons{padding:.2em .5em;height:1.5em;width:1.5em}[_nghost-%COMP%]  .filter-container .menu-nav-container .menu-content .menu-title a{text-decoration:none;font-size:.6em;font-family:Montserrat,sans-serif;font-weight:300;text-transform:uppercase;color:#fff;padding:1.5em .7em;flex-grow:1}[_nghost-%COMP%]  .filter-container .menu-nav-container .menu-content .input-container gl-shared-component-filter-container .type-container{background-color:rgba(255,255,255,.03);border-bottom:1px solid rgba(255,255,255,.03)}[_nghost-%COMP%]  .filter-container .menu-nav-container .menu-content .input-container .options-container{display:flex}[_nghost-%COMP%]  .filter-container .menu-nav-container .menu-content .input-container gl-shared-component-input-autocomplete-simple .input-container{height:1em;margin:.5em 0}[_nghost-%COMP%]  .show-admin-settings{visibility:visible!important}[_nghost-%COMP%]  .filter-container .menu-active{right:0}[_nghost-%COMP%]  .menu-active{right:0}[_nghost-%COMP%]  .menu-background{opacity:0;visibility:collapse;z-index:-1000;left:1000px}[_nghost-%COMP%]  .visible-background{width:100%;height:100%;background:rgba(0,0,0,.6);opacity:1;visibility:visible;position:fixed;top:0;left:0;z-index:999;transition:1s ease-in-out}[_nghost-%COMP%]  .hide-subtitle{opacity:0;visibility:collapse;margin:0;padding:0;transition:.25s ease-in-out}[_nghost-%COMP%]  .show-subtitle{opacity:1;visibility:visible;transition:.25s ease-in-out .4s}[_nghost-%COMP%]  .hide-subtitle-container{-webkit-animation:.4s ease-in-out forwards hide-subtitle;animation:.4s ease-in-out forwards hide-subtitle}[_nghost-%COMP%]  .show-subtitle-container{-webkit-animation:.4s ease-in-out forwards show-subtitle;animation:.4s ease-in-out forwards show-subtitle}[_nghost-%COMP%]  .collapsed-menu .expand{transform:rotate(0);transition:.4s ease-in-out}[_nghost-%COMP%]  .collapsed-menu .menu-icons{-webkit-animation:.4s ease-in-out forwards decrease-increase;animation:.4s ease-in-out forwards decrease-increase}[_nghost-%COMP%]  .expanded-menu .expand{transform:rotate(-180deg);transition:.4s ease-in-out}[_nghost-%COMP%]  .expanded-menu .menu-icons{-webkit-animation:.4s ease-in-out forwards increase-decrease;animation:.4s ease-in-out forwards increase-decrease}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){[_nghost-%COMP%]  .filter-container{border-top:0 solid transparent!important;padding-top:.2em;max-height:unset}[_nghost-%COMP%]  .filter-container::before{width:100%;height:.2em;left:0;top:.2em;margin-top:-.2em;content:\"\";position:absolute;background:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%)}[_nghost-%COMP%]  .filter-container .menu-nav-container{max-height:69vh}[_nghost-%COMP%]  .filter-container .menu-nav-container .input-container gl-shared-component-input-autocomplete-simple .custom-combobox{height:4em}[_nghost-%COMP%]  .filter-container .menu-nav-container .input-container gl-shared-component-input-autocomplete-simple .custom-combobox .mat-input-element{max-width:84%}[_nghost-%COMP%]  .filter-container .menu-nav-container .input-container gl-shared-component-input-autocomplete-simple .custom-combobox .mat-input-element.no-data{max-width:94%}}"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GlSharedComponentFilterComponent, [{
        type: core.Component,
        args: [{
                selector: 'gl-shared-component-filter',
                template: "<gl-shared-component-menu-background\n  #background\n  (click)=\"service.backgroundClick($event)\"\n></gl-shared-component-menu-background>\n<div #container class=\"filter-container {{ type }}\">\n  <div class=\"header-filter-container\">\n    <div class=\"menu-header\">\n      <div class=\"menu-top-icons-container\">\n        <img id=\"close-menu-button\" (click)=\"service.close($event)\" [src]=\"closeButton\" class=\"menu-icons close-menu\" alt=\"Close menu button\">\n      </div>\n      <div class=\"menu-header-title\">\n        <h1 class=\"title\">{{ title }}</h1>\n        <h2 class=\"subtitle\">{{ subtitle }}</h2>\n      </div>\n    </div>\n  </div>\n  <nav class=\"menu-nav-container\" #menuNavContainer>\n    <div class=\"menu-content\">\n      <div class=\"input-container\" >\n        <ng-content></ng-content>\n      </div>\n    </div>\n  </nav>\n  <div class=\"bottom-container\">\n    <span\n      *ngIf=\"partialResult != null\"\n      class=\"partial-result-description\">{{ partialResultDescription }} {{ partialResult }} {{ partialResult > 1 ? itemPluralDescription : itemSingularDescription }}\n    </span>\n    <div class=\"buttons-container\">\n      <gl-shared-component-input-button-simple\n        value=\"apply\"\n        [class]=\"buttonClass\"\n        [innerValue]=\"applyButtonDescription\"\n        (click)=\"onApply()\"\n      ></gl-shared-component-input-button-simple>\n      <gl-shared-component-input-button-simple\n        value=\"clear\"\n        [class]=\"buttonClass\"\n        [innerValue]=\"clearButtonDescription\"\n        (click)=\"onClear()\"\n      ></gl-shared-component-input-button-simple>\n    </div>\n  </div>\n</div>\n",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);:host::ng-deep .filter-container .menu-nav-container::-webkit-scrollbar:horizontal{height:.5em!important}:host::ng-deep .filter-container .menu-nav-container::-webkit-scrollbar:vertical{width:.5em!important}:host::ng-deep .filter-container .menu-nav-container::-webkit-scrollbar-button{background-color:#333437!important;display:none!important}:host::ng-deep .filter-container .menu-nav-container::-webkit-scrollbar-track{background-color:green!important}:host::ng-deep .filter-container .menu-nav-container::-webkit-scrollbar-track-piece{background-color:#2c2c2f!important}:host::ng-deep .filter-container .menu-nav-container::-webkit-scrollbar-thumb{background-color:#64666c!important;border:1px solid #38393c!important}:host::ng-deep .filter-container{border-top:.3em solid;border-image-source:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%);border-image-slice:.5;border-bottom:2em solid;border-image-source:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%);border-image-slice:.5;display:flex;flex-direction:column;background:0 0/cover #1a1b1d;position:fixed;top:0;bottom:0;overflow:hidden;width:85vw;right:-110%;max-width:17em;min-width:17em;z-index:10000;transition:right .5s ease-in-out;flex-grow:1;height:100vh}:host::ng-deep .filter-container.translucid{background:rgba(255,255,255,.05);border-left:1px solid rgba(255,255,255,.05);border-top:.3em solid rgba(255,255,255,.1);border-image-source:none}:host::ng-deep .filter-container .a{display:block;min-height:3em}:host::ng-deep .filter-container .header-filter-container .menu-header{display:flex;flex-direction:column;margin:.5em 1em 1em .5em}:host::ng-deep .filter-container .header-filter-container .menu-header .menu-top-icons-container{display:flex;margin:0 0 1.5em}:host::ng-deep .filter-container .header-filter-container .menu-header .menu-top-icons-container .close-menu,:host::ng-deep .filter-container .header-filter-container .menu-header .menu-top-icons-container .settings-menu{cursor:pointer;height:1.5em;width:1.5em}:host::ng-deep .filter-container .header-filter-container .menu-header .menu-top-icons-container .close-menu:active,:host::ng-deep .filter-container .header-filter-container .menu-header .menu-top-icons-container .close-menu:hover,:host::ng-deep .filter-container .header-filter-container .menu-header .menu-top-icons-container .settings-menu:active,:host::ng-deep .filter-container .header-filter-container .menu-header .menu-top-icons-container .settings-menu:hover{opacity:1;-webkit-animation:.4s ease-in-out forwards increase-decrease;animation:.4s ease-in-out forwards increase-decrease}:host::ng-deep .filter-container .header-filter-container .menu-header .menu-top-icons-container .close-menu{margin:0 .2em 0 0}:host::ng-deep .filter-container .header-filter-container .menu-header .menu-header-title .subtitle,:host::ng-deep .filter-container .header-filter-container .menu-header .menu-header-title .title{text-transform:uppercase;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:#fff;margin:0}:host::ng-deep .filter-container .header-filter-container .menu-header .menu-header-title .title{font-family:Montserrat,sans-serif;font-weight:700;font-size:.9em;display:none}:host::ng-deep .filter-container .header-filter-container .menu-header .menu-header-title .subtitle{font-family:Montserrat,sans-serif;font-weight:100;font-size:1.5em}:host::ng-deep .filter-container .bottom-container{display:flex;flex-direction:column;margin:1em 0 .4em}:host::ng-deep .filter-container .bottom-container .partial-result-description{font-family:Montserrat,sans-serif;font-weight:700;color:#d24077;font-size:.5em;padding:0 0 0 .5em;text-align:center}:host::ng-deep .filter-container .bottom-container .buttons-container{display:flex;padding:.6em 0 .3em .3em;font-size:.8em}:host::ng-deep .filter-container .bottom-container .buttons-container .default-button:nth-child(1){margin:0 .5em 0 0}:host::ng-deep .filter-container .bottom-container .buttons-container .default-button:nth-child(2){margin:0 0 0 .5em}:host::ng-deep .filter-container .menu-nav-container{scrollbar-face-color:#333437!important;scrollbar-shadow-color:#38393c!important;scrollbar-track-color:#2c2c2f!important;scrollbar-arrow-color:#64666c!important;overflow:auto;max-height:100%;flex-grow:1;display:flex;overflow-x:hidden;border-top:0 solid transparent!important;position:relative;border-bottom:0 solid transparent!important}:host::ng-deep .filter-container .menu-nav-container::before{width:100%;height:1px;left:0;top:1px;margin-top:-1px;content:\"\";position:absolute;background:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%)}:host::ng-deep .filter-container .menu-nav-container::after{width:100%;height:1px;left:0;margin-bottom:-1px;content:\"\";position:absolute;background:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%);bottom:-38%}:host::ng-deep .filter-container .menu-nav-container .menu-content{display:flex;flex-direction:column;flex-grow:1;position:relative}:host::ng-deep .filter-container .menu-nav-container .menu-content .menu-title{background:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%);margin:0 0 .14em;position:relative;display:flex;align-items:center;border-left:.2em solid #fff}:host::ng-deep .filter-container .menu-nav-container .menu-content .menu-title .material-icons{color:rgba(255,255,255,.6);font-size:1.2em;padding:.3em;margin:0 .5em 0 .3em}:host::ng-deep .filter-container .menu-nav-container .menu-content .menu-title .material-icons.expand{position:absolute;color:#fff;top:.5em;right:.3em}:host::ng-deep .filter-container .menu-nav-container .menu-content .menu-title .menu-icons{padding:.2em .5em;height:1.5em;width:1.5em}:host::ng-deep .filter-container .menu-nav-container .menu-content .menu-title a{text-decoration:none;font-size:.6em;font-family:Montserrat,sans-serif;font-weight:300;text-transform:uppercase;color:#fff;padding:1.5em .7em;flex-grow:1}:host::ng-deep .filter-container .menu-nav-container .menu-content .input-container gl-shared-component-filter-container .type-container{background-color:rgba(255,255,255,.03);border-bottom:1px solid rgba(255,255,255,.03)}:host::ng-deep .filter-container .menu-nav-container .menu-content .input-container .options-container{display:flex}:host::ng-deep .filter-container .menu-nav-container .menu-content .input-container gl-shared-component-input-autocomplete-simple .input-container{height:1em;margin:.5em 0}:host::ng-deep .show-admin-settings{visibility:visible!important}:host::ng-deep .filter-container .menu-active{right:0}:host::ng-deep .menu-active{right:0}:host::ng-deep .menu-background{opacity:0;visibility:collapse;z-index:-1000;left:1000px}:host::ng-deep .visible-background{width:100%;height:100%;background:rgba(0,0,0,.6);opacity:1;visibility:visible;position:fixed;top:0;left:0;z-index:999;transition:1s ease-in-out}:host::ng-deep .hide-subtitle{opacity:0;visibility:collapse;margin:0;padding:0;transition:.25s ease-in-out}:host::ng-deep .show-subtitle{opacity:1;visibility:visible;transition:.25s ease-in-out .4s}:host::ng-deep .hide-subtitle-container{-webkit-animation:.4s ease-in-out forwards hide-subtitle;animation:.4s ease-in-out forwards hide-subtitle}:host::ng-deep .show-subtitle-container{-webkit-animation:.4s ease-in-out forwards show-subtitle;animation:.4s ease-in-out forwards show-subtitle}:host::ng-deep .collapsed-menu .expand{transform:rotate(0);transition:.4s ease-in-out}:host::ng-deep .collapsed-menu .menu-icons{-webkit-animation:.4s ease-in-out forwards decrease-increase;animation:.4s ease-in-out forwards decrease-increase}:host::ng-deep .expanded-menu .expand{transform:rotate(-180deg);transition:.4s ease-in-out}:host::ng-deep .expanded-menu .menu-icons{-webkit-animation:.4s ease-in-out forwards increase-decrease;animation:.4s ease-in-out forwards increase-decrease}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){:host::ng-deep .filter-container{border-top:0 solid transparent!important;padding-top:.2em;max-height:unset}:host::ng-deep .filter-container::before{width:100%;height:.2em;left:0;top:.2em;margin-top:-.2em;content:\"\";position:absolute;background:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%)}:host::ng-deep .filter-container .menu-nav-container{max-height:69vh}:host::ng-deep .filter-container .menu-nav-container .input-container gl-shared-component-input-autocomplete-simple .custom-combobox{height:4em}:host::ng-deep .filter-container .menu-nav-container .input-container gl-shared-component-input-autocomplete-simple .custom-combobox .mat-input-element{max-width:84%}:host::ng-deep .filter-container .menu-nav-container .input-container gl-shared-component-input-autocomplete-simple .custom-combobox .mat-input-element.no-data{max-width:94%}}"]
            }]
    }], function () { return [{ type: ɵngcc2.Router }, { type: GlSharedComponentFilterService }]; }, { subtitle: [{
            type: core.Input
        }], type: [{
            type: core.Input
        }], closeButton: [{
            type: core.Input
        }], partialResultDescription: [{
            type: core.Input
        }], itemSingularDescription: [{
            type: core.Input
        }], itemPluralDescription: [{
            type: core.Input
        }], applyButtonDescription: [{
            type: core.Input
        }], clearButtonDescription: [{
            type: core.Input
        }], buttonClass: [{
            type: core.Input
        }], isIE: [{
            type: core.Input
        }], applyFilter$: [{
            type: core.Output
        }], clearFilter$: [{
            type: core.Output
        }], container: [{
            type: core.ViewChild,
            args: ['container', { static: true, read: core.ElementRef }]
        }], background: [{
            type: core.ViewChild,
            args: ['background', { static: true, read: core.ElementRef }]
        }], menuNavContainer: [{
            type: core.ViewChild,
            args: ['menuNavContainer']
        }], title: [{
            type: core.Input
        }], partialResult: [{
            type: core.Input
        }], applyPartialResult: [{
            type: core.Input
        }] }); })();
        return GlSharedComponentFilterComponent;
    }());

    var GlSharedComponentFilterContainerComponent = /** @class */ (function () {
        function GlSharedComponentFilterContainerComponent() {
        }
        __decorate([
            core.Input()
        ], GlSharedComponentFilterContainerComponent.prototype, "label", void 0);
GlSharedComponentFilterContainerComponent.ɵfac = function GlSharedComponentFilterContainerComponent_Factory(t) { return new (t || GlSharedComponentFilterContainerComponent)(); };
GlSharedComponentFilterContainerComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GlSharedComponentFilterContainerComponent, selectors: [["gl-shared-component-filter-container"]], inputs: { label: "label" }, ngContentSelectors: _c3, decls: 4, vars: 1, consts: [[1, "type-container"], [1, "title"]], template: function GlSharedComponentFilterContainerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "label", 1);
        ɵngcc0.ɵɵtext(2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵprojection(3);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate(ctx.label);
    } }, styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);[_nghost-%COMP%]  .type-container{display:flex;flex-direction:column;background-color:#2c2c2f;padding:.7em;border-bottom:1px solid #38393c}[_nghost-%COMP%]  .type-container .title{font-family:Montserrat,sans-serif;font-weight:400;color:#d24077;text-transform:uppercase;font-size:.4em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GlSharedComponentFilterContainerComponent, [{
        type: core.Component,
        args: [{
                selector: 'gl-shared-component-filter-container',
                template: "<div class=\"type-container\">\n  <label class=\"title\">{{ label }}</label>\n  <ng-content></ng-content>\n</div>\n",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);:host::ng-deep .type-container{display:flex;flex-direction:column;background-color:#2c2c2f;padding:.7em;border-bottom:1px solid #38393c}:host::ng-deep .type-container .title{font-family:Montserrat,sans-serif;font-weight:400;color:#d24077;text-transform:uppercase;font-size:.4em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}"]
            }]
    }], function () { return []; }, { label: [{
            type: core.Input
        }] }); })();
        return GlSharedComponentFilterContainerComponent;
    }());

    var GlComponentModule = /** @class */ (function () {
        function GlComponentModule() {
        }
GlComponentModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: GlComponentModule });
GlComponentModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function GlComponentModule_Factory(t) { return new (t || GlComponentModule)(); }, imports: [[
            common.CommonModule,
            GlCoreModule,
            router.RouterModule,
            formField.MatFormFieldModule,
            input.MatInputModule,
            autocomplete.MatAutocompleteModule,
            dialog.MatDialogModule,
            animations.BrowserAnimationsModule,
            forms.FormsModule,
            forms.ReactiveFormsModule,
            overlay.OverlayModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(GlComponentModule, { declarations: [GlSharedComponentButtonImageSimpleComponent,
        GlSharedComponentButtonImageTooltipComponent,
        GlSharedComponentButtonMenuSimpleComponent,
        GlSharedComponentButtonMenuTooltipComponent,
        GlSharedComponentErrorMessageComponent,
        GlSharedComponentFilterComponent,
        GlSharedComponentFilterContainerComponent,
        GlSharedComponentFooterContainerComponent,
        GlSharedComponentFooterSimpleComponent,
        GlSharedComponentInputAutocompleteLabelComponent,
        GlSharedComponentInputAutocompleteSimpleComponent,
        GlSharedComponentInputButtonSimpleComponent,
        GlSharedComponentInputButtonHyperlinkComponent,
        GlSharedComponentInputOptionSimpleComponent,
        GlSharedComponentInputTextSimpleComponent,
        GlSharedComponentInputTextLabelComponent,
        GlSharedComponentInputTextAreaSimpleComponent,
        GlSharedComponentInputTextAreaLabelComponent,
        GlSharedComponentLogoSquareComponent,
        GlSharedComponentModalAlertComponent,
        GlSharedComponentModalHeaderComponent,
        GlSharedComponentModalLoadingComponent,
        GlSharedComponentMenuBackgroundComponent,
        GlSharedComponentMenuComponent,
        GlSharedComponentMenuItemComponent,
        GlSharedComponentTitleLabelSimpleComponent,
        GlSharedComponentTitleLabelButtonSimpleComponent,
        GlSharedComponentTitleLabelButtonContainerComponent,
        GlSharedComponentTitlePageComponent], imports: [ɵngcc1.CommonModule, GlCoreModule, ɵngcc2.RouterModule, ɵngcc4.MatFormFieldModule, ɵngcc5.MatInputModule, ɵngcc7.MatAutocompleteModule, ɵngcc8.MatDialogModule, ɵngcc10.BrowserAnimationsModule, ɵngcc6.FormsModule, ɵngcc6.ReactiveFormsModule, ɵngcc3.OverlayModule], exports: [GlSharedComponentButtonImageSimpleComponent,
        GlSharedComponentButtonImageTooltipComponent,
        GlSharedComponentButtonMenuSimpleComponent,
        GlSharedComponentButtonMenuTooltipComponent,
        GlSharedComponentErrorMessageComponent,
        GlSharedComponentFilterComponent,
        GlSharedComponentFilterContainerComponent,
        GlSharedComponentFooterContainerComponent,
        GlSharedComponentFooterSimpleComponent,
        GlSharedComponentInputAutocompleteLabelComponent,
        GlSharedComponentInputAutocompleteSimpleComponent,
        GlSharedComponentInputButtonSimpleComponent,
        GlSharedComponentInputButtonHyperlinkComponent,
        GlSharedComponentInputOptionSimpleComponent,
        GlSharedComponentInputTextAreaSimpleComponent,
        GlSharedComponentInputTextAreaLabelComponent,
        GlSharedComponentInputTextLabelComponent,
        GlSharedComponentInputTextSimpleComponent,
        GlSharedComponentLogoSquareComponent,
        GlSharedComponentMenuBackgroundComponent,
        GlSharedComponentMenuComponent,
        GlSharedComponentMenuItemComponent,
        GlSharedComponentModalAlertComponent,
        GlSharedComponentModalHeaderComponent,
        GlSharedComponentModalLoadingComponent,
        GlSharedComponentTitlePageComponent,
        GlSharedComponentTitleLabelButtonSimpleComponent,
        GlSharedComponentTitleLabelButtonContainerComponent,
        GlSharedComponentTitleLabelSimpleComponent] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GlComponentModule, [{
        type: core.NgModule,
        args: [{
                declarations: [
                    GlSharedComponentButtonImageSimpleComponent,
                    GlSharedComponentButtonImageTooltipComponent,
                    GlSharedComponentButtonMenuSimpleComponent,
                    GlSharedComponentButtonMenuTooltipComponent,
                    GlSharedComponentErrorMessageComponent,
                    GlSharedComponentFilterComponent,
                    GlSharedComponentFilterContainerComponent,
                    GlSharedComponentFooterContainerComponent,
                    GlSharedComponentFooterSimpleComponent,
                    GlSharedComponentInputAutocompleteLabelComponent,
                    GlSharedComponentInputAutocompleteSimpleComponent,
                    GlSharedComponentInputButtonSimpleComponent,
                    GlSharedComponentInputButtonHyperlinkComponent,
                    GlSharedComponentInputOptionSimpleComponent,
                    GlSharedComponentInputTextSimpleComponent,
                    GlSharedComponentInputTextLabelComponent,
                    GlSharedComponentInputTextAreaSimpleComponent,
                    GlSharedComponentInputTextAreaLabelComponent,
                    GlSharedComponentLogoSquareComponent,
                    GlSharedComponentModalAlertComponent,
                    GlSharedComponentModalHeaderComponent,
                    GlSharedComponentModalLoadingComponent,
                    GlSharedComponentMenuBackgroundComponent,
                    GlSharedComponentMenuComponent,
                    GlSharedComponentMenuItemComponent,
                    GlSharedComponentTitleLabelSimpleComponent,
                    GlSharedComponentTitleLabelButtonSimpleComponent,
                    GlSharedComponentTitleLabelButtonContainerComponent,
                    GlSharedComponentTitlePageComponent,
                ],
                imports: [
                    common.CommonModule,
                    GlCoreModule,
                    router.RouterModule,
                    formField.MatFormFieldModule,
                    input.MatInputModule,
                    autocomplete.MatAutocompleteModule,
                    dialog.MatDialogModule,
                    animations.BrowserAnimationsModule,
                    forms.FormsModule,
                    forms.ReactiveFormsModule,
                    overlay.OverlayModule
                ],
                exports: [
                    GlSharedComponentButtonImageSimpleComponent,
                    GlSharedComponentButtonImageTooltipComponent,
                    GlSharedComponentButtonMenuSimpleComponent,
                    GlSharedComponentButtonMenuTooltipComponent,
                    GlSharedComponentErrorMessageComponent,
                    GlSharedComponentFilterComponent,
                    GlSharedComponentFilterContainerComponent,
                    GlSharedComponentFooterContainerComponent,
                    GlSharedComponentFooterSimpleComponent,
                    GlSharedComponentInputAutocompleteLabelComponent,
                    GlSharedComponentInputAutocompleteSimpleComponent,
                    GlSharedComponentInputButtonSimpleComponent,
                    GlSharedComponentInputButtonHyperlinkComponent,
                    GlSharedComponentInputOptionSimpleComponent,
                    GlSharedComponentInputTextAreaSimpleComponent,
                    GlSharedComponentInputTextAreaLabelComponent,
                    GlSharedComponentInputTextLabelComponent,
                    GlSharedComponentInputTextSimpleComponent,
                    GlSharedComponentLogoSquareComponent,
                    GlSharedComponentMenuBackgroundComponent,
                    GlSharedComponentMenuComponent,
                    GlSharedComponentMenuItemComponent,
                    GlSharedComponentModalAlertComponent,
                    GlSharedComponentModalHeaderComponent,
                    GlSharedComponentModalLoadingComponent,
                    GlSharedComponentTitlePageComponent,
                    GlSharedComponentTitleLabelButtonSimpleComponent,
                    GlSharedComponentTitleLabelButtonContainerComponent,
                    GlSharedComponentTitleLabelSimpleComponent,
                ]
            }]
    }], function () { return []; }, null); })();
        return GlComponentModule;
    }());

    var GlSharedModule = /** @class */ (function () {
        function GlSharedModule() {
        }
GlSharedModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: GlSharedModule });
GlSharedModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function GlSharedModule_Factory(t) { return new (t || GlSharedModule)(); }, imports: [[
            common.CommonModule,
            GlComponentModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(GlSharedModule, { imports: [ɵngcc1.CommonModule, GlComponentModule] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GlSharedModule, [{
        type: core.NgModule,
        args: [{
                declarations: [],
                imports: [
                    common.CommonModule,
                    GlComponentModule
                ]
            }]
    }], function () { return []; }, null); })();
        return GlSharedModule;
    }());

    var GlNgFrontendModule = /** @class */ (function () {
        function GlNgFrontendModule() {
        }
GlNgFrontendModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: GlNgFrontendModule });
GlNgFrontendModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function GlNgFrontendModule_Factory(t) { return new (t || GlNgFrontendModule)(); }, providers: [], imports: [[
            platformBrowser.BrowserModule,
            http.HttpClientModule,
            forms.ReactiveFormsModule,
            GlSharedModule,
            GlCoreModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(GlNgFrontendModule, { imports: [ɵngcc11.BrowserModule, ɵngcc12.HttpClientModule, ɵngcc6.ReactiveFormsModule, GlSharedModule,
        GlCoreModule] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GlNgFrontendModule, [{
        type: core.NgModule,
        args: [{
                declarations: [],
                imports: [
                    platformBrowser.BrowserModule,
                    http.HttpClientModule,
                    forms.ReactiveFormsModule,
                    GlSharedModule,
                    GlCoreModule,
                ],
                exports: [],
                providers: []
            }]
    }], function () { return []; }, null); })();
        return GlNgFrontendModule;
    }());

    var GlSharedViewErrorMessageComponent = /** @class */ (function () {
        function GlSharedViewErrorMessageComponent() {
            this.logoHorizontalPosition = 'left';
            this.logoVerticalPosition = 'top';
            this.errorPosition = 'left';
            this.errorButtonAction$ = new core.EventEmitter();
            this.footerImageDescription = 'Image logo';
        }
        GlSharedViewErrorMessageComponent.prototype.ngAfterViewInit = function () {
            var mainContainer = this.mainContainer.nativeElement;
            var mainContainerParent = this.mainContainer.nativeElement.parentNode;
            mainContainer.style.backgroundImage = "url(" + this.background + ")";
            mainContainerParent.style.backgroundImage = "url(" + this.blurBackground + ")";
            console.log(this.mainContainer);
            console.log(mainContainer);
            console.log(mainContainerParent);
            console.log(this.background);
            console.log(this.blurBackground);
        };
        GlSharedViewErrorMessageComponent.prototype.errorButtonAction = function () {
            this.errorButtonAction$.emit();
        };
        __decorate([
            core.ViewChild('mainContainer')
        ], GlSharedViewErrorMessageComponent.prototype, "mainContainer", void 0);
        __decorate([
            core.Input()
        ], GlSharedViewErrorMessageComponent.prototype, "blurBackground", void 0);
        __decorate([
            core.Input()
        ], GlSharedViewErrorMessageComponent.prototype, "background", void 0);
        __decorate([
            core.Input()
        ], GlSharedViewErrorMessageComponent.prototype, "logoImageScr", void 0);
        __decorate([
            core.Input()
        ], GlSharedViewErrorMessageComponent.prototype, "logoImageAlt", void 0);
        __decorate([
            core.Input()
        ], GlSharedViewErrorMessageComponent.prototype, "logoHorizontalPosition", void 0);
        __decorate([
            core.Input()
        ], GlSharedViewErrorMessageComponent.prototype, "logoVerticalPosition", void 0);
        __decorate([
            core.Input()
        ], GlSharedViewErrorMessageComponent.prototype, "errorPosition", void 0);
        __decorate([
            core.Input()
        ], GlSharedViewErrorMessageComponent.prototype, "errorCode", void 0);
        __decorate([
            core.Input()
        ], GlSharedViewErrorMessageComponent.prototype, "errorMessage", void 0);
        __decorate([
            core.Input()
        ], GlSharedViewErrorMessageComponent.prototype, "errorButtonLabel", void 0);
        __decorate([
            core.Output()
        ], GlSharedViewErrorMessageComponent.prototype, "errorButtonAction$", void 0);
        __decorate([
            core.Input()
        ], GlSharedViewErrorMessageComponent.prototype, "footerMainDescription", void 0);
        __decorate([
            core.Input()
        ], GlSharedViewErrorMessageComponent.prototype, "footerShowContainer", void 0);
        __decorate([
            core.Input()
        ], GlSharedViewErrorMessageComponent.prototype, "footerDescription", void 0);
        __decorate([
            core.Input()
        ], GlSharedViewErrorMessageComponent.prototype, "footerImageDescription", void 0);
        __decorate([
            core.Input()
        ], GlSharedViewErrorMessageComponent.prototype, "footerImageSrc", void 0);
        __decorate([
            core.Input()
        ], GlSharedViewErrorMessageComponent.prototype, "footerLink", void 0);
GlSharedViewErrorMessageComponent.ɵfac = function GlSharedViewErrorMessageComponent_Factory(t) { return new (t || GlSharedViewErrorMessageComponent)(); };
GlSharedViewErrorMessageComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GlSharedViewErrorMessageComponent, selectors: [["gl-shared-view-error-message"]], viewQuery: function GlSharedViewErrorMessageComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c8, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.mainContainer = _t.first);
    } }, inputs: { logoHorizontalPosition: "logoHorizontalPosition", logoVerticalPosition: "logoVerticalPosition", errorPosition: "errorPosition", footerImageDescription: "footerImageDescription", blurBackground: "blurBackground", background: "background", logoImageScr: "logoImageScr", logoImageAlt: "logoImageAlt", errorCode: "errorCode", errorMessage: "errorMessage", errorButtonLabel: "errorButtonLabel", footerMainDescription: "footerMainDescription", footerShowContainer: "footerShowContainer", footerDescription: "footerDescription", footerImageSrc: "footerImageSrc", footerLink: "footerLink" }, outputs: { errorButtonAction$: "errorButtonAction$" }, decls: 6, vars: 10, consts: [[1, "main-container"], ["mainContainer", ""], [3, "horizontalPosition", "verticalPosition", "imageAlt", "imageScr"], [3, "position", "errorCode", "errorMessage", "buttonLabel", "buttonAction$"], [3, "description"], [3, "description", "imageDescription", "imageSrc", "link", 4, "ngIf"], [3, "description", "imageDescription", "imageSrc", "link"]], template: function GlSharedViewErrorMessageComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0, 1);
        ɵngcc0.ɵɵelement(2, "gl-shared-component-logo-square", 2);
        ɵngcc0.ɵɵelementStart(3, "gl-shared-component-error-message", 3);
        ɵngcc0.ɵɵlistener("buttonAction$", function GlSharedViewErrorMessageComponent_Template_gl_shared_component_error_message_buttonAction__3_listener() { return ctx.errorButtonAction(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(4, "gl-shared-component-footer-container", 4);
        ɵngcc0.ɵɵtemplate(5, GlSharedViewErrorMessageComponent_gl_shared_component_input_button_hyperlink_5_Template, 1, 4, "gl-shared-component-input-button-hyperlink", 5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("horizontalPosition", ctx.logoHorizontalPosition)("verticalPosition", ctx.logoVerticalPosition)("imageAlt", ctx.logoImageAlt)("imageScr", ctx.logoImageScr);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("position", ctx.errorPosition)("errorCode", ctx.errorCode)("errorMessage", ctx.errorMessage)("buttonLabel", ctx.errorButtonLabel);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("description", ctx.footerMainDescription);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.footerShowContainer);
    } }, directives: [GlSharedComponentLogoSquareComponent,
        GlSharedComponentErrorMessageComponent,
        GlSharedComponentFooterContainerComponent, ɵngcc1.NgIf, GlSharedComponentInputButtonHyperlinkComponent], styles: ["[_nghost-%COMP%] {display:flex;flex-grow:1;background-color:#1a1b1d}[_nghost-%COMP%]  .main-container{display:flex;flex-direction:column;justify-items:stretch;height:100vh;width:100vw;overflow:hidden;flex-grow:1;background-size:101%;background-position:top center;background-repeat:no-repeat;-webkit-animation-name:start;animation-name:start;-webkit-animation-duration:3s;animation-duration:3s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-play-state:running;animation-play-state:running}@-webkit-keyframes start{from{opacity:0}to{opacity:1}}@keyframes start{from{opacity:0}to{opacity:1}}"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GlSharedViewErrorMessageComponent, [{
        type: core.Component,
        args: [{
                selector: 'gl-shared-view-error-message',
                template: "<div #mainContainer class=\"main-container\">\n  <gl-shared-component-logo-square\n    [horizontalPosition]=\"logoHorizontalPosition\"\n    [verticalPosition]=\"logoVerticalPosition\"\n    [imageAlt]=\"logoImageAlt\"\n    [imageScr]=\"logoImageScr\"\n  ></gl-shared-component-logo-square>\n  <gl-shared-component-error-message\n    [position]=\"errorPosition\"\n    [errorCode]=\"errorCode\"\n    [errorMessage]=\"errorMessage\"\n    [buttonLabel]=\"errorButtonLabel\"\n    (buttonAction$)=\"errorButtonAction()\"\n  ></gl-shared-component-error-message>\n  <gl-shared-component-footer-container [description]=\"footerMainDescription\">\n    <gl-shared-component-input-button-hyperlink\n      *ngIf=\"footerShowContainer\"\n      [description]=\"footerDescription\"\n      [imageDescription]=\"footerImageDescription\"\n      [imageSrc]=\"footerImageSrc\"\n      [link]=\"footerLink\"\n    ></gl-shared-component-input-button-hyperlink>\n  </gl-shared-component-footer-container>\n</div>\n",
                styles: [":host::ng-deep{display:flex;flex-grow:1;background-color:#1a1b1d}:host::ng-deep .main-container{display:flex;flex-direction:column;justify-items:stretch;height:100vh;width:100vw;overflow:hidden;flex-grow:1;background-size:101%;background-position:top center;background-repeat:no-repeat;-webkit-animation-name:start;animation-name:start;-webkit-animation-duration:3s;animation-duration:3s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-play-state:running;animation-play-state:running}@-webkit-keyframes start{from{opacity:0}to{opacity:1}}@keyframes start{from{opacity:0}to{opacity:1}}"]
            }]
    }], function () { return []; }, { logoHorizontalPosition: [{
            type: core.Input
        }], logoVerticalPosition: [{
            type: core.Input
        }], errorPosition: [{
            type: core.Input
        }], errorButtonAction$: [{
            type: core.Output
        }], footerImageDescription: [{
            type: core.Input
        }], mainContainer: [{
            type: core.ViewChild,
            args: ['mainContainer']
        }], blurBackground: [{
            type: core.Input
        }], background: [{
            type: core.Input
        }], logoImageScr: [{
            type: core.Input
        }], logoImageAlt: [{
            type: core.Input
        }], errorCode: [{
            type: core.Input
        }], errorMessage: [{
            type: core.Input
        }], errorButtonLabel: [{
            type: core.Input
        }], footerMainDescription: [{
            type: core.Input
        }], footerShowContainer: [{
            type: core.Input
        }], footerDescription: [{
            type: core.Input
        }], footerImageSrc: [{
            type: core.Input
        }], footerLink: [{
            type: core.Input
        }] }); })();
        return GlSharedViewErrorMessageComponent;
    }());

    var GlSharedViewModule = /** @class */ (function () {
        function GlSharedViewModule() {
        }
GlSharedViewModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: GlSharedViewModule });
GlSharedViewModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function GlSharedViewModule_Factory(t) { return new (t || GlSharedViewModule)(); }, imports: [[
            common.CommonModule,
            GlComponentModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(GlSharedViewModule, { declarations: [GlSharedViewErrorMessageComponent], imports: [ɵngcc1.CommonModule, GlComponentModule], exports: [GlSharedViewErrorMessageComponent] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GlSharedViewModule, [{
        type: core.NgModule,
        args: [{
                declarations: [
                    GlSharedViewErrorMessageComponent
                ],
                exports: [
                    GlSharedViewErrorMessageComponent
                ],
                imports: [
                    common.CommonModule,
                    GlComponentModule
                ]
            }]
    }], function () { return []; }, null); })();
        return GlSharedViewModule;
    }());

    exports.CoreDirectivesAutofocusDirective = CoreDirectivesAutofocusDirective;
    exports.GlComponentModule = GlComponentModule;
    exports.GlCoreModule = GlCoreModule;
    exports.GlNgFrontendModule = GlNgFrontendModule;
    exports.GlSharedComponentButtonImageSimpleComponent = GlSharedComponentButtonImageSimpleComponent;
    exports.GlSharedComponentButtonImageTooltipComponent = GlSharedComponentButtonImageTooltipComponent;
    exports.GlSharedComponentButtonMenuSimpleComponent = GlSharedComponentButtonMenuSimpleComponent;
    exports.GlSharedComponentButtonMenuTooltipComponent = GlSharedComponentButtonMenuTooltipComponent;
    exports.GlSharedComponentErrorMessageComponent = GlSharedComponentErrorMessageComponent;
    exports.GlSharedComponentFilterComponent = GlSharedComponentFilterComponent;
    exports.GlSharedComponentFilterContainerComponent = GlSharedComponentFilterContainerComponent;
    exports.GlSharedComponentFilterService = GlSharedComponentFilterService;
    exports.GlSharedComponentFooterContainerComponent = GlSharedComponentFooterContainerComponent;
    exports.GlSharedComponentFooterSimpleComponent = GlSharedComponentFooterSimpleComponent;
    exports.GlSharedComponentInputAutocompleteLabelComponent = GlSharedComponentInputAutocompleteLabelComponent;
    exports.GlSharedComponentInputAutocompleteSimpleComponent = GlSharedComponentInputAutocompleteSimpleComponent;
    exports.GlSharedComponentInputAutocompleteSimpleService = GlSharedComponentInputAutocompleteSimpleService;
    exports.GlSharedComponentInputButtonHyperlinkComponent = GlSharedComponentInputButtonHyperlinkComponent;
    exports.GlSharedComponentInputButtonSimpleComponent = GlSharedComponentInputButtonSimpleComponent;
    exports.GlSharedComponentInputOptionSimpleComponent = GlSharedComponentInputOptionSimpleComponent;
    exports.GlSharedComponentInputTextAreaLabelComponent = GlSharedComponentInputTextAreaLabelComponent;
    exports.GlSharedComponentInputTextAreaSimpleComponent = GlSharedComponentInputTextAreaSimpleComponent;
    exports.GlSharedComponentInputTextLabelComponent = GlSharedComponentInputTextLabelComponent;
    exports.GlSharedComponentInputTextSimpleComponent = GlSharedComponentInputTextSimpleComponent;
    exports.GlSharedComponentLogoSquareComponent = GlSharedComponentLogoSquareComponent;
    exports.GlSharedComponentMenuBackgroundComponent = GlSharedComponentMenuBackgroundComponent;
    exports.GlSharedComponentMenuComponent = GlSharedComponentMenuComponent;
    exports.GlSharedComponentMenuItemComponent = GlSharedComponentMenuItemComponent;
    exports.GlSharedComponentMenuService = GlSharedComponentMenuService;
    exports.GlSharedComponentModalAlertComponent = GlSharedComponentModalAlertComponent;
    exports.GlSharedComponentModalAlertService = GlSharedComponentModalAlertService;
    exports.GlSharedComponentModalHeaderComponent = GlSharedComponentModalHeaderComponent;
    exports.GlSharedComponentModalLoadingComponent = GlSharedComponentModalLoadingComponent;
    exports.GlSharedComponentModalLoadingService = GlSharedComponentModalLoadingService;
    exports.GlSharedComponentTitleLabelButtonContainerComponent = GlSharedComponentTitleLabelButtonContainerComponent;
    exports.GlSharedComponentTitleLabelButtonSimpleComponent = GlSharedComponentTitleLabelButtonSimpleComponent;
    exports.GlSharedComponentTitleLabelSimpleComponent = GlSharedComponentTitleLabelSimpleComponent;
    exports.GlSharedComponentTitlePageComponent = GlSharedComponentTitlePageComponent;
    exports.GlSharedModule = GlSharedModule;
    exports.GlSharedViewErrorMessageComponent = GlSharedViewErrorMessageComponent;
    exports.GlSharedViewModule = GlSharedViewModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=gl-ng-frontend.umd.js.map