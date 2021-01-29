import { EventEmitter } from '@angular/core';
import { IMenuButton } from '../../button/menu/simple/gl-shared-component-button-menu-simple.interface';
export declare class GlSharedComponentHeaderDefaultComponent {
    systemLogo: boolean;
    labelModel: string;
    labelId: number;
    labelArea: string;
    type: 'only-buttons' | '';
    title: string;
    subtitle: string;
    menuButtons: IMenuButton[];
    keyDown: EventEmitter<any>;
    readonly: boolean;
    constructor();
    onKeyDown(event: any): void;
}
//# sourceMappingURL=gl-shared-component-header-default.component.d.ts.map