import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[glAutoFocus]'
})
export class CoreDirectivesAutofocusDirective implements AfterViewInit {

  @Input() focusInnerClass: string = null;

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit(): void {
    if (this.focusInnerClass != null) {
      this.elementRef.nativeElement.querySelector(this.focusInnerClass).focus();
    } else {
      this.elementRef.nativeElement.focus();
    }
  }
}
