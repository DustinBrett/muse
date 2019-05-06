import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  public session: {
    active: {
      windows: any[]
    },
    selected: {
      icon: any,
      window: any
    }
  };

  constructor() {
    this.session = {
      active: {
        windows: []
      },
      selected: {
        icon: undefined,
        window: undefined
      }
    }
  }
}
