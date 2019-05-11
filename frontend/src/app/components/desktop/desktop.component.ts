import { Component } from '@angular/core';
import { AppService } from '@core/app/services/app/app.service';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.scss']
})
export class DesktopComponent {
  private topMargin = 5;
  private taskbarHeight = 30;
  private iconSize = 98;

  private iconPadding = (this.topMargin + this.taskbarHeight);

  public gridTemplateRows: string;
  public apps = this.appService.apps;

  constructor(
    private appService: AppService
  ) {
    this.setGridTemplateRows();
  }

  onClick(event: Event, desktop: HTMLElement): void {
    if (event.target === desktop) {
      this.appService.select();
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
