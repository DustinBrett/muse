import { Component, Inject, Input } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SessionService } from '@core/app/services/session/session.service';

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

  public body: HTMLElement;
  public heightWithTitleBar = this.height + 30;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private sessionService: SessionService
  ) {
    this.body = this.document.body;
  }

  onMouseDown() {
    this.sessionService.selectWindow(this.id);
  }

  close(): void {
    this.sessionService.closeWindow(this.id);
  }
}
