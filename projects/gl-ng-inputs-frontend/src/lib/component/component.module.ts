import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatLegacyAutocompleteModule as MatAutocompleteModule } from '@angular/material/legacy-autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';




import { CoreDirectivesClickOutsideDirective } from '../core/directives/click-outside/core-directives-click-outside.directive';
import { CorePipesListFilterPipe } from '../core/pipes/list-filter/core-pipes-list-filter.pipe';
import { GlComponentInputAutocompleteLabelComponent } from './autocomplete/label/gl-component-input-autocomplete-label.component';
import { GlComponentInputAutocompleteSimpleComponent } from './autocomplete/simple/gl-component-input-autocomplete-simple.component';
import { GlComponentInputButtonHyperlinkComponent } from './button/hyperlink/gl-component-input-button-hyperlink.component';
import { GlComponentInputButtonSimpleComponent } from './button/simple/gl-component-input-button-simple.component';
import { GlComponentInputCheckBoxLabelComponent } from './check-box/label/gl-component-input-check-box-label.component';
import { GlComponentInputCheckBoxSimpleComponent } from './check-box/simple/gl-component-input-check-box-simple.component';
import { GlComponentInputDatepickerLabelComponent } from './datepicker/label/gl-component-input-datepicker-label.component';
import { GlComponentInputDatepickerSimpleDayMonthYearComponent } from './datepicker/simple/day-month-year/gl-component-input-datepicker-simple-day-month-year.component';
import { GlComponentInputDatepickerSimpleMonthYearComponent } from './datepicker/simple/month-year/gl-component-input-datepicker-simple-month-year.component';
import { GlComponentInputDragAndDropSimpleComponent } from './drag-and-drop/simple/gl-component-input-drag-and-drop-simple.component';
import { GlComponentInputOptionSimpleComponent } from './option/simple/gl-component-input-option-simple.component';
import { GlComponentInputSwitchComponent } from './switch/gl-component-input-switch.component';
import { GlComponentInputTextAreaLabelComponent } from './text-area/label/gl-component-input-text-area-label.component';
import { GlComponentInputTextAreaSimpleComponent } from './text-area/simple/gl-component-input-text-area-simple.component';
import { GlComponentInputTextLabelButtonContainerComponent } from './text/label/button/container/gl-component-input-text-label-button-container.component';
import { GlComponentInputTextLabelSimpleComponent } from './text/label/simple/gl-component-input-text-label-simple.component';
import { GlComponentInputTextSimpleComponent } from './text/simple/gl-component-input-text-simple.component';
import { GlComponentInputTextSimpleWithStepComponent } from './text/simple/with-step/gl-component-input-text-simple-with-step.component';
import { GlComponentInputTextSimpleSearchComponent } from './text/simple/search/gl-component-input-text-simple-search.component';
import { GlComponentInputDropdownSimpleComponent } from './dropdown/simple/gl-component-input-dropdown-simple.component';
import { GlComponentInputDropdownLabelComponent } from './dropdown/label/gl-component-input-dropdown-label.component';

@NgModule({
    imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatDialogModule,
    MatDatepickerModule,
    FormsModule,
    CoreDirectivesClickOutsideDirective,
    GlComponentInputAutocompleteLabelComponent,
    GlComponentInputAutocompleteSimpleComponent,
    GlComponentInputButtonHyperlinkComponent,
    GlComponentInputButtonSimpleComponent,
    GlComponentInputCheckBoxLabelComponent,
    GlComponentInputCheckBoxSimpleComponent,
    GlComponentInputDatepickerLabelComponent,
    GlComponentInputDatepickerSimpleDayMonthYearComponent,
    GlComponentInputDatepickerSimpleMonthYearComponent,
    GlComponentInputDropdownSimpleComponent,
    GlComponentInputOptionSimpleComponent,
    GlComponentInputSwitchComponent,
    GlComponentInputTextLabelButtonContainerComponent,
    GlComponentInputTextLabelSimpleComponent,
    GlComponentInputTextSimpleComponent,
    GlComponentInputTextSimpleWithStepComponent,
    GlComponentInputTextAreaSimpleComponent,
    GlComponentInputTextAreaLabelComponent,
    GlComponentInputDragAndDropSimpleComponent,
    GlComponentInputTextSimpleSearchComponent,
    GlComponentInputDropdownLabelComponent
],
    exports: [
        GlComponentInputAutocompleteLabelComponent,
        GlComponentInputAutocompleteSimpleComponent,
        GlComponentInputButtonHyperlinkComponent,
        GlComponentInputButtonSimpleComponent,
        GlComponentInputCheckBoxLabelComponent,
        GlComponentInputCheckBoxSimpleComponent,
        GlComponentInputDatepickerLabelComponent,
        GlComponentInputDatepickerSimpleDayMonthYearComponent,
        GlComponentInputDatepickerSimpleMonthYearComponent,
        GlComponentInputDropdownSimpleComponent,
        GlComponentInputDropdownLabelComponent,
        GlComponentInputOptionSimpleComponent,
        GlComponentInputSwitchComponent,
        GlComponentInputTextLabelButtonContainerComponent,
        GlComponentInputTextLabelSimpleComponent,
        GlComponentInputTextSimpleComponent,
        GlComponentInputTextSimpleWithStepComponent,
        GlComponentInputTextAreaSimpleComponent,
        GlComponentInputTextAreaLabelComponent,
        GlComponentInputDragAndDropSimpleComponent,
        GlComponentInputTextSimpleSearchComponent
    ],
    providers: [CorePipesListFilterPipe]
})
export class ComponentModule {
  static forRoot(): ModuleWithProviders<ComponentModule> {
    return {
      ngModule: ComponentModule
    };
  }
}
