import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreDirectivesAutofocusDirective } from './directives/autofocus/core-directives-autofocus.directive';

@NgModule({
    exports: [
        CoreDirectivesAutofocusDirective,
    ],
    imports: [
        CommonModule,
        CoreDirectivesAutofocusDirective
    ]
})
export class CoreModule { }
