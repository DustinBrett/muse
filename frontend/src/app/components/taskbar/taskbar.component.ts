import { Component } from '@angular/core';

@Component({
  selector: 'app-taskbar',
  templateUrl: './taskbar.component.html',
  styleUrls: ['./taskbar.component.scss']
})
export class TaskbarComponent {
  public icons = [
    {
      effects: ['hover'],
      name: 'start',
      title: 'Start'
    },
    {
      effects: ['expand'],
      name: 'task-view',
      title: 'Task View'
    }
  ];
}
