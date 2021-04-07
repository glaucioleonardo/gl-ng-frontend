import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlComponentModule } from '../component/gl-component.module';
import { GlSharedViewErrorMessageComponent } from './error-message/gl-shared-view-error-message.component';
export class GlSharedViewModule {
}
GlSharedViewModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    GlSharedViewErrorMessageComponent
                ],
                exports: [
                    GlSharedViewErrorMessageComponent
                ],
                imports: [
                    CommonModule,
                    GlComponentModule
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLXZpZXcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZ2wtbmctZnJvbnRlbmQvc3JjL2xpYi9zaGFyZWQvdmlldy9nbC1zaGFyZWQtdmlldy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDckUsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFjM0csTUFBTSxPQUFPLGtCQUFrQjs7O1lBWjlCLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1osaUNBQWlDO2lCQUNsQztnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsaUNBQWlDO2lCQUNsQztnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixpQkFBaUI7aUJBQ2xCO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBHbENvbXBvbmVudE1vZHVsZSB9IGZyb20gJy4uL2NvbXBvbmVudC9nbC1jb21wb25lbnQubW9kdWxlJztcclxuaW1wb3J0IHsgR2xTaGFyZWRWaWV3RXJyb3JNZXNzYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9lcnJvci1tZXNzYWdlL2dsLXNoYXJlZC12aWV3LWVycm9yLW1lc3NhZ2UuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBHbFNoYXJlZFZpZXdFcnJvck1lc3NhZ2VDb21wb25lbnRcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIEdsU2hhcmVkVmlld0Vycm9yTWVzc2FnZUNvbXBvbmVudFxyXG4gIF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgR2xDb21wb25lbnRNb2R1bGVcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHbFNoYXJlZFZpZXdNb2R1bGUgeyB9XHJcbiJdfQ==