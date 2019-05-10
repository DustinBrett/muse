export interface App {
  id: number;
  icon: string;
  label: string;
  description: string;
  component: string;
  active: boolean;
  selected: {
    icon: boolean;
    window: boolean;
    foreground: boolean;
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
    label: 'Blog',
    description: 'About my life',
    component: 'app-blog',
    active: false,
    selected: {
      icon: false,
      window: false,
      foreground: false
    }
  },
  {
    id: 2,
    icon: 'travel',
    label: 'Travel',
    description: 'About my travels',
    component: 'app-travel',
    active: false,
    selected: {
      icon: false,
      window: false,
      foreground: false
    }
  }
];
