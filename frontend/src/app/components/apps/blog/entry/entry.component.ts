import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blog-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class BlogEntryComponent {
  @Input() title: string;
  @Input() link: string;
  @Input() pubDate: string;
  @Input() content: string;

  formattedDate(date: string): string {
    const dateObj = new Date(date);

    return dateObj.toDateString();
  }
}
