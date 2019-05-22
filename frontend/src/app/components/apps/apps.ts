import { Type } from '@angular/core';

import { BlogComponent } from './blog/blog.component';

export interface App {
  id: number;
  icon: string;
  title: string;
  description: string;
  // tslint:disable-next-line: no-any
  component: Type<any>;
  active: boolean;
  selected: {
    icon: boolean;
    window: boolean;
    index: number;
  };
  minimized: boolean;
  position?: {
    top: number;
    left: number;
  };
  dimensions?: {
    width: number;
    height: number;
  };
}

export const APPS = [
  {
    id: 1,
    icon: 'blog',
    title: 'Blog',
    description: 'About my life.',
    component: BlogComponent,
    active: false,
    selected: {
      icon: false,
      window: false,
      index: 0
    },
    minimized: false
  }
];
