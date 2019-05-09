import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

interface Coordinates {
  x: number;
  y: number;
}

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent implements AfterViewInit {
  @ViewChild('background') background: ElementRef;

  private dustCloudCount = 3;
  private colorRange = [0, 60, 240];
  private colorRangeIndexCount = this.colorRange.length - 1;

  public width = window.innerWidth;
  public height = window.innerHeight;
  public dustClouds = this.getBackgroundDustClouds();

  private starCount = (this.width * this.height) * 0.005;

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  ngAfterViewInit(): void {
    const context = this.background.nativeElement.getContext('2d');

    for (let i = 0; i < this.starCount; i++) {
      this.drawStar(
        context,
        this.getStarCoordinates(),
        this.getStarRadius(),
        this.getStarHue(),
        this.getStarSaturation(),
        this.getStarLightness()
      );
    }
  }

  getRandom(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  drawStar(
    ctx: CanvasRenderingContext2D,
    coordinates: Coordinates,
    radius: number,
    hue: number,
    saturation: number,
    lightness: number
  ): void {
    ctx.beginPath();
    ctx.arc(coordinates.x, coordinates.y, radius, 0, 360);
    ctx.fillStyle = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    ctx.fill();
  }

  getStarCoordinates(): Coordinates {
    return {
      x: Math.random() * this.width,
      y: Math.random() * this.height
    };
  }

  getStarRadius(): number {
    return Math.random() * (this.getRandom(7.5, 15) / 10);
  }

  getStarHue(): number {
    return this.colorRange[this.getRandom(0, this.colorRangeIndexCount)];
  }

  getStarSaturation(): number {
    return this.getRandom(50, 100);
  }

  getStarLightness(): number {
    return this.getRandom(85, 100);
  }

  getBackgroundDustClouds(): SafeStyle {
    const dustClouds = [];

    for (let i = 0; i < this.dustCloudCount; i++) {
      dustClouds.push(this.getRandomRadialGradient());
    }

    return this.sanitizer.bypassSecurityTrustStyle(dustClouds.join(', '));
  }

  getRandomRadialGradient(): string {
    const color1 = this.getRandomColor(5, 10);
    const color2 = color1 !== 'transparent' ? 'transparent' : this.getRandomColor(10, 15, false);

    return `radial-gradient(
      ${ this.getRandomPosition() },
      ${ color1 },
      ${ color2 }
    )`;
  }

  getRandomColor(min = 5, max = 15, allowTransparent = true): string {
    const transparent = allowTransparent ? this.getRandom(0, 2) === 1 : false;

    if (transparent) {
      return 'transparent';
    } else {
      const darkColor = this.getRandom(min, max);

      return `rgb(${darkColor}, ${darkColor}, ${darkColor})`;
    }
  }

  getRandomPosition(): string {
    return `at ${ this.getRandom(0, 100) }% ${ this.getRandom(0, 100) }%`;
  }
}
