import { Component, Input } from '@angular/core';
import { SessionService } from '@core/app/services/session/session.service';

@Component({
  selector: 'app-taskbar-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class TaskbarEntryComponent {
  @Input() icon: string;
  @Input() title: string[];

  constructor(
    private sessionService: SessionService
  ) { }

  onClick(): void {
    console.log(`${ this.title } entry clicked.`);
  }

  isSelected(): boolean {
    return (
      this.sessionService.session.selected.window &&
      this.sessionService.session.selected.window.title === this.title
    );
  }
}
