import { Component } from '@angular/core';
import { AppService } from '@core/app/services/app/app.service';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.scss']
})
export class DesktopComponent {
  public readonly apps$ = this.appService.apps$;

  private readonly topMargin = 5;
  private readonly taskbarHeight = 30;
  private readonly iconSize = 98;

  private readonly iconPadding = this.topMargin + this.taskbarHeight;

  public gridTemplateRows: string;

  constructor(
    private readonly appService: AppService
  ) {
    this.setGridTemplateRows();
  }

  onClick(event: Event, desktop: HTMLDivElement): void {
    if (event.target === desktop) {
      this.appService.select.reset();
    }
  }

  getIconsPerColumn(innerHeight: number): number {
    return Math.floor((innerHeight - this.iconPadding) / this.iconSize);
  }

  setGridTemplateRows(): void {
    this.gridTemplateRows =
      `repeat(${ this.getIconsPerColumn(window.innerHeight) }, ${ this.iconSize }px)`;
  }
}
