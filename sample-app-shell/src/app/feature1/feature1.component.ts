import {Component, OnInit} from '@angular/core';
import { IDynamicMicroComponentInput } from '../../shared/dynamic-micro/dynamic-micro.component';

@Component({
  selector: 'feature1',
  templateUrl: './feature1.component.html'
})
export class Feature1Component implements OnInit {
  dynamicInput: IDynamicMicroComponentInput | undefined;

  constructor() {
  }

  ngOnInit(): void {
    this.setDynamicComponentInput();
  }

  private setDynamicComponentInput(): void {
    setTimeout(() => {
      this.dynamicInput = {
        moduleName: 'Feature1Module',
        componentName: 'Feature1Component'
      };
    });
  }
}
