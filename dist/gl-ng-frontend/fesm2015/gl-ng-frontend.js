import { Directive, ElementRef, EventEmitter, HostBinding, Output, HostListener, NgModule, Component, Input, ɵɵdefineInjectable, Injectable, ɵɵinject, ViewChild } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { Router, RouterModule } from '@angular/router';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Overlay, OverlayModule } from '@angular/cdk/overlay';
import { Subject } from 'rxjs';
import { AttachmentParser, AttachmentValidate, StringConverter, AttachmentConvert, ImageResize, AttachmentIcon, InputMask, DateGet } from 'gl-w-frontend';
import { __awaiter } from 'tslib';
import { startWith, map } from 'rxjs/operators';
import { trigger, state, style, transition, animate } from '@angular/animations';
import * as SmoothScroll from 'smooth-scroll';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { MAT_DATE_LOCALE, DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';

class CoreDirectivesAutofocusDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
    ngOnInit() {
        this.elementRef.nativeElement.focus();
    }
}
CoreDirectivesAutofocusDirective.decorators = [
    { type: Directive, args: [{
                selector: '[glAutoFocus]'
            },] }
];
CoreDirectivesAutofocusDirective.ctorParameters = () => [
    { type: ElementRef }
];

class CoreDirectivesDragAndDropDirective {
    constructor() {
        this.fileDropped = new EventEmitter();
    }
    static isReadOnly(event) {
        return event.target.classList.contains('readonly');
    }
    onDragOver(event) {
        event.preventDefault();
        event.stopPropagation();
        const readonly = CoreDirectivesDragAndDropDirective.isReadOnly(event);
        if (!readonly) {
            this.fileOver = true;
            this.fileNotOver = false;
        }
        else {
            this.fileOver = false;
            this.fileNotOver = true;
        }
    }
    onDragLeader(event) {
        event.preventDefault();
        event.stopPropagation();
        const readonly = CoreDirectivesDragAndDropDirective.isReadOnly(event);
        if (!readonly) {
            this.fileOver = false;
            this.fileNotOver = true;
        }
        else {
            this.fileOver = false;
            this.fileNotOver = true;
        }
    }
    onDrop(event) {
        event.preventDefault();
        event.stopPropagation();
        const readonly = CoreDirectivesDragAndDropDirective.isReadOnly(event);
        if (!readonly) {
            this.fileOver = false;
            this.fileNotOver = true;
            const files = event.dataTransfer.files;
            if (files.length > 0) {
                // Do some stuff here
                this.fileDropped.emit(files);
                console.log(`You dropped ${files.length} files.`);
            }
        }
        else {
            this.fileOver = false;
            this.fileNotOver = true;
        }
    }
}
CoreDirectivesDragAndDropDirective.decorators = [
    { type: Directive, args: [{
                selector: '[glCoreDirectivesDragAndDrop]'
            },] }
];
CoreDirectivesDragAndDropDirective.propDecorators = {
    fileOver: [{ type: HostBinding, args: ['class.file-over',] }],
    fileNotOver: [{ type: HostBinding, args: ['class.file-not-over',] }],
    fileDropped: [{ type: Output }],
    onDragOver: [{ type: HostListener, args: ['dragover', ['$event'],] }],
    onDragLeader: [{ type: HostListener, args: ['dragleave', ['$event'],] }],
    onDrop: [{ type: HostListener, args: ['drop', ['$event'],] }]
};

class GlCoreModule {
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

class GlSharedComponentAttachmentItemComponent {
    constructor() {
        this.disabled = false;
        this.onItemClick = new EventEmitter();
        this.removeCurrentItem = new EventEmitter();
        this.editCurrentItem = new EventEmitter();
    }
    removeItem(id) { this.removeCurrentItem.emit({ id }); }
    editItem(id) { this.editCurrentItem.emit({ id }); }
    onButtonClick(e) {
        e.preventDefault();
        this.onItemClick.emit();
    }
}
GlSharedComponentAttachmentItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-attachment-item',
                template: "<div class=\"attachment-container {{ addingSmooth ? 'adding-row-animated' : '' }}\">\r\n  <img\r\n    class=\"attachment-icon\"\r\n    [src]=\"fileIcon\"\r\n    alt=\"\u00CDcone anexo\">\r\n  <a\r\n    (click)=\"onButtonClick($event)\"\r\n    [id]=\"id\"\r\n    [href]=\"attachmentUrl\"\r\n    class=\"file\"\r\n  >{{ fileName }}</a>\r\n  <img\r\n    *ngIf=\"!disabled && type === 'link'\"\r\n    (click)=\"editItem(id)\"\r\n    class=\"edit-item\"\r\n    src=\"../assets/img/icon/menu/attachment/edit.svg\"\r\n    alt=\"Editar anexo\"/>\r\n  <img\r\n    *ngIf=\"!disabled\"\r\n    (click)=\"removeItem(id)\"\r\n    class=\"remove-item\"\r\n    src=\"../assets/img/icon/menu/attachment/delete.svg\"\r\n    alt=\"Apagar anexo\"/>\r\n</div>\r\n",
                styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900\");:host::ng-deep .attachment-container{align-items:center;border-radius:.5em;cursor:pointer;display:flex;margin:.2em 0;padding:.4em .3em}:host::ng-deep .attachment-container:not(hover){background-color:hsla(0,0%,100%,.3);transition:all .2s ease-in-out}:host::ng-deep .attachment-container:not(hover) .file{color:#333437}:host::ng-deep .attachment-container:hover{background:#fff;transition:all .2s ease-in-out}:host::ng-deep .attachment-container:hover .file{color:#fff;color:#333437}:host::ng-deep .attachment-container .attachment-icon{border-radius:.3em;height:2.15em;margin:0 .6em 0 .4em;padding:0;width:2.15em}:host::ng-deep .attachment-container .edit-item,:host::ng-deep .attachment-container .remove-item{height:2.15em;margin:0 0 0 .1em;padding:0;width:2.15em}:host::ng-deep .attachment-container .edit-item:not(hover),:host::ng-deep .attachment-container .remove-item:not(hover){opacity:.5;transition:all .2s ease-in-out}:host::ng-deep .attachment-container .edit-item:hover,:host::ng-deep .attachment-container .remove-item:hover{opacity:1;transition:all .2s ease-in-out}:host::ng-deep .attachment-container .edit-item{margin:0 .2em 0 0}:host::ng-deep .attachment-container .file{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;font-family:Montserrat,sans-serif;font-weight:400;overflow:hidden;padding:1em 0;text-overflow:ellipsis;user-select:none;white-space:nowrap;width:80%}"]
            },] }
];
GlSharedComponentAttachmentItemComponent.ctorParameters = () => [];
GlSharedComponentAttachmentItemComponent.propDecorators = {
    disabled: [{ type: Input }],
    attachmentUrl: [{ type: Input }],
    fileName: [{ type: Input }],
    fileIcon: [{ type: Input }],
    id: [{ type: Input }],
    type: [{ type: Input }],
    addingSmooth: [{ type: Input }],
    onItemClick: [{ type: Output, args: ['onClick',] }],
    removeCurrentItem: [{ type: Output }],
    editCurrentItem: [{ type: Output }]
};

class GlSharedComponentModalAlertService {
    constructor() {
        this.isOK = true;
        this.currentValue = new Subject();
    }
    show(message) {
        return this.modal(true, true, message);
    }
    showYesNo(message, customYes, customNo) {
        this.customYes = customYes;
        this.customNo = customNo;
        return this.modal(true, false, message);
    }
    hide() {
        this.modal(false, this.isOK, this.message);
    }
    onNo() {
        this.currentValue.next(false);
        this.resolvePromise(false);
        this.hide();
    }
    onYes() {
        this.currentValue.next(true);
        this.resolvePromise(true);
        this.hide();
    }
    onOk() {
        this.currentValue.next(true);
        this.resolvePromise(true);
        this.hide();
    }
    modal(show, isOK = true, message = '') {
        return new Promise(resolve => {
            this.resolvePromise = resolve;
            this.isOK = isOK;
            this.message = message;
            if (show) {
                this.modalClass = 'hide-modal';
                this.showModal = show;
                this.modalClass = 'show-modal';
            }
            else {
                this.modalClass = 'hide-modal';
                setTimeout(() => {
                    this.showModal = false;
                    this.message = '';
                    this.customYes = null;
                    this.customNo = null;
                }, 300);
            }
        });
    }
    onModalKeyUp(e) {
        if (e.key === 'Enter') {
            if (this.isOK) {
                this.onOk();
            }
            else {
                this.onYes();
            }
        }
        else if (e.key === 'Escape') {
            if (this.isOK) {
                this.onOk();
            }
            else {
                this.onNo();
            }
        }
    }
}
GlSharedComponentModalAlertService.ɵprov = ɵɵdefineInjectable({ factory: function GlSharedComponentModalAlertService_Factory() { return new GlSharedComponentModalAlertService(); }, token: GlSharedComponentModalAlertService, providedIn: "root" });
GlSharedComponentModalAlertService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
GlSharedComponentModalAlertService.ctorParameters = () => [];

class GlSharedComponentAttachmentImagePreviewService {
    constructor(_alert) {
        this._alert = _alert;
        this.image = '../assets/img/icon/image/image-template.svg';
        this.retrieveUpdate = new Subject();
        this.labelIcons = '../assets/img/icon/label/';
        this.buttons = [
            {
                src: `${this.labelIcons}image.svg`,
                id: 'add-image-from-label',
                alt: 'Add image',
                show: true, callback: () => {
                    this.addImage();
                }
            },
            {
                src: `${this.labelIcons}remove-image.svg`,
                id: 'clear-image-from-label',
                alt: 'Remove image',
                show: false,
                callback: () => {
                    this.removeImage();
                }
            },
        ];
        this.retrieveUpdate.subscribe((data) => {
            if (data.image != null && data.image.trim().length > 0) {
                this.setImage(data);
                this.updateButtons(true);
            }
            else {
                this.setImage({ image: '' });
                this.updateButtons(false);
            }
        });
    }
    initialize(input, userImage, currentValue, invalidSizeDescription, invalidFormatDescription, addImageButtonDescription, removeImageButtonDescription) {
        this._input = input;
        this._accepts = AttachmentParser.parseAcceptFiles(input.attributes.accept.value);
        this._userImage = userImage;
        this._currentValue = currentValue;
        setTimeout(() => {
            this.buttons[0].alt = addImageButtonDescription;
            this.buttons[1].alt = removeImageButtonDescription;
        }, 100);
        this._input.oninput = () => { this.onChange(invalidSizeDescription, invalidFormatDescription); };
        this.removeImage(true);
    }
    onChange(invalidSizeDescription, invalidFormatDescription) {
        const isValid = AttachmentValidate.file(this._input, this._accepts);
        const sizeValid = AttachmentValidate.fileSize(this._input);
        if (!sizeValid) {
            const maxSize = AttachmentValidate.maxSize(this._input);
            const maxSizeStr = StringConverter.formatNumber(maxSize);
            this._alert.show(`${invalidSizeDescription} ${maxSizeStr}KB`).then(() => { });
            return;
        }
        if (isValid) {
            AttachmentConvert.textFileToUrlImage(this._input.files[0]).then((image) => {
                this.setImage({ image });
                this._currentValue.emit({ value: image });
                this.updateButtons(true);
                this.clearInput();
            });
        }
        else {
            this.clearInput();
            this._alert.show(invalidFormatDescription).then(() => { });
        }
    }
    clearInput() {
        this._input.value = null;
    }
    updateButtons(hasValue) {
        this.buttons[0].show = !hasValue;
        this.buttons[1].show = hasValue;
    }
    setImage(data) {
        const img = data.resize ? ImageResize.base64(data) : data.image;
        this._userImage.style.backgroundImage = `url("${img}")`;
        this._userImage.classList.remove('required-fill');
    }
    addImage() {
        this._input.click();
    }
    removeImage(init) {
        this.clearInput();
        this.setImage({ image: this.image });
        if (!init) {
            this._currentValue.emit({ value: null });
            this.updateButtons(false);
        }
    }
}
GlSharedComponentAttachmentImagePreviewService.ɵprov = ɵɵdefineInjectable({ factory: function GlSharedComponentAttachmentImagePreviewService_Factory() { return new GlSharedComponentAttachmentImagePreviewService(ɵɵinject(GlSharedComponentModalAlertService)); }, token: GlSharedComponentAttachmentImagePreviewService, providedIn: "root" });
GlSharedComponentAttachmentImagePreviewService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
GlSharedComponentAttachmentImagePreviewService.ctorParameters = () => [
    { type: GlSharedComponentModalAlertService }
];

class GlSharedComponentAttachmentImagePreviewComponent {
    constructor(service) {
        this.service = service;
        this.disabled = false;
        this.required = false;
        this.type = '';
        this.showLabel = true;
        this.requiredFieldDescription = 'Required field';
        this.addImageDescription = 'Click to add an image';
        this.maxImageSize = '10240';
        this.invalidSizeDescription = 'Invalid file size. The max allowed size is';
        this.invalidFormatDescription = 'Invalid file format!';
        this.addImageButtonDescription = 'Add image';
        this.removeImageButtonDescription = 'Remove image';
        this.currentValue$ = new EventEmitter();
    }
    ngAfterViewInit() {
        this.service.initialize(this.fileInputImage.nativeElement, this.userImage.nativeElement, this.currentValue$, this.invalidSizeDescription, this.invalidFormatDescription, this.addImageButtonDescription, this.removeImageButtonDescription);
        this.updateImage();
    }
    updateImage() {
        if (this.currentImage != null && this.currentImage.length > 0) {
            this.service.setImage(this.currentImage);
        }
    }
}
GlSharedComponentAttachmentImagePreviewComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-attachment-image-preview',
                template: "<div class=\"item-container {{ type }}\">\r\n  <gl-shared-component-title-label-button-container\r\n    *ngIf=\"showLabel\"\r\n    labelValue=\"Image\"\r\n    labelAlignment=\"left\"\r\n    [class]=\"type\"\r\n    [requiredFieldDescription]=\"requiredFieldDescription\"\r\n    [required]=\"required\">\r\n    <ng-content select=\"top\"></ng-content>\r\n      <gl-shared-component-button-image-tooltip\r\n        *ngFor=\"let b of service.buttons\"\r\n        [src]=\"b.src\"\r\n        [alt]=\"b.alt\"\r\n        [id]=\"b.id\"\r\n        [show]=\"b.show && !disabled || b.id === 'expand-with-step-2'\"\r\n        [callback]=\"b.callback\"\r\n      ></gl-shared-component-button-image-tooltip>\r\n      <ng-content select=\"[slot=buttons]\"></ng-content>\r\n    <ng-content select=\"bottom\"></ng-content>\r\n  </gl-shared-component-title-label-button-container>\r\n\r\n  <div class=\"attachment-container-content\">\r\n    <input\r\n      #fileInputImage\r\n      id=\"file-input-image\"\r\n      name=\"file-input-image\"\r\n      type=\"file\"\r\n      class=\"input-image\"\r\n      accept=\"image/tif, image/tiff, image/x-png, image/jpeg, image/jpg, image/bmp, image/gif, image/svg+xml\"\r\n      maxlength=\"1\"\r\n      [attr.data-maxsize]=\"maxImageSize\"\r\n      [title]=\"addImageDescription\"\r\n    />\r\n  </div>\r\n  <div class=\"image-container\">\r\n    <div #userImage id=\"image\"></div>\r\n  </div>\r\n</div>\r\n",
                styles: [":host::ng-deep{display:flex;flex-grow:1}:host::ng-deep .item-container{background-color:#333437;display:flex;flex-direction:column;flex-grow:1}:host::ng-deep .item-container gl-shared-component-title-label-button-container{flex-grow:0;position:relative}:host::ng-deep .item-container gl-shared-component-title-label-button-container .label-with-button-container .label-button-container{margin:0 .8em 0 0}:host::ng-deep .item-container gl-shared-component-title-label-button-container .required-fill-dot{right:.2em}:host::ng-deep .item-container.light{background-color:transparent;border-right:.5px solid hsla(0,0%,100%,.1)}:host::ng-deep .item-container.dark{background-color:#161617}:host::ng-deep .item-container.dark label{background-color:#111112}:host::ng-deep .item-container .attachment-container-content .input-image{display:none}:host::ng-deep .item-container .image-container{align-content:center;display:flex;flex-grow:1;justify-content:center}:host::ng-deep .item-container .image-container #image{background-position-x:center;background-position-y:center;background-repeat:no-repeat;background-size:contain;border:0;content:\"\";flex-grow:1;min-height:30vh;min-width:100%}"]
            },] }
];
GlSharedComponentAttachmentImagePreviewComponent.ctorParameters = () => [
    { type: GlSharedComponentAttachmentImagePreviewService }
];
GlSharedComponentAttachmentImagePreviewComponent.propDecorators = {
    fileInputImage: [{ type: ViewChild, args: ['fileInputImage', { read: ElementRef, static: true },] }],
    userImage: [{ type: ViewChild, args: ['userImage', { read: ElementRef, static: true },] }],
    disabled: [{ type: Input }],
    currentImage: [{ type: Input }],
    required: [{ type: Input }],
    type: [{ type: Input }],
    showLabel: [{ type: Input }],
    requiredFieldDescription: [{ type: Input }],
    addImageDescription: [{ type: Input }],
    maxImageSize: [{ type: Input }],
    invalidSizeDescription: [{ type: Input }],
    invalidFormatDescription: [{ type: Input }],
    addImageButtonDescription: [{ type: Input }],
    removeImageButtonDescription: [{ type: Input }],
    currentValue$: [{ type: Output }]
};

class GlSharedComponentButtonAttachmentFileService {
    constructor(_alert) {
        this._alert = _alert;
    }
    initialize(input, currentValue, attachments, duplicatedDescription, invalidSizeDescription, invalidFormatDescription, attachmentIconSrc) {
        this._input = input;
        this._currentValue = currentValue;
        this._attachments = attachments;
        // Todo Block specif files
        const accept = input.attributes.accept.value;
        // tslint:disable-next-line:triple-equals
        this._accepts = accept == null || accept == 'undefined' || accept === '' ? ['*'] : AttachmentParser.parseAcceptFiles(input.attributes.accept.value);
        this._input.oninput = () => { this.onChange(duplicatedDescription, invalidSizeDescription, invalidFormatDescription, attachmentIconSrc); };
    }
    addAttachment() {
        this._input.click();
    }
    onChange(duplicatedDescription, invalidSizeDescription, invalidFormatDescription, attachmentIconSrc) {
        const isValid = AttachmentValidate.file(this._input, this._accepts);
        const sizeValid = AttachmentValidate.fileSize(this._input);
        const duplicated = AttachmentValidate.duplicated(this._input.files[0].name, this._attachments);
        if (duplicated) {
            this.clearInput();
            this._alert.show(duplicatedDescription).then(() => { });
            return;
        }
        else if (!sizeValid) {
            const maxSize = AttachmentValidate.maxSize(this._input);
            const maxSizeStr = StringConverter.formatNumber(maxSize);
            this.clearInput();
            this._alert.show(`${invalidSizeDescription}: ${maxSizeStr}KB`).then(() => { });
            return;
        }
        else if (!isValid) {
            this.clearInput();
            this._alert.show(invalidFormatDescription).then(() => { });
        }
        else {
            const file = {
                name: this._input.files[0].name,
                file: this._input.files[0],
                icon: AttachmentIcon.get(this._input.files[0].name, attachmentIconSrc),
                new: true,
                url: '',
                remove: false,
                id: this._attachments.length
            };
            this.clearInput();
            this._currentValue.emit(file);
        }
    }
    clearInput() {
        this._input.value = null;
    }
}
GlSharedComponentButtonAttachmentFileService.ɵprov = ɵɵdefineInjectable({ factory: function GlSharedComponentButtonAttachmentFileService_Factory() { return new GlSharedComponentButtonAttachmentFileService(ɵɵinject(GlSharedComponentModalAlertService)); }, token: GlSharedComponentButtonAttachmentFileService, providedIn: "root" });
GlSharedComponentButtonAttachmentFileService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
GlSharedComponentButtonAttachmentFileService.ctorParameters = () => [
    { type: GlSharedComponentModalAlertService }
];

class GlSharedComponentButtonAttachmentFileComponent {
    constructor(service) {
        this.service = service;
        /**
         * @param maxFileSize Size in KB.
         * @param attachmentIconSrc (Optional) In case the source is not informed, the default path will be the one in gl-w-frontend package.
         */
        this.maxFileSize = '46080';
        this.title = 'Click to add an attachment';
        this.icon = '../assets/img/icon/attachment/attachment.svg';
        this.description = 'Add attachment';
        this.attachments = [];
        this.duplicatedDescription = 'File duplicated. Please, add another file!';
        this.invalidSizeDescription = 'Invalid file size. The max allowed size is';
        this.invalidFormatDescription = 'Invalid file format!';
        this.currentValue$ = new EventEmitter();
    }
    ngAfterViewInit() {
        this.service.initialize(this.fileInput.nativeElement, this.currentValue$, this.attachments, this.duplicatedDescription, this.invalidSizeDescription, this.invalidFormatDescription, this.attachmentIconSrc);
    }
}
GlSharedComponentButtonAttachmentFileComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-button-attachment-file',
                template: "<div class=\"attachment-container\" (click)=\"service.addAttachment()\">\r\n  <input\r\n    #fileInput\r\n    id=\"file-input\"\r\n    name=\"file-input\"\r\n    type=\"file\"\r\n    class=\"file-input\"\r\n    [accept]=\"accept\"\r\n    [title]=\"title\"\r\n    [attr.data-maxsize]=\"maxFileSize\"/>\r\n  <img class=\"attachment-icon\" [src]=\"icon\" alt=\"Attachment Icon\">\r\n  <span class=\"attachment-file-button\">{{ description }}</span>\r\n</div>\r\n",
                styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900\");:host::ng-deep .attachment-container{align-items:center;border-radius:.5em;cursor:pointer;display:flex;margin:.2em 0;padding:.4em .3em;position:relative}:host::ng-deep .attachment-container:not(hover){background:rgba(63,64,68,.6);transition:all .2s ease-in-out}:host::ng-deep .attachment-container:hover{background:rgba(63,64,68,.9);transition:all .2s ease-in-out}:host::ng-deep .attachment-container .file-input{display:none;font-size:1em}:host::ng-deep .attachment-container .attachment-icon{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;height:2em;margin:.5em .8em .5em .2em;padding:0;user-select:none;width:2em}:host::ng-deep .attachment-container .file{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;color:#1e1e1e;font-size:.8em;overflow:hidden;padding:1em 0;text-overflow:ellipsis;user-select:none;white-space:nowrap;width:75%}:host::ng-deep .attachment-container .attachment-file-button{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;color:#fff;font-family:Montserrat,sans-serif;font-weight:400;user-select:none}"]
            },] }
];
GlSharedComponentButtonAttachmentFileComponent.ctorParameters = () => [
    { type: GlSharedComponentButtonAttachmentFileService }
];
GlSharedComponentButtonAttachmentFileComponent.propDecorators = {
    fileInput: [{ type: ViewChild, args: ['fileInput', { read: ElementRef, static: true },] }],
    maxFileSize: [{ type: Input }],
    accept: [{ type: Input }],
    title: [{ type: Input }],
    icon: [{ type: Input }],
    attachmentIconSrc: [{ type: Input }],
    description: [{ type: Input }],
    attachments: [{ type: Input }],
    duplicatedDescription: [{ type: Input }],
    invalidSizeDescription: [{ type: Input }],
    invalidFormatDescription: [{ type: Input }],
    currentValue$: [{ type: Output }]
};

class GlSharedComponentModalAttachmentLinkService {
    constructor(_alert) {
        this._alert = _alert;
        this.linkIcon = '../assets/img/icon/attachment/link.svg';
        this.showModal = false;
        this.currentValue = new Subject();
    }
    setup(name, url) {
        this.name = name;
        this.url = url;
    }
    onCancel() {
        this.modal(false);
    }
    onConfirm() {
        return __awaiter(this, void 0, void 0, function* () {
            if (yield this.validData()) {
                const values = {
                    name: this._name,
                    url: this._url,
                    icon: this.linkIcon,
                    editing: this.editing,
                    editId: this.editId
                };
                this.currentValue.next(values);
                this.modal(false);
            }
        });
    }
    onName(e) {
        this._name = e.currentTarget.value;
    }
    onUrl(e) {
        this._url = e.currentTarget.value;
    }
    validData() {
        return __awaiter(this, void 0, void 0, function* () {
            const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
            const tempUrl = this._url != null && !this._url.includes('http://') && !this._url.includes('https://') ? `http://${this._url}` : this._url;
            const validUrl = new RegExp(urlRegex).test(tempUrl);
            if (this._name == null || this._name.trim().length === 0) {
                yield this._alert.show('Por favor, informe o nome do arquivo!');
                return false;
            }
            else if (this._url == null || this._url.trim().length === 0) {
                yield this._alert.show('Por favor, informe o url do arquivo!');
                return false;
            }
            else if (!validUrl) {
                yield this._alert.show('Por favor, informe um url válido!');
            }
            else {
                this._url = tempUrl;
                return true;
            }
        });
    }
    modal(show) {
        this.editing = false;
        this.editId = null;
        if (show) {
            this.modalClass = 'hide-modal';
            this.showModal = true;
            this.modalClass = 'show-modal';
        }
        else {
            this.modalClass = 'hide-modal';
            setTimeout(() => {
                this.showModal = false;
            }, 300);
        }
    }
    edit(name, url, editId) {
        this.modal(true);
        this.editing = true;
        this.editId = editId;
        setTimeout(() => {
            this.name = document.querySelector('#attachment-link-name');
            this.url = document.querySelector('#attachment-link-value');
            this._name = name;
            this.name.value = name;
            this._url = url;
            this.url.value = url;
        }, 100);
    }
    onModalKeyUp(e) {
        if (e.key === 'Enter') {
            return this.onConfirm();
        }
        else if (e.key === 'Escape') {
            this.onCancel();
        }
    }
}
GlSharedComponentModalAttachmentLinkService.ɵprov = ɵɵdefineInjectable({ factory: function GlSharedComponentModalAttachmentLinkService_Factory() { return new GlSharedComponentModalAttachmentLinkService(ɵɵinject(GlSharedComponentModalAlertService)); }, token: GlSharedComponentModalAttachmentLinkService, providedIn: "root" });
GlSharedComponentModalAttachmentLinkService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
GlSharedComponentModalAttachmentLinkService.ctorParameters = () => [
    { type: GlSharedComponentModalAlertService }
];

class GlSharedComponentButtonAttachmentLinkComponent {
    constructor(service) {
        this.service = service;
    }
}
GlSharedComponentButtonAttachmentLinkComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-button-attachment-link',
                template: "<div\r\n  class=\"attachment-container dark link-container\"\r\n  (click)=\"service.modal(true)\">\r\n  <img\r\n    class=\"attachment-icon\"\r\n    src=\"../assets/img/icon/menu/attachment/link-white.svg\"\r\n    alt=\"Attachment Icon\">\r\n  <span\r\n    id=\"add-attachment-link\"\r\n    class=\"attachment-file-button\">Adicionar link</span>\r\n</div>\r\n",
                styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900\");:host::ng-deep .attachment-container{align-items:center;border-radius:.5em;cursor:pointer;display:flex;margin:.2em 0;padding:.4em .3em;position:relative}:host::ng-deep .attachment-container:not(hover){background:rgba(63,64,68,.6);transition:all .2s ease-in-out}:host::ng-deep .attachment-container:hover{background:rgba(63,64,68,.9);transition:all .2s ease-in-out}:host::ng-deep .attachment-container .attachment-icon{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;height:2em;margin:.8em .8em .8em .2em;padding:0;user-select:none;width:2em}:host::ng-deep .attachment-container .attachment-file-button{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;color:#fff;font-family:Montserrat,sans-serif;font-weight:400;user-select:none}"]
            },] }
];
GlSharedComponentButtonAttachmentLinkComponent.ctorParameters = () => [
    { type: GlSharedComponentModalAttachmentLinkService }
];

class GlSharedComponentButtonImageSimpleComponent {
    constructor() { }
}
GlSharedComponentButtonImageSimpleComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-button-image-simple',
                template: "<img\r\n  class=\"button\"\r\n  [id]=\"id\"\r\n  [src]=\"src\"\r\n  [alt]=\"alt\"\r\n  (click)=\"callback()\">\r\n",
                styles: [":host::ng-deep{align-items:center;display:flex}:host::ng-deep .button{height:1em;width:1em}:host::ng-deep .button:not(hover){opacity:.5;transition:all .2s ease-in-out}:host::ng-deep .button:hover{opacity:1;transition:all .2s ease-in-out}"]
            },] }
];
GlSharedComponentButtonImageSimpleComponent.ctorParameters = () => [];
GlSharedComponentButtonImageSimpleComponent.propDecorators = {
    id: [{ type: Input }],
    alt: [{ type: Input }],
    src: [{ type: Input }],
    callback: [{ type: Input }]
};

class GlSharedComponentButtonImageTooltipComponent {
    constructor() {
        this.show = true;
        this.verticalPosition = 'top';
        this.horizontalPosition = 'center';
        this.fullwidth = 'default';
        this.borderRadius = 'default';
    }
}
GlSharedComponentButtonImageTooltipComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-button-image-tooltip',
                template: "<div\r\n  *ngIf=\"show\"\r\n  [class.hidden]=\"!show\"\r\n  [id]=\"id\"\r\n  [attr.tooltip]=\"alt\"\r\n  class=\"tooltip {{ verticalPosition }} {{ horizontalPosition }} {{ fullwidth }} {{ borderRadius }}\">\r\n  <gl-shared-component-button-image-simple\r\n    [src]=\"src\"\r\n    [alt]=\"alt\"\r\n    [id]=\"id\"\r\n    [callback]=\"callback\"\r\n  ></gl-shared-component-button-image-simple>\r\n</div>\r\n",
                styles: [".tooltip-menu{display:flex;position:relative;z-index:100}.tooltip-menu:before{border-color:#fff transparent transparent;border-style:solid;border-width:.2em .2em 0;content:\"\";left:80%;position:absolute;transform:translateX(-137%) translateY(100%) rotate(180deg);z-index:100}.tooltip-menu:after{background:#fff;border:none;color:#64666c;content:attr(tooltip);font-size:.4em;font-weight:600;left:80%;line-height:1.5em;max-width:50em;padding:.5em 1em;pointer-events:none;position:absolute;text-align:left;transform:translateX(-57%) translateY(124%);white-space:nowrap;width:-webkit-max-content;width:-moz-max-content;width:max-content}.tooltip-menu:not(hover):before{bottom:-.3em;opacity:0;transition:all .1s ease-in-out}.tooltip-menu:not(hover):after{bottom:0;opacity:0;transition:all .1s ease-in-out}.tooltip-menu:hover:after,.tooltip-menu:hover:before{bottom:-.11em;opacity:1;transition:all .1s ease-in-out}@media (-ms-high-contrast:active),(-ms-high-contrast:none){.tooltip-menu{margin:0 0 0 .3em;width:1.5em}.tooltip-menu:before{transform:translateX(-150%) translateY(100%) rotate(180deg)}.tooltip-menu:after{font-size:11.5px;transform:translateX(-55%) translateY(124%)}}.tooltip.top{position:relative;z-index:1000}.tooltip.top:before{border-color:#fff transparent transparent;border-style:solid;border-width:.2em .2em 0;content:\"\";left:82%;position:absolute;transform:translateX(-200%) translateY(90%);z-index:100}.tooltip.top:after{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;background:#fff;border:none;color:#64666c;content:attr(tooltip);font-size:.4em;font-weight:300;height:1.5em;left:0;line-height:1.5em;max-width:50em;padding:.5em 1em;pointer-events:none;position:absolute;text-align:center;user-select:none;white-space:nowrap;width:-webkit-max-content;width:-moz-max-content;width:max-content}.tooltip.top:hover:before,.tooltip.top:not(hover):before{left:93%;top:-.5em}.tooltip.top:hover:after,.tooltip.top:not(hover):after{left:0;top:-3.1em}.tooltip.top:not(hover):after,.tooltip.top:not(hover):before{opacity:0;transition:all .1s ease-in-out}.tooltip.top:hover:after,.tooltip.top:hover:before{opacity:1;transition:all .1s ease-in-out}.tooltip.top.center{position:relative;z-index:1000}.tooltip.top.center:before{border-color:#fff transparent transparent;border-style:solid;border-width:.2em .2em 0;content:\"\";left:82%;left:45%!important;position:absolute;transform:translateX(0) translateY(90%);z-index:100}.tooltip.top.center:after{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;background:#fff;border:none;color:#64666c;content:attr(tooltip);font-size:.4em;font-weight:300;height:1.5em;line-height:1.5em;max-width:50em;padding:.5em 1em;pointer-events:none;position:absolute;text-align:center;transform:translateX(-.5em);user-select:none;white-space:nowrap;width:-webkit-max-content;width:-moz-max-content;width:max-content}.tooltip.top.center:not(hover):after,.tooltip.top.center:not(hover):before{opacity:0;transition:all .1s ease-in-out}.tooltip.top.center:hover:after,.tooltip.top.center:hover:before{opacity:1;transition:all .1s ease-in-out}.tooltip.top.status-table{position:relative;z-index:1000}.tooltip.top.status-table:before{border-color:#fff transparent transparent;border-style:solid;border-width:.6em .6em 0;content:\"\";left:82%;position:absolute;transform:translateX(-237%) translateY(-15%);z-index:100}.tooltip.top.status-table:after{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;background:#fff;border:none;color:#64666c;content:attr(tooltip);font-size:.4em;font-size:.9em;font-weight:300;height:1.5em;left:0;line-height:1.5em;max-width:50em;padding:.5em 1em;pointer-events:none;position:absolute;text-align:center;user-select:none;white-space:nowrap;width:-webkit-max-content;width:-moz-max-content;width:max-content}@media (-ms-high-contrast:active),(-ms-high-contrast:none){.tooltip.top.status-table:after{font-size:2em;left:.9em}}.tooltip.top.status-table:not(hover):after,.tooltip.top.status-table:not(hover):before{opacity:0;transition:all .1s ease-in-out}.tooltip.top.status-table:hover:after,.tooltip.top.status-table:hover:before{opacity:1;transition:all .1s ease-in-out}.tooltip.bottom{position:relative;z-index:1000}.tooltip.bottom:before{border-color:#fff transparent transparent;border-style:solid;border-width:.2em .2em 0;content:\"\";left:82%;left:107%;position:absolute;transform:translateX(-137%) translateY(100%) rotate(180deg);z-index:100}.tooltip.bottom:after{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;background:#fff;border:none;color:#64666c;content:attr(tooltip);font-size:.4em;font-weight:300;height:1.5em;line-height:1.5em;max-width:50em;padding:.5em 1em;pointer-events:none;position:absolute;text-align:center;user-select:none;white-space:nowrap;width:-webkit-max-content;width:-moz-max-content;width:max-content}.tooltip.bottom:hover:before,.tooltip.bottom:not(hover):before{bottom:.1em}.tooltip.bottom:hover:after,.tooltip.bottom:not(hover):after{bottom:-2.7em;left:0}.tooltip.bottom:not(hover):after,.tooltip.bottom:not(hover):before{opacity:0;transition:all .1s ease-in-out}.tooltip.bottom:hover:after,.tooltip.bottom:hover:before{opacity:1;transition:all .1s ease-in-out}.tooltip.bottom-right{position:relative;z-index:1000}.tooltip.bottom-right:before{border-color:#fff transparent transparent;border-style:solid;border-width:.2em .2em 0;content:\"\";left:82%;position:absolute;transform:translateX(-137%) translateY(100%) rotate(180deg);z-index:100}.tooltip.bottom-right:after{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;background:#fff;border:none;color:#64666c;content:attr(tooltip);font-size:.4em;font-weight:300;height:1.5em;line-height:1.5em;max-width:50em;padding:.5em 1em;pointer-events:none;position:absolute;text-align:center;user-select:none;white-space:nowrap;width:-webkit-max-content;width:-moz-max-content;width:max-content}.tooltip.bottom-right:hover:before,.tooltip.bottom-right:not(hover):before{left:94%}.tooltip.bottom-right:hover:after,.tooltip.bottom-right:not(hover):after{bottom:-2.7em;left:-200%}.tooltip.bottom-right:not(hover):after,.tooltip.bottom-right:not(hover):before{opacity:0;transition:all .1s ease-in-out}.tooltip.bottom-right:hover:after,.tooltip.bottom-right:hover:before{opacity:1;transition:all .1s ease-in-out}.tooltip.bottom-gantt{position:relative;z-index:1000}.tooltip.bottom-gantt:before{border-color:#fff transparent transparent;border-style:solid;border-width:.2em .2em 0;content:\"\";left:82%;position:absolute;transform:translateX(-137%) translateY(100%) rotate(180deg);z-index:100}.tooltip.bottom-gantt:after{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;background:#fff;border:none;color:#64666c;content:attr(tooltip);font-size:.4em;font-weight:300;height:1.5em;line-height:1.5em;max-width:50em;padding:.5em 1em;pointer-events:none;position:absolute;text-align:center;user-select:none;white-space:nowrap;width:-webkit-max-content;width:-moz-max-content;width:max-content}@media (-ms-high-contrast:active),(-ms-high-contrast:none){.tooltip.bottom-gantt:after{font-size:11.5px}}.tooltip.bottom-gantt:hover:before,.tooltip.bottom-gantt:not(hover):before{bottom:-.1em;left:83%}.tooltip.bottom-gantt:hover:after,.tooltip.bottom-gantt:not(hover):after{bottom:-3.1em;left:0}.tooltip.bottom-gantt:not(hover):after,.tooltip.bottom-gantt:not(hover):before{opacity:0;transition:all .1s ease-in-out}.tooltip.bottom-gantt:hover:after,.tooltip.bottom-gantt:hover:before{opacity:1;transition:all .1s ease-in-out}.tooltip.bottom-menu{position:relative;z-index:1000}.tooltip.bottom-menu:before{border-color:#fff transparent transparent;border-style:solid;border-width:.2em .2em 0;content:\"\";left:82%;position:absolute;transform:translateX(-137%) translateY(100%) rotate(180deg);z-index:100}.tooltip.bottom-menu:after{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;background:#fff;border:none;color:#64666c;content:attr(tooltip);font-size:.4em;font-weight:300;height:1.5em;line-height:1.5em;max-width:50em;padding:.5em 1em;pointer-events:none;position:absolute;text-align:center;user-select:none;white-space:nowrap;width:-webkit-max-content;width:-moz-max-content;width:max-content}.tooltip.bottom-menu:hover:before,.tooltip.bottom-menu:not(hover):before{bottom:-.1em;left:74%}.tooltip.bottom-menu:hover:after,.tooltip.bottom-menu:not(hover):after{bottom:-3.1em;left:-64%}.tooltip.bottom-menu:not(hover):after,.tooltip.bottom-menu:not(hover):before{opacity:0;transition:all .1s ease-in-out}.tooltip.bottom-menu:hover:after,.tooltip.bottom-menu:hover:before{opacity:1;transition:all .1s ease-in-out}:host::ng-deep{justify-content:center;margin:0}:host::ng-deep,:host::ng-deep .tooltip{align-items:center;display:flex}:host::ng-deep .tooltip.fullwidth:after{min-width:90%}:host::ng-deep .tooltip.fullwidth.rounded:after{border-radius:.5em}:host::ng-deep .tooltip.top:before{left:108%!important}:host::ng-deep .tooltip.top.right:after{transform:translateX(-75%)}"]
            },] }
];
GlSharedComponentButtonImageTooltipComponent.ctorParameters = () => [];
GlSharedComponentButtonImageTooltipComponent.propDecorators = {
    id: [{ type: Input }],
    alt: [{ type: Input }],
    src: [{ type: Input }],
    show: [{ type: Input }],
    callback: [{ type: Input }],
    verticalPosition: [{ type: Input }],
    horizontalPosition: [{ type: Input }],
    fullwidth: [{ type: Input }],
    borderRadius: [{ type: Input }]
};

class GlSharedComponentButtonInterfaceComponent {
    constructor() { }
    ngOnInit() {
    }
}
GlSharedComponentButtonInterfaceComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-button-interface',
                template: "<div\r\n  class=\"attachment-container dark link-container\"\r\n  (click)=\"buttonClick()\">\r\n  <img\r\n    class=\"attachment-icon\"\r\n    [src]=\"imageSrc\"\r\n    [alt]=\"imageAlt\">\r\n  <span\r\n    [id]=\"id\"\r\n    class=\"attachment-file-button\">{{ innerHtml }}</span>\r\n</div>\r\n",
                styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900\");:host::ng-deep .attachment-container{align-items:center;border-radius:.5em;cursor:pointer;display:flex;margin:.2em 0;padding:.4em .3em;position:relative}:host::ng-deep .attachment-container:not(hover){background:rgba(63,64,68,.6);transition:all .2s ease-in-out}:host::ng-deep .attachment-container:hover{background:rgba(63,64,68,.9);transition:all .2s ease-in-out}:host::ng-deep .attachment-container .attachment-icon{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;height:2em;margin:.8em .8em .8em .2em;padding:0;user-select:none;width:2em}:host::ng-deep .attachment-container .attachment-file-button{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;color:#fff;font-family:Montserrat,sans-serif;font-weight:400;user-select:none}"]
            },] }
];
GlSharedComponentButtonInterfaceComponent.ctorParameters = () => [];
GlSharedComponentButtonInterfaceComponent.propDecorators = {
    innerHtml: [{ type: Input }],
    buttonClick: [{ type: Input }],
    imageSrc: [{ type: Input }],
    imageAlt: [{ type: Input }],
    id: [{ type: Input }]
};

class GlSharedComponentButtonMenuSimpleComponent {
    constructor() {
        this.disabled = false;
        this.hide = false;
    }
}
GlSharedComponentButtonMenuSimpleComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-button-menu-simple',
                template: "<img *ngIf=\"!hide\"\r\n  [id]=\"id\"\r\n  class=\"menu-buttons\"\r\n  [src]=\"src\"\r\n  [alt]=\"alt\"\r\n  (click)=\"callback\">\r\n",
                styles: [":host{height:1.45em}:host .menu-buttons{cursor:pointer;height:1.5em;margin:0 0 0 .11em;width:1.5em}:host .menu-buttons:hover{opacity:1;transition:all .1s ease-in-out}:host .menu-buttons:not(hover){opacity:.9;transition:all .2s ease-in-out}"]
            },] }
];
GlSharedComponentButtonMenuSimpleComponent.ctorParameters = () => [];
GlSharedComponentButtonMenuSimpleComponent.propDecorators = {
    disabled: [{ type: Input }],
    hide: [{ type: Input }],
    src: [{ type: Input }],
    id: [{ type: Input }],
    alt: [{ type: Input }],
    callback: [{ type: Input }]
};

class GlSharedComponentButtonMenuTooltipComponent {
    constructor() {
        this.disabled = false;
        this.hide = false;
    }
}
GlSharedComponentButtonMenuTooltipComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-button-menu-tooltip',
                template: "<div [attr.alt]=\"alt\" class=\"tooltip-menu\" *ngIf=\"!disabled && !hide\">\r\n  <gl-shared-component-button-menu-simple\r\n    [src]=\"src\"\r\n    [id]=\"id\"\r\n    [alt]=\"alt\"\r\n    [hide]=\"hide\"\r\n    (click)=\"callback($event)\"\r\n  ></gl-shared-component-button-menu-simple>\r\n</div>\r\n",
                styles: [".tooltip-menu{display:flex;position:relative;z-index:100}.tooltip-menu:before{border-color:#fff transparent transparent;border-style:solid;border-width:.2em .2em 0;content:\"\";left:80%;position:absolute;transform:translateX(-137%) translateY(100%) rotate(180deg);z-index:100}.tooltip-menu:after{background:#fff;border:none;color:#64666c;content:attr(alt);font-size:.4em;font-weight:600;left:50%;line-height:1.5em;max-width:50em;padding:.5em 1em;pointer-events:none;position:absolute;text-align:left;transform:translateX(-85%) translateY(124%);white-space:nowrap;width:-webkit-max-content;width:-moz-max-content;width:max-content}.tooltip-menu:not(hover):before{bottom:-.3em;opacity:0;transition:all .1s ease-in-out}.tooltip-menu:not(hover):after{bottom:0;opacity:0;transition:all .1s ease-in-out}.tooltip-menu:hover:after,.tooltip-menu:hover:before{bottom:-.11em;opacity:1;transition:all .1s ease-in-out}@media (-ms-high-contrast:none),screen and (-ms-high-contrast:active){:host::ng-deep{display:block}}"]
            },] }
];
GlSharedComponentButtonMenuTooltipComponent.ctorParameters = () => [];
GlSharedComponentButtonMenuTooltipComponent.propDecorators = {
    disabled: [{ type: Input }],
    hide: [{ type: Input }],
    tooltip: [{ type: Input }],
    src: [{ type: Input }],
    id: [{ type: Input }],
    alt: [{ type: Input }],
    callback: [{ type: Input }]
};

class GlSharedComponentErrorMessageComponent {
    constructor() {
        this.position = 'left';
        this.buttonAction$ = new EventEmitter();
    }
    buttonAction() {
        this.buttonAction$.emit();
    }
}
GlSharedComponentErrorMessageComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-error-message',
                template: "<div class=\"content-container {{ position === 'right' ? 'right' : 'left' }}\">\r\n  <h1 class=\"main-title\">{{ errorCode }}</h1>\r\n  <h2 class=\"message\">{{ errorMessage }}</h2>\r\n  <gl-shared-component-input-button-simple\r\n    class=\"home-button\"\r\n    [innerValue]=\"buttonLabel\"\r\n    (click)=\"buttonAction()\"\r\n  ></gl-shared-component-input-button-simple>\r\n</div>\r\n",
                styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900\");:host::ng-deep{display:flex;flex-grow:1}:host::ng-deep .content-container{align-content:center;align-items:center;display:flex;flex-direction:column;justify-content:center;position:absolute;text-align:center;top:25%}:host::ng-deep .content-container.right{right:10vw}:host::ng-deep .content-container.left{left:10vw}:host::ng-deep .content-container .main-title{font-size:11em;font-weight:800}:host::ng-deep .content-container .main-title,:host::ng-deep .content-container .message{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;color:hsla(0,0%,100%,.3);font-family:Montserrat,sans-serif;user-select:none}:host::ng-deep .content-container .message{font-size:1.5em;font-weight:100}:host::ng-deep .content-container gl-shared-component-input-button-simple{align-items:center;display:block;flex-direction:column;margin:3em 0}:host::ng-deep .content-container gl-shared-component-input-button-simple .default-button{background-color:rgba(0,0,0,.4);border-radius:10em;color:#fff;display:block;font-family:Montserrat,sans-serif;font-weight:300;padding:1.5em 4em}"]
            },] }
];
GlSharedComponentErrorMessageComponent.ctorParameters = () => [];
GlSharedComponentErrorMessageComponent.propDecorators = {
    position: [{ type: Input }],
    errorCode: [{ type: Input }],
    errorMessage: [{ type: Input }],
    buttonLabel: [{ type: Input }],
    buttonAction$: [{ type: Output }]
};

class GlSharedComponentFilterService {
    constructor() {
        this.opened = false;
        this.menuHidden$ = new Subject();
    }
    initialize(container, background, menuNavContainer, router) {
        this.container = container;
        this.background = background;
        this.menuNavContainer = menuNavContainer;
        this.router = router;
        this.menuHidden$.next(true);
    }
    backgroundClick(event) {
        if (this.opened) {
            this.close(event);
        }
    }
    open(event) {
        event.preventDefault();
        this.applyPartialResult;
        this.container.classList.add('menu-active');
        this.background.classList.add('visible-background');
        setTimeout(() => {
            if (this.isIE) {
                this.menuNavContainer.scrollTop = 0;
            }
            else {
                this.menuNavContainer.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }, 100);
        this.menuHidden$.next(false);
        this.opened = true;
        return true;
    }
    close(event) {
        event.preventDefault();
        this.container.classList.remove('menu-active');
        this.background.classList.remove('visible-background');
        this.menuHidden$.next(true);
        this.opened = false;
        return false;
    }
}
GlSharedComponentFilterService.ɵprov = ɵɵdefineInjectable({ factory: function GlSharedComponentFilterService_Factory() { return new GlSharedComponentFilterService(); }, token: GlSharedComponentFilterService, providedIn: "root" });
GlSharedComponentFilterService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
GlSharedComponentFilterService.ctorParameters = () => [];

class GlSharedComponentFilterComponent {
    constructor(router, service) {
        this.router = router;
        this.service = service;
        this.subtitle = 'Filter';
        this.type = '';
        this.closeButton = '../assets/img/icon/menu/close.svg';
        this.partialResultDescription = 'Partial results with these filters:';
        this.itemSingularDescription = 'item';
        this.itemPluralDescription = 'items';
        this.applyButtonDescription = 'Apply filter';
        this.clearButtonDescription = 'Clear filter';
        this.buttonClass = 'light-translucid';
        this.isIE = false;
        this.applyFilter$ = new EventEmitter();
        this.clearFilter$ = new EventEmitter();
        service.applyPartialResult = this.applyPartialResult;
    }
    ngAfterViewInit() {
        this.service.initialize(this.container.nativeElement, this.background.nativeElement, this.menuNavContainer.nativeElement, this.router);
    }
    onApply() {
        this.applyFilter$.emit();
    }
    onClear() {
        this.clearFilter$.emit();
    }
}
GlSharedComponentFilterComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-filter',
                template: "<gl-shared-component-menu-background\r\n  #background\r\n  (click)=\"service.backgroundClick($event)\"\r\n></gl-shared-component-menu-background>\r\n<div #container class=\"filter-container {{ type }}\">\r\n  <div class=\"header-filter-container\">\r\n    <div class=\"menu-header\">\r\n      <div class=\"menu-top-icons-container\">\r\n        <img id=\"close-menu-button\" (click)=\"service.close($event)\" [src]=\"closeButton\" class=\"menu-icons close-menu\" alt=\"Close menu button\">\r\n      </div>\r\n      <div class=\"menu-header-title\">\r\n        <h1 class=\"title\">{{ title }}</h1>\r\n        <h2 class=\"subtitle\">{{ subtitle }}</h2>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <nav class=\"menu-nav-container\" #menuNavContainer>\r\n    <div class=\"menu-content\">\r\n      <div class=\"input-container\" >\r\n        <ng-content></ng-content>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n  <div class=\"bottom-container\">\r\n    <span\r\n      *ngIf=\"partialResult != null\"\r\n      class=\"partial-result-description\">{{ partialResultDescription }} {{ partialResult }} {{ partialResult > 1 ? itemPluralDescription : itemSingularDescription }}\r\n    </span>\r\n    <div class=\"buttons-container\">\r\n      <gl-shared-component-input-button-simple\r\n        value=\"apply\"\r\n        [class]=\"buttonClass\"\r\n        [innerValue]=\"applyButtonDescription\"\r\n        (click)=\"onApply()\"\r\n      ></gl-shared-component-input-button-simple>\r\n      <gl-shared-component-input-button-simple\r\n        value=\"clear\"\r\n        [class]=\"buttonClass\"\r\n        [innerValue]=\"clearButtonDescription\"\r\n        (click)=\"onClear()\"\r\n      ></gl-shared-component-input-button-simple>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900\");:host::ng-deep .filter-container .menu-nav-container::-webkit-scrollbar,:host::ng-deep .filter-container .menu-nav-container::-webkit-scrollbar:horizontal{width:.6em}:host::ng-deep .filter-container .menu-nav-container::-webkit-scrollbar-button{background-color:#333437;display:none!important}:host::ng-deep .filter-container .menu-nav-container::-webkit-scrollbar-track-piece{box-shadow:inset 0 0 7em 7em #2c2c2f}:host::ng-deep .filter-container .menu-nav-container::-webkit-scrollbar-thumb,:host::ng-deep .filter-container .menu-nav-container::-webkit-scrollbar-track-piece{background-color:transparent!important;border-bottom:.1em solid transparent;border-left:.2em solid transparent;border-radius:.3em .2em .2em .3em;border-right:0;border-top:.1em solid transparent}:host::ng-deep .filter-container .menu-nav-container::-webkit-scrollbar-thumb{box-shadow:inset 0 0 7em 7em #38393c}:host::ng-deep .filter-container .menu-nav-container::-webkit-scrollbar-corner{background-color:#64666c!important}:host::ng-deep .filter-container{background:#1a1b1d;background-size:cover;border-bottom:.5em solid;border-image-slice:.5;border-image-source:linear-gradient(90deg,rgba(210,64,119,.8),rgba(97,61,149,.8));border-top:.3em solid;bottom:0;display:flex;flex-direction:column;flex-grow:1;height:100vh;max-width:17em;min-width:17em;overflow:hidden;position:fixed;right:-110%;top:0;transition:right .5s ease-in-out;width:85vw;z-index:10000}:host::ng-deep .filter-container.translucid{background:hsla(0,0%,100%,.05);border-image-source:none;border-left:1px solid hsla(0,0%,100%,.05);border-top:.3em solid hsla(0,0%,100%,.1)}:host::ng-deep .filter-container .a{display:block;min-height:3em}:host::ng-deep .filter-container .header-filter-container .menu-header{display:flex;flex-direction:column;margin:.5em 1em 1em .5em}:host::ng-deep .filter-container .header-filter-container .menu-header .menu-top-icons-container{display:flex;margin:0 0 1.5em}:host::ng-deep .filter-container .header-filter-container .menu-header .menu-top-icons-container .close-menu,:host::ng-deep .filter-container .header-filter-container .menu-header .menu-top-icons-container .settings-menu{cursor:pointer;height:1.5em;width:1.5em}:host::ng-deep .filter-container .header-filter-container .menu-header .menu-top-icons-container .close-menu:active,:host::ng-deep .filter-container .header-filter-container .menu-header .menu-top-icons-container .close-menu:hover,:host::ng-deep .filter-container .header-filter-container .menu-header .menu-top-icons-container .settings-menu:active,:host::ng-deep .filter-container .header-filter-container .menu-header .menu-top-icons-container .settings-menu:hover{-webkit-animation:increase-decrease .4s ease-in-out;-webkit-animation-fill-mode:forwards;animation:increase-decrease .4s ease-in-out;animation-fill-mode:forwards;opacity:1}:host::ng-deep .filter-container .header-filter-container .menu-header .menu-top-icons-container .close-menu{margin:0 .2em 0 0}:host::ng-deep .filter-container .header-filter-container .menu-header .menu-header-title .subtitle,:host::ng-deep .filter-container .header-filter-container .menu-header .menu-header-title .title{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;color:#fff;margin:0;text-transform:uppercase;user-select:none}:host::ng-deep .filter-container .header-filter-container .menu-header .menu-header-title .title{display:none;font-family:Montserrat,sans-serif;font-size:.9em;font-weight:700}:host::ng-deep .filter-container .header-filter-container .menu-header .menu-header-title .subtitle{font-family:Montserrat,sans-serif;font-size:1.5em;font-weight:100}:host::ng-deep .filter-container .bottom-container{display:flex;flex-direction:column;margin:1em 0 .4em}:host::ng-deep .filter-container .bottom-container .partial-result-description{color:#d24077;font-family:Montserrat,sans-serif;font-size:.5em;font-weight:700;padding:0 0 0 .5em;text-align:center}:host::ng-deep .filter-container .bottom-container .buttons-container{display:flex;font-size:.8em;padding:.6em 0 .3em .3em}:host::ng-deep .filter-container .bottom-container .buttons-container .default-button:first-child{margin:0 .5em 0 0}:host::ng-deep .filter-container .bottom-container .buttons-container .default-button:nth-child(2){margin:0 0 0 .5em}:host::ng-deep .filter-container .menu-nav-container{border-bottom:1px solid;border-image-slice:.5;border-image-source:linear-gradient(90deg,rgba(210,64,119,.8),rgba(97,61,149,.8));border-top:1px solid;display:flex;flex-grow:1;max-height:100%;overflow:auto;overflow-x:hidden}:host::ng-deep .filter-container .menu-nav-container:after{bottom:-10.5%}:host::ng-deep .filter-container .menu-nav-container .menu-content{display:flex;flex-direction:column;flex-grow:1;position:relative}:host::ng-deep .filter-container .menu-nav-container .menu-content .menu-title{align-items:center;background:linear-gradient(90deg,rgba(210,64,119,.8),rgba(97,61,149,.8));border-left:.2em solid #fff;display:flex;margin:0 0 .14em;position:relative}:host::ng-deep .filter-container .menu-nav-container .menu-content .menu-title .material-icons{color:hsla(0,0%,100%,.6);font-size:1.2em;margin:0 .5em 0 .3em;padding:.3em}:host::ng-deep .filter-container .menu-nav-container .menu-content .menu-title .material-icons.expand{color:#fff;position:absolute;right:.3em;top:.5em}:host::ng-deep .filter-container .menu-nav-container .menu-content .menu-title .menu-icons{height:1.5em;padding:.2em .5em;width:1.5em}:host::ng-deep .filter-container .menu-nav-container .menu-content .menu-title a{color:#fff;flex-grow:1;font-family:Montserrat,sans-serif;font-size:.6em;font-weight:300;padding:1.5em .7em;text-decoration:none;text-transform:uppercase}:host::ng-deep .filter-container .menu-nav-container .menu-content .input-container gl-shared-component-filter-container .type-container{background-color:hsla(0,0%,100%,.03);border-bottom:1px solid hsla(0,0%,100%,.03)}:host::ng-deep .filter-container .menu-nav-container .menu-content .input-container .options-container{display:flex}:host::ng-deep .filter-container .menu-nav-container .menu-content .input-container gl-shared-component-input-datepicker-simple-day-month-year .mat-form-field-wrapper .mat-form-field-flex,:host::ng-deep .filter-container .menu-nav-container .menu-content .input-container gl-shared-component-input-datepicker-simple-month-year .mat-form-field-wrapper .mat-form-field-flex{height:1.5em}:host::ng-deep .filter-container .menu-nav-container .menu-content .input-container gl-shared-component-input-autocomplete-simple .input-container{height:1.5em;margin:.2em 0 0}:host::ng-deep .show-admin-settings{visibility:visible!important}:host::ng-deep .filter-container .menu-active,:host::ng-deep .menu-active{right:0}:host::ng-deep .menu-background{left:1000px;opacity:0;visibility:collapse;z-index:-1000}:host::ng-deep .visible-background{background:rgba(0,0,0,.6);height:100%;left:0;opacity:1;position:fixed;top:0;transition:all 1s ease-in-out;visibility:visible;width:100%;z-index:999}:host::ng-deep .hide-subtitle{margin:0;opacity:0;padding:0;transition:all .25s ease-in-out;visibility:collapse}:host::ng-deep .show-subtitle{opacity:1;transition:all .25s ease-in-out;transition-delay:.4s;visibility:visible}:host::ng-deep .hide-subtitle-container{-webkit-animation:hide-subtitle .4s ease-in-out;-webkit-animation-fill-mode:forwards;animation:hide-subtitle .4s ease-in-out;animation-fill-mode:forwards}:host::ng-deep .show-subtitle-container{-webkit-animation:show-subtitle .4s ease-in-out;-webkit-animation-fill-mode:forwards;animation:show-subtitle .4s ease-in-out;animation-fill-mode:forwards}:host::ng-deep .collapsed-menu .expand{transform:rotate(0deg);transition:all .4s ease-in-out}:host::ng-deep .collapsed-menu .menu-icons{-webkit-animation:decrease-increase .4s ease-in-out;-webkit-animation-fill-mode:forwards;animation:decrease-increase .4s ease-in-out;animation-fill-mode:forwards}:host::ng-deep .expanded-menu .expand{transform:rotate(-180deg);transition:all .4s ease-in-out}:host::ng-deep .expanded-menu .menu-icons{-webkit-animation:increase-decrease .4s ease-in-out;-webkit-animation-fill-mode:forwards;animation:increase-decrease .4s ease-in-out;animation-fill-mode:forwards}"]
            },] }
];
GlSharedComponentFilterComponent.ctorParameters = () => [
    { type: Router },
    { type: GlSharedComponentFilterService }
];
GlSharedComponentFilterComponent.propDecorators = {
    container: [{ type: ViewChild, args: ['container', { static: true, read: ElementRef },] }],
    background: [{ type: ViewChild, args: ['background', { static: true, read: ElementRef },] }],
    menuNavContainer: [{ type: ViewChild, args: ['menuNavContainer',] }],
    title: [{ type: Input }],
    subtitle: [{ type: Input }],
    type: [{ type: Input }],
    closeButton: [{ type: Input }],
    partialResult: [{ type: Input }],
    partialResultDescription: [{ type: Input }],
    itemSingularDescription: [{ type: Input }],
    itemPluralDescription: [{ type: Input }],
    applyButtonDescription: [{ type: Input }],
    clearButtonDescription: [{ type: Input }],
    buttonClass: [{ type: Input }],
    isIE: [{ type: Input }],
    applyPartialResult: [{ type: Input }],
    applyFilter$: [{ type: Output }],
    clearFilter$: [{ type: Output }]
};

class GlSharedComponentFilterContainerComponent {
    constructor() { }
}
GlSharedComponentFilterContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-filter-container',
                template: "<div class=\"type-container\">\r\n  <label class=\"title\">{{ label }}</label>\r\n  <ng-content></ng-content>\r\n</div>\r\n",
                styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900\");:host::ng-deep .type-container{background-color:#2c2c2f;border-bottom:1px solid #38393c;display:flex;flex-direction:column;padding:.7em .7em .2em}:host::ng-deep .type-container .title{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;color:#d24077;font-family:Montserrat,sans-serif;font-size:.4em;font-weight:700;font-weight:400;margin:0 0 1.5em;text-transform:uppercase;user-select:none}"]
            },] }
];
GlSharedComponentFilterContainerComponent.ctorParameters = () => [];
GlSharedComponentFilterContainerComponent.propDecorators = {
    label: [{ type: Input }]
};

class GlSharedComponentFooterContainerComponent {
    constructor() {
        this.imageDescription = 'Image logo';
    }
}
GlSharedComponentFooterContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-footer-container',
                template: "<section class=\"footer-container\">\r\n  <span class=\"description\">{{ description }}</span>\r\n  <img\r\n    *ngIf=\"imageLogo != null\"\r\n    class=\"image-logo\"\r\n    [alt]=\"imageDescription\"\r\n    [src]=\"imageLogo\">\r\n  <div class=\"user-container\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</section>\r\n",
                styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900\");:host::ng-deep{bottom:0;flex-grow:1;max-width:100vw;min-width:100vw;position:fixed;z-index:100}:host::ng-deep .footer-container{background-color:#1a1b1d;border-image-slice:.5;border-image-source:linear-gradient(90deg,rgba(210,64,119,.8),rgba(97,61,149,.8));border-top:.1em solid;display:flex;height:1.3em;justify-content:center;position:relative;z-index:99}:host::ng-deep .footer-container .description{color:#fff;font-family:Montserrat,sans-serif;font-size:.5em;font-weight:300;letter-spacing:.14em;padding:1em;text-transform:uppercase}:host::ng-deep .footer-container .image-logo{height:1em;margin:0 0 0 .3em}:host::ng-deep .footer-container .user-container{align-self:flex-end;margin:0 .3em 0 0}:host::ng-deep .footer-container .user-container .user-container{align-items:center;display:flex;justify-content:center}"]
            },] }
];
GlSharedComponentFooterContainerComponent.ctorParameters = () => [];
GlSharedComponentFooterContainerComponent.propDecorators = {
    description: [{ type: Input }],
    imageLogo: [{ type: Input }],
    imageDescription: [{ type: Input }]
};

class GlSharedComponentFooterSimpleComponent {
    constructor() {
        this.imageDescription = 'Image logo';
    }
}
GlSharedComponentFooterSimpleComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-footer-simple',
                template: "<section class=\"footer-container\">\r\n  <span class=\"description\">{{ description }}</span>\r\n  <img\r\n    *ngIf=\"imageLogo != null\"\r\n    class=\"image-logo\"\r\n    [alt]=\"imageDescription\"\r\n    [src]=\"imageLogo\">\r\n</section>\r\n",
                styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900\");:host::ng-deep{bottom:0;flex-grow:1;max-width:100vw;min-width:100vw;position:fixed;z-index:100}:host::ng-deep .footer-container{background-color:#1a1b1d;border-image-slice:.5;border-image-source:linear-gradient(90deg,rgba(210,64,119,.8),rgba(97,61,149,.8));border-top:.1em solid;display:flex;height:1.3em;justify-content:center;position:relative;z-index:99}:host::ng-deep .footer-container .description{color:#fff;font-family:Montserrat,sans-serif;font-size:.5em;font-weight:300;letter-spacing:.14em;padding:1em;text-transform:uppercase}:host::ng-deep .footer-container .image-logo{height:1em;margin:0 0 0 .3em}@media screen and (min-device-width:280px) and (orientation:portrait){:host::ng-deep .footer-container{font-size:7vw}}@media screen and (min-device-width:700px) and (orientation:portrait){:host::ng-deep .footer-container{font-size:6vw}}@media screen and (min-device-width:800px) and (orientation:portrait){:host::ng-deep .footer-container{font-size:5vw}}@media screen and (min-device-width:1300px) and (orientation:portrait){:host::ng-deep .footer-container{font-size:4vw}}"]
            },] }
];
GlSharedComponentFooterSimpleComponent.ctorParameters = () => [];
GlSharedComponentFooterSimpleComponent.propDecorators = {
    description: [{ type: Input }],
    imageLogo: [{ type: Input }],
    imageDescription: [{ type: Input }]
};

class GlSharedComponentHeaderDefaultComponent {
    constructor() {
        this.systemLogo = false;
        this.keyDown = new EventEmitter();
    }
    onKeyDown(event) {
        this.keyDown.emit(event);
    }
}
GlSharedComponentHeaderDefaultComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-header-default',
                template: "<section class=\"header-container {{ type }}\" [attr.type]=\"type\" (window:keydown)=\"onKeyDown($event)\">\r\n  <div class=\"header-content {{ type }}\" >\r\n    <div class=\"default-logo\" *ngIf=\"type != 'only-buttons'\">\r\n      <ng-content select=\"[slot=default-logo]\"></ng-content>\r\n    </div>\r\n    <gl-shared-component-title-page\r\n      *ngIf=\"type != 'only-buttons' && !systemLogo\"\r\n      [title]=\"title\"\r\n      [subtitle]=\"subtitle\"\r\n    ></gl-shared-component-title-page>\r\n    <ng-content class=\"system-logo\" select=\"[slot=system-logo]\"></ng-content>\r\n\r\n    <div class=\"menu-bar\">\r\n      <div class=\"menu-buttons-container\">\r\n        <ng-content></ng-content>\r\n        <gl-shared-component-button-menu-tooltip\r\n          *ngFor=\"let menuButton of menuButtons;\"\r\n          [disabled]=\"(readonly && !menuButton.canReadonly) || (!readonly && menuButton.canReadonly && menuButton.readonly)\"\r\n          [tooltip]=\"menuButton.alt\"\r\n          [src]=\"menuButton.src\"\r\n          [id]=\"menuButton.id\"\r\n          [alt]=\"menuButton.alt\"\r\n          [callback]=\"menuButton.callback\">\r\n        </gl-shared-component-button-menu-tooltip>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n",
                styles: [":host::ng-deep,:host::ng-deep .header-container{max-width:calc(var(--vw, 1vw)*100)}:host::ng-deep .header-container{background-color:#1a1b1d;position:relative}:host::ng-deep .header-container.inverted,:host::ng-deep .header-container.light{background:linear-gradient(90deg,rgba(0,0,0,.2),rgba(0,0,0,.3))}:host::ng-deep .header-container .header-content{align-items:center;display:flex}:host::ng-deep .header-container .header-content.dark,:host::ng-deep .header-container .header-content.light{border-image-slice:.5;border-image-source:linear-gradient(90deg,rgba(210,64,119,.8),rgba(97,61,149,.8));border-top:.2em solid}:host::ng-deep .header-container .header-content.inverted{border-bottom:.5px solid;border-image-slice:.5;border-image-source:linear-gradient(90deg,rgba(210,64,119,.8),rgba(97,61,149,.8))}:host::ng-deep .header-container .header-content .default-logo{margin:0 .5em 0 0}:host::ng-deep .header-container .header-content .menu-bar{align-items:center;display:flex;flex-grow:1;height:2.3em;justify-content:flex-end}:host::ng-deep .header-container .header-content .menu-bar .menu-buttons-container{align-items:center;display:flex;margin:0 .5em}:host::ng-deep .header-container.only-buttons{background-color:transparent}:host::ng-deep .header-container.dark-translucid{background-color:rgba(0,0,0,.3)}:host::ng-deep .header-container.light-translucid{background-color:hsla(0,0%,100%,.3)}@media screen and (min-device-width:240px) and (orientation:portrait){:host::ng-deep .header-container{font-size:calc(var(--vw, 1vw)*6)}}@media screen and (min-device-width:600px) and (orientation:portrait){:host::ng-deep .header-container{font-size:calc(var(--vw, 1vw)*4)}}@media screen and (min-device-width:700px) and (orientation:portrait){:host::ng-deep .header-container{font-size:calc(var(--vw, 1vw)*6)}}@media screen and (min-device-width:800px) and (orientation:portrait){:host::ng-deep .header-container{font-size:calc(var(--vw, 1vw)*5)}}@media screen and (min-device-width:1024px) and (orientation:portrait){:host::ng-deep .header-container{font-size:calc(var(--vw, 1vw)*3)}}@media screen and (min-device-width:1300px) and (orientation:portrait){:host::ng-deep .header-container{font-size:calc(var(--vw, 1vw)*4)}}@media screen and (min-device-width:240px) and (orientation:landscape){:host::ng-deep .header-container{font-size:calc(var(--vw, 1vw)*3)}}@media screen and (min-device-width:400px) and (orientation:landscape){:host::ng-deep .header-container{font-size:calc(var(--vw, 1vw)*3.5)}}@media screen and (min-device-width:700px) and (orientation:landscape){:host::ng-deep .header-container{font-size:calc(var(--vw, 1vw)*2.5)}}@media screen and (min-device-width:800px) and (orientation:landscape){:host::ng-deep .header-container{font-size:calc(var(--vw, 1vw)*2)}}@media screen and (min-device-width:1024px) and (orientation:landscape){:host::ng-deep .header-container{font-size:calc(var(--vw, 1vw)*1.5)}}"]
            },] }
];
GlSharedComponentHeaderDefaultComponent.ctorParameters = () => [];
GlSharedComponentHeaderDefaultComponent.propDecorators = {
    systemLogo: [{ type: Input }],
    labelModel: [{ type: Input }],
    labelId: [{ type: Input }],
    labelArea: [{ type: Input }],
    type: [{ type: Input }],
    title: [{ type: Input }],
    subtitle: [{ type: Input }],
    menuButtons: [{ type: Input }],
    keyDown: [{ type: Output }],
    readonly: [{ type: Input }]
};

class GlSharedComponentInputAutocompleteLabelComponent {
    constructor() {
        this.currentValue = new EventEmitter();
        this.listItems = [];
        this.disabled = false;
        this.requiredField = 'Required field';
    }
    onCurrentValue(value) { this.currentValue.emit(value); }
}
GlSharedComponentInputAutocompleteLabelComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-input-autocomplete-label',
                template: "<gl-shared-component-input-autocomplete-simple\r\n  [class]=\"class\"\r\n  [value]=\"value\"\r\n  [listName]=\"listName\"\r\n  (currentValue)=\"onCurrentValue($event)\"\r\n  [id]=\"id\"\r\n  [itemContentAlignment]=\"itemContentAlignment\"\r\n  [placeholder]=\"placeholder\"\r\n  [listItems]=\"listItems\"\r\n  [disabled]=\"disabled\"\r\n\r\n  [custom]=\"custom\"\r\n  [baseUrl]=\"baseUrl\"\r\n  [valueField]=\"valueField\"\r\n  [textField]=\"textField\"\r\n  ><gl-shared-component-title-label-simple\r\n    [id]=\"id\"\r\n    [labelAlignment]=\"labelAlignment\"\r\n    [labelValue]=\"labelValue\"\r\n    [required]=\"required\"\r\n    [class]=\"class\"\r\n    [requiredLabel]=\"requiredField\"\r\n  ></gl-shared-component-title-label-simple>\r\n</gl-shared-component-input-autocomplete-simple>\r\n",
                styles: [":host::ng-deep{display:flex}:host::ng-deep gl-shared-component-title-label-simple{flex-grow:0}"]
            },] }
];
GlSharedComponentInputAutocompleteLabelComponent.ctorParameters = () => [];
GlSharedComponentInputAutocompleteLabelComponent.propDecorators = {
    currentValue: [{ type: Output }],
    listItems: [{ type: Input }],
    disabled: [{ type: Input }],
    listName: [{ type: Input }],
    id: [{ type: Input }],
    labelValue: [{ type: Input }],
    labelAlignment: [{ type: Input }],
    placeholder: [{ type: Input }],
    itemContentAlignment: [{ type: Input }],
    class: [{ type: Input }],
    value: [{ type: Input }],
    required: [{ type: Input }],
    custom: [{ type: Input }],
    baseUrl: [{ type: Input }],
    valueField: [{ type: Input }],
    textField: [{ type: Input }],
    requiredField: [{ type: Input }]
};

class GlSharedComponentInputAutocompleteSimpleService {
    constructor() {
        this.autocompleteList$ = new Subject();
        this.autocompleteReset$ = new Subject();
        this.autocompleteLoaded$ = new Subject();
        this.autocompleteUpdateValue$ = new Subject();
    }
    ngOnDestroy() {
        this.autocompleteList$.observers.map(x => x.complete());
        this.autocompleteLoaded$.observers.map(x => x.complete());
        this.autocompleteReset$.observers.map(x => x.complete());
        this.autocompleteUpdateValue$.observers.map(x => x.complete());
    }
}
GlSharedComponentInputAutocompleteSimpleService.ɵprov = ɵɵdefineInjectable({ factory: function GlSharedComponentInputAutocompleteSimpleService_Factory() { return new GlSharedComponentInputAutocompleteSimpleService(); }, token: GlSharedComponentInputAutocompleteSimpleService, providedIn: "root" });
GlSharedComponentInputAutocompleteSimpleService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
GlSharedComponentInputAutocompleteSimpleService.ctorParameters = () => [];

class GlSharedComponentInputAutocompleteSimpleComponent {
    constructor(_service, overlay) {
        this._service = _service;
        this.overlay = overlay;
        this.currentValue = new EventEmitter();
        this.listItems = [];
        this.class = '';
        this.maxLength = '255';
        this._loaded = false;
        this.imageSource = '../assets/img/icon/drop-down/arrow-down.svg';
        this.clearSource = '../assets/img/icon/drop-down/clear.svg';
        this.autocompleteInput = new FormControl();
        _service.autocompleteList$.subscribe(update => {
            if (this.listName === update.listName) {
                this.listItems = update.options;
                this.setup();
            }
        });
        _service.autocompleteReset$.subscribe(update => {
            if (this.id === update.comboboxId) {
                this.input.nativeElement.value = '';
                this.validate();
            }
        });
        _service.autocompleteLoaded$.subscribe(loaded => {
            this._loaded = loaded;
            _service.autocompleteLoaded$.observers.map(x => x.complete());
        });
        _service.autocompleteUpdateValue$.subscribe(update => {
            if (this.id === update.comboboxId) {
                this.listItems = update.options;
                const value = update.options.filter(x => x.value === update.value);
                const input = this.input.nativeElement;
                if (value != null && value.length > 0) {
                    input.value = value[0].text;
                    this.autocompleteInput.setValue(value[0].text);
                    this.value = value[0].value;
                    this.setup();
                }
                else {
                    input.value = '';
                    this.autocompleteInput.setValue('');
                    this.value = '';
                    this.setup();
                }
            }
        });
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            this.setup();
        });
    }
    setup() {
        this.filteredOptions = this.autocompleteInput.valueChanges.pipe(startWith(''), 
        // startWith(this.value),
        map(value => this.filter(value)));
        // if (!this._loaded) { this.autocompleteInput.setValue(this.value); }
        // this.autocompleteInput.setValue(this.value);
        setTimeout(() => { this.validate(); });
    }
    filter(value) {
        if (value == null) {
            value = '';
        }
        const filterValue = value.toLowerCase();
        return this.listItems.filter(option => { var _a; return (_a = option.text) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes(filterValue); });
    }
    validate() {
        const input = this.input.nativeElement;
        const value = input.value;
        const filteredData = this.filter(value);
        if (value != null && value.trim().length > 0 && filteredData.length > 0) {
            input.value = filteredData[0].text;
            this.autocompleteInput.setValue(filteredData[0].text);
            this.currentValue.emit({ text: filteredData[0].text, value: filteredData[0].value });
        }
        else {
            input.value = '';
            this.autocompleteInput.setValue('');
            this.currentValue.emit({ text: null, value: null });
        }
    }
    reset(auto, event) {
        if (auto.options != null) {
            auto.options.map(option => option.deselect());
        }
        event.currentTarget.select();
    }
    clearItems(input) {
        input.value = null;
        this.autocompleteInput.setValue(null);
        this.currentValue.emit({ text: null, value: null });
        setTimeout(() => {
            input.click();
        }, 100);
    }
    arrowClick() {
        this.autocompleteInput.reset();
        this.autocompleteInput.setValue('');
    }
    ngOnDestroy() {
        this._service.autocompleteList$.observers.map(x => x.complete());
        this._service.autocompleteReset$.observers.map(x => x.complete());
        this._service.autocompleteLoaded$.observers.map(x => x.complete());
    }
    ngOnChanges(changes) {
        var _a, _b, _c, _d;
        const prevList = (_a = changes.listItems) === null || _a === void 0 ? void 0 : _a.previousValue;
        const currList = (_b = changes.listItems) === null || _b === void 0 ? void 0 : _b.currentValue;
        const prevValue = (_c = changes.value) === null || _c === void 0 ? void 0 : _c.previousValue;
        const currValue = (_d = changes.value) === null || _d === void 0 ? void 0 : _d.currentValue;
        // tslint:disable-next-line:triple-equals
        if (prevList != currList) {
            this.setup();
        }
        // tslint:disable-next-line:triple-equals
        if (prevValue != currValue) {
            this.setup();
        }
        this.overlay.position().global().dispose();
        // if (prevList != currList || prevValue != currValue) { this.setup(); }
    }
}
GlSharedComponentInputAutocompleteSimpleComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-input-autocomplete-simple',
                template: "<ng-content></ng-content>\r\n<div class=\"input-container custom-combobox {{ class }} {{ disabled ? 'read-only' : '' }} {{ listItems.length > 0 ? '' : 'no-data' }}\">\r\n  <mat-form-field\r\n    (focusout)=\"overlay.position().global().dispose()\"\r\n    floatLabel=\"never\"\r\n    appearance=\"none\">\r\n    <div class=\"combobox-container {{ listItems.length > 0 ? '' : 'no-data' }} {{ disabled ? 'read-only' : '' }}\">\r\n      <input\r\n        #input\r\n        type=\"text\"\r\n        aria-label=\"Number\"\r\n        class=\"item-content {{ itemContentAlignment }} {{ class }} {{ listItems.length > 0 ? '' : 'no-data' }} {{ disabled ? 'read-only' : '' }}\"\r\n        matInput\r\n        [readonly]=\"disabled\"\r\n        [id]=\"id\"\r\n        [placeholder]=\"placeholder\"\r\n        [formControl]=\"autocompleteInput\"\r\n        [maxLength]=\"maxLength\"\r\n        [matAutocomplete]=\"auto\"\r\n        (focusin)=\"reset(auto, $event)\"\r\n        (focusout)=\"validate()\">\r\n      <!--    <img-->\r\n      <!--      *ngIf=\"!disabled\"-->\r\n      <!--      (click)=\"clearItems(input)\"-->\r\n      <!--      alt=\"Clear items\"-->\r\n      <!--      class=\"clear-items\"-->\r\n      <!--      [src]=\"clearSource\">-->\r\n\r\n      <!--    <img-->\r\n      <!--      #arrowDown-->\r\n      <!--      (click)=\"clearItems(input)\"-->\r\n      <!--      alt=\"Show items\"-->\r\n      <!--      class=\"arrow-down {{ class }} {{ disabled ? 'read-only' : '' }}\"-->\r\n      <!--      [src]=\"imageSource\">-->\r\n    </div>\r\n    <mat-autocomplete autoActiveFirstOption=\"true\" #auto=\"matAutocomplete\" (optionSelected)=\"input.blur()\" [mat-dialog-close]=\"overlay.position().global().dispose()\">\r\n      <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option.text\">\r\n        {{option.text}}\r\n      </mat-option>\r\n    </mat-autocomplete>\r\n  </mat-form-field>\r\n  <img\r\n    #arrowDown\r\n    (click)=\"clearItems(input)\"\r\n    alt=\"Show items\"\r\n    class=\"arrow-down {{ class }} {{ disabled ? 'read-only' : '' }}\"\r\n    [src]=\"imageSource\">\r\n</div>\r\n\r\n",
                styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900\");::ng-deep .mat-autocomplete-panel::-webkit-scrollbar:horizontal{width:.6em}::ng-deep .dark .mat-autocomplete-panel::-webkit-scrollbar,::ng-deep .light .mat-autocomplete-panel::-webkit-scrollbar,::ng-deep .mat-autocomplete-panel::-webkit-scrollbar{width:.6em}::ng-deep .dark .mat-autocomplete-panel::-webkit-scrollbar-button,::ng-deep .light .mat-autocomplete-panel::-webkit-scrollbar-button,::ng-deep .mat-autocomplete-panel::-webkit-scrollbar-button{background-color:#333437;display:none!important}::ng-deep .dark .mat-autocomplete-panel::-webkit-scrollbar-track-piece,::ng-deep .light .mat-autocomplete-panel::-webkit-scrollbar-track-piece,::ng-deep .mat-autocomplete-panel::-webkit-scrollbar-track-piece{background-color:transparent!important;border-bottom:.1em solid transparent;border-left:.2em solid transparent;border-radius:.3em .2em .2em .3em;border-right:0;border-top:.1em solid transparent;box-shadow:inset 0 0 7em 7em #2c2c2f}::ng-deep .dark .mat-autocomplete-panel::-webkit-scrollbar-thumb,::ng-deep .light .mat-autocomplete-panel::-webkit-scrollbar-thumb,::ng-deep .mat-autocomplete-panel::-webkit-scrollbar-thumb{background-color:transparent!important;border-bottom:.1em solid transparent;border-left:.2em solid transparent;border-radius:.3em .2em .2em .3em;border-right:0;border-top:.1em solid transparent;box-shadow:inset 0 0 7em 7em #38393c}::ng-deep .dark .mat-autocomplete-panel::-webkit-scrollbar-corner,::ng-deep .light .mat-autocomplete-panel::-webkit-scrollbar-corner,::ng-deep .mat-autocomplete-panel::-webkit-scrollbar-corner{background-color:#64666c!important}:host::ng-deep{display:flex;flex:1 0 auto;flex-direction:column;position:relative}:host::ng-deep .input-container{align-items:center;background-color:#333437;display:flex;flex-grow:1}:host::ng-deep .input-container mat-form-field{display:flex;flex-grow:1;margin:0}:host::ng-deep .input-container mat-form-field .mat-form-field-wrapper{display:flex;flex-direction:column;flex-grow:1;padding:0}:host::ng-deep .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex{align-items:inherit;display:flex;flex-grow:1}:host::ng-deep .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix{border:none;display:flex;flex:1 1 0px;padding:0;width:100%}:host::ng-deep .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container{display:flex;flex-direction:row;flex-grow:1;pointer-events:none}:host::ng-deep .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element{background-color:#333437;border:none;color:#fff;flex-grow:1;font-family:Montserrat,sans-serif;font-size:.45em;font-weight:400;margin:0;padding:.8em;position:relative}:host::ng-deep .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element::-moz-placeholder{color:#64666c!important}:host::ng-deep .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element:-ms-input-placeholder{color:#64666c!important}:host::ng-deep .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element::placeholder{color:#64666c!important}:host::ng-deep .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element.left{text-align:left}:host::ng-deep .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element.center{text-align:center}:host::ng-deep .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element.right{text-align:right}:host::ng-deep .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element.light{background-color:rgba(0,0,0,.1)}:host::ng-deep .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element.light::-moz-placeholder{color:hsla(0,0%,100%,.2)!important}:host::ng-deep .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element.light:-ms-input-placeholder{color:hsla(0,0%,100%,.2)!important}:host::ng-deep .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element.light::placeholder{color:hsla(0,0%,100%,.2)!important}:host::ng-deep .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element.dark{background-color:#161617}:host::ng-deep .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element .item-content:-ms-input-placeholder{color:#64666c!important}:host::ng-deep .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element .item-content.light:-ms-input-placeholder{color:grey!important}:host::ng-deep .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .clear-items{height:.5em;position:absolute;right:1.5em;top:.4em;width:.5em}:host::ng-deep .input-container .arrow-down{background-color:#333437;height:.8em;padding:0 .3em;transition:all .2s ease-in-out;width:.8em}:host::ng-deep .input-container .arrow-down:hover{background-color:#2c2c2f;transition:all .2s ease-in-out}:host::ng-deep .input-container .arrow-down.light{background-color:rgba(0,0,0,.1);transition:all .2s ease-in-out}:host::ng-deep .input-container .arrow-down.light::-moz-placeholder{color:hsla(0,0%,100%,.2)!important}:host::ng-deep .input-container .arrow-down.light:-ms-input-placeholder{color:hsla(0,0%,100%,.2)!important}:host::ng-deep .input-container .arrow-down.light::placeholder{color:hsla(0,0%,100%,.2)!important}:host::ng-deep .input-container .arrow-down.light:hover{background-color:rgba(0,0,0,.2);transition:all .2s ease-in-out}:host::ng-deep .input-container .arrow-down.dark{background-color:#161617;transition:all .2s ease-in-out}:host::ng-deep .input-container .arrow-down.dark:hover{background-color:#1a1b1d;transition:all .2s ease-in-out}:host::ng-deep .input-container .arrow-down.read-only{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;pointer-events:none;user-select:none}:host::ng-deep .input-container.no-data .arrow-down,:host::ng-deep .input-container.read-only .arrow-down{display:none}::ng-deep .mat-autocomplete-panel{background-color:#38393c;border-radius:0;box-shadow:none!important;transition:all .2s ease-in-out}::ng-deep .mat-autocomplete-panel::-webkit-scrollbar{width:1em!important}::ng-deep .mat-autocomplete-panel mat-option{border-radius:0;font-size:1em;height:4em;line-height:4em;padding:0 1.5em;transition:all .2s ease-in-out}::ng-deep .mat-autocomplete-panel mat-option:nth-child(odd){background-color:#333437;transition:all .2s ease-in-out}::ng-deep .mat-autocomplete-panel mat-option.mat-active,::ng-deep .mat-autocomplete-panel mat-option.mat-selected{background-color:#d24077;transition:all .2s ease-in-out}::ng-deep .mat-autocomplete-panel mat-option:hover{background-color:#b01e45!important;transition:all .2s ease-in-out}::ng-deep .light .mat-autocomplete-panel{background-color:transparent;transition:all .2s ease-in-out}::ng-deep .light .mat-autocomplete-panel mat-option:nth-child(odd){background-color:rgba(0,0,0,.6);transition:all .2s ease-in-out}::ng-deep .light .mat-autocomplete-panel mat-option:nth-child(2n+2){background-color:rgba(0,0,0,.7);transition:all .2s ease-in-out}::ng-deep .light .mat-autocomplete-panel mat-option.mat-active{background-color:#d24077;transition:all .2s ease-in-out}::ng-deep .light .mat-autocomplete-panel mat-option:hover{background-color:#b01e45!important;transition:all .2s ease-in-out}::ng-deep .dark .mat-autocomplete-panel{background-color:transparent;transition:all .2s ease-in-out}::ng-deep .dark .mat-autocomplete-panel mat-option:nth-child(odd){background-color:#2c2c2f;transition:all .2s ease-in-out}::ng-deep .dark .mat-autocomplete-panel mat-option:nth-child(2n+2){background-color:#333437;transition:all .2s ease-in-out}::ng-deep .dark .mat-autocomplete-panel mat-option.mat-active{background-color:#d24077;transition:all .2s ease-in-out}::ng-deep .dark .mat-autocomplete-panel mat-option:hover{background-color:#b01e45!important;transition:all .2s ease-in-out}@media screen and (min-device-width:320px) and (max-device-width:1024px){::ng-deep .mat-autocomplete-panel{font-size:2.8vw!important}}@media screen and (min-device-width:1024px){::ng-deep .mat-autocomplete-panel{font-size:.6vw!important}}"]
            },] }
];
GlSharedComponentInputAutocompleteSimpleComponent.ctorParameters = () => [
    { type: GlSharedComponentInputAutocompleteSimpleService },
    { type: Overlay }
];
GlSharedComponentInputAutocompleteSimpleComponent.propDecorators = {
    input: [{ type: ViewChild, args: ['input',] }],
    currentValue: [{ type: Output }],
    listItems: [{ type: Input }],
    disabled: [{ type: Input }],
    listName: [{ type: Input }],
    id: [{ type: Input }],
    placeholder: [{ type: Input }],
    itemContentAlignment: [{ type: Input }],
    class: [{ type: Input }],
    value: [{ type: Input }],
    maxLength: [{ type: Input }],
    custom: [{ type: Input }],
    baseUrl: [{ type: Input }],
    valueField: [{ type: Input }],
    textField: [{ type: Input }],
    labelValue: [{ type: Input }],
    labelAlignment: [{ type: Input }],
    required: [{ type: Input }],
    requiredField: [{ type: Input }]
};

class GlSharedComponentInputButtonSimpleComponent {
    constructor() {
        this.readonly = false;
    }
}
GlSharedComponentInputButtonSimpleComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-input-button-simple',
                template: "<button\r\n  type=\"button\"\r\n  class=\"default-button {{ class }}\"\r\n  [value]=\"value\"\r\n  [disabled]=\"readonly\"\r\n>{{ innerValue }}</button>\r\n",
                styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900\");:host::ng-deep{display:flex;flex:1 1 0;height:2em}:host::ng-deep .default-button{background-color:#fff;border:none;color:#1a1b1d;flex:1 1 0;font-family:Montserrat,sans-serif;font-size:.5em;font-weight:300;text-transform:uppercase}:host::ng-deep .default-button.light-translucid{background-color:hsla(0,0%,100%,.1);font-family:Montserrat,sans-serif;font-weight:300}:host::ng-deep .default-button:focus,:host::ng-deep .default-button:hover{opacity:1;transition:all .3s ease-in-out}:host::ng-deep .light-translucid.default-button:focus,:host::ng-deep .light-translucid.default-button:hover{background-color:hsla(0,0%,100%,.9);color:#4b4d52;font-family:Montserrat,sans-serif;font-weight:300}:host::ng-deep .default-button:not(hover){opacity:.8;transition:all .3s ease-in-out}"]
            },] }
];
GlSharedComponentInputButtonSimpleComponent.ctorParameters = () => [];
GlSharedComponentInputButtonSimpleComponent.propDecorators = {
    value: [{ type: Input }],
    class: [{ type: Input }],
    innerValue: [{ type: Input }],
    readonly: [{ type: Input }]
};

class GlSharedComponentInputButtonHyperlinkComponent {
    constructor() {
        this.readonly = false;
    }
}
GlSharedComponentInputButtonHyperlinkComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-input-button-hyperlink',
                template: "<div class=\"hyperlink-container\">\r\n\r\n  <img\r\n    class=\"logo\"\r\n    [src]=\"imageSrc\"\r\n    [alt]=\"imageDescription\">\r\n  <span\r\n    *ngIf=\"readonly\"\r\n    class=\"message\">\r\n    {{ description }}\r\n  </span>\r\n  <a\r\n    *ngIf=\"!readonly\"\r\n    class=\"message\"\r\n    [href]=\"link\"\r\n    target=\"_blank\">{{ description }}</a>\r\n</div>\r\n",
                styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900\");:host::ng-deep .hyperlink-container{align-items:center;bottom:.3em;display:flex;flex-direction:row;position:absolute;right:.3em}:host::ng-deep .hyperlink-container .logo{height:.7em;margin:0 .2em 0 0;width:.7em}:host::ng-deep .hyperlink-container .message{color:#ff9800;font-family:Montserrat,sans-serif;font-size:.5em;font-weight:400;margin:0 0 0 .2em}"]
            },] }
];
GlSharedComponentInputButtonHyperlinkComponent.ctorParameters = () => [];
GlSharedComponentInputButtonHyperlinkComponent.propDecorators = {
    imageSrc: [{ type: Input }],
    imageDescription: [{ type: Input }],
    description: [{ type: Input }],
    link: [{ type: Input }],
    readonly: [{ type: Input }]
};

class GlSharedComponentInputOptionSimpleComponent {
    constructor() {
        this.itemSelected = new EventEmitter();
    }
    onCheck(value, input) {
        input.checked = true;
        this.itemSelected.emit(value);
    }
}
GlSharedComponentInputOptionSimpleComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-input-option-simple',
                template: "<div class=\"input-container\">\r\n  <!--suppress HtmlFormInputWithoutLabel -->\r\n  <input\r\n    #input\r\n    [checked]=\"checked\"\r\n    class=\"input-radio\"\r\n    type=\"radio\"\r\n    [value]=\"value\"\r\n    [id]=\"id\"\r\n    [name]=\"name\"\r\n    (click)=\"onCheck(value, input)\">\r\n  <span (click)=\"onCheck(value, input)\" class=\"check-mark\"></span>\r\n  <label class=\"label\" [for]=\"id\">{{ label }}</label>\r\n</div>\r\n",
                styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900\");:host::ng-deep{display:block;flex-grow:1}:host::ng-deep .input-container{align-items:center;display:flex;flex-grow:1;padding:.2em .2em 0;position:relative}:host::ng-deep .input-container:not(hover) .check-mark{background-color:#1a1b1d;transition:all .3s ease-in-out}:host::ng-deep .input-container:hover .check-mark{background-color:#333437;transition:all .3s ease-in-out}:host::ng-deep .input-container .input-radio{cursor:pointer;height:2.2em;left:.75em;opacity:0;position:absolute;top:.9em;width:2.2em}:host::ng-deep .input-container .input-radio:checked~.check-mark{background-color:#1a1b1d}:host::ng-deep .input-container .input-radio:checked~.check-mark:after{background-color:#d24077;border-radius:15%;height:.5em;left:.24em;opacity:1;top:.25em;transition:opacity .5s ease-in-out,background-color .5s ease-in-out;visibility:visible;width:.5em}:host::ng-deep .input-container .check-mark{background-color:#d24077;border-radius:15%;cursor:pointer;height:1em;left:0;margin:0 .2em 0 0;position:relative;top:0;width:1em}:host::ng-deep .input-container .check-mark:after{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;content:\"\";opacity:0;pointer-events:none;position:absolute;transition:opacity .5s ease-in-out,background-color .5s ease-in-out;user-select:none;visibility:collapse}:host::ng-deep .input-container .check-mark:after:hover{transform:scale(1.1);transition:all .2s ease-in-out}:host::ng-deep .input-container .label{color:#64666c;font-family:Montserrat,sans-serif;font-size:.6em;font-weight:400}"]
            },] }
];
GlSharedComponentInputOptionSimpleComponent.ctorParameters = () => [];
GlSharedComponentInputOptionSimpleComponent.propDecorators = {
    value: [{ type: Input }],
    id: [{ type: Input }],
    label: [{ type: Input }],
    name: [{ type: Input }],
    checked: [{ type: Input }],
    itemSelected: [{ type: Output }]
};

class GlSharedComponentInputTextSimpleService {
    constructor() {
        this.updateInputMask$ = new Subject();
    }
    updateInputMask() {
        this.updateInputMask$.next();
    }
}
GlSharedComponentInputTextSimpleService.ɵprov = ɵɵdefineInjectable({ factory: function GlSharedComponentInputTextSimpleService_Factory() { return new GlSharedComponentInputTextSimpleService(); }, token: GlSharedComponentInputTextSimpleService, providedIn: "root" });
GlSharedComponentInputTextSimpleService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
GlSharedComponentInputTextSimpleService.ctorParameters = () => [];

class GlSharedComponentInputTextSimpleComponent {
    constructor(service) {
        this.service = service;
        this.disabled = false;
        this.autocomplete = false;
        this.value = null;
        this.decimalSeparator = ',';
        this.allowMinus = true;
        this.rightAlign = true;
        this.step = 5;
        this.maxLength = 255;
        this.currentValue = new EventEmitter();
    }
    onKeyUp(args) {
        if (args.target.value.trim().length > 0) {
            args.target.classList.remove('required-fill');
        }
        this.currentValue.emit({ value: args.target.value });
    }
    ngAfterViewInit() {
        this._input = this.inputElement.nativeElement;
        this.applyInputMask();
        this.service.updateInputMask$.subscribe(() => {
            this.applyInputMask();
        });
    }
    applyInputMask() {
        setTimeout(() => {
            if (this.mask != null && this._input != null) {
                if (this.mask.includes('currency')) {
                    this.inputElement.nativeElement.placeholder = InputMask.currency(this.inputElement.nativeElement, this.mask, this.maskSymbol);
                }
                else if (this.mask === 'percentage' || this.mask === 'numeric') {
                    this.placeholder = InputMask[this.mask](this._input, this.allowMinus, this.decimalSeparator, this.rightAlign, this.step);
                }
                else if (this.mask === 'integer') {
                    this.placeholder = InputMask.integer(this._input, this.allowMinus, this.rightAlign, this.step);
                }
                else if (this.mask === 'custom') {
                    InputMask.customNumberPhone(this.placeholder, this._input, this.rightAlign);
                }
            }
            else if (this._input != null) {
                InputMask.remove(this._input);
            }
        }, 0);
    }
    ngOnDestroy() {
        this.service.updateInputMask$.observers.map(x => x.complete);
    }
}
GlSharedComponentInputTextSimpleComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-input-text-simple',
                template: "<!--suppress HtmlFormInputWithoutLabel -->\r\n<input\r\n  #inputElement\r\n  class=\"item-content {{ itemContentAlignment }} {{ class }}\"\r\n  type=\"text\"\r\n  autocomplete=\"off\"\r\n  required\r\n  [id]=\"id\"\r\n  [value]=\"value\"\r\n  [placeholder]=\"placeholder\"\r\n  (keyup)=\"onKeyUp($event)\"\r\n  [disabled]=\"disabled\"\r\n  [maxLength]=\"maxLength\">\r\n",
                styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900\");.required-fill{background-color:rgba(210,64,119,.3)!important;border-color:#e64949!important;color:#fff!important;transition:all .2s ease-in-out}.required-fill::-moz-placeholder{color:hsla(0,0%,100%,.3)!important}.required-fill:-ms-input-placeholder{color:hsla(0,0%,100%,.3)!important}.required-fill::placeholder{color:hsla(0,0%,100%,.3)!important}.error-highlight{background-color:rgba(210,64,119,.3)!important;border-color:#e64949!important;color:#fff!important;transition:all .2s ease-in-out}.error-highlight::-moz-placeholder{color:hsla(0,0%,100%,.3)!important}.error-highlight:-ms-input-placeholder{color:hsla(0,0%,100%,.3)!important}.error-highlight::placeholder{color:hsla(0,0%,100%,.3)!important}:host::ng-deep{align-items:stretch;display:flex;flex:1 0 auto;flex-direction:column;position:relative}:host::ng-deep .item-content{background-color:#333437;border:none;color:#fff;flex-grow:1;font-family:Montserrat,sans-serif;font-size:.45em;font-weight:400;padding:.8em}:host::ng-deep .item-content:focus{outline:none!important}:host::ng-deep .item-content::-moz-placeholder{color:#64666c!important}:host::ng-deep .item-content::placeholder{color:#64666c!important}:host::ng-deep .item-content.left{text-align:left}:host::ng-deep .item-content.center{text-align:center}:host::ng-deep .item-content.right{text-align:right}:host::ng-deep .item-content.light{background-color:rgba(0,0,0,.1)}:host::ng-deep .item-content.light::-moz-placeholder{color:hsla(0,0%,100%,.2)!important}:host::ng-deep .item-content.light:-ms-input-placeholder{color:hsla(0,0%,100%,.2)!important}:host::ng-deep .item-content.light::placeholder{color:hsla(0,0%,100%,.2)!important}:host::ng-deep .item-content.dark{background-color:#161617}:host::ng-deep .item-content:-ms-input-placeholder{color:#64666c!important}:host::ng-deep .item-content.light:-ms-input-placeholder{color:grey!important}"]
            },] }
];
GlSharedComponentInputTextSimpleComponent.ctorParameters = () => [
    { type: GlSharedComponentInputTextSimpleService }
];
GlSharedComponentInputTextSimpleComponent.propDecorators = {
    inputElement: [{ type: ViewChild, args: ['inputElement', { read: ElementRef, static: true },] }],
    disabled: [{ type: Input }],
    autocomplete: [{ type: Input }],
    id: [{ type: Input }],
    placeholder: [{ type: Input }],
    itemContentAlignment: [{ type: Input }],
    class: [{ type: Input }],
    value: [{ type: Input }],
    mask: [{ type: Input }],
    decimalSeparator: [{ type: Input }],
    allowMinus: [{ type: Input }],
    rightAlign: [{ type: Input }],
    step: [{ type: Input }],
    maskSymbol: [{ type: Input }],
    maxLength: [{ type: Input }],
    currentValue: [{ type: Output }],
    onKeyUp: [{ type: Output }]
};

class GlSharedComponentInputTextLabelButtonContainerComponent {
    constructor() {
        this.disabled = false;
        this.autocomplete = false;
        this.value = null;
        this.decimalSeparator = ',';
        this.allowMinus = true;
        this.rightAlign = true;
        this.step = 5;
        this.maxLength = 255;
        this.requiredLabel = 'Required field';
        this.currentValue = new EventEmitter();
    }
    onKeyUp(values) { this.currentValue.emit(values); }
}
GlSharedComponentInputTextLabelButtonContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-input-text-label-button-container',
                template: "<div class=\"item-container\">\r\n  <gl-shared-component-title-label-button-container\r\n    [labelValue]=\"labelValue\"\r\n    [id]=\"id\"\r\n    [labelAlignment]=\"labelAlignment\"\r\n    [required]=\"required\"\r\n    [class]=\"class\"\r\n    [requiredFieldDescription]=\"requiredLabel\">\r\n    <div class=\"button-container\">\r\n      <ng-content></ng-content>\r\n    </div>\r\n  </gl-shared-component-title-label-button-container>\r\n  <gl-shared-component-input-text-simple\r\n    [class]=\"class\"\r\n    [value]=\"value\"\r\n    [id]=\"id\"\r\n    [itemContentAlignment]=\"itemContentAlignment\"\r\n    [placeholder]=\"placeholder\"\r\n    (currentValue)=\"onKeyUp($event)\"\r\n    [disabled]=\"disabled\"\r\n    [autocomplete]=\"autocomplete\"\r\n\r\n    [mask]=\"mask\"\r\n    [maskSymbol]=\"maskSymbol\"\r\n    [allowMinus]=\"allowMinus\"\r\n    [rightAlign]=\"rightAlign\"\r\n    [step]=\"step\"\r\n    [decimalSeparator]=\"decimalSeparator\"\r\n    [maxLength]=\"maxLength\"\r\n  ></gl-shared-component-input-text-simple>\r\n</div>\r\n",
                styles: [":host::ng-deep{display:flex;flex:1 0 auto}:host::ng-deep .item-container{align-items:stretch;display:flex;flex:1 0 auto;flex-direction:column;position:relative}:host::ng-deep .item-container gl-shared-component-title-label-button-container{margin:0}:host::ng-deep .item-container gl-shared-component-title-label-button-container .button-container{align-items:center;display:flex;margin:0 .6em 0 0}"]
            },] }
];
GlSharedComponentInputTextLabelButtonContainerComponent.ctorParameters = () => [];
GlSharedComponentInputTextLabelButtonContainerComponent.propDecorators = {
    disabled: [{ type: Input }],
    autocomplete: [{ type: Input }],
    id: [{ type: Input }],
    labelAlignment: [{ type: Input }],
    labelValue: [{ type: Input }],
    placeholder: [{ type: Input }],
    itemContentAlignment: [{ type: Input }],
    class: [{ type: Input }],
    value: [{ type: Input }],
    mask: [{ type: Input }],
    decimalSeparator: [{ type: Input }],
    maskSymbol: [{ type: Input }],
    allowMinus: [{ type: Input }],
    rightAlign: [{ type: Input }],
    step: [{ type: Input }],
    maxLength: [{ type: Input }],
    required: [{ type: Input }],
    requiredLabel: [{ type: Input }],
    currentValue: [{ type: Output }]
};

class GlSharedComponentInputTextLabelSimpleComponent {
    constructor() {
        this.disabled = false;
        this.autocomplete = false;
        this.value = null;
        this.allowMinus = true;
        this.rightAlign = true;
        this.step = 5;
        this.decimalSeparator = ',';
        this.maxLength = 255;
        this.requiredLabel = 'Required field';
        this.currentValue = new EventEmitter();
    }
    onKeyUp(values) { this.currentValue.emit(values); }
}
GlSharedComponentInputTextLabelSimpleComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-input-text-label-simple',
                template: "<div class=\"item-container\">\r\n  <gl-shared-component-title-label-simple\r\n    [id]=\"id\"\r\n    [labelValue]=\"labelValue\"\r\n    [labelAlignment]=\"labelAlignment\"\r\n    [required]=\"required\"\r\n    [class]=\"class\"\r\n    [requiredLabel]=\"requiredLabel\"\r\n  ></gl-shared-component-title-label-simple>\r\n  <gl-shared-component-input-text-simple\r\n    [class]=\"class\"\r\n    [value]=\"value\"\r\n    [id]=\"id\"\r\n    [itemContentAlignment]=\"itemContentAlignment\"\r\n    [placeholder]=\"placeholder\"\r\n    (currentValue)=\"onKeyUp($event)\"\r\n    [disabled]=\"disabled\"\r\n    [autocomplete]=\"autocomplete\"\r\n    [allowMinus]=\"allowMinus\"\r\n    [rightAlign]=\"rightAlign\"\r\n    [step]=\"step\"\r\n    [decimalSeparator]=\"decimalSeparator\"\r\n\r\n    [mask]=\"mask\"\r\n    [maskSymbol]=\"maskSymbol\"\r\n    [maxLength]=\"maxLength\"\r\n  ></gl-shared-component-input-text-simple>\r\n</div>\r\n",
                styles: [":host::ng-deep{display:flex;flex:1 0 auto}:host::ng-deep .item-container{align-items:stretch;display:flex;flex:1 0 auto;flex-direction:column;position:relative}:host::ng-deep .item-container ::ng-deep gl-shared-component-input-text-simple{margin:0}"]
            },] }
];
GlSharedComponentInputTextLabelSimpleComponent.ctorParameters = () => [];
GlSharedComponentInputTextLabelSimpleComponent.propDecorators = {
    disabled: [{ type: Input }],
    autocomplete: [{ type: Input }],
    id: [{ type: Input }],
    labelAlignment: [{ type: Input }],
    labelValue: [{ type: Input }],
    placeholder: [{ type: Input }],
    itemContentAlignment: [{ type: Input }],
    class: [{ type: Input }],
    value: [{ type: Input }],
    allowMinus: [{ type: Input }],
    rightAlign: [{ type: Input }],
    step: [{ type: Input }],
    mask: [{ type: Input }],
    decimalSeparator: [{ type: Input }],
    maskSymbol: [{ type: Input }],
    maxLength: [{ type: Input }],
    required: [{ type: Input }],
    requiredLabel: [{ type: Input }],
    currentValue: [{ type: Output }]
};

class GlSharedComponentInputTextAreaLabelComponent {
    constructor() {
        this.disabled = false;
        this.value = '';
        this.requiredLabel = 'Required label';
        this.currentValue = new EventEmitter();
    }
    onKeyUp(values) {
        this.currentValue.emit(values);
    }
}
GlSharedComponentInputTextAreaLabelComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-input-text-area-label',
                template: "<gl-shared-component-input-text-area-simple\r\n  [class]=\"class\"\r\n  [id]=\"id\"\r\n  [placeholder]=\"placeholder\"\r\n  [itemContentAlignment]=\"itemContentAlignment\"\r\n  (currentValue)=\"onKeyUp($event)\"\r\n  [value]=\"value\"\r\n  [disabled]=\"disabled\"\r\n  [maxLength]=\"maxLength\">\r\n  <gl-shared-component-title-label-simple\r\n    [class]=\"class\"\r\n    [labelAlignment]=\"labelAlignment\"\r\n    [id]=\"id\"\r\n    [labelValue]=\"labelValue\"\r\n    [required]=\"required\"\r\n    [requiredLabel]=\"requiredLabel\"\r\n  ></gl-shared-component-title-label-simple>\r\n</gl-shared-component-input-text-area-simple>\r\n",
                styles: [":host::ng-deep{display:flex;flex-grow:1}"]
            },] }
];
GlSharedComponentInputTextAreaLabelComponent.ctorParameters = () => [];
GlSharedComponentInputTextAreaLabelComponent.propDecorators = {
    disabled: [{ type: Input }],
    id: [{ type: Input }],
    labelAlignment: [{ type: Input }],
    labelValue: [{ type: Input }],
    placeholder: [{ type: Input }],
    itemContentAlignment: [{ type: Input }],
    class: [{ type: Input }],
    value: [{ type: Input }],
    maxLength: [{ type: Input }],
    required: [{ type: Input }],
    requiredLabel: [{ type: Input }],
    currentValue: [{ type: Output }]
};

class GlSharedComponentInputTextAreaSimpleComponent {
    constructor() {
        this.disabled = false;
        this.value = '';
        this.currentValue = new EventEmitter();
    }
    onKeyUp(args) {
        const value = args.target.value;
        if (value.trim().length > 0) {
            this.textArea.nativeElement.classList.remove('required-fill');
        }
        this.currentValue.emit({ value });
    }
}
GlSharedComponentInputTextAreaSimpleComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-input-text-area-simple',
                template: "<div class=\"item-container\">\r\n  <ng-content></ng-content>\r\n  <!--suppress HtmlFormInputWithoutLabel -->\r\n  <textarea\r\n    #textArea\r\n    class=\"item-content {{ itemContentAlignment }} {{ class }}\"\r\n    [id]=\"id\"\r\n    [placeholder]=\"placeholder\"\r\n    (keyup)=\"onKeyUp($event)\"\r\n    [value]=\"value\"\r\n    [disabled]=\"disabled\"\r\n    [maxLength]=\"maxLength\"\r\n  ></textarea>\r\n</div>\r\n",
                styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900\");:host::ng-deep .item-container .item-content::-webkit-scrollbar,:host::ng-deep .item-container .item-content::-webkit-scrollbar:horizontal{width:.6em}:host::ng-deep .item-container .item-content::-webkit-scrollbar-button{background-color:#333437;display:none!important}:host::ng-deep .item-container .item-content::-webkit-scrollbar-track-piece{box-shadow:inset 0 0 7em 7em #2c2c2f}:host::ng-deep .item-container .item-content::-webkit-scrollbar-thumb,:host::ng-deep .item-container .item-content::-webkit-scrollbar-track-piece{background-color:transparent!important;border-bottom:.1em solid transparent;border-left:.2em solid transparent;border-radius:.3em .2em .2em .3em;border-right:0;border-top:.1em solid transparent}:host::ng-deep .item-container .item-content::-webkit-scrollbar-thumb{box-shadow:inset 0 0 7em 7em #38393c}:host::ng-deep .item-container .item-content::-webkit-scrollbar-corner{background-color:#64666c!important}.required-fill{background-color:rgba(210,64,119,.3)!important;border-color:#e64949!important;color:#fff!important;transition:all .2s ease-in-out}.required-fill::-moz-placeholder{color:hsla(0,0%,100%,.3)!important}.required-fill:-ms-input-placeholder{color:hsla(0,0%,100%,.3)!important}.required-fill::placeholder{color:hsla(0,0%,100%,.3)!important}.error-highlight{background-color:rgba(210,64,119,.3)!important;border-color:#e64949!important;color:#fff!important;transition:all .2s ease-in-out}.error-highlight::-moz-placeholder{color:hsla(0,0%,100%,.3)!important}.error-highlight:-ms-input-placeholder{color:hsla(0,0%,100%,.3)!important}.error-highlight::placeholder{color:hsla(0,0%,100%,.3)!important}:host::ng-deep{display:flex;flex:1 0 auto}:host::ng-deep .item-container{align-items:stretch;display:flex;flex:1 0 auto;flex-direction:column;position:relative}:host::ng-deep .item-container gl-shared-component-title-label-simple{flex-grow:0}:host::ng-deep .item-container .item-content{background-color:#333437;border:none;color:#fff;flex-grow:1;font-family:Montserrat,sans-serif;font-size:.45em;font-weight:300;overflow-x:hidden;overflow-y:auto;padding:.8em;resize:none;text-align:left}:host::ng-deep .item-container .item-content::-webkit-scrollbar{width:1em}:host::ng-deep .item-container .item-content:focus{outline:none!important}:host::ng-deep .item-container .item-content::-moz-placeholder{color:#64666c}:host::ng-deep .item-container .item-content:-ms-input-placeholder{color:#64666c}:host::ng-deep .item-container .item-content::placeholder{color:#64666c}:host::ng-deep .item-container .item-content.light{background-color:rgba(0,0,0,.1)}:host::ng-deep .item-container .item-content.dark{background-color:#161617}:host::ng-deep .item-container .item-content:-ms-input-placeholder{color:#64666c!important}:host::ng-deep .item-container .item-content.light:-ms-input-placeholder{color:hsla(0,0%,100%,.2)!important}"]
            },] }
];
GlSharedComponentInputTextAreaSimpleComponent.ctorParameters = () => [];
GlSharedComponentInputTextAreaSimpleComponent.propDecorators = {
    textArea: [{ type: ViewChild, args: ['textArea', { read: ElementRef, static: true },] }],
    disabled: [{ type: Input }],
    id: [{ type: Input }],
    labelAlignment: [{ type: Input }],
    labelValue: [{ type: Input }],
    placeholder: [{ type: Input }],
    itemContentAlignment: [{ type: Input }],
    class: [{ type: Input }],
    value: [{ type: Input }],
    maxLength: [{ type: Input }],
    currentValue: [{ type: Output }]
};

class GlSharedComponentLogoSquareComponent {
    constructor() {
        this.horizontalPosition = 'left';
        this.verticalPosition = 'top';
    }
}
GlSharedComponentLogoSquareComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-logo-square',
                template: "<img\r\n  class=\"logo {{ horizontalPosition == 'right' ? 'right' : 'left' }} {{ verticalPosition == 'bottom' ? 'bottom' : 'top' }}\"\r\n  [src]=\"imageScr\"\r\n  [alt]=\"imageAlt\">\r\n",
                styles: [":host::ng-deep .logo{height:3em;opacity:.1;position:absolute;width:3em}:host::ng-deep .logo.top{top:1em}:host::ng-deep .logo.right{right:1em}:host::ng-deep .logo.bottom{bottom:1em}:host::ng-deep .logo.left{left:1em}"]
            },] }
];
GlSharedComponentLogoSquareComponent.ctorParameters = () => [];
GlSharedComponentLogoSquareComponent.propDecorators = {
    imageScr: [{ type: Input }],
    imageAlt: [{ type: Input }],
    horizontalPosition: [{ type: Input }],
    verticalPosition: [{ type: Input }]
};

class GlSharedComponentModalAttachmentLinkComponent {
    constructor(service) {
        this.service = service;
        this.subtitle = ': link';
        this.fileNameLabel = 'File name';
        this.fileNamePlaceholder = 'Type the file name';
        this.linkPlaceholder = 'Type the file link';
        this.cancelInnerValue = 'Cancel';
    }
}
GlSharedComponentModalAttachmentLinkComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-modal-attachment-link',
                template: "<div\r\n  *ngIf=\"service.showModal\"\r\n  (keyup)=\"service.onModalKeyUp($event)\"\r\n  id=\"modal-attachment-link\"\r\n  class=\"modal-link-container {{ service.modalClass }}\">\r\n  <div class=\"modal-main-content\">\r\n    <gl-shared-component-modal-header\r\n      [title]=\"title\"\r\n      [subtitle]=\"subtitle\"\r\n      [modalLogo]=\"modalLogo\"\r\n    ></gl-shared-component-modal-header>\r\n    <div class=\"modal-input-container\">\r\n      <div class=\"name-container\">\r\n        <label for=\"attachment-link-name\">{{ fileNameLabel }}</label>\r\n        <input\r\n          (keyup)=\"service.onName($event)\"\r\n          id=\"attachment-link-name\"\r\n          type=\"text\"\r\n          [placeholder]=\"fileNamePlaceholder\">\r\n      </div>\r\n      <div class=\"value-container\">\r\n        <label for=\"attachment-link-value\">Link</label>\r\n        <input\r\n          (keyup)=\"service.onUrl($event)\"\r\n          id=\"attachment-link-value\"\r\n          type=\"text\"\r\n          [placeholder]=\"linkPlaceholder\">\r\n      </div>\r\n    </div>\r\n    <div class=\"button-container\">\r\n      <gl-shared-component-input-button-simple\r\n        (click)=\"service.onCancel()\"\r\n        class=\"cancel\"\r\n        [innerValue]=\"cancelInnerValue\"\r\n        value=\"cancel\"\r\n      ></gl-shared-component-input-button-simple>\r\n      <gl-shared-component-input-button-simple\r\n        (click)=\"service.onConfirm()\"\r\n        class=\"ok\"\r\n        innerValue=\"OK\"\r\n        value=\"ok\"\r\n      ></gl-shared-component-input-button-simple>\r\n    </div>\r\n    <div class=\"modal-footer\"></div>\r\n  </div>\r\n</div>\r\n",
                styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900\");:host::ng-deep .modal-link-container{-webkit-animation:show-modal .5s ease-in-out;-webkit-animation-fill-mode:forwards;align-items:center;animation:show-modal .5s ease-in-out;animation-fill-mode:forwards;background:rgba(0,0,0,.8);display:flex;height:0;justify-items:center;left:0;min-height:100vh;min-width:100vw;position:fixed;top:0;z-index:99999}@-webkit-keyframes show-modal{0%{opacity:0}to{opacity:1}}:host::ng-deep .modal-link-container>.modal-main-content{opacity:1!important;transition:all .5s ease-in-out;transition-delay:.5s}:host::ng-deep .modal-link-container .modal-main-content{align-items:stretch;background:#020202;display:flex;flex-direction:column;height:-webkit-max-content;height:-moz-max-content;height:max-content;height:1em;justify-content:stretch;margin:0 auto;max-width:36em;min-height:10em;opacity:0;width:30vw;word-wrap:break-word}:host::ng-deep .modal-link-container .modal-main-content .modal-input-container{align-items:stretch;display:flex;flex-direction:column;flex-grow:1;justify-content:center;padding:.5em}:host::ng-deep .modal-link-container .modal-main-content .modal-input-container .name-container,:host::ng-deep .modal-link-container .modal-main-content .modal-input-container .value-container{align-content:center;align-items:stretch;display:flex;justify-content:center;position:relative}:host::ng-deep .modal-link-container .modal-main-content .modal-input-container .name-container label,:host::ng-deep .modal-link-container .modal-main-content .modal-input-container .value-container label{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;color:grey;font-family:Montserrat,sans-serif;font-size:.4em;font-weight:400;left:.8em;padding:.5em;position:absolute;text-transform:none;user-select:none}:host::ng-deep .modal-link-container .modal-main-content .modal-input-container .name-container input,:host::ng-deep .modal-link-container .modal-main-content .modal-input-container .value-container input{background-color:transparent;border:none;border-bottom:1px solid;border-image-slice:.5;border-image-source:linear-gradient(90deg,rgba(210,64,119,.8),rgba(97,61,149,.8));color:#fff;flex-grow:1;font-family:Montserrat,sans-serif;font-size:.5em;font-weight:700;height:2.2em;margin:0;padding:1em;text-align:left}:host::ng-deep .modal-link-container .modal-main-content .modal-input-container .name-container{margin-bottom:.1em}:host::ng-deep .modal-link-container .modal-main-content .button-container{align-items:stretch;display:flex;justify-content:center}:host::ng-deep .modal-link-container .modal-main-content .button-container gl-shared-component-input-button-simple{margin:0 .1em;max-width:33.33333%}:host::ng-deep .modal-link-container .modal-main-content .modal-footer{background-color:#0e0e0f;border-image-slice:.5;border-image-source:linear-gradient(90deg,rgba(210,64,119,.8),rgba(97,61,149,.8));border-top:1px solid;height:.5em;margin:.2em 0 0;width:100%}:host::ng-deep .hide-modal{-webkit-animation:hide-modal .3s ease-in-out;-webkit-animation-fill-mode:forwards;animation:hide-modal .3s ease-in-out;animation-fill-mode:forwards}@-webkit-keyframes hide-modal{0%{opacity:1}to{opacity:0}}@keyframes hide-modal{0%{opacity:1}to{opacity:0}}:host::ng-deep .show-modal{-webkit-animation:show-modal .3s ease-in-out;-webkit-animation-fill-mode:forwards;animation:show-modal .3s ease-in-out;animation-fill-mode:forwards}@keyframes show-modal{0%{opacity:0}to{opacity:1}}"]
            },] }
];
GlSharedComponentModalAttachmentLinkComponent.ctorParameters = () => [
    { type: GlSharedComponentModalAttachmentLinkService }
];
GlSharedComponentModalAttachmentLinkComponent.propDecorators = {
    title: [{ type: Input }],
    subtitle: [{ type: Input }],
    modalLogo: [{ type: Input }],
    fileNameLabel: [{ type: Input }],
    fileNamePlaceholder: [{ type: Input }],
    linkPlaceholder: [{ type: Input }],
    cancelInnerValue: [{ type: Input }]
};

class GlSharedComponentModalAlertComponent {
    constructor(service) {
        this.service = service;
        this.innerValueNo = 'No';
        this.innerValueYes = 'Yes';
        this.innerValueOK = 'OK';
        this.noValue = 'no';
        this.yesValue = 'yes';
        this.okValue = 'ok';
    }
}
GlSharedComponentModalAlertComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-modal-alert',
                template: "<div\r\n  *ngIf=\"service.showModal\"\r\n  glAutoFocus\r\n  (keydown)=\"service.onModalKeyUp($event)\"\r\n  id=\"modal\"\r\n  class=\"modal-container {{ service.modalClass }}\"\r\n  tabindex=\"-1\">\r\n  <div class=\"modal-main-content\">\r\n    <gl-shared-component-modal-header\r\n      [title]=\"title\"\r\n      [subtitle]=\"subtitle\"\r\n      [modalLogo]=\"modalLogo\"\r\n    ></gl-shared-component-modal-header>\r\n    <div class=\"modal-message-container\">\r\n      <span class=\"modal-message\">{{ service.message }}</span>\r\n    </div>\r\n    <div class=\"button-container\">\r\n      <gl-shared-component-input-button-simple\r\n        *ngIf=\"!service.isOK\"\r\n        class=\"no\"\r\n        (click)=\"service.onNo()\"\r\n        [innerValue]=\"service.customNo == null ? innerValueNo : service.customNo\"\r\n        [value]=\"noValue\"\r\n      ></gl-shared-component-input-button-simple>\r\n      <gl-shared-component-input-button-simple\r\n        *ngIf=\"!service.isOK\"\r\n        class=\"yes\"\r\n        (click)=\"service.onYes()\"\r\n        [innerValue]=\"service.customYes == null ? innerValueYes : service.customYes\"\r\n        [value]=\"yesValue\"\r\n      ></gl-shared-component-input-button-simple>\r\n      <gl-shared-component-input-button-simple\r\n        *ngIf=\"service.isOK\"\r\n        class=\"ok\"\r\n        (click)=\"service.onOk()\"\r\n        [innerValue]=\"innerValueOK\"\r\n        [value]=\"okValue\"\r\n      ></gl-shared-component-input-button-simple>\r\n    </div>\r\n    <div class=\"modal-footer\"></div>\r\n  </div>\r\n</div>\r\n",
                styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900\");:host::ng-deep .modal-container{-webkit-animation:show-modal .5s ease-in-out;-webkit-animation-fill-mode:forwards;align-items:center;animation:show-modal .5s ease-in-out;animation-fill-mode:forwards;background:rgba(0,0,0,.8);display:flex;height:0;justify-items:center;left:0;min-height:100vh;min-width:100vw;position:fixed;top:0;z-index:100000}@-webkit-keyframes show-modal{0%{opacity:0}to{opacity:1}}@keyframes show-modal{0%{opacity:0}to{opacity:1}}:host::ng-deep .modal-container>.modal-main-content{opacity:1!important;transition:all .5s ease-in-out;transition-delay:.5s}:host::ng-deep .modal-container .modal-main-content{align-items:stretch;background:rgba(2,2,2,.5);display:flex;flex-direction:column;height:-webkit-max-content;height:-moz-max-content;height:max-content;height:1em;justify-content:stretch;margin:0 auto;max-width:36em;min-height:10em;opacity:0;width:90vw;word-wrap:break-word}:host::ng-deep .modal-container .modal-main-content .modal-message-container{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;align-items:center;display:flex;flex-grow:1;height:-webkit-max-content;height:-moz-max-content;height:max-content;justify-content:center;margin:1em;user-select:none}:host::ng-deep .modal-container .modal-main-content .modal-message-container .modal-message{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;color:#fff;display:block;font-family:Montserrat,sans-serif;font-size:.6em;font-weight:100;text-align:center;text-transform:unset;user-select:none;white-space:pre-wrap;width:100%}:host::ng-deep .modal-container .modal-main-content .button-container{align-items:stretch;display:flex;height:2em;justify-content:center}:host::ng-deep .modal-container .modal-main-content .button-container gl-shared-component-input-button-simple{margin:0 .2em;max-width:33.33333%}:host::ng-deep .modal-container .modal-main-content .modal-footer{background-color:#0e0e0f;border-image-slice:.5;border-image-source:linear-gradient(90deg,rgba(210,64,119,.8),rgba(97,61,149,.8));border-top:1px solid;height:.5em;margin:.2em 0 0;width:100%}:host::ng-deep .hide-modal{-webkit-animation:hide-modal .3s ease-in-out;-webkit-animation-fill-mode:forwards;animation:hide-modal .3s ease-in-out;animation-fill-mode:forwards}@-webkit-keyframes hide-modal{0%{opacity:1}to{opacity:0}}@keyframes hide-modal{0%{opacity:1}to{opacity:0}}@media screen and (min-device-width:1024px) and (orientation:landscape){:host::ng-deep .modal-container .modal-main-content{width:30vw}:host::ng-deep .modal-container .modal-main-content gl-shared-component-input-button-simple{margin:0 .2em;max-width:10vw}}"]
            },] }
];
GlSharedComponentModalAlertComponent.ctorParameters = () => [
    { type: GlSharedComponentModalAlertService }
];
GlSharedComponentModalAlertComponent.propDecorators = {
    title: [{ type: Input }],
    subtitle: [{ type: Input }],
    modalLogo: [{ type: Input }],
    innerValueNo: [{ type: Input }],
    innerValueYes: [{ type: Input }],
    innerValueOK: [{ type: Input }],
    noValue: [{ type: Input }],
    yesValue: [{ type: Input }],
    okValue: [{ type: Input }]
};

class GlSharedComponentModalLoadingService {
    constructor() {
        this._defaultMessage = 'Loading... please wait...';
        this.defaultMessage = 'Loading... please wait...';
        this._loadingStatus = this.defaultMessage;
        this._showLoading = true;
    }
    checkElement() {
        return new Promise(resolve => {
            if (this._mainLoading == null) {
                const loadingInterval = setInterval(() => {
                    this._mainLoading = document.querySelector('.main-loading');
                    if (this._mainLoading != null) {
                        clearInterval(loadingInterval);
                        resolve();
                    }
                }, 1);
            }
            else {
                resolve();
            }
        });
    }
    setup(mainLoading) {
        this._mainLoading = mainLoading;
    }
    hide() {
        this.checkElement().then(() => {
            this._mainLoading.classList.add('hide-loading');
            setTimeout(() => {
                this._showLoading = false;
                this.status(null);
            }, 1100);
        });
    }
    show(status) {
        this.checkElement().then(() => {
            if (status != null) {
                this.status(status);
            }
            else {
                this.status(null);
            }
            this._mainLoading.classList.remove('hide-loading');
            this._showLoading = true;
        });
    }
    status(message) {
        this.checkElement().then(() => {
            setTimeout(() => {
                if (message == null || message.trim().length === 0) {
                    if (this.defaultMessage != null && this.defaultMessage.length === 0) {
                        this.defaultMessage = this._defaultMessage;
                    }
                    this._loadingStatus = this.defaultMessage;
                }
                else {
                    this._loadingStatus = message;
                }
            }, 10);
        });
    }
}
GlSharedComponentModalLoadingService.ɵprov = ɵɵdefineInjectable({ factory: function GlSharedComponentModalLoadingService_Factory() { return new GlSharedComponentModalLoadingService(); }, token: GlSharedComponentModalLoadingService, providedIn: "root" });
GlSharedComponentModalLoadingService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
GlSharedComponentModalLoadingService.ctorParameters = () => [];

class GlSharedComponentModalLoadingComponent {
    constructor(service) {
        this.service = service;
        this.loaded = false;
        service.defaultMessage = this.defaultMessage;
    }
    ngAfterViewChecked() {
        const container = document.querySelector('.main-loading');
        if (container != null && !this.loaded) {
            this.service.setup(container);
            this.loaded = true;
        }
    }
}
GlSharedComponentModalLoadingComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-modal-loading',
                template: "<div #mainLoading class=\"main-loading\" *ngIf=\"service._showLoading\">\r\n  <div class=\"loading-container\">\r\n    <div class=\"lds-facebook\"><div></div><div></div><div></div></div>\r\n  </div>\r\n  <div class=\"status-container\">\r\n    <div class=\"user-content\">\r\n      <ng-content></ng-content>\r\n    </div>\r\n    <h2 class=\"subtitle loading-status\">{{ service._loadingStatus }}</h2>\r\n  </div>\r\n</div>\r\n",
                styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900\");:host::ng-deep .main-loading{background:rgba(0,0,0,.85);display:flex;flex-direction:column;height:100vh;justify-content:center;left:0;position:fixed;top:0;width:100vw;z-index:999999999}:host::ng-deep .main-loading .status-container{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;align-items:center;display:flex;flex-direction:column;opacity:.5;text-align:center;user-select:none}:host::ng-deep .main-loading .status-container .user-content{flex-grow:1}:host::ng-deep .main-loading .status-container .loading-status{background:unset;color:#fff;font-family:Montserrat,sans-serif;font-size:.5em;font-weight:300;margin:1em 0 0;white-space:pre-line;width:100%}.loading-container{align-items:center;display:flex;justify-content:center}.hide-loading{opacity:0;transition:all 1s ease-in-out,visibility 1s ease-in-out;visibility:collapse}.lds-facebook{display:inline-block;height:64px;position:relative;width:64px}.lds-facebook div{-webkit-animation:lds-facebook 1.2s cubic-bezier(0,.5,.5,1) infinite;animation:lds-facebook 1.2s cubic-bezier(0,.5,.5,1) infinite;background:#fff;display:inline-block;left:6px;position:absolute;width:13px}.lds-facebook div:first-child{-webkit-animation-delay:-.24s;animation-delay:-.24s;left:6px}.lds-facebook div:nth-child(2){-webkit-animation-delay:-.12s;animation-delay:-.12s;left:26px}.lds-facebook div:nth-child(3){-webkit-animation-delay:0s;animation-delay:0s;left:45px}@-webkit-keyframes lds-facebook{0%{height:51px;top:6px}50%,to{height:26px;top:19px}}@keyframes lds-facebook{0%{height:51px;top:6px}50%,to{height:26px;top:19px}}"]
            },] }
];
GlSharedComponentModalLoadingComponent.ctorParameters = () => [
    { type: GlSharedComponentModalLoadingService }
];
GlSharedComponentModalLoadingComponent.propDecorators = {
    mainLoading: [{ type: ViewChild, args: ['mainLoading', { read: ElementRef, static: true },] }],
    defaultMessage: [{ type: Input }]
};

class GlSharedComponentModalHeaderComponent {
    constructor() { }
}
GlSharedComponentModalHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-modal-header',
                template: "<div class=\"modal-title-container\">\r\n  <div class=\"modal-title-text-container\">\r\n    <h2 class=\"modal-title\">{{ title }}</h2>\r\n    <h2 class=\"modal-title\">{{ subtitle }}</h2>\r\n  </div>\r\n  <img class=\"modal-logo\" [src]=\"modalLogo\" alt=\"Header Logo\">\r\n</div>\r\n",
                styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900\");:host::ng-deep .modal-title-container{align-items:center;background-color:#1a1b1d;border-bottom:1px solid;border-image-slice:.5;border-image-source:linear-gradient(90deg,rgba(210,64,119,.8),rgba(97,61,149,.8));display:flex;font-size:.65em;justify-content:flex-start;padding:.5em 0;text-align:left;width:100%}:host::ng-deep .modal-title-container .modal-logo{height:1.5em;margin:0 .5em;width:1.5em}:host::ng-deep .modal-title-container .modal-title-text-container{align-items:center;display:flex;flex-grow:1;margin:0 1em}:host::ng-deep .modal-title-container .modal-title-text-container .modal-title{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;color:#64666c;font-family:Montserrat,sans-serif;font-weight:400;text-transform:uppercase;user-select:none}:host::ng-deep .modal-title-container .modal-title-text-container .modal-title:first-child{margin:0 .3em 0 0}"]
            },] }
];
GlSharedComponentModalHeaderComponent.ctorParameters = () => [];
GlSharedComponentModalHeaderComponent.propDecorators = {
    title: [{ type: Input }],
    subtitle: [{ type: Input }],
    modalLogo: [{ type: Input }]
};

class GlSharedComponentMenuBackgroundComponent {
    constructor() { }
}
GlSharedComponentMenuBackgroundComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-menu-background',
                template: "<div class=\"menu-background\"></div>\r\n",
                styles: [":host::ng-deep .menu-background{background-color:rgba(0,0,0,.3);height:calc(var(--vh, 1vh)*100);position:fixed;width:calc(var(--vw, 1vw)*100)}"]
            },] }
];
GlSharedComponentMenuBackgroundComponent.ctorParameters = () => [];

class GlSharedComponentMenuService {
    constructor() {
        this.menuHidden = new Subject();
        this.opened = false;
    }
    ngOnDestroy() {
        this.menuHidden.observers.map(x => x.complete());
    }
    initialize(container, background, router) {
        this.container = container;
        this.background = background;
        this.router = router;
        this.menuHidden.next(true);
    }
    close(event) {
        event.preventDefault();
        this.container.classList.remove('menu-active');
        this.background.classList.remove('visible-background');
        this.menuHidden.next(true);
        this.opened = false;
        return false;
    }
    open(event) {
        event.preventDefault();
        this.container.classList.add('menu-active');
        this.background.classList.add('visible-background');
        this.menuHidden.next(false);
        this.opened = true;
        return true;
    }
    goToSettings(url, target = '_blank') {
        window.open(url, target);
    }
    backgroundClick(event) {
        if (this.opened) {
            this.close(event);
        }
    }
}
GlSharedComponentMenuService.ɵprov = ɵɵdefineInjectable({ factory: function GlSharedComponentMenuService_Factory() { return new GlSharedComponentMenuService(); }, token: GlSharedComponentMenuService, providedIn: "root" });
GlSharedComponentMenuService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
GlSharedComponentMenuService.ctorParameters = () => [];

class GlSharedComponentMenuItemComponent {
    constructor(_router, _menu) {
        this._router = _router;
        this._menu = _menu;
        this.itemClass = 'dark';
        this.menuLogo = '../assets/img/logo/glaucio-logo-colored.svg';
        this.src = this.menuLogo;
        this.target = '_self';
        this.$click = new EventEmitter();
    }
    openAbsoluteLink(event, href, target = '_self') {
        this._router.navigate(['/externalRedirect', { externalUrl: href, target }], {
            skipLocationChange: true,
        }).then(() => {
            console.log(`Redirected to: ${href}`);
        });
        event.preventDefault();
    }
    toggleActive() {
        this.active = !this.active;
    }
    onClick(event) {
        if (this.fragment != null) {
            this._menu.close(event);
            const element = document.querySelector(`#${this.fragment}`);
            const scroll = new SmoothScroll(`#${this.fragment}`, {
                speed: 1000,
                speedAsDuration: true,
                easing: 'easeInOutQuad',
                updateURL: true,
                popstate: true
            });
            scroll.animateScroll(element);
            this.$click.emit({ event, href: this.href, fragment: this.fragment });
        }
    }
}
GlSharedComponentMenuItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-menu-item',
                template: "<li class=\"menu-title {{ itemClass }}\" *ngIf=\"!hasSubitem\">\r\n  <img [src]=\"src\" class=\"menu-icons\" [alt]=\"alt\"/>\r\n  <a\r\n    class=\"menu-item\"\r\n    *ngIf=\"absolute\"\r\n    [href]=\"'externalRedirect'\"\r\n    (click)=\"openAbsoluteLink($event, href, target)\"\r\n  >{{ content }}</a>\r\n  <a *ngIf=\"!absolute\"\r\n     class=\"menu-item\"\r\n     [routerLink]=\"href\"\r\n     [fragment]=\"fragment\"\r\n     (click)=\"onClick($event)\"\r\n  >{{ content }}</a>\r\n</li>\r\n\r\n<li class=\"menu-title {{ itemClass }} {{ active ? 'active' : '' }}\" *ngIf=\"hasSubitem\">\r\n  <img [src]=\"src\" class=\"menu-icons\" [alt]=\"alt\"/>\r\n  <div\r\n    class=\"menu-item\"\r\n    (click)=\"toggleActive()\"\r\n  >{{ content }}</div>\r\n  <img src=\"../assets/img/icon/side-menu/arrow-down.svg\" class=\"menu-arrow\" [alt]=\"alt\"/>\r\n</li>\r\n<ol *ngIf=\"hasSubitem && active\" [@fadeInOut] class=\"subitem-container {{ active ? 'active' : '' }}\">\r\n  <li class=\"menu-title adding-row-animated {{ item.class }}\" *ngFor=\"let item of subItems\">\r\n    <img [src]=\"item.src\" class=\"menu-icons\" [alt]=\"item.alt\"/>\r\n    <a\r\n      class=\"menu-item\"\r\n      *ngIf=\"item.absolute\"\r\n      [href]=\"'externalRedirect'\"\r\n      (click)=\"openAbsoluteLink($event, item.href, item.target)\"\r\n    >{{ item.content }}</a>\r\n    <a *ngIf=\"!item.absolute\"\r\n       class=\"menu-item\"\r\n       [routerLink]=\"item.href\"\r\n       [fragment]=\"item.fragment\"\r\n       (click)=\"onClick($event)\"\r\n    >{{ item.content }}</a>\r\n  </li>\r\n</ol>\r\n",
                animations: [
                    trigger('fadeInOut', [
                        state('', style({
                            opacity: 0,
                            height: 0,
                            transform: 'scaleY(0)'
                        })),
                        transition(':enter', [
                            style({
                                opacity: 0,
                                height: 0,
                                transform: 'scaleY(0)'
                            }),
                            animate('0.3s ease-in', style({
                                opacity: 1,
                                height: '*',
                                transform: 'scaleY(1)'
                            }))
                        ]),
                        transition(':leave', [
                            animate(250, style({
                                opacity: 0,
                                height: 0,
                                transform: 'scaleY(0)'
                            }))
                        ])
                    ])
                ],
                styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900\");.adding-row-animated{-webkit-animation:adding-row .5s ease-in-out;-webkit-animation-fill-mode:forwards;-webkit-animation-play-state:running;animation:adding-row .5s ease-in-out;animation-fill-mode:forwards;animation-play-state:running}@-webkit-keyframes adding-row{0%{opacity:0}to{opacity:1}}@keyframes adding-row{0%{opacity:0}to{opacity:1}}.delete-row-animated{max-height:0!important;opacity:0!important;transition:all .2s ease-out}.delete-row-animated-frame{-webkit-animation-duration:.2s;-webkit-animation-fill-mode:forwards!important;-webkit-animation-name:hide;-webkit-animation-play-state:initial;animation-duration:.2s;animation-fill-mode:forwards!important;animation-name:hide;animation-play-state:initial}@-webkit-keyframes hide{0%{opacity:1}to{opacity:0}}@keyframes hide{0%{opacity:1}to{opacity:0}}:host::ng-deep{outline:none!important}:host::ng-deep .menu-title{align-items:center;background:linear-gradient(90deg,rgba(210,64,119,.8),rgba(97,61,149,.8));border-left:.2em solid #d24077;display:flex;margin:0 0 1px;position:relative}:host::ng-deep .menu-title .material-icons{color:hsla(0,0%,100%,.6);font-size:1.2em;margin:0 .5em 0 .3em;padding:.3em}:host::ng-deep .menu-title .menu-icons{height:1.5em;padding:.2em .5em;width:1.5em}:host::ng-deep .menu-title .menu-arrow{height:1em;opacity:.5;padding:.2em .5em;transform:rotate(0deg);transition:all .25s ease-in-out;width:1em}:host::ng-deep .menu-title .menu-item{color:hsla(0,0%,100%,.4);cursor:pointer;flex-grow:1;font-family:Montserrat,sans-serif;font-size:.6em;font-weight:300;max-width:79%;overflow:hidden;padding:1.5em .7em;text-decoration:none;text-overflow:ellipsis;text-transform:uppercase;white-space:nowrap}:host::ng-deep .menu-title.active .menu-arrow{transform:rotate(180deg);transition:all .25s ease-in-out}:host::ng-deep .menu-title:not(hover) .menu-icons{transform:scale(1);transition:all .2s ease-in-out}:host::ng-deep .menu-title:hover .menu-icons{transform:scale(1.2);transition:all .2s ease-in-out}:host::ng-deep .menu-title.dark{border-bottom:1px solid #38393c;border-left:.2em solid transparent;margin:0}:host::ng-deep .menu-title.dark:not(hover){background:#2c2c2f;transition:all .3s ease-in-out}:host::ng-deep .menu-title.dark:hover{background:#4b4d52;transition:all .3s ease-in-out}:host::ng-deep .menu-title.translucid{border-bottom:.5px solid hsla(0,0%,100%,.1);border-left:.2em solid transparent;margin:0}:host::ng-deep .menu-title.translucid:not(hover){background:hsla(0,0%,100%,.05);transition:all .3s ease-in-out}:host::ng-deep .menu-title.translucid:hover{background:hsla(0,0%,100%,.1);transition:all .3s ease-in-out}:host::ng-deep .menu-item,:host::ng-deep .menu-title,:host::ng-deep .subitem-container{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;outline:none!important;user-select:none}:host::ng-deep .subitem-container .menu-title{transform:scaleY(0);transition:all .3s ease-in-out}:host::ng-deep .subitem-container.active .menu-title{transform:scaleY(1);transition:all .3s ease-in-out;transition-delay:.1s}"]
            },] }
];
GlSharedComponentMenuItemComponent.ctorParameters = () => [
    { type: Router },
    { type: GlSharedComponentMenuService }
];
GlSharedComponentMenuItemComponent.propDecorators = {
    itemClass: [{ type: Input }],
    absolute: [{ type: Input }],
    menuLogo: [{ type: Input }],
    src: [{ type: Input }],
    href: [{ type: Input }],
    fragment: [{ type: Input }],
    alt: [{ type: Input }],
    content: [{ type: Input }],
    target: [{ type: Input }],
    hasSubitem: [{ type: Input }],
    active: [{ type: Input }],
    subItems: [{ type: Input }],
    $click: [{ type: Output }]
};

class GlSharedComponentMenuComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
        this.settingsTarget = '_blank';
        this.menuLogo = '../assets/img/logo/glaucio-logo-colored.svg';
        this.menuBottomVersion = '1.0.0';
        this.menuPosition = 'right';
        this.$click = new EventEmitter();
        this.closeButton = '../assets/img/icon/side-menu/close.svg';
        this.settingsButton = '../assets/img/icon/side-menu/admin-settings.svg';
    }
    ngOnInit() {
        this.service.initialize(this.container.nativeElement, this.background.nativeElement, this.router);
    }
}
GlSharedComponentMenuComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-menu',
                template: "<gl-shared-component-menu-background\r\n  #background\r\n  (click)=\"service.backgroundClick($event)\"\r\n></gl-shared-component-menu-background>\r\n<div #container class=\"menu-container {{ className }} {{ menuPosition === 'left' ? 'left' : 'right' }}\">\r\n  <nav class=\"menu-nav-container\">\r\n    <ul class=\"menu-content\">\r\n      <li class=\"menu-header-container\">\r\n        <div class=\"menu-header\">\r\n          <div class=\"menu-top-icons-container\">\r\n            <img id=\"close-menu-button\"\r\n               (click)=\"service.close($event)\"\r\n               [src]=\"closeButton\"\r\n               class=\"menu-icons close-menu\"\r\n               alt=\"Close menu button\">\r\n            <img\r\n              *ngIf=\"showSettings\"\r\n              id=\"settings-menu-button\"\r\n              (click)=\"service.goToSettings(settingsUrl, settingsTarget)\"\r\n              [src]=\"settingsButton\"\r\n              class=\"menu-icons settings-menu\"\r\n              alt=\"Settings menu button\">\r\n          </div>\r\n          <div class=\"menu-header-title\">\r\n            <h1 class=\"title\">{{ title }}</h1>\r\n            <h2 class=\"subtitle\">{{ subtitle }}</h2>\r\n          </div>\r\n        </div>\r\n      </li>\r\n      <li class=\"menu-content-container {{ title?.length > 0 ? 'has-title' : '' }}\">\r\n        <gl-shared-component-menu-item\r\n          *ngFor=\"let menuItem of menuItems\"\r\n          [absolute]=\"menuItem.absolute\"\r\n          [alt]=\"menuItem.alt\"\r\n          [src]=\"menuItem.src\"\r\n          [fragment]=\"menuItem.fragment\"\r\n          [routerLink]=\"menuItem.href\"\r\n          [href]=\"menuItem.href\"\r\n          [content]=\"menuItem.content\"\r\n          [itemClass]=\"menuItem.class\"\r\n          [target]=\"menuItem.target\"\r\n          ($click)=\"$click.emit($event)\"\r\n        ></gl-shared-component-menu-item>\r\n        <gl-shared-component-menu-item\r\n          *ngFor=\"let menuItem of menuItemsComplex\"\r\n          [absolute]=\"menuItem.absolute\"\r\n          [alt]=\"menuItem.alt\"\r\n          [src]=\"menuItem.src\"\r\n          [fragment]=\"menuItem.fragment\"\r\n          [routerLink]=\"menuItem.href\"\r\n          [href]=\"menuItem.href\"\r\n          [content]=\"menuItem.content\"\r\n          [itemClass]=\"menuItem.class\"\r\n          [hasSubitem]=\"menuItem.hasSubitem\"\r\n          [active]=\"menuItem.active\"\r\n          [target]=\"menuItem.target\"\r\n          [subItems]=\"menuItem.subItems\"\r\n          ($click)=\"$click.emit($event)\"\r\n        ></gl-shared-component-menu-item>\r\n      </li>\r\n      <li class=\"logo-main-container\">\r\n        <div class=\"logo-container\">\r\n          <img class=\"main-logo\" [src]=\"menuLogo\" alt=\"Menu Logo\"/>\r\n          <span class=\"main-logo-title\">{{ menuBottomTitle }}</span>\r\n          <span class=\"main-logo-title\">{{ menuBottomVersion == null ? 'Version: ' + systemVersion : menuBottomVersion }}</span>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n  </nav>\r\n</div>\r\n",
                styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900\");:host::ng-deep .menu-container{background:#1a1b1d;background-size:cover;border-bottom:0 solid transparent!important;border-image-slice:.5;border-image-source:linear-gradient(90deg,rgba(210,64,119,.8),rgba(97,61,149,.8));border-top:.3em solid;bottom:0;display:flex;flex-grow:1;height:100vh;height:calc(var(--vh, 1vh)*100);max-width:17em;min-width:17em;overflow:hidden;position:relative;position:fixed;top:0;width:calc(var(--vw, 1vw)*85);z-index:10000}:host::ng-deep .menu-container:after{background:linear-gradient(90deg,rgba(210,64,119,.8),rgba(97,61,149,.8));bottom:.7em;content:\"\";height:.7em;left:0;margin-bottom:-.7em;position:absolute;width:100%}:host::ng-deep .menu-container.left{left:-110%;transition:left .5s ease-in-out}:host::ng-deep .menu-container.right{right:-110%;transition:right .5s ease-in-out}:host::ng-deep .menu-container .a{display:block;min-height:3em}:host::ng-deep .menu-container .menu-nav-container{display:flex;flex-grow:1;max-height:100%;overflow:hidden;scrollbar-width:none}:host::ng-deep .menu-container .menu-nav-container .menu-content{display:flex;flex-direction:column;flex-grow:1;position:relative}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header-container{max-width:17em}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header-container .menu-header{display:flex;flex-direction:column;margin:.5em 1em 1em .5em}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header-container .menu-header .menu-top-icons-container{display:flex;margin:0 0 1.5em}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header-container .menu-header .menu-top-icons-container .close-menu,:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header-container .menu-header .menu-top-icons-container .settings-menu{cursor:pointer;height:1.5em;width:1.5em}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header-container .menu-header .menu-top-icons-container .close-menu:active,:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header-container .menu-header .menu-top-icons-container .close-menu:hover,:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header-container .menu-header .menu-top-icons-container .settings-menu:active,:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header-container .menu-header .menu-top-icons-container .settings-menu:hover{-webkit-animation:increase-decrease .4s ease-in-out;-webkit-animation-fill-mode:forwards;animation:increase-decrease .4s ease-in-out;animation-fill-mode:forwards;opacity:1}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header-container .menu-header .menu-top-icons-container .close-menu{margin:0 .2em 0 0}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header-container .menu-header .menu-header-title .subtitle,:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header-container .menu-header .menu-header-title .title{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;color:#fff;margin:0;overflow:hidden;text-overflow:ellipsis;text-transform:uppercase;user-select:none;white-space:nowrap}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header-container .menu-header .menu-header-title .title{font-family:Montserrat,sans-serif;font-size:.9em;font-weight:700}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header-container .menu-header .menu-header-title .subtitle{font-family:Montserrat,sans-serif;font-size:1.5em;font-weight:100}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header-container .admin-settings{visibility:collapse}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header-container .menu-item-container{background-color:hsla(0,0%,100%,.3);display:flex;flex-direction:column;font-size:.8em}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header-container .menu-item-container .menu-item{align-items:center;display:flex;font-size:.8em;min-height:3em;padding:.2em;transition:all .2s ease-in-out}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header-container .menu-item-container .menu-item:nth-child(n+2){border-image-slice:1;border-image-source:linear-gradient(90deg,transparent 15%,hsla(0,0%,100%,.1) 15.01%,hsla(0,0%,100%,.05) 98%,transparent 0);border-top:1px solid}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header-container .menu-item-container .menu-item:hover{background-color:rgba(75,77,82,.3)}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header-container .menu-item-container .menu-icons{height:1.8em;margin:0 0 0 .7em;opacity:.5;width:1.8em}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header-container .menu-item-container a{color:hsla(0,0%,100%,.6);flex-grow:1;padding:.8em;text-decoration:none}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-content-container{max-height:calc(var(--vh, 1vh)*51);max-width:17em;overflow-x:hidden!important;overflow-y:auto}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-content-container.has-title{max-height:calc(var(--vh, 1vh)*52)}:host::ng-deep .menu-container .menu-nav-container .logo-container{align-items:center;bottom:calc(var(--vh, 1vh)*5);display:flex;flex-direction:column;position:absolute;width:100%}:host::ng-deep .menu-container .menu-nav-container .logo-container .main-logo{height:2em;width:2em}:host::ng-deep .menu-container .menu-nav-container .logo-container .main-logo-title{color:#fff;font-size:.4em;margin:1em 0 0}:host::ng-deep .show-admin-settings{visibility:visible!important}:host::ng-deep .menu-container.menu-active.left{left:0}:host::ng-deep .menu-container.menu-active.right{right:0}:host::ng-deep .menu-background{opacity:0;z-index:-100}:host::ng-deep .visible-background{background:rgba(0,0,0,.6);height:100%;opacity:1;position:fixed;top:0;transition:opacity 1s ease-in-out;width:100%;z-index:999}:host::ng-deep .hide-subtitle{margin:0;opacity:0;padding:0;transition:all .25s ease-in-out;visibility:collapse}:host::ng-deep .show-subtitle{opacity:1;transition:all .25s ease-in-out;transition-delay:.4s;visibility:visible}:host::ng-deep .hide-subtitle-container{-webkit-animation:hide-subtitle .4s ease-in-out;-webkit-animation-fill-mode:forwards;animation:hide-subtitle .4s ease-in-out;animation-fill-mode:forwards}:host::ng-deep .show-subtitle-container{-webkit-animation:show-subtitle .4s ease-in-out;-webkit-animation-fill-mode:forwards;animation:show-subtitle .4s ease-in-out;animation-fill-mode:forwards}:host::ng-deep .collapsed-menu .expand{transform:rotate(0deg);transition:all .4s ease-in-out}:host::ng-deep .collapsed-menu .menu-icons{-webkit-animation:decrease-increase .4s ease-in-out;-webkit-animation-fill-mode:forwards;animation:decrease-increase .4s ease-in-out;animation-fill-mode:forwards}:host::ng-deep .expanded-menu .expand{transform:rotate(-180deg);transition:all .4s ease-in-out}:host::ng-deep .expanded-menu .menu-icons{-webkit-animation:increase-decrease .4s ease-in-out;-webkit-animation-fill-mode:forwards;animation:increase-decrease .4s ease-in-out;animation-fill-mode:forwards}:host::ng-deep .menu-container.dark{border-image-source:none;border-left:1px solid #38393c;border-top:.3em solid rgba(210,64,119,.7)}:host::ng-deep .menu-container.translucid{background:hsla(0,0%,100%,.05);border-image-source:none;border-left:1px solid hsla(0,0%,100%,.05);border-top:.3em solid hsla(0,0%,100%,.1)}@media screen and (min-device-width:240px) and (orientation:portrait){:host::ng-deep .menu-container{font-size:calc(var(--vw, 1vw)*5.88)}}@media screen and (min-device-width:240px) and (orientation:landscape){:host::ng-deep .menu-container{font-size:calc(var(--vw, 1vw)*3)}}@media screen and (min-device-width:700px) and (orientation:landscape){:host::ng-deep .menu-container{font-size:calc(var(--vw, 1vw)*2)}}@media screen and (min-device-width:1024px) and (orientation:landscape){:host::ng-deep .menu-container{font-size:calc(var(--vw, 1vw)*1.5)}}@media screen and (max-device-height:300px) and (orientation:landscape){:host::ng-deep .menu-container .menu-content-container{max-height:calc(var(--vh, 1vh)*60)}:host::ng-deep .menu-container .menu-content-container.has-title{max-height:calc(var(--vh, 1vh)*61)}:host::ng-deep .menu-container .logo-main-container{align-items:center;display:flex;height:2em;position:absolute;right:.5em;top:.3em}:host::ng-deep .menu-container .logo-main-container .logo-container{font-size:.5em;position:static!important}}@media screen and (max-device-height:400px) and (orientation:landscape){:host::ng-deep .menu-container .menu-content-container{max-height:calc(var(--vh, 1vh)*65)}:host::ng-deep .menu-container .menu-content-container.has-title{max-height:calc(var(--vh, 1vh)*66)!important}:host::ng-deep .menu-container .logo-main-container{align-items:center;display:flex;height:2em;position:absolute;right:.5em;top:.3em}:host::ng-deep .menu-container .logo-main-container .logo-container{font-size:.5em;position:static!important}}"]
            },] }
];
GlSharedComponentMenuComponent.ctorParameters = () => [
    { type: GlSharedComponentMenuService },
    { type: Router }
];
GlSharedComponentMenuComponent.propDecorators = {
    container: [{ type: ViewChild, args: ['container', { static: true, read: ElementRef },] }],
    background: [{ type: ViewChild, args: ['background', { static: true, read: ElementRef },] }],
    title: [{ type: Input }],
    subtitle: [{ type: Input }],
    systemVersion: [{ type: Input }],
    menuItems: [{ type: Input }],
    menuItemsComplex: [{ type: Input }],
    showSettings: [{ type: Input }],
    className: [{ type: Input }],
    settingsUrl: [{ type: Input }],
    settingsTarget: [{ type: Input }],
    menuLogo: [{ type: Input }],
    menuBottomTitle: [{ type: Input }],
    menuBottomVersion: [{ type: Input }],
    menuPosition: [{ type: Input }],
    $click: [{ type: Output }]
};

class GlSharedComponentNavigationTabSimpleComponent {
    constructor() {
        this.tabEnabled = true;
        this.activate$ = new EventEmitter();
    }
    activate(sequence) {
        if (this.tabEnabled) {
            this.activate$.emit(sequence);
        }
    }
}
GlSharedComponentNavigationTabSimpleComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-navigation-tab-simple',
                template: "<div class=\"navigation-tab {{ tabEnabled ? '' : 'disabled' }} {{ tabActive ? 'active' : '' }} {{ tabIsTheFirst ? 'first-item' : '' }} {{ tabIsTheLast ? 'last-item' : '' }}\"\r\n     (click)=\"activate(tabSequence)\">\r\n  <div class=\"tab-sequence\">\r\n    <span class=\"tab-sequence-content\">{{ tabSequence }}</span>\r\n  </div>\r\n  <span class=\"tab-description\">{{ tabDescription }}</span>\r\n</div>\r\n<div class=\"border-bottom\"></div>\r\n",
                styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900\");:host::ng-deep{background-color:#27272a;display:flex;flex:1 1 0;flex-direction:column}:host::ng-deep .navigation-tab{align-items:center;background-color:#27272a;display:flex;margin:.2em 0 0;transition:all .2s ease-in-out}:host::ng-deep .navigation-tab.disabled{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;cursor:not-allowed;user-select:none}:host::ng-deep .navigation-tab .tab-sequence{align-items:center;background-color:#333437;border-radius:.2em;color:#64666c;display:flex;height:1em;justify-content:center;margin:.25em .5em .25em .25em;transition:all .2s ease-in;width:1em;z-index:100}:host::ng-deep .navigation-tab .tab-sequence .tab-sequence-content{font-size:.5em;font-weight:400;z-index:100}:host::ng-deep .navigation-tab .tab-description,:host::ng-deep .navigation-tab .tab-sequence .tab-sequence-content{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;font-family:Montserrat,sans-serif;transition:all .2s ease-in;user-select:none}:host::ng-deep .navigation-tab .tab-description{color:#64666c;font-size:.6em;font-weight:100;text-transform:uppercase}:host::ng-deep .navigation-tab.active{background-color:#333437;border-top-left-radius:.2em;border-top-right-radius:.2em;position:relative;transition:all .2s ease-in-out;z-index:1000}:host::ng-deep .navigation-tab.active.first-item{margin:.2em 0 0 .4em;transition:all .2s ease-in-out}:host::ng-deep .navigation-tab.active.last-item{margin:.2em .4em 0 0;transition:all .2s ease-in-out}:host::ng-deep .navigation-tab.active:after,:host::ng-deep .navigation-tab.active:before{bottom:0;content:\"\";height:.4em;position:absolute;transition:all .2s ease-in-out;width:.75em}:host::ng-deep .navigation-tab.active:before{border-radius:0 0 .4em 0;box-shadow:.4em 0 0 0 #333437;left:-.75em;transition:all .2s ease-in-out}:host::ng-deep .navigation-tab.active:after{border-radius:0 0 0 .4em;box-shadow:-.4em 0 0 0 #333437;right:-.75em;transition:all .2s ease-in-out}:host::ng-deep .navigation-tab.active .tab-sequence{background-color:#fff;transition:all .2s ease-in-out}:host::ng-deep .navigation-tab.active .tab-description{color:#fff;transition:all .2s ease-in-out}:host::ng-deep .navigation-tab:not(.active):hover{background-color:#2c2c2f;border-top-left-radius:.2em;border-top-right-radius:.2em;margin:.2em 0 0;position:relative;transition:all .2s ease-in-out;z-index:1}:host::ng-deep .navigation-tab:not(.active):hover:after,:host::ng-deep .navigation-tab:not(.active):hover:before{bottom:0;content:\"\";height:.4em;position:absolute;transition:all .2s ease-in-out;transition-delay:.5s;width:.75em;z-index:0}:host::ng-deep .navigation-tab:not(.active):hover:before{border-radius:0 0 .4em 0;box-shadow:.4em 0 0 0 #2c2c2f;left:-.75em;transition:all .2s ease-in;transition-delay:.5s}:host::ng-deep .navigation-tab:not(.active):hover:after{border-radius:0 0 0 .4em;box-shadow:-.4em 0 0 0 #2c2c2f;right:-.75em;transition:all .2s ease-in;transition-delay:.5s}:host::ng-deep .navigation-tab:not(.active):hover .tab-description{color:#fff;transition:all .2s ease-in}:host::ng-deep .border-bottom{background-color:#333437;height:.2em}"]
            },] }
];
GlSharedComponentNavigationTabSimpleComponent.ctorParameters = () => [];
GlSharedComponentNavigationTabSimpleComponent.propDecorators = {
    tabActive: [{ type: Input }],
    showSeparator: [{ type: Input }],
    tabSequence: [{ type: Input }],
    tabDescription: [{ type: Input }],
    tabIsTheFirst: [{ type: Input }],
    tabIsTheLast: [{ type: Input }],
    tabEnabled: [{ type: Input }],
    activate$: [{ type: Output }]
};

class GlSharedComponentNavigationTabContainerComponent {
    constructor() {
        this.activatedTab$ = new EventEmitter();
    }
    activate(sequence) {
        this.reset();
        const active = this.navigationTabs.filter(x => x.sequence === sequence);
        active[0].active = true;
        this.activatedTab$.emit(sequence);
    }
    reset() {
        for (const item of this.navigationTabs) {
            item.active = false;
        }
    }
    tabHovering(hovering, sequence, active) {
        const tab = document.querySelector(`#navigation-tab-${sequence}`);
        if (!active) {
            if (hovering) {
                tab.style.zIndex = '990';
            }
            else {
                tab.style.zIndex = (100 - sequence).toString();
            }
        }
    }
}
GlSharedComponentNavigationTabContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-navigation-tab-container',
                template: "<gl-shared-component-navigation-tab-simple\r\n  *ngFor=\"let tab of navigationTabs; let i = index\"\r\n  [tabEnabled]=\"tab.enabled\"\r\n  [tabSequence]=\"tab.sequence\"\r\n  [tabDescription]=\"tab.description\"\r\n  [tabActive]=\"tab.active\"\r\n  [showSeparator]=\"tab.showSeparator\"\r\n  [tabIsTheFirst]=\"tab.isTheFirst\"\r\n  [tabIsTheLast]=\"tab.isTheLast\"\r\n  [ngStyle]=\"{\r\n    'z-index': tab.active ? 1000 : (100 - tab.sequence)\r\n  }\"\r\n  [id]=\"'navigation-tab-' + tab.sequence\"\r\n  (mouseover)=\"tabHovering(true, tab.sequence, tab.active)\"\r\n  (mouseleave)=\"tabHovering(false, tab.sequence, tab.active)\"\r\n  (activate$)=\"activate($event)\"\r\n></gl-shared-component-navigation-tab-simple>\r\n",
                styles: [":host::ng-deep{display:flex;flex-direction:row}"]
            },] }
];
GlSharedComponentNavigationTabContainerComponent.ctorParameters = () => [];
GlSharedComponentNavigationTabContainerComponent.propDecorators = {
    navigationTabs: [{ type: Input }],
    activatedTab$: [{ type: Output }]
};

class GlSharedComponentTitleLabelSimpleComponent {
    constructor() {
        this.class = '';
        this.required = false;
        this.requiredLabel = 'Required field';
    }
}
GlSharedComponentTitleLabelSimpleComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-title-label-simple',
                template: "<label\r\n  class=\"header-data {{ labelAlignment }} {{ class }}\"\r\n  [attr.for]=\"id\">{{ labelValue }}\r\n</label>\r\n<img\r\n  *ngIf=\"required\"\r\n  src=\"../assets/img/icon/label/dot.svg\"\r\n  class=\"required-fill-dot {{ class }}\"\r\n  [title]=\"requiredLabel\"\r\n  alt=\"Required fill icon\">\r\n",
                styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900\");:host::ng-deep{display:flex;flex-grow:1;max-height:1.3em;min-height:1.3em}:host::ng-deep .header-data{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;background-color:#2c2c2f;color:#fff;flex-grow:1;font-family:Montserrat,sans-serif;font-size:.45em;font-weight:400;padding:1em;position:relative;text-align:center;user-select:none}:host::ng-deep .header-data.light{background-color:rgba(0,0,0,.3)}:host::ng-deep .header-data.dark{background-color:#111112}:host::ng-deep .header-data.left{text-align:left}:host::ng-deep .header-data.center{text-align:center}:host::ng-deep .header-data.right{text-align:right}:host::ng-deep .header-data.report{background-color:rgba(0,0,0,.1);color:#fff;font-family:Montserrat,sans-serif;font-size:1em;font-weight:100;padding:.5em;text-transform:uppercase}:host::ng-deep .required-fill-dot{height:.3em;position:absolute;right:.2em;top:.5em;width:.3em}"]
            },] }
];
GlSharedComponentTitleLabelSimpleComponent.ctorParameters = () => [];
GlSharedComponentTitleLabelSimpleComponent.propDecorators = {
    labelValue: [{ type: Input }],
    id: [{ type: Input }],
    labelAlignment: [{ type: Input }],
    class: [{ type: Input }],
    required: [{ type: Input }],
    requiredLabel: [{ type: Input }]
};

class GlSharedComponentTitleLabelButtonSimpleComponent {
    constructor() {
        this.required = false;
        this.requiredFieldDescription = 'Required field';
    }
}
GlSharedComponentTitleLabelButtonSimpleComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-title-label-button-simple',
                template: "<div class=\"label-button-container {{ class }}\">\r\n  <div\r\n    [attr.alt]=\"alt\"\r\n    class=\"tooltip top\">\r\n    <img\r\n      class=\"label-button\"\r\n      [id]=\"id\"\r\n      [src]=\"src\"\r\n      [alt]=\"alt\">\r\n  </div>\r\n  <img\r\n    *ngIf=\"required\"\r\n    src=\"../assets/img/icon/label/dot.svg\"\r\n    class=\"required-fill-dot\"\r\n    [title]=\"requiredFieldDescription\"\r\n    alt=\"Required fill icon\">\r\n</div>\r\n",
                styles: [".required-fill{background-color:rgba(210,64,119,.3)!important;border-color:#e64949!important;color:#fff!important;transition:all .2s ease-in-out}.required-fill::-moz-placeholder{color:hsla(0,0%,100%,.3)!important}.required-fill:-ms-input-placeholder{color:hsla(0,0%,100%,.3)!important}.required-fill::placeholder{color:hsla(0,0%,100%,.3)!important}.error-highlight{background-color:rgba(210,64,119,.3)!important;border-color:#e64949!important;color:#fff!important;transition:all .2s ease-in-out}.error-highlight::-moz-placeholder{color:hsla(0,0%,100%,.3)!important}.error-highlight:-ms-input-placeholder{color:hsla(0,0%,100%,.3)!important}.error-highlight::placeholder{color:hsla(0,0%,100%,.3)!important}.label-button-container{display:flex;position:absolute;right:.2em;top:.19em}.label-button-container .label-button{cursor:pointer;height:1em;margin:0 .1em;width:1em}.label-button-container .label-button:hover{opacity:1;transform:scale(1.1);transition:all .2s ease-in-out}.label-button-container .label-button:not(hover){opacity:.5;transform:scale(1);transition:all .2s ease-in-out}"]
            },] }
];
GlSharedComponentTitleLabelButtonSimpleComponent.ctorParameters = () => [];
GlSharedComponentTitleLabelButtonSimpleComponent.propDecorators = {
    id: [{ type: Input }],
    alt: [{ type: Input }],
    src: [{ type: Input }],
    required: [{ type: Input }],
    class: [{ type: Input }],
    requiredFieldDescription: [{ type: Input }]
};

class GlSharedComponentTitleLabelButtonContainerComponent {
    constructor() {
        this.required = false;
        this.requiredFieldDescription = 'Required field';
    }
}
GlSharedComponentTitleLabelButtonContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-title-label-button-container',
                template: "<div class=\"label-with-button-container {{ class }}\">\r\n  <gl-shared-component-title-label-simple\r\n    [labelValue]=\"labelValue\"\r\n    [id]=\"id\"\r\n    [labelAlignment]=\"labelAlignment\"\r\n    [required]=\"required\"\r\n    [class]=\"class\"\r\n    [requiredLabel]=\"requiredFieldDescription\"\r\n  ></gl-shared-component-title-label-simple>\r\n  <div class=\"label-button-container\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</div>\r\n",
                styles: [":host::ng-deep{display:flex;flex-grow:0}:host::ng-deep .label-with-button-container{background-color:#2c2c2f;display:flex;flex-grow:1}:host::ng-deep .label-with-button-container .label-button-container{display:flex;flex-grow:0;margin:0 .2em 0 0}:host::ng-deep .label-with-button-container .label-button-container .button{margin:0 0 0 .2em}:host::ng-deep .label-with-button-container.light{background-color:rgba(0,0,0,.3)}:host::ng-deep .label-with-button-container.dark{background-color:#111112}"]
            },] }
];
GlSharedComponentTitleLabelButtonContainerComponent.ctorParameters = () => [];
GlSharedComponentTitleLabelButtonContainerComponent.propDecorators = {
    labelValue: [{ type: Input }],
    id: [{ type: Input }],
    labelAlignment: [{ type: Input }],
    required: [{ type: Input }],
    class: [{ type: Input }],
    requiredFieldDescription: [{ type: Input }]
};

class GlSharedComponentTitlePageComponent {
    constructor() { }
}
GlSharedComponentTitlePageComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-title-page',
                template: "<div class=\"page-title\">\r\n  <div class=\"title-container\">\r\n    <h1 class=\"title\">{{ title }}</h1>\r\n    <h2 class=\"subtitle\">{{ subtitle }}</h2>\r\n  </div>\r\n</div>\r\n",
                styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900\");.page-title{align-self:flex-start;flex-grow:1;margin:0 .5em}.page-title .title-container{display:flex}.page-title .title-container .title{font-family:Montserrat,sans-serif;font-weight:700}.page-title .title-container .subtitle,.page-title .title-container .title{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;color:#fff;font-size:1.5em;text-transform:uppercase;user-select:none}.page-title .title-container .subtitle{font-family:Montserrat,sans-serif;font-weight:100;margin:0 0 0 .3em}"]
            },] }
];
GlSharedComponentTitlePageComponent.ctorParameters = () => [];
GlSharedComponentTitlePageComponent.propDecorators = {
    title: [{ type: Input }],
    subtitle: [{ type: Input }]
};

const ɵ0 = MAT_MOMENT_DATE_FORMATS;
class GlSharedComponentInputDatepickerSimpleDayMonthYearComponent {
    constructor() {
        this.disabled = false;
        this.itemContentAlignment = 'center';
        this.value = null;
        this.maxLength = 255;
        this.currentValue = new EventEmitter();
        this.dateFormat = 'DD/MM/YYYY';
    }
    clear(input) {
        this.currentValue.emit({
            date: null,
            dateString: null
        });
        input.value = null;
    }
    changed(event) {
        this.currentValue.emit({
            date: DateGet.customDateNoUTC(event.value, this.dateFormat),
            dateString: DateGet.customDateNoUTCString(event.value, this.dateFormat)
        });
    }
}
GlSharedComponentInputDatepickerSimpleDayMonthYearComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-input-datepicker-simple-day-month-year',
                template: "<ng-content></ng-content>\r\n<mat-form-field appearance=\"none\" floatLabel=\"never\" id=\"{{ id + '-with-step' }}\">\r\n<!--  <mat-label>Input disabled</mat-label>-->\r\n  <input\r\n    #input\r\n    class=\"item-content {{ itemContentAlignment }} {{ class }}\"\r\n    [id]=\"id\"\r\n    [placeholder]=\"placeholder\"\r\n    [value]=\"value\"\r\n    [matDatepicker]=\"dp3\"\r\n    [attr.maxlength]=\"maxLength\"\r\n    (dateChange)=\"changed($event)\"\r\n    matInput\r\n    disabled>\r\n  <mat-datepicker-toggle *ngIf=\"!disabled\" matSuffix (click)=\"clear(input)\">\r\n    <img\r\n      matDatepickerToggleIcon\r\n      class=\"datepicker-button\"\r\n      alt=\"Date picker icon\"\r\n      src=\"../assets/img/icon/datepicker/clear.svg\">\r\n  </mat-datepicker-toggle>\r\n  <mat-datepicker-toggle *ngIf=\"!disabled\" matSuffix [for]=\"dp3\">\r\n    <img\r\n      matDatepickerToggleIcon\r\n      class=\"datepicker-button\"\r\n      alt=\"Date picker icon\"\r\n      src=\"../assets/img/icon/datepicker/date.svg\">\r\n  </mat-datepicker-toggle>\r\n  <mat-datepicker #dp3 disabled=\"false\"></mat-datepicker>\r\n</mat-form-field>\r\n",
                providers: [
                    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
                    {
                        provide: DateAdapter,
                        useClass: MomentDateAdapter,
                        deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
                    },
                    {
                        provide: MAT_DATE_FORMATS,
                        useValue: ɵ0
                    },
                ],
                styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900\");@import url(\"https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@100;300;400;500;600;700;800;900&display=swap\");:host::ng-deep{background-color:#333437;display:flex;flex-direction:column;flex-grow:1;position:relative}:host::ng-deep mat-form-field{display:flex;flex-grow:1;line-height:1}:host::ng-deep mat-form-field .mat-form-field-wrapper{display:flex;flex-grow:1;padding:0}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex{align-items:center;border-radius:0;height:1.275em;padding:.2em .3em .2em .45em}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix{border:none;display:flex;padding:0;width:auto}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-suffix{display:flex;flex-direction:row}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-suffix .mat-datepicker-toggle{margin:0 0 0 .1em}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-suffix .mat-datepicker-toggle .mat-focus-indicator{height:.8em;width:.8em}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-suffix .mat-datepicker-toggle .mat-focus-indicator .mat-button-wrapper{align-items:center;display:flex;height:.8em;width:.8em}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-suffix .mat-datepicker-toggle .mat-focus-indicator .mat-button-wrapper .datepicker-button,:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-suffix .mat-datepicker-toggle .mat-focus-indicator .mat-button-wrapper svg{height:.8em;width:.8em}:host::ng-deep mat-form-field .item-content{border:none;color:#fff;flex-grow:1;font-family:Montserrat,sans-serif;font-size:.45em;font-weight:400}:host::ng-deep mat-form-field .item-content:focus{outline:none!important}:host::ng-deep mat-form-field .item-content::-moz-placeholder{color:#64666c!important}:host::ng-deep mat-form-field .item-content::placeholder{color:#64666c!important}:host::ng-deep mat-form-field .item-content.left{text-align:left}:host::ng-deep mat-form-field .item-content.center{text-align:center}:host::ng-deep mat-form-field .item-content.right{text-align:right}:host::ng-deep mat-form-field .item-content.light{background-color:rgba(0,0,0,.1)}:host::ng-deep mat-form-field .item-content.light::-moz-placeholder{color:hsla(0,0%,100%,.2)!important}:host::ng-deep mat-form-field .item-content.light:-ms-input-placeholder{color:hsla(0,0%,100%,.2)!important}:host::ng-deep mat-form-field .item-content.light::placeholder{color:hsla(0,0%,100%,.2)!important}:host::ng-deep mat-form-field .item-content.dark{background-color:#161617}:host::ng-deep mat-form-field .item-content:-ms-input-placeholder{color:#64666c!important}:host::ng-deep mat-form-field .item-content.light:-ms-input-placeholder{color:grey!important}"]
            },] }
];
GlSharedComponentInputDatepickerSimpleDayMonthYearComponent.ctorParameters = () => [];
GlSharedComponentInputDatepickerSimpleDayMonthYearComponent.propDecorators = {
    disabled: [{ type: Input }],
    id: [{ type: Input }],
    placeholder: [{ type: Input }],
    itemContentAlignment: [{ type: Input }],
    class: [{ type: Input }],
    value: [{ type: Input }],
    maxLength: [{ type: Input }],
    currentValue: [{ type: Output }]
};

var glSharedComponentInputDatepickerSimpleDayMonthYear_component = /*#__PURE__*/Object.freeze({
    __proto__: null,
    GlSharedComponentInputDatepickerSimpleDayMonthYearComponent: GlSharedComponentInputDatepickerSimpleDayMonthYearComponent,
    ɵ0: ɵ0
});

class GlSharedComponentPagingComponent {
    constructor() {
        this.type = 'dark';
        this.firstPageTitle = 'First page';
        this.previousPageTitle = 'Previous page';
        this.nextPageTitle = 'Next page';
        this.lastPageTitle = 'Last page';
        this.pageDescription = 'Page';
        this.itemsPerPageDescriptions = 'Items per page';
        this.pageSizeValue1 = 5;
        this.pageSizeValue2 = 10;
        this.pageSizeValue3 = 15;
        this.pageSizeValue4 = 20;
        this.pageSizeValue5 = 25;
        this.pageButtons = [];
        this.onPageChange$ = new EventEmitter();
        this.setNumberOfItems$ = new EventEmitter();
        this.setPage$ = new EventEmitter();
        this.itemsPerPage = [];
        this.firstIcon = '../assets/img/icon/paging/first.svg';
        this.previousIcon = '../assets/img/icon/paging/previous.svg';
        this.nextIcon = '../assets/img/icon/paging/next.svg';
        this.lastIcon = '../assets/img/icon/paging/last.svg';
    }
    ngAfterViewInit() {
        for (let i = 1; i <= 5; i++) {
            const pageSize = +this[`pageSizeValue${i}`];
            this.itemsPerPage.push({
                title: `${pageSize} ${this.itemsPerPageDescriptions.toLowerCase()}`,
                innerValue: pageSize === null || pageSize === void 0 ? void 0 : pageSize.toString(),
                value: pageSize === null || pageSize === void 0 ? void 0 : pageSize.toString(),
                class: this.pageSize == pageSize ? 'active' : '',
                pageSize
            });
        }
    }
    onPageChange(event, type) {
        this.onPageChange$.emit({ event, type });
    }
    setNumberOfItems(items) {
        this.itemsPerPage.map(x => x.class = x.pageSize == items ? 'active' : '');
        this.setNumberOfItems$.emit(items);
    }
    setPage(page) {
        this.setPage$.emit(page);
    }
}
GlSharedComponentPagingComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-paging',
                template: "<div class=\"pagination-container {{ type }}\">\r\n  <div class=\"pagination-buttons-container\">\r\n    <a id=\"first-page\" class=\"anchor-button\"\r\n       *ngIf=\"hasPrevious\" (click)=\"onPageChange($event, 'first')\"\r\n       [title]=\"firstPageTitle\">\r\n      <img [src]=\"firstIcon\" [alt]=\"firstPageTitle\">\r\n    </a>\r\n    <a id=\"prev-page\" class=\"anchor-button\"\r\n       *ngIf=\"hasPrevious\" (click)=\"onPageChange($event, 'previous')\"\r\n       [title]=\"previousPageTitle\">\r\n      <img [src]=\"previousIcon\" [alt]=\"previousPageTitle\">\r\n    </a>\r\n    <span id=\"page-info\">{{ pageInfo }}</span>\r\n    <div class=\"page-buttons-container\">\r\n      <gl-shared-component-input-button-simple\r\n        *ngFor=\"let button of pageButtons\"\r\n        [value]=\"button.page.toString()\"\r\n        [innerValue]=\"button.page.toString()\"\r\n        (click)=\"setPage(button.page)\"\r\n        [class]=\"button.active ? 'active' : ''\"\r\n        [title]=\"pageDescription + ' ' + button.page.toString()\"\r\n      ></gl-shared-component-input-button-simple>\r\n    </div>\r\n    <a href=\"#\" id=\"next-page\" class=\"anchor-button\"\r\n       *ngIf=\"hasNext\" (click)=\"onPageChange($event, 'next')\"\r\n       [title]=\"nextPageTitle\">\r\n      <img [src]=\"nextIcon\" [alt]=\"nextPageTitle\">\r\n    </a>\r\n    <a href=\"#\" id=\"last-page\" class=\"anchor-button\"\r\n       *ngIf=\"hasNext\" (click)=\"onPageChange($event, 'last')\"\r\n       [title]=\"lastPageTitle\">\r\n      <img [src]=\"lastIcon\" [alt]=\"lastPageTitle\">\r\n    </a>\r\n  </div>\r\n\r\n  <div class=\"number-items-page\" >\r\n    <span class=\"label-page-items\">{{ itemsPerPageDescriptions }}</span>\r\n    <gl-shared-component-input-button-simple\r\n      *ngFor=\"let item of itemsPerPage\"\r\n        [title]=\"item.title\"\r\n        [innerValue]=\"item.innerValue\"\r\n        [value]=\"item.value\"\r\n        [class]=\"item.class\"\r\n        (click)=\"setNumberOfItems(item.pageSize)\"\r\n    ></gl-shared-component-input-button-simple>\r\n  </div>\r\n</div>\r\n",
                styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900\");:host::ng-deep{max-width:100vw}:host::ng-deep .pagination-container{align-items:center;background-color:#1a1b1d;display:flex;font-size:.5em;height:2.5em;justify-content:center;max-width:100vw;position:relative}:host::ng-deep .pagination-container .pagination-buttons-container{align-items:center;display:flex;flex-grow:1;justify-content:center}:host::ng-deep .pagination-container .pagination-buttons-container #page-info{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;color:#fff;display:none;font-size:.8em;margin:auto 1.2em;user-select:none}:host::ng-deep .pagination-container .pagination-buttons-container .page-buttons-container{display:flex;padding:0 1em;width:30%}:host::ng-deep .pagination-container .pagination-buttons-container .page-buttons-container gl-shared-component-input-button-simple{display:flex;height:1.5em;margin:0 .2em;width:1.5em}:host::ng-deep .pagination-container .pagination-buttons-container .page-buttons-container gl-shared-component-input-button-simple .default-button{border-radius:.2em;color:#fff;font-family:Montserrat,sans-serif;font-size:.8em;font-weight:300}:host::ng-deep .pagination-container .pagination-buttons-container .page-buttons-container gl-shared-component-input-button-simple .default-button:not(hover){background-color:hsla(0,0%,100%,.1);transition:all .5s ease-in-out}:host::ng-deep .pagination-container .pagination-buttons-container .page-buttons-container gl-shared-component-input-button-simple .default-button:hover{background-color:hsla(0,0%,100%,.3);transition:all .2s ease-in-out}:host::ng-deep .pagination-container .pagination-buttons-container .page-buttons-container gl-shared-component-input-button-simple .default-button.active{background-color:#fff;color:#64666c;font-family:Montserrat,sans-serif;font-weight:700;transition:all .5s ease-in-out}:host::ng-deep .pagination-container .pagination-buttons-container .anchor-button{height:1.5em;padding:.5em 0;width:1.5em}:host::ng-deep .pagination-container .pagination-buttons-container .anchor-button#first-page{margin:0 .5em 0 0}:host::ng-deep .pagination-container .pagination-buttons-container .anchor-button#last-page{margin:0 0 0 .5em}:host::ng-deep .pagination-container .pagination-buttons-container .anchor-button img{height:1.5em;width:1.5em}:host::ng-deep .pagination-container .pagination-buttons-container .anchor-button:not(hover){opacity:.2;transition:all .2s ease-in-out}:host::ng-deep .pagination-container .pagination-buttons-container .anchor-button:hover{opacity:1;transition:all .2s ease-in-out}:host::ng-deep .pagination-container .number-items-page{align-items:center;display:flex;height:1.5em;position:absolute;right:.4em;top:.5em;width:20em}:host::ng-deep .pagination-container .number-items-page .label-page-items{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;color:#fff;font-family:Montserrat,sans-serif;font-size:.8em;font-weight:300;margin:0 .5em 0 0;opacity:1;padding:.8em 1em .3em;text-transform:uppercase;user-select:none}:host::ng-deep .pagination-container .number-items-page gl-shared-component-input-button-simple{display:flex;flex:1 1 0.2em;height:1.5em;justify-content:center;margin:0 .2em;width:1.5em}:host::ng-deep .pagination-container .number-items-page gl-shared-component-input-button-simple .default-button{border-radius:.2em;flex:1 1 0.2em;font-family:Montserrat,sans-serif;font-size:.6em;font-weight:300;min-height:1.5em;min-width:1.5em}:host::ng-deep .pagination-container .number-items-page gl-shared-component-input-button-simple .default-button:not(hover){background-color:hsla(0,0%,100%,.1);color:#fff;transition:all .5s ease-in-out}:host::ng-deep .pagination-container .number-items-page gl-shared-component-input-button-simple .default-button:hover{background-color:hsla(0,0%,100%,.3);transition:all .2s ease-in-out}:host::ng-deep .pagination-container .number-items-page gl-shared-component-input-button-simple .default-button.active{background-color:#fff;color:#4b4d52;font-family:Montserrat,sans-serif;font-size:.7em;font-weight:900;transition:all .5s ease-in-out}:host::ng-deep .pagination-container.translucid{background-color:rgba(0,0,0,.2)}"]
            },] }
];
GlSharedComponentPagingComponent.ctorParameters = () => [];
GlSharedComponentPagingComponent.propDecorators = {
    pageInfo: [{ type: Input }],
    hasNext: [{ type: Input }],
    hasPrevious: [{ type: Input }],
    type: [{ type: Input }],
    firstPageTitle: [{ type: Input }],
    previousPageTitle: [{ type: Input }],
    nextPageTitle: [{ type: Input }],
    lastPageTitle: [{ type: Input }],
    pageDescription: [{ type: Input }],
    pageSize: [{ type: Input }],
    itemsPerPageDescriptions: [{ type: Input }],
    pageSizeValue1: [{ type: Input }],
    pageSizeValue2: [{ type: Input }],
    pageSizeValue3: [{ type: Input }],
    pageSizeValue4: [{ type: Input }],
    pageSizeValue5: [{ type: Input }],
    pageButtons: [{ type: Input }],
    onPageChange$: [{ type: Output }],
    setNumberOfItems$: [{ type: Output }],
    setPage$: [{ type: Output }]
};

const MONTH_YEAR_FORMAT = {
    parse: {
        dateInput: 'MM/YYYY',
    },
    display: {
        dateInput: 'MM/YYYY',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};
const ɵ0$1 = MONTH_YEAR_FORMAT;
class GlSharedComponentInputDatepickerSimpleMonthYearComponent {
    constructor() {
        this.disabled = false;
        this.itemContentAlignment = 'center';
        this.value = DateGet.currentDate('DD/MM/YYYY');
        this.maxLength = 255;
        this.currentValue = new EventEmitter();
        this.dateFormatString = 'MM/YYYY';
        this.dateFormat = 'DD/MM/YYYY';
        this.startDate = this.value;
        this.date = DateGet.customDateNoUTC('DD/MM/YYYY');
    }
    chosenYearHandler(normalizedYear) {
        const ctrlValue = this.date;
        ctrlValue.setFullYear(normalizedYear.year());
        this.date = ctrlValue;
        const date = DateGet.customDateNoUTC(ctrlValue, this.dateFormat);
        const dateString = DateGet.customDateNoUTCString(normalizedYear, this.dateFormatString, this.dateFormatString);
        this.currentValue.emit({ date, dateString });
    }
    chosenMonthHandler(normalizedMonth, datepicker) {
        const ctrlValue = this.date;
        ctrlValue.setMonth(normalizedMonth.month());
        this.date = ctrlValue;
        datepicker.close();
        const date = DateGet.customDateNoUTC(ctrlValue, this.dateFormat);
        const dateString = DateGet.customDateString(normalizedMonth, this.dateFormatString, this.dateFormatString);
        this.currentValue.emit({ date, dateString });
    }
    clear() {
        this.currentValue.emit({
            date: null,
            dateString: null
        });
    }
    changed(event) {
        this.currentValue.emit({
            date: DateGet.customDateNoUTC(event.value, this.dateFormat),
            dateString: DateGet.customDateString(event.value, this.dateFormatString, this.dateFormatString)
        });
    }
}
GlSharedComponentInputDatepickerSimpleMonthYearComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-input-datepicker-simple-month-year',
                template: "<ng-content></ng-content>\r\n<mat-form-field appearance=\"none\" floatLabel=\"never\">\r\n  <!--  <mat-label>Input disabled</mat-label>-->\r\n  <input\r\n    class=\"item-content {{ itemContentAlignment }} {{ class }}\"\r\n    matInput\r\n    [id]=\"id\"\r\n    [placeholder]=\"placeholder\"\r\n    [value]=\"value\"\r\n    [matDatepicker]=\"dp3\"\r\n    [attr.maxlength]=\"maxLength\"\r\n    (dateChange)=\"changed($event)\"\r\n    disabled>\r\n  <mat-datepicker-toggle *ngIf=\"!disabled\" matSuffix (click)=\"clear()\">\r\n    <img\r\n      matDatepickerToggleIcon\r\n      class=\"datepicker-button\"\r\n      alt=\"Date picker icon\"\r\n      src=\"../assets/img/icon/datepicker/clear.svg\">\r\n  </mat-datepicker-toggle>\r\n  <mat-datepicker-toggle *ngIf=\"!disabled\" matSuffix [for]=\"dp3\">\r\n    <img\r\n      matDatepickerToggleIcon\r\n      class=\"datepicker-button\"\r\n      alt=\"Date picker icon\"\r\n      src=\"../assets/img/icon/datepicker/date.svg\">\r\n  </mat-datepicker-toggle>\r\n  <mat-datepicker\r\n    #dp3 disabled=\"false\"\r\n    startView=\"multi-year\"\r\n    (yearSelected)=\"chosenYearHandler($event)\"\r\n    (monthSelected)=\"chosenMonthHandler($event, dp3)\"\r\n    panelClass=\"month-picker\">\r\n  ></mat-datepicker>\r\n</mat-form-field>\r\n",
                providers: [
                    {
                        provide: MAT_DATE_LOCALE,
                        useValue: 'pt-BR'
                    },
                    {
                        provide: DateAdapter,
                        useClass: MomentDateAdapter,
                        deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
                    },
                    {
                        provide: MAT_DATE_FORMATS,
                        useValue: ɵ0$1
                    }
                ],
                styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900\");@import url(\"https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@100;300;400;500;600;700;800;900&display=swap\");:host::ng-deep{background-color:#333437;display:flex;flex-direction:column;flex-grow:1;position:relative}:host::ng-deep .month-picker .mat-calendar-period-button{pointer-events:none}:host::ng-deep .month-picker .mat-calendar-arrow{display:none}:host::ng-deep mat-form-field{display:flex;flex-grow:1;line-height:1}:host::ng-deep mat-form-field .mat-form-field-wrapper{display:flex;flex-grow:1;padding:0}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex{align-items:center;border-radius:0;height:1.275em;padding:.2em .3em .2em .45em}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix{border:none;display:flex;padding:0;width:auto}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-suffix{display:flex;flex-direction:row}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-suffix .mat-datepicker-toggle{margin:0 0 0 .1em}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-suffix .mat-datepicker-toggle .mat-focus-indicator{height:.8em;width:.8em}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-suffix .mat-datepicker-toggle .mat-focus-indicator .mat-button-wrapper{align-items:center;display:flex;height:.8em;width:.8em}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-suffix .mat-datepicker-toggle .mat-focus-indicator .mat-button-wrapper .datepicker-button,:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-suffix .mat-datepicker-toggle .mat-focus-indicator .mat-button-wrapper svg{height:.8em;width:.8em}:host::ng-deep mat-form-field .item-content{border:none;color:#fff;flex-grow:1;font-family:Montserrat,sans-serif;font-size:.45em;font-weight:400}:host::ng-deep mat-form-field .item-content:focus{outline:none!important}:host::ng-deep mat-form-field .item-content::-moz-placeholder{color:#64666c!important}:host::ng-deep mat-form-field .item-content::placeholder{color:#64666c!important}:host::ng-deep mat-form-field .item-content.left{text-align:left}:host::ng-deep mat-form-field .item-content.center{text-align:center}:host::ng-deep mat-form-field .item-content.right{text-align:right}:host::ng-deep mat-form-field .item-content.light{background-color:rgba(0,0,0,.1)}:host::ng-deep mat-form-field .item-content.light::-moz-placeholder{color:hsla(0,0%,100%,.2)!important}:host::ng-deep mat-form-field .item-content.light:-ms-input-placeholder{color:hsla(0,0%,100%,.2)!important}:host::ng-deep mat-form-field .item-content.light::placeholder{color:hsla(0,0%,100%,.2)!important}:host::ng-deep mat-form-field .item-content.dark{background-color:#161617}:host::ng-deep mat-form-field .item-content:-ms-input-placeholder{color:#64666c!important}:host::ng-deep mat-form-field .item-content.light:-ms-input-placeholder{color:grey!important}"]
            },] }
];
GlSharedComponentInputDatepickerSimpleMonthYearComponent.ctorParameters = () => [];
GlSharedComponentInputDatepickerSimpleMonthYearComponent.propDecorators = {
    disabled: [{ type: Input }],
    id: [{ type: Input }],
    placeholder: [{ type: Input }],
    itemContentAlignment: [{ type: Input }],
    class: [{ type: Input }],
    value: [{ type: Input }],
    maxLength: [{ type: Input }],
    currentValue: [{ type: Output }]
};

var glSharedComponentInputDatepickerSimpleMonthYear_component = /*#__PURE__*/Object.freeze({
    __proto__: null,
    GlSharedComponentInputDatepickerSimpleMonthYearComponent: GlSharedComponentInputDatepickerSimpleMonthYearComponent,
    ɵ0: ɵ0$1
});

class GlSharedComponentInputDatepickerLabelComponent {
    constructor() {
        this.disabled = false;
        this.itemContentAlignment = 'center';
        this.value = null;
        this.dateFormat = 'DD/MM/YYYY';
        this.maxLength = 255;
        this.labelAlignment = 'center';
        this.requiredField = 'Required field';
        this.currentValue = new EventEmitter();
    }
    ngOnInit() { }
    onCurrentValue(event) {
        this.currentValue.emit(event);
    }
}
GlSharedComponentInputDatepickerLabelComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-input-datepicker-label',
                template: "<gl-shared-component-input-datepicker-simple-day-month-year\r\n  *ngIf=\"dateFormat == 'DD/MM/YYYY'\"\r\n  [class]=\"class\"\r\n  [value]=\"value\"\r\n  (currentValue)=\"onCurrentValue($event)\"\r\n  [id]=\"id\"\r\n  [itemContentAlignment]=\"itemContentAlignment\"\r\n  [placeholder]=\"placeholder\"\r\n  [disabled]=\"disabled\"\r\n  [maxLength]=\"maxLength\"\r\n><gl-shared-component-title-label-simple\r\n    [id]=\"id\"\r\n    [labelAlignment]=\"labelAlignment\"\r\n    [labelValue]=\"labelValue\"\r\n    [required]=\"required\"\r\n    [class]=\"class\"\r\n    [requiredLabel]=\"requiredField\"\r\n  ></gl-shared-component-title-label-simple>\r\n</gl-shared-component-input-datepicker-simple-day-month-year>\r\n\r\n<gl-shared-component-input-datepicker-simple-month-year\r\n  *ngIf=\"dateFormat == 'MM/YYYY'\"\r\n  [class]=\"class\"\r\n  [value]=\"value\"\r\n  (currentValue)=\"onCurrentValue($event)\"\r\n  [id]=\"id\"\r\n  [itemContentAlignment]=\"itemContentAlignment\"\r\n  [placeholder]=\"placeholder\"\r\n  [disabled]=\"disabled\"\r\n  [maxLength]=\"maxLength\"\r\n><gl-shared-component-title-label-simple\r\n  [id]=\"id\"\r\n  [labelAlignment]=\"labelAlignment\"\r\n  [labelValue]=\"labelValue\"\r\n  [required]=\"required\"\r\n  [class]=\"class\"\r\n  [requiredLabel]=\"requiredField\"\r\n></gl-shared-component-title-label-simple>\r\n</gl-shared-component-input-datepicker-simple-month-year>\r\n",
                styles: [":host::ng-deep{display:flex}:host::ng-deep gl-shared-component-title-label-simple{flex-grow:0}"]
            },] }
];
GlSharedComponentInputDatepickerLabelComponent.ctorParameters = () => [];
GlSharedComponentInputDatepickerLabelComponent.propDecorators = {
    disabled: [{ type: Input }],
    id: [{ type: Input }],
    placeholder: [{ type: Input }],
    itemContentAlignment: [{ type: Input }],
    class: [{ type: Input }],
    value: [{ type: Input }],
    dateFormat: [{ type: Input }],
    maxLength: [{ type: Input }],
    labelValue: [{ type: Input }],
    labelAlignment: [{ type: Input }],
    required: [{ type: Input }],
    requiredField: [{ type: Input }],
    currentValue: [{ type: Output }]
};

class GlSharedComponentInputSwitchComponent {
    constructor() {
        this.enabled = true;
        this.active = false;
        this.labelColor = 'white';
        this.showLabel = true;
        this.showAsInputButton = false;
        this.active$ = new EventEmitter();
    }
    activate() {
        if (this.enabled) {
            this.active = !this.active;
            this.active$.emit(this.active);
        }
    }
    onContainerClick() {
        if (this.showAsInputButton) {
            this.activate();
        }
    }
}
GlSharedComponentInputSwitchComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-input-switch',
                template: "<div class=\"switch-main-container {{ enabled ? '' : 'disabled' }} {{ showAsInputButton ? 'show-as-button' : '' }}\"\r\n  (click)=\"onContainerClick()\">\r\n  <img\r\n    *ngIf=\"showAsInputButton && buttonIconSrc?.length > 0\"\r\n    [src]=\"buttonIconSrc\"\r\n    class=\"switch-button-icon\"\r\n    alt=\"switch-icon\">\r\n\r\n  <span\r\n    *ngIf=\"showLabel\"\r\n    class=\"switch-label {{ labelColor }} {{ buttonIconSrc?.length > 0 ? 'has-icon' : '' }}\">{{ label }}</span>\r\n  <div\r\n    (click)=\"activate()\"\r\n    class=\"switch-item-container {{ active ? 'active' : '' }}\">\r\n    <div\r\n      class=\"switch-item {{ active ? 'active' : '' }}\"></div>\r\n  </div>\r\n</div>\r\n",
                styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900\");@import url(\"https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@100;300;400;500;600;700;800;900&display=swap\");:host::ng-deep .switch-main-container{align-items:center;display:flex;flex-direction:row}:host::ng-deep .switch-main-container .switch-label{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;font-family:Montserrat,sans-serif;font-size:.5em;font-weight:600;user-select:none}:host::ng-deep .switch-main-container .switch-label.black{color:#000}:host::ng-deep .switch-main-container .switch-label.white{color:#fff}:host::ng-deep .switch-main-container .switch-item-container{background-color:#fff;border:2px solid #cacaca;border-radius:2em;cursor:pointer;display:flex;flex-direction:column;height:1em;justify-content:center;margin:0 0 0 .2em;padding:0 .1em;position:relative;transition:all .5s ease-in-out;width:1.7em}:host::ng-deep .switch-main-container .switch-item-container.active{background-color:#67ce78;border:2px solid #329d44;transition:all .3s ease-in-out}:host::ng-deep .switch-main-container .switch-item-container .switch-item{background-color:#e4e4e4;border-radius:1em;cursor:pointer;height:.9em;left:.1em;position:absolute;top:.06em;transition:all .5s ease-in-out;width:.9em}:host::ng-deep .switch-main-container .switch-item-container .switch-item:hover{background-color:#b1b1b1;transition:all .2s ease-in-out}:host::ng-deep .switch-main-container .switch-item-container .switch-item.active{background-color:#f0f0f0;left:.9em;transition:all .5s ease-in-out}:host::ng-deep .switch-main-container .switch-item-container .switch-item.active:hover{background-color:#fff;transition:all .2s ease-in-out}:host::ng-deep .switch-main-container.disabled,:host::ng-deep .switch-main-container.disabled .switch-item-container,:host::ng-deep .switch-main-container.disabled .switch-item-container .switch-item{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;cursor:not-allowed;user-select:none}:host::ng-deep .switch-main-container.show-as-button{align-items:center;background-color:hsla(0,0%,100%,.1);border-radius:.2em;display:flex;flex-direction:row;font-size:.8em;padding:.2em .25em}:host::ng-deep .switch-main-container.show-as-button .switch-button-icon{border-radius:.15em;height:1.563em;width:1.563em}:host::ng-deep .switch-main-container.show-as-button .switch-label{flex-grow:1;font-family:Montserrat,sans-serif;font-weight:300;padding:0 0 0 .8em}"]
            },] }
];
GlSharedComponentInputSwitchComponent.ctorParameters = () => [];
GlSharedComponentInputSwitchComponent.propDecorators = {
    enabled: [{ type: Input }],
    active: [{ type: Input }],
    label: [{ type: Input }],
    labelColor: [{ type: Input }],
    showLabel: [{ type: Input }],
    showAsInputButton: [{ type: Input }],
    buttonIconSrc: [{ type: Input }],
    active$: [{ type: Output }]
};

class GlSharedComponentInputTextSimpleWithStepComponent {
    constructor() {
        this.disabled = false;
        this.autocomplete = false;
        this.value = 0;
        this.allowMinus = true;
        this.rightAlign = true;
        this.step = 5;
        this.decimalSeparator = ',';
        this.maxLength = 255;
        this.currentValue = new EventEmitter();
        this.callback = () => { };
    }
    convertValue(value) {
        if (this.mask === 'percentage') {
            return StringConverter.numberToPercentage(value, false);
        }
        else {
            return this.value.toString();
        }
    }
    processValue(type, value) {
        const previousValue = this.value == null || Number.isNaN(this.value) ? 0 : this.value;
        const step = this.mask === 'percentage' ? this.step / 100.0 : this.step;
        let newValue;
        if (type === 'increase') {
            newValue = previousValue + step;
            this.currentValue.emit({
                type: 'increase',
                previousValue: this.mask === 'percentage' ? previousValue : previousValue,
                newValue: this.mask === 'percentage' ? newValue : newValue
            });
        }
        else if (type === 'decrease') {
            newValue = previousValue - step;
            this.currentValue.emit({
                type: 'decrease',
                previousValue: this.mask === 'percentage' ? previousValue : previousValue,
                newValue: this.mask === 'percentage' ? newValue : newValue
            });
        }
        else {
            const parsedValue = value == null || value.length === 0 ? '0.00%' : value;
            newValue = StringConverter.percentageToNumber(parsedValue);
            this.currentValue.emit({
                type: 'typing',
                previousValue: this.mask === 'percentage' ? previousValue : previousValue,
                newValue: this.mask === 'percentage' ? newValue : newValue
            });
        }
    }
}
GlSharedComponentInputTextSimpleWithStepComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-input-text-simple-with-step',
                template: "<div class=\"item-container\">\r\n  <gl-shared-component-input-text-simple\r\n    [class]=\"class\"\r\n    [value]=\"convertValue(value)\"\r\n    [id]=\"id\"\r\n    [itemContentAlignment]=\"itemContentAlignment\"\r\n    [placeholder]=\"placeholder\"\r\n    (currentValue)=\"processValue('typing', $event.value)\"\r\n    [disabled]=\"disabled\"\r\n    [autocomplete]=\"autocomplete\"\r\n    [allowMinus]=\"allowMinus\"\r\n    [rightAlign]=\"rightAlign\"\r\n    [step]=\"step\"\r\n    [decimalSeparator]=\"decimalSeparator\"\r\n\r\n    [mask]=\"mask\"\r\n    [maskSymbol]=\"maskSymbol\"\r\n    [maxLength]=\"maxLength\"\r\n  ></gl-shared-component-input-text-simple>\r\n  <div class=\"step-button-container\">\r\n    <gl-shared-component-button-image-tooltip\r\n      alt=\"Decrease\"\r\n      src=\"../assets/img/icon/list/show-remove.svg\"\r\n      [id]=\"id + '-decrease'\"\r\n      [callback]=\"callback\"\r\n      (click)=\"processValue('decrease', null)\"\r\n    ></gl-shared-component-button-image-tooltip>\r\n    <gl-shared-component-button-image-tooltip\r\n      alt=\"Increase\"\r\n      src=\"../assets/img/icon/list/add-line.svg\"\r\n      [id]=\"id + '-increase'\"\r\n      [callback]=\"callback\"\r\n      (click)=\"processValue('increase', null)\"\r\n    ></gl-shared-component-button-image-tooltip>\r\n  </div>\r\n</div>\r\n",
                styles: [":host::ng-deep{display:flex;flex:1 0 auto}:host::ng-deep .item-container{align-items:stretch;display:flex;flex:1 0 auto;flex-direction:row;position:relative}:host::ng-deep .item-container gl-shared-component-input-text-simple{margin:0;position:relative}:host::ng-deep .item-container gl-shared-component-input-text-simple .item-content{padding:.8em 4.8em .8em .8em}:host::ng-deep .item-container .step-button-container{display:flex;flex-direction:row;position:absolute;right:.3em;top:.3em}:host::ng-deep .item-container .step-button-container gl-shared-component-button-image-simple{margin:0 0 0 .05em}:host::ng-deep .item-container .step-button-container gl-shared-component-button-image-simple .button{height:.8em;width:.8em}"]
            },] }
];
GlSharedComponentInputTextSimpleWithStepComponent.ctorParameters = () => [];
GlSharedComponentInputTextSimpleWithStepComponent.propDecorators = {
    disabled: [{ type: Input }],
    autocomplete: [{ type: Input }],
    id: [{ type: Input }],
    placeholder: [{ type: Input }],
    itemContentAlignment: [{ type: Input }],
    class: [{ type: Input }],
    value: [{ type: Input }],
    allowMinus: [{ type: Input }],
    rightAlign: [{ type: Input }],
    step: [{ type: Input }],
    mask: [{ type: Input }],
    decimalSeparator: [{ type: Input }],
    maskSymbol: [{ type: Input }],
    maxLength: [{ type: Input }],
    currentValue: [{ type: Output }]
};

class GlSharedComponentInputListItemRemoveComponent {
    constructor() {
        this.showRemove = false;
        this.itemToRemove = new EventEmitter();
    }
    removeItem() {
        this.itemToRemove.emit({
            id: +this.id
        });
    }
}
GlSharedComponentInputListItemRemoveComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-input-list-item-remove',
                template: "<img\r\n  [id]=\"id\"\r\n  class=\"remove-item\"\r\n  [ngClass]=\"{\r\n    'show-remove': showRemove,\r\n    'hide-remove' : !showRemove\r\n  }\"\r\n  src=\"../assets/img/icon/list/delete-item.svg\"\r\n  (click)=\"removeItem()\"\r\n  alt=\"Remove list item\">\r\n",
                styles: [":host::ng-deep{z-index:100}:host::ng-deep .remove-item{cursor:pointer;height:.9em;left:-2em;position:absolute;top:.2em;width:.9em;z-index:100}:host::ng-deep .remove-item.show-remove{-webkit-animation:show-remove .2s ease-in-out;-webkit-animation-delay:.1s;-webkit-animation-fill-mode:forwards;animation:show-remove .2s ease-in-out;animation-delay:.1s;animation-fill-mode:forwards}@-webkit-keyframes show-remove{0%{left:-2em}to{left:.3em}}@keyframes show-remove{0%{left:-2em}to{left:.3em}}:host::ng-deep .remove-item.hide-remove{-webkit-animation:hide-remove .2s ease-in-out;-webkit-animation-fill-mode:forwards;animation:hide-remove .2s ease-in-out;animation-fill-mode:forwards;left:-2em}@-webkit-keyframes hide-remove{0%{left:.3em}to{left:-2em}}@keyframes hide-remove{0%{left:.3em}to{left:-2em}}:host::ng-deep .remove-item:not(hover){opacity:.5;transform:scale(1);transition:all .3s ease-out}:host::ng-deep .remove-item:hover{opacity:1;transform:scale(1.1);transition:all .3s ease-in}"]
            },] }
];
GlSharedComponentInputListItemRemoveComponent.ctorParameters = () => [];
GlSharedComponentInputListItemRemoveComponent.propDecorators = {
    showRemove: [{ type: Input }],
    id: [{ type: Input }],
    itemToRemove: [{ type: Output }]
};

class GlSharedComponentInputListItemUpDownComponent {
    constructor() {
        this.showUp = true;
        this.showDown = true;
        this.moveUpDown$ = new EventEmitter();
        this.callback = () => { };
    }
    onClick(type) {
        if (type === 'move-down') {
            if (this.showDown) {
                this.moveUpDown$.emit(type);
            }
        }
        else {
            if (this.showUp) {
                this.moveUpDown$.emit(type);
            }
        }
    }
}
GlSharedComponentInputListItemUpDownComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-input-list-item-up-down',
                template: "<div class=\"reorder-list-container\">\r\n\r\n  <gl-shared-component-button-image-tooltip\r\n    id=\"move-up-list-item\"\r\n    alt=\"Move up\"\r\n    src=\"../assets/img/icon/list/move-up.svg\"\r\n    [class]=\"showUp ? '' : 'disabled'\"\r\n    (click)=\"onClick('move-up')\"\r\n    [callback]=\"callback\"\r\n  ></gl-shared-component-button-image-tooltip>\r\n  <gl-shared-component-button-image-tooltip\r\n    id=\"move-down-list-item\"\r\n    alt=\"Move down\"\r\n    src=\"../assets/img/icon/list/move-down.svg\"\r\n    [class]=\"showDown ? '' : 'disabled'\"\r\n    (click)=\"onClick('move-down')\"\r\n    [callback]=\"callback\"\r\n  ></gl-shared-component-button-image-tooltip>\r\n</div>\r\n",
                styles: [":host::ng-deep,:host::ng-deep .reorder-list-container{display:flex;flex-direction:row;flex-grow:1;justify-content:center}:host::ng-deep .reorder-list-container{align-items:center;background-color:#333437}:host::ng-deep .reorder-list-container gl-shared-component-button-image-tooltip:nth-child(2){margin:0 0 0 .2em}:host::ng-deep .reorder-list-container gl-shared-component-button-image-tooltip.disabled{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;cursor:not-allowed;opacity:.2;user-select:none}:host::ng-deep .reorder-list-container gl-shared-component-button-image-tooltip .button{height:.8em;width:.8em}"]
            },] }
];
GlSharedComponentInputListItemUpDownComponent.ctorParameters = () => [];
GlSharedComponentInputListItemUpDownComponent.propDecorators = {
    showUp: [{ type: Input }],
    showDown: [{ type: Input }],
    moveUpDown$: [{ type: Output }]
};

class GlSharedComponentInputCheckBoxSimpleComponent {
    constructor() {
        this.checked = false;
        this.showBackground = true;
        this.checked$ = new EventEmitter();
    }
    onChecked(checked) {
        this.checked = checked;
        this.checked$.emit(checked);
    }
}
GlSharedComponentInputCheckBoxSimpleComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-input-check-box-simple',
                template: "<div class=\"check-box-container {{ showBackground ? '' : 'transparent' }}\">\r\n  <img\r\n    *ngIf=\"!checked\"\r\n    (click)=\"onChecked(true)\"\r\n    alt=\"Checked\"\r\n    class=\"check-box unchecked\"\r\n    src=\"../assets/img/icon/check-box/unchecked.svg\">\r\n\r\n  <img\r\n    *ngIf=\"checked\"\r\n    (click)=\"onChecked(false)\"\r\n    alt=\"Unchecked\"\r\n    class=\"check-box checked\"\r\n    src=\"../assets/img/icon/check-box/checked.svg\">\r\n\r\n</div>\r\n",
                styles: [":host::ng-deep{display:flex;flex-grow:1}:host::ng-deep .check-box-container{align-items:center;background-color:#333437;display:flex;flex-grow:1;justify-content:center}:host::ng-deep .check-box-container.transparent{background-color:transparent}:host::ng-deep .check-box-container .check-box{height:.8em;width:.8em}:host::ng-deep .check-box-container .check-box.checked:hover{opacity:1;transition:all .2s ease-in-out}:host::ng-deep .check-box-container .check-box.checked:not(hover){opacity:.8;transition:all .2s ease-in-out}:host::ng-deep .check-box-container .check-box.unchecked:hover{opacity:.6;transition:all .2s ease-in-out}:host::ng-deep .check-box-container .check-box.unchecked:not(hover){opacity:.3;transition:all .2s ease-in-out}"]
            },] }
];
GlSharedComponentInputCheckBoxSimpleComponent.ctorParameters = () => [];
GlSharedComponentInputCheckBoxSimpleComponent.propDecorators = {
    checked: [{ type: Input }],
    showBackground: [{ type: Input }],
    checked$: [{ type: Output }]
};

class GlSharedComponentInputCheckBoxLabelComponent {
    constructor() {
        this.checked = false;
        this.showBackground = true;
        this.labelAlignment = 'center';
        this.checked$ = new EventEmitter();
    }
}
GlSharedComponentInputCheckBoxLabelComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-input-check-box-label',
                template: "<gl-shared-component-title-label-simple\r\n  [labelAlignment]=\"labelAlignment\"\r\n  [required]=\"required\"\r\n  [labelValue]=\"labelValue\"\r\n  [requiredLabel]=\"requiredLabelDescription\"\r\n  [id]=\"labelId\"\r\n></gl-shared-component-title-label-simple>\r\n<gl-shared-component-input-check-box-simple\r\n  [checked]=\"checked\"\r\n  [showBackground]=\"showBackground\"\r\n  (checked$)=\"checked$.emit($event)\"\r\n></gl-shared-component-input-check-box-simple>\r\n",
                styles: [":host::ng-deep{display:flex;flex-direction:column;flex-grow:1}"]
            },] }
];
GlSharedComponentInputCheckBoxLabelComponent.ctorParameters = () => [];
GlSharedComponentInputCheckBoxLabelComponent.propDecorators = {
    checked: [{ type: Input }],
    showBackground: [{ type: Input }],
    labelId: [{ type: Input }],
    labelAlignment: [{ type: Input }],
    required: [{ type: Input }],
    labelValue: [{ type: Input }],
    requiredLabelDescription: [{ type: Input }],
    checked$: [{ type: Output }]
};

class GlSharedComponentInputDragAndDropSimpleComponent {
    constructor(_alert) {
        this._alert = _alert;
        this.continueUploadLabel = 'Continue previous loading';
        this.$continueUploadActive = new EventEmitter();
        this.uploadButtonValue = 'Upload files';
        this.readOnly = false;
        this.descriptionDragAndDrop = 'Drag and drop the file';
        this.descriptionDragAndDropOr = 'or';
        this.descriptionDragAndDropClickHere = 'Click here';
        this.uploadIcon = '../assets/img/icon/upload/upload.svg';
        /**
         * The message must contain the string $var1$. It'll be replaced during runtime.
         * I.e.: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit: $var1$'
         */
        this.invalidExtensionMessageSingular = 'The invlid file has not been added to the attachment list. Accepted file extensions: $var1$';
        /**
         * The message must contain the string $var1$. It'll be replaced during runtime.
         * I.e.: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit: $var1$'
         */
        this.invalidExtensionMessagePlural = 'The invalid files have not been added to the attachment list. Accepted file extensions: $var1$';
        /**
         * The message must contain the string $var1$. It'll be replaced during runtime.
         * I.e.: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit: $var1$'
         */
        this.duplicatedMessageSingular = 'The duplicated file has not been added to the attachment list. Rejected files: $var1$';
        /**
         * The message must contain the string $var1$. It'll be replaced during runtime.
         * I.e.: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit: $var1$'
         */
        this.duplicatedMessagePlural = 'The duplicated files have not been added to the attachment list. Rejected files: $var1$';
        /**
         * The message must contain the string $var1$ and $var2$. It'll be replaced during runtime.
         * I.e.: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit: $var1$'
         */
        this.invalidSizeMessageSingular = 'The current file is over $var1$KB and has not been added to the attachment list. Rejected files: $var2$';
        /**
         * The message must contain the string $var1$ and $var2$. It'll be replaced during runtime.
         * I.e.: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit: $var1$'
         */
        this.invalidSizeMessagePlural = 'The files with size over $var1$KB have not been added to the attachment list. Rejected files: $var2$';
        /**
         * The message must contain the string $var1$. It'll be replaced during runtime.
         * I.e.: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit: $var1$'
         */
        this.invalidLengthMessageSingular = 'You can just add one attachment file. Rejected files: $var1$';
        /**
         * The message must contain the string $var1$. It'll be replaced during runtime.
         * I.e.: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit: $var1$'
         */
        this.invalidLengthMessagePlural = 'You can just add $var1$ attachment file. Rejected files: $var2$';
        /**
         * If maxNumberOfFiles value is greater than 1 or equal to -1, multiple files are enabled.
         * Default value = -1.
         */
        this.maxNumberOfFiles = -1;
        /**
         * If maxSize value is calculated in KB.
         * Default value = 46080 (45mb).
         */
        this.maxSize = 46080;
        /**
         * This field does not require to include the dot extension.
         * Example: ["psd", .xlsx", "zip", ".docx", ".pptx"]
         */
        this.acceptFileType = [];
        /**
         * Returns the list of valid attachments added.
         */
        this.$attachmentItems = new EventEmitter();
        /**
         * Returns the list of valid attachments added and fires the upload button.
         */
        this.$uploadClick = new EventEmitter();
        this.attachmentItems = [];
    }
    static fileNameList(list) {
        let listName = '\n';
        for (const [i, item] of list.entries()) {
            const separator = i < (list.length - 1) ? ';\n' : '.';
            listName += `${i + 1}. ${item}${separator}`;
        }
        return listName;
    }
    onFileDropped(fileList) {
        return __awaiter(this, void 0, void 0, function* () {
            const duplicatedList = [];
            const invalidFileList = [];
            const invalidSizeList = [];
            const invalidLengthList = [];
            if (this.maxNumberOfFiles === -1 || this.maxNumberOfFiles > 1) {
                // tslint:disable-next-line:prefer-for-of
                for (let i = 0; i < fileList.length; i++) {
                    const file = fileList[i];
                    const validFile = this.acceptFileType.length > 0 ? AttachmentValidate.fileArray(file.name, this.acceptFileType) : true;
                    const duplicated = AttachmentValidate.duplicated(file.name, this.attachmentItems);
                    const invalidSize = !AttachmentValidate.fileSizeFromArray(this.input.nativeElement, file);
                    if (validFile) {
                        if (duplicated) {
                            duplicatedList.push(file.name);
                        }
                        else if (invalidSize) {
                            invalidSizeList.push(file.name);
                        }
                        else {
                            if (this.maxNumberOfFiles === -1 || this.attachmentItems.length < this.maxNumberOfFiles) {
                                this.addItemToArray(file);
                            }
                            else {
                                invalidLengthList.push(file.name);
                            }
                        }
                    }
                    else {
                        invalidFileList.push(file.name);
                    }
                }
                yield this.showErrorMessage(invalidFileList, duplicatedList, invalidSizeList, invalidLengthList);
            }
            else {
                const arrayCopy = [...this.attachmentItems];
                this.attachmentItems = [];
                // tslint:disable-next-line:prefer-for-of
                for (let i = 0; i < fileList.length; i++) {
                    const file = fileList[i];
                    const validFile = this.acceptFileType.length > 0 ? AttachmentValidate.fileArray(file.name, this.acceptFileType) : true;
                    const duplicated = AttachmentValidate.duplicated(file.name, this.attachmentItems);
                    const invalidSize = !AttachmentValidate.fileSizeFromArray(this.input.nativeElement, file);
                    if (validFile) {
                        if (duplicated) {
                            duplicatedList.push(file.name);
                        }
                        else if (invalidSize) {
                            invalidSizeList.push(file.name);
                        }
                        else {
                            if (this.attachmentItems.length === 0) {
                                this.addItemToArray(file);
                            }
                            else {
                                invalidLengthList.push(file.name);
                            }
                        }
                    }
                    else {
                        invalidFileList.push(file.name);
                    }
                }
                if (this.attachmentItems.length === 0) {
                    this.attachmentItems = [...arrayCopy];
                }
                yield this.showErrorMessage(invalidFileList, duplicatedList, invalidSizeList, invalidLengthList);
            }
            this.input.nativeElement.value = '';
            this.$attachmentItems.emit(this.attachmentItems);
        });
    }
    removeAttachment(removed) {
        const tempList = this.attachmentItems.filter(x => x.id !== removed.id);
        const attachments = [];
        for (const item of tempList) {
            attachments.push({
                id: attachments.length,
                name: item.file.name,
                icon: AttachmentIcon.get(item.file.name),
                file: item.file,
                new: true,
                remove: false
            });
        }
        this.attachmentItems = attachments;
        this.$attachmentItems.emit(attachments);
    }
    fileBrowserHandler(files) {
        return __awaiter(this, void 0, void 0, function* () {
            const fileList = files.files;
            return this.onFileDropped(fileList);
        });
    }
    parsedAcceptList() {
        let accept = '\n';
        for (let i = 0; i < this.acceptFileType.length; i++) {
            const item = this.acceptFileType[i];
            const separator = i < (this.acceptFileType.length - 1) ? ', ' : '';
            let tempExtension;
            if (!item.includes('.', 0)) {
                tempExtension = `.${item}`;
            }
            accept += `${tempExtension}${separator}`;
        }
        return accept;
    }
    click() {
        this.input.nativeElement.click();
    }
    uploadClick() {
        this.$uploadClick.emit(this.attachmentItems);
    }
    onContinueUpload(active) {
        this.$continueUploadActive.emit(active);
        this.continueUpload = active;
    }
    addItemToArray(file) {
        this.attachmentItems.push({
            id: this.attachmentItems.length,
            name: file.name,
            icon: AttachmentIcon.get(file.name),
            file,
            new: true,
            remove: false
        });
    }
    showErrorMessage(invalidFileList, duplicatedList, invalidSizeList, invalidLengthList = []) {
        return __awaiter(this, void 0, void 0, function* () {
            const timeout = 500;
            if (invalidFileList != null && invalidFileList.length > 0) {
                yield this.errorMessage(this.acceptFileType, this.invalidExtensionMessageSingular, this.invalidExtensionMessagePlural);
            }
            if (duplicatedList != null && duplicatedList.length > 0) {
                setTimeout(() => __awaiter(this, void 0, void 0, function* () {
                    yield this.errorMessage(duplicatedList, this.duplicatedMessageSingular, this.duplicatedMessagePlural);
                }), timeout);
            }
            if (invalidSizeList != null && invalidSizeList.length > 0) {
                setTimeout(() => __awaiter(this, void 0, void 0, function* () {
                    yield this.errorMessageTwoVariables(invalidSizeList, this.invalidSizeMessageSingular, this.invalidSizeMessagePlural, this.maxSize.toString());
                }), timeout);
            }
            if (invalidLengthList != null && invalidLengthList.length > 0) {
                setTimeout(() => __awaiter(this, void 0, void 0, function* () {
                    const plural = this.maxNumberOfFiles > 1 ? this.invalidLengthMessagePlural : this.invalidLengthMessageSingular;
                    yield this.errorMessageTwoVariables(invalidLengthList, this.invalidLengthMessageSingular, plural, this.maxNumberOfFiles.toString(), this.maxNumberOfFiles > 1);
                }), timeout);
            }
        });
    }
    errorMessage(arrayList, singularMessage, pluralMessage) {
        return __awaiter(this, void 0, void 0, function* () {
            const fileNames = GlSharedComponentInputDragAndDropSimpleComponent.fileNameList(arrayList);
            const isPlural = arrayList.length > 1;
            const singular = singularMessage.replace('$var1$', fileNames);
            const plural = pluralMessage.replace('$var1$', fileNames);
            const message = isPlural ? plural : singular;
            yield this._alert.show(message);
        });
    }
    errorMessageTwoVariables(arrayList, singularMessage, pluralMessage, firstVariable, isPluralComparator = null) {
        return __awaiter(this, void 0, void 0, function* () {
            const fileNames = GlSharedComponentInputDragAndDropSimpleComponent.fileNameList(arrayList);
            const isPlural = isPluralComparator && arrayList.length > 1 || !isPluralComparator && arrayList.length > 1;
            const singular = singularMessage.replace('$var1$', firstVariable).replace('$var2$', fileNames);
            const plural = pluralMessage.replace('$var1$', firstVariable).replace('$var2$', fileNames);
            const message = isPlural ? plural : singular;
            yield this._alert.show(message);
        });
    }
}
GlSharedComponentInputDragAndDropSimpleComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-input-drag-and-drop-simple',
                template: "<gl-shared-component-input-switch\r\n  *ngIf=\"showContinueUpload\"\r\n  [active]=\"continueUpload\"\r\n  [enabled]=\"!readOnly\"\r\n  [label]=\"continueUploadLabel\"\r\n  (active$)=\"onContinueUpload($event)\"\r\n  class=\"drag-and-drop-continue-switch\"\r\n\r\n  buttonIconSrc=\"../assets/img/icon/upload/resume-upload.svg\"\r\n  labelColor=\"white\"\r\n  [showAsInputButton]=\"true\"\r\n  [showLabel]=\"true\"\r\n></gl-shared-component-input-switch>\r\n\r\n<div\r\n  class=\"file-attachment-container {{ readOnly ? 'readonly' : '' }}\"\r\n  glCoreDirectivesDragAndDrop\r\n  (fileDropped)=\"onFileDropped($event)\"\r\n  (change)=\"fileBrowserHandler($event.target)\"\r\n  (click)=\"fileAttachment.click()\">\r\n\r\n  <div class=\"description-container {{ readOnly ? 'readonly' : '' }}\">\r\n    <img\r\n      alt=\"Upload icon\"\r\n      class=\"upload-icon {{ readOnly ? 'readonly' : '' }}\"\r\n      [src]=\"uploadIcon\">\r\n\r\n    <span *ngIf=\"!readOnly\" class=\"action-description {{ readOnly ? 'readonly' : '' }}\">{{ descriptionDragAndDrop }}</span>\r\n    <span *ngIf=\"!readOnly\" class=\"action-description {{ readOnly ? 'readonly' : '' }}\">{{ descriptionDragAndDropOr }}</span>\r\n    <span *ngIf=\"!readOnly\" class=\"action-description button {{ readOnly ? 'readonly' : '' }}\">{{ descriptionDragAndDropClickHere }}</span>\r\n  </div>\r\n\r\n  <input\r\n    #fileAttachment\r\n    class=\"file-attachment\"\r\n    id=\"file-attachment\"\r\n    type=\"file\"\r\n    [attr.data-maxsize]=\"maxSize\"\r\n    [accept]=\"parsedAcceptList\"\r\n    [disabled]=\"readOnly\"\r\n    [multiple]=\"(maxNumberOfFiles == -1 && maxNumberOfFiles > 1) || (maxNumberOfFiles == null)\">\r\n</div>\r\n<div class=\"attachment-list\">\r\n  <gl-shared-component-attachment-item\r\n    *ngFor=\"let item of attachmentItems\"\r\n    [fileIcon]=\"item.icon\"\r\n    [id]=\"item.id\"\r\n    [fileName]=\"item.name\"\r\n    [disabled]=\"readOnly\"\r\n    [addingSmooth]=\"true\"\r\n\r\n    (removeCurrentItem)=\"removeAttachment($event);\"\r\n  ></gl-shared-component-attachment-item>\r\n</div>\r\n\r\n<div class=\"button-container upload-file\" *ngIf=\"attachmentItems.length > 0\">\r\n  <gl-shared-component-input-button-simple\r\n    [innerValue]=\"uploadButtonValue\"\r\n    [readonly]=\"readOnly\"\r\n    value=\"upload-file\"\r\n    (click)=\"uploadClick()\"\r\n  ></gl-shared-component-input-button-simple>\r\n</div>\r\n",
                styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900\");@import url(\"https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@100;300;400;500;600;700;800;900&display=swap\");:host::ng-deep .file-attachment-container .description-container .action-description.readOnly,:host::ng-deep .file-attachment-container .description-container.readOnly,:host::ng-deep .file-attachment-container .description-container .upload-icon.readOnly,:host::ng-deep .file-attachment-container.readOnly{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;user-focus:none;user-focus-pointer:none;user-input:none;user-modify:none;user-select:none}:host::ng-deep{display:flex;flex-direction:column;flex-grow:1;max-height:-webkit-min-content;max-height:-moz-min-content;max-height:min-content;transition:all .3s ease-in-out}:host::ng-deep gl-shared-component-input-switch{margin:0 0 .15em}:host::ng-deep .file-attachment-container{align-items:center;background-color:hsla(0,0%,100%,.1);border-radius:.2em;display:flex;flex-grow:1;justify-content:center;min-height:8em;position:relative}:host::ng-deep .file-attachment-container .file-attachment{display:none;flex-grow:1;height:100%;left:0;top:0;width:100%}:host::ng-deep .file-attachment-container .description-container{align-items:center;display:flex;flex-direction:column;justify-content:center;width:100%}:host::ng-deep .file-attachment-container .description-container .upload-icon{height:3em;margin:0 0 .3em;width:3em}:host::ng-deep .file-attachment-container .description-container .action-description{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;color:#fff;font-family:Montserrat,sans-serif;font-size:.4em;font-weight:600;padding:.5em;user-select:none}:host::ng-deep .file-attachment-container .description-container .action-description.button{background-color:#b01e45;border-radius:.2em;margin:1em 0 0;opacity:.5;padding:1em 6em;transition:all .5s ease-in-out}:host::ng-deep .file-attachment-container .description-container .action-description.button:hover{opacity:1;transition:all .5s ease-in-out}:host::ng-deep .file-attachment-container .description{color:#fff;font-family:Montserrat,sans-serif;font-size:.5em;font-weight:600;position:absolute;top:50%}:host::ng-deep .attachment-list{border-radius:.2em;display:flex;flex-direction:column;margin:.08em 0 0;max-height:10rem;overflow-y:auto}:host::ng-deep .attachment-list gl-shared-component-attachment-item{font-size:.4em}:host::ng-deep .attachment-list gl-shared-component-attachment-item .attachment-container{background-color:hsla(0,0%,100%,.1);transition:all .3s ease-in-out}:host::ng-deep .attachment-list gl-shared-component-attachment-item .attachment-container .file{color:#fff;width:84.5%}:host::ng-deep .attachment-list gl-shared-component-attachment-item .attachment-container:hover{background-color:hsla(0,0%,100%,.2);transition:all .3s ease-in-out}:host::ng-deep .button-container.upload-file{margin:.1em 0 0;position:relative}:host::ng-deep .button-container.upload-file gl-shared-component-input-button-simple{height:1.6em}:host::ng-deep .button-container.upload-file gl-shared-component-input-button-simple .default-button{background-color:#fff;border-radius:.35em;color:#1a1b1d;font-family:Montserrat,sans-serif;font-size:.4em;font-weight:600;padding:0;text-align:center;text-transform:none}:host::ng-deep .button-container.upload-file .button-icon{border-radius:.15em;height:1.25em;left:.17em;position:absolute;top:.15em;width:1.25em}:host::ng-deep .file-over{-webkit-animation-duration:.3s;-webkit-animation-fill-mode:forwards;-webkit-animation-name:file-over;-webkit-animation-play-state:running;-webkit-animation-timing-function:ease-in-out;animation-duration:.3s;animation-fill-mode:forwards;animation-name:file-over;animation-play-state:running;animation-timing-function:ease-in-out}:host::ng-deep .file-over .description-container .upload-icon{-webkit-animation-duration:.3s;-webkit-animation-iteration-count:infinite;-webkit-animation-name:shake-upload-icon;-webkit-animation-play-state:running;-webkit-animation-timing-function:ease-in-out;animation-duration:.3s;animation-iteration-count:infinite;animation-name:shake-upload-icon;animation-play-state:running;animation-timing-function:ease-in-out}@-webkit-keyframes shake-upload-icon{0%{transform:translateX(.5px) translateY(-.5px) rotate(1deg)}10%{transform:translateX(-.5px) translateY(.5px) rotate(-1deg)}20%{transform:translateX(.5px) translateY(.5px) rotate(0deg)}30%{transform:translateX(1.5px) translateY(-.5px) rotate(1deg)}40%{transform:translateX(-.5px) translateY(1.5px) rotate(-1deg)}50%{transform:translateX(.5px) translateY(-.5px) rotate(0deg)}60%{transform:translateX(2px) translateY(-.5px) rotate(1deg)}70%{transform:translateX(.5px) translateY(.5px) rotate(-1deg)}80%{transform:translateX(.5px) translateY(-.5px) rotate(0deg)}90%{transform:translateX(.5px) translateY(1.5px) rotate(1deg)}to{transform:translateX(.5px) translateY(-.5px) rotate(-1deg)}}@keyframes shake-upload-icon{0%{transform:translateX(.5px) translateY(-.5px) rotate(1deg)}10%{transform:translateX(-.5px) translateY(.5px) rotate(-1deg)}20%{transform:translateX(.5px) translateY(.5px) rotate(0deg)}30%{transform:translateX(1.5px) translateY(-.5px) rotate(1deg)}40%{transform:translateX(-.5px) translateY(1.5px) rotate(-1deg)}50%{transform:translateX(.5px) translateY(-.5px) rotate(0deg)}60%{transform:translateX(2px) translateY(-.5px) rotate(1deg)}70%{transform:translateX(.5px) translateY(.5px) rotate(-1deg)}80%{transform:translateX(.5px) translateY(-.5px) rotate(0deg)}90%{transform:translateX(.5px) translateY(1.5px) rotate(1deg)}to{transform:translateX(.5px) translateY(-.5px) rotate(-1deg)}}@-webkit-keyframes file-over{0%{background-color:hsla(0,0%,100%,.1)}to{background-color:hsla(0,0%,100%,.3)}}@keyframes file-over{0%{background-color:hsla(0,0%,100%,.1)}to{background-color:hsla(0,0%,100%,.3)}}:host::ng-deep .file-not-over{-webkit-animation-duration:.3s;-webkit-animation-fill-mode:forwards;-webkit-animation-name:file-not-over;-webkit-animation-play-state:running;-webkit-animation-timing-function:ease-in-out;animation-duration:.3s;animation-fill-mode:forwards;animation-name:file-not-over;animation-play-state:running;animation-timing-function:ease-in-out}@-webkit-keyframes file-not-over{0%{background-color:hsla(0,0%,100%,.3)}to{background-color:hsla(0,0%,100%,.1)}}@keyframes file-not-over{0%{background-color:hsla(0,0%,100%,.3)}to{background-color:hsla(0,0%,100%,.1)}}"]
            },] }
];
GlSharedComponentInputDragAndDropSimpleComponent.ctorParameters = () => [
    { type: GlSharedComponentModalAlertService }
];
GlSharedComponentInputDragAndDropSimpleComponent.propDecorators = {
    input: [{ type: ViewChild, args: ['fileAttachment',] }],
    showContinueUpload: [{ type: Input }],
    continueUpload: [{ type: Input }],
    continueUploadLabel: [{ type: Input }],
    $continueUploadActive: [{ type: Output }],
    uploadButtonValue: [{ type: Input }],
    readOnly: [{ type: Input }],
    resumeButtonIconSrc: [{ type: Input }],
    descriptionDragAndDrop: [{ type: Input }],
    descriptionDragAndDropOr: [{ type: Input }],
    descriptionDragAndDropClickHere: [{ type: Input }],
    uploadIcon: [{ type: Input }],
    invalidExtensionMessageSingular: [{ type: Input }],
    invalidExtensionMessagePlural: [{ type: Input }],
    duplicatedMessageSingular: [{ type: Input }],
    duplicatedMessagePlural: [{ type: Input }],
    invalidSizeMessageSingular: [{ type: Input }],
    invalidSizeMessagePlural: [{ type: Input }],
    invalidLengthMessageSingular: [{ type: Input }],
    invalidLengthMessagePlural: [{ type: Input }],
    maxNumberOfFiles: [{ type: Input }],
    maxSize: [{ type: Input }],
    acceptFileType: [{ type: Input }],
    $attachmentItems: [{ type: Output }],
    $uploadClick: [{ type: Output }],
    attachmentItems: [{ type: Input }]
};

class GlComponentModule {
}
GlComponentModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    GlSharedComponentAttachmentItemComponent,
                    GlSharedComponentAttachmentImagePreviewComponent,
                    GlSharedComponentButtonAttachmentFileComponent,
                    GlSharedComponentButtonAttachmentLinkComponent,
                    GlSharedComponentButtonImageSimpleComponent,
                    GlSharedComponentButtonImageTooltipComponent,
                    GlSharedComponentButtonInterfaceComponent,
                    GlSharedComponentButtonMenuSimpleComponent,
                    GlSharedComponentButtonMenuTooltipComponent,
                    GlSharedComponentErrorMessageComponent,
                    GlSharedComponentFilterComponent,
                    GlSharedComponentFilterContainerComponent,
                    GlSharedComponentFooterContainerComponent,
                    GlSharedComponentFooterSimpleComponent,
                    GlSharedComponentHeaderDefaultComponent,
                    GlSharedComponentInputAutocompleteLabelComponent,
                    GlSharedComponentInputAutocompleteSimpleComponent,
                    GlSharedComponentInputButtonSimpleComponent,
                    GlSharedComponentInputButtonHyperlinkComponent,
                    GlSharedComponentInputOptionSimpleComponent,
                    GlSharedComponentInputTextSimpleComponent,
                    GlSharedComponentInputTextLabelButtonContainerComponent,
                    GlSharedComponentInputTextLabelSimpleComponent,
                    GlSharedComponentInputTextAreaSimpleComponent,
                    GlSharedComponentInputTextAreaLabelComponent,
                    GlSharedComponentLogoSquareComponent,
                    GlSharedComponentModalAlertComponent,
                    GlSharedComponentModalAttachmentLinkComponent,
                    GlSharedComponentModalHeaderComponent,
                    GlSharedComponentModalLoadingComponent,
                    GlSharedComponentMenuBackgroundComponent,
                    GlSharedComponentMenuComponent,
                    GlSharedComponentMenuItemComponent,
                    GlSharedComponentNavigationTabSimpleComponent,
                    GlSharedComponentNavigationTabContainerComponent,
                    GlSharedComponentPagingComponent,
                    GlSharedComponentTitleLabelSimpleComponent,
                    GlSharedComponentTitleLabelButtonSimpleComponent,
                    GlSharedComponentTitleLabelButtonContainerComponent,
                    GlSharedComponentTitlePageComponent,
                    GlSharedComponentInputDatepickerSimpleDayMonthYearComponent,
                    GlSharedComponentInputDatepickerSimpleMonthYearComponent,
                    GlSharedComponentInputDatepickerLabelComponent,
                    GlSharedComponentInputDatepickerLabelComponent,
                    GlSharedComponentInputSwitchComponent,
                    GlSharedComponentInputTextSimpleWithStepComponent,
                    GlSharedComponentInputListItemRemoveComponent,
                    GlSharedComponentInputListItemUpDownComponent,
                    GlSharedComponentInputCheckBoxSimpleComponent,
                    GlSharedComponentInputCheckBoxLabelComponent,
                    GlSharedComponentInputDragAndDropSimpleComponent
                ],
                imports: [
                    CommonModule,
                    GlCoreModule,
                    RouterModule,
                    MatFormFieldModule,
                    MatInputModule,
                    MatAutocompleteModule,
                    MatDialogModule,
                    BrowserAnimationsModule,
                    FormsModule,
                    ReactiveFormsModule,
                    OverlayModule,
                    MatDatepickerModule
                ],
                exports: [
                    GlSharedComponentAttachmentItemComponent,
                    GlSharedComponentAttachmentImagePreviewComponent,
                    GlSharedComponentButtonImageSimpleComponent,
                    GlSharedComponentButtonAttachmentLinkComponent,
                    GlSharedComponentButtonImageTooltipComponent,
                    GlSharedComponentButtonInterfaceComponent,
                    GlSharedComponentButtonMenuSimpleComponent,
                    GlSharedComponentButtonMenuTooltipComponent,
                    GlSharedComponentErrorMessageComponent,
                    GlSharedComponentFilterComponent,
                    GlSharedComponentFilterContainerComponent,
                    GlSharedComponentFooterContainerComponent,
                    GlSharedComponentFooterSimpleComponent,
                    GlSharedComponentHeaderDefaultComponent,
                    GlSharedComponentInputAutocompleteLabelComponent,
                    GlSharedComponentInputAutocompleteSimpleComponent,
                    GlSharedComponentInputButtonSimpleComponent,
                    GlSharedComponentInputButtonHyperlinkComponent,
                    GlSharedComponentInputDragAndDropSimpleComponent,
                    GlSharedComponentInputOptionSimpleComponent,
                    GlSharedComponentInputTextAreaSimpleComponent,
                    GlSharedComponentInputTextAreaLabelComponent,
                    GlSharedComponentInputTextLabelButtonContainerComponent,
                    GlSharedComponentInputTextLabelSimpleComponent,
                    GlSharedComponentInputTextSimpleComponent,
                    GlSharedComponentLogoSquareComponent,
                    GlSharedComponentMenuBackgroundComponent,
                    GlSharedComponentMenuComponent,
                    GlSharedComponentMenuItemComponent,
                    GlSharedComponentModalAlertComponent,
                    GlSharedComponentModalAttachmentLinkComponent,
                    GlSharedComponentModalHeaderComponent,
                    GlSharedComponentModalLoadingComponent,
                    GlSharedComponentNavigationTabSimpleComponent,
                    GlSharedComponentNavigationTabContainerComponent,
                    GlSharedComponentPagingComponent,
                    GlSharedComponentTitlePageComponent,
                    GlSharedComponentTitleLabelButtonSimpleComponent,
                    GlSharedComponentTitleLabelButtonContainerComponent,
                    GlSharedComponentTitleLabelSimpleComponent,
                    GlSharedComponentButtonAttachmentFileComponent,
                    GlSharedComponentInputDatepickerSimpleDayMonthYearComponent,
                    GlSharedComponentInputDatepickerSimpleMonthYearComponent,
                    GlSharedComponentInputDatepickerLabelComponent,
                    GlSharedComponentInputSwitchComponent,
                    GlSharedComponentInputTextSimpleWithStepComponent,
                    GlSharedComponentInputListItemRemoveComponent,
                    GlSharedComponentInputListItemUpDownComponent,
                    GlSharedComponentInputCheckBoxSimpleComponent,
                    GlSharedComponentInputCheckBoxLabelComponent
                ]
            },] }
];

class GlSharedModule {
}
GlSharedModule.decorators = [
    { type: NgModule, args: [{
                declarations: [],
                imports: [
                    CommonModule,
                    GlComponentModule
                ]
            },] }
];

class GlNgFrontendModule {
    constructor() { }
}
GlNgFrontendModule.decorators = [
    { type: NgModule, args: [{
                declarations: [],
                imports: [
                    BrowserModule,
                    HttpClientModule,
                    ReactiveFormsModule,
                    GlSharedModule,
                    GlCoreModule,
                ],
                exports: [],
                providers: []
            },] }
];
GlNgFrontendModule.ctorParameters = () => [];

class GlSharedViewErrorMessageComponent {
    constructor() {
        this.logoHorizontalPosition = 'left';
        this.logoVerticalPosition = 'top';
        this.errorPosition = 'left';
        this.errorButtonAction$ = new EventEmitter();
        this.footerImageDescription = 'Image logo';
    }
    ngAfterViewInit() {
        const mainContainer = this.mainContainer.nativeElement;
        const mainContainerParent = this.mainContainer.nativeElement.parentNode;
        mainContainer.style.backgroundImage = `url(${this.background})`;
        mainContainerParent.style.backgroundImage = `url(${this.blurBackground})`;
    }
    errorButtonAction() {
        this.errorButtonAction$.emit();
    }
}
GlSharedViewErrorMessageComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-view-error-message',
                template: "<div #mainContainer class=\"main-container\">\r\n  <gl-shared-component-logo-square\r\n    [horizontalPosition]=\"logoHorizontalPosition\"\r\n    [verticalPosition]=\"logoVerticalPosition\"\r\n    [imageAlt]=\"logoImageAlt\"\r\n    [imageScr]=\"logoImageScr\"\r\n  ></gl-shared-component-logo-square>\r\n  <gl-shared-component-error-message\r\n    [position]=\"errorPosition\"\r\n    [errorCode]=\"errorCode\"\r\n    [errorMessage]=\"errorMessage\"\r\n    [buttonLabel]=\"errorButtonLabel\"\r\n    (buttonAction$)=\"errorButtonAction()\"\r\n  ></gl-shared-component-error-message>\r\n  <gl-shared-component-footer-container [description]=\"footerMainDescription\">\r\n    <gl-shared-component-input-button-hyperlink\r\n      *ngIf=\"footerShowContainer\"\r\n      [description]=\"footerDescription\"\r\n      [imageDescription]=\"footerImageDescription\"\r\n      [imageSrc]=\"footerImageSrc\"\r\n      [link]=\"footerLink\"\r\n    ></gl-shared-component-input-button-hyperlink>\r\n  </gl-shared-component-footer-container>\r\n</div>\r\n",
                styles: [":host::ng-deep{background-color:#1a1b1d;display:flex;flex-grow:1}:host::ng-deep .main-container{-webkit-animation-duration:3s;-webkit-animation-fill-mode:forwards;-webkit-animation-name:start;-webkit-animation-play-state:running;animation-duration:3s;animation-fill-mode:forwards;animation-name:start;animation-play-state:running;background-position:top;background-repeat:no-repeat;background-size:101%;display:flex;flex-direction:column;flex-grow:1;height:100vh;justify-items:stretch;overflow:hidden;width:100vw}@-webkit-keyframes start{0%{opacity:0}to{opacity:1}}@keyframes start{0%{opacity:0}to{opacity:1}}"]
            },] }
];
GlSharedViewErrorMessageComponent.ctorParameters = () => [];
GlSharedViewErrorMessageComponent.propDecorators = {
    mainContainer: [{ type: ViewChild, args: ['mainContainer',] }],
    blurBackground: [{ type: Input }],
    background: [{ type: Input }],
    logoImageScr: [{ type: Input }],
    logoImageAlt: [{ type: Input }],
    logoHorizontalPosition: [{ type: Input }],
    logoVerticalPosition: [{ type: Input }],
    errorPosition: [{ type: Input }],
    errorCode: [{ type: Input }],
    errorMessage: [{ type: Input }],
    errorButtonLabel: [{ type: Input }],
    errorButtonAction$: [{ type: Output }],
    footerMainDescription: [{ type: Input }],
    footerShowContainer: [{ type: Input }],
    footerDescription: [{ type: Input }],
    footerImageDescription: [{ type: Input }],
    footerImageSrc: [{ type: Input }],
    footerLink: [{ type: Input }]
};

class GlSharedViewModule {
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

/*
 * Public API Surface of gl-ng-frontend
 */
// endregion
// endregion

/**
 * Generated bundle index. Do not edit.
 */

export { CoreDirectivesAutofocusDirective, CoreDirectivesDragAndDropDirective, GlComponentModule, GlCoreModule, GlNgFrontendModule, GlSharedComponentAttachmentImagePreviewComponent, GlSharedComponentAttachmentImagePreviewService, GlSharedComponentAttachmentItemComponent, GlSharedComponentButtonAttachmentFileComponent, GlSharedComponentButtonAttachmentFileService, GlSharedComponentButtonAttachmentLinkComponent, GlSharedComponentButtonImageSimpleComponent, GlSharedComponentButtonImageTooltipComponent, GlSharedComponentButtonInterfaceComponent, GlSharedComponentButtonMenuSimpleComponent, GlSharedComponentButtonMenuTooltipComponent, GlSharedComponentErrorMessageComponent, GlSharedComponentFilterComponent, GlSharedComponentFilterContainerComponent, GlSharedComponentFilterService, GlSharedComponentFooterContainerComponent, GlSharedComponentFooterSimpleComponent, GlSharedComponentHeaderDefaultComponent, GlSharedComponentInputAutocompleteLabelComponent, GlSharedComponentInputAutocompleteSimpleComponent, GlSharedComponentInputAutocompleteSimpleService, GlSharedComponentInputButtonHyperlinkComponent, GlSharedComponentInputButtonSimpleComponent, GlSharedComponentInputCheckBoxLabelComponent, GlSharedComponentInputCheckBoxSimpleComponent, GlSharedComponentInputDatepickerLabelComponent, GlSharedComponentInputDragAndDropSimpleComponent, GlSharedComponentInputListItemRemoveComponent, GlSharedComponentInputListItemUpDownComponent, GlSharedComponentInputOptionSimpleComponent, GlSharedComponentInputSwitchComponent, GlSharedComponentInputTextAreaLabelComponent, GlSharedComponentInputTextAreaSimpleComponent, GlSharedComponentInputTextLabelButtonContainerComponent, GlSharedComponentInputTextLabelSimpleComponent, GlSharedComponentInputTextSimpleComponent, GlSharedComponentInputTextSimpleService, GlSharedComponentInputTextSimpleWithStepComponent, GlSharedComponentLogoSquareComponent, GlSharedComponentMenuBackgroundComponent, GlSharedComponentMenuComponent, GlSharedComponentMenuItemComponent, GlSharedComponentMenuService, GlSharedComponentModalAlertComponent, GlSharedComponentModalAlertService, GlSharedComponentModalAttachmentLinkComponent, GlSharedComponentModalAttachmentLinkService, GlSharedComponentModalHeaderComponent, GlSharedComponentModalLoadingComponent, GlSharedComponentModalLoadingService, GlSharedComponentNavigationTabContainerComponent, GlSharedComponentNavigationTabSimpleComponent, GlSharedComponentPagingComponent, GlSharedComponentTitleLabelButtonContainerComponent, GlSharedComponentTitleLabelButtonSimpleComponent, GlSharedComponentTitleLabelSimpleComponent, GlSharedComponentTitlePageComponent, GlSharedModule, GlSharedViewErrorMessageComponent, GlSharedViewModule, glSharedComponentInputDatepickerSimpleDayMonthYear_component as datePickerDayMonthYear, glSharedComponentInputDatepickerSimpleMonthYear_component as datePickerMonthYear, GlSharedComponentInputDatepickerSimpleDayMonthYearComponent as ɵa, GlSharedComponentInputDatepickerSimpleMonthYearComponent as ɵb };
//# sourceMappingURL=gl-ng-frontend.js.map
