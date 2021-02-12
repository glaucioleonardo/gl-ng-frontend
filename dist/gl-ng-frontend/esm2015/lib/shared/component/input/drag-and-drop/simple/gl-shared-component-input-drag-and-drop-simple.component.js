import { __awaiter } from "tslib";
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { AttachmentIcon, AttachmentValidate } from 'gl-w-frontend';
import { GlSharedComponentModalAlertService } from '../../../modal/alert/gl-shared-component-modal-alert.service';
export class GlSharedComponentInputDragAndDropSimpleComponent {
    constructor(_alert) {
        this._alert = _alert;
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
                template: "<div\n  class=\"file-attachment-container {{ readOnly ? 'readonly' : '' }}\"\n  glCoreDirectivesDragAndDrop\n  (fileDropped)=\"onFileDropped($event)\"\n  (change)=\"fileBrowserHandler($event.target)\"\n  (click)=\"fileAttachment.click()\">\n\n  <div class=\"description-container {{ readOnly ? 'readonly' : '' }}\">\n    <img\n      alt=\"Upload icon\"\n      class=\"upload-icon {{ readOnly ? 'readonly' : '' }}\"\n      [src]=\"uploadIcon\">\n\n    <span *ngIf=\"!readOnly\" class=\"action-description {{ readOnly ? 'readonly' : '' }}\">{{ descriptionDragAndDrop }}</span>\n    <span *ngIf=\"!readOnly\" class=\"action-description {{ readOnly ? 'readonly' : '' }}\">{{ descriptionDragAndDropOr }}</span>\n    <span *ngIf=\"!readOnly\" class=\"action-description button {{ readOnly ? 'readonly' : '' }}\">{{ descriptionDragAndDropClickHere }}</span>\n  </div>\n\n  <input\n    #fileAttachment\n    class=\"file-attachment\"\n    id=\"file-attachment\"\n    type=\"file\"\n    [attr.data-maxsize]=\"maxSize\"\n    [accept]=\"parsedAcceptList\"\n    [disabled]=\"readOnly\"\n    [multiple]=\"(maxNumberOfFiles == -1 && maxNumberOfFiles > 1) || (maxNumberOfFiles == null)\">\n</div>\n<div class=\"attachment-list\">\n  <gl-shared-component-attachment-item\n    *ngFor=\"let item of attachmentItems\"\n    [fileIcon]=\"item.icon\"\n    [id]=\"item.id\"\n    [fileName]=\"item.name\"\n    [disabled]=\"readOnly\"\n    [addingSmooth]=\"true\"\n\n    (removeCurrentItem)=\"removeAttachment($event);\"\n  ></gl-shared-component-attachment-item>\n</div>\n\n<div class=\"button-container upload-file\" *ngIf=\"attachmentItems.length > 0\">\n  <gl-shared-component-input-button-simple\n    [innerValue]=\"uploadButtonValue\"\n    [readonly]=\"readOnly\"\n    value=\"upload-file\"\n    (click)=\"uploadClick()\"\n  ></gl-shared-component-input-button-simple>\n</div>\n",
                styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900\");@import url(\"https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@100;300;400;500;600;700;800;900&display=swap\");:host::ng-deep .file-attachment-container .description-container .action-description.readOnly,:host::ng-deep .file-attachment-container .description-container.readOnly,:host::ng-deep .file-attachment-container .description-container .upload-icon.readOnly,:host::ng-deep .file-attachment-container.readOnly{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;user-focus:none;user-focus-pointer:none;user-input:none;user-modify:none;user-select:none}:host::ng-deep{display:flex;flex-direction:column;flex-grow:1;max-height:-webkit-min-content;max-height:-moz-min-content;max-height:min-content;transition:all .3s ease-in-out}:host::ng-deep .file-attachment-container{align-items:center;background-color:hsla(0,0%,100%,.1);border-radius:.2em;display:flex;flex-grow:1;justify-content:center;min-height:8em;position:relative}:host::ng-deep .file-attachment-container .file-attachment{display:none;flex-grow:1;height:100%;left:0;top:0;width:100%}:host::ng-deep .file-attachment-container .description-container{align-items:center;display:flex;flex-direction:column;justify-content:center;width:100%}:host::ng-deep .file-attachment-container .description-container .upload-icon{height:3em;margin:0 0 .3em;width:3em}:host::ng-deep .file-attachment-container .description-container .action-description{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;color:#fff;font-family:Montserrat,sans-serif;font-size:.4em;font-weight:600;padding:.5em;user-select:none}:host::ng-deep .file-attachment-container .description-container .action-description.button{background-color:#b01e45;border-radius:.2em;margin:1em 0 0;opacity:.5;padding:1em 6em;transition:all .5s ease-in-out}:host::ng-deep .file-attachment-container .description-container .action-description.button:hover{opacity:1;transition:all .5s ease-in-out}:host::ng-deep .file-attachment-container .description{color:#fff;font-family:Montserrat,sans-serif;font-size:.5em;font-weight:600;position:absolute;top:50%}:host::ng-deep .attachment-list{border-radius:.2em;display:flex;flex-direction:column;margin:.08em 0 0;max-height:10rem;overflow-y:auto}:host::ng-deep .attachment-list gl-shared-component-attachment-item{font-size:.4em}:host::ng-deep .attachment-list gl-shared-component-attachment-item .attachment-container{background-color:hsla(0,0%,100%,.1);transition:all .3s ease-in-out}:host::ng-deep .attachment-list gl-shared-component-attachment-item .attachment-container .file{color:#fff;width:84.5%}:host::ng-deep .attachment-list gl-shared-component-attachment-item .attachment-container:hover{background-color:hsla(0,0%,100%,.2);transition:all .3s ease-in-out}:host::ng-deep .button-container.upload-file{margin:.1em 0 0;position:relative}:host::ng-deep .button-container.upload-file gl-shared-component-input-button-simple{height:1.6em}:host::ng-deep .button-container.upload-file gl-shared-component-input-button-simple .default-button{background-color:#fff;border-radius:.35em;color:#1a1b1d;font-family:Montserrat,sans-serif;font-size:.4em;font-weight:600;padding:0;text-align:center;text-transform:none}:host::ng-deep .button-container.upload-file .button-icon{border-radius:.15em;height:1.25em;left:.17em;position:absolute;top:.15em;width:1.25em}:host::ng-deep .file-over{-webkit-animation-duration:.3s;-webkit-animation-fill-mode:forwards;-webkit-animation-name:file-over;-webkit-animation-play-state:running;-webkit-animation-timing-function:ease-in-out;animation-duration:.3s;animation-fill-mode:forwards;animation-name:file-over;animation-play-state:running;animation-timing-function:ease-in-out}:host::ng-deep .file-over .description-container .upload-icon{-webkit-animation-duration:.3s;-webkit-animation-iteration-count:infinite;-webkit-animation-name:shake-upload-icon;-webkit-animation-play-state:running;-webkit-animation-timing-function:ease-in-out;animation-duration:.3s;animation-iteration-count:infinite;animation-name:shake-upload-icon;animation-play-state:running;animation-timing-function:ease-in-out}@-webkit-keyframes shake-upload-icon{0%{transform:translateX(.5px) translateY(-.5px) rotate(1deg)}10%{transform:translateX(-.5px) translateY(.5px) rotate(-1deg)}20%{transform:translateX(.5px) translateY(.5px) rotate(0deg)}30%{transform:translateX(1.5px) translateY(-.5px) rotate(1deg)}40%{transform:translateX(-.5px) translateY(1.5px) rotate(-1deg)}50%{transform:translateX(.5px) translateY(-.5px) rotate(0deg)}60%{transform:translateX(2px) translateY(-.5px) rotate(1deg)}70%{transform:translateX(.5px) translateY(.5px) rotate(-1deg)}80%{transform:translateX(.5px) translateY(-.5px) rotate(0deg)}90%{transform:translateX(.5px) translateY(1.5px) rotate(1deg)}to{transform:translateX(.5px) translateY(-.5px) rotate(-1deg)}}@keyframes shake-upload-icon{0%{transform:translateX(.5px) translateY(-.5px) rotate(1deg)}10%{transform:translateX(-.5px) translateY(.5px) rotate(-1deg)}20%{transform:translateX(.5px) translateY(.5px) rotate(0deg)}30%{transform:translateX(1.5px) translateY(-.5px) rotate(1deg)}40%{transform:translateX(-.5px) translateY(1.5px) rotate(-1deg)}50%{transform:translateX(.5px) translateY(-.5px) rotate(0deg)}60%{transform:translateX(2px) translateY(-.5px) rotate(1deg)}70%{transform:translateX(.5px) translateY(.5px) rotate(-1deg)}80%{transform:translateX(.5px) translateY(-.5px) rotate(0deg)}90%{transform:translateX(.5px) translateY(1.5px) rotate(1deg)}to{transform:translateX(.5px) translateY(-.5px) rotate(-1deg)}}@-webkit-keyframes file-over{0%{background-color:hsla(0,0%,100%,.1)}to{background-color:hsla(0,0%,100%,.3)}}@keyframes file-over{0%{background-color:hsla(0,0%,100%,.1)}to{background-color:hsla(0,0%,100%,.3)}}:host::ng-deep .file-not-over{-webkit-animation-duration:.3s;-webkit-animation-fill-mode:forwards;-webkit-animation-name:file-not-over;-webkit-animation-play-state:running;-webkit-animation-timing-function:ease-in-out;animation-duration:.3s;animation-fill-mode:forwards;animation-name:file-not-over;animation-play-state:running;animation-timing-function:ease-in-out}@-webkit-keyframes file-not-over{0%{background-color:hsla(0,0%,100%,.3)}to{background-color:hsla(0,0%,100%,.1)}}@keyframes file-not-over{0%{background-color:hsla(0,0%,100%,.3)}to{background-color:hsla(0,0%,100%,.1)}}"]
            },] }
];
GlSharedComponentInputDragAndDropSimpleComponent.ctorParameters = () => [
    { type: GlSharedComponentModalAlertService }
];
GlSharedComponentInputDragAndDropSimpleComponent.propDecorators = {
    input: [{ type: ViewChild, args: ['fileAttachment',] }],
    uploadButtonValue: [{ type: Input }],
    readOnly: [{ type: Input }],
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
    $uploadClick: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1kcmFnLWFuZC1kcm9wLXNpbXBsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9nbC1uZy1mcm9udGVuZC9zcmMvbGliL3NoYXJlZC9jb21wb25lbnQvaW5wdXQvZHJhZy1hbmQtZHJvcC9zaW1wbGUvZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1kcmFnLWFuZC1kcm9wLXNpbXBsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlGLE9BQU8sRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkUsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sOERBQThELENBQUM7QUFPbEgsTUFBTSxPQUFPLGdEQUFnRDtJQW1GM0QsWUFBb0IsTUFBMEM7UUFBMUMsV0FBTSxHQUFOLE1BQU0sQ0FBb0M7UUFoRnJELHNCQUFpQixHQUFHLGNBQWMsQ0FBQztRQUNuQyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBRWpCLDJCQUFzQixHQUFHLHdCQUF3QixDQUFDO1FBQ2xELDZCQUF3QixHQUFHLElBQUksQ0FBQztRQUNoQyxvQ0FBK0IsR0FBRyxZQUFZLENBQUM7UUFFL0MsZUFBVSxHQUFHLHNDQUFzQyxDQUFDO1FBRTdEOzs7V0FHRztRQUNNLG9DQUErQixHQUFHLDZGQUE2RixDQUFDO1FBQ3pJOzs7V0FHRztRQUNNLGtDQUE2QixHQUFHLGdHQUFnRyxDQUFDO1FBQzFJOzs7V0FHRztRQUVNLDhCQUF5QixHQUFHLHVGQUF1RixDQUFDO1FBQzdIOzs7V0FHRztRQUNNLDRCQUF1QixHQUFHLHlGQUF5RixDQUFDO1FBQzdIOzs7V0FHRztRQUVN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O1lBaFNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0RBQWdEO2dCQUMxRCw4MERBQThFOzthQUUvRTs7O1lBTlEsa0NBQWtDOzs7b0JBUXhDLFNBQVMsU0FBQyxnQkFBZ0I7Z0NBRTFCLEtBQUs7dUJBQ0wsS0FBSztxQ0FFTCxLQUFLO3VDQUNMLEtBQUs7OENBQ0wsS0FBSzt5QkFFTCxLQUFLOzhDQU1MLEtBQUs7NENBS0wsS0FBSzt3Q0FNTCxLQUFLO3NDQUtMLEtBQUs7eUNBTUwsS0FBSzt1Q0FLTCxLQUFLOzJDQU1MLEtBQUs7eUNBS0wsS0FBSzsrQkFNTCxLQUFLO3NCQUtMLEtBQUs7NkJBS0wsS0FBSzsrQkFJTCxNQUFNOzJCQUlOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBdHRhY2htZW50SWNvbiwgQXR0YWNobWVudFZhbGlkYXRlIH0gZnJvbSAnZ2wtdy1mcm9udGVuZCc7XG5pbXBvcnQgeyBJQXR0YWNobWVudERhdGEgfSBmcm9tICdnbC13LWZyb250ZW5kL2xpYi9zY3JpcHRzL2NvcmUvc2VydmljZXMvYXR0YWNobWVudC9jb3JlLXNlcnZpY2VzLWF0dGFjaG1lbnQuaW50ZXJmYWNlJztcbmltcG9ydCB7IEdsU2hhcmVkQ29tcG9uZW50TW9kYWxBbGVydFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9tb2RhbC9hbGVydC9nbC1zaGFyZWQtY29tcG9uZW50LW1vZGFsLWFsZXJ0LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LWRyYWctYW5kLWRyb3Atc2ltcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtZHJhZy1hbmQtZHJvcC1zaW1wbGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9nbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LWRyYWctYW5kLWRyb3Atc2ltcGxlLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgR2xTaGFyZWRDb21wb25lbnRJbnB1dERyYWdBbmREcm9wU2ltcGxlQ29tcG9uZW50IHtcbiAgQFZpZXdDaGlsZCgnZmlsZUF0dGFjaG1lbnQnKSBpbnB1dDogRWxlbWVudFJlZjxIVE1MSW5wdXRFbGVtZW50PjtcblxuICBASW5wdXQoKSB1cGxvYWRCdXR0b25WYWx1ZSA9ICdVcGxvYWQgZmlsZXMnO1xuICBASW5wdXQoKSByZWFkT25seSA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIGRlc2NyaXB0aW9uRHJhZ0FuZERyb3AgPSAnRHJhZyBhbmQgZHJvcCB0aGUgZmlsZSc7XG4gIEBJbnB1dCgpIGRlc2NyaXB0aW9uRHJhZ0FuZERyb3BPciA9ICdvcic7XG4gIEBJbnB1dCgpIGRlc2NyaXB0aW9uRHJhZ0FuZERyb3BDbGlja0hlcmUgPSAnQ2xpY2sgaGVyZSc7XG5cbiAgQElucHV0KCkgdXBsb2FkSWNvbiA9ICcuLi9hc3NldHMvaW1nL2ljb24vdXBsb2FkL3VwbG9hZC5zdmcnO1xuXG4gIC8qKlxuICAgKiBUaGUgbWVzc2FnZSBtdXN0IGNvbnRhaW4gdGhlIHN0cmluZyAkdmFyMSQuIEl0J2xsIGJlIHJlcGxhY2VkIGR1cmluZyBydW50aW1lLlxuICAgKiBJLmUuOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdDogJHZhcjEkJ1xuICAgKi9cbiAgQElucHV0KCkgaW52YWxpZEV4dGVuc2lvbk1lc3NhZ2VTaW5ndWxhciA9ICdUaGUgaW52bGlkIGZpbGUgaGFzIG5vdCBiZWVuIGFkZGVkIHRvIHRoZSBhdHRhY2htZW50IGxpc3QuIEFjY2VwdGVkIGZpbGUgZXh0ZW5zaW9uczogJHZhcjEkJztcbiAgLyoqXG4gICAqIFRoZSBtZXNzYWdlIG11c3QgY29udGFpbiB0aGUgc3RyaW5nICR2YXIxJC4gSXQnbGwgYmUgcmVwbGFjZWQgZHVyaW5nIHJ1bnRpbWUuXG4gICAqIEkuZS46ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0OiAkdmFyMSQnXG4gICAqL1xuICBASW5wdXQoKSBpbnZhbGlkRXh0ZW5zaW9uTWVzc2FnZVBsdXJhbCA9ICdUaGUgaW52YWxpZCBmaWxlcyBoYXZlIG5vdCBiZWVuIGFkZGVkIHRvIHRoZSBhdHRhY2htZW50IGxpc3QuIEFjY2VwdGVkIGZpbGUgZXh0ZW5zaW9uczogJHZhcjEkJztcbiAgLyoqXG4gICAqIFRoZSBtZXNzYWdlIG11c3QgY29udGFpbiB0aGUgc3RyaW5nICR2YXIxJC4gSXQnbGwgYmUgcmVwbGFjZWQgZHVyaW5nIHJ1bnRpbWUuXG4gICAqIEkuZS46ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0OiAkdmFyMSQnXG4gICAqL1xuXG4gIEBJbnB1dCgpIGR1cGxpY2F0ZWRNZXNzYWdlU2luZ3VsYXIgPSAnVGhlIGR1cGxpY2F0ZWQgZmlsZSBoYXMgbm90IGJlZW4gYWRkZWQgdG8gdGhlIGF0dGFjaG1lbnQgbGlzdC4gUmVqZWN0ZWQgZmlsZXM6ICR2YXIxJCc7XG4gIC8qKlxuICAgKiBUaGUgbWVzc2FnZSBtdXN0IGNvbnRhaW4gdGhlIHN0cmluZyAkdmFyMSQuIEl0J2xsIGJlIHJlcGxhY2VkIGR1cmluZyBydW50aW1lLlxuICAgKiBJLmUuOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdDogJHZhcjEkJ1xuICAgKi9cbiAgQElucHV0KCkgZHVwbGljYXRlZE1lc3NhZ2VQbHVyYWwgPSAnVGhlIGR1cGxpY2F0ZWQgZmlsZXMgaGF2ZSBub3QgYmVlbiBhZGRlZCB0byB0aGUgYXR0YWNobWVudCBsaXN0LiBSZWplY3RlZCBmaWxlczogJHZhcjEkJztcbiAgLyoqXG4gICAqIFRoZSBtZXNzYWdlIG11c3QgY29udGFpbiB0aGUgc3RyaW5nICR2YXIxJCBhbmQgJHZhcjIkLiBJdCdsbCBiZSByZXBsYWNlZCBkdXJpbmcgcnVudGltZS5cbiAgICogSS5lLjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQ6ICR2YXIxJCdcbiAgICovXG5cbiAgQElucHV0KCkgaW52YWxpZFNpemVNZXNzYWdlU2luZ3VsYXIgPSAnVGhlIGN1cnJlbnQgZmlsZSBpcyBvdmVyICR2YXIxJEtCIGFuZCBoYXMgbm90IGJlZW4gYWRkZWQgdG8gdGhlIGF0dGFjaG1lbnQgbGlzdC4gUmVqZWN0ZWQgZmlsZXM6ICR2YXIyJCc7XG4gIC8qKlxuICAgKiBUaGUgbWVzc2FnZSBtdXN0IGNvbnRhaW4gdGhlIHN0cmluZyAkdmFyMSQgYW5kICR2YXIyJC4gSXQnbGwgYmUgcmVwbGFjZWQgZHVyaW5nIHJ1bnRpbWUuXG4gICAqIEkuZS46ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0OiAkdmFyMSQnXG4gICAqL1xuICBASW5wdXQoKSBpbnZhbGlkU2l6ZU1lc3NhZ2VQbHVyYWwgPSAnVGhlIGZpbGVzIHdpdGggc2l6ZSBvdmVyICR2YXIxJEtCIGhhdmUgbm90IGJlZW4gYWRkZWQgdG8gdGhlIGF0dGFjaG1lbnQgbGlzdC4gUmVqZWN0ZWQgZmlsZXM6ICR2YXIyJCc7XG5cbiAgLyoqXG4gICAqIFRoZSBtZXNzYWdlIG11c3QgY29udGFpbiB0aGUgc3RyaW5nICR2YXIxJC4gSXQnbGwgYmUgcmVwbGFjZWQgZHVyaW5nIHJ1bnRpbWUuXG4gICAqIEkuZS46ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0OiAkdmFyMSQnXG4gICAqL1xuICBASW5wdXQoKSBpbnZhbGlkTGVuZ3RoTWVzc2FnZVNpbmd1bGFyID0gJ1lvdSBjYW4ganVzdCBhZGQgb25lIGF0dGFjaG1lbnQgZmlsZS4gUmVqZWN0ZWQgZmlsZXM6ICR2YXIxJCc7XG4gIC8qKlxuICAgKiBUaGUgbWVzc2FnZSBtdXN0IGNvbnRhaW4gdGhlIHN0cmluZyAkdmFyMSQuIEl0J2xsIGJlIHJlcGxhY2VkIGR1cmluZyBydW50aW1lLlxuICAgKiBJLmUuOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdDogJHZhcjEkJ1xuICAgKi9cbiAgQElucHV0KCkgaW52YWxpZExlbmd0aE1lc3NhZ2VQbHVyYWwgPSAnWW91IGNhbiBqdXN0IGFkZCAkdmFyMSQgYXR0YWNobWVudCBmaWxlLiBSZWplY3RlZCBmaWxlczogJHZhcjIkJztcblxuICAvKipcbiAgICogSWYgbWF4TnVtYmVyT2ZGaWxlcyB2YWx1ZSBpcyBncmVhdGVyIHRoYW4gMSBvciBlcXVhbCB0byAtMSwgbXVsdGlwbGUgZmlsZXMgYXJlIGVuYWJsZWQuXG4gICAqIERlZmF1bHQgdmFsdWUgPSAtMS5cbiAgICovXG4gIEBJbnB1dCgpIG1heE51bWJlck9mRmlsZXMgPSAtMTtcbiAgLyoqXG4gICAqIElmIG1heFNpemUgdmFsdWUgaXMgY2FsY3VsYXRlZCBpbiBLQi5cbiAgICogRGVmYXVsdCB2YWx1ZSA9IDQ2MDgwICg0NW1iKS5cbiAgICovXG4gIEBJbnB1dCgpIG1heFNpemUgPSA0NjA4MDtcbiAgLyoqXG4gICAqIFRoaXMgZmllbGQgZG9lcyBub3QgcmVxdWlyZSB0byBpbmNsdWRlIHRoZSBkb3QgZXh0ZW5zaW9uLlxuICAgKiBFeGFtcGxlOiBbXCJwc2RcIiwgLnhsc3hcIiwgXCJ6aXBcIiwgXCIuZG9jeFwiLCBcIi5wcHR4XCJdXG4gICAqL1xuICBASW5wdXQoKSBhY2NlcHRGaWxlVHlwZTogc3RyaW5nW10gPSBbXTtcbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGxpc3Qgb2YgdmFsaWQgYXR0YWNobWVudHMgYWRkZWQuXG4gICAqL1xuICBAT3V0cHV0KCkgJGF0dGFjaG1lbnRJdGVtczogRXZlbnRFbWl0dGVyPElBdHRhY2htZW50RGF0YVtdPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGxpc3Qgb2YgdmFsaWQgYXR0YWNobWVudHMgYWRkZWQgYW5kIGZpcmVzIHRoZSB1cGxvYWQgYnV0dG9uLlxuICAgKi9cbiAgQE91dHB1dCgpICR1cGxvYWRDbGljazogRXZlbnRFbWl0dGVyPElBdHRhY2htZW50RGF0YVtdPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBwdWJsaWMgYXR0YWNobWVudEl0ZW1zOiBJQXR0YWNobWVudERhdGFbXSA9IFtdO1xuXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfYWxlcnQ6IEdsU2hhcmVkQ29tcG9uZW50TW9kYWxBbGVydFNlcnZpY2UpIHsgfVxuXG4gIHByaXZhdGUgc3RhdGljIGZpbGVOYW1lTGlzdChsaXN0OiBzdHJpbmdbXSk6IHN0cmluZyB7XG4gICAgbGV0IGxpc3ROYW1lID0gJ1xcbic7XG4gICAgZm9yIChjb25zdCBbaSwgaXRlbV0gb2YgbGlzdC5lbnRyaWVzKCkpIHtcbiAgICAgIGNvbnN0IHNlcGFyYXRvciA9IGkgPCAobGlzdC5sZW5ndGggLSAxKSA/ICc7XFxuJyA6ICcuJztcbiAgICAgIGxpc3ROYW1lICs9IGAke2kgKyAxfS4gJHtpdGVtfSR7c2VwYXJhdG9yfWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpc3ROYW1lO1xuICB9XG5cbiAgYXN5bmMgb25GaWxlRHJvcHBlZChmaWxlTGlzdDogRmlsZUxpc3QpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBkdXBsaWNhdGVkTGlzdDogc3RyaW5nW10gPSBbXTtcbiAgICBjb25zdCBpbnZhbGlkRmlsZUxpc3Q6IHN0cmluZ1tdID0gW107XG4gICAgY29uc3QgaW52YWxpZFNpemVMaXN0OiBzdHJpbmdbXSA9IFtdO1xuICAgIGNvbnN0IGludmFsaWRMZW5ndGhMaXN0OiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgaWYgKHRoaXMubWF4TnVtYmVyT2ZGaWxlcyA9PT0gLTEgfHwgdGhpcy5tYXhOdW1iZXJPZkZpbGVzID4gMSkge1xuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnByZWZlci1mb3Itb2ZcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsZUxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgZmlsZSA9IGZpbGVMaXN0W2ldO1xuICAgICAgICBjb25zdCB2YWxpZEZpbGUgPSB0aGlzLmFjY2VwdEZpbGVUeXBlLmxlbmd0aCA+IDAgPyBBdHRhY2htZW50VmFsaWRhdGUuZmlsZUFycmF5KGZpbGUubmFtZSwgdGhpcy5hY2NlcHRGaWxlVHlwZSkgOiAgdHJ1ZTtcbiAgICAgICAgY29uc3QgZHVwbGljYXRlZCA9IEF0dGFjaG1lbnRWYWxpZGF0ZS5kdXBsaWNhdGVkKGZpbGUubmFtZSwgdGhpcy5hdHRhY2htZW50SXRlbXMpO1xuICAgICAgICBjb25zdCBpbnZhbGlkU2l6ZSA9ICFBdHRhY2htZW50VmFsaWRhdGUuZmlsZVNpemVGcm9tQXJyYXkodGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LCBmaWxlKTtcblxuICAgICAgICBpZiAodmFsaWRGaWxlKSB7XG4gICAgICAgICAgaWYgKGR1cGxpY2F0ZWQpIHtcbiAgICAgICAgICAgIGR1cGxpY2F0ZWRMaXN0LnB1c2goZmlsZS5uYW1lKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGludmFsaWRTaXplKSB7XG4gICAgICAgICAgICBpbnZhbGlkU2l6ZUxpc3QucHVzaChmaWxlLm5hbWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5tYXhOdW1iZXJPZkZpbGVzID09PSAtMSB8fCB0aGlzLmF0dGFjaG1lbnRJdGVtcy5sZW5ndGggPCB0aGlzLm1heE51bWJlck9mRmlsZXMpIHtcbiAgICAgICAgICAgICAgdGhpcy5hZGRJdGVtVG9BcnJheShmaWxlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGludmFsaWRMZW5ndGhMaXN0LnB1c2goZmlsZS5uYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaW52YWxpZEZpbGVMaXN0LnB1c2goZmlsZS5uYW1lKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNob3dFcnJvck1lc3NhZ2UoaW52YWxpZEZpbGVMaXN0LCBkdXBsaWNhdGVkTGlzdCwgaW52YWxpZFNpemVMaXN0LCBpbnZhbGlkTGVuZ3RoTGlzdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGFycmF5Q29weSA9IFsuLi50aGlzLmF0dGFjaG1lbnRJdGVtc107XG4gICAgICB0aGlzLmF0dGFjaG1lbnRJdGVtcyA9IFtdO1xuXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cHJlZmVyLWZvci1vZlxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWxlTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBmaWxlID0gZmlsZUxpc3RbaV07XG4gICAgICAgIGNvbnN0IHZhbGlkRmlsZSA9IHRoaXMuYWNjZXB0RmlsZVR5cGUubGVuZ3RoID4gMCA/IEF0dGFjaG1lbnRWYWxpZGF0ZS5maWxlQXJyYXkoZmlsZS5uYW1lLCB0aGlzLmFjY2VwdEZpbGVUeXBlKSA6ICB0cnVlO1xuICAgICAgICBjb25zdCBkdXBsaWNhdGVkID0gQXR0YWNobWVudFZhbGlkYXRlLmR1cGxpY2F0ZWQoZmlsZS5uYW1lLCB0aGlzLmF0dGFjaG1lbnRJdGVtcyk7XG4gICAgICAgIGNvbnN0IGludmFsaWRTaXplID0gIUF0dGFjaG1lbnRWYWxpZGF0ZS5maWxlU2l6ZUZyb21BcnJheSh0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQsIGZpbGUpO1xuXG4gICAgICAgIGlmICh2YWxpZEZpbGUpIHtcbiAgICAgICAgICBpZiAoZHVwbGljYXRlZCkge1xuICAgICAgICAgICAgZHVwbGljYXRlZExpc3QucHVzaChmaWxlLm5hbWUpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoaW52YWxpZFNpemUpIHtcbiAgICAgICAgICAgIGludmFsaWRTaXplTGlzdC5wdXNoKGZpbGUubmFtZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmF0dGFjaG1lbnRJdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgdGhpcy5hZGRJdGVtVG9BcnJheShmaWxlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGludmFsaWRMZW5ndGhMaXN0LnB1c2goZmlsZS5uYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaW52YWxpZEZpbGVMaXN0LnB1c2goZmlsZS5uYW1lKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5hdHRhY2htZW50SXRlbXMubGVuZ3RoID09PSAwKSB7IHRoaXMuYXR0YWNobWVudEl0ZW1zID0gWy4uLmFycmF5Q29weV07IH1cbiAgICAgIGF3YWl0IHRoaXMuc2hvd0Vycm9yTWVzc2FnZShpbnZhbGlkRmlsZUxpc3QsIGR1cGxpY2F0ZWRMaXN0LCBpbnZhbGlkU2l6ZUxpc3QsIGludmFsaWRMZW5ndGhMaXN0KTtcbiAgICB9XG5cbiAgICB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSAnJztcbiAgICB0aGlzLiRhdHRhY2htZW50SXRlbXMuZW1pdCh0aGlzLmF0dGFjaG1lbnRJdGVtcyk7XG4gIH1cblxuICByZW1vdmVBdHRhY2htZW50KHJlbW92ZWQpOiB2b2lkIHtcbiAgICBjb25zdCB0ZW1wTGlzdCA9IHRoaXMuYXR0YWNobWVudEl0ZW1zLmZpbHRlcih4ID0+IHguaWQgIT09IHJlbW92ZWQuaWQpO1xuICAgIGNvbnN0IGF0dGFjaG1lbnRzOiBJQXR0YWNobWVudERhdGFbXSA9IFtdO1xuXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHRlbXBMaXN0KSB7XG4gICAgICBhdHRhY2htZW50cy5wdXNoKHtcbiAgICAgICAgaWQ6IGF0dGFjaG1lbnRzLmxlbmd0aCxcbiAgICAgICAgbmFtZTogaXRlbS5maWxlLm5hbWUsXG4gICAgICAgIGljb246IEF0dGFjaG1lbnRJY29uLmdldChpdGVtLmZpbGUubmFtZSksXG4gICAgICAgIGZpbGU6IGl0ZW0uZmlsZSxcbiAgICAgICAgbmV3OiB0cnVlLFxuICAgICAgICByZW1vdmU6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLmF0dGFjaG1lbnRJdGVtcyA9IGF0dGFjaG1lbnRzO1xuICAgIHRoaXMuJGF0dGFjaG1lbnRJdGVtcy5lbWl0KGF0dGFjaG1lbnRzKTtcbiAgfVxuICBhc3luYyBmaWxlQnJvd3NlckhhbmRsZXIoZmlsZXM6IEV2ZW50VGFyZ2V0KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgZmlsZUxpc3Q6IEZpbGVMaXN0ID0gKGZpbGVzIGFzIEhUTUxJbnB1dEVsZW1lbnQpLmZpbGVzO1xuICAgIHJldHVybiB0aGlzLm9uRmlsZURyb3BwZWQoZmlsZUxpc3QpO1xuICB9XG4gIHBhcnNlZEFjY2VwdExpc3QoKTogc3RyaW5nIHtcbiAgICBsZXQgYWNjZXB0ID0gJ1xcbic7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFjY2VwdEZpbGVUeXBlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBpdGVtID0gdGhpcy5hY2NlcHRGaWxlVHlwZVtpXTtcbiAgICAgIGNvbnN0IHNlcGFyYXRvciA9IGkgPCAodGhpcy5hY2NlcHRGaWxlVHlwZS5sZW5ndGggLSAxKSA/ICcsICcgOiAnJztcbiAgICAgIGxldCB0ZW1wRXh0ZW5zaW9uOiBzdHJpbmc7XG5cbiAgICAgIGlmICghaXRlbS5pbmNsdWRlcygnLicsIDApKSB7XG4gICAgICAgIHRlbXBFeHRlbnNpb24gPSBgLiR7aXRlbX1gO1xuICAgICAgfVxuXG4gICAgICBhY2NlcHQgKz0gYCR7dGVtcEV4dGVuc2lvbn0ke3NlcGFyYXRvcn1gO1xuXG4gICAgfVxuXG4gICAgcmV0dXJuIGFjY2VwdDtcbiAgfVxuICBjbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQuY2xpY2soKTtcbiAgfVxuXG4gIHVwbG9hZENsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuJHVwbG9hZENsaWNrLmVtaXQodGhpcy5hdHRhY2htZW50SXRlbXMpO1xuICB9XG5cbiAgcHJpdmF0ZSBhZGRJdGVtVG9BcnJheShmaWxlOiBGaWxlKTogdm9pZCB7XG4gICAgdGhpcy5hdHRhY2htZW50SXRlbXMucHVzaCh7XG4gICAgICBpZDogdGhpcy5hdHRhY2htZW50SXRlbXMubGVuZ3RoLFxuICAgICAgbmFtZTogZmlsZS5uYW1lLFxuICAgICAgaWNvbjogQXR0YWNobWVudEljb24uZ2V0KGZpbGUubmFtZSksXG4gICAgICBmaWxlLFxuICAgICAgbmV3OiB0cnVlLFxuICAgICAgcmVtb3ZlOiBmYWxzZVxuICAgIH0pO1xuICB9XG4gIHByaXZhdGUgYXN5bmMgc2hvd0Vycm9yTWVzc2FnZShpbnZhbGlkRmlsZUxpc3Q6IHN0cmluZ1tdLCBkdXBsaWNhdGVkTGlzdDogc3RyaW5nW10sIGludmFsaWRTaXplTGlzdDogc3RyaW5nW10sIGludmFsaWRMZW5ndGhMaXN0OiBzdHJpbmdbXSA9IFtdKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgdGltZW91dCA9IDUwMDtcblxuICAgIGlmIChpbnZhbGlkRmlsZUxpc3QgIT0gbnVsbCAmJiBpbnZhbGlkRmlsZUxpc3QubGVuZ3RoID4gMCkge1xuICAgICAgYXdhaXQgdGhpcy5lcnJvck1lc3NhZ2UoXG4gICAgICAgIHRoaXMuYWNjZXB0RmlsZVR5cGUsXG4gICAgICAgIHRoaXMuaW52YWxpZEV4dGVuc2lvbk1lc3NhZ2VTaW5ndWxhcixcbiAgICAgICAgdGhpcy5pbnZhbGlkRXh0ZW5zaW9uTWVzc2FnZVBsdXJhbFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoZHVwbGljYXRlZExpc3QgIT0gbnVsbCAmJiBkdXBsaWNhdGVkTGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcbiAgICAgICAgYXdhaXQgdGhpcy5lcnJvck1lc3NhZ2UoXG4gICAgICAgICAgZHVwbGljYXRlZExpc3QsXG4gICAgICAgICAgdGhpcy5kdXBsaWNhdGVkTWVzc2FnZVNpbmd1bGFyLFxuICAgICAgICAgIHRoaXMuZHVwbGljYXRlZE1lc3NhZ2VQbHVyYWxcbiAgICAgICAgKTtcbiAgICAgIH0sIHRpbWVvdXQpO1xuICAgIH1cblxuICAgIGlmIChpbnZhbGlkU2l6ZUxpc3QgIT0gbnVsbCAmJiBpbnZhbGlkU2l6ZUxpc3QubGVuZ3RoID4gMCkge1xuICAgICAgc2V0VGltZW91dChhc3luYyAoKSA9PiB7XG4gICAgICAgIGF3YWl0IHRoaXMuZXJyb3JNZXNzYWdlVHdvVmFyaWFibGVzKFxuICAgICAgICAgIGludmFsaWRTaXplTGlzdCxcbiAgICAgICAgICB0aGlzLmludmFsaWRTaXplTWVzc2FnZVNpbmd1bGFyLFxuICAgICAgICAgIHRoaXMuaW52YWxpZFNpemVNZXNzYWdlUGx1cmFsLFxuICAgICAgICAgIHRoaXMubWF4U2l6ZS50b1N0cmluZygpXG4gICAgICAgICk7XG4gICAgICB9LCB0aW1lb3V0KTtcbiAgICB9XG5cbiAgICBpZiAoaW52YWxpZExlbmd0aExpc3QgIT0gbnVsbCAmJiBpbnZhbGlkTGVuZ3RoTGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgcGx1cmFsID0gdGhpcy5tYXhOdW1iZXJPZkZpbGVzID4gMSA/IHRoaXMuaW52YWxpZExlbmd0aE1lc3NhZ2VQbHVyYWwgOiB0aGlzLmludmFsaWRMZW5ndGhNZXNzYWdlU2luZ3VsYXI7XG4gICAgICAgIGF3YWl0IHRoaXMuZXJyb3JNZXNzYWdlVHdvVmFyaWFibGVzKFxuICAgICAgICAgIGludmFsaWRMZW5ndGhMaXN0LFxuICAgICAgICAgIHRoaXMuaW52YWxpZExlbmd0aE1lc3NhZ2VTaW5ndWxhcixcbiAgICAgICAgICBwbHVyYWwsXG4gICAgICAgICAgdGhpcy5tYXhOdW1iZXJPZkZpbGVzLnRvU3RyaW5nKCksXG4gICAgICAgICAgdGhpcy5tYXhOdW1iZXJPZkZpbGVzID4gMVxuICAgICAgICApO1xuICAgICAgfSwgdGltZW91dCk7XG4gICAgfVxuICB9XG4gIHByaXZhdGUgYXN5bmMgZXJyb3JNZXNzYWdlKGFycmF5TGlzdDogc3RyaW5nW10sIHNpbmd1bGFyTWVzc2FnZTogc3RyaW5nLCBwbHVyYWxNZXNzYWdlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBmaWxlTmFtZXMgPSBHbFNoYXJlZENvbXBvbmVudElucHV0RHJhZ0FuZERyb3BTaW1wbGVDb21wb25lbnQuZmlsZU5hbWVMaXN0KGFycmF5TGlzdCk7XG4gICAgY29uc3QgaXNQbHVyYWwgPSBhcnJheUxpc3QubGVuZ3RoID4gMTtcbiAgICBjb25zdCBzaW5ndWxhciA9IHNpbmd1bGFyTWVzc2FnZS5yZXBsYWNlKCckdmFyMSQnLCBmaWxlTmFtZXMpO1xuICAgIGNvbnN0IHBsdXJhbCA9IHBsdXJhbE1lc3NhZ2UucmVwbGFjZSgnJHZhcjEkJywgZmlsZU5hbWVzKTtcbiAgICBjb25zdCBtZXNzYWdlID0gaXNQbHVyYWwgPyBwbHVyYWwgOiBzaW5ndWxhcjtcblxuICAgIGF3YWl0IHRoaXMuX2FsZXJ0LnNob3cobWVzc2FnZSk7XG4gIH1cbiAgcHJpdmF0ZSBhc3luYyBlcnJvck1lc3NhZ2VUd29WYXJpYWJsZXMoYXJyYXlMaXN0OiBzdHJpbmdbXSwgc2luZ3VsYXJNZXNzYWdlOiBzdHJpbmcsIHBsdXJhbE1lc3NhZ2U6IHN0cmluZywgZmlyc3RWYXJpYWJsZTogc3RyaW5nLCBpc1BsdXJhbENvbXBhcmF0b3I6IGJvb2xlYW4gPSBudWxsKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgZmlsZU5hbWVzID0gR2xTaGFyZWRDb21wb25lbnRJbnB1dERyYWdBbmREcm9wU2ltcGxlQ29tcG9uZW50LmZpbGVOYW1lTGlzdChhcnJheUxpc3QpO1xuICAgIGNvbnN0IGlzUGx1cmFsID0gaXNQbHVyYWxDb21wYXJhdG9yICYmIGFycmF5TGlzdC5sZW5ndGggPiAxIHx8ICFpc1BsdXJhbENvbXBhcmF0b3IgJiYgYXJyYXlMaXN0Lmxlbmd0aCA+IDE7XG4gICAgY29uc3Qgc2luZ3VsYXIgPSBzaW5ndWxhck1lc3NhZ2UucmVwbGFjZSgnJHZhcjEkJywgZmlyc3RWYXJpYWJsZSkucmVwbGFjZSgnJHZhcjIkJywgZmlsZU5hbWVzKTtcbiAgICBjb25zdCBwbHVyYWwgPSBwbHVyYWxNZXNzYWdlLnJlcGxhY2UoJyR2YXIxJCcsIGZpcnN0VmFyaWFibGUpLnJlcGxhY2UoJyR2YXIyJCcsIGZpbGVOYW1lcyk7XG5cbiAgICBjb25zdCBtZXNzYWdlID0gaXNQbHVyYWwgPyBwbHVyYWwgOiBzaW5ndWxhcjtcblxuICAgIGF3YWl0IHRoaXMuX2FsZXJ0LnNob3cobWVzc2FnZSk7XG4gIH1cbn1cbiJdfQ==