import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { GlComponentButtonAttachmentFileService } from './gl-component-button-attachment-file.service';
import { IAttachmentData } from 'gl-w-attachment-frontend';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'gl-component-button-attachment-file',
  templateUrl: './gl-component-button-attachment-file.component.html',
  styleUrls: ['./gl-component-button-attachment-file.component.scss'],
  imports: [
    NgOptimizedImage
  ],
  standalone: true
})
export class GlComponentButtonAttachmentFileComponent implements AfterViewInit {
  @ViewChild('fileInput', { read: ElementRef, static: true }) fileInput: ElementRef<HTMLInputElement>;

  /**
   * @param maxFileSize Size in KB.
   * @param attachmentIconSrc (Optional) In case the source is not informed, the default path will be the one in gl-w-frontend package.
   */
  @Input() maxFileSize = '46080';
  @Input() accept: string[];
  @Input() title = 'Click to add an attachment';
  @Input() icon = '../assets/img/icon/attachment/attachment.svg';
  @Input() attachmentIconSrc: string;
  @Input() description = 'Add attachment';
  @Input() attachments: IAttachmentData[] = [];
  @Input() duplicatedDescription = 'File duplicated. Please, add another file!';
  @Input() invalidSizeDescription = 'Invalid file size. The max allowed size is';
  @Input() invalidFormatDescription = 'Invalid file format!';

  @Output() currentValue$: EventEmitter<IAttachmentData> = new EventEmitter();

  constructor(public service: GlComponentButtonAttachmentFileService) { }

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
