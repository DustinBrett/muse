import { Component } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent {
  private user = {
    birthday: {
      month: 'November',
      date: 26,
      year: 1985
    }
  };

  public date = this.getDate();
  public time = this.getTime();

  constructor() {
    setInterval(() => this.time = this.getTime(), 1000);
  }

  getAge(age: number): string {
    const ordinals = ['th', 'st', 'nd', 'rd'];
    const x = age % 100;

    return age + (ordinals[(x - 20) % 10] || ordinals[x] || ordinals[0]);
  }

  getDate(): string {
    const now = new Date();

    const month = now.toLocaleString('default', { month: 'long' });
    const date = now.getDate();
    const year = now.getFullYear();
    const weekday = now.toLocaleString('en-us', { weekday: 'long' });

    const fullDate = `${month} ${date}, ${year}\r\n${weekday}`;

    const birthday = (
      month === this.user.birthday.month &&
      date === this.user.birthday.date
    );

    if (birthday) {
      return `
        Happy ${this.getAge(year - this.user.birthday.year)} Birthday!!!\r\n\r\n${fullDate}
      `;
    }

    return fullDate;
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
