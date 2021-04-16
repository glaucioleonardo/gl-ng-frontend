import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { TTheme } from '../../../core/interfaces/global.interface';
import { GlComponentAttachmentImagePreviewService } from './gl-component-attachment-image-preview.service';

@Component({
  selector: 'gl-component-attachment-image-preview',
  templateUrl: './gl-component-attachment-image-preview.component.html',
  styleUrls: ['./gl-component-attachment-image-preview.component.scss']
})
export class GlComponentAttachmentImagePreviewComponent implements AfterViewInit{
  @ViewChild('fileInputImage', { read: ElementRef, static: true }) fileInputImage: ElementRef<HTMLInputElement>;
  @ViewChild('userImage', { read: ElementRef, static: true }) userImage: ElementRef<HTMLDivElement>;

  @Input() disabled = false;
  @Input() currentImage;
  @Input() required = false;
  @Input() theme: TTheme = '';
  @Input() showLabel = true;
  @Input() requiredFieldDescription = 'Required field';
  @Input() addImageDescription = 'Click to add an image';
  @Input() maxImageSize = '10240';
  @Input() invalidSizeDescription = 'Invalid file size. The max allowed size is';
  @Input() invalidFormatDescription = 'Invalid file format!';
  @Input() addImageButtonDescription = 'Add image';
  @Input() removeImageButtonDescription = 'Remove image';

  @Output() currentValue$ = new EventEmitter();

  constructor(public service: GlComponentAttachmentImagePreviewService) { }

  ngAfterViewInit(): void {
    this.service.initialize(
      this.fileInputImage.nativeElement,
      this.userImage.nativeElement,
      this.currentValue$,
      this.invalidSizeDescription,
      this.invalidFormatDescription,
      this.addImageButtonDescription,
      this.removeImageButtonDescription
    );

    this.updateImage();
  }

  updateImage(): void {
    if (this.currentImage != null && this.currentImage.length > 0) {
      this.service.setImage(this.currentImage);
    }
  }
}
