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
                template: "<gl-shared-component-input-switch\n  *ngIf=\"showContinueUpload\"\n  [active]=\"continueUpload\"\n  [enabled]=\"!readOnly\"\n  [label]=\"continueUploadLabel\"\n  (active$)=\"onContinueUpload($event)\"\n  class=\"drag-and-drop-continue-switch\"\n\n  buttonIconSrc=\"assets/img/icon/upload/resume-upload.svg\"\n  labelColor=\"white\"\n  [showAsInputButton]=\"true\"\n  [showLabel]=\"true\"\n></gl-shared-component-input-switch>\n\n<div\n  class=\"file-attachment-container {{ readOnly ? 'readonly' : '' }}\"\n  glCoreDirectivesDragAndDrop\n  (fileDropped)=\"onFileDropped($event)\"\n  (change)=\"fileBrowserHandler($event.target)\"\n  (click)=\"fileAttachment.click()\">\n\n  <div class=\"description-container {{ readOnly ? 'readonly' : '' }}\">\n    <img\n      alt=\"Upload icon\"\n      class=\"upload-icon {{ readOnly ? 'readonly' : '' }}\"\n      [src]=\"uploadIcon\">\n\n    <span *ngIf=\"!readOnly\" class=\"action-description {{ readOnly ? 'readonly' : '' }}\">{{ descriptionDragAndDrop }}</span>\n    <span *ngIf=\"!readOnly\" class=\"action-description {{ readOnly ? 'readonly' : '' }}\">{{ descriptionDragAndDropOr }}</span>\n    <span *ngIf=\"!readOnly\" class=\"action-description button {{ readOnly ? 'readonly' : '' }}\">{{ descriptionDragAndDropClickHere }}</span>\n  </div>\n\n  <input\n    #fileAttachment\n    class=\"file-attachment\"\n    id=\"file-attachment\"\n    type=\"file\"\n    [attr.data-maxsize]=\"maxSize\"\n    [accept]=\"parsedAcceptList\"\n    [disabled]=\"readOnly\"\n    [multiple]=\"(maxNumberOfFiles == -1 && maxNumberOfFiles > 1) || (maxNumberOfFiles == null)\">\n</div>\n<div class=\"attachment-list\">\n  <gl-shared-component-attachment-item\n    *ngFor=\"let item of attachmentItems\"\n    [fileIcon]=\"item.icon\"\n    [id]=\"item.id\"\n    [fileName]=\"item.name\"\n    [disabled]=\"readOnly\"\n    [addingSmooth]=\"true\"\n\n    (removeCurrentItem)=\"removeAttachment($event);\"\n  ></gl-shared-component-attachment-item>\n</div>\n\n<div class=\"button-container upload-file\" *ngIf=\"attachmentItems.length > 0\">\n  <gl-shared-component-input-button-simple\n    [innerValue]=\"uploadButtonValue\"\n    [readonly]=\"readOnly\"\n    value=\"upload-file\"\n    (click)=\"uploadClick()\"\n  ></gl-shared-component-input-button-simple>\n</div>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1kcmFnLWFuZC1kcm9wLXNpbXBsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9nbC1uZy1mcm9udGVuZC9zcmMvbGliL3NoYXJlZC9jb21wb25lbnQvaW5wdXQvZHJhZy1hbmQtZHJvcC9zaW1wbGUvZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1kcmFnLWFuZC1kcm9wLXNpbXBsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlGLE9BQU8sRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkUsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sOERBQThELENBQUM7QUFPbEgsTUFBTSxPQUFPLGdEQUFnRDtJQTRGM0QsWUFBb0IsTUFBMEM7UUFBMUMsV0FBTSxHQUFOLE1BQU0sQ0FBb0M7UUF2RnJELHdCQUFtQixHQUFHLDJCQUEyQixDQUFDO1FBQ2pELDBCQUFxQixHQUEwQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRW5FLHNCQUFpQixHQUFHLGNBQWMsQ0FBQztRQUNuQyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBTWpCLDJCQUFzQixHQUFHLHdCQUF3QixDQUFDO1FBQ2xELDZCQUF3QixHQUFHLElBQUksQ0FBQztRQUNoQyxvQ0FBK0IsR0FBRyxZQUFZLENBQUM7UUFFL0MsZUFBVSxHQUFHLHNDQUFzQyxDQUFDO1FBRTdEOzs7V0FHRztRQUNNLG9DQUErQixHQUFHLDZGQUE2RixDQUFDO1FBQ3pJOzs7V0FHRztRQUNNLGtDQUE2QixHQUFHLGdHQUFnRyxDQUFDO1FBQzFJOzs7V0FHRztRQUVNLDhCQUF5QixHQUFHLHVG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YSxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQztZQUUzRixNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1lBRTdDLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEMsQ0FBQztLQUFBOzs7WUFoVEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnREFBZ0Q7Z0JBQzFELDJ2RUFBOEU7O2FBRS9FOzs7WUFOUSxrQ0FBa0M7OztvQkFReEMsU0FBUyxTQUFDLGdCQUFnQjtpQ0FFMUIsS0FBSzs2QkFDTCxLQUFLO2tDQUNMLEtBQUs7b0NBQ0wsTUFBTTtnQ0FFTixLQUFLO3VCQUNMLEtBQUs7a0NBS0wsS0FBSztxQ0FDTCxLQUFLO3VDQUNMLEtBQUs7OENBQ0wsS0FBSzt5QkFFTCxLQUFLOzhDQU1MLEtBQUs7NENBS0wsS0FBSzt3Q0FNTCxLQUFLO3NDQUtMLEtBQUs7eUNBTUwsS0FBSzt1Q0FLTCxLQUFLOzJDQU1MLEtBQUs7eUNBS0wsS0FBSzsrQkFNTCxLQUFLO3NCQUtMLEtBQUs7NkJBS0wsS0FBSzsrQkFJTCxNQUFNOzJCQUlOLE1BQU07OEJBRU4sS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEF0dGFjaG1lbnRJY29uLCBBdHRhY2htZW50VmFsaWRhdGUgfSBmcm9tICdnbC13LWZyb250ZW5kJztcbmltcG9ydCB7IElBdHRhY2htZW50RGF0YSB9IGZyb20gJ2dsLXctZnJvbnRlbmQvbGliL3NjcmlwdHMvY29yZS9zZXJ2aWNlcy9hdHRhY2htZW50L2NvcmUtc2VydmljZXMtYXR0YWNobWVudC5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgR2xTaGFyZWRDb21wb25lbnRNb2RhbEFsZXJ0U2VydmljZSB9IGZyb20gJy4uLy4uLy4uL21vZGFsL2FsZXJ0L2dsLXNoYXJlZC1jb21wb25lbnQtbW9kYWwtYWxlcnQuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtZHJhZy1hbmQtZHJvcC1zaW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1kcmFnLWFuZC1kcm9wLXNpbXBsZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtZHJhZy1hbmQtZHJvcC1zaW1wbGUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBHbFNoYXJlZENvbXBvbmVudElucHV0RHJhZ0FuZERyb3BTaW1wbGVDb21wb25lbnQge1xuICBAVmlld0NoaWxkKCdmaWxlQXR0YWNobWVudCcpIGlucHV0OiBFbGVtZW50UmVmPEhUTUxJbnB1dEVsZW1lbnQ+O1xuXG4gIEBJbnB1dCgpIHNob3dDb250aW51ZVVwbG9hZDogYm9vbGVhbjtcbiAgQElucHV0KCkgY29udGludWVVcGxvYWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGNvbnRpbnVlVXBsb2FkTGFiZWwgPSAnQ29udGludWUgcHJldmlvdXMgbG9hZGluZyc7XG4gIEBPdXRwdXQoKSAkY29udGludWVVcGxvYWRBY3RpdmU6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASW5wdXQoKSB1cGxvYWRCdXR0b25WYWx1ZSA9ICdVcGxvYWQgZmlsZXMnO1xuICBASW5wdXQoKSByZWFkT25seSA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBJbiBjYXNlIHRoZSBidXR0b24gaWNvbiBzb3VyY2UgaXMgbm90IHBhc3NlZCwgdGhlIGljb24gd2lsbCBiZSBoaWRkZW4uXG4gICAqL1xuICBASW5wdXQoKSByZXN1bWVCdXR0b25JY29uU3JjOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGRlc2NyaXB0aW9uRHJhZ0FuZERyb3AgPSAnRHJhZyBhbmQgZHJvcCB0aGUgZmlsZSc7XG4gIEBJbnB1dCgpIGRlc2NyaXB0aW9uRHJhZ0FuZERyb3BPciA9ICdvcic7XG4gIEBJbnB1dCgpIGRlc2NyaXB0aW9uRHJhZ0FuZERyb3BDbGlja0hlcmUgPSAnQ2xpY2sgaGVyZSc7XG5cbiAgQElucHV0KCkgdXBsb2FkSWNvbiA9ICcuLi9hc3NldHMvaW1nL2ljb24vdXBsb2FkL3VwbG9hZC5zdmcnO1xuXG4gIC8qKlxuICAgKiBUaGUgbWVzc2FnZSBtdXN0IGNvbnRhaW4gdGhlIHN0cmluZyAkdmFyMSQuIEl0J2xsIGJlIHJlcGxhY2VkIGR1cmluZyBydW50aW1lLlxuICAgKiBJLmUuOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdDogJHZhcjEkJ1xuICAgKi9cbiAgQElucHV0KCkgaW52YWxpZEV4dGVuc2lvbk1lc3NhZ2VTaW5ndWxhciA9ICdUaGUgaW52bGlkIGZpbGUgaGFzIG5vdCBiZWVuIGFkZGVkIHRvIHRoZSBhdHRhY2htZW50IGxpc3QuIEFjY2VwdGVkIGZpbGUgZXh0ZW5zaW9uczogJHZhcjEkJztcbiAgLyoqXG4gICAqIFRoZSBtZXNzYWdlIG11c3QgY29udGFpbiB0aGUgc3RyaW5nICR2YXIxJC4gSXQnbGwgYmUgcmVwbGFjZWQgZHVyaW5nIHJ1bnRpbWUuXG4gICAqIEkuZS46ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0OiAkdmFyMSQnXG4gICAqL1xuICBASW5wdXQoKSBpbnZhbGlkRXh0ZW5zaW9uTWVzc2FnZVBsdXJhbCA9ICdUaGUgaW52YWxpZCBmaWxlcyBoYXZlIG5vdCBiZWVuIGFkZGVkIHRvIHRoZSBhdHRhY2htZW50IGxpc3QuIEFjY2VwdGVkIGZpbGUgZXh0ZW5zaW9uczogJHZhcjEkJztcbiAgLyoqXG4gICAqIFRoZSBtZXNzYWdlIG11c3QgY29udGFpbiB0aGUgc3RyaW5nICR2YXIxJC4gSXQnbGwgYmUgcmVwbGFjZWQgZHVyaW5nIHJ1bnRpbWUuXG4gICAqIEkuZS46ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0OiAkdmFyMSQnXG4gICAqL1xuXG4gIEBJbnB1dCgpIGR1cGxpY2F0ZWRNZXNzYWdlU2luZ3VsYXIgPSAnVGhlIGR1cGxpY2F0ZWQgZmlsZSBoYXMgbm90IGJlZW4gYWRkZWQgdG8gdGhlIGF0dGFjaG1lbnQgbGlzdC4gUmVqZWN0ZWQgZmlsZXM6ICR2YXIxJCc7XG4gIC8qKlxuICAgKiBUaGUgbWVzc2FnZSBtdXN0IGNvbnRhaW4gdGhlIHN0cmluZyAkdmFyMSQuIEl0J2xsIGJlIHJlcGxhY2VkIGR1cmluZyBydW50aW1lLlxuICAgKiBJLmUuOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdDogJHZhcjEkJ1xuICAgKi9cbiAgQElucHV0KCkgZHVwbGljYXRlZE1lc3NhZ2VQbHVyYWwgPSAnVGhlIGR1cGxpY2F0ZWQgZmlsZXMgaGF2ZSBub3QgYmVlbiBhZGRlZCB0byB0aGUgYXR0YWNobWVudCBsaXN0LiBSZWplY3RlZCBmaWxlczogJHZhcjEkJztcbiAgLyoqXG4gICAqIFRoZSBtZXNzYWdlIG11c3QgY29udGFpbiB0aGUgc3RyaW5nICR2YXIxJCBhbmQgJHZhcjIkLiBJdCdsbCBiZSByZXBsYWNlZCBkdXJpbmcgcnVudGltZS5cbiAgICogSS5lLjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQ6ICR2YXIxJCdcbiAgICovXG5cbiAgQElucHV0KCkgaW52YWxpZFNpemVNZXNzYWdlU2luZ3VsYXIgPSAnVGhlIGN1cnJlbnQgZmlsZSBpcyBvdmVyICR2YXIxJEtCIGFuZCBoYXMgbm90IGJlZW4gYWRkZWQgdG8gdGhlIGF0dGFjaG1lbnQgbGlzdC4gUmVqZWN0ZWQgZmlsZXM6ICR2YXIyJCc7XG4gIC8qKlxuICAgKiBUaGUgbWVzc2FnZSBtdXN0IGNvbnRhaW4gdGhlIHN0cmluZyAkdmFyMSQgYW5kICR2YXIyJC4gSXQnbGwgYmUgcmVwbGFjZWQgZHVyaW5nIHJ1bnRpbWUuXG4gICAqIEkuZS46ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0OiAkdmFyMSQnXG4gICAqL1xuICBASW5wdXQoKSBpbnZhbGlkU2l6ZU1lc3NhZ2VQbHVyYWwgPSAnVGhlIGZpbGVzIHdpdGggc2l6ZSBvdmVyICR2YXIxJEtCIGhhdmUgbm90IGJlZW4gYWRkZWQgdG8gdGhlIGF0dGFjaG1lbnQgbGlzdC4gUmVqZWN0ZWQgZmlsZXM6ICR2YXIyJCc7XG5cbiAgLyoqXG4gICAqIFRoZSBtZXNzYWdlIG11c3QgY29udGFpbiB0aGUgc3RyaW5nICR2YXIxJC4gSXQnbGwgYmUgcmVwbGFjZWQgZHVyaW5nIHJ1bnRpbWUuXG4gICAqIEkuZS46ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0OiAkdmFyMSQnXG4gICAqL1xuICBASW5wdXQoKSBpbnZhbGlkTGVuZ3RoTWVzc2FnZVNpbmd1bGFyID0gJ1lvdSBjYW4ganVzdCBhZGQgb25lIGF0dGFjaG1lbnQgZmlsZS4gUmVqZWN0ZWQgZmlsZXM6ICR2YXIxJCc7XG4gIC8qKlxuICAgKiBUaGUgbWVzc2FnZSBtdXN0IGNvbnRhaW4gdGhlIHN0cmluZyAkdmFyMSQuIEl0J2xsIGJlIHJlcGxhY2VkIGR1cmluZyBydW50aW1lLlxuICAgKiBJLmUuOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdDogJHZhcjEkJ1xuICAgKi9cbiAgQElucHV0KCkgaW52YWxpZExlbmd0aE1lc3NhZ2VQbHVyYWwgPSAnWW91IGNhbiBqdXN0IGFkZCAkdmFyMSQgYXR0YWNobWVudCBmaWxlLiBSZWplY3RlZCBmaWxlczogJHZhcjIkJztcblxuICAvKipcbiAgICogSWYgbWF4TnVtYmVyT2ZGaWxlcyB2YWx1ZSBpcyBncmVhdGVyIHRoYW4gMSBvciBlcXVhbCB0byAtMSwgbXVsdGlwbGUgZmlsZXMgYXJlIGVuYWJsZWQuXG4gICAqIERlZmF1bHQgdmFsdWUgPSAtMS5cbiAgICovXG4gIEBJbnB1dCgpIG1heE51bWJlck9mRmlsZXMgPSAtMTtcbiAgLyoqXG4gICAqIElmIG1heFNpemUgdmFsdWUgaXMgY2FsY3VsYXRlZCBpbiBLQi5cbiAgICogRGVmYXVsdCB2YWx1ZSA9IDQ2MDgwICg0NW1iKS5cbiAgICovXG4gIEBJbnB1dCgpIG1heFNpemUgPSA0NjA4MDtcbiAgLyoqXG4gICAqIFRoaXMgZmllbGQgZG9lcyBub3QgcmVxdWlyZSB0byBpbmNsdWRlIHRoZSBkb3QgZXh0ZW5zaW9uLlxuICAgKiBFeGFtcGxlOiBbXCJwc2RcIiwgLnhsc3hcIiwgXCJ6aXBcIiwgXCIuZG9jeFwiLCBcIi5wcHR4XCJdXG4gICAqL1xuICBASW5wdXQoKSBhY2NlcHRGaWxlVHlwZTogc3RyaW5nW10gPSBbXTtcbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGxpc3Qgb2YgdmFsaWQgYXR0YWNobWVudHMgYWRkZWQuXG4gICAqL1xuICBAT3V0cHV0KCkgJGF0dGFjaG1lbnRJdGVtczogRXZlbnRFbWl0dGVyPElBdHRhY2htZW50RGF0YVtdPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGxpc3Qgb2YgdmFsaWQgYXR0YWNobWVudHMgYWRkZWQgYW5kIGZpcmVzIHRoZSB1cGxvYWQgYnV0dG9uLlxuICAgKi9cbiAgQE91dHB1dCgpICR1cGxvYWRDbGljazogRXZlbnRFbWl0dGVyPElBdHRhY2htZW50RGF0YVtdPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASW5wdXQoKSBhdHRhY2htZW50SXRlbXM6IElBdHRhY2htZW50RGF0YVtdID0gW107XG5cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hbGVydDogR2xTaGFyZWRDb21wb25lbnRNb2RhbEFsZXJ0U2VydmljZSkgeyB9XG5cblxuXG4gIHByaXZhdGUgc3RhdGljIGZpbGVOYW1lTGlzdChsaXN0OiBzdHJpbmdbXSk6IHN0cmluZyB7XG4gICAgbGV0IGxpc3ROYW1lID0gJ1xcbic7XG4gICAgZm9yIChjb25zdCBbaSwgaXRlbV0gb2YgbGlzdC5lbnRyaWVzKCkpIHtcbiAgICAgIGNvbnN0IHNlcGFyYXRvciA9IGkgPCAobGlzdC5sZW5ndGggLSAxKSA/ICc7XFxuJyA6ICcuJztcbiAgICAgIGxpc3ROYW1lICs9IGAke2kgKyAxfS4gJHtpdGVtfSR7c2VwYXJhdG9yfWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpc3ROYW1lO1xuICB9XG5cbiAgYXN5bmMgb25GaWxlRHJvcHBlZChmaWxlTGlzdDogRmlsZUxpc3QpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBkdXBsaWNhdGVkTGlzdDogc3RyaW5nW10gPSBbXTtcbiAgICBjb25zdCBpbnZhbGlkRmlsZUxpc3Q6IHN0cmluZ1tdID0gW107XG4gICAgY29uc3QgaW52YWxpZFNpemVMaXN0OiBzdHJpbmdbXSA9IFtdO1xuICAgIGNvbnN0IGludmFsaWRMZW5ndGhMaXN0OiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgaWYgKHRoaXMubWF4TnVtYmVyT2ZGaWxlcyA9PT0gLTEgfHwgdGhpcy5tYXhOdW1iZXJPZkZpbGVzID4gMSkge1xuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnByZWZlci1mb3Itb2ZcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsZUxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgZmlsZSA9IGZpbGVMaXN0W2ldO1xuICAgICAgICBjb25zdCB2YWxpZEZpbGUgPSB0aGlzLmFjY2VwdEZpbGVUeXBlLmxlbmd0aCA+IDAgPyBBdHRhY2htZW50VmFsaWRhdGUuZmlsZUFycmF5KGZpbGUubmFtZSwgdGhpcy5hY2NlcHRGaWxlVHlwZSkgOiAgdHJ1ZTtcbiAgICAgICAgY29uc3QgZHVwbGljYXRlZCA9IEF0dGFjaG1lbnRWYWxpZGF0ZS5kdXBsaWNhdGVkKGZpbGUubmFtZSwgdGhpcy5hdHRhY2htZW50SXRlbXMpO1xuICAgICAgICBjb25zdCBpbnZhbGlkU2l6ZSA9ICFBdHRhY2htZW50VmFsaWRhdGUuZmlsZVNpemVGcm9tQXJyYXkodGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LCBmaWxlKTtcblxuICAgICAgICBpZiAodmFsaWRGaWxlKSB7XG4gICAgICAgICAgaWYgKGR1cGxpY2F0ZWQpIHtcbiAgICAgICAgICAgIGR1cGxpY2F0ZWRMaXN0LnB1c2goZmlsZS5uYW1lKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGludmFsaWRTaXplKSB7XG4gICAgICAgICAgICBpbnZhbGlkU2l6ZUxpc3QucHVzaChmaWxlLm5hbWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5tYXhOdW1iZXJPZkZpbGVzID09PSAtMSB8fCB0aGlzLmF0dGFjaG1lbnRJdGVtcy5sZW5ndGggPCB0aGlzLm1heE51bWJlck9mRmlsZXMpIHtcbiAgICAgICAgICAgICAgdGhpcy5hZGRJdGVtVG9BcnJheShmaWxlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGludmFsaWRMZW5ndGhMaXN0LnB1c2goZmlsZS5uYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaW52YWxpZEZpbGVMaXN0LnB1c2goZmlsZS5uYW1lKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNob3dFcnJvck1lc3NhZ2UoaW52YWxpZEZpbGVMaXN0LCBkdXBsaWNhdGVkTGlzdCwgaW52YWxpZFNpemVMaXN0LCBpbnZhbGlkTGVuZ3RoTGlzdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGFycmF5Q29weSA9IFsuLi50aGlzLmF0dGFjaG1lbnRJdGVtc107XG4gICAgICB0aGlzLmF0dGFjaG1lbnRJdGVtcyA9IFtdO1xuXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cHJlZmVyLWZvci1vZlxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWxlTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBmaWxlID0gZmlsZUxpc3RbaV07XG4gICAgICAgIGNvbnN0IHZhbGlkRmlsZSA9IHRoaXMuYWNjZXB0RmlsZVR5cGUubGVuZ3RoID4gMCA/IEF0dGFjaG1lbnRWYWxpZGF0ZS5maWxlQXJyYXkoZmlsZS5uYW1lLCB0aGlzLmFjY2VwdEZpbGVUeXBlKSA6ICB0cnVlO1xuICAgICAgICBjb25zdCBkdXBsaWNhdGVkID0gQXR0YWNobWVudFZhbGlkYXRlLmR1cGxpY2F0ZWQoZmlsZS5uYW1lLCB0aGlzLmF0dGFjaG1lbnRJdGVtcyk7XG4gICAgICAgIGNvbnN0IGludmFsaWRTaXplID0gIUF0dGFjaG1lbnRWYWxpZGF0ZS5maWxlU2l6ZUZyb21BcnJheSh0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQsIGZpbGUpO1xuXG4gICAgICAgIGlmICh2YWxpZEZpbGUpIHtcbiAgICAgICAgICBpZiAoZHVwbGljYXRlZCkge1xuICAgICAgICAgICAgZHVwbGljYXRlZExpc3QucHVzaChmaWxlLm5hbWUpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoaW52YWxpZFNpemUpIHtcbiAgICAgICAgICAgIGludmFsaWRTaXplTGlzdC5wdXNoKGZpbGUubmFtZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmF0dGFjaG1lbnRJdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgdGhpcy5hZGRJdGVtVG9BcnJheShmaWxlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGludmFsaWRMZW5ndGhMaXN0LnB1c2goZmlsZS5uYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaW52YWxpZEZpbGVMaXN0LnB1c2goZmlsZS5uYW1lKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5hdHRhY2htZW50SXRlbXMubGVuZ3RoID09PSAwKSB7IHRoaXMuYXR0YWNobWVudEl0ZW1zID0gWy4uLmFycmF5Q29weV07IH1cbiAgICAgIGF3YWl0IHRoaXMuc2hvd0Vycm9yTWVzc2FnZShpbnZhbGlkRmlsZUxpc3QsIGR1cGxpY2F0ZWRMaXN0LCBpbnZhbGlkU2l6ZUxpc3QsIGludmFsaWRMZW5ndGhMaXN0KTtcbiAgICB9XG5cbiAgICB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSAnJztcbiAgICB0aGlzLiRhdHRhY2htZW50SXRlbXMuZW1pdCh0aGlzLmF0dGFjaG1lbnRJdGVtcyk7XG4gIH1cblxuICByZW1vdmVBdHRhY2htZW50KHJlbW92ZWQpOiB2b2lkIHtcbiAgICBjb25zdCB0ZW1wTGlzdCA9IHRoaXMuYXR0YWNobWVudEl0ZW1zLmZpbHRlcih4ID0+IHguaWQgIT09IHJlbW92ZWQuaWQpO1xuICAgIGNvbnN0IGF0dGFjaG1lbnRzOiBJQXR0YWNobWVudERhdGFbXSA9IFtdO1xuXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHRlbXBMaXN0KSB7XG4gICAgICBhdHRhY2htZW50cy5wdXNoKHtcbiAgICAgICAgaWQ6IGF0dGFjaG1lbnRzLmxlbmd0aCxcbiAgICAgICAgbmFtZTogaXRlbS5maWxlLm5hbWUsXG4gICAgICAgIGljb246IEF0dGFjaG1lbnRJY29uLmdldChpdGVtLmZpbGUubmFtZSksXG4gICAgICAgIGZpbGU6IGl0ZW0uZmlsZSxcbiAgICAgICAgbmV3OiB0cnVlLFxuICAgICAgICByZW1vdmU6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLmF0dGFjaG1lbnRJdGVtcyA9IGF0dGFjaG1lbnRzO1xuICAgIHRoaXMuJGF0dGFjaG1lbnRJdGVtcy5lbWl0KGF0dGFjaG1lbnRzKTtcbiAgfVxuICBhc3luYyBmaWxlQnJvd3NlckhhbmRsZXIoZmlsZXM6IEV2ZW50VGFyZ2V0KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgZmlsZUxpc3Q6IEZpbGVMaXN0ID0gKGZpbGVzIGFzIEhUTUxJbnB1dEVsZW1lbnQpLmZpbGVzO1xuICAgIHJldHVybiB0aGlzLm9uRmlsZURyb3BwZWQoZmlsZUxpc3QpO1xuICB9XG4gIHBhcnNlZEFjY2VwdExpc3QoKTogc3RyaW5nIHtcbiAgICBsZXQgYWNjZXB0ID0gJ1xcbic7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFjY2VwdEZpbGVUeXBlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBpdGVtID0gdGhpcy5hY2NlcHRGaWxlVHlwZVtpXTtcbiAgICAgIGNvbnN0IHNlcGFyYXRvciA9IGkgPCAodGhpcy5hY2NlcHRGaWxlVHlwZS5sZW5ndGggLSAxKSA/ICcsICcgOiAnJztcbiAgICAgIGxldCB0ZW1wRXh0ZW5zaW9uOiBzdHJpbmc7XG5cbiAgICAgIGlmICghaXRlbS5pbmNsdWRlcygnLicsIDApKSB7XG4gICAgICAgIHRlbXBFeHRlbnNpb24gPSBgLiR7aXRlbX1gO1xuICAgICAgfVxuXG4gICAgICBhY2NlcHQgKz0gYCR7dGVtcEV4dGVuc2lvbn0ke3NlcGFyYXRvcn1gO1xuXG4gICAgfVxuXG4gICAgcmV0dXJuIGFjY2VwdDtcbiAgfVxuICBjbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQuY2xpY2soKTtcbiAgfVxuXG4gIHVwbG9hZENsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuJHVwbG9hZENsaWNrLmVtaXQodGhpcy5hdHRhY2htZW50SXRlbXMpO1xuICB9XG5cbiAgb25Db250aW51ZVVwbG9hZChhY3RpdmU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLiRjb250aW51ZVVwbG9hZEFjdGl2ZS5lbWl0KGFjdGl2ZSk7XG4gICAgdGhpcy5jb250aW51ZVVwbG9hZCA9IGFjdGl2ZTtcbiAgfVxuXG4gIHByaXZhdGUgYWRkSXRlbVRvQXJyYXkoZmlsZTogRmlsZSk6IHZvaWQge1xuICAgIHRoaXMuYXR0YWNobWVudEl0ZW1zLnB1c2goe1xuICAgICAgaWQ6IHRoaXMuYXR0YWNobWVudEl0ZW1zLmxlbmd0aCxcbiAgICAgIG5hbWU6IGZpbGUubmFtZSxcbiAgICAgIGljb246IEF0dGFjaG1lbnRJY29uLmdldChmaWxlLm5hbWUpLFxuICAgICAgZmlsZSxcbiAgICAgIG5ldzogdHJ1ZSxcbiAgICAgIHJlbW92ZTogZmFsc2VcbiAgICB9KTtcbiAgfVxuICBwcml2YXRlIGFzeW5jIHNob3dFcnJvck1lc3NhZ2UoaW52YWxpZEZpbGVMaXN0OiBzdHJpbmdbXSwgZHVwbGljYXRlZExpc3Q6IHN0cmluZ1tdLCBpbnZhbGlkU2l6ZUxpc3Q6IHN0cmluZ1tdLCBpbnZhbGlkTGVuZ3RoTGlzdDogc3RyaW5nW10gPSBbXSk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHRpbWVvdXQgPSA1MDA7XG5cbiAgICBpZiAoaW52YWxpZEZpbGVMaXN0ICE9IG51bGwgJiYgaW52YWxpZEZpbGVMaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgIGF3YWl0IHRoaXMuZXJyb3JNZXNzYWdlKFxuICAgICAgICB0aGlzLmFjY2VwdEZpbGVUeXBlLFxuICAgICAgICB0aGlzLmludmFsaWRFeHRlbnNpb25NZXNzYWdlU2luZ3VsYXIsXG4gICAgICAgIHRoaXMuaW52YWxpZEV4dGVuc2lvbk1lc3NhZ2VQbHVyYWxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKGR1cGxpY2F0ZWRMaXN0ICE9IG51bGwgJiYgZHVwbGljYXRlZExpc3QubGVuZ3RoID4gMCkge1xuICAgICAgc2V0VGltZW91dChhc3luYyAoKSA9PiB7XG4gICAgICAgIGF3YWl0IHRoaXMuZXJyb3JNZXNzYWdlKFxuICAgICAgICAgIGR1cGxpY2F0ZWRMaXN0LFxuICAgICAgICAgIHRoaXMuZHVwbGljYXRlZE1lc3NhZ2VTaW5ndWxhcixcbiAgICAgICAgICB0aGlzLmR1cGxpY2F0ZWRNZXNzYWdlUGx1cmFsXG4gICAgICAgICk7XG4gICAgICB9LCB0aW1lb3V0KTtcbiAgICB9XG5cbiAgICBpZiAoaW52YWxpZFNpemVMaXN0ICE9IG51bGwgJiYgaW52YWxpZFNpemVMaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgIHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xuICAgICAgICBhd2FpdCB0aGlzLmVycm9yTWVzc2FnZVR3b1ZhcmlhYmxlcyhcbiAgICAgICAgICBpbnZhbGlkU2l6ZUxpc3QsXG4gICAgICAgICAgdGhpcy5pbnZhbGlkU2l6ZU1lc3NhZ2VTaW5ndWxhcixcbiAgICAgICAgICB0aGlzLmludmFsaWRTaXplTWVzc2FnZVBsdXJhbCxcbiAgICAgICAgICB0aGlzLm1heFNpemUudG9TdHJpbmcoKVxuICAgICAgICApO1xuICAgICAgfSwgdGltZW91dCk7XG4gICAgfVxuXG4gICAgaWYgKGludmFsaWRMZW5ndGhMaXN0ICE9IG51bGwgJiYgaW52YWxpZExlbmd0aExpc3QubGVuZ3RoID4gMCkge1xuICAgICAgc2V0VGltZW91dChhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHBsdXJhbCA9IHRoaXMubWF4TnVtYmVyT2ZGaWxlcyA+IDEgPyB0aGlzLmludmFsaWRMZW5ndGhNZXNzYWdlUGx1cmFsIDogdGhpcy5pbnZhbGlkTGVuZ3RoTWVzc2FnZVNpbmd1bGFyO1xuICAgICAgICBhd2FpdCB0aGlzLmVycm9yTWVzc2FnZVR3b1ZhcmlhYmxlcyhcbiAgICAgICAgICBpbnZhbGlkTGVuZ3RoTGlzdCxcbiAgICAgICAgICB0aGlzLmludmFsaWRMZW5ndGhNZXNzYWdlU2luZ3VsYXIsXG4gICAgICAgICAgcGx1cmFsLFxuICAgICAgICAgIHRoaXMubWF4TnVtYmVyT2ZGaWxlcy50b1N0cmluZygpLFxuICAgICAgICAgIHRoaXMubWF4TnVtYmVyT2ZGaWxlcyA+IDFcbiAgICAgICAgKTtcbiAgICAgIH0sIHRpbWVvdXQpO1xuICAgIH1cbiAgfVxuICBwcml2YXRlIGFzeW5jIGVycm9yTWVzc2FnZShhcnJheUxpc3Q6IHN0cmluZ1tdLCBzaW5ndWxhck1lc3NhZ2U6IHN0cmluZywgcGx1cmFsTWVzc2FnZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgZmlsZU5hbWVzID0gR2xTaGFyZWRDb21wb25lbnRJbnB1dERyYWdBbmREcm9wU2ltcGxlQ29tcG9uZW50LmZpbGVOYW1lTGlzdChhcnJheUxpc3QpO1xuICAgIGNvbnN0IGlzUGx1cmFsID0gYXJyYXlMaXN0Lmxlbmd0aCA+IDE7XG4gICAgY29uc3Qgc2luZ3VsYXIgPSBzaW5ndWxhck1lc3NhZ2UucmVwbGFjZSgnJHZhcjEkJywgZmlsZU5hbWVzKTtcbiAgICBjb25zdCBwbHVyYWwgPSBwbHVyYWxNZXNzYWdlLnJlcGxhY2UoJyR2YXIxJCcsIGZpbGVOYW1lcyk7XG4gICAgY29uc3QgbWVzc2FnZSA9IGlzUGx1cmFsID8gcGx1cmFsIDogc2luZ3VsYXI7XG5cbiAgICBhd2FpdCB0aGlzLl9hbGVydC5zaG93KG1lc3NhZ2UpO1xuICB9XG4gIHByaXZhdGUgYXN5bmMgZXJyb3JNZXNzYWdlVHdvVmFyaWFibGVzKGFycmF5TGlzdDogc3RyaW5nW10sIHNpbmd1bGFyTWVzc2FnZTogc3RyaW5nLCBwbHVyYWxNZXNzYWdlOiBzdHJpbmcsIGZpcnN0VmFyaWFibGU6IHN0cmluZywgaXNQbHVyYWxDb21wYXJhdG9yOiBib29sZWFuID0gbnVsbCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IGZpbGVOYW1lcyA9IEdsU2hhcmVkQ29tcG9uZW50SW5wdXREcmFnQW5kRHJvcFNpbXBsZUNvbXBvbmVudC5maWxlTmFtZUxpc3QoYXJyYXlMaXN0KTtcbiAgICBjb25zdCBpc1BsdXJhbCA9IGlzUGx1cmFsQ29tcGFyYXRvciAmJiBhcnJheUxpc3QubGVuZ3RoID4gMSB8fCAhaXNQbHVyYWxDb21wYXJhdG9yICYmIGFycmF5TGlzdC5sZW5ndGggPiAxO1xuICAgIGNvbnN0IHNpbmd1bGFyID0gc2luZ3VsYXJNZXNzYWdlLnJlcGxhY2UoJyR2YXIxJCcsIGZpcnN0VmFyaWFibGUpLnJlcGxhY2UoJyR2YXIyJCcsIGZpbGVOYW1lcyk7XG4gICAgY29uc3QgcGx1cmFsID0gcGx1cmFsTWVzc2FnZS5yZXBsYWNlKCckdmFyMSQnLCBmaXJzdFZhcmlhYmxlKS5yZXBsYWNlKCckdmFyMiQnLCBmaWxlTmFtZXMpO1xuXG4gICAgY29uc3QgbWVzc2FnZSA9IGlzUGx1cmFsID8gcGx1cmFsIDogc2luZ3VsYXI7XG5cbiAgICBhd2FpdCB0aGlzLl9hbGVydC5zaG93KG1lc3NhZ2UpO1xuICB9XG59XG4iXX0=