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
    icon: 'assets/img/blog.svg',
    title: 'Blog',
    component: 'app-blog'
  },
  {
    icon: 'assets/img/travel.svg',
    title: 'Travel',
    component: 'app-travel'
  }
];

export const SESSION = {

  active: {
    windows: []
  },

  selected: {
    icon: undefined,
    window: undefined
  }

};
