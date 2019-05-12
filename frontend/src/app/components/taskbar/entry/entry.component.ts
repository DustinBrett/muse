import { Component, Input } from '@angular/core';
import { AppService } from '@core/app/services/app/app.service';

@Component({
  selector: 'app-taskbar-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class TaskbarEntryComponent {
  @Input() id: number;
  @Input() icon: string;
  @Input() title: string;
  @Input() selected: boolean;

  constructor(
    private appService: AppService
  ) { }

  onClick(): void {
    if (this.selected) {
      this.appService.minimize(this.id);
    } else {
      this.appService.select.window(this.id);
    }
  }
}
