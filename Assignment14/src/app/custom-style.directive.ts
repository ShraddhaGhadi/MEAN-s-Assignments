import { Directive ,ElementRef,Host,HostListener} from '@angular/core';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective {

  constructor(private obj: ElementRef) {
    this.obj.nativeElement.style.background = 'yellow';
    this.obj.nativeElement.style.fontWeight = 'bold';
  }


}
