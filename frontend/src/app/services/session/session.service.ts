import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

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
}

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private dataStore: App[] = [
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

  private APPS: BehaviorSubject<App[]> = new BehaviorSubject(this.dataStore);
  public apps: Observable<App[]> = this.APPS.asObservable();

  private updateDataStore() {
    this.APPS.next(this.dataStore);
  }

  activateApp(id: number) {
    this.dataStore.forEach(app => {
      if (app.id === id) {
        app.active = true;
        this.selectWindow(id);
      }
    });

    this.updateDataStore();
  }

  selectIcon(id: number) {
    this.dataStore.forEach(app => app.selected.icon = app.id === id);
    this.updateDataStore();
  }

  selectWindow(id: number) {
    this.dataStore.forEach(app => app.selected.window = app.id === id);
    this.updateDataStore();
  }

  closeWindow(id: number) {
    this.dataStore.forEach(app => app.active = app.id === id ? false : app.active);
    this.updateDataStore();
  }

  resetSelection() {
    this.dataStore.forEach(app => {
      app.selected.icon = false;
      app.selected.window = false;
    });
    this.updateDataStore();
  }
}
