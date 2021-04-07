import { ElementRef } from '@angular/core';
import { CoreDirectivesAutofocusDirective } from './core-directives-autofocus.directive';

describe('CoreDirectivesAutofocusDirective', () => {
  it('should create an instance', () => {
    const elementRef: ElementRef<any> = new ElementRef(HTMLDivElement);
    const directive = new CoreDirectivesAutofocusDirective(elementRef);
    expect(directive).toBeTruthy();
  });
});
