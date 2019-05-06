import { Component, OnInit } from '@angular/core';
import { SessionService } from '@core/app/services/session/session.service';

@Component({
  selector: 'app-taskbar',
  templateUrl: './taskbar.component.html',
  styleUrls: ['./taskbar.component.scss']
})
export class TaskbarComponent implements OnInit {
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
  public entries;

  constructor(
    private sessionService: SessionService
  ) { }

  ngOnInit() {
    this.entries = this.sessionService.session.active.windows;
  }
}
