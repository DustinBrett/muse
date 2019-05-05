import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-taskbar-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class TaskbarIconComponent implements OnInit {
  @Input() effects: string[];
  @Input() name: string;
  @Input() title: string[];

  private expandable: boolean;
  public expanded: boolean;

  ngOnInit() {
    this.expandable = this.effects.includes('expand');
  }

  onClick(): void { }

  onMouseOver($event) {
    if (this.expandable) {
      this.expanded = $event.type === 'mouseenter';
    }
  }
}
