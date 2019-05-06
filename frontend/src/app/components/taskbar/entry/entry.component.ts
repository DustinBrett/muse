import { Component, Input } from '@angular/core';
import { SESSION } from '@core/config';

@Component({
  selector: 'app-taskbar-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class TaskbarEntryComponent {
  @Input() icon: string;
  @Input() title: string[];

  onClick(): void {
    console.log(`${ this.title } entry clicked.`);
  }

  isSelected(): boolean {
    return (
      SESSION.selected.window &&
      SESSION.selected.window.title === this.title
    );
  }
}
