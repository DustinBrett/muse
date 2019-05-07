import { Component, Inject, Input } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { AppService } from '@core/app/services/app/app.service';

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
    private appService: AppService
  ) {
    this.body = this.document.body;
  }

  onClick(): void {
    this.appService.select(this.id, 'icon');
  }

  onDblClick(): void {
    this.appService.activate(this.id);
  }
}
