import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-taskbar-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class TaskbarIconComponent {
  @Input() effects: string[];
  @Input() image: string;
  @Input() alt: string;
}
