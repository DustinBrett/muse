import { Component, Input } from '@angular/core';
import { ACTIVE_WINDOWS, WINDOWS } from '@core/config';

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss']
})
export class WindowComponent {
  @Input() top: string;
  @Input() left: string;
  @Input() width: string;
  @Input() height: string;
  @Input() image: string;
  @Input() text: string;
  @Input() content: string;

  close() {
    const windowIndex = ACTIVE_WINDOWS.findIndex(w => w.text === this.text);

    if (windowIndex !== -1) {
      ACTIVE_WINDOWS.splice(windowIndex, 1);
    }
  }
}
