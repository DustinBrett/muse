import { Component } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent {
  public time = this.getTime();

  constructor() {
    setInterval(() => this.time = this.getTime(), 1000);
  }

  getTime(): string {
    const now = new Date();

    const hour24 = now.getHours();

    const morning = hour24 < 12;
    const noon = hour24 === 12;

    const hour = morning || noon ? hour24 ? hour24 : 12 : hour24 - 12;
    const minute = now.getMinutes().toString().padStart(2, '0');
    const second = now.getSeconds().toString().padStart(2, '0');

    return `${hour}:${minute}:${second} ${morning ? 'AM' : 'PM'}`;
  }
}
