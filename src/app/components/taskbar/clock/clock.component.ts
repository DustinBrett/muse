import { Component } from '@angular/core';
import { TIMEZONE_OFFSET } from '../../../../config';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent {
  private MINUTE_MS = 60000;
  private HOUR_MS = this.MINUTE_MS * 60;

  public time = this.getTime();

  constructor() {
    setInterval(this.updateTime.bind(this), 1000);
  }

  getUTC(): number {
    const now = new Date();

    return now.getTime() + (now.getTimezoneOffset() * this.MINUTE_MS);
  }

  getTime(): string {
    const now = new Date(this.getUTC() + (this.HOUR_MS * TIMEZONE_OFFSET));
    const hour24 = now.getHours();
    const morning = hour24 < 12;
    const noon = hour24 === 12;
    const hour = morning || noon ? hour24 : hour24 - 12;
    const minute = now.getMinutes().toString().padStart(2, '0');
    const second = now.getSeconds().toString().padStart(2, '0');

    return `${hour}:${minute}:${second} ${morning ? 'AM' : 'PM'}`;
  }

  updateTime() {
    this.time = this.getTime();
  }
}
