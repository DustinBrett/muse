import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

const TIMEZONE_OFFSET = -7; // Pacific Daylight Time
const MINUTE_MS = 60000;
const HOUR_MS = MINUTE_MS * 60;

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements AfterViewInit {
  @ViewChild('time') time: ElementRef;

  constructor() { }

  ngAfterViewInit() {
    this.setTime();
    setInterval(this.setTime.bind(this), 1000);
  }

  padNumber(n: number): string {
    return n.toString().padStart(2, '0');
  }

  getUTC(): number {
    const now = new Date();

    return now.getTime() + (now.getTimezoneOffset() * MINUTE_MS);
  }

  setTime(): void {
    const now = new Date(this.getUTC() + (HOUR_MS * TIMEZONE_OFFSET));
    const hour24 = now.getHours();
    const morning = hour24 <= 12;
    const hour = this.padNumber(morning ? hour24 : hour24 - 12);
    const minute = this.padNumber(now.getMinutes());
    const second = this.padNumber(now.getSeconds());

    this.time.nativeElement.innerHTML = `${hour}:${minute}:${second} ${morning ? 'AM' : 'PM'}`;
  }
}
