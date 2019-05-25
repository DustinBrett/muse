import {
  Component,
  ComponentFactoryResolver,
  Inject,
  Input,
  OnInit,
  Type,
  ViewChild
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { AppService } from '@core/app/services/app/app.service';
import { WindowComponentDirective } from '@core/app/directives/window-component/window-component.directive';
import { IResizeEvent } from 'angular2-draggable/lib/models/resize-event';

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss']
})
export class WindowComponent implements OnInit {
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

  @ViewChild(WindowComponentDirective, { static: true }) windowComponent: WindowComponentDirective;

  private readonly titleBarHeight = 30;
  private readonly titleBarIconWidth = 29;
  private readonly titleBarButtonWidth = 114;
  private readonly titleBarTextButtonPadding = 5;
  private readonly titleBarTextWidthPadding =
    this.titleBarIconWidth + this.titleBarButtonWidth + this.titleBarTextButtonPadding;

  public body: HTMLBodyElement;

  public titleBarTextWidth: string;
  public componentHeight: string;

  constructor(
    @Inject(DOCUMENT) private readonly document: Document,
    private readonly appService: AppService,
    private readonly componentFactoryResolver: ComponentFactoryResolver
  ) {
    this.body = this.document.body as HTMLBodyElement;
  }

  ngOnInit(): void {
    this.updateDimensions();

    this.windowComponent.viewContainerRef.clear();
    this.windowComponent.viewContainerRef.createComponent(
      this.componentFactoryResolver.resolveComponentFactory(this.component)
    );
  }

  onResize(event: IResizeEvent): void {
    const resizeHandle = event.host as HTMLDivElement;

    this.updateDimensions(resizeHandle.offsetWidth, resizeHandle.offsetHeight);
  }

  selectWindow(): void {
    this.appService.select.window(this.id);
  }

  minimize(): void {
    this.appService.minimize(this.id);
  }

  close(): void {
    this.appService.deactivate(this.id);
  }

  updateDimensions(width = this.width, height = this.height): void {
    this.titleBarTextWidth = `${ width - this.titleBarTextWidthPadding }px`;
    this.componentHeight = `${ height - this.titleBarHeight }px`;
  }
}
