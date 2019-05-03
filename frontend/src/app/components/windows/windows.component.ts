import { Component } from '@angular/core';
import { SESSION } from '@core/config';

@Component({
  selector: 'app-windows',
  templateUrl: './windows.component.html',
  styleUrls: []
})
export class WindowsComponent {
  public windows = SESSION.windows.active;
}
