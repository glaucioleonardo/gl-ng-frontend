/*
 * Public API Surface of gl-ng-inputs-frontend
 */

export { ComponentModule as GlNgInputsComponentModule} from './gl-ng-inputs-frontend/src/lib/component/component.module';
export { CoreModule as GlNgInputsCoreModule} from './gl-ng-inputs-frontend/src/lib/core/core.module';
export { GlNgInputsFrontendModule } from './gl-ng-inputs-frontend/src/lib/gl-ng-inputs-frontend.module';

// region directives
import { CoreDirectivesDragAndDropDirective } from './gl-ng-inputs-frontend/src/lib/core/directives/drag-and-drop/core-directives-drag-and-drop.directive';
export { CoreDirectivesDragAndDropDirective };
// endregion

// region interfaces
import * as GLInputsInterfaces from './gl-ng-inputs-frontend/src/lib/core/interfaces/alignments.interface';
export { GLInputsInterfaces };
// endregion

// region autocomplete
import { GlComponentInputAutocompleteSimpleComponent } from './gl-ng-inputs-frontend/src/lib/component/autocomplete/simple/gl-component-input-autocomplete-simple.component';
import { GlComponentInputAutocompleteSimpleService } from './gl-ng-inputs-frontend/src/lib/component/autocomplete/simple/gl-component-input-autocomplete-simple.service';
import { GlComponentInputAutocompleteLabelComponent } from './gl-ng-inputs-frontend/src/lib/component/autocomplete/label/gl-component-input-autocomplete-label.component';
import * as GlComponentInputAutocompleteSimpleInterface from './gl-ng-inputs-frontend/src/lib/component/autocomplete/simple/gl-component-input-autocomplete-simple.interface';

export {
  GlComponentInputAutocompleteSimpleComponent, GlComponentInputAutocompleteSimpleService, GlComponentInputAutocompleteSimpleInterface,
  GlComponentInputAutocompleteLabelComponent
};
// endregion

// region button
import { GlComponentInputButtonHyperlinkComponent } from './gl-ng-inputs-frontend/src/lib/component/button/hyperlink/gl-component-input-button-hyperlink.component';
import { GlComponentInputButtonSimpleComponent } from './gl-ng-inputs-frontend/src/lib/component/button/simple/gl-component-input-button-simple.component';
import * as GlComponentInputButtonSimpleInterface from './gl-ng-inputs-frontend/src/lib/component/button/simple/gl-component-input-button-simple.interface';

export { GlComponentInputButtonHyperlinkComponent, GlComponentInputButtonSimpleInterface, GlComponentInputButtonSimpleComponent };
// endregion

// region check-box
import { GlComponentInputCheckBoxLabelComponent } from './gl-ng-inputs-frontend/src/lib/component/check-box/label/gl-component-input-check-box-label.component';
import { GlComponentInputCheckBoxSimpleComponent } from './gl-ng-inputs-frontend/src/lib/component/check-box/simple/gl-component-input-check-box-simple.component';

export { GlComponentInputCheckBoxSimpleComponent, GlComponentInputCheckBoxLabelComponent };
// endregion

// region datepicker
import { GlComponentInputDatepickerSimpleMonthYearComponent } from './gl-ng-inputs-frontend/src/lib/component/datepicker/simple/month-year/gl-component-input-datepicker-simple-month-year.component';
import { GlComponentInputDatepickerSimpleDayMonthYearComponent } from './gl-ng-inputs-frontend/src/lib/component/datepicker/simple/day-month-year/gl-component-input-datepicker-simple-day-month-year.component';
import { GlComponentInputDatepickerLabelComponent } from './gl-ng-inputs-frontend/src/lib/component/datepicker/label/gl-component-input-datepicker-label.component';
import * as GlComponentInputDatepickerSimpleDayMonthYearInterface from './gl-ng-inputs-frontend/src/lib/component/datepicker/simple/day-month-year/gl-component-input-datepicker-simple-day-month-year.interface';
import * as GlComponentInputDatepickerSimpleMonthYearInterface from './gl-ng-inputs-frontend/src/lib/component/datepicker/simple/month-year/gl-component-input-datepicker-simple-month-year.interface';

export {
  GlComponentInputDatepickerSimpleMonthYearComponent, GlComponentInputDatepickerSimpleMonthYearInterface,
  GlComponentInputDatepickerSimpleDayMonthYearComponent, GlComponentInputDatepickerSimpleDayMonthYearInterface,
  GlComponentInputDatepickerLabelComponent
};
// endregion

// region drag and drop
import { GlComponentInputDragAndDropSimpleComponent } from './gl-ng-inputs-frontend/src/lib/component/drag-and-drop/simple/gl-component-input-drag-and-drop-simple.component';
import * as GlComponentInputDragAndDropSimpleInterface from './gl-ng-inputs-frontend/src/lib/component/drag-and-drop/simple/gl-component-input-drag-and-drop-simple.interface';
export { GlComponentInputDragAndDropSimpleComponent, GlComponentInputDragAndDropSimpleInterface };
// endregion

// region option
import { GlComponentInputOptionSimpleComponent } from './gl-ng-inputs-frontend/src/lib/component/option/simple/gl-component-input-option-simple.component';
export { GlComponentInputOptionSimpleComponent };
// endregion

// region switch
import { GlComponentInputSwitchComponent } from './gl-ng-inputs-frontend/src/lib/component/switch/gl-component-input-switch.component';
export { GlComponentInputSwitchComponent };
// endregion

// region text
import { GlComponentInputTextLabelButtonContainerComponent } from './gl-ng-inputs-frontend/src/lib/component/text/label/button/container/gl-component-input-text-label-button-container.component';
import { GlComponentInputTextLabelSimpleComponent } from './gl-ng-inputs-frontend/src/lib/component/text/label/simple/gl-component-input-text-label-simple.component';
import { GlComponentInputTextSimpleComponent } from './gl-ng-inputs-frontend/src/lib/component/text/simple/gl-component-input-text-simple.component';
import { GlComponentInputTextSimpleWithStepComponent } from './gl-ng-inputs-frontend/src/lib/component/text/simple/with-step/gl-component-input-text-simple-with-step.component';
import * as GlComponentInputTextSimpleWithStepInterface from './gl-ng-inputs-frontend/src/lib/component/text/simple/with-step/gl-component-input-text-simple-with-step.interface';
import { GlComponentInputTextSimpleService } from './gl-ng-inputs-frontend/src/lib/component/text/simple/gl-component-input-text-simple.service';
import * as GlComponentInputTextSimpleInterface from './gl-ng-inputs-frontend/src/lib/component/text/simple/gl-component-input-text-simple.interface';

export {
  GlComponentInputTextLabelButtonContainerComponent, GlComponentInputTextLabelSimpleComponent,
  GlComponentInputTextSimpleComponent, GlComponentInputTextSimpleService, GlComponentInputTextSimpleInterface,
  GlComponentInputTextSimpleWithStepComponent, GlComponentInputTextSimpleWithStepInterface
};
// endregion

// region text-area
import { GlComponentInputTextAreaSimpleComponent } from './gl-ng-inputs-frontend/src/lib/component/text-area/simple/gl-component-input-text-area-simple.component';
import { GlComponentInputTextAreaLabelComponent } from './gl-ng-inputs-frontend/src/lib/component/text-area/label/gl-component-input-text-area-label.component';

export { GlComponentInputTextAreaSimpleComponent, GlComponentInputTextAreaLabelComponent };
// endregion

