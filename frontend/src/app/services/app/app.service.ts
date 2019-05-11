import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { App, APPS } from '@core/app/components/apps/apps';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private $apps: BehaviorSubject<App[]> = new BehaviorSubject(APPS);

  public apps: Observable<App[]> = this.$apps.asObservable();
  public active: Observable<App[]> = this.apps.pipe(
    map(apps => apps.filter(app => app.active))
  );

  private update(operation: (app: App) => void) {
    APPS.forEach(operation);
    this.$apps.next(APPS);
  }

  activate(id: number): void {
    this.update(app => {
      if (app.id === id) {
        app.active = true;
        this.select(id, 'window');
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

  updateIndex(id: number): number {
    this.update(app => {
      if (app.id !== id && app.selected.index > 0) {
        app.selected.index = app.selected.index - 1;
      }
    });

    return APPS.length;
  }

  select(id?: number, type?: string): void {
    this.update(
      id && type
      ? app => {
        const found = (app.id === id);

        app.selected[type] = found;

        if (found && type === 'window') {
          app.selected.index = this.updateIndex(id);
        }
      }
      : app => app.selected.icon = app.selected.window = false
    );
  }
}
