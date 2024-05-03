/*
 * Public API Surface of gl-ng-frontend
 */

export {
  TAttachmentItemType,
  IImageString,
  IImageUpdate,
  GlComponentAttachmentImagePreviewComponent,
  GlComponentAttachmentImagePreviewService,
  GlComponentAttachmentItemComponent,
} from './wrapper_attachments';

export {
  TButtonToolTipWidth,
  TButtonToolTipVerticalPosition,
  TButtonToolTipHorizontalPosition,
  TButtonToolTipBorder,
  IImageButtonTooltip,
  IButtonImageSimple,
  GlComponentButtonAttachmentFileComponent,
  GlComponentButtonAttachmentFileService,
  GlComponentButtonAttachmentLinkComponent,
  GlComponentButtonImageSimpleComponent,
  GlComponentButtonImageTooltipComponent,
  GlComponentButtonInterfaceComponent,
  GlComponentButtonMenuSimpleComponent,
  GlComponentButtonMenuTooltipComponent,
  IMenuButton
} from './wrapper_buttons';

export {
  GlNgErrorMessageComponentModule,
  TErrorMessagePosition,
  GlComponentErrorMessageComponent,
  GlNgErrorMessageFrontendModule,
  GlNgErrorMessageViewModule,
  GlViewErrorMessageComponent
} from './wrapper_error_message';

export {
  GlNgFiltersComponentModule,
  GlComponentFilterComponent,
  GlComponentFilterContainerComponent,
  GlComponentFilterService,
  GlNgFiltersFrontendModule
} from './wrapper_filters';

export {
  GlComponentFooterContainerComponent,
  GlComponentFooterSimpleComponent,
} from './wrapper_footer';

export {
  GlComponentHeaderDefaultComponent,
  THeaderTheme
} from './wrapper_headers';

export {
  GlNgInputsComponentModule,
  THorizontalAlignment,
  TInputType,
  ISimpleTextResult,
  TInputTextTheme,
  IInputTextStepButton,
  TStepType,
  IDropdownSettings,
  DROPDOWN_CONTROL_VALUE_ACCESSOR,
  TAttachmentUploadResult,
  IDragAndDropVariables,
  IDragAndDropAddedResult,
  IDatePickerMonthYearOutput,
  IDatePickerOutput,
  TInputButtonType,
  TInputButtonSimpleClass,
  ISearchOutput,
  IUpdateOptionList,
  ISetAutocompleteValue,
  IResetAutocompleteValue,
  CoreDirectivesClickOutsideDirective,
  CoreDirectivesDragAndDropDirective,
  CorePipesListFilterPipe,
  DropDownListItem,
  GlComponentInputAutocompleteLabelComponent,
  GlComponentInputAutocompleteSimpleComponent,
  GlComponentInputAutocompleteSimpleService,
  GlComponentInputButtonHyperlinkComponent,
  GlComponentInputButtonSimpleComponent,
  GlComponentInputCheckBoxLabelComponent,
  GlComponentInputCheckBoxSimpleComponent,
  GlComponentInputDatepickerLabelComponent,
  GlComponentInputDatepickerSimpleDayMonthYearComponent,
  GlComponentInputDatepickerSimpleMonthYearComponent,
  GlComponentInputDragAndDropSimpleComponent,
  GlComponentInputDropdownLabelComponent,
  GlComponentInputDropdownSimpleComponent,
  GlComponentInputOptionSimpleComponent,
  GlComponentInputSwitchComponent,
  GlComponentInputTextAreaLabelComponent,
  GlComponentInputTextAreaSimpleComponent,
  GlComponentInputTextLabelButtonContainerComponent,
  GlComponentInputTextLabelSimpleComponent,
  GlComponentInputTextSimpleComponent,
  GlComponentInputTextSimpleSearchComponent,
  GlComponentInputTextSimpleService,
  GlComponentInputTextSimpleWithStepComponent,
  GlNgInputsFrontendModule,
  TInputTextMask,
  ISimpleTextAreaResult
} from './wrapper_inputs';

export {
  TListReorder,
  IListRemoveItem,
  GlComponentInputListItemRemoveComponent,
  GlComponentInputListItemUpDownComponent,
  IMoveDownResult
} from './wrapper_lists';

export {
  TLogoVerticalPosition,
  TLogoHorizontalPosition,
  GlComponentLogoTextOnlyComponent,
  GlComponentLogoSquareComponent,
} from './wrapper_logos';

export {
  GlComponentMenuService,
  IMenuItem,
  TMenuItemTheme,
  TMenuPosition,
  IMenuItemComplex,
  GlComponentMenuBackgroundComponent,
  GlComponentMenuComponent,
  GlComponentMenuItemComponent,
  TUrlTarget,
  IModalItemAction,
  GlComponentModalActionsService,
  GlComponentModalActionsItemComponent,
  GlComponentModalActionsComponent
} from './wrapper_menus';

export {
  GlNgModalsComponentModule,
  GlComponentModalUploadFileService,
  TModalUploadFunction,
  GlComponentModalLoadingService,
  GlComponentModalAlertService,
  GlComponentModalAttachmentLinkService,
  CoreDirectivesAutofocusDirective,
  GlComponentModalAlertComponent,
  GlComponentModalAttachmentLinkComponent,
  GlComponentModalHeaderComponent,
  GlComponentModalLoadingComponent,
  GlComponentModalUploadFileComponent,
  GlNgModalsFrontendModule,
  IAttachmentLink
} from './wrapper_modals';

export {
  GlComponentNavigationTabSimpleComponent,
  GlComponentNavigationTabContainerComponent,
  INavigationTab
} from './wrapper_navigation';

export {
  GlNgPagingComponentModule,
  TPagingType,
  TPagingThemeType,
  IPaging,
  GlComponentPagingComponent,
  GlNgPagingFrontendModule,
  IPageButtons,
  IItemsPerPage,
  IInitialFinalRange
} from './wrapper_paging';
export {
  GlComponentTitleLabelButtonContainerComponent,
  GlComponentTitleLabelButtonSimpleComponent,
  GlComponentTitleLabelSimpleComponent,
  GlComponentTitlePageComponent,
  TLabelTheme,
} from './wrapper_titles';

export { ComponentModule } from './gl-ng-frontend/src/lib/component/component.module';
export { GlNgFrontendModule } from './gl-ng-frontend/src/lib/gl-ng-frontend.module';

// region interfaces
export { TTheme } from './gl-ng-frontend/src/lib/interfaces/global.interface';
// endregion

