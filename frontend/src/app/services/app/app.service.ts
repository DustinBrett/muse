import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { App, APPS } from '@core/apps';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private $apps: BehaviorSubject<App[]> = new BehaviorSubject(APPS);
  public apps: Observable<App[]> = this.$apps.asObservable();
  public active: Observable<App[]> = this.apps.pipe(
    map(apps => apps.filter(app => app.active))
  );

  activate(id: number): void {
    APPS.forEach(app => {
      if (app.id === id) {
        app.active = true;
        this.select(id, 'window');
      }
    });
    this.$apps.next(APPS);
  }

  deactivate(id: number): void {
    APPS.forEach(app => app.active = app.id === id ? false : app.active);
    this.$apps.next(APPS);
  }

  select(id?: number, type?: string): void {
    if (id) {
      APPS.forEach(app => app.selected[type] = app.id === id);
    } else {
      APPS.forEach(app => app.selected.icon = app.selected.window = false);
    }
    this.$apps.next(APPS);
  }
}
