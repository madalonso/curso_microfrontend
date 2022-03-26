(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/cdk/overlay'), require('@angular/common/http'), require('@angular/cdk/collections'), require('cross-cutting-concern'), require('@angular/cdk/table'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('sample-feature2', ['exports', '@angular/core', '@angular/cdk/overlay', '@angular/common/http', '@angular/cdk/collections', 'cross-cutting-concern', '@angular/cdk/table', 'rxjs', 'rxjs/operators'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['sample-feature2'] = {}, global.ng.core, global.ng.cdk.overlay, global.ng.common.http, global.ng.cdk.collections, global.crossCuttingConcern, global.ng.cdk.table, global.rxjs, global.rxjs.operators));
}(this, (function (exports, i0, i1, i1$1, collections, crossCuttingConcern, i2, rxjs, operators) { 'use strict';

    function Feature2SubComponent_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "ul", 4);
            i0.ɵɵelementStart(1, "li");
            i0.ɵɵtext(2, "Item 1");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "li");
            i0.ɵɵtext(4, "Item 2");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "li");
            i0.ɵɵtext(6, "Item 3");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
    }
    var Feature2SubComponent = /** @class */ (function () {
        function Feature2SubComponent() {
            this.isOpen = false;
        }
        Feature2SubComponent.prototype.ngOnInit = function () {
        };
        return Feature2SubComponent;
    }());
    Feature2SubComponent.ɵfac = function Feature2SubComponent_Factory(t) { return new (t || Feature2SubComponent)(); };
    Feature2SubComponent.ɵcmp = i0.ɵɵdefineComponent({ type: Feature2SubComponent, selectors: [["feature2-sub"]], decls: 5, vars: 3, consts: [[1, "feature2-sub"], ["mat-button", "", "cdkOverlayOrigin", "", 3, "click"], ["trigger", "cdkOverlayOrigin"], ["cdkConnectedOverlay", "", 3, "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen"], [1, "example-list"]], template: function Feature2SubComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "button", 1, 2);
                i0.ɵɵlistener("click", function Feature2SubComponent_Template_button_click_1_listener() { return ctx.isOpen = !ctx.isOpen; });
                i0.ɵɵtext(3);
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(4, Feature2SubComponent_ng_template_4_Template, 7, 0, "ng-template", 3);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0.ɵɵreference(2);
                i0.ɵɵadvance(3);
                i0.ɵɵtextInterpolate1("Feature 2 sub component ", ctx.isOpen ? "Opened" : "Closed", "");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("cdkConnectedOverlayOrigin", _r0)("cdkConnectedOverlayOpen", ctx.isOpen);
            }
        }, directives: [i1.CdkOverlayOrigin, i1.CdkConnectedOverlay], styles: [".example-list[_ngcontent-%COMP%]{background:#fff;border:1px solid #ccc;border-radius:5px;margin:0;padding:10px;text-align:center;width:100px}.example-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{border-bottom:1px solid #8b8b8b;list-style-type:none;padding:8px 0}.example-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:last-child{border-bottom:none}.feature2-sub[_ngcontent-%COMP%]{margin-left:30px}.feature2-sub[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:medium}"] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(Feature2SubComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'feature2-sub',
                        templateUrl: './feature2-sub.component.html',
                        styleUrls: ['./feature2-sub.component.scss']
                    }]
            }], function () { return []; }, null);
    })();

    var Feature2Service = /** @class */ (function () {
        function Feature2Service(http) {
            this.http = http;
            this.feature2ApiUri = '/feature2api/feature2data';
        }
        Feature2Service.prototype.getFeature2Data = function () {
            var httpHeaders = new i1$1.HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
            return this.http.get(this.feature2ApiUri, { headers: httpHeaders });
        };
        return Feature2Service;
    }());
    Feature2Service.ɵfac = function Feature2Service_Factory(t) { return new (t || Feature2Service)(i0.ɵɵinject(i1$1.HttpClient)); };
    Feature2Service.ɵprov = i0.ɵɵdefineInjectable({ token: Feature2Service, factory: Feature2Service.ɵfac });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(Feature2Service, [{
                type: i0.Injectable
            }], function () { return [{ type: i1$1.HttpClient }]; }, null);
    })();

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
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
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
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
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
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
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
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    ;
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
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

    function Feature2Component_th_7_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "th", 13);
            i0.ɵɵtext(1, " Data Point 1 ");
            i0.ɵɵelementEnd();
        }
    }
    function Feature2Component_td_8_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "td", 14);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r12 = ctx.$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", element_r12.dataPoint1, " ");
        }
    }
    function Feature2Component_th_10_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "th", 13);
            i0.ɵɵtext(1, " Data Point 2 ");
            i0.ɵɵelementEnd();
        }
    }
    function Feature2Component_td_11_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "td", 14);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r13 = ctx.$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", element_r13.dataPoint2, " ");
        }
    }
    function Feature2Component_th_13_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "th", 13);
            i0.ɵɵtext(1, " Data Point 3 ");
            i0.ɵɵelementEnd();
        }
    }
    function Feature2Component_td_14_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "td", 14);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r14 = ctx.$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", element_r14.dataPoint3, " ");
        }
    }
    function Feature2Component_th_16_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "th", 13);
            i0.ɵɵtext(1, " Data Point 4 ");
            i0.ɵɵelementEnd();
        }
    }
    function Feature2Component_td_17_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "td", 14);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r15 = ctx.$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", element_r15.dataPoint4, " ");
        }
    }
    function Feature2Component_th_19_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "th", 13);
            i0.ɵɵtext(1, " Data Point 5 ");
            i0.ɵɵelementEnd();
        }
    }
    function Feature2Component_td_20_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "td", 14);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r16 = ctx.$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", element_r16.dataPoint5, " ");
        }
    }
    function Feature2Component_tr_21_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "tr", 15);
        }
    }
    function Feature2Component_tr_22_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "tr", 16);
        }
    }
    var Feature2Component = /** @class */ (function () {
        function Feature2Component(feature2Service, injector) {
            this.feature2Service = feature2Service;
            this.injector = injector;
            this.messagingService = {};
            this.displayedColumns = ['dataPoint1', 'dataPoint2', 'dataPoint3', 'dataPoint4', 'dataPoint5'];
            this.dataSource = {};
        }
        Feature2Component.prototype.ngOnInit = function () {
            this.messagingService = this.injector.get(crossCuttingConcern.InjectionTokens.messagingServiceInjectionToken);
            this.dataSource = new Feature2DataSource(this.feature2Service);
        };
        Feature2Component.prototype.onMessageButtonClick = function () {
            this.messagingService.messageToFeature1({
                messageText: 'Message from feature1',
                messageTime: new Date()
            });
        };
        return Feature2Component;
    }());
    Feature2Component.ɵfac = function Feature2Component_Factory(t) { return new (t || Feature2Component)(i0.ɵɵdirectiveInject(Feature2Service), i0.ɵɵdirectiveInject(i0.Injector)); };
    Feature2Component.ɵcmp = i0.ɵɵdefineComponent({ type: Feature2Component, selectors: [["app-feature2"]], decls: 26, vars: 3, consts: [[1, "feature2"], [1, "feature2-header"], ["cdk-table", "", 3, "dataSource"], ["cdkColumnDef", "dataPoint1"], ["cdk-header-cell", "", 4, "cdkHeaderCellDef"], ["cdk-cell", "", 4, "cdkCellDef"], ["cdkColumnDef", "dataPoint2"], ["cdkColumnDef", "dataPoint3"], ["cdkColumnDef", "dataPoint4"], ["cdkColumnDef", "dataPoint5"], ["cdk-header-row", "", 4, "cdkHeaderRowDef"], ["cdk-row", "", 4, "cdkRowDef", "cdkRowDefColumns"], ["mat-button", "", 3, "click"], ["cdk-header-cell", ""], ["cdk-cell", ""], ["cdk-header-row", ""], ["cdk-row", ""]], template: function Feature2Component_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "div", 1);
                i0.ɵɵelementStart(2, "b");
                i0.ɵɵtext(3, "Feature 2 Page");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(4, "div");
                i0.ɵɵelementStart(5, "table", 2);
                i0.ɵɵelementContainerStart(6, 3);
                i0.ɵɵtemplate(7, Feature2Component_th_7_Template, 2, 0, "th", 4);
                i0.ɵɵtemplate(8, Feature2Component_td_8_Template, 2, 1, "td", 5);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(9, 6);
                i0.ɵɵtemplate(10, Feature2Component_th_10_Template, 2, 0, "th", 4);
                i0.ɵɵtemplate(11, Feature2Component_td_11_Template, 2, 1, "td", 5);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(12, 7);
                i0.ɵɵtemplate(13, Feature2Component_th_13_Template, 2, 0, "th", 4);
                i0.ɵɵtemplate(14, Feature2Component_td_14_Template, 2, 1, "td", 5);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(15, 8);
                i0.ɵɵtemplate(16, Feature2Component_th_16_Template, 2, 0, "th", 4);
                i0.ɵɵtemplate(17, Feature2Component_td_17_Template, 2, 1, "td", 5);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(18, 9);
                i0.ɵɵtemplate(19, Feature2Component_th_19_Template, 2, 0, "th", 4);
                i0.ɵɵtemplate(20, Feature2Component_td_20_Template, 2, 1, "td", 5);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵtemplate(21, Feature2Component_tr_21_Template, 1, 0, "tr", 10);
                i0.ɵɵtemplate(22, Feature2Component_tr_22_Template, 1, 0, "tr", 11);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(23, "div");
                i0.ɵɵelementStart(24, "button", 12);
                i0.ɵɵlistener("click", function Feature2Component_Template_button_click_24_listener() { return ctx.onMessageButtonClick(); });
                i0.ɵɵtext(25, "Send Message To Feature 1");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(5);
                i0.ɵɵproperty("dataSource", ctx.dataSource);
                i0.ɵɵadvance(16);
                i0.ɵɵproperty("cdkHeaderRowDef", ctx.displayedColumns);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("cdkRowDefColumns", ctx.displayedColumns);
            }
        }, directives: [i2.CdkTable, i2.CdkColumnDef, i2.CdkHeaderCellDef, i2.CdkCellDef, i2.CdkHeaderRowDef, i2.CdkRowDef, i2.CdkHeaderCell, i2.CdkCell, i2.CdkHeaderRow, i2.CdkRow], styles: [".feature2[_ngcontent-%COMP%]{padding:20px}.feature2[_ngcontent-%COMP%]   .feature2-header[_ngcontent-%COMP%]{background-color:#f0f8ff;margin-bottom:30px}.feature2[_ngcontent-%COMP%]   .cdk-table[_ngcontent-%COMP%]{width:70%}.feature2[_ngcontent-%COMP%]   .cdk-table[_ngcontent-%COMP%]   .cdk-header-row[_ngcontent-%COMP%]{background-color:#f0f8ff}.feature2[_ngcontent-%COMP%]   .cdk-table[_ngcontent-%COMP%]   .cdk-row[_ngcontent-%COMP%]{background-color:beige}.feature2[_ngcontent-%COMP%]   .cdk-table[_ngcontent-%COMP%]   .cdk-cell[_ngcontent-%COMP%]{text-align:center}"] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(Feature2Component, [{
                type: i0.Component,
                args: [{
                        selector: 'app-feature2',
                        templateUrl: './feature2.component.html',
                        styleUrls: ['./feature2.component.scss']
                    }]
            }], function () { return [{ type: Feature2Service }, { type: i0.Injector }]; }, null);
    })();
    var Feature2DataSource = /** @class */ (function (_super) {
        __extends(Feature2DataSource, _super);
        function Feature2DataSource(feature2Service) {
            var _this = _super.call(this) || this;
            _this.feature2Service = feature2Service;
            return _this;
        }
        Feature2DataSource.prototype.connect = function () {
            return this.feature2Service.getFeature2Data();
        };
        Feature2DataSource.prototype.disconnect = function () { };
        return Feature2DataSource;
    }(collections.DataSource));

    var FakeBackendInterceptor = /** @class */ (function () {
        function FakeBackendInterceptor() {
        }
        FakeBackendInterceptor.prototype.intercept = function (request, next) {
            // return delayed observable to simulate server api call
            return rxjs.of(null)
                .pipe(operators.mergeMap(function () {
                if (request.url.endsWith('feature2api/feature2data')) {
                    return rxjs.of(new i1$1.HttpResponse({ status: 200, body: [
                            { dataPoint1: 1, dataPoint2: 'testval1', dataPoint3: 'testval1', dataPoint4: 'testval1', dataPoint5: 'testval1' },
                            { dataPoint1: 2, dataPoint2: 'testval2', dataPoint3: 'testval2', dataPoint4: 'testval2', dataPoint5: 'testval2' },
                            { dataPoint1: 3, dataPoint2: 'testval3', dataPoint3: 'testval3', dataPoint4: 'testval3', dataPoint5: 'testval3' },
                            { dataPoint1: 4, dataPoint2: 'testval4', dataPoint3: 'testval4', dataPoint4: 'testval4', dataPoint5: 'testval4' },
                            { dataPoint1: 5, dataPoint2: 'testval5', dataPoint3: 'testval5', dataPoint4: 'testval5', dataPoint5: 'testval5' },
                            { dataPoint1: 6, dataPoint2: 'testval6', dataPoint3: 'testval6', dataPoint4: 'testval6', dataPoint5: 'testval6' },
                            { dataPoint1: 7, dataPoint2: 'testval7', dataPoint3: 'testval7', dataPoint4: 'testval7', dataPoint5: 'testval7' },
                            { dataPoint1: 8, dataPoint2: 'testval8', dataPoint3: 'testval8', dataPoint4: 'testval8', dataPoint5: 'testval8' }
                        ] }));
                }
                return next.handle(request);
            }))
                .pipe(operators.materialize())
                .pipe(operators.delay(500))
                .pipe(operators.dematerialize());
        };
        return FakeBackendInterceptor;
    }());
    FakeBackendInterceptor.ɵfac = function FakeBackendInterceptor_Factory(t) { return new (t || FakeBackendInterceptor)(); };
    FakeBackendInterceptor.ɵprov = i0.ɵɵdefineInjectable({ token: FakeBackendInterceptor, factory: FakeBackendInterceptor.ɵfac });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(FakeBackendInterceptor, [{
                type: i0.Injectable
            }], function () { return []; }, null);
    })();

    var Feature2Module = /** @class */ (function () {
        function Feature2Module() {
        }
        return Feature2Module;
    }());
    Feature2Module.ɵmod = i0.ɵɵdefineNgModule({ type: Feature2Module });
    Feature2Module.ɵinj = i0.ɵɵdefineInjector({ factory: function Feature2Module_Factory(t) { return new (t || Feature2Module)(); }, providers: [
            Feature2Service,
            // Providing fake backend interceptor for simulating api calls. Remove this before using an actual api
            {
                provide: i1$1.HTTP_INTERCEPTORS,
                useClass: FakeBackendInterceptor,
                multi: true
            }
        ], imports: [[
                i1$1.HttpClientModule,
                i2.CdkTableModule,
                i1.OverlayModule
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(Feature2Module, { declarations: [Feature2SubComponent, Feature2Component], imports: [i1$1.HttpClientModule,
                i2.CdkTableModule,
                i1.OverlayModule], exports: [Feature2SubComponent] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(Feature2Module, [{
                type: i0.NgModule,
                args: [{
                        declarations: [Feature2SubComponent, Feature2Component],
                        imports: [
                            i1$1.HttpClientModule,
                            i2.CdkTableModule,
                            i1.OverlayModule
                        ],
                        providers: [
                            Feature2Service,
                            // Providing fake backend interceptor for simulating api calls. Remove this before using an actual api
                            {
                                provide: i1$1.HTTP_INTERCEPTORS,
                                useClass: FakeBackendInterceptor,
                                multi: true
                            }
                        ],
                        exports: [
                            Feature2SubComponent
                        ]
                    }]
            }], null, null);
    })();

    /*
     * Public API Surface of sample-feature2
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.Feature2Component = Feature2Component;
    exports.Feature2DataSource = Feature2DataSource;
    exports.Feature2Module = Feature2Module;
    exports.Feature2Service = Feature2Service;
    exports.Feature2SubComponent = Feature2SubComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=sample-feature2.umd.js.map
