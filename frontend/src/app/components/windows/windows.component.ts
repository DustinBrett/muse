import { Component } from '@angular/core';
import { ACTIVE_WINDOWS } from '@core/config';

@Component({
  selector: 'app-windows',
  templateUrl: './windows.component.html',
  styleUrls: ['./windows.component.scss']
})
export class WindowsComponent {
  public windows = ACTIVE_WINDOWS;
}
