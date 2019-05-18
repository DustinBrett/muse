import { Component } from '@angular/core';
import { AppService } from '@core/app/services/app/app.service';

@Component({
  selector: 'app-windows',
  templateUrl: './windows.component.html',
  styleUrls: []
})
export class WindowsComponent {
  public readonly apps$ = this.appService.active$;
  public readonly default = {
    position: {
      top: 150,
      left: 150
    },
    dimensions: {
      width: 500,
      height: 370
    }
  };

  constructor(
    private readonly appService: AppService
  ) { }
}
