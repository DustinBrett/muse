import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

interface Post {
  title: string;
  content: string;
}

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  private readonly POSTS: Post[] = [
    {
      title: 'So much news!!!',
      /* tslint:disable:max-line-length */
      content: 'Hey again everyone! It’s been over 4 months since my last post and there have been many changes since then. After my post on my 30th birthday my wife surprised me later that night with news that she was pregnant! Since that news I have managed to organize free medical care for my wife through BC Women’s Hospital and their New Beginnings program which is for people living in BC who don’t have medical coverage. My wife is now 23 weeks pregnant as of today and our baby girl is very healthy so far. As for getting medical coverage for me and my wife, we will hopefully both be on MSP starting in this or next month as I applied 3 weeks ago.'
    }
  ];

  private readonly posts: BehaviorSubject<Post[]> = new BehaviorSubject(this.POSTS);
  public readonly posts$: Observable<Post[]> = this.posts.asObservable();
}
