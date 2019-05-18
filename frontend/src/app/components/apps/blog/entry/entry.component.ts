import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blog-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class BlogEntryComponent {
  @Input() title: string;
  @Input() content: string;
}
