import { Component, Input } from '@angular/core';
import { SessionService } from '@core/app/services/session/session.service';

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
    private sessionService: SessionService
  ) { }

  onClick(): void {
    this.sessionService.selectWindow(this.id);
  }
}
