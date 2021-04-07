import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreDirectivesAutofocusDirective } from './directives/autofocus/core-directives-autofocus.directive';
import { CoreDirectivesDragAndDropDirective } from './directives/drag-and-drop/core-directives-drag-and-drop.directive';

@NgModule({
  declarations: [
    CoreDirectivesAutofocusDirective,
    CoreDirectivesDragAndDropDirective
  ],
    exports: [
        CoreDirectivesAutofocusDirective,
        CoreDirectivesDragAndDropDirective
    ],
  imports: [
    CommonModule
  ]
})
export class GlCoreModule { }
