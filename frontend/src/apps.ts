export interface App {
  id: number;
  icon: string;
  title: string;
  component: string;
  active: boolean;
  selected: {
    icon: boolean;
    window: boolean;
  };
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
    component: 'app-blog',
    active: false,
    selected: {
      icon: false,
      window: false
    }
  },
  {
    id: 2,
    icon: 'travel',
    title: 'Travel',
    component: 'app-travel',
    active: false,
    selected: {
      icon: false,
      window: false
    }
  }
];
