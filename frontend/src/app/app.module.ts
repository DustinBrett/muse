import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { SvgComponent } from './components/svg/svg.component';
import { SvgDefinitionsComponent } from './components/svg/definitions/definitions.component';

import { BackgroundComponent } from './components/desktop/background/background.component';
import { DesktopComponent } from './components/desktop/desktop.component';
import { DesktopIconComponent } from './components/desktop/icon/icon.component';
import { TaskbarComponent } from './components/taskbar/taskbar.component';
import { TaskbarIconComponent } from './components/taskbar/icon/icon.component';
import { TaskbarEntryComponent } from './components/taskbar/entry/entry.component';
import { ClockComponent } from './components/taskbar/clock/clock.component';
import { WindowsComponent } from './components/windows/windows.component';
import { WindowComponent } from './components/windows/window/window.component';
import { WindowComponentDirective } from './directives/window-component/window-component.directive';

import { BlogComponent } from './components/apps/blog/blog.component';
import { BlogEntryComponent } from './components/apps/blog/entry/entry.component';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularDraggableModule } from 'angular2-draggable';

@NgModule({
  declarations: [
    AppComponent,

    SvgComponent,
    SvgDefinitionsComponent,

    BackgroundComponent,
    DesktopComponent,
    DesktopIconComponent,
    TaskbarComponent,
    TaskbarIconComponent,
    TaskbarEntryComponent,
    ClockComponent,
    WindowsComponent,
    WindowComponent,
    WindowComponentDirective,

    BlogComponent,
    BlogEntryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularDraggableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
