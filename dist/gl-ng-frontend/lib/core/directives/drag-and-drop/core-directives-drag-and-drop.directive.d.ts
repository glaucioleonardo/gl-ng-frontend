import { EventEmitter } from '@angular/core';
export declare class CoreDirectivesDragAndDropDirective {
    fileOver: boolean;
    fileNotOver: boolean;
    fileDropped: EventEmitter<any>;
    onDragOver(event: DragEvent): void;
    onDragLeader(event: DragEvent): void;
    onDrop(event: DragEvent): void;
}
