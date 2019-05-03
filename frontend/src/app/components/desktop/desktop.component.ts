import { Component } from '@angular/core';
import { SESSION } from '@core/config';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.scss']
})
export class DesktopComponent {
  private TOP_MARGIN = 5;
  private ICON_SIZE = 98;
  private TASKBAR_HEIGHT = 30;

  public gridTemplateRows: string;
  public icons = SESSION.desktop.icons;

  constructor() {
    this.setGridTemplateRows();
  }

  onClick(event: Event, desktop: HTMLElement) {
    if (event.target === desktop) {
      SESSION.desktop.selected = undefined;
    }
  }

  onResize(): void {
    this.setGridTemplateRows();
  }

  getIconsPerColumn(innerHeight: number): number {
    return Math.floor((innerHeight - (this.TOP_MARGIN + this.TASKBAR_HEIGHT)) / this.ICON_SIZE);
  }

  getGridTemplateRows(rowCount: number, returnString = ''): string {
    return rowCount === 0
      ? returnString
      : this.getGridTemplateRows(rowCount - 1, returnString + `${this.ICON_SIZE}px `)
    ;
  }

  setGridTemplateRows(): void {
    this.gridTemplateRows = this.getGridTemplateRows(this.getIconsPerColumn(window.innerHeight));
  }
}
