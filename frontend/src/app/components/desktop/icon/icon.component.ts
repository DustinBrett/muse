import { Component, Inject, Input } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SESSION } from '@core/config';

@Component({
  selector: 'app-desktop-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class DesktopIconComponent {
  @Input() image: string;
  @Input() text: string;

  public body;
  public session = SESSION;

  constructor(
    @Inject(DOCUMENT) private document: Document
  ) {
    this.body = this.document.body;
  }

  onClick() {
    this.session.desktop.selected = this.text;
  }

  onDblClick() {
    const window = this.session.windows.available.filter(w => w.text === this.text);

    if (window.length !== 0) {
      this.session.windows.active.push(window[0]);
    }
  }
}
