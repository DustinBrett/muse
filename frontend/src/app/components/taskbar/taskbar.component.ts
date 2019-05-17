import { Component, OnInit } from '@angular/core';
import { AppService } from '@core/app/services/app/app.service';
import { animate, style, transition, trigger } from '@angular/animations';

const slideSpeed = '150ms linear';

@Component({
  selector: 'app-taskbar',
  templateUrl: './taskbar.component.html',
  styleUrls: ['./taskbar.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({
          'transform-origin': 'left',
          transform: 'scaleX(0)'
        }),
        animate(slideSpeed, style({ transform: 'scaleX(1)' }))
      ]),
      transition(':leave', [
        style({ 'transform-origin': 'left' }),
        animate(slideSpeed, style({ transform: 'scaleX(0)' }))
      ])
    ]
  )]
})
export class TaskbarComponent implements OnInit {
  public readonly apps$ = this.appService.active$;
  public readonly icons = [
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

  private readonly iconWidth = 36;
  private readonly clockWidth = 80;
  private readonly taskBarEntriesPadding = 6;
  private readonly taskBarIconsWidth = this.icons.length * this.iconWidth;

  public taskBarEntriesWidth: string;

  constructor(
    private readonly appService: AppService
  ) { }

  ngOnInit(): void {
    this.setTaskBarEntriesWidth();
  }

  onResize(): void {
    this.setTaskBarEntriesWidth();
  }

  setTaskBarEntriesWidth(): void {
    this.taskBarEntriesWidth =
      `${ window.innerWidth - this.taskBarIconsWidth - this.clockWidth - this.taskBarEntriesPadding }px`
    ;
  }
}
