import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appWindowComponent]'
})
export class WindowComponentDirective {
  constructor(
    public viewContainerRef: ViewContainerRef
  ) { }
}
