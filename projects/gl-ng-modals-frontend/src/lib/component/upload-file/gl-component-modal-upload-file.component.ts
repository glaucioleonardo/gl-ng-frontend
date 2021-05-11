import { Component, Input, OnInit } from '@angular/core';
import { IAttachmentData } from 'gl-w-frontend/lib/scripts/core/services/attachment/core-services-attachment.interface';
import { GlComponentModalUploadFileService } from './gl-component-modal-upload-file.service';

@Component({
  selector: 'gl-component-modal-upload-file',
  templateUrl: './gl-component-modal-upload-file.component.html',
  styleUrls: ['./gl-component-modal-upload-file.component.scss']
})
export class GlComponentModalUploadFileComponent implements OnInit {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() modalLogo: string;
  @Input() innerValueUpload = 'Upload';
  @Input() innerValueCancel = 'Cancel';
  @Input() readOnly = false;
  @Input() attachments: IAttachmentData[] = [];

  @Input() uploadValue = 'upload';
  @Input() cancelValue = 'cancel';

  @Input() showContinueUpload: boolean;
  @Input() continueUpload: boolean;
  @Input() continueUploadLabel = 'Continue previous loading';

  /**
   * In case the button icon source is not passed, the icon will be hidden.
   */
  @Input() resumeButtonIconSrc: string = null;
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

  constructor(public service: GlComponentModalUploadFileService) {}

  ngOnInit(): void {
    if (this.attachments.length > 0) {
      this.service.attachmentItems$.next(this.attachments);
    }
  }

  onCancel(): void {
    this.service.currentValue$.next(false);
    this.service.resolvePromise(false);
    this.service.hide();
  }
  async onUpload(): Promise<void | unknown> {
    if (this.service.attachmentItems.length === 0) {
      return this.service.showError('Não existem arquivos anexados! Por favor, insira pelo menos um arquivo antes de continuar!');
    }

    const attachments: IAttachmentData[] = [...this.service.attachmentItems];

    this.service.currentValue$.next(true);
    this.service.resolvePromise(true);
    this.service.hide();

    await this.service.uploadAction(attachments);
    this.service.uploadAction = null;
  }

  onModalKeyUp(e: KeyboardEvent): void | unknown {
    if (e.key === 'Enter') {
      return this.onUpload();
    } else if (e.key === 'Escape') {
      this.onCancel();
    }
  }
}
