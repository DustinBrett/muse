import { Component, OnInit } from '@angular/core';
import { SessionService } from '@core/app/services/session/session.service';

@Component({
  selector: 'app-windows',
  templateUrl: './windows.component.html',
  styleUrls: []
})
export class WindowsComponent implements OnInit {
  public windows;
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
    private sessionService: SessionService
  ) { }

  ngOnInit() {
    this.windows = this.sessionService.session.active.windows;
  }
}
