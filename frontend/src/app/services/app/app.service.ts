import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { App, APPS } from '@core/app/components/apps/apps';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private readonly apps: BehaviorSubject<App[]> = new BehaviorSubject(APPS);

  public readonly apps$: Observable<App[]> = this.apps.asObservable();
  public readonly active$: Observable<App[]> = this.apps$.pipe(
    map(apps => apps.filter(app => app.active))
  );

  public readonly select = {
    reset: () => {
      this.update(app => app.selected.icon = app.selected.window = false);
    },
    icon: (id: number) => {
      this.update(app => app.selected.icon = app.id === id);
    },
    window: (id: number) => {
      this.update(app => {
        const found = (app.id === id);

        app.selected.window = found;

        if (found) {
          app.selected.index = this.updateIndex(id);
          app.minimized = false;
        }
      });
    }
  };

  private update(operation: (app: App) => void): void {
    APPS.forEach(operation);
    this.apps.next(APPS);
  }

  activate(id: number): void {
    this.update(app => {
      if (app.id === id) {
        app.active = true;
        this.select.window(id);
      }
    });
  }

  deactivate(id: number): void {
    this.update(
      app => app.active = app.id === id
      ? false
      : app.active
    );
  }

  minimize(id: number): void {
    this.update(app => {
      if (app.id === id) {
        app.minimized = true;
        app.selected.window = false;
      }
    });
  }

  updateIndex(id: number): number {
    this.update(app => {
      if (app.id !== id && app.selected.index > 0) {
        app.selected.index = app.selected.index - 1;
      }
    });

    return APPS.length;
  }
}
