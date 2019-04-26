import { Component } from '@angular/core';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.scss']
})
export class DesktopComponent {
  public icons = [
    {
      image: '../../assets/img/expose.png',
      text: 'Expose'
    },
    {
      image: '../../assets/img/blog.png',
      text: 'Blog'
    }
  ];

  constructor() { }
}
