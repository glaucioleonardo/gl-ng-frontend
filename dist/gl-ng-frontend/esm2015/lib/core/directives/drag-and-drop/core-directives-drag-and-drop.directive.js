import { Directive, EventEmitter, HostBinding, HostListener, Output } from '@angular/core';
export class CoreDirectivesDragAndDropDirective {
    constructor() {
        this.fileDropped = new EventEmitter();
    }
    static isReadOnly(event) {
        return event.target.classList.contains('readonly');
    }
    onDragOver(event) {
        event.preventDefault();
        event.stopPropagation();
        const readonly = CoreDirectivesDragAndDropDirective.isReadOnly(event);
        if (!readonly) {
            this.fileOver = true;
            this.fileNotOver = false;
        }
        else {
            this.fileOver = false;
            this.fileNotOver = true;
        }
    }
    onDragLeader(event) {
        event.preventDefault();
        event.stopPropagation();
        const readonly = CoreDirectivesDragAndDropDirective.isReadOnly(event);
        if (!readonly) {
            this.fileOver = false;
            this.fileNotOver = true;
        }
        else {
            this.fileOver = false;
            this.fileNotOver = true;
        }
    }
    onDrop(event) {
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
        }
        else {
            this.fileOver = false;
            this.fileNotOver = true;
        }
    }
}
CoreDirectivesDragAndDropDirective.decorators = [
    { type: Directive, args: [{
                selector: '[glCoreDirectivesDragAndDrop]'
            },] }
];
CoreDirectivesDragAndDropDirective.propDecorators = {
    fileOver: [{ type: HostBinding, args: ['class.file-over',] }],
    fileNotOver: [{ type: HostBinding, args: ['class.file-not-over',] }],
    fileDropped: [{ type: Output }],
    onDragOver: [{ type: HostListener, args: ['dragover', ['$event'],] }],
    onDragLeader: [{ type: HostListener, args: ['dragleave', ['$event'],] }],
    onDrop: [{ type: HostListener, args: ['drop', ['$event'],] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS1kaXJlY3RpdmVzLWRyYWctYW5kLWRyb3AuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZ2wtbmctZnJvbnRlbmQvc3JjL2xpYi9jb3JlL2RpcmVjdGl2ZXMvZHJhZy1hbmQtZHJvcC9jb3JlLWRpcmVjdGl2ZXMtZHJhZy1hbmQtZHJvcC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLM0YsTUFBTSxPQUFPLGtDQUFrQztJQUgvQztRQU1ZLGdCQUFXLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7SUF1RGhFLENBQUM7SUFyRFMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLO1FBQzdCLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFcUMsVUFBVSxDQUFDLEtBQWdCO1FBQy9ELEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFFeEIsTUFBTSxRQUFRLEdBQUcsa0NBQWtDLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXRFLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDYixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUNyQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztTQUMxQjthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDdEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7U0FDekI7SUFDSCxDQUFDO0lBQzZDLFlBQVksQ0FBQyxLQUFnQjtRQUN6RSxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRXhCLE1BQU0sUUFBUSxHQUFHLGtDQUFrQyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV0RSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2IsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDdEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7U0FDekI7YUFBTTtZQUNMLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQztJQUN3QyxNQUFNLENBQUMsS0FBZ0I7UUFDOUQsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUV4QixNQUFNLFFBQVEsR0FBRyxrQ0FBa0MsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFdEUsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNiLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1lBQ3hCLE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO1lBRXZDLElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ3BCLHFCQUFxQjtnQkFDckIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxLQUFLLENBQUMsTUFBTSxTQUFTLENBQUMsQ0FBQzthQUNuRDtTQUNGO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUN0QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztTQUN6QjtJQUNILENBQUM7OztZQTVERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLCtCQUErQjthQUMxQzs7O3VCQUVFLFdBQVcsU0FBQyxpQkFBaUI7MEJBQzdCLFdBQVcsU0FBQyxxQkFBcUI7MEJBQ2pDLE1BQU07eUJBTU4sWUFBWSxTQUFDLFVBQVUsRUFBRSxDQUFDLFFBQVEsQ0FBQzsyQkFjbkMsWUFBWSxTQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQztxQkFjcEMsWUFBWSxTQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBIb3N0QmluZGluZywgSG9zdExpc3RlbmVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2dsQ29yZURpcmVjdGl2ZXNEcmFnQW5kRHJvcF0nXG59KVxuZXhwb3J0IGNsYXNzIENvcmVEaXJlY3RpdmVzRHJhZ0FuZERyb3BEaXJlY3RpdmUge1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmZpbGUtb3ZlcicpIGZpbGVPdmVyOiBib29sZWFuO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmZpbGUtbm90LW92ZXInKSBmaWxlTm90T3ZlcjogYm9vbGVhbjtcbiAgQE91dHB1dCgpIGZpbGVEcm9wcGVkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBwcml2YXRlIHN0YXRpYyBpc1JlYWRPbmx5KGV2ZW50KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3JlYWRvbmx5Jyk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkcmFnb3ZlcicsIFsnJGV2ZW50J10pIG9uRHJhZ092ZXIoZXZlbnQ6IERyYWdFdmVudCk6IHZvaWQge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICBjb25zdCByZWFkb25seSA9IENvcmVEaXJlY3RpdmVzRHJhZ0FuZERyb3BEaXJlY3RpdmUuaXNSZWFkT25seShldmVudCk7XG5cbiAgICBpZiAoIXJlYWRvbmx5KSB7XG4gICAgICB0aGlzLmZpbGVPdmVyID0gdHJ1ZTtcbiAgICAgIHRoaXMuZmlsZU5vdE92ZXIgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5maWxlT3ZlciA9IGZhbHNlO1xuICAgICAgdGhpcy5maWxlTm90T3ZlciA9IHRydWU7XG4gICAgfVxuICB9XG4gIEBIb3N0TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIFsnJGV2ZW50J10pIHB1YmxpYyBvbkRyYWdMZWFkZXIoZXZlbnQ6IERyYWdFdmVudCk6IHZvaWQge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICBjb25zdCByZWFkb25seSA9IENvcmVEaXJlY3RpdmVzRHJhZ0FuZERyb3BEaXJlY3RpdmUuaXNSZWFkT25seShldmVudCk7XG5cbiAgICBpZiAoIXJlYWRvbmx5KSB7XG4gICAgICB0aGlzLmZpbGVPdmVyID0gZmFsc2U7XG4gICAgICB0aGlzLmZpbGVOb3RPdmVyID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5maWxlT3ZlciA9IGZhbHNlO1xuICAgICAgdGhpcy5maWxlTm90T3ZlciA9IHRydWU7XG4gICAgfVxuICB9XG4gIEBIb3N0TGlzdGVuZXIoJ2Ryb3AnLCBbJyRldmVudCddKSBwdWJsaWMgb25Ecm9wKGV2ZW50OiBEcmFnRXZlbnQpOiB2b2lkIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgY29uc3QgcmVhZG9ubHkgPSBDb3JlRGlyZWN0aXZlc0RyYWdBbmREcm9wRGlyZWN0aXZlLmlzUmVhZE9ubHkoZXZlbnQpO1xuXG4gICAgaWYgKCFyZWFkb25seSkge1xuICAgICAgdGhpcy5maWxlT3ZlciA9IGZhbHNlO1xuICAgICAgdGhpcy5maWxlTm90T3ZlciA9IHRydWU7XG4gICAgICBjb25zdCBmaWxlcyA9IGV2ZW50LmRhdGFUcmFuc2Zlci5maWxlcztcblxuICAgICAgaWYgKGZpbGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgLy8gRG8gc29tZSBzdHVmZiBoZXJlXG4gICAgICAgIHRoaXMuZmlsZURyb3BwZWQuZW1pdChmaWxlcyk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBZb3UgZHJvcHBlZCAke2ZpbGVzLmxlbmd0aH0gZmlsZXMuYCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZmlsZU92ZXIgPSBmYWxzZTtcbiAgICAgIHRoaXMuZmlsZU5vdE92ZXIgPSB0cnVlO1xuICAgIH1cbiAgfVxufVxuIl19