import { Component } from '@angular/core';
import { TASKBAR_ICONS } from '@core/config';

@Component({
  selector: 'app-taskbar',
  templateUrl: './taskbar.component.html',
  styleUrls: ['./taskbar.component.scss']
})
export class TaskbarComponent {
  public icons = TASKBAR_ICONS;
}
