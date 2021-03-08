import { __awaiter } from "tslib";
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { AttachmentIcon, AttachmentValidate } from 'gl-w-frontend';
import { GlSharedComponentModalAlertService } from '../../../modal/alert/gl-shared-component-modal-alert.service';
export class GlSharedComponentInputDragAndDropSimpleComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1kcmFnLWFuZC1kcm9wLXNpbXBsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9nbC1uZy1mcm9udGVuZC9zcmMvbGliL3NoYXJlZC9jb21wb25lbnQvaW5wdXQvZHJhZy1hbmQtZHJvcC9zaW1wbGUvZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1kcmFnLWFuZC1kcm9wLXNpbXBsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlGLE9BQU8sRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkUsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sOERBQThELENBQUM7QUFPbEgsTUFBTSxPQUFPLGdEQUFnRDtJQTRGM0QsWUFBb0IsTUFBMEM7UUFBMUMsV0FBTSxHQUFOLE1BQU0sQ0FBb0M7UUF2RnJELHdCQUFtQixHQUFHLDJCQUEyQixDQUFDO1FBQ2pELDBCQUFxQixHQUEwQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRW5FLHNCQUFpQixHQUFHLGNBQWMsQ0FBQztRQUNuQyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBTWpCLDJCQUFzQixHQUFHLHdCQUF3QixDQUFDO1FBQ2xELDZCQUF3QixHQUFHLElBQUksQ0FBQztRQUNoQyxvQ0FBK0IsR0FBRyxZQUFZLENBQUM7UUFFL0MsZUFBVSxHQUFHLHNDQUFzQyxDQUFDO1FBRTdEOzs7V0FHRztRQUNNLG9DQUErQixHQUFHLDZGQUE2RixDQUFDO1FBQ3pJOzs7V0FHRztRQUNNLGtDQUE2QixHQUFHLGdHQUFnRyxDQUFDO1FBQzFJOzs7V0FHRztRQUVNLDhCQUF5QixHQUFHLHVG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YSxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQztZQUUzRixNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1lBRTdDLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEMsQ0FBQztLQUFBOzs7WUE5U0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnREFBZ0Q7Z0JBQzFELDQzRUFBOEU7O2FBRS9FOzs7WUFOUSxrQ0FBa0M7OztvQkFReEMsU0FBUyxTQUFDLGdCQUFnQjtpQ0FFMUIsS0FBSzs2QkFDTCxLQUFLO2tDQUNMLEtBQUs7b0NBQ0wsTUFBTTtnQ0FFTixLQUFLO3VCQUNMLEtBQUs7a0NBS0wsS0FBSztxQ0FDTCxLQUFLO3VDQUNMLEtBQUs7OENBQ0wsS0FBSzt5QkFFTCxLQUFLOzhDQU1MLEtBQUs7NENBS0wsS0FBSzt3Q0FNTCxLQUFLO3NDQUtMLEtBQUs7eUNBTUwsS0FBSzt1Q0FLTCxLQUFLOzJDQU1MLEtBQUs7eUNBS0wsS0FBSzsrQkFNTCxLQUFLO3NCQUtMLEtBQUs7NkJBS0wsS0FBSzsrQkFJTCxNQUFNOzJCQUlOLE1BQU07OEJBRU4sS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQXR0YWNobWVudEljb24sIEF0dGFjaG1lbnRWYWxpZGF0ZSB9IGZyb20gJ2dsLXctZnJvbnRlbmQnO1xyXG5pbXBvcnQgeyBJQXR0YWNobWVudERhdGEgfSBmcm9tICdnbC13LWZyb250ZW5kL2xpYi9zY3JpcHRzL2NvcmUvc2VydmljZXMvYXR0YWNobWVudC9jb3JlLXNlcnZpY2VzLWF0dGFjaG1lbnQuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgR2xTaGFyZWRDb21wb25lbnRNb2RhbEFsZXJ0U2VydmljZSB9IGZyb20gJy4uLy4uLy4uL21vZGFsL2FsZXJ0L2dsLXNoYXJlZC1jb21wb25lbnQtbW9kYWwtYWxlcnQuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtZHJhZy1hbmQtZHJvcC1zaW1wbGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9nbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LWRyYWctYW5kLWRyb3Atc2ltcGxlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9nbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LWRyYWctYW5kLWRyb3Atc2ltcGxlLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEdsU2hhcmVkQ29tcG9uZW50SW5wdXREcmFnQW5kRHJvcFNpbXBsZUNvbXBvbmVudCB7XHJcbiAgQFZpZXdDaGlsZCgnZmlsZUF0dGFjaG1lbnQnKSBpbnB1dDogRWxlbWVudFJlZjxIVE1MSW5wdXRFbGVtZW50PjtcclxuXHJcbiAgQElucHV0KCkgc2hvd0NvbnRpbnVlVXBsb2FkOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGNvbnRpbnVlVXBsb2FkOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGNvbnRpbnVlVXBsb2FkTGFiZWwgPSAnQ29udGludWUgcHJldmlvdXMgbG9hZGluZyc7XHJcbiAgQE91dHB1dCgpICRjb250aW51ZVVwbG9hZEFjdGl2ZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBASW5wdXQoKSB1cGxvYWRCdXR0b25WYWx1ZSA9ICdVcGxvYWQgZmlsZXMnO1xyXG4gIEBJbnB1dCgpIHJlYWRPbmx5ID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIEluIGNhc2UgdGhlIGJ1dHRvbiBpY29uIHNvdXJjZSBpcyBub3QgcGFzc2VkLCB0aGUgaWNvbiB3aWxsIGJlIGhpZGRlbi5cclxuICAgKi9cclxuICBASW5wdXQoKSByZXN1bWVCdXR0b25JY29uU3JjOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZGVzY3JpcHRpb25EcmFnQW5kRHJvcCA9ICdEcmFnIGFuZCBkcm9wIHRoZSBmaWxlJztcclxuICBASW5wdXQoKSBkZXNjcmlwdGlvbkRyYWdBbmREcm9wT3IgPSAnb3InO1xyXG4gIEBJbnB1dCgpIGRlc2NyaXB0aW9uRHJhZ0FuZERyb3BDbGlja0hlcmUgPSAnQ2xpY2sgaGVyZSc7XHJcblxyXG4gIEBJbnB1dCgpIHVwbG9hZEljb24gPSAnLi4vYXNzZXRzL2ltZy9pY29uL3VwbG9hZC91cGxvYWQuc3ZnJztcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIG1lc3NhZ2UgbXVzdCBjb250YWluIHRoZSBzdHJpbmcgJHZhcjEkLiBJdCdsbCBiZSByZXBsYWNlZCBkdXJpbmcgcnVudGltZS5cclxuICAgKiBJLmUuOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdDogJHZhcjEkJ1xyXG4gICAqL1xyXG4gIEBJbnB1dCgpIGludmFsaWRFeHRlbnNpb25NZXNzYWdlU2luZ3VsYXIgPSAnVGhlIGludmxpZCBmaWxlIGhhcyBub3QgYmVlbiBhZGRlZCB0byB0aGUgYXR0YWNobWVudCBsaXN0LiBBY2NlcHRlZCBmaWxlIGV4dGVuc2lvbnM6ICR2YXIxJCc7XHJcbiAgLyoqXHJcbiAgICogVGhlIG1lc3NhZ2UgbXVzdCBjb250YWluIHRoZSBzdHJpbmcgJHZhcjEkLiBJdCdsbCBiZSByZXBsYWNlZCBkdXJpbmcgcnVudGltZS5cclxuICAgKiBJLmUuOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdDogJHZhcjEkJ1xyXG4gICAqL1xyXG4gIEBJbnB1dCgpIGludmFsaWRFeHRlbnNpb25NZXNzYWdlUGx1cmFsID0gJ1RoZSBpbnZhbGlkIGZpbGVzIGhhdmUgbm90IGJlZW4gYWRkZWQgdG8gdGhlIGF0dGFjaG1lbnQgbGlzdC4gQWNjZXB0ZWQgZmlsZSBleHRlbnNpb25zOiAkdmFyMSQnO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBtZXNzYWdlIG11c3QgY29udGFpbiB0aGUgc3RyaW5nICR2YXIxJC4gSXQnbGwgYmUgcmVwbGFjZWQgZHVyaW5nIHJ1bnRpbWUuXHJcbiAgICogSS5lLjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQ6ICR2YXIxJCdcclxuICAgKi9cclxuXHJcbiAgQElucHV0KCkgZHVwbGljYXRlZE1lc3NhZ2VTaW5ndWxhciA9ICdUaGUgZHVwbGljYXRlZCBmaWxlIGhhcyBub3QgYmVlbiBhZGRlZCB0byB0aGUgYXR0YWNobWVudCBsaXN0LiBSZWplY3RlZCBmaWxlczogJHZhcjEkJztcclxuICAvKipcclxuICAgKiBUaGUgbWVzc2FnZSBtdXN0IGNvbnRhaW4gdGhlIHN0cmluZyAkdmFyMSQuIEl0J2xsIGJlIHJlcGxhY2VkIGR1cmluZyBydW50aW1lLlxyXG4gICAqIEkuZS46ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0OiAkdmFyMSQnXHJcbiAgICovXHJcbiAgQElucHV0KCkgZHVwbGljYXRlZE1lc3NhZ2VQbHVyYWwgPSAnVGhlIGR1cGxpY2F0ZWQgZmlsZXMgaGF2ZSBub3QgYmVlbiBhZGRlZCB0byB0aGUgYXR0YWNobWVudCBsaXN0LiBSZWplY3RlZCBmaWxlczogJHZhcjEkJztcclxuICAvKipcclxuICAgKiBUaGUgbWVzc2FnZSBtdXN0IGNvbnRhaW4gdGhlIHN0cmluZyAkdmFyMSQgYW5kICR2YXIyJC4gSXQnbGwgYmUgcmVwbGFjZWQgZHVyaW5nIHJ1bnRpbWUuXHJcbiAgICogSS5lLjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQ6ICR2YXIxJCdcclxuICAgKi9cclxuXHJcbiAgQElucHV0KCkgaW52YWxpZFNpemVNZXNzYWdlU2luZ3VsYXIgPSAnVGhlIGN1cnJlbnQgZmlsZSBpcyBvdmVyICR2YXIxJEtCIGFuZCBoYXMgbm90IGJlZW4gYWRkZWQgdG8gdGhlIGF0dGFjaG1lbnQgbGlzdC4gUmVqZWN0ZWQgZmlsZXM6ICR2YXIyJCc7XHJcbiAgLyoqXHJcbiAgICogVGhlIG1lc3NhZ2UgbXVzdCBjb250YWluIHRoZSBzdHJpbmcgJHZhcjEkIGFuZCAkdmFyMiQuIEl0J2xsIGJlIHJlcGxhY2VkIGR1cmluZyBydW50aW1lLlxyXG4gICAqIEkuZS46ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0OiAkdmFyMSQnXHJcbiAgICovXHJcbiAgQElucHV0KCkgaW52YWxpZFNpemVNZXNzYWdlUGx1cmFsID0gJ1RoZSBmaWxlcyB3aXRoIHNpemUgb3ZlciAkdmFyMSRLQiBoYXZlIG5vdCBiZWVuIGFkZGVkIHRvIHRoZSBhdHRhY2htZW50IGxpc3QuIFJlamVjdGVkIGZpbGVzOiAkdmFyMiQnO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgbWVzc2FnZSBtdXN0IGNvbnRhaW4gdGhlIHN0cmluZyAkdmFyMSQuIEl0J2xsIGJlIHJlcGxhY2VkIGR1cmluZyBydW50aW1lLlxyXG4gICAqIEkuZS46ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0OiAkdmFyMSQnXHJcbiAgICovXHJcbiAgQElucHV0KCkgaW52YWxpZExlbmd0aE1lc3NhZ2VTaW5ndWxhciA9ICdZb3UgY2FuIGp1c3QgYWRkIG9uZSBhdHRhY2htZW50IGZpbGUuIFJlamVjdGVkIGZpbGVzOiAkdmFyMSQnO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBtZXNzYWdlIG11c3QgY29udGFpbiB0aGUgc3RyaW5nICR2YXIxJC4gSXQnbGwgYmUgcmVwbGFjZWQgZHVyaW5nIHJ1bnRpbWUuXHJcbiAgICogSS5lLjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQ6ICR2YXIxJCdcclxuICAgKi9cclxuICBASW5wdXQoKSBpbnZhbGlkTGVuZ3RoTWVzc2FnZVBsdXJhbCA9ICdZb3UgY2FuIGp1c3QgYWRkICR2YXIxJCBhdHRhY2htZW50IGZpbGUuIFJlamVjdGVkIGZpbGVzOiAkdmFyMiQnO1xyXG5cclxuICAvKipcclxuICAgKiBJZiBtYXhOdW1iZXJPZkZpbGVzIHZhbHVlIGlzIGdyZWF0ZXIgdGhhbiAxIG9yIGVxdWFsIHRvIC0xLCBtdWx0aXBsZSBmaWxlcyBhcmUgZW5hYmxlZC5cclxuICAgKiBEZWZhdWx0IHZhbHVlID0gLTEuXHJcbiAgICovXHJcbiAgQElucHV0KCkgbWF4TnVtYmVyT2ZGaWxlcyA9IC0xO1xyXG4gIC8qKlxyXG4gICAqIElmIG1heFNpemUgdmFsdWUgaXMgY2FsY3VsYXRlZCBpbiBLQi5cclxuICAgKiBEZWZhdWx0IHZhbHVlID0gNDYwODAgKDQ1bWIpLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIG1heFNpemUgPSA0NjA4MDtcclxuICAvKipcclxuICAgKiBUaGlzIGZpZWxkIGRvZXMgbm90IHJlcXVpcmUgdG8gaW5jbHVkZSB0aGUgZG90IGV4dGVuc2lvbi5cclxuICAgKiBFeGFtcGxlOiBbXCJwc2RcIiwgLnhsc3hcIiwgXCJ6aXBcIiwgXCIuZG9jeFwiLCBcIi5wcHR4XCJdXHJcbiAgICovXHJcbiAgQElucHV0KCkgYWNjZXB0RmlsZVR5cGU6IHN0cmluZ1tdID0gW107XHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB0aGUgbGlzdCBvZiB2YWxpZCBhdHRhY2htZW50cyBhZGRlZC5cclxuICAgKi9cclxuICBAT3V0cHV0KCkgJGF0dGFjaG1lbnRJdGVtczogRXZlbnRFbWl0dGVyPElBdHRhY2htZW50RGF0YVtdPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAvKipcclxuICAgKiBSZXR1cm5zIHRoZSBsaXN0IG9mIHZhbGlkIGF0dGFjaG1lbnRzIGFkZGVkIGFuZCBmaXJlcyB0aGUgdXBsb2FkIGJ1dHRvbi5cclxuICAgKi9cclxuICBAT3V0cHV0KCkgJHVwbG9hZENsaWNrOiBFdmVudEVtaXR0ZXI8SUF0dGFjaG1lbnREYXRhW10+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBASW5wdXQoKSBhdHRhY2htZW50SXRlbXM6IElBdHRhY2htZW50RGF0YVtdID0gW107XHJcblxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hbGVydDogR2xTaGFyZWRDb21wb25lbnRNb2RhbEFsZXJ0U2VydmljZSkgeyB9XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIGZpbGVOYW1lTGlzdChsaXN0OiBzdHJpbmdbXSk6IHN0cmluZyB7XHJcbiAgICBsZXQgbGlzdE5hbWUgPSAnXFxuJztcclxuICAgIGZvciAoY29uc3QgW2ksIGl0ZW1dIG9mIGxpc3QuZW50cmllcygpKSB7XHJcbiAgICAgIGNvbnN0IHNlcGFyYXRvciA9IGkgPCAobGlzdC5sZW5ndGggLSAxKSA/ICc7XFxuJyA6ICcuJztcclxuICAgICAgbGlzdE5hbWUgKz0gYCR7aSArIDF9LiAke2l0ZW19JHtzZXBhcmF0b3J9YDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbGlzdE5hbWU7XHJcbiAgfVxyXG5cclxuICBhc3luYyBvbkZpbGVEcm9wcGVkKGZpbGVMaXN0OiBGaWxlTGlzdCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgY29uc3QgZHVwbGljYXRlZExpc3Q6IHN0cmluZ1tdID0gW107XHJcbiAgICBjb25zdCBpbnZhbGlkRmlsZUxpc3Q6IHN0cmluZ1tdID0gW107XHJcbiAgICBjb25zdCBpbnZhbGlkU2l6ZUxpc3Q6IHN0cmluZ1tdID0gW107XHJcbiAgICBjb25zdCBpbnZhbGlkTGVuZ3RoTGlzdDogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgICBpZiAodGhpcy5tYXhOdW1iZXJPZkZpbGVzID09PSAtMSB8fCB0aGlzLm1heE51bWJlck9mRmlsZXMgPiAxKSB7XHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpwcmVmZXItZm9yLW9mXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsZUxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBmaWxlID0gZmlsZUxpc3RbaV07XHJcbiAgICAgICAgY29uc3QgdmFsaWRGaWxlID0gdGhpcy5hY2NlcHRGaWxlVHlwZS5sZW5ndGggPiAwID8gQXR0YWNobWVudFZhbGlkYXRlLmZpbGVBcnJheShmaWxlLm5hbWUsIHRoaXMuYWNjZXB0RmlsZVR5cGUpIDogIHRydWU7XHJcbiAgICAgICAgY29uc3QgZHVwbGljYXRlZCA9IEF0dGFjaG1lbnRWYWxpZGF0ZS5kdXBsaWNhdGVkKGZpbGUubmFtZSwgdGhpcy5hdHRhY2htZW50SXRlbXMpO1xyXG4gICAgICAgIGNvbnN0IGludmFsaWRTaXplID0gIUF0dGFjaG1lbnRWYWxpZGF0ZS5maWxlU2l6ZUZyb21BcnJheSh0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQsIGZpbGUpO1xyXG5cclxuICAgICAgICBpZiAodmFsaWRGaWxlKSB7XHJcbiAgICAgICAgICBpZiAoZHVwbGljYXRlZCkge1xyXG4gICAgICAgICAgICBkdXBsaWNhdGVkTGlzdC5wdXNoKGZpbGUubmFtZSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGludmFsaWRTaXplKSB7XHJcbiAgICAgICAgICAgIGludmFsaWRTaXplTGlzdC5wdXNoKGZpbGUubmFtZSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5tYXhOdW1iZXJPZkZpbGVzID09PSAtMSB8fCB0aGlzLmF0dGFjaG1lbnRJdGVtcy5sZW5ndGggPCB0aGlzLm1heE51bWJlck9mRmlsZXMpIHtcclxuICAgICAgICAgICAgICB0aGlzLmFkZEl0ZW1Ub0FycmF5KGZpbGUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGludmFsaWRMZW5ndGhMaXN0LnB1c2goZmlsZS5uYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpbnZhbGlkRmlsZUxpc3QucHVzaChmaWxlLm5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgYXdhaXQgdGhpcy5zaG93RXJyb3JNZXNzYWdlKGludmFsaWRGaWxlTGlzdCwgZHVwbGljYXRlZExpc3QsIGludmFsaWRTaXplTGlzdCwgaW52YWxpZExlbmd0aExpc3QpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgYXJyYXlDb3B5ID0gWy4uLnRoaXMuYXR0YWNobWVudEl0ZW1zXTtcclxuICAgICAgdGhpcy5hdHRhY2htZW50SXRlbXMgPSBbXTtcclxuXHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpwcmVmZXItZm9yLW9mXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsZUxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBmaWxlID0gZmlsZUxpc3RbaV07XHJcbiAgICAgICAgY29uc3QgdmFsaWRGaWxlID0gdGhpcy5hY2NlcHRGaWxlVHlwZS5sZW5ndGggPiAwID8gQXR0YWNobWVudFZhbGlkYXRlLmZpbGVBcnJheShmaWxlLm5hbWUsIHRoaXMuYWNjZXB0RmlsZVR5cGUpIDogIHRydWU7XHJcbiAgICAgICAgY29uc3QgZHVwbGljYXRlZCA9IEF0dGFjaG1lbnRWYWxpZGF0ZS5kdXBsaWNhdGVkKGZpbGUubmFtZSwgdGhpcy5hdHRhY2htZW50SXRlbXMpO1xyXG4gICAgICAgIGNvbnN0IGludmFsaWRTaXplID0gIUF0dGFjaG1lbnRWYWxpZGF0ZS5maWxlU2l6ZUZyb21BcnJheSh0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQsIGZpbGUpO1xyXG5cclxuICAgICAgICBpZiAodmFsaWRGaWxlKSB7XHJcbiAgICAgICAgICBpZiAoZHVwbGljYXRlZCkge1xyXG4gICAgICAgICAgICBkdXBsaWNhdGVkTGlzdC5wdXNoKGZpbGUubmFtZSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGludmFsaWRTaXplKSB7XHJcbiAgICAgICAgICAgIGludmFsaWRTaXplTGlzdC5wdXNoKGZpbGUubmFtZSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5hdHRhY2htZW50SXRlbXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5hZGRJdGVtVG9BcnJheShmaWxlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBpbnZhbGlkTGVuZ3RoTGlzdC5wdXNoKGZpbGUubmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaW52YWxpZEZpbGVMaXN0LnB1c2goZmlsZS5uYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLmF0dGFjaG1lbnRJdGVtcy5sZW5ndGggPT09IDApIHsgdGhpcy5hdHRhY2htZW50SXRlbXMgPSBbLi4uYXJyYXlDb3B5XTsgfVxyXG4gICAgICBhd2FpdCB0aGlzLnNob3dFcnJvck1lc3NhZ2UoaW52YWxpZEZpbGVMaXN0LCBkdXBsaWNhdGVkTGlzdCwgaW52YWxpZFNpemVMaXN0LCBpbnZhbGlkTGVuZ3RoTGlzdCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LnZhbHVlID0gJyc7XHJcbiAgICB0aGlzLiRhdHRhY2htZW50SXRlbXMuZW1pdCh0aGlzLmF0dGFjaG1lbnRJdGVtcyk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVBdHRhY2htZW50KHJlbW92ZWQpOiB2b2lkIHtcclxuICAgIGNvbnN0IHRlbXBMaXN0ID0gdGhpcy5hdHRhY2htZW50SXRlbXMuZmlsdGVyKHggPT4geC5pZCAhPT0gcmVtb3ZlZC5pZCk7XHJcbiAgICBjb25zdCBhdHRhY2htZW50czogSUF0dGFjaG1lbnREYXRhW10gPSBbXTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGVtcExpc3QpIHtcclxuICAgICAgYXR0YWNobWVudHMucHVzaCh7XHJcbiAgICAgICAgaWQ6IGF0dGFjaG1lbnRzLmxlbmd0aCxcclxuICAgICAgICBuYW1lOiBpdGVtLmZpbGUubmFtZSxcclxuICAgICAgICBpY29uOiBBdHRhY2htZW50SWNvbi5nZXQoaXRlbS5maWxlLm5hbWUpLFxyXG4gICAgICAgIGZpbGU6IGl0ZW0uZmlsZSxcclxuICAgICAgICBuZXc6IHRydWUsXHJcbiAgICAgICAgcmVtb3ZlOiBmYWxzZVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmF0dGFjaG1lbnRJdGVtcyA9IGF0dGFjaG1lbnRzO1xyXG4gICAgdGhpcy4kYXR0YWNobWVudEl0ZW1zLmVtaXQoYXR0YWNobWVudHMpO1xyXG4gIH1cclxuICBhc3luYyBmaWxlQnJvd3NlckhhbmRsZXIoZmlsZXM6IEV2ZW50VGFyZ2V0KTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBjb25zdCBmaWxlTGlzdDogRmlsZUxpc3QgPSAoZmlsZXMgYXMgSFRNTElucHV0RWxlbWVudCkuZmlsZXM7XHJcbiAgICByZXR1cm4gdGhpcy5vbkZpbGVEcm9wcGVkKGZpbGVMaXN0KTtcclxuICB9XHJcbiAgcGFyc2VkQWNjZXB0TGlzdCgpOiBzdHJpbmcge1xyXG4gICAgbGV0IGFjY2VwdCA9ICdcXG4nO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFjY2VwdEZpbGVUeXBlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmFjY2VwdEZpbGVUeXBlW2ldO1xyXG4gICAgICBjb25zdCBzZXBhcmF0b3IgPSBpIDwgKHRoaXMuYWNjZXB0RmlsZVR5cGUubGVuZ3RoIC0gMSkgPyAnLCAnIDogJyc7XHJcbiAgICAgIGxldCB0ZW1wRXh0ZW5zaW9uOiBzdHJpbmc7XHJcblxyXG4gICAgICBpZiAoIWl0ZW0uaW5jbHVkZXMoJy4nLCAwKSkge1xyXG4gICAgICAgIHRlbXBFeHRlbnNpb24gPSBgLiR7aXRlbX1gO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBhY2NlcHQgKz0gYCR7dGVtcEV4dGVuc2lvbn0ke3NlcGFyYXRvcn1gO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYWNjZXB0O1xyXG4gIH1cclxuICBjbGljaygpOiB2b2lkIHtcclxuICAgIHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC5jbGljaygpO1xyXG4gIH1cclxuXHJcbiAgdXBsb2FkQ2xpY2soKTogdm9pZCB7XHJcbiAgICB0aGlzLiR1cGxvYWRDbGljay5lbWl0KHRoaXMuYXR0YWNobWVudEl0ZW1zKTtcclxuICB9XHJcblxyXG4gIG9uQ29udGludWVVcGxvYWQoYWN0aXZlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLiRjb250aW51ZVVwbG9hZEFjdGl2ZS5lbWl0KGFjdGl2ZSk7XHJcbiAgICB0aGlzLmNvbnRpbnVlVXBsb2FkID0gYWN0aXZlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhZGRJdGVtVG9BcnJheShmaWxlOiBGaWxlKTogdm9pZCB7XHJcbiAgICB0aGlzLmF0dGFjaG1lbnRJdGVtcy5wdXNoKHtcclxuICAgICAgaWQ6IHRoaXMuYXR0YWNobWVudEl0ZW1zLmxlbmd0aCxcclxuICAgICAgbmFtZTogZmlsZS5uYW1lLFxyXG4gICAgICBpY29uOiBBdHRhY2htZW50SWNvbi5nZXQoZmlsZS5uYW1lKSxcclxuICAgICAgZmlsZSxcclxuICAgICAgbmV3OiB0cnVlLFxyXG4gICAgICByZW1vdmU6IGZhbHNlXHJcbiAgICB9KTtcclxuICB9XHJcbiAgcHJpdmF0ZSBhc3luYyBzaG93RXJyb3JNZXNzYWdlKGludmFsaWRGaWxlTGlzdDogc3RyaW5nW10sIGR1cGxpY2F0ZWRMaXN0OiBzdHJpbmdbXSwgaW52YWxpZFNpemVMaXN0OiBzdHJpbmdbXSwgaW52YWxpZExlbmd0aExpc3Q6IHN0cmluZ1tdID0gW10pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGNvbnN0IHRpbWVvdXQgPSA1MDA7XHJcblxyXG4gICAgaWYgKGludmFsaWRGaWxlTGlzdCAhPSBudWxsICYmIGludmFsaWRGaWxlTGlzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGF3YWl0IHRoaXMuZXJyb3JNZXNzYWdlKFxyXG4gICAgICAgIHRoaXMuYWNjZXB0RmlsZVR5cGUsXHJcbiAgICAgICAgdGhpcy5pbnZhbGlkRXh0ZW5zaW9uTWVzc2FnZVNpbmd1bGFyLFxyXG4gICAgICAgIHRoaXMuaW52YWxpZEV4dGVuc2lvbk1lc3NhZ2VQbHVyYWxcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZHVwbGljYXRlZExpc3QgIT0gbnVsbCAmJiBkdXBsaWNhdGVkTGlzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGF3YWl0IHRoaXMuZXJyb3JNZXNzYWdlKFxyXG4gICAgICAgICAgZHVwbGljYXRlZExpc3QsXHJcbiAgICAgICAgICB0aGlzLmR1cGxpY2F0ZWRNZXNzYWdlU2luZ3VsYXIsXHJcbiAgICAgICAgICB0aGlzLmR1cGxpY2F0ZWRNZXNzYWdlUGx1cmFsXHJcbiAgICAgICAgKTtcclxuICAgICAgfSwgdGltZW91dCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGludmFsaWRTaXplTGlzdCAhPSBudWxsICYmIGludmFsaWRTaXplTGlzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGF3YWl0IHRoaXMuZXJyb3JNZXNzYWdlVHdvVmFyaWFibGVzKFxyXG4gICAgICAgICAgaW52YWxpZFNpemVMaXN0LFxyXG4gICAgICAgICAgdGhpcy5pbnZhbGlkU2l6ZU1lc3NhZ2VTaW5ndWxhcixcclxuICAgICAgICAgIHRoaXMuaW52YWxpZFNpemVNZXNzYWdlUGx1cmFsLFxyXG4gICAgICAgICAgdGhpcy5tYXhTaXplLnRvU3RyaW5nKClcclxuICAgICAgICApO1xyXG4gICAgICB9LCB0aW1lb3V0KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaW52YWxpZExlbmd0aExpc3QgIT0gbnVsbCAmJiBpbnZhbGlkTGVuZ3RoTGlzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBsdXJhbCA9IHRoaXMubWF4TnVtYmVyT2ZGaWxlcyA+IDEgPyB0aGlzLmludmFsaWRMZW5ndGhNZXNzYWdlUGx1cmFsIDogdGhpcy5pbnZhbGlkTGVuZ3RoTWVzc2FnZVNpbmd1bGFyO1xyXG4gICAgICAgIGF3YWl0IHRoaXMuZXJyb3JNZXNzYWdlVHdvVmFyaWFibGVzKFxyXG4gICAgICAgICAgaW52YWxpZExlbmd0aExpc3QsXHJcbiAgICAgICAgICB0aGlzLmludmFsaWRMZW5ndGhNZXNzYWdlU2luZ3VsYXIsXHJcbiAgICAgICAgICBwbHVyYWwsXHJcbiAgICAgICAgICB0aGlzLm1heE51bWJlck9mRmlsZXMudG9TdHJpbmcoKSxcclxuICAgICAgICAgIHRoaXMubWF4TnVtYmVyT2ZGaWxlcyA+IDFcclxuICAgICAgICApO1xyXG4gICAgICB9LCB0aW1lb3V0KTtcclxuICAgIH1cclxuICB9XHJcbiAgcHJpdmF0ZSBhc3luYyBlcnJvck1lc3NhZ2UoYXJyYXlMaXN0OiBzdHJpbmdbXSwgc2luZ3VsYXJNZXNzYWdlOiBzdHJpbmcsIHBsdXJhbE1lc3NhZ2U6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgY29uc3QgZmlsZU5hbWVzID0gR2xTaGFyZWRDb21wb25lbnRJbnB1dERyYWdBbmREcm9wU2ltcGxlQ29tcG9uZW50LmZpbGVOYW1lTGlzdChhcnJheUxpc3QpO1xyXG4gICAgY29uc3QgaXNQbHVyYWwgPSBhcnJheUxpc3QubGVuZ3RoID4gMTtcclxuICAgIGNvbnN0IHNpbmd1bGFyID0gc2luZ3VsYXJNZXNzYWdlLnJlcGxhY2UoJyR2YXIxJCcsIGZpbGVOYW1lcyk7XHJcbiAgICBjb25zdCBwbHVyYWwgPSBwbHVyYWxNZXNzYWdlLnJlcGxhY2UoJyR2YXIxJCcsIGZpbGVOYW1lcyk7XHJcbiAgICBjb25zdCBtZXNzYWdlID0gaXNQbHVyYWwgPyBwbHVyYWwgOiBzaW5ndWxhcjtcclxuXHJcbiAgICBhd2FpdCB0aGlzLl9hbGVydC5zaG93KG1lc3NhZ2UpO1xyXG4gIH1cclxuICBwcml2YXRlIGFzeW5jIGVycm9yTWVzc2FnZVR3b1ZhcmlhYmxlcyhhcnJheUxpc3Q6IHN0cmluZ1tdLCBzaW5ndWxhck1lc3NhZ2U6IHN0cmluZywgcGx1cmFsTWVzc2FnZTogc3RyaW5nLCBmaXJzdFZhcmlhYmxlOiBzdHJpbmcsIGlzUGx1cmFsQ29tcGFyYXRvcjogYm9vbGVhbiA9IG51bGwpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGNvbnN0IGZpbGVOYW1lcyA9IEdsU2hhcmVkQ29tcG9uZW50SW5wdXREcmFnQW5kRHJvcFNpbXBsZUNvbXBvbmVudC5maWxlTmFtZUxpc3QoYXJyYXlMaXN0KTtcclxuICAgIGNvbnN0IGlzUGx1cmFsID0gaXNQbHVyYWxDb21wYXJhdG9yICYmIGFycmF5TGlzdC5sZW5ndGggPiAxIHx8ICFpc1BsdXJhbENvbXBhcmF0b3IgJiYgYXJyYXlMaXN0Lmxlbmd0aCA+IDE7XHJcbiAgICBjb25zdCBzaW5ndWxhciA9IHNpbmd1bGFyTWVzc2FnZS5yZXBsYWNlKCckdmFyMSQnLCBmaXJzdFZhcmlhYmxlKS5yZXBsYWNlKCckdmFyMiQnLCBmaWxlTmFtZXMpO1xyXG4gICAgY29uc3QgcGx1cmFsID0gcGx1cmFsTWVzc2FnZS5yZXBsYWNlKCckdmFyMSQnLCBmaXJzdFZhcmlhYmxlKS5yZXBsYWNlKCckdmFyMiQnLCBmaWxlTmFtZXMpO1xyXG5cclxuICAgIGNvbnN0IG1lc3NhZ2UgPSBpc1BsdXJhbCA/IHBsdXJhbCA6IHNpbmd1bGFyO1xyXG5cclxuICAgIGF3YWl0IHRoaXMuX2FsZXJ0LnNob3cobWVzc2FnZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==