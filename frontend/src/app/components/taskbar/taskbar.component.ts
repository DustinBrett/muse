import { Component, OnInit } from '@angular/core';
import { App, SessionService } from '@core/app/services/session/session.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-taskbar',
  templateUrl: './taskbar.component.html',
  styleUrls: ['./taskbar.component.scss']
})
export class TaskbarComponent implements OnInit {
  public entries: Observable<App[]>;
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

  constructor(
    private sessionService: SessionService
  ) { }

  ngOnInit() {
    this.entries = this.sessionService.apps.pipe(
      map(apps => apps.filter(app => app.active))
    );
  }
}
