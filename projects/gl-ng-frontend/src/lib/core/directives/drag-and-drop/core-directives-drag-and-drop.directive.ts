import { Directive, EventEmitter, HostBinding, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[glCoreDirectivesDragAndDrop]'
})
export class CoreDirectivesDragAndDropDirective {
  @HostBinding('class.file-over') fileOver: boolean;
  @HostBinding('class.file-not-over') fileNotOver: boolean;
  @Output() fileDropped: EventEmitter<any> = new EventEmitter();

  @HostListener('dragover', ['$event']) onDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.fileOver = true;
    this.fileNotOver = false;
  }
  @HostListener('dragleave', ['$event']) public onDragLeader(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.fileOver = false;
    this.fileNotOver = true;
  }
  @HostListener('drop', ['$event']) public onDrop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.fileOver = false;
    this.fileNotOver = true;
    const files = event.dataTransfer.files;

    if (files.length > 0) {
      // Do some stuff here
      this.fileDropped.emit(files);
      console.log(`You dropped ${files.length} files.`);
    }
  }
}
