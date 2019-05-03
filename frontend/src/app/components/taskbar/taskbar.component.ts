import { Component } from '@angular/core';
import { SESSION } from '@core/config';

@Component({
  selector: 'app-taskbar',
  templateUrl: './taskbar.component.html',
  styleUrls: ['./taskbar.component.scss']
})
export class TaskbarComponent {
  public icons = SESSION.taskbar.icons;
}
