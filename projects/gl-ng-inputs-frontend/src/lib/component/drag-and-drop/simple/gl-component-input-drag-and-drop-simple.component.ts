import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { AttachmentIcon, AttachmentValidate, IAttachmentData } from 'gl-w-attachment-frontend';
import { GlComponentModalAlertService } from '../../../../../../gl-ng-modals-frontend/src/lib/component/alert/gl-component-modal-alert.service';
import { IDragAndDropAddedResult } from './gl-component-input-drag-and-drop-simple.interface';
import { GlComponentInputButtonSimpleComponent } from '../../button/simple/gl-component-input-button-simple.component';
import { GlComponentAttachmentItemComponent } from '../../../../../../gl-ng-attachments-frontend/src/lib/component/item/gl-component-attachment-item.component';
import { CoreDirectivesDragAndDropDirective } from '../../../core/directives/drag-and-drop/core-directives-drag-and-drop.directive';
import { GlComponentInputSwitchComponent } from '../../switch/gl-component-input-switch.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'gl-component-input-drag-and-drop-simple',
    templateUrl: './gl-component-input-drag-and-drop-simple.component.html',
    styleUrls: ['./gl-component-input-drag-and-drop-simple.component.scss'],
    standalone: true,
  imports: [GlComponentInputSwitchComponent, CoreDirectivesDragAndDropDirective, GlComponentAttachmentItemComponent, GlComponentInputButtonSimpleComponent, NgOptimizedImage]
})
export class GlComponentInputDragAndDropSimpleComponent {
  @ViewChild('fileAttachment') input: ElementRef<HTMLInputElement>;

  @Input() showUploadButton = true;
  @Input() showContinueUpload: boolean;
  @Input() continueUpload: boolean;
  @Input() continueUploadLabel = 'Continue previous loading';

  @Input() uploadButtonValue = 'Upload files';
  @Input() readOnly = false;
  @Input() handleErrorMessage = false;

  /**
   * In case the button icon source is not passed, the icon will be hidden.
   */
  @Input() resumeButtonIconSrc: string;
  @Input() descriptionDragAndDrop = 'Drag and drop the file';
  @Input() descriptionDragAndDropOr = 'or';
  @Input() descriptionDragAndDropClickHere = 'Click here';

  @Input() uploadIcon = '../assets/img/icon/upload/upload.svg';

  /**
   * The message must contain the string $var1$. It'll be replaced during runtime.
   * I.e.: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit: $var1$'
   */
  @Input() invalidExtensionMessageSingular = 'The invalid file has not been added to the attachment list. Accepted file extensions: $var1$';
  /**
   * The message must contain the string $var1$. It'll be replaced during runtime.
   * I.e.: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit: $var1$'
   */
  @Input() invalidExtensionMessagePlural = 'The invalid files have not been added to the attachment list. Accepted file extensions: $var1$';
  /**
   * The message must contain the string $var1$. It'll be replaced during runtime.
   * I.e.: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit: $var1$'
   */
  @Input() duplicatedMessageSingular = 'The duplicated file has not been added to the attachment list. Rejected files: $var1$';
  /**
   * The message must contain the string $var1$. It'll be replaced during runtime.
   * I.e.: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit: $var1$'
   */
  @Input() duplicatedMessagePlural = 'The duplicated files have not been added to the attachment list. Rejected files: $var1$';
  /**
   * The message must contain the string $var1$ and $var2$. It'll be replaced during runtime.
   * I.e.: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit: $var1$'
   */
  @Input() invalidSizeMessageSingular = 'The current file is over $var1$KB and has not been added to the attachment list. Rejected files: $var2$';
  /**
   * The message must contain the string $var1$ and $var2$. It'll be replaced during runtime.
   * I.e.: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit: $var1$'
   */
  @Input() invalidSizeMessagePlural =
    'The files with size over $var1$KB have not been added to the attachment list. Rejected files: $var2$';

  /**
   * The message must contain the string $var1$. It'll be replaced during runtime.
   * I.e.: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit: $var1$'
   */
  @Input() invalidLengthMessageSingular = 'You can just add one attachment file. Rejected files: $var1$';
  /**
   * The message must contain the string $var1$. It'll be replaced during runtime.
   * I.e.: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit: $var1$'
   */
  @Input() invalidLengthMessagePlural = 'You can just add $var1$ attachment file. Rejected files: $var2$';

  /**
   * If maxNumberOfFiles value is greater than 1 or equal to -1, multiple files are enabled.
   * Default value = -1.
   */
  @Input() maxNumberOfFiles = -1;
  /**
   * If maxSize value is calculated in KB.
   * Default value = 46080 (45mb).
   */
  @Input() maxSize = 46080;
  /**
   * This field does not require to include the dot extension.
   * Example: ["psd", .xlsx", "zip", ".docx", ".pptx"]
   */
  @Input() acceptFileType: string[] = [];
  /**
   * Returns the list of valid attachments added.
   */

  @Input() attachmentItems: IAttachmentData[] = [];

  @Output() $attachmentItems: EventEmitter<IDragAndDropAddedResult> = new EventEmitter();
  @Output() $removedAttachmentItems: EventEmitter<IAttachmentData[]> = new EventEmitter();
  /**
   * Returns the list of valid attachments added and fires the upload button.
   */
  @Output() $uploadClick: EventEmitter<IAttachmentData[]> = new EventEmitter();
  @Output() $continueUploadActive: EventEmitter<boolean> = new EventEmitter();
  @Output() handleErrorMessageResult$: EventEmitter<string> = new EventEmitter();

  constructor(private _alert: GlComponentModalAlertService) { }

  private static fileNameList(list: string[]): string {
    let listName = '\n';
    for (const [i, item] of list.entries()) {
      const separator = i < (list.length - 1) ? ';\n' : '.';
      listName += `${i + 1}. ${item}${separator}`;
    }

    return listName;
  }

  async onFileDropped(fileList: FileList): Promise<void> {
    const duplicatedList: string[] = [];
    const invalidFileList: string[] = [];
    const invalidSizeList: string[] = [];
    const invalidLengthList: string[] = [];
    const newItems: IAttachmentData[] = [];

    if (this.maxNumberOfFiles === -1 || this.maxNumberOfFiles > 1) {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < fileList.length; i++) {
        const file = fileList[i];
        const validFile = this.acceptFileType.length > 0 ? AttachmentValidate.fileArray(file.name, this.acceptFileType) :  true;
        const duplicated = AttachmentValidate.duplicated(file.name, this.attachmentItems);
        const invalidSize = !AttachmentValidate.fileSizeFromArray(this.input.nativeElement, file);

        if (validFile) {
          if (duplicated) {
            duplicatedList.push(file.name);
          } else if (invalidSize) {
            invalidSizeList.push(file.name);
          } else {
            if (this.maxNumberOfFiles === -1 || this.attachmentItems.length < this.maxNumberOfFiles) {
              newItems.push(this.addItemToArray(file));
            } else {
              invalidLengthList.push(file.name);
            }
          }
        } else {
          invalidFileList.push(file.name);
        }
      }

      await this.showErrorMessage(invalidFileList, duplicatedList, invalidSizeList, invalidLengthList);
    } else {
      const arrayCopy = [...this.attachmentItems];
      this.attachmentItems = [];

      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < fileList.length; i++) {
        const file = fileList[i];
        const validFile = this.acceptFileType.length > 0 ? AttachmentValidate.fileArray(file.name, this.acceptFileType) :  true;
        const duplicated = AttachmentValidate.duplicated(file.name, this.attachmentItems);
        const invalidSize = !AttachmentValidate.fileSizeFromArray(this.input.nativeElement, file);

        if (validFile) {
          if (duplicated) {
            duplicatedList.push(file.name);
          } else if (invalidSize) {
            invalidSizeList.push(file.name);
          } else {
            if (this.attachmentItems.length === 0) {
              newItems.push(this.addItemToArray(file));
            } else {
              invalidLengthList.push(file.name);
            }
          }
        } else {
          invalidFileList.push(file.name);
        }
      }

      if (this.attachmentItems.length === 0) { this.attachmentItems = [...arrayCopy]; }
      await this.showErrorMessage(invalidFileList, duplicatedList, invalidSizeList, invalidLengthList);
    }

    this.input.nativeElement.value = '';
    this.$attachmentItems.emit({
      merged: this.attachmentItems,
      new: [...newItems]
    });
  }

  removeAttachment(removed): void {
    const removedItem: IAttachmentData[] = this.attachmentItems.filter(x => x.id === removed.id);
    const tempList = this.attachmentItems.filter(x => x.id !== removed.id);
    const attachments: IAttachmentData[] = [];

    for (const item of tempList) {
      attachments.push({
        id: item.id,
        name: item.file.name,
        icon: AttachmentIcon.get(item.file.name),
        file: item.file,
        new: item.new,
        remove: true,
        url: item.url,
        type: item.type
      });
    }

    this.attachmentItems = [...attachments];
    this.$attachmentItems.emit({
      merged: attachments,
      new: []
    });
    this.$removedAttachmentItems.emit(removedItem);
  }
  async fileBrowserHandler(files: EventTarget): Promise<void> {
    const fileList: FileList = (files as HTMLInputElement).files;
    return this.onFileDropped(fileList);
  }
  parsedAcceptList(): string {
    let accept = '\n';
    for (let i = 0; i < this.acceptFileType.length; i++) {
      const item = this.acceptFileType[i];
      const separator = i < (this.acceptFileType.length - 1) ? ', ' : '';
      let tempExtension: string;

      if (!item.includes('.', 0)) {
        tempExtension = `.${item}`;
      }

      accept += `${tempExtension}${separator}`;

    }

    return accept;
  }
  click(): void {
    this.input.nativeElement.click();
  }

  uploadClick(): void {
    this.$uploadClick.emit(this.attachmentItems);
  }

  onContinueUpload(active: boolean): void {
    this.$continueUploadActive.emit(active);
    this.continueUpload = active;
  }

  private addItemToArray(file: File): IAttachmentData {
    const item = {
      id: this.attachmentItems.length,
      name: file.name,
      icon: AttachmentIcon.get(file.name),
      file,
      new: true,
      remove: false
    };

    this.attachmentItems.push(item);
    return item;
  }
  private async showErrorMessage(
    invalidFileList: string[], duplicatedList: string[], invalidSizeList: string[], invalidLengthList: string[] = []): Promise<void> {
    const timeout = 500;

    if (invalidFileList != null && invalidFileList.length > 0) {
      await this.errorMessage(
        this.acceptFileType,
        this.invalidExtensionMessageSingular,
        this.invalidExtensionMessagePlural
      );
    }

    if (duplicatedList != null && duplicatedList.length > 0) {
      setTimeout(async () => {
        await this.errorMessage(
          duplicatedList,
          this.duplicatedMessageSingular,
          this.duplicatedMessagePlural
        );
      }, timeout);
    }

    if (invalidSizeList != null && invalidSizeList.length > 0) {
      setTimeout(async () => {
        await this.errorMessageTwoVariables(
          invalidSizeList,
          this.invalidSizeMessageSingular,
          this.invalidSizeMessagePlural,
          this.maxSize.toString()
        );
      }, timeout);
    }

    if (invalidLengthList != null && invalidLengthList.length > 0) {
      setTimeout(async () => {
        const plural = this.maxNumberOfFiles > 1 ? this.invalidLengthMessagePlural : this.invalidLengthMessageSingular;
        await this.errorMessageTwoVariables(
          invalidLengthList,
          this.invalidLengthMessageSingular,
          plural,
          this.maxNumberOfFiles.toString(),
          this.maxNumberOfFiles > 1
        );
      }, timeout);
    }
  }
  private async errorMessage(arrayList: string[], singularMessage: string, pluralMessage: string): Promise<void> {
    const fileNames = GlComponentInputDragAndDropSimpleComponent.fileNameList(arrayList);
    const isPlural = arrayList.length > 1;
    const singular = singularMessage.replace('$var1$', fileNames);
    const plural = pluralMessage.replace('$var1$', fileNames);
    const message = isPlural ? plural : singular;

    if (this.handleErrorMessage) {
      this.handleErrorMessageResult$.emit(message);
    } else {
      await this._alert.show(message);
    }
  }
  private async errorMessageTwoVariables(
    arrayList: string[], singularMessage: string, pluralMessage: string, firstVariable: string,
    isPluralComparator: boolean = null): Promise<void> {
    const fileNames = GlComponentInputDragAndDropSimpleComponent.fileNameList(arrayList);
    const isPlural = isPluralComparator && arrayList.length > 1 || !isPluralComparator && arrayList.length > 1;
    const singular = singularMessage.replace('$var1$', firstVariable).replace('$var2$', fileNames);
    const plural = pluralMessage.replace('$var1$', firstVariable).replace('$var2$', fileNames);

    const message = isPlural ? plural : singular;

    if (this.handleErrorMessage) {
      this.handleErrorMessageResult$.emit(message);
    } else {
      await this._alert.show(message);
    }
  }
}
