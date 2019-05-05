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

  constructor(
    @Inject(DOCUMENT) private document: Document
  ) {
    this.body = this.document.body;
  }

  onClick(): void {
    SESSION.selected.icon = this.title;
  }

  onDblClick(): void {
    if (!this.isActive()) {
      const window = APPS.filter(w => w.title === this.title);

      if (window.length !== 0) {
        SESSION.active.windows.push(window[0]);
      }
    }
  }

  isActive(): boolean {
    return SESSION.active.windows.filter(w => w.title === this.title).length > 0;
  }

  isSelected(): boolean {
    return SESSION.selected.icon === this.title;
  }
}
