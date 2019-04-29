import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { DesktopComponent } from './components/desktop/desktop.component';
import { DesktopIconComponent } from './components/desktop/icon/icon.component';
import { TaskbarComponent } from './components/taskbar/taskbar.component';
import { TaskbarIconComponent } from './components/taskbar/icon/icon.component';
import { ClockComponent } from './components/taskbar/clock/clock.component';
import { WindowsComponent } from './components/windows/windows.component';
import { WindowComponent } from './components/windows/window/window.component';

import { TooltipDirective } from './directives/tooltip.directive';

import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';

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

    TooltipDirective
  ],
  imports: [
    BrowserModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
