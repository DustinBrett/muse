import { Component, Input } from '@angular/core';

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
}