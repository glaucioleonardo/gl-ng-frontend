import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreDirectivesAutofocusDirective } from './directives/autofocus/core-directives-autofocus.directive';

@NgModule({
  declarations: [
    CoreDirectivesAutofocusDirective
  ],
  exports: [
    CoreDirectivesAutofocusDirective,
  ],
  imports: [
    CommonModule,
  ]
})
export class CoreModule { }
