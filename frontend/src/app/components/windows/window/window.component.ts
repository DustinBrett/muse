import { Component, Inject, Input } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { AppService } from '@core/app/services/app/app.service';

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss']
})
export class WindowComponent {
  @Input() top: number;
  @Input() left: number;
  @Input() width: number;
  @Input() height: number;
  @Input() id: number;
  @Input() icon: string;
  @Input() title: string;
  @Input() component: string;
  @Input() selected: boolean;

  public body: HTMLBodyElement;

  public titleBarHeight = 30;

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
}
