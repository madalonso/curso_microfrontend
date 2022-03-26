import {Component, ComponentRef, Input, OnInit, Output, ViewChild, ViewContainerRef} from '@angular/core';
import { AppService } from '../../app/app.service';

export interface IDynamicMicroComponentInput {
  moduleName: string;
  componentName: string;
  componentInput?: {
    name: string;
    value: any;
  };
}

export interface IDynamicMicroComponentOutput {
  name: string;
  subscriptionCallback: ($event: any) => void;
}

@Component({
  selector: 'dynamic-micro-component',
  template: `<div #view></div>`
})
export class DynamicMicroComponent implements OnInit {

  @ViewChild('view', { read: ViewContainerRef})
  view: ViewContainerRef | undefined;

  @Input()
  input: IDynamicMicroComponentInput | undefined;

  @Output()
  output?: IDynamicMicroComponentOutput;

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    const self = this;
    setTimeout(() => {
      if (self.input) {
        self.appService.getDynamicModule(self.input.moduleName)
          .then(() => {
            self.renderDynamicComponent();
          });
      }
    });
  }

  private renderDynamicComponent(): void {
    const self = this;
    if (self.input && self.input.moduleName && self.input.componentName) {
      self.appService.getCompiledComponent(self.input.moduleName, self.input.componentName)
        .then((cmpRef: ComponentRef<any>) => {
          if (!cmpRef) {
            return;
          }
          if (self.input && self.input.componentInput) {
            cmpRef.instance[self.input.componentInput.name] = self.input.componentInput.value;
          }
          if (self.output ) {
            cmpRef.instance[self.output.name].subscribe(self.output.subscriptionCallback);
          }
          if (self.view) {
            self.view.clear();
            self.view.insert(cmpRef.hostView);
          }
        });
    }
  }
}
