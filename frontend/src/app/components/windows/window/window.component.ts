import { Component, Inject, Input } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SessionService } from '@core/app/services/session/session.service';

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss']
})
export class WindowComponent {
  @Input() top: number;
  @Input() left: number;
  @Input() width: number;
  @Input() height: number;
  @Input() icon: string;
  @Input() title: string;
  @Input() component: string;

  public body: HTMLElement;
  public titleBarHeight = 30;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private sessionService: SessionService
  ) {
    sessionService.session.selected.window = this;
    this.body = this.document.body;
  }

  close(): void {
    const windowIndex = this.sessionService.session.active.windows.findIndex(
      w => w.title === this.title
    );

    if (windowIndex !== -1) {
      this.sessionService.session.active.windows.splice(windowIndex, 1);
    }
  }

  minimize(): void {
    console.log('Minimize clicked.');
  }

  maximize(): void {
    console.log('Maximize clicked.');
  }

  onMouseDown(window: WindowComponent) {
    this.sessionService.session.selected.window = window;
  }

  isSelected(window: WindowComponent) {
    return this.sessionService.session.selected.window === window;
  }
}
