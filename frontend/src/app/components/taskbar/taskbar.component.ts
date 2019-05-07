import { Component, DoCheck, ViewChild } from '@angular/core';
import { AppService } from '@core/app/services/app/app.service';

@Component({
  selector: 'app-taskbar',
  templateUrl: './taskbar.component.html',
  styleUrls: ['./taskbar.component.scss']
})
export class TaskbarComponent implements DoCheck {
  @ViewChild('taskBarTray') taskBarTray;

  public apps = this.appService.active;
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

  public taskBarEntriesWidth: string;
  public taskBarIconsWidth = this.icons.length * 36;

  constructor(
    private appService: AppService
  ) { }

  ngDoCheck() {
    this.setTaskBarEntriesWidth();
  }

  onResize() {
    this.setTaskBarEntriesWidth();
  }

  setTaskBarEntriesWidth() {
    this.taskBarEntriesWidth =
      `${ window.innerWidth - this.taskBarIconsWidth - this.taskBarTray.nativeElement.offsetWidth }px`
    ;
  }
}
