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
  @Input() description: string;
  @Input() selected: string;

  public body: HTMLBodyElement;

  constructor(
    @Inject(DOCUMENT) private readonly document: Document,
    private readonly appService: AppService
  ) {
    this.body = this.document.body as HTMLBodyElement;
  }

  onClick(): void {
    this.appService.select.icon(this.id);
  }

  onDblClick(): void {
    this.appService.activate(this.id);
  }
}
