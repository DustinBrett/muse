import { Component } from '@angular/core';
import { App, APPS, SESSION } from '@core/config';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.scss']
})
export class DesktopComponent {
  private TOP_MARGIN = 5;
  private TASKBAR_HEIGHT = 30;
  private ICON_SIZE = 98;

  private ICON_PADDING = (this.TOP_MARGIN + this.TASKBAR_HEIGHT);

  public gridTemplateRows: string;
  public icons: Array<App> = APPS;

  constructor() {
    this.setGridTemplateRows();
  }

  onClick(event: Event, desktop: HTMLElement): void {
    if (event.target === desktop) {
      SESSION.selected.icon = undefined;
    }
  }

  onResize(): void {
    this.setGridTemplateRows();
  }

  getIconsPerColumn(innerHeight: number): number {
    return Math.floor((innerHeight - this.ICON_PADDING) / this.ICON_SIZE);
  }

  setGridTemplateRows(): void {
    this.gridTemplateRows =
      new Array(this.getIconsPerColumn(window.innerHeight))
        .fill(`${this.ICON_SIZE}px`)
        .join(' ')
    ;
  }
}
