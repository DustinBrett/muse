import { Component, Inject, Input } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SESSION } from '@core/config';

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
    @Inject(DOCUMENT) private document: Document
  ) {
    SESSION.selected.window = this;
    this.body = this.document.body;
  }

  close(): void {
    const windowIndex = SESSION.active.windows.findIndex(
      w => w.title === this.title
    );

    if (windowIndex !== -1) {
      SESSION.active.windows.splice(windowIndex, 1);
    }
  }

  onMouseDown(window: HTMLElement) {
    SESSION.selected.window = window;
  }

  isSelected(window: HTMLElement) {
    return SESSION.selected.window === window;
  }
}
