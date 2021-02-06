import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreDirectivesAutofocusDirective } from './directives/autofocus/core-directives-autofocus.directive';
import { CoreDirectivesDragAndDropDirective } from './directives/drag-and-drop/core-directives-drag-and-drop.directive';
export class GlCoreModule {
}
GlCoreModule.decorators = [
    { type: NgModule, args: [{
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
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9nbC1uZy1mcm9udGVuZC9zcmMvbGliL2NvcmUvZ2wtY29yZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sNERBQTRELENBQUM7QUFDOUcsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sb0VBQW9FLENBQUM7QUFleEgsTUFBTSxPQUFPLFlBQVk7OztZQWJ4QixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLGdDQUFnQztvQkFDaEMsa0NBQWtDO2lCQUNuQztnQkFDQyxPQUFPLEVBQUU7b0JBQ0wsZ0NBQWdDO29CQUNoQyxrQ0FBa0M7aUJBQ3JDO2dCQUNILE9BQU8sRUFBRTtvQkFDUCxZQUFZO2lCQUNiO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvcmVEaXJlY3RpdmVzQXV0b2ZvY3VzRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2F1dG9mb2N1cy9jb3JlLWRpcmVjdGl2ZXMtYXV0b2ZvY3VzLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBDb3JlRGlyZWN0aXZlc0RyYWdBbmREcm9wRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2RyYWctYW5kLWRyb3AvY29yZS1kaXJlY3RpdmVzLWRyYWctYW5kLWRyb3AuZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQ29yZURpcmVjdGl2ZXNBdXRvZm9jdXNEaXJlY3RpdmUsXG4gICAgQ29yZURpcmVjdGl2ZXNEcmFnQW5kRHJvcERpcmVjdGl2ZVxuICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgQ29yZURpcmVjdGl2ZXNBdXRvZm9jdXNEaXJlY3RpdmUsXG4gICAgICAgIENvcmVEaXJlY3RpdmVzRHJhZ0FuZERyb3BEaXJlY3RpdmVcbiAgICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgR2xDb3JlTW9kdWxlIHsgfVxuIl19