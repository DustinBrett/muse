import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BackgroundComponent } from './background/background.component';
import { DesktopComponent } from './desktop/desktop.component';
import { TaskbarComponent } from './taskbar/taskbar.component';
import { IconComponent } from './desktop/icon/icon.component';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    DesktopComponent,
    IconComponent,
    TaskbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
