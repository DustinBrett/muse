import { Component, Inject, Input } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { APPS } from '@core/config';
import { SessionService } from '@core/app/services/session/session.service';

@Component({
  selector: 'app-desktop-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class DesktopIconComponent {
  @Input() icon: string;
  @Input() title: string;

  public body: HTMLElement;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private sessionService: SessionService
  ) {
    this.body = this.document.body;
  }

  onClick(): void {
    this.sessionService.session.selected.icon = this.title;
  }

  onDblClick(): void {
    if (!this.isActive()) {
      const window = APPS.filter(w => w.title === this.title);

      if (window.length !== 0) {
        this.sessionService.session.active.windows.push(window[0]);
      }
    }
  }

  isActive(): boolean {
    return this.sessionService.session.active.windows.filter(w => w.title === this.title).length > 0;
  }

  isSelected(): boolean {
    return this.sessionService.session.selected.icon === this.title;
  }
}
