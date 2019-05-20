import { Component, OnInit } from '@angular/core';
import { AppService } from './services/app/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent implements OnInit {
  private readonly startupIds: number[] = [];

  constructor(
    private readonly appService: AppService
  ) { }

  ngOnInit() {
    this.startupIds.forEach(id => {
      this.appService.activate(id);
    });
  }
}
