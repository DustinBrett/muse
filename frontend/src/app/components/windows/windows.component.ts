import { Component } from '@angular/core';
import { AppService } from '@core/app/services/app/app.service';

@Component({
  selector: 'app-windows',
  templateUrl: './windows.component.html',
  styleUrls: []
})
export class WindowsComponent {
  public apps = this.appService.active;
  public default = {
    position: {
      top: 200,
      left: 200
    },
    dimensions: {
      width: 200,
      height: 200
    }
  };

  constructor(
    private appService: AppService
  ) { }
}
