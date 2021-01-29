import { EventEmitter } from '@angular/core';
export declare class GlSharedComponentErrorMessageComponent {
    position: 'left' | 'right';
    errorCode: string | number;
    errorMessage: string;
    buttonLabel: string;
    buttonAction$: EventEmitter<void>;
    constructor();
    buttonAction(): void;
}
//# sourceMappingURL=gl-shared-component-error-message.component.d.ts.map