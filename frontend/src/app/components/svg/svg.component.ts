import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-icon',
  templateUrl: './svg.component.html',
  styleUrls: []
})
export class SvgComponent {
  @Input() name: string;
  @Input() title: string;

  get xlink() {
    return `#${ this.name }`;
  }
}
