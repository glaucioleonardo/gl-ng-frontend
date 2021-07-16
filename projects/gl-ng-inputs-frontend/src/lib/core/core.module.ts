import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreDirectivesDragAndDropDirective } from './directives/drag-and-drop/core-directives-drag-and-drop.directive';
import { CorePipesListFilterPipe } from './pipes/list-filter/core-pipes-list-filter.pipe';

@NgModule({
  declarations: [
    CoreDirectivesDragAndDropDirective,
    CorePipesListFilterPipe
  ],
  imports: [
    CommonModule
  ],
    exports: [
        CoreDirectivesDragAndDropDirective,
        CorePipesListFilterPipe
    ]
})
export class CoreModule {}
