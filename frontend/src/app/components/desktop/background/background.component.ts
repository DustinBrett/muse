import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

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

  private starCount = 600; // TODO: Proportational to screen size and distrubtion of stars in universe based on latest information
  private colorRange = [0, 60, 240]; // TODO: Based on top 10 avg intesities for stars in universe
  private colorRangeIndexCount = this.colorRange.length - 1;

  public width = window.innerWidth;
  public height = window.innerHeight;

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
}
