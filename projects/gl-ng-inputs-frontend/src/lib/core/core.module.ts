import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreDirectivesDragAndDropDirective } from './directives/drag-and-drop/core-directives-drag-and-drop.directive';

@NgModule({
  declarations: [
    CoreDirectivesDragAndDropDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CoreDirectivesDragAndDropDirective
  ]
})
export class CoreModule { }
