import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-icon',
  templateUrl: './svg.component.html',
  styleUrls: []
})
export class SvgComponent implements OnInit {
  @Input() name: string;
  @Input() title: string;

  public useHref;

  ngOnInit() {
    this.useHref = '#' + this.name;
  }
}
