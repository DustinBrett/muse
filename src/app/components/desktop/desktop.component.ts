import { Component } from '@angular/core';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.scss']
})
export class DesktopComponent {
  public icons = [
    {
      image: 'vegvisir',
      text: 'Vegvisir'
    },
    {
      image: 'blog',
      text: 'Blog'
    }
  ];
}
