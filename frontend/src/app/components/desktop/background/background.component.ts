import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

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

  private readonly colorRange = [0, 60, 240];
  private readonly colorRangeIndexCount = this.colorRange.length - 1;

  public readonly width = window.innerWidth;
  public readonly height = window.innerHeight;

  ngAfterViewInit(): void {
    this.createBackground();
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

  getStarCoordinates(context: CanvasRenderingContext2D): Coordinates {
    return {
      x: Math.random() * context.canvas.width,
      y: Math.random() * context.canvas.height
    };
  }

  createBackground(): void {
    const canvas = this.background.nativeElement as HTMLCanvasElement;

    const height = window.innerHeight;
    const width = window.innerWidth;

    const context = canvas.getContext('2d');
    const starCount = (width * height) * 0.004;

    canvas.width = width;
    canvas.height = height;

    context.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < starCount; i++) {
      this.drawStar(
        context,
        this.getStarCoordinates(context),
        Math.random() * (this.getRandom(7.5, 15) / 10),
        this.colorRange[this.getRandom(0, this.colorRangeIndexCount)],
        this.getRandom(50, 100),
        this.getRandom(85, 100)
      );
    }
  }
}
