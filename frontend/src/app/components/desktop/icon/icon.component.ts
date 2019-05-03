import { Component, Inject, Input } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ACTIVE_WINDOWS, WINDOWS } from '@core/config';

@Component({
  selector: 'app-desktop-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class DesktopIconComponent {
  @Input() image: string;
  @Input() text: string;

  public body;
  public selected = false;

  constructor(
    @Inject(DOCUMENT) private document: Document
  ) {
    this.body = this.document.body;
  }

  click() {
    this.selected = !this.selected;
  }

  dblClick() {
    const window = WINDOWS.filter(w => w.text === this.text);

    if (window.length !== 0) {
      ACTIVE_WINDOWS.push(window[0]);
    }
  }
}
