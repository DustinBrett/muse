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
  public hover: boolean;
  public iconName: string;

  ngOnInit(): void {
    this.expand = this.effects.includes('expand');
    this.hover = this.effects.includes('hover');
    this.iconName = this.name;
  }

  onMouseOver($event): void {
    if (this.expand) {
      this.iconName = this.name + ($event.type === 'mouseenter' ? '-expanded' : '');
    }
  }
}
