export const TIMEZONE_OFFSET = -7; // PST

export const SESSION = { // Eventually on back-end

  desktop: {
    selected: undefined,
    icons: [
      {
        image: 'assets/img/travel.svg',
        text: 'Travel'
      },
      {
        image: 'assets/img/blog.svg',
        text: 'Blog'
      }
    ]
  },

  windows: {
    selected: undefined,
    active: [],
    available: [
      {
        top: 50,
        left: 100,
        width: 300,
        height: 200,
        image: 'assets/img/travel.svg',
        text: 'Travel',
        content: 'My Travel Stories'
      },
      {
        top: 200,
        left: 200,
        width: 200,
        height: 200,
        image: 'assets/img/blog.svg',
        text: 'Blog',
        content: 'My Blog Posts'
      }
    ]
  },

  taskbar: {
    icons: [
      {
        effects: ['hover'],
        image: 'start'
      },
      {
        effects: ['stretch'],
        image: 'task-view'
      }
    ]
  }

};
