import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-taskbar-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class TaskbarIconComponent {
  @Input() effects: string[];
  @Input() name: string;
  @Input() title: string[];

  onClick(): void { }
}
