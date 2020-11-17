import { CoreDirectivesAutofocusDirective } from './core-directives-autofocus.directive';
import { ElementRef } from "@angular/core";

describe('CoreDirectivesAutofocusDirective', () => {
  it('should create an instance', () => {
    const elementRef: ElementRef<any> = new ElementRef(HTMLDivElement);
    const directive = new CoreDirectivesAutofocusDirective(elementRef);
    expect(directive).toBeTruthy();
  });
});
