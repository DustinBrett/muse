import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import * as data from '../../../../../../backend/db/dustin039stravels.WordPress.2019-04-20.json';
import { Post, PostData } from './entry/blog.data';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  private readonly maxPosts = 3;
  private readonly POSTS: Post[] = [];
  private readonly posts: BehaviorSubject<Post[]> = new BehaviorSubject(this.POSTS);

  public readonly posts$: Observable<Post[]> = this.posts.asObservable();

  constructor() {
    this.posts.next(this.importPostData());
  }

  importPostData(): Post[] {
    return (data as PostData).rss.channel.item
      .filter(entry =>
        entry.post_type.__cdata === 'post'
        && entry.status.__cdata === 'publish'
      )
      .map(entry => ({
        content: entry.encoded.filter(x => x.__prefix === 'content')[0].__cdata,
        ...entry
      }))
      .slice(0, this.maxPosts)
    ;
  }
}
