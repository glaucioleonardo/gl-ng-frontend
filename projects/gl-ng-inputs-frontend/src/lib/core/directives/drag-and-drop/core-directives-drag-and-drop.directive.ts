import { Directive, EventEmitter, HostBinding, HostListener, Output } from '@angular/core';

@Directive({
    selector: '[glCoreDirectivesDragAndDrop]',
    standalone: true
})
export class CoreDirectivesDragAndDropDirective {
  @HostBinding('class.file-over') fileOver: boolean;
  @HostBinding('class.file-not-over') fileNotOver: boolean;
  @Output() fileDropped: EventEmitter<any> = new EventEmitter();

  private static isReadOnly(event): boolean {
    return event.target.classList.contains('readonly');
  }

  @HostListener('dragover', ['$event']) onDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();

    const readonly = CoreDirectivesDragAndDropDirective.isReadOnly(event);

    if (!readonly) {
      this.fileOver = true;
      this.fileNotOver = false;
    } else {
      this.fileOver = false;
      this.fileNotOver = true;
    }
  }
  @HostListener('dragleave', ['$event']) public onDragLeader(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();

    const readonly = CoreDirectivesDragAndDropDirective.isReadOnly(event);

    if (!readonly) {
      this.fileOver = false;
      this.fileNotOver = true;
    } else {
      this.fileOver = false;
      this.fileNotOver = true;
    }
  }
  @HostListener('drop', ['$event']) public onDrop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();

    const readonly = CoreDirectivesDragAndDropDirective.isReadOnly(event);

    if (!readonly) {
      this.fileOver = false;
      this.fileNotOver = true;
      const files = event.dataTransfer.files;

      if (files.length > 0) {
        // Do some stuff here
        this.fileDropped.emit(files);
        console.log(`You dropped ${files.length} files.`);
      }
    } else {
      this.fileOver = false;
      this.fileNotOver = true;
    }
  }
}
