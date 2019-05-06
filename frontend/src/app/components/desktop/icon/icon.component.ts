import { Component, Inject, Input } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SessionService } from '@core/app/services/session/session.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-desktop-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class DesktopIconComponent {
  @Input() id: number;
  @Input() icon: string;
  @Input() title: string;
  @Input() selected: string;

  public body: HTMLElement;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private sessionService: SessionService
  ) {
    this.body = this.document.body;
  }

  onClick(): void {
    this.sessionService.selectIcon(this.id);
  }

  onDblClick(): void {
    this.sessionService.activateApp(this.id);
  }
}
