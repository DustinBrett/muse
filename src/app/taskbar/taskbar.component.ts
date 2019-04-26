import { Component, OnInit } from '@angular/core';

const TIMEZONE_OFFSET = -7;
const MINUTE_MS = 60000;
const HOUR_MS = MINUTE_MS * 60;

@Component({
  selector: 'app-taskbar',
  templateUrl: './taskbar.component.html',
  styleUrls: ['./taskbar.component.scss']
})
export class TaskbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.setTime();
    setInterval(this.setTime, 1000);
  }

  setTime() {
    const now = new Date();
    const utc = now.getTime() + (now.getTimezoneOffset() * MINUTE_MS);
    const time = new Date(utc + (HOUR_MS * TIMEZONE_OFFSET)).toLocaleTimeString();

    document.getElementById('time').innerHTML = time;
  }

}
