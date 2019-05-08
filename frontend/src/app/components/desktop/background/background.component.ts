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

  private dustCloudCount = 5; // TODO: Avg in galaxy?
  private colorRange = [0, 60, 240]; // TODO: Based on top 10 avg intesities for stars in universe
  private colorRangeIndexCount = this.colorRange.length - 1;

  public width = window.innerWidth;
  public height = window.innerHeight;
  public dustClouds = this.getBackgroundDustClouds();

  // TODO: Proportational to screen size and distrubtion of stars in universe based on latest information
  private starCount = (this.width * this.height) * 0.0025;

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  ngAfterViewInit() {
    const context = this.background.nativeElement.getContext('2d');

    for (let i = 0; i < this.starCount; i++) {
      this.drawStar(
        context,
        this.getStarCoordinates(),
        this.getStarRadius(),
        this.getStarColor(), // TODO: What kind of variation in color is there for stars in our galaxy?
        this.getStarBrightness() // TODO: What does saturation coerlate to then use known universe avg's
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
    saturation: number
  ) {
    ctx.beginPath();
    ctx.arc(coordinates.x, coordinates.y, radius, 0, 360);
    ctx.fillStyle = `hsl(${hue}, ${saturation}%, 88%)`;
    ctx.fill();
  }

  getStarCoordinates(): Coordinates {
    return {
      x: Math.random() * this.width,
      y: Math.random() * this.height
    };
  }

  getStarRadius(): number {
    return Math.random() * 1.2;
  }

  getStarColor(): number {
    return this.colorRange[this.getRandom(0, this.colorRangeIndexCount)];
  }

  getStarBrightness(): number {
    return this.getRandom(50, 100);
  }

  getBackgroundDustClouds(): SafeStyle {
    const dustClouds = [];

    for (let i = 0; i < this.dustCloudCount; i++) {
      dustClouds.push(this.getRandomRadialGradient());
    }

    return this.sanitizer.bypassSecurityTrustStyle(dustClouds.join(', '));
  }

  getRandomRadialGradient() {
    return `radial-gradient(
      ${ this.getRandomPosition() },
      ${ this.getRandomColor() },
      ${ this.getRandomColor() }
    )`;
  }

  getRandomColor(min = 5, max = 25): string {
    const transparent = this.getRandom(0, 2) === 1; // 33%

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
