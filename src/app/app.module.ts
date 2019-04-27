import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { DesktopComponent } from './components/desktop/desktop.component';
import { DesktopIconComponent } from './components/desktop/icon/icon.component';
import { TaskbarComponent } from './components/taskbar/taskbar.component';
import { TaskbarIconComponent } from './components/taskbar/icon/icon.component';
import { ClockComponent } from './components/taskbar/clock/clock.component';
import { TooltipDirective } from './directives/tooltip.directive';

@NgModule({
  declarations: [
    AppComponent,
    DesktopComponent,
    DesktopIconComponent,
    TaskbarComponent,
    TaskbarIconComponent,
    ClockComponent,
    TooltipDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
