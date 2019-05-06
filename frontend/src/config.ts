export interface App {
  icon: string;
  title: string;
  component: string;
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
    icon: 'blog',
    title: 'Blog',
    component: 'app-blog'
  },
  {
    icon: 'travel',
    title: 'Travel',
    component: 'app-travel'
  }
];
