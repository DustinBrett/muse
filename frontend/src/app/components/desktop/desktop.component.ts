import { Component } from '@angular/core';
import { DESKTOP_ICONS } from '@core/config';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.scss']
})
export class DesktopComponent {
  public icons = DESKTOP_ICONS;
}
