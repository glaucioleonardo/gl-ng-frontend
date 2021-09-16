/*
 * Public API Surface of gl-ng-inputs-frontend
 */

export { ComponentModule as GlNgInputsComponentModule } from './gl-ng-inputs-frontend/src/lib/component/component.module';
export { CoreModule as GlNgInputsCoreModule} from './gl-ng-inputs-frontend/src/lib/core/core.module';
export { GlNgInputsFrontendModule } from './gl-ng-inputs-frontend/src/lib/gl-ng-inputs-frontend.module';

// region directives
export { CoreDirectivesDragAndDropDirective } from './gl-ng-inputs-frontend/src/lib/core/directives/drag-and-drop/core-directives-drag-and-drop.directive';
export { CoreDirectivesClickOutsideDirective } from './gl-ng-inputs-frontend/src/lib/core/directives/click-outside/core-directives-click-outside.directive';
// endregion

// region interfaces
export { TTheme, THorizontalAlignment } from './gl-ng-inputs-frontend/src/lib/core/interfaces/alignments.interface';
// endregion

// region pipes
export { CorePipesListFilterPipe } from './gl-ng-inputs-frontend/src/lib/core/pipes/list-filter/core-pipes-list-filter.pipe';
// endregion

// region autocomplete
export { GlComponentInputAutocompleteSimpleComponent } from './gl-ng-inputs-frontend/src/lib/component/autocomplete/simple/gl-component-input-autocomplete-simple.component';
export { GlComponentInputAutocompleteSimpleService } from './gl-ng-inputs-frontend/src/lib/component/autocomplete/simple/gl-component-input-autocomplete-simple.service';
export { GlComponentInputAutocompleteLabelComponent } from './gl-ng-inputs-frontend/src/lib/component/autocomplete/label/gl-component-input-autocomplete-label.component';
export { IResetAutocompleteValue, ISetAutocompleteValue, IUpdateOptionList } from './gl-ng-inputs-frontend/src/lib/component/autocomplete/simple/gl-component-input-autocomplete-simple.interface';
// endregion

// region button
export { GlComponentInputButtonHyperlinkComponent } from './gl-ng-inputs-frontend/src/lib/component/button/hyperlink/gl-component-input-button-hyperlink.component';
export { GlComponentInputButtonSimpleComponent } from './gl-ng-inputs-frontend/src/lib/component/button/simple/gl-component-input-button-simple.component';
export { TInputButtonSimpleClass, TInputButtonType } from './gl-ng-inputs-frontend/src/lib/component/button/simple/gl-component-input-button-simple.interface';
// endregion

// region check-box
export { GlComponentInputCheckBoxLabelComponent } from './gl-ng-inputs-frontend/src/lib/component/check-box/label/gl-component-input-check-box-label.component';
export { GlComponentInputCheckBoxSimpleComponent } from './gl-ng-inputs-frontend/src/lib/component/check-box/simple/gl-component-input-check-box-simple.component';
// endregion

// region datepicker
export { GlComponentInputDatepickerSimpleMonthYearComponent } from './gl-ng-inputs-frontend/src/lib/component/datepicker/simple/month-year/gl-component-input-datepicker-simple-month-year.component';
export { GlComponentInputDatepickerSimpleDayMonthYearComponent } from './gl-ng-inputs-frontend/src/lib/component/datepicker/simple/day-month-year/gl-component-input-datepicker-simple-day-month-year.component';
export { GlComponentInputDatepickerLabelComponent } from './gl-ng-inputs-frontend/src/lib/component/datepicker/label/gl-component-input-datepicker-label.component';
export { IDatePickerOutput } from './gl-ng-inputs-frontend/src/lib/component/datepicker/simple/day-month-year/gl-component-input-datepicker-simple-day-month-year.interface';
export { IDatePickerMonthYearOutput } from './gl-ng-inputs-frontend/src/lib/component/datepicker/simple/month-year/gl-component-input-datepicker-simple-month-year.interface';
// endregion

// region drag and drop
export { GlComponentInputDragAndDropSimpleComponent } from './gl-ng-inputs-frontend/src/lib/component/drag-and-drop/simple/gl-component-input-drag-and-drop-simple.component';
export { IDragAndDropAddedResult, IDragAndDropVariables, TAttachmentUploadResult } from './gl-ng-inputs-frontend/src/lib/component/drag-and-drop/simple/gl-component-input-drag-and-drop-simple.interface';
// endregion

// region dropdown
export { GlComponentInputDropdownSimpleComponent, DROPDOWN_CONTROL_VALUE_ACCESSOR } from './gl-ng-inputs-frontend/src/lib/component/dropdown/simple/gl-component-input-dropdown-simple.component';
export { GlComponentInputDropdownLabelComponent } from './gl-ng-inputs-frontend/src/lib/component/dropdown/label/gl-component-input-dropdown-label.component';
export { IDropdownSettings, ListItem as DropDownListItem, } from './gl-ng-inputs-frontend/src/lib/component/dropdown/simple/gl-component-input-dropdown-simple.model';
// endregion

// region option
export { GlComponentInputOptionSimpleComponent } from './gl-ng-inputs-frontend/src/lib/component/option/simple/gl-component-input-option-simple.component';
// endregion

// region switch
export { GlComponentInputSwitchComponent } from './gl-ng-inputs-frontend/src/lib/component/switch/gl-component-input-switch.component';
// endregion

// region text
export { GlComponentInputTextLabelButtonContainerComponent } from './gl-ng-inputs-frontend/src/lib/component/text/label/button/container/gl-component-input-text-label-button-container.component';
export { GlComponentInputTextLabelSimpleComponent } from './gl-ng-inputs-frontend/src/lib/component/text/label/simple/gl-component-input-text-label-simple.component';
export { GlComponentInputTextSimpleComponent } from './gl-ng-inputs-frontend/src/lib/component/text/simple/gl-component-input-text-simple.component';
export { GlComponentInputTextSimpleWithStepComponent } from './gl-ng-inputs-frontend/src/lib/component/text/simple/with-step/gl-component-input-text-simple-with-step.component';
export { GlComponentInputTextSimpleService } from './gl-ng-inputs-frontend/src/lib/component/text/simple/gl-component-input-text-simple.service';

export { GlComponentInputTextSimpleSearchComponent } from './gl-ng-inputs-frontend/src/lib/component/text/simple/search/gl-component-input-text-simple-search.component';
export { ISearchOutput } from './gl-ng-inputs-frontend/src/lib/component/text/simple/search/gl-component-input-text-simple-search.interface';

export { IInputTextStepButton, TStepType } from './gl-ng-inputs-frontend/src/lib/component/text/simple/with-step/gl-component-input-text-simple-with-step.interface';
export { ISimpleTextResult, TInputTextTheme, TInputType, TInputTextMask } from './gl-ng-inputs-frontend/src/lib/component/text/simple/gl-component-input-text-simple.interface';
// endregion

// region text-area
export { GlComponentInputTextAreaSimpleComponent } from './gl-ng-inputs-frontend/src/lib/component/text-area/simple/gl-component-input-text-area-simple.component';
export { GlComponentInputTextAreaLabelComponent } from './gl-ng-inputs-frontend/src/lib/component/text-area/label/gl-component-input-text-area-label.component';
// endregion
