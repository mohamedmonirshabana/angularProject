import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  // @HostListener('focus')onFocus() {
  //   console.log("on Focus")
  // }
  constructor(private el:ElementRef) { }

  @HostListener('blur')onBlur() {
    let value: string = this.el.nativeElement.value;
    this.el.nativeElement.value = value.toLowerCase();
  }

}
