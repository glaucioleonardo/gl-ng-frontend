import { ElementRef, EventEmitter } from '@angular/core';
import { IAttachmentData } from 'gl-w-frontend/lib/scripts/core/services/attachment/core-services-attachment.interface';
import { GlSharedComponentModalAlertService } from '../../../modal/alert/gl-shared-component-modal-alert.service';
export declare class GlSharedComponentInputDragAndDropSimpleComponent {
    private _alert;
    input: ElementRef<HTMLInputElement>;
    $uploadClick: () => void;
    uploadButtonValue: string;
    readOnly: boolean;
    descriptionDragAndDrop: string;
    descriptionDragAndDropOr: string;
    descriptionDragAndDropClickHere: string;
    uploadIcon: string;
    /**
     * The message must contain the string $var1$. It'll be replaced during runtime.
     * I.e.: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit: $var1$'
     */
    invalidExtensionMessageSingular: string;
    /**
     * The message must contain the string $var1$. It'll be replaced during runtime.
     * I.e.: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit: $var1$'
     */
    invalidExtensionMessagePlural: string;
    /**
     * The message must contain the string $var1$. It'll be replaced during runtime.
     * I.e.: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit: $var1$'
     */
    duplicatedMessageSingular: string;
    /**
     * The message must contain the string $var1$. It'll be replaced during runtime.
     * I.e.: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit: $var1$'
     */
    duplicatedMessagePlural: string;
    /**
     * The message must contain the string $var1$ and $var2$. It'll be replaced during runtime.
     * I.e.: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit: $var1$'
     */
    invalidSizeMessageSingular: string;
    /**
     * The message must contain the string $var1$ and $var2$. It'll be replaced during runtime.
     * I.e.: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit: $var1$'
     */
    invalidSizeMessagePlural: string;
    /**
     * The message must contain the string $var1$. It'll be replaced during runtime.
     * I.e.: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit: $var1$'
     */
    invalidLengthMessageSingular: string;
    /**
     * The message must contain the string $var1$. It'll be replaced during runtime.
     * I.e.: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit: $var1$'
     */
    invalidLengthMessagePlural: string;
    /**
     * If maxNumberOfFiles value is greater than 1 or equal to -1, multiple files are enabled.
     * Default value = -1.
     */
    maxNumberOfFiles: number;
    /**
     * If maxSize value is calculated in KB.
     * Default value = 46080 (45mb).
     */
    maxSize: number;
    /**
     * This field does not require to include the dot extension.
     * Example: ["psd", .xlsx", "zip", ".docx", ".pptx"]
     */
    acceptFileType: string[];
    /**
     * Returns the list of valid attachments added.
     */
    $attachmentItems: EventEmitter<IAttachmentData[]>;
    attachmentItems: IAttachmentData[];
    constructor(_alert: GlSharedComponentModalAlertService);
    private static fileNameList;
    onFileDropped(fileList: FileList): Promise<void>;
    removeAttachment(removed: any): void;
    fileBrowserHandler(files: EventTarget): Promise<void>;
    parsedAcceptList(): string;
    click(): void;
    private addItemToArray;
    private showErrorMessage;
    private errorMessage;
    private errorMessageTwoVariables;
}
