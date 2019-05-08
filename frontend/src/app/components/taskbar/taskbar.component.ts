import { Component, OnInit } from '@angular/core';
import { AppService } from '@core/app/services/app/app.service';

@Component({
  selector: 'app-taskbar',
  templateUrl: './taskbar.component.html',
  styleUrls: ['./taskbar.component.scss']
})
export class TaskbarComponent implements OnInit {
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

  private iconWidth = 36;
  private clockWidth = 80;
  private taskBarIconsWidth = this.icons.length * this.iconWidth;

  public taskBarEntriesWidth: string;

  constructor(
    private appService: AppService
  ) { }

  ngOnInit() {
    this.setTaskBarEntriesWidth();
  }

  onResize() {
    this.setTaskBarEntriesWidth();
  }

  setTaskBarEntriesWidth() {
    this.taskBarEntriesWidth =
      `${ window.innerWidth - this.taskBarIconsWidth - this.clockWidth }px`
    ;
  }
}
