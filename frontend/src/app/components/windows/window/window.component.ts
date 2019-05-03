import { Component, Inject, Input } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ACTIVE_WINDOWS } from '@core/config';

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
  @Input() image: string;
  @Input() text: string;
  @Input() content: string;

  public body;
  public titleBarHeight = 30;

  constructor(
    @Inject(DOCUMENT) private document: Document
  ) {
    this.body = this.document.body;
  }

  close() {
    const windowIndex = ACTIVE_WINDOWS.findIndex(w => w.text === this.text);

    if (windowIndex !== -1) {
      ACTIVE_WINDOWS.splice(windowIndex, 1);
    }
  }
}
