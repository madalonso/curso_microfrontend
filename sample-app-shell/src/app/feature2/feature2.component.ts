import {Component, OnInit} from '@angular/core';
import { IDynamicMicroComponentInput } from '../../shared/dynamic-micro/dynamic-micro.component';

@Component({
  selector: 'feature2',
  templateUrl: './feature2.component.html'
})
export class Feature2Component implements OnInit {
  dynamicInput: IDynamicMicroComponentInput | undefined;

  constructor() {
  }

  ngOnInit(): void {
    this.setDynamicComponentInput();
  }

  private setDynamicComponentInput(): void {
    setTimeout(() => {
      this.dynamicInput = {
        moduleName: 'Feature2Module',
        componentName: 'Feature2Component'
      };
    });
  }
}
