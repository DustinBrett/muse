import { Component } from '@angular/core';
import { App, SessionService } from '@core/app/services/session/session.service';
import { Observable } from 'rxjs';

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
  public icons: Observable<App[]>;

  constructor(
    private sessionService: SessionService
  ) {
    this.setGridTemplateRows();
    this.icons = this.sessionService.apps;
  }

  onClick(event: Event, desktop: HTMLElement): void {
    if (event.target === desktop) {
      this.sessionService.resetSelection();
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
