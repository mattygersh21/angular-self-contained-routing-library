(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('internal-comp-routing-lib', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["internal-comp-routing-lib"] = {}, global.ng.core));
})(this, (function (exports, i0) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);

    var InternalCompRoutingLibService = /** @class */ (function () {
        function InternalCompRoutingLibService() {
        }
        return InternalCompRoutingLibService;
    }());
    InternalCompRoutingLibService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: InternalCompRoutingLibService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    InternalCompRoutingLibService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: InternalCompRoutingLibService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: InternalCompRoutingLibService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return []; } });

    var InternalCompRoutingLibComponent = /** @class */ (function () {
        function InternalCompRoutingLibComponent() {
        }
        InternalCompRoutingLibComponent.prototype.ngOnInit = function () {
        };
        return InternalCompRoutingLibComponent;
    }());
    InternalCompRoutingLibComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: InternalCompRoutingLibComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    InternalCompRoutingLibComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: InternalCompRoutingLibComponent, selector: "lib-internal-comp-routing-lib", ngImport: i0__namespace, template: "\n    <p>\n      internal-comp-routing-lib works!\n    </p>\n  ", isInline: true });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: InternalCompRoutingLibComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-internal-comp-routing-lib',
                        template: "\n    <p>\n      internal-comp-routing-lib works!\n    </p>\n  ",
                        styles: []
                    }]
            }], ctorParameters: function () { return []; } });

    var InternalCompRoutingLibModule = /** @class */ (function () {
        function InternalCompRoutingLibModule() {
        }
        return InternalCompRoutingLibModule;
    }());
    InternalCompRoutingLibModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: InternalCompRoutingLibModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    InternalCompRoutingLibModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: InternalCompRoutingLibModule, declarations: [InternalCompRoutingLibComponent], exports: [InternalCompRoutingLibComponent] });
    InternalCompRoutingLibModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: InternalCompRoutingLibModule, imports: [[]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: InternalCompRoutingLibModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            InternalCompRoutingLibComponent
                        ],
                        imports: [],
                        exports: [
                            InternalCompRoutingLibComponent
                        ]
                    }]
            }] });

    /*
     * Public API Surface of internal-comp-routing-lib
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.InternalCompRoutingLibComponent = InternalCompRoutingLibComponent;
    exports.InternalCompRoutingLibModule = InternalCompRoutingLibModule;
    exports.InternalCompRoutingLibService = InternalCompRoutingLibService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=internal-comp-routing-lib.umd.js.map
