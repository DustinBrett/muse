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
    const hour = this.padNumber(morning || noon ? hour24 : hour24 - 12);
    const minute = this.padNumber(now.getMinutes());
    const second = this.padNumber(now.getSeconds());

    return `${hour}:${minute}:${second} ${morning ? 'AM' : 'PM'}`;
  }

  padNumber(num: number): string {
    return num.toString().padStart(2, '0');
  }

  updateTime() {
    this.time = this.getTime();
  }
}
