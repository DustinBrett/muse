import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { DesktopComponent } from './desktop/desktop.component';
import { DesktopIconComponent } from './desktop/icon/icon.component';
import { TaskbarComponent } from './taskbar/taskbar.component';
import { TaskbarIconComponent } from './taskbar/icon/icon.component';
import { ClockComponent } from './taskbar/clock/clock.component';
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
