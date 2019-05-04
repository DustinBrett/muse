import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { DesktopComponent } from './components/desktop/desktop.component';
import { DesktopIconComponent } from './components/desktop/icon/icon.component';
import { TaskbarComponent } from './components/taskbar/taskbar.component';
import { TaskbarIconComponent } from './components/taskbar/icon/icon.component';
import { ClockComponent } from './components/taskbar/clock/clock.component';
import { WindowsComponent } from './components/windows/windows.component';
import { WindowComponent } from './components/windows/window/window.component';
import { SvgComponent } from './components/svg/svg.component';
import { SvgDefinitionsComponent } from './components/svg/definitions/definitions.component';

import { BrowserModule } from '@angular/platform-browser';
import { AngularDraggableModule } from 'angular2-draggable';

@NgModule({
  declarations: [
    AppComponent,

    DesktopComponent,
    DesktopIconComponent,
    TaskbarComponent,
    TaskbarIconComponent,
    ClockComponent,
    WindowsComponent,
    WindowComponent,
    SvgComponent,
    SvgDefinitionsComponent
  ],
  imports: [
    BrowserModule,
    AngularDraggableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
