import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @Input() id: string;
  @Input() icon: string;
  @Input() alt: string;
  @Input() text: string;

  constructor() { }

  ngOnInit() {
  }

}
