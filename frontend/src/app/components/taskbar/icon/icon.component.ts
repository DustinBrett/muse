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

  private expand: boolean;
  public expanded: boolean;
  public hover: boolean;

  ngOnInit() {
    this.expand = this.effects.includes('expand');
    this.hover = this.effects.includes('hover');
  }

  onClick(): void {
    console.log(`${ this.title } icon clicked.`);
  }

  onMouseOver($event) {
    if (this.expand) {
      this.expanded = $event.type === 'mouseenter';
    }
  }
}
