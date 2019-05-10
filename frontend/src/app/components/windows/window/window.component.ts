import { Component, Inject, Input, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { AppService } from '@core/app/services/app/app.service';

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss']
})
export class WindowComponent implements OnInit {
  @Input() top: number;
  @Input() left: number;
  @Input() width: number;
  @Input() height: number;
  @Input() id: number;
  @Input() icon: string;
  @Input() title: string;
  @Input() component: string;
  @Input() selected: boolean;
  @Input() foreground: boolean;

  private titleBarHeight = 30;
  private titleBarIconWidth = 29;
  private titleBarButtonWidth = 114;
  private titleBarTextButtonPadding = 5;
  private titleBarTextWidthPadding = this.titleBarIconWidth + this.titleBarButtonWidth + this.titleBarTextButtonPadding;

  public body: HTMLBodyElement;

  public titleBarTextWidth: string;
  public componentHeight: string;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private appService: AppService
  ) {
    this.body = this.document.body as HTMLBodyElement;
  }

  onMouseDown(): void {
    this.appService.select(this.id, 'window');
  }

  close(): void {
    this.appService.deactivate(this.id);
  }

  onResize(event) {
    this.updateDimensions(event.host.offsetWidth, event.host.offsetHeight);
  }

  ngOnInit() {
    this.updateDimensions();
  }

  updateDimensions(width = this.width, height = this.height) {
    this.titleBarTextWidth = `${ width - this.titleBarTextWidthPadding }px`;
    this.componentHeight = `${ height + this.titleBarHeight }px`;
  }
}
