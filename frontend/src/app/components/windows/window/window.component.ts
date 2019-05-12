import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  Inject,
  Input,
  Type,
  ViewChild
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { AppService } from '@core/app/services/app/app.service';
import { WindowComponentDirective } from '@core/app/directives/window-component/window-component.directive';

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss']
})
export class WindowComponent implements AfterViewInit {
  @Input() top: number;
  @Input() left: number;
  @Input() width: number;
  @Input() height: number;
  @Input() id: number;
  @Input() icon: string;
  @Input() title: string;
  @Input() component: Type<Component>;
  @Input() selected: boolean;
  @Input() minimized: boolean;
  @Input() index: number;

  @ViewChild(WindowComponentDirective) windowComponent: WindowComponentDirective;

  private titleBarHeight = 30;
  private titleBarIconWidth = 29;
  private titleBarButtonWidth = 114;
  private titleBarTextButtonPadding = 5;
  private titleBarTextWidthPadding = this.titleBarIconWidth + this.titleBarButtonWidth + this.titleBarTextButtonPadding;

  public body: HTMLBodyElement;

  public titleBarTextWidth: string;
  public componentHeight: string;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private appService: AppService,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
    this.body = this.document.body as HTMLBodyElement;
  }

  onMouseDown(): void {
    this.appService.select.window(this.id);
  }

  minimize(): void {
    this.appService.minimize(this.id);
  }

  close(): void {
    this.appService.deactivate(this.id);
  }

  onResize(event) {
    this.updateDimensions(event.host.offsetWidth, event.host.offsetHeight);
  }

  ngAfterViewInit() {
    this.updateDimensions();

    this.windowComponent.viewContainerRef.clear();
    this.windowComponent.viewContainerRef.createComponent(
      this.componentFactoryResolver.resolveComponentFactory(this.component)
    );
  }

  updateDimensions(width = this.width, height = this.height) {
    this.titleBarTextWidth = `${ width - this.titleBarTextWidthPadding }px`;
    this.componentHeight = `${ height - this.titleBarHeight }px`;
  }
}
