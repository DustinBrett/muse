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
      image: '../../assets/img/start.svg',
      alt: 'Start'
    },
    {
      effects: ['stretch'],
      image: '../../assets/img/task-view.svg',
      alt: 'Task View'
    }
  ];
}
