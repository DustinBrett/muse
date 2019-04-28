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
      image: 'start',
      alt: 'Start'
    },
    {
      effects: ['stretch'],
      image: 'task-view',
      alt: 'Task View'
    }
  ];
}
