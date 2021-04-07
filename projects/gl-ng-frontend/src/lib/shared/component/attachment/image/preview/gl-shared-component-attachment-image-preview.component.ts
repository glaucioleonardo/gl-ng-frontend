import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { GlSharedComponentAttachmentImagePreviewService } from './gl-shared-component-attachment-image-preview.service';

@Component({
  selector: 'gl-shared-component-attachment-image-preview',
  templateUrl: './gl-shared-component-attachment-image-preview.component.html',
  styleUrls: ['./gl-shared-component-attachment-image-preview.component.scss']
})
export class GlSharedComponentAttachmentImagePreviewComponent implements AfterViewInit{
  @ViewChild('fileInputImage', { read: ElementRef, static: true }) fileInputImage: ElementRef<HTMLInputElement>;
  @ViewChild('userImage', { read: ElementRef, static: true }) userImage: ElementRef<HTMLDivElement>;

  @Input() disabled = false;
  @Input() currentImage;
  @Input() required = false;
  @Input() type: 'light' | 'dark' | '' = '';
  @Input() showLabel: boolean = true;
  @Input() requiredFieldDescription: string = 'Required field';
  @Input() addImageDescription: string = 'Click to add an image';
  @Input() maxImageSize: string = '10240';
  @Input() invalidSizeDescription: string = 'Invalid file size. The max allowed size is';
  @Input() invalidFormatDescription: string = 'Invalid file format!';
  @Input() addImageButtonDescription: string = 'Add image';
  @Input() removeImageButtonDescription: string = 'Remove image';

  @Output() currentValue$ = new EventEmitter();

  constructor(public service: GlSharedComponentAttachmentImagePreviewService) { }

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

  updateImage() {
    if (this.currentImage != null && this.currentImage.length > 0) {
      this.service.setImage(this.currentImage);
    }
  }
}
