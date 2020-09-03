import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { GlSharedComponentButtonAttachmentFileService } from './gl-shared-component-button-attachment-file.service';
import { IAttachmentData } from "gl-sp-frontend";

@Component({
  selector: 'gl-shared-component-button-attachment-file',
  templateUrl: './gl-shared-component-button-attachment-file.component.html',
  styleUrls: ['./gl-shared-component-button-attachment-file.component.scss']
})
export class GlSharedComponentButtonAttachmentFileComponent implements AfterViewInit {
  @ViewChild('fileInput', { read: ElementRef, static: true }) fileInput: ElementRef<HTMLInputElement>;

  /**
   * @param maxFileSize Size in KB.
   * @param attachmentIconSrc (Optional) In case the source is not informed, the default path will be the one in gl-w-frontend package.
   */
  @Input() maxFileSize: string = '46080';
  @Input() accept: string[];
  @Input() title: string = 'Click to add an attachment';
  @Input() icon: string = '../assets/img/icon/attachment/attachment.svg';
  @Input() attachmentIconSrc: string;
  @Input() description: string = 'Add attachment';
  @Input() attachments: IAttachmentData[] = [];
  @Input() duplicatedDescription: string = 'File duplicated. Please, add another file!';
  @Input() invalidSizeDescription: string = 'Invalid file size. The max allowed size is';
  @Input() invalidFormatDescription: string = 'Invalid file format!';

  @Output() currentValue$: EventEmitter<IAttachmentData> = new EventEmitter();

  constructor(public service: GlSharedComponentButtonAttachmentFileService) { }

  ngAfterViewInit(): void {
    this.service.initialize(
      this.fileInput.nativeElement,
      this.currentValue$,
      this.attachments,
      this.duplicatedDescription,
      this.invalidSizeDescription,
      this.invalidFormatDescription,
      this.attachmentIconSrc
    );
  }
}
