import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export class GlSharedComponentInputTextSimpleService {
    constructor() {
        this.updateInputMask$ = new Subject();
    }
    updateInputMask() {
        this.updateInputMask$.next();
    }
}
GlSharedComponentInputTextSimpleService.ɵprov = i0.ɵɵdefineInjectable({ factory: function GlSharedComponentInputTextSimpleService_Factory() { return new GlSharedComponentInputTextSimpleService(); }, token: GlSharedComponentInputTextSimpleService, providedIn: "root" });
GlSharedComponentInputTextSimpleService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
GlSharedComponentInputTextSimpleService.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC10ZXh0LXNpbXBsZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZ2wtbmctZnJvbnRlbmQvc3JjL2xpYi9zaGFyZWQvY29tcG9uZW50L2lucHV0L3RleHQvc2ltcGxlL2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtdGV4dC1zaW1wbGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBSy9CLE1BQU0sT0FBTyx1Q0FBdUM7SUFJbEQ7UUFGQSxxQkFBZ0IsR0FBdUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztJQUVyQyxDQUFDO0lBRWpCLGVBQWU7UUFDYixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDL0IsQ0FBQzs7OztZQVhGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgR2xTaGFyZWRDb21wb25lbnRJbnB1dFRleHRTaW1wbGVTZXJ2aWNlIHtcclxuXHJcbiAgdXBkYXRlSW5wdXRNYXNrJDogU3ViamVjdDx1bmRlZmluZWQ+ID0gbmV3IFN1YmplY3QoKTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgdXBkYXRlSW5wdXRNYXNrKCk6IHZvaWQge1xyXG4gICAgdGhpcy51cGRhdGVJbnB1dE1hc2skLm5leHQoKTtcclxuICB9XHJcbn1cclxuIl19