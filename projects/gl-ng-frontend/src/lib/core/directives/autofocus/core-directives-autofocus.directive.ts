import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[glAutoFocus]'
})
export class CoreDirectivesAutofocusDirective implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.elementRef.nativeElement.focus();
  }
}
