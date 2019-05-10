import { Component } from '@angular/core';
import { AppService } from '@core/app/services/app/app.service';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

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

  public gridTemplateRows: SafeStyle;
  public apps = this.appService.apps;

  constructor(
    private appService: AppService,
    private sanitizer: DomSanitizer
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
    this.gridTemplateRows = this.sanitizer.bypassSecurityTrustStyle(
      `repeat(${ this.getIconsPerColumn(window.innerHeight) }, ${ this.iconSize }px)`
    );
  }
}
