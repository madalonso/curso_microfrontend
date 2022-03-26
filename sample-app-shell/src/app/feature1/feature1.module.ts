import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Feature1Component } from './feature1.component';
import { Feature1RoutingModule } from './feature1-routing.module';
import { DynamicMicroModule } from '../../shared/dynamic-micro/dynamic-micro.module';

@NgModule({
  declarations: [Feature1Component],
  imports: [
    CommonModule,
    Feature1RoutingModule,
    DynamicMicroModule
  ]
})
export class Feature1Module { }
