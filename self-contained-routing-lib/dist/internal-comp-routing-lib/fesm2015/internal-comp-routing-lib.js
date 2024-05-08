import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';

class InternalCompRoutingLibService {
    constructor() { }
}
InternalCompRoutingLibService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: InternalCompRoutingLibService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
InternalCompRoutingLibService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: InternalCompRoutingLibService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: InternalCompRoutingLibService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class InternalCompRoutingLibComponent {
    constructor() { }
    ngOnInit() {
    }
}
InternalCompRoutingLibComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: InternalCompRoutingLibComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
InternalCompRoutingLibComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: InternalCompRoutingLibComponent, selector: "lib-internal-comp-routing-lib", ngImport: i0, template: `
    <p>
      internal-comp-routing-lib works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: InternalCompRoutingLibComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-internal-comp-routing-lib',
                    template: `
    <p>
      internal-comp-routing-lib works!
    </p>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return []; } });

class InternalCompRoutingLibModule {
}
InternalCompRoutingLibModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: InternalCompRoutingLibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
InternalCompRoutingLibModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: InternalCompRoutingLibModule, declarations: [InternalCompRoutingLibComponent], exports: [InternalCompRoutingLibComponent] });
InternalCompRoutingLibModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: InternalCompRoutingLibModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: InternalCompRoutingLibModule, decorators: [{
            type: NgModule,
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

export { InternalCompRoutingLibComponent, InternalCompRoutingLibModule, InternalCompRoutingLibService };
//# sourceMappingURL=internal-comp-routing-lib.js.map
