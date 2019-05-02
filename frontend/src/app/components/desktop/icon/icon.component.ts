import { Component, Input } from '@angular/core';
import { ACTIVE_WINDOWS, WINDOWS } from '@core/config';

@Component({
  selector: 'app-desktop-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class DesktopIconComponent {
  @Input() image: string;
  @Input() text: string;

  public selected = false;

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
