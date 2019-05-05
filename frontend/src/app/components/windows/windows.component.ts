import { Component } from '@angular/core';
import { App, SESSION } from '@core/config';

@Component({
  selector: 'app-windows',
  templateUrl: './windows.component.html',
  styleUrls: []
})
export class WindowsComponent {
  public windows: Array<App> = SESSION.active.windows;
  public default = {
    position: {
      top: 200,
      left: 200
    },
    dimensions: {
      width: 200,
      height: 200
    }
  };
}
