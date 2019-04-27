import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-desktop-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class DesktopIconComponent {
  @Input() image: string;
  @Input() alt: string;
  @Input() text: string;
}
