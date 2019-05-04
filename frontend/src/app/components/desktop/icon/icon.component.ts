import { Component, Inject, Input } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { APPS, SESSION } from '@core/config';

@Component({
  selector: 'app-desktop-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class DesktopIconComponent {
  @Input() icon: string;
  @Input() title: string;

  public body;
  public session = SESSION;

  constructor(
    @Inject(DOCUMENT) private document: Document
  ) {
    this.body = this.document.body;
  }

  onClick() {
    this.session.selected.icon = this.title;
  }

  onDblClick() {
    if (!this.isRunning()) {
      const window = APPS.filter(w => w.title === this.title);

      if (window.length !== 0) {
        this.session.active.windows.push(window[0]);
      }
    }
  }

  isRunning() {
    return this.session.active.windows.filter(w => w.title === this.title).length > 0;
  }
}
