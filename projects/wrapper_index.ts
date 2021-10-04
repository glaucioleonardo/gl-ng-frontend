/*
 * Public API Surface of gl-ng-frontend
 */

export {
  TAttachmentItemType,
  IImageString,
  IImageUpdate,
  GlNgAttachmentsComponentModule,
  GlComponentAttachmentImagePreviewComponent,
  GlComponentAttachmentImagePreviewService,
  GlComponentAttachmentItemComponent,
  GlNgAttachmentsCoreModule,
  GlNgAttachmentsFrontendModule
} from './wrapper_attachments';

export {
  GlNgButtonsComponentModule,
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
  GlNgButtonsFrontendModule,
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
  GlNgFooterComponentModule,
  GlComponentFooterContainerComponent,
  GlComponentFooterSimpleComponent,
  GlNgFooterFrontendModule
} from './wrapper_footer';

export {
  GlNgHeadersComponentModule,
  GlComponentHeaderDefaultComponent,
  GlNgHeadersFrontendModule,
  THeaderTheme
} from './wrapper_headers';

export {
  GlNgInputsComponentModule,
  GlNgInputsCoreModule,
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
  GlNgListsComponentModule,
  TListReorder,
  IListRemoveItem,
  GlComponentInputListItemRemoveComponent,
  GlComponentInputListItemUpDownComponent,
  GlNgListsFrontendModule,
  IMoveDownResult
} from './wrapper_lists';

export {
  GlNgLogosComponentModule,
  TLogoVerticalPosition,
  TLogoHorizontalPosition,
  GlComponentLogoTextOnlyComponent,
  GlComponentLogoSquareComponent,
  GlNgLogosFrontendModule
} from './wrapper_logos';

export {
  GlNgMenusComponentModule,
  GlComponentMenuService,
  IMenuItem,
  TMenuItemTheme,
  TMenuPosition,
  IMenuItemComplex,
  GlComponentMenuBackgroundComponent,
  GlComponentMenuComponent,
  GlComponentMenuItemComponent,
  GlNgMenusFrontendModule,
  TUrlTarget,
  IModalItemAction,
  GlComponentModalActionsService,
  GlComponentModalActionsItemComponent,
  GlComponentModalActionsComponent
} from './wrapper_menus';

export {
  GlNgModalsComponentModule,
  GlComponentModalUploadFileService,
  GlNgModalsCoreModule,
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
  GlNgNavigationComponentModule,
  GlComponentNavigationTabSimpleComponent,
  GlComponentNavigationTabContainerComponent,
  GlNgNavigationFrontendModule,
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
  GlNgTitlesFrontendModule
} from './wrapper_titles';

export { ComponentModule } from './gl-ng-frontend/src/lib/component/component.module';
export { GlNgFrontendModule } from './gl-ng-frontend/src/lib/gl-ng-frontend.module';

// region interfaces
export { TTheme } from './gl-ng-frontend/src/lib/interfaces/global.interface';
// endregion

